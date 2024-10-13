// import mongoose from "mongoose";
//  const Connection =()=>{
//     const MONGODB_URI='mongodb+srv://vishwanatha:<7760138899>@todo.rw10d.mongodb.net/?retryWrites=true&w=majority&appName=todo'
//     mongoose.connect(MONGODB_URI,{useNewUrlParser:true});

//     mongoose.connection.on('connected',()=>{
//         console.log('DATABASE CONNECTED SUCCESSFULLY');
//     })
//     mongoose.connection.on('disconnected', ()=>{
//         console.log('database diconnected');
//     })
//     mongoose.connection.on('error',()=>{
//         console.log('Error while connecting with the database', error.message);
//     })
// }
// export default Connection;
import mongoose from "mongoose";
import dotenv from 'dotenv'; //TOHIDE PASSWORD
dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {
    const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@todo.rw10d.mongodb.net/?retryWrites=true&w=majority&appName=todo`;
    
    mongoose.connect(MONGODB_URI);

    mongoose.connection.on('connected', () => {
        console.log('DATABASE CONNECTED SUCCESSFULLY');
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    });

    mongoose.connection.on('error', (error) => {
        console.log('Error while connecting with the database', error.message); 
    });
}

export default Connection;
