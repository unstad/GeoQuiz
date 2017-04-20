module.exports = {
    db: 'mongodb://localhost/mean-book',
    sessionSecret: 'developmentSessionSecret',
    facebook: {
        clientID: '1656796707959244',
        clientSecret: '44f9a08f6d046113e8afb796eca58fdf',
        callbackURL: 'http://localhost:3000/oauth/facebook/callback'
    },
    twitter: {
        clientID: 'B70anoJT2NtaRYcoBmL5Of2PA',
        clientSecret: 's4XUxRO2FSopFiJZwm5skiO0EX7EOHjnfJrNGHg9sB5JE133od',
        callbackURL: 'http://localhost:3000/oauth/twitter/callback'
    },
    google: {
        clientID: '712726120684-8mp7k156vj4dimmeqdu2fl9t62dlcr9n.apps.googleusercontent.com',
        clientSecret: 'xt926snkl0UowcCTi32TNFxZ',
        callbackURL: 'http://localhost:3000/oauth/google/callback'
    }
};