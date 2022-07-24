import mongoose from "mongoose";

import autoIncrement from "mongoose-auto-increment";

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true 
    },
    dateOfBirth: Date,
    mobile: Number,
    status: Boolean,
    password: String,
    accountType: String
});

autoIncrement.initialize(mongoose.connection);

userSchema.plugin(autoIncrement.plugin, 'user');

const user = mongoose.model('user', userSchema);

export default user;