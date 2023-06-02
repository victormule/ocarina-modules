import Map from './Map.js';
import { soundEffects, music, images } from "../../data/map4/map4Data.js";


export default class Map1 extends Map {
    constructor(p) {
        super(p);
        this.mapImages = images;
        this.mapMusic = music;
        this.mapSoundEffect = soundEffects;
    }

    preload() {
        super.preload();

        Object.keys(this.mapImages).forEach(key => {
            this[key] = loadImage(this.mapImages[key]);
        });

        Object.keys(this.mapMusic).forEach(key => {
            this[key] = loadSound(this.mapMusic[key]);
        });

        Object.keys(this.mapSoundEffect).forEach(key => {
            this[key] = loadSound(this.mapSoundEffect[key]);
        })
    }

    setup() {
        super.setup();

        if (a == 1) {
            clear();
            noTint();
            background(taverne);
            image(oldwoman, 181, 2450);
            image(shadow, x + 2, y + 34);
            image(img5, x, y);
            image(taverne2,79,2368);
            tint(FR);
            image(flagFR, 0, y - 316);
            tint(EN);
            image(flagEN, 60, y - 316);
        }
        if (a == 2) {
            clear();
            noTint();
            background(taverne);
            image(oldwoman, 181, 2450);
            image(shadow, x + 2, y + 34);
            image(img6, x, y);
            image(taverne2,79,2368);
            tint(FR);
            image(flagFR, 0, y - 316);
            tint(EN);
            image(flagEN, 60, y - 316);
        }
        if (a == 3) {
            clear();
            noTint();
            background(taverne);
            image(oldwoman, 181, 2450);
            image(shadow, x + 2, y + 34);
            image(img7, x, y);
            image(taverne2,79,2368);
            tint(FR);
            image(flagFR, 0, y - 316);
            tint(EN);
            image(flagEN, 60, y - 316);
        }
        if (a == 4) {
            clear();
            noTint();
            background(taverne);
            image(oldwoman, 181, 2450);
            image(shadow, x + 2, y + 34);
            image(img8, x, y);
            image(taverne2,79,2368);
            tint(FR);
            image(flagFR, 0, y - 316);
            tint(EN);
            image(flagEN, 60, y - 316);
        }
        if (keyIsDown(LEFT_ARROW)) {
            clear();
            noTint();
            background(taverne);
            image(oldwoman, 181, 2450);
            image(shadow, x + 2, y + 34);
            image(img2, x, y);
            image(taverne2,79,2368);
            tint(FR);
            image(flagFR, 0, y - 316);
            tint(EN);
            image(flagEN, 60, y - 316);
            x -= 5;
            a = 2;
        }
    
        if (keyIsDown(RIGHT_ARROW)) {
            clear();
            noTint();
            background(taverne);
            image(oldwoman, 181, 2450);
            image(shadow, x + 2, y + 34);
            image(img3, x, y)
            image(taverne2,79,2368);
            tint(FR);
            image(flagFR, 0, y - 316);
            tint(EN);
            image(flagEN, 60, y - 316);
            x += 5;
            a = 3;
        }
    
        if (keyIsDown(UP_ARROW)) {
            clear();
            noTint();
            background(taverne);
            image(oldwoman, 181, 2450);
            image(shadow, x + 2, y + 34);
            image(img4, x, y);
            image(taverne2,79,2368);
            tint(FR);
            image(flagFR, 0, y - 316);
            tint(EN);
            image(flagEN, 60, y - 316);
            y -= 5;
            a = 4;
            N += 5;
        }
    
        if (keyIsDown(DOWN_ARROW)) {
            clear();
            noTint();
            background(taverne);
            image(oldwoman, 181, 2450);
            image(shadow, x + 2, y + 34);
            image(img1, x, y);
            image(taverne2,79,2368);
            tint(FR);
            image(flagFR, 0, y - 316);
            tint(EN);
            image(flagEN, 60, y - 316);
            y += 5;
            a = 1;
            N -= 5;
        }
        tint(255, z);
        image(light2, 33, 2334);
        z += Z;
        if (z > 250) {
            Z = -0.4;
        }
        if (z < 230) {
            Z = +0.3;
        }
    
            //---MAP 4 limite---//
            //---mur---//
            if (x <= 46) {
                x += 5;
            }
            if (x >= 338) {
                x -= 5;
            }
            if (y <= 2400) {
                y += 5;
                N -= 5;
            }
            if (x >= 40 && x <= 170 && y >= 2608) {
                y -= 5;
                N += 5;
            }
            if (x >= 220 && x <= 360 && y >= 2608) {
                y -= 5;
                N += 5;
            }
            //---meuble--//
    
            //---(table gauche)---//
            if (x >= 60 && x <= 140 && y >= 2522 && y <= 2572) {
                x += 5;
            }
            if (x >= 52 && x <= 132 && y >= 2522 && y <= 2572) {
                x -= 5;
            }
            if (x >= 60 && x <= 132 && y >= 2522 && y <= 2580) {
                y += 5;
                N -= 5;
            }
            if (x >= 60 && x <= 132 && y >= 2516 && y <= 2572) {
                y -= 5;
                N += 5;
            }
    
            //---(table droite)---//
            if (x >= 253 && x <= 336 && y >= 2522 && y <= 2572) {
                x += 5;
            }
            if (x >= 244 && x <= 328 && y >= 2522 && y <= 2572) {
                x -= 5;
            }
            if (x >= 252 && x <= 328 && y >= 2522 && y <= 2580) {
                y += 5;
                N -= 5;
            }
            if (x >= 252 && x <= 328 && y >= 2516 && y <= 2572) {
                y -= 5;
                N += 5;
            }
    
            //---(comptoire)---//
            if (x >= 66 && x <= 290 && y >= 2454 && y <= 2476) {
                x += 5;
            }
            if (x >= 58 && x <= 282 && y >= 2454 && y <= 2476) {
                x -= 5;
            }
            if (x >= 66 && x <= 282 && y >= 2454 && y <= 2488) {
                y += 5;
                N -= 5;
            }
            if (x >= 66 && x <= 282 && y >= 2446 && y <= 2476) {
                y -= 5;
                N += 5;
            }
            if (x >= 250 && x <= 290 && y >= 2000 && y <= 2470) {
                x += 5;
            }
            //---(vase gauche)---//
            if (x >= 0 && x <= 76 && y >= 0 && y <= 2420) {
                x += 5;
            }
            if (x >= 0 && x <= 70 && y >= 0 && y <= 2420) {
                x -= 5;
            }
            if (x >= 0 && x <= 70 && y >= 0 && y <= 2430) {
                y += 5;
                N -= 5;
            }
            if (x >= 0 && x <= 70 && y >= 0 && y <= 2420) {
                y -= 5;
                N += 5;
            }
    
            //---armoire et cheminée et coffre)---//
            if (x >= 100 && x <= 476 && y >= 0 && y <= 2420) {
                x += 5;
            }
            if (x >= 86 && x <= 470 && y >= 0 && y <= 2420) {
                x -= 5;
            }
            if (x >= 100 && x <= 470 && y >= 0 && y <= 2430) {
                y += 5;
                N -= 5;
            }
            if (x >= 100 && x <= 470 && y >= 0 && y <= 2420) {
                y -= 5;
                N += 5;
            }
    
            //---Affichage mama-san---//
            if (y >= 2200 && y <= 2500 && x >= 170 && x <= 220) {
                noTint();
                image(img31, 550, y +20);
                image(img30, 10, y + 130);
                fill(30, 250);
                if (FR == 255) {
                text("Depuis que les développeurs sont installés ici,", 476, y + 230);
                text("je vois arriver plein de nouveaux voyageurs.", 476, y + 266);
                text("Et ça, c'est bon pour les affaires !", 476, y + 302);
                }
                if (EN == 255) {
                text("Since the developers settled here,", 476, y + 230);
                text("I've been seeing a lot of new travelers arriving.", 476, y + 266);
                text("And that's good for business!", 476, y + 302);
                }
            }
            //---Affichage mama-san stop---//
            if (x >= 110 && x <= 200 && y >= 2350 && y <= 2460) {
                mapping = 6;
                
            }
    
            //---MAP4 TRANSFER vers map 1--/
    
            if (y >= 2618) {
                y = 2645;
                x = 190;
                N = -2311;
    
                cloud2.reset();
                cloud1.reset();
                bg.reset();
                img12.reset();
                ponita1.reset();
                fille1.reset();
                battle1.reset();
                combat2.reset();
                combat1.reset();
                battle.reset();
                ponita.reset();
                fille.reset();
                img11.reset();
                bird1.reset();
    
                song3.playMode("sustain");
                song3.pause();
                song.loop();
                song.playMode("restart");
                song.play();
                mapping = 1;
            }
            //--transfere coffre--//
            if (grandCoffre == true){
            if (x >= 200 && x <= 470 && y >= 0 && y <= 2440) {   
            mapping = 5;
                
                
            }
            }
        }
}