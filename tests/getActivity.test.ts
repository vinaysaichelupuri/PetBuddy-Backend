import { data } from "../models/data";
import { GetActivity } from "../services/getActivity";
describe('should test the login class',()=>{
    beforeEach(()=>{
        jest.clearAllMocks();
        (data.findOne as jest.Mock)=jest.fn()})
    test('should test the is user exist ',async()=>{
        (data.findOne as jest.Mock).mockResolvedValue(null)
        const activity = new GetActivity('Vinay sai','Tommy')
        const results = await activity.getActivity()
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
        const activity = new GetActivity('Vinay sai','Peter')
        const results = await activity.getActivity()
        expect(results?.status).toBe(401)
    })
    test('should test the is pet gallery ',async()=>{
        (data.findOne as jest.Mock).mockResolvedValue({
            username:"Vinay sai",
            pet: [{
                petName:"Tommy",
                activity:[{
                    activityName:"walking",
                    startTime:new Date('2024-11-20T12:07:11.642+00:00'),
                    endTime:new Date('2024-11-20T12:07:11.642+00:00'),
                }] 
            },
            
            ]
        })
        const activity = new GetActivity('Vinay sai','Tommy')
        const results = await activity.getActivity()
        expect(results?.status).toBe(200)
    })
})