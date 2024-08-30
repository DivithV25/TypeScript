interface User {
    readonly dbId: number
    email: string,
    userId:number,
    googleId?:string 
}

//// dbId value cannit be changes as its readonly  