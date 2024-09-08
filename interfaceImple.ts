interface takephoto {
    cameramode: string
    filter: string
    brust: number
}
interface story{
    createstrory():void
}
class instagram implements takephoto {
    constructor(
        public cameramode: string,
        public filter: string,
        public brust: number
    ) {

    }
}

class youtube implements takephoto,story{
    constructor(
        public cameramode: string,
        public filter: string,
        public brust: number,
        public shorts : number
    ) {

    }
    createstrory(): void {
        
    }
}
