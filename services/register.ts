import { data } from "../models/data";
export class Register {
  username: string;
  password: string;
  userPhoto: string;
  email: string;
  phoneNumber: number;
  constructor(
    username: string,
    password: string,
    userPhoto: string,
    email: string,
    phoneNumber: number
  ) {
    (this.username = username),
      (this.password = password),
      (this.userPhoto = userPhoto),
      (this.email = email),
      (this.phoneNumber = phoneNumber);
  }
  async getRegister() {
    const user = await data.findOne({ username: this.username });
    if (user) {
      return { status: 400 };
    } else {
      data.create({username:this.username,password:this.password,userPhoto:this.userPhoto,email:this.email,phoneNumber:this.phoneNumber})
      return { status: 200 };
    }
  }
}
