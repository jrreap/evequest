import Phaser from 'phaser'

export default class Card extends Phaser.GameObjects.Image {

  constructor (scene: Phaser.Scene, x: number, y: number, texture: string, action: Function) {
    super(scene, x, y, texture)

    this.setInteractive({ useHandCursor: true })
    this.on('pointerdown', action)
    this.setVisible(true)
  }
}