import Phaser from 'phaser'

export default class Card extends Phaser.GameObjects.GameObject {

  protected baseImage: Phaser.GameObjects.Image

  constructor (scene: Phaser.Scene, x: number, y: number, texture: string, action: Function, scale = 0.75) {
    super(scene, 'card')

    this.baseImage = scene.add.image(x, y, texture)
    this.baseImage.setInteractive({ useHandCursor: true })
    this.baseImage.setScale(scale)
    this.baseImage.on('pointerdown', action)
    this.baseImage.on('pointerover', this.handlePointerEnter)
    this.baseImage.on('pointerout', this.handlePointerLeave)
  }

  handlePointerEnter = () => {
    this.baseImage.setY(this.baseImage.y - 100)
    this.baseImage.setScale(1, 1)
    this.baseImage.setDepth(1)
  }

  handlePointerLeave = () => {
    this.baseImage.setY(this.baseImage.y + 100)
    this.baseImage.setScale(0.75, 0.75)
    this.baseImage.setDepth(0)
  }
}