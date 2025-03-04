import express, { Application } from 'express';
import cors from 'cors';
import livenessRoute from './routes/liveness';
import profileCreationRoute from './routes/profileCreation';
import sequelize from './database';
import Profile from './models/profile';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerConfig from './swaggerConfig';

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Sync Sequelize models with the database
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connected...');
    return sequelize.sync({ alter: true }); // Synchronize models with database
  })
  .then(() => {
    console.log('Sequelize models synchronized.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// Swagger setup
const swaggerSpec = swaggerJsDoc(swaggerConfig);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/api/liveness', livenessRoute);
app.use('/api/profiles', profileCreationRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Swagger Docs available at http://localhost:${PORT}/api-docs`);
});
