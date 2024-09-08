type Fish ={swim : ()=>void};
type bird = {fly : ()=> void};

function isFish(pet : Fish | bird):pet is Fish{
    return (pet as Fish).swim!==undefined
}

function getFood(pet : Fish | bird){
    if(isFish(pet)){
        pet
        return "fish food"
    }
    else{
        pet
        return "bird food"
    }
}
