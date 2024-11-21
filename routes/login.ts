import { Login } from "../services/login";
import express, { Request, Response } from 'express';
const router = express.Router(); 
router.post('/', async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = new Login(username,password)
    const results =await user.getLogin();
    console.log(results?.status)
    if (results) {
    if(results.status===200){
        res.status(results.status).json({message: 'Login successful'});
    }
    if(results.status===400){
        res.status(results.status).json({message: 'Wrong password'});
    }
    if(results.status===401){
        res.status(results.status).json({message: 'No user found'});
    }
}
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});
export default router;
