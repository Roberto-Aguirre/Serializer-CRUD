import { Contact } from "../models/Contact.js"

export const getContacts = async (req, res) => {
    let contacts = await Contact.findAll();
    res.send(contacts);
};

export const createContact = async (req, res) => {
    let contact = req.body;
    try {
        Contact.create(contact);
        res.status(200).send({message:'Contact created'});
    } catch (error) {
        res.status(500).send({message:error.message})
    }
}