import pool from "../config/database.js";
import { v4 as uuidv4 } from 'uuid';



export const addNewsletter = (req, res) => {
    const newNewsletter = {
        id: uuidv4(),
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email
    }

    let sql = 'INSERT INTO newsletter SET ?';

    pool.query(sql, [newNewsletter],
        function (error, result, fields) {
            console.log(error);
            console.log(result);
            res.send(req.body);
        });
}
