import express, { Application } from 'express';
import livenessRoute from './routes/liveness';
import profileCreationRoute from './routes/profileCreation';

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/liveness', livenessRoute);
app.use('/api/profiles', profileCreationRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
