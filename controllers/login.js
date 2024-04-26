import pool from "../config/database.js";
import bcrypt from 'bcrypt';

// This function renders the login page.
export const login = function (req, res) {
    res.render('layout', { template: 'login' });
}

// This function handles the login submission.
export const LoginSubmit = function (req, res) {
    const newLogin = {
        email: req.body.email,
        password: req.body.password
    }

    let sql = 'SELECT * from users WHERE email = ?';
    pool.query(sql, [newLogin.email], function (error, result) {
        if (error) {
            console.error(error);
            res.status(500).send('Erreur de base de données');
        } else {
            if (result.length < 1) {
                res.status(403).send('Login invalide');
            } else {
                bcrypt.compare(newLogin.password, result[0].password, function (error, isAllowed) {
                    if (isAllowed) {
                        req.session.role = result[0].role;

                        if (req.session.role === "admin") {
                            req.session.isAdmin = true;
                            req.session.user = result[0];
                        }
                        res.status(200).send({
                            message: req.session.user
                        });
                    } else {
                        res.status(403).send('Login invalide');
                    }
                })
            }

        }
    });
}

// This function handles user logout.
export const Logout = function (req, res) {
    req.session.destroy(function (error) {

        if (error) {
            console.error(error);
        }
        res.status(200).send({ success: true })
        // Redirect to the home page after logout.
        res.redirect('/');
    });
};


