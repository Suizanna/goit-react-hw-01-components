
const getRandomColor = () => {
    const r = Math.round(Math.random() * 256);
    const g = Math.round(Math.random() * 256);
    const b = Math.round(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};

export default getRandomColor;