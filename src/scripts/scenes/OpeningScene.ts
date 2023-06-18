import Phaser from 'phaser'
import Card from '../objects/Card'
import { CARD_TYPES } from '../consts'

export default class OpeningScene extends Phaser.Scene {

	Cards = new Map<string, Card>()

	constructor() {
		super('OpeningScene')
	}

	generateCards = () => {
		let tempX = 800
		let tempY = 900
		let i = 0

		for (const card of CARD_TYPES) {
			this.Cards.set(card.name, new Card(this, tempX, tempY, card.name, () => { console.log('Clicked!') }, 0.75, i))
			tempX += 90
			i++
		}
	}

	create() {
		this.generateCards()
	}

	update () {

	}
}
