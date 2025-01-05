export const adjustChartSize = (containerRef, setSize) => {
    if (containerRef.current) {
        const { offsetWidth, offsetHeight } = containerRef.current;
        console.log('Parent container size:', { offsetWidth, offsetHeight });

        const width = Math.max(offsetWidth - 40, 430);
        const height = Math.max(offsetHeight - 40, 300);
        setSize({ width, height });
    }
};
