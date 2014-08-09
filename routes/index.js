exports.index = function (req, res) {
  res.render('index', { title: 'Kelsey Breseman' });
};

exports.writing = function (req, res) {
  res.render('writing', { title: 'Writing'});
};

exports.speaking = function (req, res) {
  res.render('speaking', { title: 'Speaking'});
};

exports.mentoring = function (req, res) {
  res.render('mentoring', { title: 'Mentoring'});
};

exports.coding = function (req, res) {
  res.render('coding', { title: 'Coding'});
};

exports.learntocode = function (req, res) {
	res.render('learntocode', { title: 'Learn to Code'});
};

exports.cmd101mac = function (req, res) {
	res.render('cmd101mac', {title: 'Command Line 101 for Mac'});
};

exports.cmd101win = function (req, res) {
	res.render('cmd101win', {title: 'Command Line 101 for Windows'});
};

exports.cadence = function (req, res) {
	res.redirect('http://peaceful-atoll-3426.herokuapp.com/');
};