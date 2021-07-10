import mongoose from 'mongoose';

interface User {
  name: string;
  age: number;
  email: string;
  password: string;
  greetUser(): void;
}

const userSchema = new mongoose.Schema<User>(
  {
    name: String,
    age: Number,
    password: String,
    email: { type: String, unique: true },
  },
  { timestamps: { createdAt: 'created_at' } }
);

userSchema.set('upsert', true);

userSchema.methods.greetUser = function (this: User) {
  const greeting = 'Greetings ' + this.name + '!';
  console.log(greeting);
};

const userModel = mongoose.model<User>('User', userSchema);
