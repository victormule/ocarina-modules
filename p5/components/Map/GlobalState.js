import oldwoman from "../../../public/assets/map4/oldwoman.gif";
import taverne2 from "../../../public/assets/map4/taverne2";

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
    }
}

export default GlobalState;
