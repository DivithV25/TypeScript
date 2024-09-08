interface Square {
    kind: "square",
    length: number,

}

interface circle {
    kind: "circle",
    radius: number
}
type shape1 = Square | circle;
function getArea(shape: shape1) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2

        case "square":
            return shape.length * shape.length

        default:
            const _defautlforshape: never = shape
            return _defautlforshape
    }
}