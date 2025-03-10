import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const Contact = sequelize.define('Contact', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: "Name don't accept null value" },
            notEmpty: { msg: "Name don't accept empty values" },
            isAlphanumeric: { msg: "Don't match with String" }
        }
    },
    number: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: { args: [10, 10], msg: 'Min and max lenght is 10' },
            notNull: { msg: "Number don't accept null value" },
            notEmpty: { msg: "number don't accept empty values" },
            isAlphanumeric: { msg: "Don't match with String" }
        }
    },
    birthday: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
            notNull: { msg: "Birthday don't accept null value" },
            notEmpty: { msg: "Birthday don't accept empty values" },
            isDate: { args: true, msg: "Don't match with date format (yyyy-mm-dd)" }
        }
    },
    show: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
            notNull: { msg: "Birthday don't accept null value" },
            notEmpty: { msg: "Birthday don't accept empty values" },
        }
    },
});
