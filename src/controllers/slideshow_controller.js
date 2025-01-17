import { Controller } from "@hotwired/stimulus"

export default class extends  Controller {
	static targets = [ "slide" ]
	static values = { index: { type: Number, default: 2 } }

  indexValueChanged() {
    this.showCurrentSlide()
  }

	next() {
		this.indexValue++
	}

	previous() {
		this.indexValue--
	}

	showCurrentSlide() {
		this.slideTargets.forEach((element, index) => {
			element.hidden = index !== this.indexValue
		})
	}
}