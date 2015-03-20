var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon(__dirname + '/public/images/favicon.ico'));
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/adventures', routes.adventures);
app.get('/interviews', routes.interviews);
app.get('/editing', routes.editing);
app.get('/writing', routes.writing);
app.get('/speaking', routes.speaking);
app.get('/mentoring', routes.mentoring);
app.get('/coding', routes.coding);
app.get('/projects', routes.projects);
app.get('/learntocode', routes.learntocode);
app.get('/learntocode/cmd101mac', routes.cmd101mac);
app.get('/learntocode/cmd101win', routes.cmd101win);
app.get('/cadence', routes.cadence);
app.get('/pelican', routes.pelican);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
