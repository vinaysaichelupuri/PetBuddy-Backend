import { data } from "../models/data";
export class GetActivity {
    username:string;
    petName:string;
    constructor(username:string,petName:string){
        this.username = username,
        this.petName = petName
    }
    async getActivity(){
        const user = await data.findOne({username:this.username})
        if(!user){
            return {status:404}
        }
        const findPet = user.pet.find((item)=>item.petName===this.petName)
        if(!findPet){
            return {status:401}
        }
        else{
            const petActivity = findPet.activity
              return {status:200,petActivity}
        }
        
    }
}