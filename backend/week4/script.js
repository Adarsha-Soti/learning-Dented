import express from 'express';
import path from 'path';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 
app.get('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), "home.html"));
});
app.get('/login', (req, res) => {
  res.sendFile(path.join(process.cwd(), "login.html"));
});
app.get('/test', (req, res) => {
  res.sendFile(path.join(process.cwd(), "test.json"));
});
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  res.send(`Received username = ${username}, password = ${password}`);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
