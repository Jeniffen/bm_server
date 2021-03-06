import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  givenName: String,
  familyName: String,
  authProvider: {
    provider: String,
    providerId: String,
  },
  picture: String,
});

mongoose.model('users', userSchema);
