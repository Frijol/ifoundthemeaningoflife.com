
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Kelsey Breseman' });
};

exports.learntocode = function (req, res) {
	res.render('learntocode', { title: 'Learn to Code'});
}