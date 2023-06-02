import { globalImages, globalVariables } from "../../data/globals/globalData.js";
import { player } from "../../data/globals/playerData.js";
import GlobalState from "./GlobalState.js";

const FONT_SIZE = 20; // Une constante pour la taille de la police
const ALIGN_CENTER = 'center'; // Une constante pour l'alignement du texte
let globalState = new GlobalState();

export default class Map {
  constructor(p5) {
    this.p5 = p5;
    this.globalState = globalState;
    this.globalImages = globalImages;
    this.globalVariables = globalVariables;
    this.player = player;

    this.fr = this.globalVariables.fr;
    this.millisStart = this.globalVariables.millisStart;   

    this.font = null;

    this.band = null;
    this.muteButton = null;
    this.gainSlider = null;
    this.discordOn = null;
    this.discordOff = null;
    this.discordIframe = null;
    this.isMuted = false;
    this.isDiscordVisible = false;
    this.sliderPosition = 0;
    Object.keys(this.globalImages).forEach(key => {
      if(this.globalImages[key]) {
        this[key] = null;
      }
    });
    Object.keys(this.player).forEach(key => {
      if(this.player[key]) {
        this[key] = null;
      }
    });
  }

  preload() {
    this.font = this.p5.loadFont(this.globalVariables.font || '');
    Object.keys(this.globalImages).forEach(key => {
      if(this.globalImages[key]) {
        this[key] = this.p5.loadImage(this.globalImages[key]);
      }
    });

    Object.keys(this.player).forEach(key => {
      if(this.player[key]) {
        this[key] = this.p5.loadImage(this.player[key]);
      }
    });
  }

  setup() {
    this.p5.textFont(this.globalVariables.font);
    this.p5.textSize(FONT_SIZE);
    this.p5.textAlign(ALIGN_CENTER, ALIGN_CENTER);
    this.setupButtons();
    this.setupBandeau();
    this.setupSliders();
    this.setupDiscord();
    // this.windowResized(this.gainSlider, this.muteButton, this.discordIframe, this.discordOff, this.discordOn);
  }

  setupBandeau() {
    this.band = this.p5.createButton("");
    this.band.position(this.p5.windowWidth/2 - 360, this.p5.windowHeight/2 -414);
    this.band.style('webkitAppearance', 'none'); // enlever le style par défaut du slider
    this.band.style('appearance', 'none');
    this.band.style('border', 'none');
    this.band.style('width', '840px');
    this.band.style('height', '40px');
    this.band.style('opacity','0.5');
    this.band.style("z-index", "200");
  }

  setupButtons() {
    if(!this.gainSlider) return;
    this.muteButton = this.p5.createButton("");
    this.muteButton.position(this.gainSlider.x + this.gainSlider.width - 10, this.gainSlider.y -10);
    this.muteButton.style('webkitAppearance', 'none'); // enlever le style par défaut du slider
    this.muteButton.style('appearance', 'none');
    this.muteButton.style('borderRadius', '4px'); // arrondir les coins du slider
    this.muteButton.style('border', 'none');
    this.muteButton.style('width', '40px');
    this.muteButton.style('height', '40px');
    this.muteButton.style('cursor', 'pointer');
    this.muteButton.style('background-image', 'url("assets/play.png")');
    this.muteButton.style("z-index", "1000");
    this.muteButton.mousePressed(this.toggleMute.bind(this));
  }

  setupSliders() {
    this.gainSlider = this.p5.createSlider(0, 1, this.sliderPosition, 0.00);//volume slider
    this.gainSlider.input(this.volume.bind(this)); 
    this.gainSlider.style('color', 'white'); // changer la couleur du texte du slider
    this.gainSlider.style('outline', 'none'); // enlever le contour du slider
    this.gainSlider.style('direction', 'rtl');
    this.gainSlider.position(this.p5.windowWidth/2 +315, 10);
    this.gainSlider.style("z-index", "1000");
  }
  
  setupDiscord() {
    this.discordOn = this.p5.createButton("");
    this.discordOn.style('webkitAppearance', 'none'); 
    this.discordOn.style('appearance', 'none');
    this.discordOn.style('borderRadius', '4px');
    this.discordOn.style('border', 'none');
    this.discordOn.style('cursor', 'pointer');
    this.discordOn.style('background-image', `url(${this.globalImages.discordOn})`);
    this.discordOn.style('width', '0px');
    this.discordOn.style('height', '0px');
    this.discordOn.style("z-index", "-100");
    this.discordOn.position(this.p5.windowWidth/2 - 360, 0);
    this.discordOn.mousePressed(this.toggleDiscord.bind(this));;
  
    this.discordOff = this.p5.createButton("");
    this.discordOff.style('webkitAppearance', 'none'); 
    this.discordOff.style('appearance', 'none');
    this.discordOff.style('borderRadius', '4px');
    this.discordOff.style('border', 'none');
    this.discordOff.style('cursor', 'pointer');
    this.discordOff.style('background-image', `url(${this.globalImages.discordOff})`);
    this.discordOff.style('width', '0px');
    this.discordOff.style('height', '0px');
    this.discordOff.style("z-index", "-100");
    this.discordOff.position(this.p5.windowWidth/2 - 360, 0);
    this.discordOff.mousePressed(this.toggleDiscord.bind(this));
    // Créer un div pour le widget Discord et l'ajouter au DOM
    this.discordIframe = this.p5.createDiv();
    this.discordIframe.position(this.p5.windowWidth/2-780, 0);
    this.discordIframe.style('z-index', '-1000');
  }

