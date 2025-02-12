export const formatNumber = (number) => {
    if (!number) return;

    if (Math.abs(number) >= 100) {
        return Math.floor(number).toLocaleString('en-US');
    } else {
        return number.toFixed(2);
    }
}