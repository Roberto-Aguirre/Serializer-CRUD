import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Contact } from './Contact.js';
const Address = sequelize.define('Address', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    street: DataTypes.STRING,
    number: DataTypes.STRING,
    cologne: DataTypes.STRING,
    postal: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
});

Address.hasOne(Contact, { foreignKey: 'addressId', sourceKey: 'id', onUpdate: 'CASCADE', onDelete: 'CASCADE' });
Contact.belongsTo(Address, { foreignKey: 'addressId', targetKey: 'id' });

