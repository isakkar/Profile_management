import { Router, Request, Response } from 'express';
import Profile from '../models/profile';

const router: Router = Router();

// GET route to fetch all profiles
router.get('/', async (_req: Request, res: Response) => {
  try {
    const profiles = await Profile.findAll();
    res.status(200).json(profiles);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch profiles', details: err });
  }
});

// GET route to fetch a profile by id
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const profile = await Profile.findByPk(req.params.id);
    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }
    res.status(200).json(profile);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch profile', details: err });
  }
});

// GET route to fetch student profiles
router.get('/students', async (_req: Request, res: Response) => {
  try {
    const students = await Profile.findAll({ where: { type: 'student' } });
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch student profiles', details: err });
  }
});

// GET route to fetch professor profiles
router.get('/professors', async (_req: Request, res: Response) => {
  try {
    const professors = await Profile.findAll({ where: { type: 'professor' } });
    res.status(200).json(professors);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch professor profiles', details: err });
  }
});

// GET route to fetch admin profiles
router.get('/admins', async (_req: Request, res: Response) => {
  try {
    const admins = await Profile.findAll({ where: { type: 'admin' } });
    res.status(200).json(admins);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch admin profiles', details: err });
  }
});

// POST route to create a new profile
router.post('/', async (req: Request, res: Response) => {
  const { surname, name, email, type, class: studentClass, teaching } = req.body;

  try {
    // Create a new profile
    const profile = await Profile.create({
      surname,
      name,
      email,
      type,
      ...(type === 'student' && { class: studentClass }),
      ...(type === 'professor' && { teaching }),
    });
    res.status(201).json(profile);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create profile', details: err });
  }
});

// GET route to search profiles by name
router.get('/search', async (req: Request, res: Response) => {
  const { name } = req.query;

  if (!name || typeof name !== 'string') {
    return res.status(400).json({ error: 'Name query parameter is required and should be a string' });
  }

  try {
    const profiles = await Profile.findAll({
      where: {
        name: { $iLike: `%${name}%` }, // PostgreSQL-specific case-insensitive search
      },
    });
    if (profiles.length === 0) {
      return res.status(404).json({ message: 'No profiles found' });
    }
    res.status(200).json(profiles);
  } catch (err) {
    res.status(500).json({ error: 'Failed to search profiles', details: err });
  }
});

// PUT route to update a profile
router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { surname, name, email, type, class: studentClass, teaching } = req.body;

  try {
    const profile = await Profile.findByPk(id);

    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }

    // Update the profile
    await profile.update({
      surname: surname || profile.surname,
      name: name || profile.name,
      email: email || profile.email,
      type: type || profile.type,
      ...(type === 'student' && { class: studentClass }),
      ...(type === 'professor' && { teaching }),
    });

    res.status(200).json(profile);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update profile', details: err });
  }
});

// DELETE route to remove a profile
router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const profile = await Profile.findByPk(id);

    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }

    // Remove the profile
    await profile.destroy();
    res.status(200).json({ message: 'Profile deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Failed to delete profile', details: err });
  }
});

export default router;
