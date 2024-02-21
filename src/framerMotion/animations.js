export const dropdownAnimations = {
	initial: { y: "-50%", opacity: 0, scaleY: 0.2 },
	animate: { y: 0, opacity: 1, scaleY: 1 },
	exit: {
		y: "-50%",
		opacity: 0,
		scaleY: 0.2,
		transition: { duration: 0.3 },
	},
	transition: { duration: 0.3 },
};
