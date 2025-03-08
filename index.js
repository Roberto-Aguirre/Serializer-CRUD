import express from 'express'
import { sequelize } from './database/database.js';
import './models/Contact.js'
import './models/Address.js'
import contactRoutes from './routes/contacts.routes.js';
const app = express();
const PORT = 3000;
app.use(express.json());

app.use(contactRoutes);

app.all('/*', (req, res) => {
    res.status(404).send({ message: 'Element not found' })
});

async function main() {
    try {
        await sequelize.sync({force:false});
        console.log('Conexion con db exitosa');
        app.listen(3000, () => {
            console.log(`Listening at: http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}

main()


