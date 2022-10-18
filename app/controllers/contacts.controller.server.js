// JS file
// Name: Andrea Cavalcanti Nascimento
// Student Number: 301250129
// Date: Oct xxth, 2022

import contactsModel from '../models/contacts.js';

export function DisplayContactsList(req, res, next){
    contactsModel.find(function(err, contactsCollection) {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', {title: 'Business Contact List', page: 'contacts/list', contacts: contactsCollection});
    })
}

export function DisplayContactsAddPage(req, res, next){
    res.render('index', { title: 'Add Contact', page: 'contacts/update', contacts: {} });
}

export function ProcessContactsAddPage(req, res, next){
    
    let newContacts = contactsModel({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    });

    contactsModel.create(newContacts, (err, Contacts) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/contacts-list')
    } )
}

export function DisplayContactsUpdatePage(req, res, next){
    let id = req.params.id;

    contactsModel.findById(id, (err, contacts) => {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', { title: 'Update Contact', page: 'contacts/update', contacts: contacts });
    });    
}

export function ProcessContactsUpdatePage(req, res, next){

    let id = req.params.id;
    
    let newContacts = contactsModel({
        _id: req.body.id,
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    });

    contactsModel.updateOne({_id: id }, newContacts, (err, Contacts) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/contacts-list')
    } )
}

export function ProcessContactsDelete(req, res, next){
    let id = req.params.id;

    contactsModel.remove({_id: id}, (err) => {
        if (err){
            console.error(err);
            res.end(err);
        }

        res.redirect('/contacts-list');
    })
}