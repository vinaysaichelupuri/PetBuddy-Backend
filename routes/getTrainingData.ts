import { Training } from "../models/training";
import express, { Request, Response } from 'express';
const router = express.Router(); 
router.get('/', async (req: Request, res: Response) => {
  try {
    const results = await Training.find();
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});
export default router;
