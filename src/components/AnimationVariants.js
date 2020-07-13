const containerVariants = {
	hidden: {
		x: '-100vw',
	},
	visible: {
		x: 0,
		transition: { type: 'spring', mass: 0.5, damping: 10, delay: 0.2, duration: 0.2 },
	},
	exit: {
		x: '100vw',
		transition: { duration: 0.2 },
	},
};

export { containerVariants };
