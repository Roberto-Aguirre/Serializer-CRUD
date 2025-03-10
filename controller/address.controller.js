import { Address } from "../models/Address.js"
import { Contact } from "../models/Contact.js";

export const getAddress = async (req, res) => {
    const { id } = req.params
    try {
        let contact = await Contact.findByPk(id);
        if (!contact)
            return res.status(404).send({ message: 'Address not found' });
        if (contact.addressId == null)
            return res.status(400).send({ message: "Contact don't have an address" });
        let address = await Address.findByPk(contact.addressId);
        res.send(address)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }

}

export const createAddress = async (req, res) => {
    const { id } = req.params
    try {
        let contact = await Contact.findByPk(id);
        if (!contact)
            return res.status(404).send({ message: 'Contact not found' });
        if (contact.addressId != null)
            return res.status(400).send({ message: 'Contact has already an address' });
        let newAddress = await Address.create(req.body)
        Contact.update({ addressId: newAddress.id }, { where: { id } });
        res.send({ message: 'Address succesfully created' })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

export const updateAddress = async (req, res) => {
    const { id } = req.params;
    let updateInfo = req.body;
    try {
        let contact = await Contact.findByPk(id);
        if (!contact)
            return res.status(404).send({ message: 'Contact not found' });
        if (contact.addressId == null)
            return res.status(400).send({ message: "Contact don't have an address" });
        Address.update(updateInfo, { where: { id: contact.addressId } })
        res.send({ message: 'Address succesfully updated' })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

export const deleteAddress = async (req, res) => {
    const { id } = req.params
    let contact = await Contact.findByPk(id);
    if (!contact)
        return res.status(404).send({ message: 'Contact not found' });
    Address.destroy({ where: { id: contact.addressId } })
    res.send({ message: 'Address succesfully deleted' })
}

