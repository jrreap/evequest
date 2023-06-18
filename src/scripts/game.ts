import Phaser from 'phaser'
import MainScene from './scenes/MainScene'
import OpeningScene from './scenes/OpeningScene'
import PreloadScene from './scenes/PreloadScene'

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	parent: 'app',
	width: 1080,
	height: 720,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 0 },
		},
	},
	scene: [PreloadScene, OpeningScene, MainScene],
}

export default new Phaser.Game(config)
