export default Vue.transition('vuex', {
	css: false,

	enter: function (el, done) {
		const staggerElements = el.querySelectorAll('.js-stagger')

		TweenMax.staggerFromTo(staggerElements, 1, {
			autoAlpha: 0,
			y: 30
		}, {
			autoAlpha: 1,
			y: 0,
			ease: Power4.easeOut,
			onComplete: done
		}, 0.05)
	},

	enterCancelled: (el) => {

	},

	leave: function (el, done)
	{
		const staggerElements = el.querySelectorAll('.js-stagger')

		TweenMax.staggerFromTo(staggerElements, 1, {
			autoAlpha: 1,
			y: 0
		}, {
			autoAlpha: 0,
			y: -30,
			ease: Power4.easeOut,
			onComplete: done
		}, 0.05)
	},

	leaveCancelled: function (el)
	{

	}
})
