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

const router = Router();

router.get('/contacts-list', DisplayContactsList);
router.get('/contacts-add', DisplayContactsAddPage);
router.post('/contacts-add', ProcessContactsAddPage);
router.post('/contacts-update/:id', ProcessContactsUpdatePage);
router.get('/contacts-update/:id', DisplayContactsUpdatePage);
router.get('/contacts-delete/:id', ProcessContactsDelete);

export default router;