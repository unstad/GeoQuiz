exports.render = function(req, res) {
    console.log('game controller');
	res.render('game', {
		title: 'Express'
	});
};