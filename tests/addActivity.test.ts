import { data } from "../models/data";
import { AddActivity } from "../services/addActivity";
describe('should test the login class',()=>{
    beforeEach(()=>{
        jest.clearAllMocks();
        (data.findOne as jest.Mock)=jest.fn()})
    test('should test the is user exist ',async()=>{
        (data.findOne as jest.Mock).mockResolvedValue(null)
        const reminder = new AddActivity('Vinay sai','Tommy','Walking',new Date ('2024-11-20T12:07:11.642+00:00'),new Date ('2024-11-20T12:07:11.642+00:00'))
        const results = await reminder.addActivity()
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
        const reminder = new AddActivity('Vinay sai','Peter','Walking',new Date ('2024-11-20T12:07:11.642+00:00'),new Date ('2024-11-20T12:07:11.642+00:00'))
        const results = await reminder.addActivity()
        expect(results?.status).toBe(401)
    })
    test('should return 200 when pet is successfully saved', async () => {
        const mockSave = jest.fn();
        (data.findOne as jest.Mock).mockResolvedValue({
          username: "Vinay sai",
          pet: [{
            petName:"Tommy",
            activity: [],
          }],
          
          save: mockSave
        });
        const activity = new AddActivity('Vinay sai','Tommy','Walking',new Date ('2024-11-20T12:07:11.642+00:00'),new Date ('2024-11-20T12:07:11.642+00:00'))
        const results = await activity.addActivity()
        expect(mockSave).toHaveBeenCalled();
        expect(results?.status).toBe(200);
      });
})