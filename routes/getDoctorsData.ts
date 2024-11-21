import { Doctor } from "../models/doctor";
import express, { Request, Response } from 'express';
const router = express.Router(); 
router.get('/', async (req: Request, res: Response) => {
  try {
    const results = await Doctor.find();
    console.log(results)
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});
export default router;
