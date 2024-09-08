function anotherfunction<T,U extends number>(valone:T , valtwo : U):object{
    return {
        valone,
        valtwo
    }
}
anotherfunction(4,5.6)

class Sellable<T>{
    public CArt :T[] = []

    addtocart(products:T){
        this.CArt.push(products)
    }
}