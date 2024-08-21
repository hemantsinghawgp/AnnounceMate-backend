const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  designation: { type: String, required: true },
  uniqueId: { type: String, required: true, unique: true },
  role: { type: String, enum: ['admin', 'faculty', 'staff', 'project_staff', 'student', 'test'], required: true },
  resetPasswordToken:{ type: String},
  resetPasswordExpires: { type: Date}
});

userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

module.exports = mongoose.model('User', userSchema);