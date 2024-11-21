import { AddReminder } from "../services/addReminder";
import express, { Request, Response } from 'express';
const router = express.Router(); 
router.post('/', async (req: Request, res: Response) => {
  try {
    const { username,petName,type,remainderName,date,startTime,endTime} = req.body;
    const user = new AddReminder(username,petName,type,remainderName,date,startTime,endTime)
    const results =await user.addReminder();
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
