import { Sequelize } from 'sequelize';
import "dotenv/config";
export const sequelize = new Sequelize('express', 'root', 'Ilike2pizza@', { host: 'localhost', dialect: 'mysql' });

// await sequelize.sync({ force: true })

// let address = await Address.create({
//     street: 'Sao pablo',
//     number: '125',
//     cologne: 'Mision de san miguel',
//     postal: '66648',
//     state: 'Nuevo Leon',
//     country: 'Mexico',
// })

// console.log(address.id);
// await Contact.create({
//     name: 'Roberto',
//     number: '8110630544',
//     birthday: '2002-05-19',
//     show: true,
//     addressId:address.id
// })

// console.log(JSON.stringify(await Address.findAll({include:Contact})));
// await sequelize.close()
