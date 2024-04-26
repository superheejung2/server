import mysql from "mysql";
import dotenv from 'dotenv';
dotenv.config();

// github에서 사용할 때 내 정보를 보호하기 위해서  

let pool = mysql.createPool({
    connectionLimit: 10000,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// console.log({
//     connectionLimit: 10000,
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// });
export default pool;