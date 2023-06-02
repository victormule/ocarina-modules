import Map from './Map.js';
import bedRoomMap from "../../data/map2/map2Data.js";


export default class Map2 extends Map {
    constructor(p5) {
        super(p5);
        this.bedRoomMap = bedRoomMap;
    }

    preload() {
        super.preload();
        this.bedRoomMap = this.p5.loadImage(this.bedRoomMap);    
    }

    setup() {
        super.setup();
    }

    draw() {
        super.draw();

        if (this.globalState.a == 1) {
            this.updateScene(this.img5);
        }
        if (this.globalState.a == 2) {
            this.updateScene(this.img6);
        }
        if (this.globalState.a == 3) {
            this.updateScene(this.img7);
        }
        if (this.globalState.a == 4) {
            this.updateScene(this.img8);
        }
    
        if (this.p5.keyIsDown(this.p5.LEFT_ARROW)) {
            this.updateScene(this.img2);
            this.globalState.x -= 5;
            this.globalState.a = 2;
        }
    
        if (this.p5.keyIsDown(this.p5.RIGHT_ARROW)) {
            this.updateScene(this.img3);
            this.globalState.x += 5;
            this.globalState.a = 3;
        }
    
        if (this.p5.keyIsDown(this.p5.UP_ARROW)) {
            this.updateScene(this.img4);
            this.globalState.y -= 5;
            this.globalState.a = 4;
        }
    
        if (this.p5.keyIsDown(this.p5.DOWN_ARROW)) {
            this.updateScene(this.img1);
            this.globalState.y += 5;
            this.globalState.a = 1;
        }

        this.p5.fill(255, 255);

        if (this.globalState.FR == 255) {
            this.p5.text("Bienvenue sur le site officiel de", 700, 460);
            this.p5.text("POKEMON OCARINA OF TIME", 700, 510);
            this.p5.text("le fan-game français inspiré de l'univers", 700, 560);
            this.p5.text("Nitendo (Pokemon, Zelda, Fire Emblem... ).", 700, 590);
            this.p5.text("Si tu veux en savoir d'avantage ", 700, 620);
            this.p5.text("sur le jeu, utilise les touches fléchées", 700, 650);
            this.p5.text("du clavier pour sortir de la maison", 700, 680);
            this.p5.text("et explorer ce nouveau monde!", 700, 710);
        }
        if (this.globalState.EN == 255) {
            this.p5.text("Welcome to the official website", 700, 460);
            this.p5.text("POKEMON OCARINA OF TIME", 700, 510);
            this.p5.text("the french fangame inspired by the", 700, 560);
            this.p5.text("Nitendo universe (Pokemon, Zelda... ).", 700, 590);
            this.p5.text("If you are interested to know more", 700, 620);
            this.p5.text("about it, use the arrow keys to explore ", 700, 650);
            this.p5.text("the vast world outside this house!", 700, 680);
        }
        
    
    
        //---MAP 2 limite---//
    
        if (this.globalState.x <= 98) {
            this.globalState.x += 5;
        }
        if (this.globalState.x >= 424) {
            this.globalState.x -= 5;
        }
        if (this.globalState.y <= 510) {
            this.globalState.y += 5;
        }
        if (this.globalState.x >= 88 && this.globalState.x <= 240 && this.globalState.y >= 742) {
            this.globalState.y -= 5;
        }
        if (this.globalState.x >= 290 && this.globalState.x <= 424 && this.globalState.y >= 742) {
            this.globalState.y -= 5;
        }
    
        //---MAP2 TRANSFER vers map 1--/
    
        if (this.globalState.y >= 752) {
            this.globalState.y = 780;
            this.globalState.x = 256;
            this.globalState.N = -446;
            // this.globalState.song.loop();
            // this.globalState.song.playMode("restart");
            // this.globalState.song.play();
            this.globalState.mapping = 1;
        }
    }

    updateScene(playerPic = null) {
        this.p5.clear();
        this.p5.noTint();
        this.p5.background(this.bedRoomMap);
        console.log("SHADOW Map2 :", this);
        this.p5.image(this.shadow, this.globalState.x + 2, this.globalState.y + 34);
        this.p5.image(playerPic, this.globalState.x, this.globalState.y);
        this.p5.tint(this.globalState.FR);
        this.p5.image(this.flagFR, 0, 392);
        this.p5.tint(this.globalState.EN);
        this.p5.image(this.flagEN, 60, 392);
    }  
}