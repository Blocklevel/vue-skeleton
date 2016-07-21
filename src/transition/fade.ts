export default Vue.transition('fade', {
	css: false,
	enter: function (el, done) {
		TweenMax.fromTo(el, .2, {
			autoAlpha: 0
		}, {
			autoAlpha: 1,
			ease: Power4.easeOut,
			onComplete: done
		})
	},

	enterCancelled: (el) => {

	},

	leave: function (el, done)
	{
		TweenMax.fromTo(el, .2, {
			autoAlpha: 1
		}, {
			autoAlpha: 0,
			ease: Power4.easeOut,
			onComplete: done
		})
	},

	leaveCancelled: function (el)
	{

	}
})
