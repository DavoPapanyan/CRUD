var express = require("express");
var path = require("path");
const bodyParser = require("body-parser");
var app = express();
const mongoose = require('mongoose');
const { log } = require("console");
const connectionString = "mongodb+srv://davitpapanyan1:David28022008@cluster0.ekkgmwy.mongodb.net/Songs";


mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));

const { Schema } = mongoose;

const songSchema = new Schema({
	song: String,
	artist: String,
	time: String,
	views: String,
	year:  Number
});
const Songs = mongoose.model('Marshal Mathers', songSchema);


let songsArr = [
	["Without Me", "Eminem", "5 minutes", "1,8 Billion", 2002],
	["Hi, My Name Is", "Slim Shady", "4 minutes", "256 Million", 1999],
	["The Real Slim Shady", "Slim Shady", "4 minutes", "916 Million", 2000],
	["Godzilla", "Eminem feat. Juice WRLD", "4 minutes", "638 Million", 2020],
	["Killshot", "Eminem", "4 minutes", "472 Million", 2018]
]


db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', async () => {
	console.log('Connected to MongoDB!');
	try {
		const Track = await Songs.createCollection();

	} catch (error) {
		console.error('Error retrieving data:', error);
	} finally {
		mongoose.connection.close();
	}
});



app.listen(3000, function () {
	console.log("Example is running on port 3000");
});




// app.set("view engine", "ejs");

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.use(express.static("public"));

// app.get("/", function (req, res) {
// 	const info = [
// { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
// { name: 'Tux', organization: "Linux", birth_year: 1996},
// { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
// 	];
// 	res.render('../public/form.ejs', {
// 		obj: info
// 	});
// });





// app.post('/addName', async (req, res) => {
//   const name = req.body.name;
//   const password = req.body.password;
//   const email = req.body.email;

// 	db.once('open', async () => {


// 		try {
// 			let result = await mongoose.connection.db.collection("raps").insertOne(
// 				{song: "Without Me",
// 				 artist: "Eminem",
// 				 time: 5,
// 				 views: "1.8 B",
// 				 year: 2002})

// 			// res.render('../public/form.ejs', {
// 			// 	obj: result
// 			// });
// 		} catch (error) {
// 			console.error('Error retrieving movies:', error);
// 		} finally {
// 			mongoose.connection.close();
// 		}
// 	})
// })
