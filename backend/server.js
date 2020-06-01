const {Client} = require('pg');
const express = require('express');
const app = express();

app.use(express.json())

const client = new Client({
	"user": "postgres",
	"password": "2404",
	"host": "localhost",
	"port": 5432,
	"database": "students"
});

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`));

app.get('/users', async (req, res) => {

	const rows = await readTodos();
	res.setHeader("content-type", "application/json");
	res.send(JSON.stringify(rows));
});
app.post('/users', async (req, res) => {
	let result = {}
	try {

		const reqJson = req.body;
		await createTodo(reqJson);
		result.success = true;
	}
	catch (error) {
		result.success = false;
	}
	finally {
		res.setHeader("content-type", "application/json");
		res.send(JSON.stringify(result));	
	}
});

app.put('/users', async (req, res) => {
	let result = {}
	try {

		const reqJson = req.body;
		await updateTodo(reqJson);
		result.success = true;
	}
	catch (error) {
		result.success = false;
	}
	finally {
		res.setHeader("content-type", "application/json");
		res.send(JSON.stringify(result));	
	}
});

app.delete('/users', async (req, res) => {
	let result = {}
	try {

		const reqJson = req.body;
		await deleteTodo(reqJson.user_id);
		result.success = true;
	}
	catch (error) {
		result.success = false;
	}
	finally {
		res.setHeader("content-type", "application/json");
		res.send(JSON.stringify(result));	
	}
});

app.listen(3000, () => console.log('server is listening on port 3000'));

start();

async function start() {
	await connect();
}

async function connect(){
	try {
		await client.connect()
		console.log('connected to db')
	}
	catch (error) {
		console.log(`failed to connetc ${error}`)
	}
}

async function readTodos() {
	try {
		const results = await client.query('SELECT * FROM users ORDER BY user_ra');
		return results.rows;
	}
	catch (error) {
		return [];
	}
}

async function createTodo(todoText){
	try {
		await client.query('INSERT INTO users (user_ra, user_name, user_email, user_cpf) VALUES ($1, $2, $3, $4)', [todoText.user_ra, todoText.user_name, todoText.user_email, todoText.user_cpf]);
		return true
	}
	catch (error) {
		return false;
	}
};

async function updateTodo(todoText) {
	try {
		await client.query('UPDATE users SET user_name = $2, user_email = $3 WHERE user_id = $1', [todoText.id, todoText.user_name, todoText.user_email]);
		return true
	}
	catch (error) {
		return false
	}
};

async function deleteTodo(id) {
	try {
		await client.query('DELETE FROM users WHERE user_id = $1', [id]);
		return true
	}
	catch (error) {
		return false
	}
};