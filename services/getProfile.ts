import { data } from "../models/data";
export class GetProfile {
    username:string;
    constructor(username:string){
        this.username = username
    }
    async getProfileData(){
        const user = await data.findOne({username:this.username})
        if(!user){
            return {status:404 , "message":"No user found"}
        }
        const ProfileData = {username:user.username,email:user.email,userPhoto:user.userPhoto,phoneNumber:user.phoneNumber}
        return {status:200 , ProfileData}
    }
}