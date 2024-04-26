import express from "express";
const router = express.Router();

//Call of controllers
import { createContact } from "../controllers/contact.js";
import { login, LoginSubmit, Logout } from "../controllers/login.js";
import { formContact, infoarticle, addinfoarticle, newsletter, infoarticleId, infoUpdate, deleteArticleId, contactDetails, updateContactDetails, deleteContact } from "../controllers/admin.js";
import { RegisterSubmit } from '../controllers/register.js';


// REGISTER user (LoginCrete)
router.post('/register', RegisterSubmit);

// post form in page contact 
router.post('/contact', createContact);

// get table  of infos utiles 
router.get('/infoarticle', infoarticle);

//editing a article for infos utiles 
router.post('/addinfoarticle', addinfoarticle);

//for seeing an article with id
router.get('/info/:id', infoarticleId);

//update a article of infos utiles 
router.post('/updateinfo/:id', infoUpdate);

//delete a article of infos utiles 
router.post('/deleteinfo/:id', deleteArticleId);

//get table form of contact in the Page of Admin
router.get('/formContact', formContact);

// get table newsletter for in the Page of Admin
router.get('/newsletter', newsletter);

//get detail of form  
router.get('/contact/:id', contactDetails);

//update detail of form
router.post('/contact/:id', updateContactDetails);

//delete a demande of form
router.post('/deletecontact/:id', deleteContact);

//for page login
router.get('/login', login);

//for submit login
router.post('/login', LoginSubmit);

//LOGOUT
router.get('/logout', Logout);

export default router;

