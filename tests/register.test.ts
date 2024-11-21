import { data } from "../models/data";
import { Register } from "../services/register";
describe('should test the register class',()=>{
    beforeEach(()=>{
        jest.clearAllMocks();
        (data.findOne as jest.Mock)=jest.fn()})
        save: jest.fn()
    test('should test the is user exist ',async()=>{
        (data.findOne as jest.Mock).mockResolvedValue({
            username:'Vinay',
            password:"1234",
            userPhoto:"user.jpg",
            email:"vinaysai@gmail.com",
            phoneNumber:123456
        })
        const register = new Register('Vinay','1234',"user.jpg",'vinaysai@gmail.com',123456)
        const results = await register.getRegister()
        expect(results.status).toBe(400)
    })
    test('should test if user is saved or not',async()=>{
        (data.findOne as jest.Mock).mockResolvedValue(null)
        const register = new Register('Vinay sai','1234',"user.jpg",'vinaysai@gmail.com',123456)
        const results = await register.getRegister()
        expect(results.status).toBe(200)
    })
})