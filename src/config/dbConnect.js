import mongoose, { mongo } from "mongoose";

const connectDatabase = async () => {
    mongoose.connect(`mongodb+srv://mateusfmartini:${process.env.MONGODB_PASSWORD}@cluster0.2lhnmc4.mongodb.net/gama?
        retryWrites=true&w=majority&appName=Cluster0`)
    
    return mongoose.connection
}

export {connectDatabase}