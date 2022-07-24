import User from "../schema/user-schema.js";


export const addUser = async (request, response) => {
    
    const user = request.body;

    user.dateOfBirth = new Date(user.dateOfBirth);
    
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

export const getUser = async (request, response) => {
    // console.log(request.params.id);
    try {
        // const user = await User.find({_id: request.params.id});
        const user = await User.findById(request.params.id);
        response.status(200).json(user);
    } catch (e) {
        response.status(404).json({message: e.message});
    }
}


export const editUser = async (request, response) => {
    let user = request.body;

    const editUser = new User(user);

    try {
        await User.updateOne({ _id: request.params.id }, editUser);
        response.status(201).json(editUser);
    } catch (e) {
        response.status(409).json({message: e.message});
    }
}