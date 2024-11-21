import { data } from "../models/data";
import { AddGallery } from "../services/addGallery";
describe('should test the login class',()=>{
    beforeEach(()=>{
        jest.clearAllMocks();
        (data.findOne as jest.Mock)=jest.fn()})
    test('should test the is user exist ',async()=>{
        (data.findOne as jest.Mock).mockResolvedValue(null)
        const reminder = new AddGallery('Vinay sai','Tommy','image.jpg')
        const results = await reminder.addGallery()
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
        const reminder = new AddGallery('Vinay sai','Peter','image.jpg')
        const results = await reminder.addGallery()
        expect(results?.status).toBe(401)
    })
    test('should return 200 when pet is successfully saved', async () => {
        const mockSave = jest.fn();
        (data.findOne as jest.Mock).mockResolvedValue({
          username: "Vinay sai",
          pet: [{
            petName:"Tommy",
            gallery: [],
          }],
          
          save: mockSave
        });
        const reminder = new AddGallery('Vinay sai','Tommy','image.jpg')
        const results = await reminder.addGallery()
        expect(mockSave).toHaveBeenCalled();
        expect(results?.status).toBe(200);
      });
})