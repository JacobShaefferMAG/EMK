const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const bcrypt = require('bcrypt');
const saltRounds = 10;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/recipes', (req, res) => {
	res.status(200).send({
		recipes: {
			test: 'this is a test'
		}
	});
});

app.post('/user/create', (req, res) => {
	let plainText = req.body.password;
	bcrypt.hash(plainText, saltRounds, (err, hash) => {
		// Store hash in DB
	});
});

app.post('/user/login', (req, res) => {
	let plainText = req.body.password;
	let username = req.body.username;
	let hash = '#'; // Get hash from database

	bcrypt.compare(plainText, hash, (err, result) => {
		// return = true if plainText is the correct password
	});
})