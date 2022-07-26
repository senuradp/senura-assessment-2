import User from "../schema/user-schema.js";
import UserN from "../schema/user-schema.js";
import jwt from "jsonwebtoken";


export const loginUser = async (request, response) => {
    try {
        // const usersss = await User.findById(request.params.id);
        const user = await User.findOne({ email: request.body.email });

        if (!user) {
            response.status(203).json({ error: "Auth failed" });
        } else if (user.email == request.body.email && user.password == request.body.password) {
            console.log("Auth success");
            response.status(200).json({ message: "Login success", user: user, token: generateAccessToken(user._id, user.accountType) });
        } else {
            response.status(203).json({ error: "Auth failed" });
        }

        // response.status(200).json(user);
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}

function generateAccessToken(id, type) {
    return jwt.sign({ id: id, type: type }, process.env.TOKEN_SECRET, { expiresIn: '30d' });
}

export const addUser = async (request, response) => {
    if (request.user.type == 'admin') {

        const user = request.body;

        user.dateOfBirth = new Date(user.dateOfBirth);
        user.status=true;

        const newUser = new User(user);

        try {
            await newUser.save();
            response.status(201).json({ message: "Account added successfully", newUser: newUser, token: generateAccessToken(user._id, user.accountType) });

        } catch (e) {
            response.status(409).json({ message: e.message });
        }
    }

}


export const getUsers = async (request, response) => {
    if (request.user.type == 'admin'){
        try {
            const users = await User.find({});
            response.status(200).json(users);
        } catch (e) {
            response.status(404).json({ message: e.message });
        }
    }else{
        response.status(401).json({ message: "Not an admin" });
    }
}

export const getUser = async (request, response) => {
    // console.log(request.params.id);
    try {
        // const user = await User.find({_id: request.params.id});
        const user = await User.findById(request.params.id);
        response.status(200).json(user);
    } catch (e) {
        response.status(404).json({ message: e.message });
    }
}


export const editUser = async (request, response) => {
    let user = request.body;

    const editUser = new User(user);

    try {
        await User.updateOne({ _id: request.params.id }, editUser);
        response.status(201).json(editUser);
    } catch (e) {
        response.status(409).json({ message: e.message });
    }
}


export const deleteUser = async (request, response) => {

    try {
        await User.deleteOne({ _id: request.params.id });
        response.status(200).json({ message: "User deleted succesfully" });
    } catch (e) {
        response.status(409).json({ message: e.message });
    }
}


export const addNotes = async (request, response) => {
    if (request.user.type == 'admin') {

        const user = request.body;

        const newUser = new UserN(user);

        try {
            await newUser.save();
            response.status(201).json({ message: "Note add success", newUser: newUser, token: generateAccessToken(user._id, user.accountType) });

        } catch (e) {
            response.status(409).json({ message: e.message });
        }
    }

}