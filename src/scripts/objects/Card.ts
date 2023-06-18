import Phaser from 'phaser'

export default class Card extends Phaser.GameObjects.GameObject {

  protected baseImage: Phaser.GameObjects.Image
  protected hoverZone: Phaser.GameObjects.Zone

  constructor (scene: Phaser.Scene, x: number, y: number, texture: string, action: Function, scale = 0.75, depth = 0) {
    super(scene, 'card')


    this.baseImage = scene.add.image(x, y, texture)
    this.baseImage.setScale(scale)
    this.baseImage.setDepth(depth)

    this.hoverZone = scene.add.zone(x, y, this.baseImage.width, this.baseImage.height)
    this.hoverZone.setInteractive({ useHandCursor: true })
    this.hoverZone.on('pointerdown', action)
    this.hoverZone.on('pointerover', this.handlePointerEnter)
    this.hoverZone.on('pointerout', this.handlePointerLeave)
  }

  handlePointerEnter = () => {
    this.baseImage.setY(this.baseImage.y - 250)
    this.baseImage.setScale(1, 1)
    this.baseImage.setDepth(this.baseImage.depth + 10)
  }

  handlePointerLeave = () => {
    this.baseImage.setY(this.baseImage.y + 250)
    this.baseImage.setScale(0.75, 0.75)
    this.baseImage.setDepth(this.baseImage.depth - 10)
  }
}