import { Sequelize, DataTypes } from 'sequelize'
import "dotenv/config";
const sequelize = new Sequelize(process.env.MYSQL_DATABASE_URI)

// Define a model for 'User'
const Contact = sequelize.define('Contact', {
    name: DataTypes.STRING,
    number: DataTypes.STRING,
    birthday: DataTypes.DATEONLY,
});

const Address = sequelize.define('Address', {
    street: DataTypes.STRING,
    number: DataTypes.STRING,
    cologne: DataTypes.STRING,
    postal: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Contact,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    }
})

Contact.hasOne(Address, { foreignKey: 'userId' })
Address.belongsTo(Contact, { foreignKey: 'userId' });

// await sequelize.sync({ force: true })

// Contact.create({
//     name: 'Roberto',
//     number: '8110630544',
//     birthday: '2002-05-19',
// })

// Address.create({
//     street: 'San pablo',
//     number:'125',
//     cologne: 'Mision de san miguel',
//     postal: '66648',
//     state: 'Nuevo Leon',
//     country: 'Mexico',
//     userId:'1'
// })

console.log(JSON.stringify(await Contact.findAll({benchmark:true})));
// console.log(JSON.stringify(await Address.findAll({include:Contact})));
await sequelize.close()
