import Map1 from "./components/Map/Map1";
import Map2 from "./components/Map/Map2";
import Map3 from "./components/Map/Map3";
import Map4 from "./components/Map/Map4";
import GlobalState from "./components/Map/GlobalState";

let globalState = new GlobalState();
let maps = [];
let currentMap;

function preload() {
    // Créez les instances de Map et effectuez les préchargements nécessaires
    maps[0] = new Map1(globalState);
    maps[1] = new Map2(globalState);
    maps[2] = new Map3(globalState);
    maps[3] = new Map4(globalState);
}

function setup() {
    // Configurez la première carte
    currentMap = maps[1];
    currentMap.setup();
}

function draw() {
    // Dessinez la carte actuelle
    currentMap.draw();

    // Utilisez la variable 'mapping' pour changer de carte si nécessaire
    if (mapping !== currentMap.id) {
        currentMap = maps[mapping];
        currentMap.setup();
    }
}