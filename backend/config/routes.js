const express = require('express');

//passing information to a module in node
module.exports = function(server){

	// API Routes
	//Express Router
	const router = express.Router();
	//we receive server as a parameter.
	//we will pass anything that routes to /api and runs through the router
	// (second parameter) middleware 
	server.use('/api', router);

	//rotas api
	const billingCycleService = require('../api/billingCycle/billingCycleServices');
	billingCycleService.register(router, '/billingCycles');

	//billingSummary
	const billingSummaryService = require('../api/billingSummary/billingSummaryService');
	//mapping the route
	router.route('/billingSummary').get(billingSummaryService.getSummary);
}