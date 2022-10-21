// JS file
// Name: Andrea Cavalcanti Nascimento
// Student Number: 301250129
// Date: Oct 21th, 2022

import { Router } from "express";
import { DisplayLoginPage, 
    // DisplayRegisterPage, 
    ProcessLoginPage,
    ProcessLogoutPage} 
    // ProcessRegisterPage} 
    from "../controllers/auth.controller.server.js";

const router = Router();

// Display Login Router
router.get('/login', DisplayLoginPage);
// Process Login Page
router.post('/login', ProcessLoginPage);


// Display Register Router
// router.get('/register', DisplayRegisterPage);
// Process Registration Page
// router.post('/register', ProcessRegisterPage);

// Process lougout 
router.get('/logout', ProcessLogoutPage);


export default router;