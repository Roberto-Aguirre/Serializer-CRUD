import { ValidationError } from "sequelize";
import { Address } from "../models/Address.js";
import { Contact } from "../models/Contact.js"

export const getContacts = async (req, res) => {
    let contacts = await Contact.findAll({ include: Address });
    res.send(contacts);
};

export const getContact = async (req, res) => {
    try {
        let { id } = req.params;
        let contact = await Contact.findByPk(id, { include: Address });
        if (!contact)
            return res.status(404).send({ message: 'Contact not found' });
        res.send(contact);
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
};

export const createContact = async (req, res) => {
    try {
        let contact = req.body;
        await Contact.create(contact)
        res.send({ message: 'Contact created' });
    } catch (error) {
        if (error instanceof ValidationError) {
            const errosList = []
            error.errors.forEach(element => {
                errosList.push(element.message)
            });
            return res.status(500).send({ errors: errosList })
        }        
        res.status(500).send({messae:error.message})

    }
};

export const updateContact = async (req, res) => {
    let contact = req.body;
    let { id } = req.params;

    try {
        Contact.update(contact, { where: { id } });
        res.send({ message: `User: ${id} Contact updated` });
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
};

export const deleteContact = async (req, res) => {
    let { id } = req.params;
    try {
        let contact = await Contact.findByPk(id);
        if (!contact) {
            return res.status(404).send({ message: 'Contact not found' });
        }
        Contact.update({ show: false }, { where: { id } });
        res.send({ message: `User: ${id} contact deleted` });
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
};
