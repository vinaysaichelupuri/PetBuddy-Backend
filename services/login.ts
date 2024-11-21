import { data } from "../models/data";
export class Login {
    username:string;
    password:string;
    constructor(username:string,password:string){
        this.username = username,
        this.password = password
    }
    async getLogin(){
        const username = this.username
        const password = this.password
        const user = await data.findOne({username:username})
        if(!user){
            return {status:404}
        }
        if(user.password===password){
            return{status:200}
        }
        else{
            return{status:401}
        }
    }
}