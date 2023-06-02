import oldwoman from "../../../public/assets/map4/oldwoman.gif";
import taverne2 from "../../../public/assets/map4/taverne2.gif";
import song from "../../../public/assets/map1/littleroot.mp3";
import song2 from "../../../public/assets/map3/temple-of-time-Robert-Austin.mp3";
import song3 from "../../../public/assets/map4/DistantRoads.mp3";

class GlobalState {
    constructor() {
        this.mapping = 2;
        this.x = 260;
        this.y = 590;
        this.a = 1;
        this.N = -400; 
        this.FR = 255;
        this.EN = 150;
        this.oldwoman = oldwoman;
        this.taverne2 = taverne2;
        this.cnv = null;
        this.song = song;
        this.song2 = song2;
        this.song3 = song3;
    }

    
}

export default GlobalState;
