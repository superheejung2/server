import pool from "../config/database.js";
import { v4 as uuidv4 } from 'uuid';


// This API endpoint creates a new contact form entry.
export const createContact = (req, res) => {
    // Prepare a new contact form object with data from the request.
    const newContact = {
        id: uuidv4(),
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        tel: req.body.tel,
        choix: req.body.choix,
        content: req.body.content
    }

    // SQL query to insert the new contact form entry into the 'formulaire' table.
    let sql = 'INSERT INTO formulaire SET ?';

    pool.query(sql, [newContact],
        function (error, result, fields) {
            console.log(error);
            console.log(result);
            res.send(req.body);
        });
}