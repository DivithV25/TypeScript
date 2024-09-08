const score:Array<number> =[]

function indentityone(val:any):any{
    return val
}
//To avoid this we use type generics to maintain same datatypes everywhere 
function indentitytwo<Type>(val:Type):Type{
    return val
}
function indentitythree<T>(val:T):T{
    return val
}