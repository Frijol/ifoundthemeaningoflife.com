var _ = require('lodash');

function standard (name) {
  return function (req, res) {
    res.render( name, { title: name });
  };
}

exports.index = function (req, res) {
  res.render('index', { title: 'Kelsey Breseman' });
};

exports.interviews = standard('interviews');

exports.adventures = standard('adventures');

exports.editing = standard('editing');

exports.writing = standard('writing');

exports.speaking = standard('speaking');

exports.mentoring = standard('mentoring');

exports.coding = standard('coding');

exports.projects = standard('projects');

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

exports.pelican = function (req, res) {
  res.render('pelican', {title: 'Pelican'});
};

exports.blog = function (req, res) {
  require('./tumblr').getPosts()
  .then(function (posts) {
    res.render('adventures', {
      title: 'Adventures',
      postsbymonth: _.groupBy(posts, function (post) {
        var d = new Date(post.timestamp*1000);
        return d.toLocaleString('en-US', { month: "long", year: 'numeric' });
      }),
      posts: posts,
      page: (parseInt(req.query.page || '1') || 1) - 1,
      pagelength: 5
    });
  });
};

exports.blogPost = function (req, res) {
  require('./tumblr').getPosts()
  .then(function (posts) {
    console.log(posts); //TODO This is the part that's not working
    var onepost = posts.filter(function (post) {
      return post.id == req.params.postid;
    })[0];
    res.render('blog', {
      title: (onepost ? onepost.title + ' | ' : 'Adventures'),
      postsbymonth: _.groupBy(posts, function (post) {
        var d = new Date(post.timestamp*1000);
        return d.toLocaleString('en-US', { month: "long", year: 'numeric' });
      }),
      posts: posts,
      onepost: onepost,
      pagelength: 5
    });
  });
};
