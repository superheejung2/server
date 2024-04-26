import pool from '../config/database.js';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';

// This function handles the registration submission.
export const RegisterSubmit = function (req, res) {
    // Hash the provided password before storing it in the database.
    bcrypt.hash(req.body.password, 10, function (error, hash) {
        if (error) {
            console.log(error);
        } else {
            const newAdmin = {
                id: uuidv4(),
                email: req.body.email,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                password: hash,
                role: "visiter"
            };

            let sql = 'INSERT INTO users SET ?';

            pool.query(sql, [newAdmin],
                function (error, result, fields) {
                    console.log(error);
                    // console.log(result);
                    res.send(req.body);
                });
        }
    });
}
