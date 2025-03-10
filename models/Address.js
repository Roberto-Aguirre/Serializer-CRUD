import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Contact } from './Contact.js';
const Address = sequelize.define('Address', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    street: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isNull: { msg: "Don't accept nulls" },
            isAlphanumeric: { msg: "Don't match with String" }
        }
    },
    number: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isNull: { msg: "Don't accept nulls" },
            is: {
                args: typeof (String),
                msg: "Don't match with String"
            },
            len: {
                args: [10, 10],
                msg: "Minimun and maximun lenght is 10"
            }
        }
    },
    cologne: DataTypes.STRING,
    postal: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isNull: { msg: "Don't accept nulls" },
            is: {
                args: typeof (String),
                msg: "Don't match with String"
            },
            len: {
                args: [6, 6],
                msg: "Minimun and maximun lenght is 6"
            }
        }
    },
    state: DataTypes.STRING,
    country: DataTypes.STRING,
});

Address.hasOne(Contact, { foreignKey: 'addressId', sourceKey: 'id' });
Contact.belongsTo(Address, { foreignKey: 'addressId', targetKey: 'id', onUpdate: 'CASCADE', onDelete: 'CASCADE' });

export { Address };