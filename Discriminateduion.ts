interface Square{
    kind : "square",
    length : number,
    breadth: number
}

interface circle{
    kind : "circle",
    radius : number
}

type shape = Square | circle;

function shapecheck(shape: shape){
    if(shape.kind==="circle"){
        return Math.PI * shape.radius**2;
    }
    return shape.length*shape.length
}