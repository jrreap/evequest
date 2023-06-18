import Phaser from 'phaser'
import Button from '../objects/Button'

export default class PreloadScene extends Phaser.Scene {

	button!: Button
	progressBar!: Phaser.GameObjects.Graphics
	progressBox!: Phaser.GameObjects.Graphics

	constructor() {
		super({ key: 'Preload' })
	}

	preload() {
		// Load the logo video before we display anything
	}

	setupProgressBar () {
		this.progressBar = this.add.graphics();
		this.progressBox = this.add.graphics();
		this.progressBox.fillStyle(0x222222, 0.8);
		this.progressBox.fillRect(260, 380, 320, 50);
	}

  create() {
		const { width, height } = this.scale // width and height of the current view
    const centerX = width / 2
    const centerY = height / 2

		this.button = new Button(centerX, centerY + 85, 'CONTINUE', this, () => { this.scene.start('OpeningScene') }, 20, 10)
		this.button.setVisible(false)

		this.setupProgressBar()

		this.load.on('progress', (value: number) => {
			this.progressBar.clear()
			this.progressBar.fillStyle(0xffffff, 1)
			this.progressBar.fillRect(270, 390, 300 * value, 30)
		})

		this.load.on('complete', () => {
			this.progressBar.destroy()
			this.progressBox.destroy()
			this.button.setVisible(true)
		})

		this.load.start()
  }

}
