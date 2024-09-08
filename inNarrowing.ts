interface User{
    name : string,
    email:string
}

interface Admin{
    name: string,
    emial:string,
    isAdmin : boolean
}

function checkAdmin(account : User | Admin){
    if("isAdmin" in account){
        return account.isAdmin
    }
    return false
}