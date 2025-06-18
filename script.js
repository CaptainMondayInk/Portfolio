// Set dynamic height based on farthest image position
window.addEventListener('load', () => {
    let maxY = 0;

    document.querySelectorAll('.parallax-layer').forEach(layer => {
        const yRaw = getComputedStyle(layer).getPropertyValue('--y').trim();
        const yValue = parseFloat(yRaw); // '800px' → 800
        if (!isNaN(yValue)) {
            const speed = parseFloat(layer.dataset.speed) || 0;
            const effectiveY = yValue + (window.innerHeight * speed);
            if (effectiveY > maxY) {
                maxY = effectiveY;
            }
        }
    });

    const container = document.getElementById('parallax-container');
    container.style.height = (maxY + 100) + 'px';
});

// Handle parallax scroll effect
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    document.querySelectorAll('.parallax-layer').forEach(layer => {
        const speed = parseFloat(layer.dataset.speed) || 0;
        const x = getComputedStyle(layer).getPropertyValue('--x').trim();
        const y = getComputedStyle(layer).getPropertyValue('--y').trim();
        const offsetY = `calc(${y} + ${scrollY * speed}px)`;
        layer.style.transform = `translate(${x}, ${offsetY})`;
    });
});

const scrollFrames = [
  "images/scrolldown1.png",
  "images/scrolldown2.png",
  "images/scrolldown3.png"
];

let scrollIndex = 0;
setInterval(() => {
  scrollIndex = (scrollIndex + 1) % scrollFrames.length;
  document.getElementById("scrollHint").src = scrollFrames[scrollIndex];
}, 83); // ~12 fps (1000ms / 12fps ≈ 83ms)

const frames = [
    "images/logo1.png",
    "images/logo2.png",
    "images/logo3.png"];
let currentFrame = 0;

setInterval(() => {
    currentFrame = (currentFrame + 1) % frames.length;
    document.getElementById('header-logo').src = frames[currentFrame];
}, 120); // change frame every 300ms (adjust speed here)
