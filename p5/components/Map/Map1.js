import Map from './Map.js';
import { music, images } from "../../data/map1/map1Data.js";

export default class Map1 extends Map {
    constructor(p) {
        super(p);
        this.mapImages = images;
        this.mapMusic = music;
        this.g = -600;
        this.e = -100;
        this.f = 800;
        this.o = -400;
        this.u = 0;
        this.t = 0;
    }

    preload() {
        super.preload();

        Object.keys(this.mapImages).forEach(key => {
            this[key] = p.loadImage(this.mapImages[key]);
        });

        Object.keys(this.mapMusic).forEach(key => {
            this[key] = p.loadSound(this.mapMusic[key]);
        });
    }

    setup() {
        super.setup();

        this.setupScrollbar();
    }

    setupScrollbar() {
        scrollbarImg = p.createImg('assets/scrollbar.png');
        scrollbarImg.position(p.windowWidth/2 +244, p.windowHeight/2 +167, "absolute");
        scrollbarImg.style("z-index", "-100");
    }

    draw() {
      super.draw(); 

      if (this.globalState.a == 1) {
        this.updateScene(this.player.img5, this.images.kaio1, this.images.img13, this.images.kaio1a);
      }
      if (this.globalState.a == 2) {
        this.updateScene(this.player.img6, this.images.kaio1, this.images.img13, this.images.kaio1a);
      }

      if (this.globalState.a == 3) {
        this.updateScene(this.player.img7, this.images.kaio1, this.images.img13, this.images.kaio1a);
      }
      if (this.globalState.a == 4) {
        this.updateScene(this.player.img8, this.images.kaio1, this.images.img13, this.images.kaio1a);
      }

      if (keyIsDown(LEFT_ARROW)) {
        this.updateScene(this.player.img2, this.images.kaio1, this.images.img13, this.images.kaio1a);
        this.globalState.x -= 5;
        this.globalState.a = 2;
      }

      if (keyIsDown(RIGHT_ARROW)) {
        this.updateScene(this.player.img3, this.images.kaio1, this.images.img13, this.images.kaio1a);
        this.globalState.x += 5;
        this.globalState.a = 3;
      }

      if (keyIsDown(UP_ARROW)) {
        this.updateScene(this.player.img4, this.images.kaio1, this.images.img13, this.images.kaio1a);
        this.globalState.y -= 5;
        this.u = this.globalState.y -220 - (this.globalState.y*2*0.33);
        this.t = this.globalState.y-250 - (this.globalState.y*2*0.3);
        this.globalState.a = 4;
        this.globalState.N += 5;
      }

      if (keyIsDown(DOWN_ARROW)) {
        this.updateScene(this.player.img1, this.images.kaio1, this.images.img13, this.images.kaio1a);
        this.globalState.y += 5;
        this.u = this.globalState.y -220 - (this.globalState.y*2*0.33);
        this.t = this.globalState.y -250 - (this.globalState.y*2*0.3);
        this.globalState.a = 1;
        this.globalState.N -= 5;
      }
    //--Boucle animation--//
    
    //---CADRE LIMITE---//
    if (this.globalState.x <= 64) {
      this.globalState.x += 5;
    }
    if (this.globalState.x >= 868) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y <= 340) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.y >= 2810) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }

    //-------Falaise-------//

    if (this.globalState.y <= 370 && this.globalState.x >= 500) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.y <= 374 && this.globalState.x >= 510) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.y <= 400 && this.globalState.x >= 628) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.y <= 404 && this.globalState.x >= 636) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.y <= 430 && this.globalState.x >= 750) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.y <= 434 && this.globalState.x >= 760) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.y <= 460 && this.globalState.x >= 800) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.y <= 464 && this.globalState.x >= 810) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    //---//
    if (this.globalState.y <= 370 && this.globalState.x <= 360) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.y <= 374 && this.globalState.x <= 350) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.y <= 400 && this.globalState.x <= 230) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.y <= 404 && this.globalState.x <= 220) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.y <= 430 && this.globalState.x <= 140) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.y <= 434 && this.globalState.x <= 130) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.y <= 460 && this.globalState.x <= 80) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.y <= 464 && this.globalState.x <= 70) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }

    //----Tree Gauche----//

    if (this.globalState.y >= 400 && this.globalState.y <= 2300 && this.globalState.x <= 94) {
      this.globalState.x += 5;
    }
    if (this.globalState.y >= 900 && this.globalState.y <= 1100 && this.globalState.x <= 120) {
      this.globalState.x += 5;
    }
    if (this.globalState.y >= 940 && this.globalState.y <= 1100 && this.globalState.x <= 136) {
      this.globalState.x += 5;
    }
    if (this.globalState.y >= 1030 && this.globalState.y <= 1184 && this.globalState.x <= 370) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }
    if (this.globalState.y >= 1032 && this.globalState.y <= 1184 && this.globalState.x <= 374) {
      this.globalState.x += 5;
    }
    if (this.globalState.y >= 1028 && this.globalState.y <= 1186 && this.globalState.x <= 370) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.y >= 1100 && this.globalState.y <= 1240 && this.globalState.x <= 256) {
      this.globalState.x += 5;
    }
        
    if (this.globalState.y >= 1235 && this.globalState.y <= 1300 && this.globalState.x <= 306) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }
    if (this.globalState.y >= 1240 && this.globalState.y <= 1300 && this.globalState.x <= 312) {
      this.globalState.x += 5;
    }
    if (this.globalState.y >= 1268 && this.globalState.y <= 1300 && this.globalState.x <= 408) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }
    if (this.globalState.y >= 1270 && this.globalState.y <= 1346 && this.globalState.x <= 410) {
      this.globalState.x += 5;
    }
    if (this.globalState.y >= 1280 && this.globalState.y <= 1350 && this.globalState.x <= 408) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.y >= 1280 && this.globalState.y <= 1400 && this.globalState.x <= 372) {
      this.globalState.x += 5;
    }
    if (this.globalState.y >= 1398 && this.globalState.y <= 1400 && this.globalState.x <= 408) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }
    if (this.globalState.y >= 1400 && this.globalState.y <= 1478 && this.globalState.x <= 412 && this.globalState.x >= 362) {
      this.globalState.x += 5;
    }
    if (this.globalState.y >= 1400 && this.globalState.y <= 1482 && this.globalState.x <= 408 && this.globalState.x >= 362) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.y >= 1400 && this.globalState.y <= 1480 && this.globalState.x <= 408 && this.globalState.x >= 356) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 1400 && this.globalState.y <= 1455 && this.globalState.x <= 408 && this.globalState.x >= 280) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.y >= 1400 && this.globalState.y <= 1478 && this.globalState.x <= 288) {
      this.globalState.x += 5;
    }
    if (this.globalState.y >= 1400 && this.globalState.y <= 1482 && this.globalState.x <= 284) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.y >= 1400 && this.globalState.y <= 1508 && this.globalState.x <= 254) {
      this.globalState.x += 5;
    }
    if (this.globalState.y >= 1400 && this.globalState.y <= 1512 && this.globalState.x <= 248) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.y >= 1400 && this.globalState.y <= 1538 && this.globalState.x <= 224) {
      this.globalState.x += 5;
    }
    if (this.globalState.y >= 1400 && this.globalState.y <= 1542 && this.globalState.x <= 220) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.y >= 1538 && this.globalState.y <= 1598 && this.globalState.x <= 212) {
      this.globalState.x += 5;
    }
    if (this.globalState.y >= 1538 && this.globalState.y <= 1602 && this.globalState.x <= 208) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.y >= 1538 && this.globalState.y <= 2000 && this.globalState.x <= 160) {
      this.globalState.x += 5;
    }
    if (this.globalState.y >= 1706 && this.globalState.y <= 1738 && this.globalState.x <= 220) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }
    if (this.globalState.y >= 1710 && this.globalState.y <= 1740 && this.globalState.x <= 226) {
      this.globalState.x += 5;
    }
    if (this.globalState.y >= 1710 && this.globalState.y <= 1748 && this.globalState.x <= 220) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.y >= 1740 && this.globalState.y <= 1804 && this.globalState.x <= 196) {
      this.globalState.x += 5;
    }
    if (this.globalState.y >= 1740 && this.globalState.y <= 1810 && this.globalState.x <= 190) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.y >= 1800 && this.globalState.y <= 1880 && this.globalState.x <= 188) {
      this.globalState.x += 5;
    }
    if (this.globalState.y >= 1872 && this.globalState.y <= 1900 && this.globalState.x <= 214) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }
    if (this.globalState.y >= 1878 && this.globalState.y <= 1920 && this.globalState.x <= 220) {
      this.globalState.x += 5;
    }
    if (this.globalState.y >= 1910 && this.globalState.y <= 1982 && this.globalState.x <= 248) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }
    if (this.globalState.y >= 1916 && this.globalState.y <= 1982 && this.globalState.x <= 254) {
      this.globalState.x += 5;
    }
    if (this.globalState.y >= 1974 && this.globalState.y <= 2100 && this.globalState.x <= 302) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }
    if (this.globalState.y >= 1980 && this.globalState.y <= 2020 && this.globalState.x <= 308) {
      this.globalState.x += 5;
    }
    if (this.globalState.y >= 2006 && this.globalState.y <= 2100 && this.globalState.x <= 348) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }
    if (this.globalState.y >= 2012 && this.globalState.y <= 2104 && this.globalState.x <= 356) {
      this.globalState.x += 5;
    }
    if (this.globalState.y >= 2120 && this.globalState.y <= 2172 && this.globalState.x <= 314) {
      this.globalState.x += 5;
    }
    if (this.globalState.y >= 2166 && this.globalState.y <= 2206 && this.globalState.x <= 380) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }
    if (this.globalState.y >= 2172 && this.globalState.y <= 2212 && this.globalState.x <= 384) {
      this.globalState.x += 5;
    }
    if (this.globalState.y >= 2172 && this.globalState.y <= 2218 && this.globalState.x <= 380) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.y >= 2150 && this.globalState.y <= 2244 && this.globalState.x <= 224) {
      this.globalState.x += 5;
    }
    if (this.globalState.y >= 2150 && this.globalState.y <= 2246 && this.globalState.x <= 218) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.y >= 2150 && this.globalState.y <= 2280 && this.globalState.x <= 192) {
      this.globalState.x += 5;
    }
    if (this.globalState.y >= 2150 && this.globalState.y <= 2280 && this.globalState.x <= 186) {
      this.globalState.x += 5;
    }
    if (this.globalState.y >= 2150 && this.globalState.y <= 2306 && this.globalState.x <= 180) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.y >= 2150 && this.globalState.y <= 2332 && this.globalState.x <= 102) {
      this.globalState.x += 5;
    }
    if (this.globalState.y >= 2150 && this.globalState.y <= 2340 && this.globalState.x <= 96) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.y >= 2386 && this.globalState.y <= 2460 && this.globalState.x <= 86) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }
    if (this.globalState.y >= 2392 && this.globalState.y <= 2460 && this.globalState.x <= 92) {
      this.globalState.x += 5;
    }
    if (this.globalState.y >= 2460 && this.globalState.y <= 2470 && this.globalState.x <= 96) {
      this.globalState.x += 5;
    }
    if (this.globalState.y >= 2470 && this.globalState.y <= 2480 && this.globalState.x <= 100) {
      this.globalState.x += 5;
    }
    if (this.globalState.y >= 2480 && this.globalState.y <= 2490 && this.globalState.x <= 106) {
      this.globalState.x += 5;
    }
    if (this.globalState.y >= 2500 && this.globalState.y <= 2510 && this.globalState.x <= 112) {
      this.globalState.x += 5;
    }
    if (this.globalState.y >= 2510 && this.globalState.y <= 2516 && this.globalState.x <= 118) {
      this.globalState.x += 5;
    }
    if (this.globalState.y >= 2510 && this.globalState.y <= 2560 && this.globalState.x <= 126) {
      this.globalState.x += 5;
    }
    if (this.globalState.y >= 2530 && this.globalState.y <= 2566 && this.globalState.x <= 120) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.y >= 2560 && this.globalState.y <= 2800 && this.globalState.x <= 96) {
      this.globalState.x += 5;
    }

    //----Tree Droite----//

    if (this.globalState.y >= 0 && this.globalState.y <= 762 && this.globalState.x >= 842) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 0 && this.globalState.y <= 768 && this.globalState.x >= 848) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.y >= 500 && this.globalState.y <= 624 && this.globalState.x >= 800) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }
    if (this.globalState.y >= 506 && this.globalState.y <= 624 && this.globalState.x >= 792) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 500 && this.globalState.y <= 630 && this.globalState.x >= 800) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.y >= 842 && this.globalState.y <= 3000 && this.globalState.x >= 848) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }
    if (this.globalState.y >= 842 && this.globalState.y <= 3000 && this.globalState.x >= 842) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 1030 && this.globalState.y <= 1184 && this.globalState.x >= 560) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }
    if (this.globalState.y >= 1036 && this.globalState.y <= 1184 && this.globalState.x >= 554) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 1036 && this.globalState.y <= 1190 && this.globalState.x >= 560) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.y >= 1100 && this.globalState.y <= 1210 && this.globalState.x >= 704) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 1204 && this.globalState.y <= 1220 && this.globalState.x >= 666) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }
    if (this.globalState.y >= 1210 && this.globalState.y <= 1280 && this.globalState.x >= 658) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 1235 && this.globalState.y <= 1300 && this.globalState.x >= 568) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }
    if (this.globalState.y >= 1240 && this.globalState.y <= 1300 && this.globalState.x >= 562) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 1266 && this.globalState.y <= 1300 && this.globalState.x >= 522) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }
    if (this.globalState.y >= 1270 && this.globalState.y <= 1344 && this.globalState.x >= 516) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 1300 && this.globalState.y <= 1350 && this.globalState.x >= 522) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.y >= 1270 && this.globalState.y <= 1380 && this.globalState.x >= 548) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 1300 && this.globalState.y <= 1386 && this.globalState.x >= 554) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.y >= 1300 && this.globalState.y <= 1450 && this.globalState.x >= 584) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 1398 && this.globalState.y <= 1410 && this.globalState.x >= 522) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }
    if (this.globalState.y >= 1404 && this.globalState.y <= 1474 && this.globalState.x >= 516) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 1450 && this.globalState.y <= 1480 && this.globalState.x >= 522) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.y >= 1450 && this.globalState.y <= 1492 && this.globalState.x >= 552) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 1450 && this.globalState.y <= 1500 && this.globalState.x >= 558) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.y >= 1450 && this.globalState.y <= 1564 && this.globalState.x >= 600) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 1532 && this.globalState.y <= 1564 && this.globalState.x >= 586) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }
    if (this.globalState.y >= 1540 && this.globalState.y <= 1564 && this.globalState.x >= 580) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 1550 && this.globalState.y <= 1570 && this.globalState.x >= 586) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.y >= 1540 && this.globalState.y <= 1600 && this.globalState.x >= 644) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 1550 && this.globalState.y <= 1606 && this.globalState.x >= 650) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.y >= 1540 && this.globalState.y <= 1634 && this.globalState.x >= 680) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 1550 && this.globalState.y <= 1640 && this.globalState.x >= 686) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.y >= 1540 && this.globalState.y <= 1678 && this.globalState.x >= 704) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 1550 && this.globalState.y <= 1684 && this.globalState.x >= 710) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.y >= 1540 && this.globalState.y <= 1800 && this.globalState.x >= 750) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 1742 && this.globalState.y <= 1900 && this.globalState.x >= 716) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }
    if (this.globalState.y >= 1748 && this.globalState.y <= 1900 && this.globalState.x >= 710) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 1826 && this.globalState.y <= 1900 && this.globalState.x >= 660) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }
    if (this.globalState.y >= 1832 && this.globalState.y <= 1900 && this.globalState.x >= 654) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 1890 && this.globalState.y <= 1920 && this.globalState.x >= 630) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }
    if (this.globalState.y >= 1896 && this.globalState.y <= 1940 && this.globalState.x >= 624) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 1930 && this.globalState.y <= 2000 && this.globalState.x >= 554) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }
    if (this.globalState.y >= 1936 && this.globalState.y <= 2100 && this.globalState.x >= 550) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 1974 && this.globalState.y <= 2100 && this.globalState.x >= 524) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }
    if (this.globalState.y >= 1980 && this.globalState.y <= 2100 && this.globalState.x >= 518) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 2012 && this.globalState.y <= 2100 && this.globalState.x >= 414) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }
    if (this.globalState.y >= 2016 && this.globalState.y <= 2104 && this.globalState.x >= 408) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 2104 && this.globalState.y <= 2112 && this.globalState.x >= 416) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 2100 && this.globalState.y <= 2118 && this.globalState.x >= 408) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.y >= 2104 && this.globalState.y <= 2144 && this.globalState.x >= 460) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 2100 && this.globalState.y <= 2150 && this.globalState.x >= 466) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.y >= 2104 && this.globalState.y <= 2190 && this.globalState.x >= 492) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 2170 && this.globalState.y <= 2190 && this.globalState.x >= 460) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }
    if (this.globalState.y >= 2176 && this.globalState.y <= 2190 && this.globalState.x >= 454) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 2190 && this.globalState.y <= 2215 && this.globalState.x >= 460) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.y >= 2176 && this.globalState.y <= 2324 && this.globalState.x >= 544) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 2190 && this.globalState.y <= 2330 && this.globalState.x >= 550) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.y >= 2100 && this.globalState.y <= 2380 && this.globalState.x >= 592) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 2362 && this.globalState.y <= 2390 && this.globalState.x >= 554) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }
    if (this.globalState.y >= 2368 && this.globalState.y <= 2402 && this.globalState.x >= 548) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 2368 && this.globalState.y <= 2410 && this.globalState.x >= 554) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.y >= 2390 && this.globalState.y <= 2468 && this.globalState.x >= 578 && this.globalState.x <= 694) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 2450 && this.globalState.y <= 2474 && this.globalState.x >= 584 && this.globalState.x <= 694) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.y >= 2420 && this.globalState.y <= 2590 && this.globalState.x >= 782) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 2450 && this.globalState.y <= 2596 && this.globalState.x >= 788) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.y >= 2638 && this.globalState.y <= 2655 && this.globalState.x >= 816) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }
    if (this.globalState.y >= 2644 && this.globalState.y <= 2682 && this.globalState.x >= 810) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 2650 && this.globalState.y <= 2688 && this.globalState.x >= 816) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.y >= 2724 && this.globalState.y <= 2900 && this.globalState.x >= 812) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }
    if (this.globalState.y >= 2730 && this.globalState.y <= 2900 && this.globalState.x >= 806) {
      this.globalState.x -= 5;
    }

    //----panneau 1----//

    if (this.globalState.y >= 770 && this.globalState.y <= 800 && this.globalState.x >= 328 && this.globalState.x <= 372) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 770 && this.globalState.y <= 800 && this.globalState.x >= 334 && this.globalState.x <= 378) {
      this.globalState.x += 5;
    }
    if (this.globalState.y >= 770 && this.globalState.y <= 806 && this.globalState.x >= 334 && this.globalState.x <= 372) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.y >= 764 && this.globalState.y <= 800 && this.globalState.x >= 334 && this.globalState.x <= 372) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }

    ///panneau1 Affichage///

    if (this.globalState.y >= 782 && this.globalState.y <= 818 && this.globalState.x >= 318 && this.globalState.x <= 388) {
      p.noTint();
      p.image(this.images.img9, 0, this.globalState.y + 150);
      p.fill(255, 150);
      if (FR == 255) {
        text("Observez, étudiez et attrapez des Pokémon", 484, this.globalState.y + 226);
        text("sauvages durant une période révolue de ", 484, this.globalState.y + 252);
        text("l'Histoire du Japon, afin de compléter le ", 484, this.globalState.y + 278);
        text("tout premier Pokédex de la région.", 484, this.globalState.y + 304);
      }
      if (EN == 255) {
        text("Survey, catch, and research wild Pokémon", 484, this.globalState.y + 234);
        text("in this.globalState.a long-gone era of Japan", 484, this.globalState.y + 260);
        text("to complete the region’s first Pokédex. ", 484, this.globalState.y + 286);
      }
    }

    ///panneau2 Affichage///

    if (this.globalState.y >= 1460 && this.globalState.y <= 1490 && this.globalState.x >= 346 && this.globalState.x <= 425) {
      p.noTint();
      p.image(this.images.img9, 0, this.globalState.y + 150);
      p.fill(255, 150);
      if (FR == 255) {
        text("Nous sommes en 1570. A cette époque,", 484, this.globalState.y + 226);
        text("il n'est pas rare de se voir provoquer", 484, this.globalState.y + 252);
        text("en duel. Vos pokemons ne vous seront", 484, this.globalState.y + 278);
        text("d'aucun secours dans un combat au sabre.", 484, this.globalState.y + 304);
      }
      if (EN == 255) {
        text("In 1570, it's usual to be challenged", 484, this.globalState.y + 234);
        text("to this.globalState.a dual. But be carefull, your pokemon", 484, this.globalState.y + 260);
        text("will be helpless during this.globalState.a sword fight.", 484, this.globalState.y + 286);
      }
    }

    ///panneau3 Affichage///

    if (this.globalState.y >= 2104 && this.globalState.y <= 2160 && this.globalState.x >= 300 && this.globalState.x <= 356) {
      p.noTint();
      p.image(this.images.img9, 0, this.globalState.y + 150);
      p.fill(255, 150);
      if (FR == 255) {
        text("Affrontez des dresseurs redoutable dans", 484, this.globalState.y + 226);
        text("des combats aussi difficiles qu'épiques.", 484, this.globalState.y + 252);
        text("Menez vos Pokemon à la victoire contre de", 484, this.globalState.y + 278);
        text("grands champions pour remporter leurs royaume.", 484, this.globalState.y + 304);
      }
      if (EN == 255) {
        text("In 1570, it's usual to be challenged", 484, this.globalState.y + 234);
        text("to this.globalState.a dual. But be carefull, your pokemon", 484, this.globalState.y + 260);
        text("will be helpless during this.globalState.a sword fight.", 484, this.globalState.y + 286);
      }
    }

    //-panneau3-//

    if (this.globalState.y >= 2104 && this.globalState.y <= 2140 && this.globalState.x <= 348) {
      this.globalState.x += 5;
    }
    if (this.globalState.y >= 2120 && this.globalState.y <= 2146 && this.globalState.x <= 348) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    //--//
    //----panneau 4 -----///

    if (this.globalState.y >= 2420 && this.globalState.y <= 2560 && this.globalState.x >= 738) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 2450 && this.globalState.y <= 2566 && this.globalState.x >= 744) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    ///panneau4 Affichage///

  if (this.globalState.y >= 2410 && this.globalState.y <= 2584 && this.globalState.x >= 724 && this.globalState.x <= 790) {
    if (!pseudoInput) { 
      formulation = p.createImg(this.images.formulaire);
      formulation.position(p.windowWidth/2 -480, p.windowHeight/2 +80, "absolute");
      formulation.style("z-index", "800");
      cachemisere = createImg(this.images.cachemisere);
      cachemisere.position(p.windowWidth/2 +230, p.windowHeight/2 +80, "absolute");
      cachemisere.style("z-index: 1100");
      pseudoInput = p.createInput().size(180, 20);
      pseudoInput.position(p.windowWidth/2 - 250, p.windowHeight/2 + 160, "absolute");
      pseudoInput.style("font-family", this.globalVariables.font);
      pseudoInput.style("font-size", "16px");
      pseudoInput.style('opacity', '0.6');
      pseudoInput.style("z-index", "1000");
      pseudoInput.elt.placeholder = 'Pseudo';
      commentInput = p.createElement('textarea').size(180, 100);
      commentInput.position(p.windowWidth/2 - 250, p.windowHeight/2 + 194, "absolute");
      commentInput.style("font-family", this.globalVariables.font);
      commentInput.style("font-size", "16px");
      commentInput.style('opacity', '0.65');
      commentInput.style("resize", "none");
      commentInput.style("z-index", "1000");
      commentInput.attribute("placeholder", "this.globalState.N'hésitez pas à laisser un commentaire ici!");
      sendButton = p.createButton('Envoyer');
      sendButton.position(p.windowWidth/2 - 250, p.windowHeight/2 + 310, "absolute");
      sendButton.style("font-family", this.globalVariables.font);
      sendButton.style('color', '#e9dcd1');
      sendButton.style("border", "5px outset inset solid #9e7150");
      sendButton.style('background-color', '#a08066');
      sendButton.style("z-index", "1000");
      sendButton.mousePressed(envoyerSaisies);
      afficherCommentaires()
    
      // Dessinez la barre de défilement si elle doit être visible
      
      scrollbarbox();
      scrollbarImg.style("z-index", "1200");
        
    } 
  } else {
      // Cacher ou supprimer le formulaire de commentaire
      if (pseudoInput) {
        affichageCommentaires = false; // mettre à jour la variable booléenne
        pseudoInput.remove();
        commentInput.remove();
        sendButton.remove();
        formulation.remove();
        cachemisere.remove();
        scrollbarImg.style("z-index", "-100");
        scrollbarImg.position(p.windowWidth/2 +244, p.windowHeight/2 +167, "absolute");
        pseudoInput = null;
        commentInput = null;
        sendButton = null;
        formulation = null;
        cachemisere = null;
        suppCommentaires();
      }
    }

    if (!pseudoInput) {
      affichageCommentaires = false; // mettre à jour la variable booléenne
      suppCommentaires();
    }

    //-------panneau 5------//
    if (this.globalState.x >= 204 && this.globalState.x <= 254 && this.globalState.y >= 2632 && this.globalState.y <= 2658) {
      this.globalState.x += 5;
    }
    if (this.globalState.x >= 196 && this.globalState.x <= 246 && this.globalState.y >= 2624 && this.globalState.y <= 2658) {
      this.globalState.x -= 5;
    }
    if (this.globalState.x >= 204 && this.globalState.x <= 246 && this.globalState.y >= 2632 && this.globalState.y <= 2666) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.x >= 204 && this.globalState.x <= 246 && this.globalState.y >= 2632 && this.globalState.y <= 2658) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }

    //------MAISON-------//

    if (this.globalState.x >= 240 && this.globalState.x <= 368 && this.globalState.y >= 668 && this.globalState.y <= 774) {
      this.globalState.x += 5;
    }
    if (this.globalState.x >= 230 && this.globalState.x <= 360 && this.globalState.y >= 668 && this.globalState.y <= 774) {
      this.globalState.x -= 5;
    }
    if (this.globalState.x >= 200 && this.globalState.x <= 364 && this.globalState.y >= 680 && this.globalState.y <= 769) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.x >= 240 && this.globalState.x <= 364 && this.globalState.y >= 670 && this.globalState.y <= 760) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }
    if (this.globalState.x >= 270 && this.globalState.x <= 364 && this.globalState.y >= 680 && this.globalState.y <= 774) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }

    //------Maison 2 ------///

    if (this.globalState.y >= 2420 && this.globalState.y <= 2530 && this.globalState.x >= 612 && this.globalState.x <= 694) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 2450 && this.globalState.y <= 2536 && this.globalState.x >= 620 && this.globalState.x <= 694) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.y >= 2420 && this.globalState.y <= 2530 && this.globalState.x >= 620 && this.globalState.x <= 700) {
      this.globalState.x += 5;
    }
    if (this.globalState.y >= 2420 && this.globalState.y <= 2530 && this.globalState.x >= 712) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 2450 && this.globalState.y <= 2536 && this.globalState.x >= 718) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }

      //------TAVERNE-------//

      if (this.globalState.x >= 108 && this.globalState.x <= 282 && this.globalState.y >= 2530 && this.globalState.y <= 2622) {
      this.globalState.x += 5;
    }
    if (this.globalState.x >= 98 && this.globalState.x <= 274 && this.globalState.y >= 2530 && this.globalState.y <= 2622) {
      this.globalState.x -= 5;
    }
    if (this.globalState.x >= 108 && this.globalState.x <= 274 && this.globalState.y >= 2530 && this.globalState.y <= 2630) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.x >= 108 && this.globalState.x <= 274 && this.globalState.y >= 2522 && this.globalState.y <= 2622) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }
    //---Porte taverne---//
    if (this.globalState.x >= 108 && this.globalState.x <= 178 && this.globalState.y >= 2540 && this.globalState.y <= 2632) {
      this.globalState.x += 5;
    }
    if (this.globalState.x >= 98 && this.globalState.x <= 170 && this.globalState.y >= 2540 && this.globalState.y <= 2632) {
      this.globalState.x -= 5;
    }
    if (this.globalState.x >= 108 && this.globalState.x <= 170 && this.globalState.y >= 2540 && this.globalState.y <= 2640) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.x >= 108 && this.globalState.x <= 170 && this.globalState.y >= 2532 && this.globalState.y <= 2632) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }

    if (this.globalState.x >= 218 && this.globalState.x <= 282 && this.globalState.y >= 2540 && this.globalState.y <= 2632) {
      this.globalState.x += 5;
    }
    if (this.globalState.x >= 210 && this.globalState.x <= 274 && this.globalState.y >= 2540 && this.globalState.y <= 2632) {
      this.globalState.x -= 5;
    }
    if (this.globalState.x >= 218 && this.globalState.x <= 274 && this.globalState.y >= 2540 && this.globalState.y <= 2640) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.x >= 218 && this.globalState.x <= 174 && this.globalState.y >= 2532 && this.globalState.y <= 2632) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }

    //-------Arbre Taverne------//
    if (this.globalState.x >= 230 && this.globalState.x <= 346 && this.globalState.y >= 2598 && this.globalState.y <= 2628) {
      this.globalState.x += 5;
    }
    if (this.globalState.x >= 222 && this.globalState.x <= 338 && this.globalState.y >= 2598 && this.globalState.y <= 2628) {
      this.globalState.x -= 5;
    }
    if (this.globalState.x >= 230 && this.globalState.x <= 338 && this.globalState.y >= 2598 && this.globalState.y <= 2636) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.x >= 230 && this.globalState.x <= 338 && this.globalState.y >= 2590 && this.globalState.y <= 2628) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }
    //-------Rocher Taverne------//
    if (this.globalState.x >= 266 && this.globalState.x <= 280 && this.globalState.y >= 2620 && this.globalState.y <= 2636) {
      this.globalState.x += 5;
    }
    if (this.globalState.x >= 258 && this.globalState.x <= 288 && this.globalState.y >= 2610 && this.globalState.y <= 2636) {
      this.globalState.x -= 5;
    }
    if (this.globalState.x >= 266 && this.globalState.x <= 280 && this.globalState.y >= 2620 && this.globalState.y <= 2644) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.x >= 266 && this.globalState.x <= 280 && this.globalState.y >= 2620 && this.globalState.y <= 2636) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }
    //------BASSIN-------//

    if (this.globalState.x >= 70 && this.globalState.x <= 248 && this.globalState.y >= 668 && this.globalState.y <= 864) {
      this.globalState.x += 5;
    }
    if (this.globalState.x >= 80 && this.globalState.x <= 240 && this.globalState.y >= 668 && this.globalState.y <= 864) {
      this.globalState.x -= 5;
    }
    if (this.globalState.x >= 80 && this.globalState.x <= 244 && this.globalState.y >= 680 && this.globalState.y <= 870) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    if (this.globalState.x >= 90 && this.globalState.x <= 244 && this.globalState.y >= 669 && this.globalState.y <= 860) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }

    //---arbres----//

    if (this.globalState.y >= 564 && this.globalState.y <= 624 && this.globalState.x <= 120) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }
    if (this.globalState.y >= 570 && this.globalState.y <= 624 && this.globalState.x <= 126) {
      this.globalState.x += 5;
    }
    if (this.globalState.y >= 564 && this.globalState.y <= 630 && this.globalState.x <= 120) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    //

    if (this.globalState.y >= 646 && this.globalState.y <= 720 && this.globalState.x >= 136 && this.globalState.x <= 176) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }
    if (this.globalState.y >= 652 && this.globalState.y <= 720 && this.globalState.x >= 130 && this.globalState.x <= 176) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 652 && this.globalState.y <= 720 && this.globalState.x >= 136 && this.globalState.x <= 182) {
      this.globalState.x += 5;
    }

    //

    if (this.globalState.y >= 544 && this.globalState.y <= 590 && this.globalState.x >= 516 && this.globalState.x <= 572) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }
    if (this.globalState.y >= 550 && this.globalState.y <= 590 && this.globalState.x >= 510 && this.globalState.x <= 572) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 550 && this.globalState.y <= 590 && this.globalState.x >= 516 && this.globalState.x <= 578) {
      this.globalState.x += 5;
    }
    if (this.globalState.y >= 550 && this.globalState.y <= 596 && this.globalState.x >= 516 && this.globalState.x <= 572) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }

    //
    if (this.globalState.y >= 672 && this.globalState.y <= 716 && this.globalState.x >= 708 && this.globalState.x <= 762) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }
    if (this.globalState.y >= 678 && this.globalState.y <= 716 && this.globalState.x >= 702 && this.globalState.x <= 762) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 678 && this.globalState.y <= 716 && this.globalState.x >= 708 && this.globalState.x <= 768) {
      this.globalState.x += 5;
    }
    if (this.globalState.y >= 678 && this.globalState.y <= 722 && this.globalState.x >= 708 && this.globalState.x <= 762) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }

    //

    if (this.globalState.y >= 740 && this.globalState.y <= 782 && this.globalState.x >= 772 && this.globalState.x <= 828) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }
    if (this.globalState.y >= 746 && this.globalState.y <= 782 && this.globalState.x >= 766 && this.globalState.x <= 828) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 746 && this.globalState.y <= 782 && this.globalState.x >= 772 && this.globalState.x <= 834) {
      this.globalState.x += 5;
    }
    if (this.globalState.y >= 746 && this.globalState.y <= 788 && this.globalState.x >= 772 && this.globalState.x <= 828) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }

    //

    if (this.globalState.y >= 854 && this.globalState.y <= 910 && this.globalState.x >= 740 && this.globalState.x <= 798) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }
    if (this.globalState.y >= 860 && this.globalState.y <= 910 && this.globalState.x >= 734 && this.globalState.x <= 798) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 860 && this.globalState.y <= 910 && this.globalState.x >= 740 && this.globalState.x <= 804) {
      this.globalState.x += 5;
    }
    if (this.globalState.y >= 860 && this.globalState.y <= 916 && this.globalState.x >= 740 && this.globalState.x <= 798) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }

    //

    if (this.globalState.y >= 928 && this.globalState.y <= 960 && this.globalState.x >= 240 && this.globalState.x <= 272) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }
    if (this.globalState.y >= 934 && this.globalState.y <= 960 && this.globalState.x >= 234 && this.globalState.x <= 272) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 934 && this.globalState.y <= 960 && this.globalState.x >= 240 && this.globalState.x <= 278) {
      this.globalState.x += 5;
    }
    if (this.globalState.y >= 934 && this.globalState.y <= 966 && this.globalState.x >= 240 && this.globalState.x <= 272) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }
    //

    //-------enclo--------//

    if (this.globalState.y >= 820 && this.globalState.y <= 930 && this.globalState.x >= 556 && this.globalState.x <= 724) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }
    if (this.globalState.y >= 826 && this.globalState.y <= 930 && this.globalState.x >= 550 && this.globalState.x <= 724) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 826 && this.globalState.y <= 930 && this.globalState.x >= 556 && this.globalState.x <= 730) {
      this.globalState.x += 5;
    }
    if (this.globalState.y >= 826 && this.globalState.y <= 936 && this.globalState.x >= 556 && this.globalState.x <= 724) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }

    //---------moine1--------//
    if (this.globalState.y >= 1592 && this.globalState.y <= 1630 && this.globalState.x >= 282 && this.globalState.x <= 328) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }
    if (this.globalState.y >= 1598 && this.globalState.y <= 1630 && this.globalState.x >= 276 && this.globalState.x <= 328) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 1598 && this.globalState.y <= 1630 && this.globalState.x >= 282 && this.globalState.x <= 334) {
      this.globalState.x += 5;
    }
    if (this.globalState.y >= 1598 && this.globalState.y <= 1636 && this.globalState.x >= 282 && this.globalState.x <= 328) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }

    //---------Samurai--------//

    if (this.globalState.y >= 2342 && this.globalState.y <= 2382 && this.globalState.x >= 96 && this.globalState.x <= 152) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }
    if (this.globalState.y >= 2348 && this.globalState.y <= 2382 && this.globalState.x >= 90 && this.globalState.x <= 152) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 2342 && this.globalState.y <= 2382 && this.globalState.x >= 96 && this.globalState.x <= 158) {
      this.globalState.x += 5;
    }
    if (this.globalState.y >= 2342 && this.globalState.y <= 2388 && this.globalState.x >= 96 && this.globalState.x <= 152) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }

    //-------------Samurai Affichage-----------//

    if (this.globalState.y >= 2316 && this.globalState.y <= 2410 && this.globalState.x >= 70 && this.globalState.x <= 180) {

      p.noTint();
      p.image(this.mapImages.img20, 582, this.globalState.y + 24);
      p.image(this.mapImages.img21, 10, this.globalState.y + 130);

      p.fill(30, 250);
      if (FR == 255) {
        text("Chrysacier c'est toi le meilleur !", 484, this.globalState.y + 248);
        text("Attaques armure, comme lui !", 484, this.globalState.y + 284);
      }
      if (EN == 255) {
        text("You are the stronger Metapod !", 484, this.globalState.y + 248);
        text("Harden, like him !", 484, this.globalState.y + 284);
      }
    }

    //---------Chrysasiers--------//

    if (this.globalState.y >= 2342 && this.globalState.y <= 2382 && this.globalState.x >= 192 && this.globalState.x <= 266) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }
    if (this.globalState.y >= 2348 && this.globalState.y <= 2382 && this.globalState.x >= 186 && this.globalState.x <= 266) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 2342 && this.globalState.y <= 2382 && this.globalState.x >= 192 && this.globalState.x <= 272) {
      this.globalState.x += 5;
    }
    if (this.globalState.y >= 2342 && this.globalState.y <= 2388 && this.globalState.x >= 192 && this.globalState.x <= 266) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }

    //---------Sasha & Pikachu--------//

    if (this.globalState.y >= 2342 && this.globalState.y <= 2382 && this.globalState.x >= 296 && this.globalState.x <= 370) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }
    if (this.globalState.y >= 2348 && this.globalState.y <= 2382 && this.globalState.x >= 290 && this.globalState.x <= 370) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 2342 && this.globalState.y <= 2382 && this.globalState.x >= 296 && this.globalState.x <= 376) {
      this.globalState.x += 5;
    }
    if (this.globalState.y >= 2342 && this.globalState.y <= 2388 && this.globalState.x >= 296 && this.globalState.x <= 370) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }

    //-------------Sasha affichage-----------//

    if (this.globalState.y >= 2316 && this.globalState.y <= 2410 && this.globalState.x >= 280 && this.globalState.x <= 394) {

      p.noTint();
      p.image(this.mapImages.img22, 534, this.globalState.y + 22);
      p.image(this.mapImages.img23, 10, this.globalState.y + 130);
      p.fill(30, 250);
      if (FR == 255) {
        text("Tiens bon Chrysacier !", 484, this.globalState.y + 248);
        text("Armure au maximun !", 484, this.globalState.y + 284);
      }
      if (EN == 255) {
        text("Metapod hold on !", 484, this.globalState.y + 248);
        text("Maximum harden !", 484, this.globalState.y + 284);
      }
    }

    //---------Aventurière--------//

    if (this.globalState.y >= 2584 && this.globalState.y <= 2620 && this.globalState.x >= 460 && this.globalState.x <= 586) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }
    if (this.globalState.y >= 2590 && this.globalState.y <= 2620 && this.globalState.x >= 454 && this.globalState.x <= 586) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 2590 && this.globalState.y <= 2620 && this.globalState.x >= 460 && this.globalState.x <= 592) {
      this.globalState.x += 5;
    }
    if (this.globalState.y >= 2590 && this.globalState.y <= 2626 && this.globalState.x >= 460 && this.globalState.x <= 586) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }

    //-------------Aventurière affichage-----------//

    if (this.globalState.y >= 2566 && this.globalState.y <= 2650 && this.globalState.x >= 430 && this.globalState.x <= 610) {
  
      p.noTint();
      p.image(this.mapImages.img24, 584, this.globalState.y + 22);
      p.image(this.mapImages.img25, 10, this.globalState.y + 130);

      p.fill(30, 250);
      if (FR == 255) {
        text("Dans cette aventure, il faut du temps ", 484, this.globalState.y + 226);
        text("pour que ton pokemon this.t'obéisses.", 484, this.globalState.y + 252);
        text("Seuls les liens d'amitier et la persévérance", 484, this.globalState.y + 278);
        text("en feront un bon compagnon de combat. ", 484, this.globalState.y + 304);
      }
      if (EN == 255) {
        text("If you become strong enough you will be", 484, this.globalState.y + 226);
        text("promoted as this.globalState.a Samurai, this.globalState.a Ninja or this.globalState.a Monk.", 484, this.globalState.y + 252);
        text("Remember that the Pokemon's strengh", 484, this.globalState.y + 278);
        text("depend on his trainer's choices.", 484, this.globalState.y + 304);
      }
    }

    //---------Kaio--------//

    if (this.globalState.y >= 1672 && this.globalState.y <= 1712 && this.globalState.x >= 494 && this.globalState.x <= 542) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }
    if (this.globalState.y >= 1680 && this.globalState.y <= 1712 && this.globalState.x >= 486 && this.globalState.x <= 542) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 1680 && this.globalState.y <= 1712 && this.globalState.x >= 494 && this.globalState.x <= 548) {
      this.globalState.x += 5;
    }
    if (this.globalState.y >= 1680 && this.globalState.y <= 1720 && this.globalState.x >= 494 && this.globalState.x <= 542) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }

    //----Kaio affichage---//

    if (this.globalState.y >= 1660 && this.globalState.y <= 1680 && this.globalState.x >= 482 && this.globalState.x <= 550) {
      if (this.globalState.a == 1) {
        this.updateScene(this.player.img5, this.images.kaio4, this.images.img13);
      }
      if (this.globalState.a == 2) {
        this.updateScene(this.player.img6, this.images.kaio4, this.images.img13);
      }
      if (this.globalState.a == 3) {
        this.updateScene(this.player.img7, this.images.kaio4, this.images.img13);
      }
      if (this.globalState.a == 4) {
        this.updateScene(this.player.img8, this.images.kaio4, this.images.img13);
      }
      if (keyIsDown(LEFT_ARROW)) {
        this.updateScene(this.player.img2, this.images.kaio4, this.images.img13);
      }

      if (keyIsDown(RIGHT_ARROW)) {
        this.updateScene(this.player.img3, this.images.kaio4, this.images.img13);
      }

      if (keyIsDown(UP_ARROW)) {
        this.updateScene(this.player.img4, this.images.kaio4, this.images.img13);
      }

      if (keyIsDown(DOWN_ARROW)) {
        this.updateScene(this.player.img1, this.images.kaio4, this.images.img13);
      }
      p.noTint();
      p.image(img18, 590, this.globalState.y + 30);
      p.image(img19, 10, this.globalState.y + 130);

      p.fill(30, 250);
      if (FR == 255) {
        text("Si tu deviens fort tu pourras monter en grade", 484, this.globalState.y + 226);
        text("et devenir Samuraï, Ninja ou Moine.", 484, this.globalState.y + 252);
        text("Sache que la force d'un Pokemon dépend", 484, this.globalState.y + 278);
        text("aussi des choix de son dresseur. ", 484, this.globalState.y + 304);
      }
      if (EN == 255) {
        text("If you become strong enough you will be", 484, this.globalState.y + 226);
        text("promoted as this.globalState.a Samurai, this.globalState.a Ninja or this.globalState.a Monk.", 484, this.globalState.y + 252);
        text("Remember that the Pokemon's strengh", 484, this.globalState.y + 278);
        text("depend on his trainer's choices.", 484, this.globalState.y + 304);
      }
    }

    if (this.globalState.y >= 1690 && this.globalState.y <= 1720 && this.globalState.x >= 458 && this.globalState.x <= 510) {
      if (this.globalState.a == 1) {
        this.updateScene(this.player.img5, this.images.kaio2, this.images.img13);
      }
      if (this.globalState.a == 2) {
        this.updateScene(this.player.img6, this.images.kaio2, this.images.img13);
      }
      if (this.globalState.a == 3) {
        this.updateScene(this.player.img7, this.images.kaio2, this.images.img13);
      }
      if (this.globalState.a == 4) {
        this.updateScene(this.player.img8, this.images.kaio2, this.images.img13);
      }
      if (keyIsDown(LEFT_ARROW)) {
        this.updateScene(this.player.img2, this.images.kaio2, this.images.img13);
      }

      if (keyIsDown(RIGHT_ARROW)) {
        this.updateScene(this.player.img3, this.images.kaio2, this.images.img13);
      }

      if (keyIsDown(UP_ARROW)) {
        this.updateScene(this.player.img4, this.images.kaio2, this.images.img13);
      }

      if (keyIsDown(DOWN_ARROW)) {
        this.updateScene(this.player.img1, this.images.kaio2, this.images.img13);
      }
      p.noTint();
      p.image(img18, 590, this.globalState.y + 30);
      p.image(img19, 10, this.globalState.y + 130);

      p.fill(30, 250);
      if (FR == 255) {
        text("Si tu deviens fort tu pourras monter en grade", 484, this.globalState.y + 226);
        text("et devenir Samuraï, Ninja ou Moine.", 484, this.globalState.y + 252);
        text("Sache que la force d'un Pokemon dépend", 484, this.globalState.y + 278);
        text("aussi des choix de son dresseur. ", 484, this.globalState.y + 304);
      }
      if (EN == 255) {
        text("If you become strong enough you will be", 484, this.globalState.y + 226);
        text("promoted as this.globalState.a Samurai, this.globalState.a Ninja or this.globalState.a Monk.", 484, this.globalState.y + 252);
        text("Remember that the Pokemon's strengh", 484, this.globalState.y + 278);
        text("depend on his trainer's choices.", 484, this.globalState.y + 304);
      }
    }

    if (this.globalState.y >= 1680 && this.globalState.y <= 1720 && this.globalState.x >= 510 && this.globalState.x <= 560) {
      if (this.globalState.a == 1) {
        this.updateScene(this.player.img5, this.images.kaio3, this.images.img13);
      }
      if (this.globalState.a == 2) {
        this.updateScene(this.player.img6, this.images.kaio3, this.images.img13);
      }
      if (this.globalState.a == 3) {
        this.updateScene(this.player.img7, this.images.kaio3, this.images.img13);
      }
      if (this.globalState.a == 4) {
        this.updateScene(this.player.img8, this.images.kaio3, this.images.img13);
      }
      if (keyIsDown(LEFT_ARROW)) {
        this.updateScene(this.player.img2, this.images.kaio3, this.images.img13);
      }

      if (keyIsDown(RIGHT_ARROW)) {
        this.updateScene(this.player.img3, this.images.kaio3, this.images.img13);
      }

      if (keyIsDown(UP_ARROW)) {
        this.updateScene(this.player.img4, this.images.kaio3, this.images.img13);
      }

      if (keyIsDown(DOWN_ARROW)) {
        this.updateScene(this.player.img1, this.images.kaio3, this.images.img13);
      }
      p.noTint();
      p.image(img18, 590, this.globalState.y + 30);
      p.image(img19, 10, this.globalState.y + 130);

      p.fill(30, 250);
      if (FR == 255) {
        text("Si tu deviens fort tu pourras monter en grade", 484, this.globalState.y + 226);
        text("et devenir Samuraï, Ninja ou Moine.", 484, this.globalState.y + 252);
        text("Sache que la force d'un Pokemon dépend", 484, this.globalState.y + 278);
        text("aussi des choix de son dresseur. ", 484, this.globalState.y + 304);
      }
      if (EN == 255) {
        text("If you become strong enough you will be", 484, this.globalState.y + 226);
        text("promoted as this.globalState.a Samurai, this.globalState.a Ninja or this.globalState.a Monk.", 484, this.globalState.y + 252);
        text("Remember that the Pokemon's strengh", 484, this.globalState.y + 278);
        text("depend on his trainer's choices.", 484, this.globalState.y + 304);
      }
    }

    if (this.globalState.y >= 1720 && this.globalState.y <= 1760 && this.globalState.x >= 482 && this.globalState.x <= 550) {
      if (this.globalState.a == 1) {
        this.updateScene(this.player.img5, this.images.kaio1, this.images.img13, this.images.kaio1a);
      }
      if (this.globalState.a == 2) {
        this.updateScene(this.player.img6, this.images.kaio1, this.images.img13, this.images.kaio1a);
      }
      if (this.globalState.a == 3) {
        this.updateScene(this.player.img7, this.images.kaio1, this.images.img13, this.images.kaio1a);
      }
      if (this.globalState.a == 4) {
        this.updateScene(this.player.img8, this.images.kaio1, this.images.img13, this.images.kaio1a);
      }
      if (keyIsDown(LEFT_ARROW)) {
        this.updateScene(this.player.img2, this.images.kaio1, this.images.img13, this.images.kaio1a);
      }

      if (keyIsDown(RIGHT_ARROW)) {
        this.updateScene(this.player.img3, this.images.kaio1, this.images.img13, this.images.kaio1a);
      }

      if (keyIsDown(UP_ARROW)) {
        this.updateScene(this.player.img4, this.images.kaio1, this.images.img13, this.images.kaio1a);
      }

      if (keyIsDown(DOWN_ARROW)) {
        this.updateScene(this.player.img1, this.images.kaio1, this.images.img13, this.images.kaio1a);
      }
      p.noTint();
      p.image(img18, 590, this.globalState.y + 30);
      p.image(img19, 10, this.globalState.y + 130);

      p.fill(30, 250);
      if (FR == 255) {
        text("Si tu deviens fort tu pourras monter en grade", 484, this.globalState.y + 226);
        text("et devenir Samuraï, Ninja ou Moine.", 484, this.globalState.y + 252);
        text("Sache que la force d'un Pokemon dépend", 484, this.globalState.y + 278);
        text("aussi des choix de son dresseur. ", 484, this.globalState.y + 304);
      }
      if (EN == 255) {
        text("If you become strong enough you will be", 484, this.globalState.y + 226);
        text("promoted as this.globalState.a Samurai, this.globalState.a Ninja or this.globalState.a Monk.", 484, this.globalState.y + 252);
        text("Remember that the Pokemon's strengh", 484, this.globalState.y + 278);
        text("depend on his trainer's choices.", 484, this.globalState.y + 304);
      }
    }
    //---------combat--------//

    if (this.globalState.y >= 1740 && this.globalState.y <= 1808 && this.globalState.x >= 428 && this.globalState.x <= 620) {
      this.globalState.y -= 5;
      this.globalState.N += 5;
    }
    if (this.globalState.y >= 1748 && this.globalState.y <= 1808 && this.globalState.x >= 420 && this.globalState.x <= 620) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 1748 && this.globalState.y <= 1808 && this.globalState.x >= 428 && this.globalState.x <= 628) {
      this.globalState.x += 5;
    }
    if (this.globalState.y >= 1748 && this.globalState.y <= 1816 && this.globalState.x >= 428 && this.globalState.x <= 620) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }

    //-------Dame Kyoka------//

    if (this.globalState.y >= 0 && this.globalState.y <= 360 && this.globalState.x >= 444 && this.globalState.x <= 500) {
      this.globalState.x -= 5;
    }
    if (this.globalState.y >= 0 && this.globalState.y <= 360 && this.globalState.x >= 450 && this.globalState.x <= 500) {
      this.globalState.x += 5;
    }
    if (this.globalState.y >= 0 && this.globalState.y <= 366 && this.globalState.x >= 450 && this.globalState.x <= 500) {
      this.globalState.y += 5;
      this.globalState.N -= 5;
    }

    //----Kyoka affichage---//

    if (this.globalState.y >= 0 && this.globalState.y <= 354 && this.globalState.x >= 432 && this.globalState.x <= 500) {
      if (this.globalState.a == 1) {
        this.updateScene(this.player.img5, this.images.kaio1, this.images.img14, this.images.kaio1a);
      }
      if (this.globalState.a == 2) {
        this.updateScene(this.player.img6, this.images.kaio1, this.images.img14, this.images.kaio1a);
      }
      if (this.globalState.a == 3) {
        this.updateScene(this.player.img7, this.images.kaio1, this.images.img14, this.images.kaio1a);
      }
      if (this.globalState.a == 4) {
        this.updateScene(this.player.img8, this.images.kaio1, this.images.img14, this.images.kaio1a);
      }
      p.noTint();
      p.image(img17, 600, this.globalState.y + 30);
      p.image(img16, 10, this.globalState.y + 130);

      p.fill(30, 250);
      if (FR == 255) {
        text("Oh! Un visiteur! Quelle région magnifique,", 484, this.globalState.y + 226);
        text("n'est ce pas? Mais.... ", 484, this.globalState.y + 252);
        text("Une grande menace pèse sur nous...", 484, this.globalState.y + 278);
        text("Pourras tu nous venir en aide?!", 484, this.globalState.y + 304);
      }
      if (EN == 255) {
        text("Oh! A stranger! What this.globalState.a wonderful country,", 484, this.globalState.y + 226);
        text("isn'this.t it? But.... ", 484, this.globalState.y + 252);
        text("A terrible threatens approach.", 484, this.globalState.y + 278);
        text("Will you be strong enough to help us?!", 484, this.globalState.y + 304);
      }
    }

    if (this.globalState.y >= 366 && this.globalState.y <= 380 && this.globalState.x >= 448 && this.globalState.x <= 500) {
      if (this.globalState.a == 1) {
        this.updateScene(this.player.img5, this.images.kaio1, this.images.img15, this.images.kaio1a);
      }
      if (this.globalState.a == 2) {
        this.updateScene(this.player.img6, this.images.kaio1, this.images.img15, this.images.kaio1a);
      }
      if (this.globalState.a == 3) {
        this.updateScene(this.player.img7, this.images.kaio1, this.images.img15, this.images.kaio1a);
      }
      if (this.globalState.a == 4) {
        this.updateScene(this.player.img8, this.images.kaio1, this.images.img15, this.images.kaio1a);
      }
      p.noTint();
      p.image(img17, 600, this.globalState.y + 30);
      p.image(img16, 10, this.globalState.y + 130);

      p.fill(30, 250);
      if (FR == 255) {
        text("Oh! Un visiteur! Quelle région magnifique,", 484, this.globalState.y + 226);
        text("n'est ce pas? Mais.... ", 484, this.globalState.y + 252);
        text("Une grande menace pèse sur nous...", 484, this.globalState.y + 278);
        text("Pourras tu nous venir en aide?!", 484, this.globalState.y + 304);
      }
      if (EN == 255) {
        text("Oh! A stranger! What this.globalState.a wonderful country,", 484, this.globalState.y + 226);
        text("isn'this.t it? But.... ", 484, this.globalState.y + 252);
        text("A terrible threatens approach.", 484, this.globalState.y + 278);
        text("Will you be strong enough to help us?!", 484, this.globalState.y + 304);
      }
    }

    //------SKY-----//

    this.o += 1;
    this.g += 0.8;
    if (this.u <= -120) {
      this.u += 1.5;
    }
    if (this.u >= 120) {
      this.u -= 1.5;
    }
    if (this.o >= width) {
      this.o = -450;
    }

    if (this.g >= width) {
      this.g = -600;
    } //------SEA-----//

    if (this.t <= -120) {
      this.t += 2;
    }
    if (this.t >= 120) {
      this.t -= 2;
    }

    //-----Bird1------//

    this.e += 4;
    this.f += 2;
    if (this.e >= width) {
      this.e = -800;
      this.f = 400;
    }

    //---MAP TRANSFER--/

    //-----transfere vers chambre------//
    if (this.globalState.x >= 255 && this.globalState.x <= 264 && this.globalState.y >= 680 && this.globalState.y <= 778) {
      this.globalState.y = 744;
      this.globalState.N = -400;
      this.globalState.song.playMode("sustain");
      this.globalState.song.pause();
      this.globalState.mapping = 2;
    
    }
    //-----transfere temple------//
    if (this.globalState.x >= 700 && this.globalState.x <= 720 && this.globalState.y >= 2460 && this.globalState.y <= 2476) {
      this.globalState.y = 2450;
      this.globalState.x = 634;

      this.globalState.song.playMode("sustain");
      this.globalState.song.pause();
      this.globalState.song2.loop();
      this.globalState.song2.playMode("restart");
      this.globalState.song2.play();
      this.globalState.mapping = 3;

    }

    //-----transfere taverne------//
    if (this.globalState.x >= 178 && this.globalState.x <= 210 && this.globalState.y >=2620  && this.globalState.y <= 2640) {
      this.globalState.y = 2614;
      this.globalState.x = 192;
      this.globalState.N = -2306;
      this.globalState.oldwoman.reset();
      this.globalState.taverne2.reset();
      this.globalState.song.playMode("sustain");
      this.globalState.song.pause();
      this.globalState.song3.loop();
      this.globalState.song3.playMode("restart");
      this.globalState.song3.play();
      this.globalState.mapping = 4 ;
    }
    
    //--End--//
  }

  displayImage() {
    // Obtenir l'heure actuelle
    let currentTime = p.hour();
  
    // Ne rien afficher s'il fait jour
    if (currentTime >= 9 && currentTime < 18) {
      return;
    }
  
    // Afficher l'image appropriée selon l'heure de la journée
    if (currentTime >= 18 && currentTime < 19.5) { // de 18h à 19h30
      p.image(teinte,0,0);
    } else if (currentTime >= 19.5 || currentTime < 7) { // de 19h30 à 7h
      p.image(teinte2,0,0);
    } else if (currentTime >= 7 && currentTime < 9) { // de 7h à 9h
      p.image(teinte3, 0, 0);
    }
  }

  varPicture = {
    'kaio': [this.mapImages.kaio1, this.mapImages.kaio2, this.mapImages.kaio3, this.mapImages.kaio4, this.mapImages.kaio1a],
    'kiyoka': [this.mapImages.img13, this.mapImages.img14, this.mapImages.img15, this.mapImages.img16, this.mapImages.img17 ],
    'player': [this.player.img1, this.player.img2, this.player.img3, this.player.img4, this.player.img5, this.player.img6, this.player.img7, this.player.img8]
  };
        
  updateScene(playerPic = null, kaioPic = null, kaioBisPic = null, kiyokaPic = null) {
    p.clear();
    p.noTint();
    p.image(this.mapImages.sky, 0, this.u);
    p.image(this.mapImages.sea, 0, this.t);
    p.image(this.mapImages.cloud2, this.g, this.u);
    p.image(this.mapImages.cloud1, this.o, this.u);
    p.background(this.mapImages.bg);
    p.image(this.globalImages.shadow, this.globalState.x + 2, this.globalState.y + 34);
    p.image(this.mapImages.img12, 300, 1600);
    if( playerPic != null && kaioPic != null && kiyokaPic != null && kaioBisPic == null)
    {
      p.image(kiyokaPic, 474, 330);
      p.image(this.mapImages.ponita1, 484, 2576);
      p.image(this.mapImages.fille1, 484, 2576);
      p.image(this.mapImages.battle1, 116, 2316);
      p.image(this.mapImages.combat2, 400, 1700);
      p.image(kaioPic, 500, 1680);
      p.image(playerPic, this.globalState.x, this.globalState.y);
    } 
    else if (playerPic != null && kaioPic != null && kiyokaPic != null && kaioBisPic != null) 
    {
      p.image(kiyokaPic, 474, 330);
      p.image(this.mapImages.ponita1, 484, 2576);
      p.image(this.mapImages.fille1, 484, 2576);
      p.image(this.mapImages.battle1, 116, 2316);
      p.image(this.mapImages.combat2, 400, 1700);
      p.image(kaioPic, 500, 1680);
      p.image(playerPic, this.globalState.x, this.globalState.y);
      p.image(kaioBisPic, 500, 1680);
    }
    p.image(this.mapImages.combat1, 400, 1700);
    p.image(this.mapImages.battle, 116, 2316);
    p.image(this.mapImages.ponita, 484, 2576);
    p.image(this.mapImages.fille, 484, 2576);
    p.image(this.mapImages.img11, 300, 1600);
    p.image(this.globalImages.shadow, this.e + 4, this.f + 200);
    p.image(this.mapImages.Img5, 0, 0);
    p.image(this.mapImages.bird1, this.e, this.f);

    this.displayImage();
    p.tint(this.globalVariables.FR);
    p.image(this.globalImages.flagFR, 0, this.globalState.y - 342);
    p.tint(this.globalVariables.EN);
    p.image(this.globalImages.flagEN, 60, this.globalState.y - 342);
  }       
}