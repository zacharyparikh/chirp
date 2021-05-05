import express from 'express';

const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
  res.send("Hello, World! Now with changes!");
});

app.listen(PORT, () => {
  console.log(`App Listening at http://localhost:${PORT}`);
});

