let score :number | string = 33
score =44

type user={
    name:string;
    id:number
}

type admin={
    username:string;
    id:number
}

let divith:user|admin ={name:"divith",id:300};
divith={username:"divithv",id:300}


function printid(id:number|string){
    if(typeof id === "string"){
         id.toUpperCase();
    }
}

const data : number[]=[1,2,3];
const data1 : string[]=["Hi","Hello","hi"];
const data2 :(string|number)[]=["1","2",3];
