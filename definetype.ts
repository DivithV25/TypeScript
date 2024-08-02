type point = {
    x: number,
    y: number
};

function printpoint(pt: point) {
    console.log("X:", pt.x);
    console.log("Y:", pt.y);
}

printpoint({x:5,y:6});