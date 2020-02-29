import { AUTO } from 'phaser/src/const';
import bootScene from './bootScene';
import playScene from './playScene';
import menuScene from './menuScene';
import endScene from './endScene';

export default {
  type: AUTO,
  width: 800,
  height: 600,
  pixelArt: true,
  title: 'Phaser 3 with Parcel 🚢 (imports)',
  url: 'https://github.com/samme/phaser-parcel',
  banner: { text: 'white', background: ['#FD7400', '#FFE11A', '#BEDB39', '#1F8A70', '#004358'] },
  scene: [bootScene, menuScene, playScene, endScene],
  audio: { noAudio: true }
};
