export const formatNumber = (number) => {
    if (!number) return;

    if (number.toString().length > 3) {
        return Math.floor(number).toLocaleString('en-US');
    } else {
        return number;
    }
}