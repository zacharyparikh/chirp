import express from "express";
import cors from "cors";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
const app = express();
const PORT = 4000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, World! Now with changes!");
});

//passport.use(new LocalStrategy((username, password, done) => {
//  User.findOne({username: username}, (err, user) => {
//    if (err) {
//      return done(err);
//    }
//
//    if (!user) {
//      return done(null, false, { message: 'Incorrect username.' });
//    }
//
//    if (!user.validPassword(password)) {
//      return done(null, false,  { message: 'Incorrect password.' });
//    }
//
//    return done(null, user);
//
//  });
//
//}));

app.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  (req, res) => res.redirect("/")
);

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
