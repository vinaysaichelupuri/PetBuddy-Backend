import { GetActivity } from "../services/getActivity";
import express, { Request, Response } from 'express';
const router = express.Router(); 
router.post('/', async (req: Request, res: Response) => {
  try {
    const { username,petName} = req.body;
    const user = new GetActivity(username,petName)
    const results =await user.getActivity();
    if (results) {
    if(results.status===200){
        res.status(results.status).json(results.petActivity);
    }
    if(results.status===404){
        res.status(results.status).json({message: 'User not exist'});
    }
    if(results.status===401){
        res.status(results.status).json({message: 'Pet not exist'});
    }
}
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});
export default router;
