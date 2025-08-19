const colors = ["#fff2", "#fff4", "#fff7", "#fffc"]
const spaceLayer = (size, star, selector, duration) =>{
    const stars = [];
    for (let i = 0; i < star; i++){
        const color = colors[Math.floor(Math.random() * colors.length)];
        let x = Math.floor(Math.random() * 100);
        let y = Math.floor(Math.random() * 100);
        stars.push(`${x}vw ${y}vh 0 ${color}, ${x}vw ${y + 100}vh 0 ${color}`);
        
    }
    const capaStars = document.querySelector(selector);
    capaStars.style.setProperty('--position', stars.join(','));
    capaStars.style.setProperty('--size', size);
    capaStars.style.setProperty('--duration', duration);
}

spaceLayer("1px", 70, ".space-1", "15s");
spaceLayer("3px", 80, ".space-2", "30s");
// spaceLayer("4px", 70, ".space-3", "15s");