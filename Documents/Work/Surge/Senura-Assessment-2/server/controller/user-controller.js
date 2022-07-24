import User from "../schema/user-schema.js";


export const addUser = async (request, response) => {
    
    const user = request.body;
    
    const newUser = new User(user);
    
    try {
        await newUser.save();
        response.status(201).json(newUser);
        
    }catch(e) {
        response.status(409).json({message: e.message});
    }
}


export const getUsers = async (request, response) => {
    try {
        const users = await User.find({});
        response.status(200).json(users);
    } catch (e) {
        response.status(404).json({message: e.message});
    }
}