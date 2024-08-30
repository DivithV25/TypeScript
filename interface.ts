interface User {
    readonly dbId: number
    email: string,
    userId:number,
    googleId?:string
    starttrial(): string 
    getcoupon(couponname : string ,value : number ):number  
}

const divith: User = {dbId : 22 , email: "abc@gmail.com",
    userId : 2211,
    starttrial : ()=>{
        return "trial started"
    },
    getcoupon:(couponname:"divith", value:10) =>{
        return 10
    }
}

//// dbId value cannit be changes as its readonly  