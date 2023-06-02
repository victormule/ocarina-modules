import Map1 from "./components/Map/Map1";
import Map2 from "./components/Map/Map2";
// import Map3 from "./components/Map/Map3";
// import Map4 from "./components/Map/Map4";

let maps = [];
let currentMap;

export default function sketch(p5) {

    p5.preload = function() {
        // Créez les instances de Map et effectuez les préchargements nécessaires
        maps[0] = new Map1(p5);
        maps[1] = new Map2(p5);
        // maps[2] = new Map3(p5);
        // maps[3] = new Map4(p5);
        for (let i = 0; i < maps.length; i++) {
            maps[i].preload();
        }
    }
    
    p5.setup = function() {
        // Configurez la première carte
        for (let i = 0; i < maps.length; i++) {
            maps[i].setup();
        }

        currentMap = maps[1];
    }
    
    p5.draw = function() {
        let mapping = currentMap.getMapping();
        // Dessinez la carte actuelle
        switch(mapping) {
            case 1 : currentMap = maps[0];
                break;
            case 2 : currentMap = maps[1];
                break;
            case 3 : currentMap = maps[2];
                break;
            case 4 : currentMap = maps[3];
                break;
            default : currentMap = maps[1];
        }

        currentMap.draw();
    }    
}