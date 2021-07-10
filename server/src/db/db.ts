import mongoose from 'mongoose';

// connect to db
mongoose.connect('mongodb://127.0.0.1:27017/accounts', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => console.log('Connection with MongoDB was successful'));
