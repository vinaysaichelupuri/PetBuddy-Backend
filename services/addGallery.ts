import { data } from "../models/data";
export class AddGallery {
    username:string;
    petName:string;
    path:string;
    constructor(username:string,petName:string,path:string){
        this.username = username,
        this.petName = petName,
        this.path = path
    }
    async addGallery(){
        const user = await data.findOne({username:this.username})
        if(!user){
            return {status:404}
        }
        const findPet = user.pet.find((item)=>item.petName===this.petName)
        if(!findPet){
            return {status:401}
        }
        else{
            const petReminder = findPet.gallery.push({path:this.path})
              await user.save();
              return{status:200}
        }
        
    }
}