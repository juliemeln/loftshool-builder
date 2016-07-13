var fs = require('fs');
var express = require('express');
var app = express();
// var exphbs = require('express-handlebars');
var bodyParser = require ('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/portfolio');

var Post = mongoose.model('Post',{
    title: String,
    date: String,
    text: String
});
//app.engine('handlebars', exphbs({defaultLayout: 'main'}));
//app.set('view engine', 'handlebars');

app.use(bodyParser.json());

app.get('/*', function(req,res) {
    res.setHeader('Content-Type', 'text/html; charset=utf8');

    console.log('получен запрос по адресу',req.url);
    var fileName = './site' + req.url;
    if (fs.existsSync(fileName)){
        var content = fs.readFileSync(fileName, {encoding: 'utf8'});
        res.whrite(content);
    } else {
        var content =fs.readFileSync('./site/404.html', {encoding: 'utf8'});
        res.status(404);
        res.whrite(content);
    }
    res.end();
});

app.post('./save', function(req,res) {
    console.log('поступил post-запрос', req.body);
    var post = new Post(req.body);
    post.save();
    res.end();
});

app.listen(9999);