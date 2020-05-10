export const lighten = (color: string, percentage: number) => {
    const colorValue = parseInt(color.replace('#', ''), 16);
    const lightenAmount = Math.round(2.55 * percentage);
    const r = (colorValue >> 16) + lightenAmount;
    const b = ((colorValue >> 8) & 0x00FF) + lightenAmount;
    const g = (colorValue & 0x0000FF) + lightenAmount;

    return "#" + (0x1000000 +
        (r < 255 ? r < 1 ? 0 : r : 255)
        * 0x10000 +
        (b < 255 ? b < 1 ? 0 : b : 255)
        * 0x100 +
        (g < 255 ? g < 1 ? 0 : g : 255)
    ).toString(16).slice(1);
};
