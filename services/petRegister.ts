import { data } from "../models/data";
export class PetRegister {
  username: string;
  petName: string;
  gender: string;
  emergencyNumber: string;
  breadName: string;
  petPhoto: string;
  age: string;
  weight: string;
  height: string;
  color: string;
  remarks: string;

  constructor(
    username: string,
    petName: string,
    gender: string,
    emergencyNumber: string,
    breadName: string,
    petPhoto: string,
    age: string,
    weight: string,
    height: string,
    color: string,
    remarks: string
  ) {
    (this.username = username),
      (this.petName = petName),
      (this.gender = gender),
      (this.emergencyNumber = emergencyNumber),
      (this.breadName = breadName),
      (this.petPhoto = petPhoto),
      (this.age = age),
      (this.weight = weight),
      (this.height = height),
      (this.color = color),
      (this.remarks = remarks);
  }
  async setPetRegister() {
    const user = await data.findOne({ username: this.username });
    if (!user) {
      return { status: 400 };
    }
    const findPet  = user.pet.find((item)=>item.petName===this.petName)
    if(findPet){
        return {status:401}
    }
    else{
        const pet = user.pet.push({
            petName: this.petName,
            gender: this.gender,
            emergencyNumber: this.emergencyNumber,
            breadName: this.emergencyNumber,
            petPhoto: this.petName,
            age: this.age,
            weight: this.weight,
            height: this.height,
            color: this.color,
            remarks: this.remarks,
          });
          await user.save();
          return{status:200}
    }
  }
}
