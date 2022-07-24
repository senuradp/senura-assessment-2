import mongoose from "mongoose";

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@assessment-senura-shard-00-00.9ejdy.mongodb.net:27017,assessment-senura-shard-00-01.9ejdy.mongodb.net:27017,assessment-senura-shard-00-02.9ejdy.mongodb.net:27017/?ssl=true&replicaSet=atlas-53j7f4-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true})
        console.log("Database connected successfully");
    }
    catch (e) {
        console.log(`Error while connecting to database`, e);
    }
}      

export default Connection;