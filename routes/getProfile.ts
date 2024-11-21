import { GetProfile } from "../services/getProfile";
import express, { Request, Response } from 'express';
const router = express.Router(); 
router.post('/', async (req: Request, res: Response) => {
  try {
    const { username} = req.body;
    const user = new GetProfile(username)
    const results =await user.getProfileData();
    console.log(results)
    if (results) {
        res.status(200).json(results.ProfileData)
}
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});
export default router;
