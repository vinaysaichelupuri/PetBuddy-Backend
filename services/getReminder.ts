import { data } from "../models/data";
export class GetReminder {
    username:string;
    petName:string;
    constructor(username:string,petName:string){
        this.username = username,
        this.petName = petName
    }
    async getReminder(){
        const user = await data.findOne({username:this.username})
        if(!user){
            return {status:404}
        }
        const findPet = user.pet.find((item)=>item.petName===this.petName)
        if(!findPet){
            return {status:401}
        }
        else{
            const petReminder = findPet.Remainders
              return {status:200,petReminder}
        }
        
    }
}