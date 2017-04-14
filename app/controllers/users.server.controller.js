const User = require('mongoose').model('User');
const passport = require('passport');

//returns a unified error message from a mongoose error object
function getErrorMessage(err) {
    let message = ' ';

    if (err.code) {
        switch (err.code) {
            case 11000:
            case 11001:
                message = 'Username already exists';
                break;
            default:
                message = 'Something went wrong';
        }
    }else {
        for (var errName in err.errors) {
            if (err.errors[errName].message) message = 
            err.errors[errName].message;
        }
    }
    return message;
};

//renders signin page
exports.renderSignin = function(req, res, next) {
    if (!req.user) {
        res.render('signin', {
            title: 'Sign-in Form',
            messages: req.flash('error') || req.flash('info')
        });
    }else {
        return res.redirect('/');
    }
};


//renders signup page
exports.renderSignup = function(req, res, next) {
    if (!req.user) {
        res.render('signup', {
            title: 'Sign-up Form',
            messages: req.flash('error')
        });
    } else {
        return res.redirect('/');
    }
};

//Uses user model to create new users
exports.signup = function(req, res, next) {
    if (!req.user) {
        const user = new User(req.body);
        var message=null;
        user.provider = 'local';

        //tries to save to mongodb
        user.save((err) => {
            if (err) {
                const message = getErrorMessage(err);

                req.flash('error', message);
                return res.redirect('/signup');
            }
            req.login(user, (err)=> {
                if (err) return next(err);
                return res.redirect('/');
            });
        });
    }else {
        return res.redirect('/');
    }
};

exports.signout = function(req, res) {
    req.logout();
    res.redirect('/');
};

exports.saveOAuthUserProfile = function(req, profile, done) {
    User.findOne({
        provider: profile.provider,
        providerId: profile.providerId
    }, (err, user) => {
        if (err) {
            return done(err);
        } else {
            if (!user) {
                const possibleusername = profile.username || 
                ((profile.email) ? profile.email.split('@')[0] : '');

                User.findUniqueUsername (possibleusername, null,
                    (availableUsername) => {
                        const newUser = new User(profile);
                        newUser.username = availableUsername;

                        newUser.save((err) => {
                            return done(err, newUser);
                        });
                    });
            } else {
                return done (err, user);
            }
        }
    });
};

