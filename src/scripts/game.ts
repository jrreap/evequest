import Phaser from 'phaser'
import RoomScene from './scenes/RoomScene'

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
	scene: [RoomScene],
}

export default new Phaser.Game(config)
