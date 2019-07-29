var mongoose = require('mongoose');

const mlabURI = 'mongodb://localhost:27017/test_1'
const dbName = 'test_1';

const con = mongoose.connect(mlabURI, (error) => {
	if(error){
		console.log("Error " + error);
	}else{
		console.log("Connected successfully to server")
	}
});

module.exports = con;