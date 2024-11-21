import { data } from "../models/data";
import { GetGallery } from "../services/getGallery";
describe('should test the login class',()=>{
    beforeEach(()=>{
        jest.clearAllMocks();
        (data.findOne as jest.Mock)=jest.fn()})
    test('should test the is user exist ',async()=>{
        (data.findOne as jest.Mock).mockResolvedValue(null)
        const photoGallery = new GetGallery('Vinay sai','Tommy')
        const results = await photoGallery.getGallery()
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
        const photoGallery = new GetGallery('Vinay sai','Peter')
        const results = await photoGallery.getGallery()
        expect(results?.status).toBe(401)
    })
    test('should test the is pet gallery ',async()=>{
        (data.findOne as jest.Mock).mockResolvedValue({
            username:"Vinay sai",
            pet: [{
                petName:"Tommy",
                gallery:[{
                    path:"image.jpg"
                }] 
            },
            
            ]
        })
        const photoGallery = new GetGallery('Vinay sai','Tommy')
        const results = await photoGallery.getGallery()
        expect(results?.status).toBe(200)
    })


})