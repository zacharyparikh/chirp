import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const PORT = 4000;

app.use(cors());

app.get('/', (req, res) => {
  res.send("Hello, World! Now with changes!");
});

// connect to db
mongoose.connect("mongodb://127.0.0.1:27017/accounts", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once("open", function() {
  console.log("Connection with MongoDB was successful");
}); 

interface User {
  name: string;
  age: number;
  email: string;
  password: string;
  greetUser(): void;
}

const userSchema = new mongoose.Schema<User>({
  name: String,
  age: Number,
  password: String,
  email: {type: String, unique: true},
},
{ timestamps: { createdAt: 'created_at' } }
);

userSchema.set('upsert', true);

userSchema.methods.greetUser = function (this: User) {
  const greeting = "Greetings " + this.name + "!";
  console.log(greeting);
}

const userModel = mongoose.model<User>('User', userSchema);

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

