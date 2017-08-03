const BillingCycle = require('./billingCycle');
const _ = require('lodash');

BillingCycle.methods(['get', 'post', 'put', 'delete']);
BillingCycle.updateOptions({new: true, runValidators: true});

BillingCycle.after('post', sendErrorsOnNext).after('put', sendErrorsOnNext);

function sendErrorsOnNext(req, res, next){
	//bundle is part of node-restful. bundle have all the errors, persisting values.
	const bundle = res.locals.bundle;

	//if bundle.erros exist, I want to parse it.
	if(bundle.errors){
		//parseError is a method that we will create. and that method will return an array.
		var errors = parseErrors(bundle.errors);

		res.status(500).json({errors});
	} else {
		next();
	}
}

function parseErrors(nodeRestfulErrors){
	const errors = [];
	//forIn method from underscore
	//we are parsing our object and just extracting the errors that we need.
	_.forIn(nodeRestfulErrors, error => errors.push(error.message));
	return errors;
}

BillingCycle.route('count', function(req, res, next){
	BillingCycle.count(function(error, value){
		if(error){
			res.status(500).json({errors: [error]})
		} else {
			res.json({value});
		}
	});
});

module.exports = BillingCycle; 