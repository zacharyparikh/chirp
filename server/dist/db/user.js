"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    name: String,
    age: Number,
    password: String,
    email: { type: String, unique: true },
}, { timestamps: { createdAt: 'created_at' } });
userSchema.set('upsert', true);
userSchema.methods.greetUser = function () {
    const greeting = 'Greetings ' + this.name + '!';
    console.log(greeting);
};
const userModel = mongoose_1.default.model('User', userSchema);
