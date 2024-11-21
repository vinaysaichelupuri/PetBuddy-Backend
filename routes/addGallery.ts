import { AddGallery } from "../services/addGallery";
import express, { Request, Response } from 'express';
const router = express.Router(); 
router.post('/', async (req: Request, res: Response) => {
  try {
    const { username,petName,path} = req.body;
    const user = new AddGallery(username,petName,path)
    const results =await user.addGallery();
    if (results) {
    if(results.status===200){
        res.status(results.status).json({message: 'Added Reminder successful'});
    }
    if(results.status===404){
        res.status(results.status).json({message: 'User not exist'});
    }
    if(results.status===401){
        res.status(results.status).json({message: 'No pet found'});
    }
}
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});
export default router;
