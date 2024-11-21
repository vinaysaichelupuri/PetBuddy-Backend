import { data } from "../models/data";
import { PetData } from "../services/petData";
describe('should test the register class',()=>{
    beforeEach(()=>{
        jest.clearAllMocks();
        (data.findOne as jest.Mock)=jest.fn()})
        save: jest.fn()
    test('should test the is user exist ',async()=>{
        (data.findOne as jest.Mock).mockResolvedValue(null)
        const register = new PetData('Vinay')
        const results = await register.getPetData()
        expect(results.status).toBe(404)
    })
    test('should test if user is saved or not',async()=>{
        (data.findOne as jest.Mock).mockResolvedValue({
            username:"Vinay sai",
            pet:[{
                petName:"Peter"
            }]
        })
        const register = new PetData('Vinay sai')
        const results = await register.getPetData()
        expect(results.status).toBe(200)
        

    })
})