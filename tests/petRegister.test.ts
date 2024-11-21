import { data } from "../models/data";
import { PetRegister } from "../services/petRegister";
describe('should test the login class',()=>{
    beforeEach(()=>{
        jest.clearAllMocks();
        (data.findOne as jest.Mock)=jest.fn()})
    test('should test the is user exist ',async()=>{
        (data.findOne as jest.Mock).mockResolvedValue(null)
        const login = new PetRegister('Vinay sai','Tommy','Male','123456789','Husky','dog.jpg','10','20','110','black','no remarks')
        const results = await login.setPetRegister()
        expect(results?.status).toBe(400)
    })
    test('should test the is pet exist ',async()=>{
        (data.findOne as jest.Mock).mockResolvedValue({
            username:"Vinay sai",
            pet: [{
                petName:"Tommy"
            }   
            ]
        })
        const login = new PetRegister('Vinay sai','Tommy','Male','123456789','Husky','dog.jpg','10','20','110','black','no remarks')
        const results = await login.setPetRegister()
        expect(results?.status).toBe(401)
    })
    test('should return 200 when pet is successfully saved', async () => {
        const mockSave = jest.fn();
        (data.findOne as jest.Mock).mockResolvedValue({
          username: "Vinay sai",
          pet: [],
          save: mockSave
        });
        const petRegister = new PetRegister(
          'Vinay sai', 'Tommy', 'Male', '123456789', 'Husky', 
          'dog.jpg', '10', '20', '110', 'black', 'no remarks'
        );
        const results = await petRegister.setPetRegister();
        expect(mockSave).toHaveBeenCalled();
        expect(results?.status).toBe(200);
      });
})