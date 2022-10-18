// JS file
// Name: Andrea Cavalcanti Nascimento
// Student Number: 301250129
// Date: Oct xxth, 2022

import { Router } from "express";

import { DisplayContactsList, 
    DisplayContactsAddPage, 
    ProcessContactsAddPage, 
    DisplayContactsEditPage, 
    ProcessContactsEditPage, 
    ProcessContactsDelete } from "../controllers/contacts.controller.server.js";

const router = Router();

router.get('/contacts-list', DisplayContactsList);
router.get('/contacts-add', DisplayContactsAddPage);
router.post('/contacts-add', ProcessContactsAddPage);
router.post('/contacts-edit/:id', ProcessContactsEditPage);
router.get('/contacts-edit/:id', DisplayContactsEditPage);
router.get('/contacts-delete/:id', ProcessContactsDelete);

export default router;