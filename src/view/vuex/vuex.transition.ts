export default Vue.transition('vuex', {
	css: false,

	enter: function (el, done) {
		const timeline:TimelineMax = new TimelineMax({ onComplete: done })
		const staggerElements:NodeListOf<Element> = el.querySelectorAll('.js-stagger')

		timeline.staggerFromTo(staggerElements, 1, {
			autoAlpha: 0,
			y: 30
		}, {
			autoAlpha: 1,
			y: 0,
			ease: Power4.easeOut
		}, 0.05)
	},

	enterCancelled: (el) => {

	},

	leave: function (el, done)
	{
		const timeline:TimelineMax = new TimelineMax({ onComplete: done })
		const staggerElements:NodeListOf<Element> = el.querySelectorAll('.js-stagger')

		timeline.add(TweenMax.staggerFromTo(staggerElements, 1, {
			autoAlpha: 1,
			y: 0
		}, {
			autoAlpha: 0,
			y: -30,
			ease: Power4.easeOut
		}, 0.05), 0)
	},

	leaveCancelled: function (el)
	{

	}
})
