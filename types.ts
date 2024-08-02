function display(name:string,password:string){
return name+password;
}
display("divith","111")

function ispaid(salary:number){
   return true;
}

function upper(y:string){
return y.toUpperCase();
}

function addtwo(num1:number,num2:number):number{
    return num1+num2;
}

//never specifies that the returned value is never read

let handleerr=(errmsg):never=>{

    throw new Error(errmsg)

}

//objects
function create():{name:string,price:number}{
    return {name:"reactjs" , price:399};
}