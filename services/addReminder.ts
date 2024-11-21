import { data } from "../models/data";
export class AddReminder {
    username:string;
    petName:string;
    type:string;
    remainderName:string;
    date:Date;
    startTime:Date;
    endTime:Date;
    constructor(username:string,petName:string,type:string,remainderName:string,date:Date,startTime:Date,endTime:Date){
        this.username = username,
        this.petName = petName,
        this.type = type,
        this.remainderName = remainderName,
        this.date = date,
        this.startTime = startTime,
        this.endTime = endTime
    }
    async addReminder(){
        const user = await data.findOne({username:this.username})
        if(!user){
            return {status:404}
        }
        const findPet = user.pet.find((item)=>item.petName===this.petName)
        if(!findPet){
            return {status:401}
        }
        else{
            const petReminder = findPet.Remainders.push({type:this.type,remainderName:this.remainderName,date:this.date,startTime:this.startTime,endTime:this.endTime})
              await user.save();
              return{status:200}
        }
        
    }
}