import Phaser from "phaser";
import MainScene from "./main-scene.js";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 640,
  backgroundColor: "#000",
  parent: "game-container",
  pixelArt: true,
  scene: MainScene,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 }
    }
  }
};

const game = new Phaser.Game(config);