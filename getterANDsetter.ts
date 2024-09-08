class User{
    private coursecount = 1
    public email : string 
    private name :string
    readonly city : string = "Jaipur"
     constructor(email :string , name : string)     {
        this.email=email;
        this.name=name
     }

     private deletetoken(){
        console.log("this method can be accessed only in this class")
     }

     get getAppleEmail():string{
      return `apple@${this.email}`
     }

     get courseCount():number{
        return this.coursecount
     }
     set courseCount(courseNum){
        this.coursecount=courseNum
     }

}

const divith = new User("abc@gmail.com","divith");