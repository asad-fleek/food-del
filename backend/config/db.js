import mongoose from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://asadmahmood_db_user:gXrGZgUp85fN2m91@cluster0.ogxpoq0.mongodb.net/food-del').then(()=>console.log("DB Connected"));
    
}