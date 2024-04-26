import express from "express";
import session from 'express-session';
import router from "./router/route.js";
import parseurl from "parseurl";
import cors from 'cors';


const app = express();
const port = 8000;
const hostname = "localhost";


/* Politique CORS */
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true
}
app.use(cors(corsOptions));

const BASE_URL = `http://${hostname}:${port}`;

// Enable serving static files (js, image, css)
app.use(express.static("public"));

// Initialize session system
app.use(session({
    secret: 'LetsGO',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 360000 }
}));


// Enable JSON support and form data encoding
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Middleware to provide local variables to views
app.use(function (req, res, next) {
    res.locals.isAdmin = !!req.session.isAdmin; // cache la page admin
    res.locals.role = req.session.role;
    next();
});

// Middleware for handling protected routes
app.use(function (req, res, next) {
    const route = parseurl(req).pathname;

    const protectedRoutes = [
        '/admin',
        '/updateinfo/:id',
        '/deleteArticleId/:id'
    ];

    // Check access for protected routes
    if (protectedRoutes.indexOf(route) > -1 && !req.session.isAdmin) {
        res.status(403).send("You don't have permission to access this resource")
    } else {
        next();
    }
});


// Use the router to handle requests
app.use('/', router);

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log('listening port ' + PORT + ' all is ok');
})