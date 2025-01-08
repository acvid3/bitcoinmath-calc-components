export const adjustChartSize = (containerRef, setSize) => {
    if (containerRef.current) {
        const { offsetWidth, offsetHeight } = containerRef.current;

        const width = Math.max(offsetWidth - 40, 350);
        const height = Math.max(offsetHeight - 40, 300);
        setSize({ width, height });
    }
};
