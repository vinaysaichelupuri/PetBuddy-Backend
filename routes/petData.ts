import { PetData } from "../services/petData";
import express, { Request, Response } from 'express';
const router = express.Router(); 
router.post('/', async (req: Request, res: Response) => {
  try {
    const { username} = req.body;
    const user = new PetData(username)
    const results =await user.getPetData();
    if (results) {
        res.status(200).json(results)
}
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});
export default router;
