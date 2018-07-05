const db = require('../db');
const Router = require('express-promise-router');
const router = new Router();

router.get('/', function (req, res) {
	res.render('index', { title: 'Hey', message: 'Hello there!'});
});

var indexRouter = require('./index');
var usersRouter = require('./users');
var stockRouter = require('./stock');
var dataRouter = require('./data');

module.exports = (app) => {
	app.use(router);
	//app.use(dataRouter);
	app.use(usersRouter);
	app.use(stockRouter);
}