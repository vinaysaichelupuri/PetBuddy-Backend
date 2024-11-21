import { data } from "../models/data";
import { Login } from "../services/login";
describe('should test the login class',()=>{
    beforeEach(()=>{
        jest.clearAllMocks();
        (data.findOne as jest.Mock)=jest.fn()})
    test('should test the is user exist ',async()=>{
        (data.findOne as jest.Mock).mockResolvedValue(null)
        const login = new Login('Vinay sai','1234')
        const results = await login.getLogin()
        expect(results.status).toBe(404)
    })
    test('should test the is user exist ',async()=>{
        (data.findOne as jest.Mock).mockResolvedValue({
            username:"Vinay sai",
            password:"1234"
        })
        const login = new Login('Vinay sai','1234')
        const results = await login.getLogin()
        expect(results.status).toBe(200)
    })
    test('should test the is user exist ',async()=>{
        (data.findOne as jest.Mock).mockResolvedValue({
            username:"Vinay sai",
            password:"1234"
        })
        const login = new Login('Vinay sai','12345')
        const results = await login.getLogin()
        expect(results.status).toBe(401)
    })
})