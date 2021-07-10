"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
const PORT = 4000;
app.use(cors_1.default());
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
