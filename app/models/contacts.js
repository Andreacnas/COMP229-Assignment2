// JS file
// Name: Andrea Cavalcanti Nascimento
// Student Number: 301250129
// Date: Oct xxth, 2022

import mongoose from "mongoose"

const Schema = mongoose.Schema;

const ContactsSchema = new Schema({//json object
    //parameters: properties
    name: String,
    phone: String,
    email: String,
}, {
    //parameters: options
    timestamps: true,
    collection: 'contacts'
});

export default mongoose.model('Contacts', ContactsSchema);