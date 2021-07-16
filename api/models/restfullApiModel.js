'use strict';

var mangoose = require('mangoose');
var Schema = mangoose.Schema;
//Defining the Schema of a databse collection
var CompanySchema = new Schema({
	name: {
		Type: String,
		required: "Please enter the name value" 
	}
});
//The sample database I am connecting is companies here which got name in it 
module.exports = mangoose.model('companies', CompanySchema);