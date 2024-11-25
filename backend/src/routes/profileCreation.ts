import { Router, Request, Response } from 'express';
import {Profile, profiles} from '../models/profile';

const router: Router = Router();

// GET route to fetch all profiles
router.get('/', (req: Request, res: Response) => {
  res.status(200).json(profiles);
});

// GET route to fetch student profiles
router.get('/students', (req: Request, res: Response) => {
  const students = profiles.filter(profile => profile.type === 'student');
  res.status(200).json(students);
});

// GET route to fetch professor profiles
router.get('/professors', (req: Request, res: Response) => {
  const professors = profiles.filter(profile => profile.type === 'professor');
  res.status(200).json(professors);
});

// GET route to fetch admin profiles
router.get('/admins', (req: Request, res: Response) => {
  const admins = profiles.filter(profile => profile.type === 'admin');
  res.status(200).json(admins);
});

// POST route to create a new profile
router.post('/', (req: Request, res: Response) => {
  const { id, surname, name, email, type, extraAttribute } = req.body;

  // Validate request data
  if (!id || !surname || !name || !email || !type) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Validate type-specific attributes
  if (type === 'student' && !extraAttribute) {
    return res.status(400).json({ error: 'Missing class attribute for student' });
  }
  if (type === 'professor' && (!extraAttribute || !Array.isArray(extraAttribute))) {
    return res.status(400).json({ error: 'Missing or invalid teaching attribute for professor' });
  }

  // Create a new profile
  const newProfile = new Profile(id, surname, name, email, type, extraAttribute);
  profiles.push(newProfile);

  res.status(201).json(newProfile);
});

// GET route to search profiles by name
router.get('/search', (req: Request, res: Response) => {
  const { name } = req.query;

  if (!name || typeof name !== 'string') {
    return res.status(400).json({ error: 'Name query parameter is required and should be a string' });
  }

  // Search for profiles by name (case-insensitive)
  const searchResults = profiles.filter(profile =>
    profile.name.toLowerCase().includes(name.toLowerCase())
  );

  if (searchResults.length === 0) {
    return res.status(404).json({ message: 'No profiles found' });
  }

  res.status(200).json(searchResults);
});

export default router;
