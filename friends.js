var fs = require('fs');

var csvFile = fs.readFileSync("friend_list.csv","utf8");

function csvParse(str) {
	var rows = str.split("\n");
	var header = rows.shift().split(","); //remaining rows are the data

	var parsed = []
	for (var i=0; i<rows.length;i++){
		rows[i] = rows[i].split(",");
		// for each row make a new empty object
		var entry = {};
			for (var j=0;j<header.length;j++){
				// for each heading, add the corresponding 
				// property (header[j]) and its value
				entry[header[j]] = rows[i][j];
			}
		parsed.push(entry);			
	}
	return parsed;
}

var friends = csvParse(csvFile);
module.exports.friends = friends;