  draw() {
    console.log(this.globalState);
    let cnv = this.p5.createCanvas(960, 3400);
    if(this.globalState.N) {
      cnv.position(0, this.globalState.N, "relative");
    }
  
    if (this.isMuted) {
      this.sliderPosition = 0;
      this.gainSlider.value(this.sliderPosition);  
    } else {
      this.sliderPosition = 1;
      this.sliderPosition = this.gainSlider.value();
    }
   
    this.volume();
}

  // Autres méthodes de la classe Map ...
  volume() {
    var sliderValue = this.gainSlider.value();
    var dB = this.p5.map(sliderValue, 0, 1, -60, 0); // convertir la valeur du slider en dB
    var volumeValue = this.p5.pow(10, dB/20); // convertir les dB en une valeur de volume linéaire
    // this.globalState.song.P5Sound.setVolume(volumeValue);
    // this.globalState.song2.P5Sound.setVolume(volumeValue);
    // this.globalState.song3.P5Sound.setVolume(volumeValue);
  }

  toggleMute() {
    if (this.isMuted) {
      this.muteButton.html("");
      this.muteButton.style('background-image', `url(${this.globalImages.playBtn})`);
      this.sliderPosition = 0.5;
      this.isMuted = false;
      if (this.globalState.mapping == 1) {
        this.globalState.song.play(); // relance la lecture du son
      }
      if (this.globalState.mapping == 3) {
        this.globalState.song2.play(); // relance la lecture du son
      }
      if (this.globalState.mapping == 4) {
        this.globalState.song3.play(); // relance la lecture du son
      }
  
    } else {
      this.muteButton.html("");
      this.muteButton.style('background-image', `url(${this.globalImages.muteBtn})`);
      this.sliderPosition = 0;
      this.isMuted = true;
      this.globalState.song3.stop();
      this.globalState.song2.stop();
      this.globalState.song.stop();
      this.sliderPosition = 0.0;
  
    }
    this.gainSlider.value(this.sliderPosition);
  }

  windowResized(gainSlider, muteButton, discordIframe, discordOff, discordOn) {
    gainSlider.position(this.p5.windowWidth/2 +300, 10);
    muteButton.position(this.p5.windowWidth/2 +440, 0);
    this.globalState.scrollbarImg.position(this.p5.windowWidth/2 +244, this.p5.windowHeight/2 + 167, "absolute");
    discordIframe.position(this.p5.windowWidth/2 - 480,-34);
    discordOn.position(this.p5.windowWidth/2 - 360, 0);
    discordOff.position(this.p5.windowWidth/2 - 360, 0);
    band.position(this.p5.windowWidth/2 - 360, 0);
  }

  toggleDiscord() {
    if (this.isDiscordVisible) {
      this.discordIframe.html('<iframe id="discord-iframe" src="https://discord.com/widget?id=936957047512121397&theme=dark" width="300" height="300" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>');
      // Afficher la div discordIframe
      let iframe = document.getElementById('discord-iframe');
      iframe.width = 0;
      iframe.height = 0;
      this.discordOff.style("z-index: -100");
      this.discordOff.style('width', '0px');
      this.discordOff.style('height', '0px');
      this.discordOn.style('width', '60px');
      this.discordOn.style('height', '40px');
      this.discordOn.style("z-index: 1200");
      this.discordIframe.position(this.p5.windowWidth/2 - 480,-36);
      this.discordIframe.style('z-index', '-1000');
      this.band.style('opacity','0.5');
      this.isDiscordVisible = false;
    } else {
      // Créer un élément iframe et l'ajouter à la div discordIframe
      this.discordIframe.html('<iframe id="discord-iframe" src="https://discord.com/widget?id=936957047512121397&theme=dark" width="300" height="300" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>');
      // Afficher la div discordIframe
      let iframe = document.getElementById('discord-iframe');
      iframe.width = 960;
      iframe.height = 260;
      this.discordIframe.style('opacity', 0.8);
      this.discordOn.style("z-index: -100");
      this.discordOn.style('width', '0px');
      this.discordOn.style('height', '0px');
      this.discordOff.style("z-index: 1200");
      this.discordOff.style('width', '60px');
      this.discordOff.style('height', '40px');
      this.discordIframe.position(this.p5.windowWidth/2 - 480,-36);
      this.discordIframe.style('z-index', '100');
      this.band.style('opacity','1');
      this.isDiscordVisible = true;
    }
  } 

  getMapping() {
    return this.globalState.mapping;
  }
}