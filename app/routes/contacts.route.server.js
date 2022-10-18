// JS file
// Name: Andrea Cavalcanti Nascimento
// Student Number: 301250129
// Date: Oct xxth, 2022

import { Router } from "express";

import { DisplayContactsList, 
    DisplayContactsAddPage, 
    ProcessContactsAddPage, 
    DisplayContactsUpdatePage, 
    ProcessContactsUpdatePage, 
    ProcessContactsDelete } from "../controllers/contacts.controller.server.js";
import { AuthGuard } from "../utils/index.js";

const router = Router();

router.get('/contacts-list', DisplayContactsList);
//If a user attempts to access contacts-add, they should be redirected back to the Login View 
router.get('/contacts-add', AuthGuard, DisplayContactsAddPage);
router.post('/contacts-add', AuthGuard, ProcessContactsAddPage);
router.post('/contacts-update/:id', AuthGuard, ProcessContactsUpdatePage);
router.get('/contacts-update/:id', AuthGuard, DisplayContactsUpdatePage);
router.get('/contacts-delete/:id', AuthGuard, ProcessContactsDelete);

export default router;