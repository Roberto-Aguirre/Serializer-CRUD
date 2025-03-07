const {Sequelize,DataTypes} = require('sequelize')
require('dotenv').config();
const sequelize = new Sequelize(process.env.DB_URI)


// // Import Sequelize and the necessary modules
// const { Sequelize, DataTypes } = require('sequelize');

// // Create a new Sequelize instance for MySQL connection
// const sequelize = new Sequelize('mysql://user:password@localhost:3306/mydatabase');

// // Define a model for 'User'
// const User = sequelize.define('User', {
//   // Define fields
//   username: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//   },
//   birthday: {
//     type: DataTypes.DATE,
//   },
// });

// // Sync the model with the database (creates the table if it doesn't exist)
// sequelize.sync({ force: true })  // `force: true` will drop the table if it exists
//   .then(() => console.log('Database synced!'))
//   .catch((error) => console.log('Error syncing database:', error));

// // CRUD Operations
// async function run() {
//   try {
//     // Create a new user
//     const newUser = await User.create({
//       username: 'JohnDoe',
//       email: 'john.doe@example.com',
//       birthday: new Date('1990-01-01'),
//     });
//     console.log('New user created:', newUser.username);

//     // Fetch all users from the database
//     const users = await User.findAll();
//     console.log('All users:', users);

//     // Find a user by primary key
//     const user = await User.findByPk(1);
//     console.log('User with ID 1:', user.username);

//     // Update a user (change email)
//     const updatedUser = await user.update({
//       email: 'new.john.doe@example.com',
//     });
//     console.log('Updated user email:', updatedUser.email);

//     // Delete a user
//     await user.destroy();
//     console.log('User deleted!');
//   } catch (error) {
//     console.error('Error in CRUD operations:', error);
//   } finally {
//     // Close the connection
//     sequelize.close();
//   }
// }

// run();
