import { data } from "../models/data";

export class PetData {
    username:string;
    constructor(username:string){
        this.username = username
    }
    async getPetData(){
        const user = await data.findOne({username:this.username})
        if(!user){
            return {status:404 , "message":"No user found"}
        }
        const petData = user.pet
        return {status:200 , petData}
    }
}