import { AddActivity } from "../services/addActivity";
import express, { Request, Response } from 'express';
const router = express.Router(); 
router.post('/', async (req: Request, res: Response) => {
  try {
    const { username,petName,activityName,startTime,endTime} = req.body;
    const user = new AddActivity(username,petName,activityName,startTime,endTime)
    const results =await user.addActivity();
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
