import { data } from "../models/data";
import { GetProfile } from "../services/getProfile";
describe('should test the login class',()=>{
    beforeEach(()=>{
        jest.clearAllMocks();
        (data.findOne as jest.Mock)=jest.fn()})
    test('should test the is user exist ',async()=>{
        (data.findOne as jest.Mock).mockResolvedValue(null)
        const profileData = new GetProfile('Vinay sai')
        const results = await profileData.getProfileData()
        expect(results?.status).toBe(404)
    })
    test('should test the is pet exist ',async()=>{
        (data.findOne as jest.Mock).mockResolvedValue({
            username:"Vinay sai",
        })
        const profileData = new GetProfile('Vinay sai')
        const results = await profileData.getProfileData()
        expect(results?.status).toBe(200)
    })

})