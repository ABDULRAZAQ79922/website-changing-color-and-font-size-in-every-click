function getRandomGradient() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A6', '#33FFF2', '#F3FF33'];
    const color1 = colors[Math.floor(Math.random() * colors.length)];
    const color2 = colors[Math.floor(Math.random() * colors.length)];
    const angle = Math.floor(Math.random() * 360);
    return `linear-gradient(${angle}deg, ${color1}, ${color2})`;
}

function getRandomFontSize() {
    return Math.floor(Math.random() * 20) + 16; 
}

function changeStyle() {
    document.body.style.background = getRandomGradient();
    document.body.style.fontSize = getRandomFontSize() + 'px';
}