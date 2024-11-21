import { data } from "../models/data";
import { AddReminder } from "../services/addReminder";
describe('should test the login class',()=>{
    beforeEach(()=>{
        jest.clearAllMocks();
        (data.findOne as jest.Mock)=jest.fn()})
    test('should test the is user exist ',async()=>{
        (data.findOne as jest.Mock).mockResolvedValue(null)
        const reminder = new AddReminder('Vinay sai','Tommy','Daily','Walking',new Date ('2024-11-20T12:07:11.642+00:00'),new Date ('2024-11-20T12:07:11.642+00:00'),new Date ('2024-11-20T12:07:11.642+00:00'))
        const results = await reminder.addReminder()
        expect(results?.status).toBe(404)
    })
    test('should test the is pet exist ',async()=>{
        (data.findOne as jest.Mock).mockResolvedValue({
            username:"Vinay sai",
            pet: [{
                petName:"Tommy"
            }   
            ]
        })
        const reminder = new AddReminder('Vinay sai','Peter','Daily','Walking',new Date ('2024-11-20T12:07:11.642+00:00'),new Date ('2024-11-20T12:07:11.642+00:00'),new Date ('2024-11-20T12:07:11.642+00:00'))
        const results = await reminder.addReminder()
        expect(results?.status).toBe(401)
    })
    test('should return 200 when pet is successfully saved', async () => {
        const mockSave = jest.fn();
        (data.findOne as jest.Mock).mockResolvedValue({
          username: "Vinay sai",
          pet: [{
            petName:"Tommy",
            Remainders: [],
          }],
          
          save: mockSave
        });
        const reminder = new AddReminder('Vinay sai','Tommy','Daily','Walking',new Date ('2024-11-20T12:07:11.642+00:00'),new Date ('2024-11-20T12:07:11.642+00:00'),new Date ('2024-11-20T12:07:11.642+00:00'))
        const results = await reminder.addReminder()
        expect(mockSave).toHaveBeenCalled();
        expect(results?.status).toBe(200);
      });
})