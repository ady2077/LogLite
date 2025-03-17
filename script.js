// Initialize particles
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#ff00ff' }, // Magenta particles
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: false },
        move: { enable: true, speed: 2, direction: 'none', random: true }
    },
    interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
        modes: { repulse: { distance: 100 }, push: { particles_nb: 4 } }
    },
    retina_detect: true
});

function logMessage() {
    const message = document.getElementById('messageInput').value;
    const logList = document.getElementById('logList');
    
    if (!message) return; // Ignore empty input

    const timestamp = new Date().toLocaleTimeString();
    const logEntry = document.createElement('li');
    logEntry.textContent = `[${timestamp}] ${message}`;
    logList.insertBefore(logEntry, logList.firstChild); // Add to top
    document.getElementById('messageInput').value = ''; // Clear input
}