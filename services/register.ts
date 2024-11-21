import { data } from "../models/data";
export class Register {
    username:string;
    password:string;
    userPhoto:string;
    constructor(username:string,password:string,userPhoto:string){
        this.username = username,
        this.password = password,
        this.userPhoto =userPhoto
    }
    async getRegister(){
        const username = this.username
        const password = this.password
        const userPhoto = this.userPhoto
        const user = await data.findOne({username:username})
        if(user){
            return {status:400}
        }
        if(username===''||password===''){
            return {status:401}
        }
        const newUser = new data({ username, password, userPhoto });
        await newUser.save();
    }
}