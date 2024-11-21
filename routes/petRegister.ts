import { PetRegister } from "../services/petRegister";
import express, { Request, Response } from 'express';
const router = express.Router(); 
router.post('/', async (req: Request, res: Response) => {
  try {
    const { username,petName,gender,emergencyNumber,breadName,petPhoto,age,weight,height,color,remarks} = req.body;
    const user = new PetRegister(username,petName,gender,emergencyNumber,breadName,petPhoto,age,weight,height,color,remarks)
    const results =await user.setPetRegister();
    if (results) {
    if(results.status===200){
        res.status(results.status).json({message: 'Registration successful'});
    }
    if(results.status===400){
        res.status(results.status).json({message: 'User not exist'});
    }
    if(results.status===401){
        res.status(results.status).json({message: 'Already pet with this user exist'});
    }
}
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});
export default router;
