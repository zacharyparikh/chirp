import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 4000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, World! Now with changes!');
});

// run().catch(err => console.log(err));

// async function run(): Promise<void> {

//   const alice = new userModel({
//     name: 'Alice',
//     age: 30,
//     password: 'password',
//     email: 'alice@wonderland.com'
//   });

//   alice.greetUser();

//   await alice.save();

//   alice.greetUser();

//   console.log(alice.name);
// }

app.listen(PORT, () => {
  console.log(`App Listening at http://localhost:${PORT}`);
});
