import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const Contact = sequelize.define('Contact', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: DataTypes.STRING,
    number: DataTypes.STRING,
    birthday: DataTypes.DATEONLY,
    show: DataTypes.BOOLEAN,
});
