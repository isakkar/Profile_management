import { Router, Request, Response } from 'express';
import Profile from '../models/profile';
import { Op } from 'sequelize';

const router: Router = Router();

// GET route to fetch all profiles
/**
 * @swagger
 * /api/profiles:
 *   get:
 *     summary: Fetch all profiles
 *     description: Retrieve a list of all profiles in the database.
 *     responses:
 *       200:
 *         description: A list of profiles.
 *       500:
 *         description: Failed to fetch profiles.
 */
router.get('/', async (_req: Request, res: Response) => {
  try {
    const profiles = await Profile.findAll();
    res.status(200).json(profiles);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch profiles', details: err });
  }
});

// GET route to fetch student profiles
/**
 * @swagger
 * /api/profiles/students:
 *   get:
 *     summary: Fetch student profiles
 *     description: Retrieve a list of all profiles with the type "student".
 *     responses:
 *       200:
 *         description: A list of student profiles.
 *       500:
 *         description: Failed to fetch student profiles.
 */
router.get('/students', async (_req: Request, res: Response) => {
  try {
    const students = await Profile.findAll({ where: { type: 'student' } });
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch student profiles', details: err });
  }
});

// GET route to fetch professor profiles
/**
 * @swagger
 * /api/profiles/professors:
 *   get:
 *     summary: Fetch professor profiles
 *     description: Retrieve a list of all profiles with the type "professor".
 *     responses:
 *       200:
 *         description: A list of professor profiles.
 *       500:
 *         description: Failed to fetch professor profiles.
 */
router.get('/professors', async (_req: Request, res: Response) => {
  try {
    const professors = await Profile.findAll({ where: { type: 'professor' } });
    res.status(200).json(professors);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch professor profiles', details: err });
  }
});

// GET route to fetch admin profiles
/**
 * @swagger
 * /api/profiles/admins:
 *   get:
 *     summary: Fetch admin profiles
 *     description: Retrieve a list of all profiles with the type "admin".
 *     responses:
 *       200:
 *         description: A list of admin profiles.
 *       500:
 *         description: Failed to fetch admin profiles.
 */
router.get('/admins', async (_req: Request, res: Response) => {
  try {
    const admins = await Profile.findAll({ where: { type: 'admin' } });
    res.status(200).json(admins);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch admin profiles', details: err });
  }
});

// GET route to search profiles by name
/**
 * @swagger
 * /api/profiles/search:
 *   get:
 *     summary: Search profiles by name
 *     description: Search for profiles whose names contain the specified query.
 *     parameters:
 *       - in: query
 *         name: name
 *         required: true
 *         description: The name to search for.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of matching profiles.
 *       400:
 *         description: Invalid query parameter.
 *       404:
 *         description: No profiles found.
 *       500:
 *         description: Failed to search profiles.
 */
router.get('/search', async (req: Request, res: Response) => {
  const { name } = req.query;

  if (!name || typeof name !== 'string') {
    return res.status(400).json({ error: 'Name query parameter is required and should be a string' });
  }

  try {
    const profiles = await Profile.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`, // Sequelize's Op.iLike for case-insensitive search
        },
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

// GET route to fetch a profile by id
/**
 * @swagger
 * /api/profiles/{id}:
 *   get:
 *     summary: Fetch a profile by ID
 *     description: Retrieve a specific profile by its unique ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the profile to fetch.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The requested profile.
 *       404:
 *         description: Profile not found.
 *       500:
 *         description: Failed to fetch profile.
 */
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

// POST route to create a new profile
/**
 * @swagger
 * /api/profiles:
 *   post:
 *     summary: Create a new profile
 *     description: Add a new profile to the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               surname:
 *                 type: string
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               type:
 *                 type: string
 *                 enum: [student, professor, admin]
 *               class:
 *                 type: string
 *               teaching:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Profile created successfully.
 *       400:
 *         description: Failed to create profile.
 */
router.post('/', async (req: Request, res: Response) => {
  const { surname, name, email, type, class: studentClass, teaching } = req.body;

  try {
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

// PUT route to update a profile
/**
 * @swagger
 * /api/profiles/{id}:
 *   put:
 *     summary: Update a profile
 *     description: Update the details of an existing profile by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the profile to update.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               surname:
 *                 type: string
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               type:
 *                 type: string
 *                 enum: [student, professor, admin]
 *               class:
 *                 type: string
 *               teaching:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Profile updated successfully.
 *       400:
 *         description: Failed to update profile.
 *       404:
 *         description: Profile not found.
 */
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
/**
 * @swagger
 * /api/profiles/{id}:
 *   delete:
 *     summary: Delete a profile
 *     description: Remove a profile from the database by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the profile to delete.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Profile deleted successfully.
 *       404:
 *         description: Profile not found.
 *       400:
 *         description: Failed to delete profile.
 */
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
