import Phaser from 'phaser'
import Card from '../objects/Card'

export default class OpeningScene extends Phaser.Scene {

	Cards = new Map<string, Card>()

	constructor() {
		super('OpeningScene')
	}

	generateCards = () => {
		this.Cards.set('Bath_Bomb', new Card(this, 800, 500, 'Bath_Bomb', () => { console.log('Clicked!') }))
	}

	create() {
		this.generateCards()

		this.add.image(800, 800, 'Bath_Bomb')
	}

	update () {

	}
}
