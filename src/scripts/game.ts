import Phaser from 'phaser'
import MainScene from './scenes/MainScene'
import OpeningScene from './scenes/OpeningScene'
import PreloadScene from './scenes/PreloadScene'

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	parent: 'app',
	width: 1920,
	height: 1080,
	scale: {
		parent: 'app',
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
	},
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 0 },
		},
	},
	scene: [PreloadScene, OpeningScene, MainScene],
}

export default new Phaser.Game(config)
