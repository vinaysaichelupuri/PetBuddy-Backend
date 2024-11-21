import { data } from "../models/data";
export class AddActivity {
    username:string;
    petName:string;
    activityName:string;
    date:Date;
    startTime:Date;
    endTime:Date;
    constructor(username:string,petName:string,activityName:string,date:Date,startTime:Date,endTime:Date){
        this.username = username,
        this.petName = petName,
        this.activityName = activityName,
        this.date = date,
        this.startTime = startTime,
        this.endTime = endTime
    }
    async addActivity(){
        const user = await data.findOne({username:this.username})
        if(!user){
            return {status:404}
        }
        const findPet = user.pet.find((item)=>item.petName===this.petName)
        if(!findPet){
            return {status:401}
        }
        else{
            const petReminder = findPet.activity.push({activityName:this.activityName,date:this.date,startTime:this.startTime,endTime:this.endTime})
              await user.save();
              return{status:200}
        }
        
    }
}