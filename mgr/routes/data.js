const Router = require('express-promise-router');
const router = new Router();

const db = require('../db');

module.exports = {
	allStock: function (req, res, next) {
		var results = [];
		res.locals.allStock = [];
		
		db.query('SELECT id, item, count FROM items ORDER BY id ASC;', [], (err, qRes) => {
			if (err) {
				//console.log(err.message);
				next(err);
			}
			
			// Stream results back one row at a time
			qRes.rows.forEach(row => {
				results.push(row);
			});
			//console.log(results);
			jsonData = JSON.stringify(results);
			res.locals.allStock = jsonData;
			next();
		});
	},
	allOrders: function (req, res, next) {
		var results = [];
		res.locals.allOrders = [];
		
		db.query('SELECT orderId, clientName, orderStatus FROM orders ORDER BY id ASC;', [], (err, qRes) => {
			if (err) {
				next(err);
			}
			
			// Stream results back one row at a time
			qRes.rows.forEach(row => {
				results.push(row);
			});
			
			jsonData = JSON.stringify(results);
			res.locals.allOrders = jsonData;
			next();
		});
	}
}