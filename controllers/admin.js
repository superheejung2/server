import pool from "../config/database.js";
import { v4 as uuidv4 } from 'uuid';


// This is an API endpoint for retrieving contact form data from the database.
export const formContact = (req, res) => {
    const sql = 'SELECT * FROM formulaire ORDER BY date DESC';
    // SQL query to retrieve data from the 'formulaire' table, ordered by date in descending order.
    pool.query(sql, (err, data) => {
        if (err) return res.json("Error");
        console.log(data);
        // If there's an error, send an error response with a message.
        return res.status(200).json(data);
    })
}


// This is an API endpoint for retrieving newsletter data from the database.
export const newsletter = (req, res) => {
    // SQL query to retrieve data from the 'newsletter' table, ordered by date in descending order.
    const sql = "SELECT * FROM newsletter ORDER BY date DESC";
    pool.query(sql, (err, data) => {
        if (err) return res.json("Error");
        return res.status(200).json(data);
    })
}

// This is an API endpoint for retrieving useful information articles from the database.
export const infoarticle = (req, res) => {
    const sql = "SELECT * FROM infoarticle ORDER BY date DESC";
    pool.query(sql, (err, data) => {
        if (err) return res.json("Error");
        return res.status(200).json(data);
    })
}

// This API endpoint adds a new information article.
export const addinfoarticle = (req, res) => {
    const newContact = {
        id: uuidv4(),
        title: req.body.title,
        url: req.body.url,
        content: req.body.content
    }

    let sql = 'INSERT INTO infoarticle SET ?';

    pool.query(sql, [newContact],
        function (error, result, fields) {
            console.log(error);
            console.log(result);
            res.send(req.body);
        });
}

// This API endpoint retrieves an information article by its ID.
export const infoarticleId = (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM infoarticle WHERE id=?";

    pool.query(sql, [id], (err, data) => {
        if (err) return res.json("Error");
        return res.status(200).json(data);
    });
};


// This API endpoint retrieves contact details by their ID.
export const contactDetails = (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM formulaire WHERE id=?";

    pool.query(sql, [id], (err, data) => {
        if (err) return res.json("Error");
        return res.status(200).json(data);
    });
};



// This API endpoint updates an existing information article.
export const infoUpdate = (req, res) => {

    const id = req.params.id;
    const title = req.body.title
    const url = req.body.url
    const content = req.body.content

    console.log(id);
    console.log("hello")
    console.log(req);
    const sql = "UPDATE infoarticle SET title=?, url=?, content=? WHERE id=?";
    pool.query(sql, [title, url, content, id], (err, data) => {
        if (err) return res.json("Error");
        return res.status(200).json(data);
    });
};


// This API endpoint updates contact details with a specific ID.
export const updateContactDetails = (req, res) => {
    const id = req.params.id;
    const newUpdateContact = {
        traitement: req.body.traitement
    }
    const sql = "UPDATE formulaire SET traitement=? WHERE id=?";
    pool.query(sql, [newUpdateContact.traitement, id], (err, data) => {
        if (err) return res.json("Error");
        return res.status(200).json(data);
    });
};

// This API endpoint deletes an information article by its ID.
export const deleteArticleId = (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM infoarticle WHERE id=?";

    pool.query(sql, [id], (err, data) => {
        if (err) return res.json("Error");
        return res.status(200).json(data);
    });
};

// This API endpoint deletes contact details by their ID.
export const deleteContact = (req, res) => {
    const id = req.params.id;
    console.log(id)
    const sql = "DELETE FROM formulaire WHERE id=?";

    pool.query(sql, [id], (err, data) => {
        if (err) return res.json("Error");
        return res.status(200).json(data);
    });
};