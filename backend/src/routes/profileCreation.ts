import { Router, Request, Response } from 'express';
import { profiles } from '../models/profile';

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

export default router;
