"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// connect to db
mongoose_1.default.connect('mongodb://127.0.0.1:27017/accounts', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
exports.db = mongoose_1.default.connection;
exports.db.on('error', console.error.bind(console, 'connection error:'));
exports.db.once('open', () => console.log('Connection with MongoDB was successful'));
