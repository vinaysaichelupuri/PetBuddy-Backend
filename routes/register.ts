import { Register } from "../services/register";
import express, { Request, Response } from 'express';
const router = express.Router(); 
router.post('/', async (req: Request, res: Response) => {
  try {
    const { username, password,userPhoto } = req.body;
    const user = new Register(username,password,userPhoto)
    const results =await user.getRegister();
    console.log(results?.status)
    if (results) {
    if(results.status===200){
        res.status(results.status).json({message: 'Registration successful'});
    }
    if(results.status===400){
        res.status(results.status).json({message: 'aleady user exist'});
    }
}
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});
export default router;
