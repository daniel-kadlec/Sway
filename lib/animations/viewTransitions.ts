export const viewAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: "easeOut" as const },
};

export const cardAnimation = (delay = 0) => ({
    ...viewAnimation,
    transition: { ...viewAnimation.transition, delay },
});

export const cardDelay = (index: number) => 0.15 + index * 0.1;
