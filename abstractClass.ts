abstract class takephoto {
    constructor(
        public cameramode: string,
        public filter: string

    ) {

    }

    abstract getfuturefunction(): void //these methids needs to be defined in the future
    getReelTime(): number {
        // some of the complex function 
        return 8
    }
}

class Instagram extends takephoto {
    constructor(
        public cameramode: string,
        public filter: string

    ) {
        super(cameramode, filter)
    }

     getfuturefunction(): void {

    }
}

const dv=new Instagram("test","Test")

dv.getReelTime()
