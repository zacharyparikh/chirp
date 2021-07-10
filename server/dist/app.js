"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
const PORT = 4000;
app.use(cors_1.default());
app.get('/', (req, res) => {
    res.send("Hello, World! Now with changes!");
});
// connect to db
mongoose_1.default.connect("mongodb://127.0.0.1:27017/accounts", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose_1.default.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once("open", function () {
    console.log("Connection with MongoDB was successful");
});
const userSchema = new mongoose_1.default.Schema({
    name: String,
    age: Number,
    password: String,
    email: { type: String, unique: true },
}, { timestamps: { createdAt: 'created_at' } });
userSchema.set('upsert', true);
userSchema.methods.greetUser = function () {
    const greeting = "Greetings " + this.name + "!";
    console.log(greeting);
};
const userModel = mongoose_1.default.model('User', userSchema);
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
