let clickCount = 0;

function handleClick() {
    const responseMessage = document.getElementById('responseMessage');
    const button = document.querySelector('.forgive-button');
    
    clickCount++;

    if (clickCount === 1) {
        responseMessage.innerHTML = `<span style="color: #FF69B4; font-size: 1.3em;">Yay! 🎉 You're the best!<br>Let me make it up to you 💕</span>`;
        triggerConfetti();
    } else if (clickCount === 2) {
        responseMessage.innerHTML = `<span style="color: #FFD700; font-size: 1.3em;">I love you so much, Alivia! 💖<br>Thank you for giving me another chance 👑</span>`;
        createHearts();
    } else if (clickCount === 3) {
        button.textContent = '💕 Forever Yours 💕';
        responseMessage.innerHTML = `<span style="color: #FF1493; font-size: 1.4em; font-weight: bold;">You mean everything to me! ✨</span>`;
    }
}

function triggerConfetti() {
    const confetti = [];
    const colors = ['#FF69B4', '#FFD700', '#FF1493', '#FFB6D9', '#FFF0F5'];
    
    for (let i = 0; i < 30; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.style.position = 'fixed';
        confettiPiece.style.left = Math.random() * window.innerWidth + 'px';
        confettiPiece.style.top = '-10px';
        confettiPiece.style.fontSize = Math.random() * 20 + 15 + 'px';
        confettiPiece.style.pointerEvents = 'none';
        confettiPiece.style.zIndex = '9999';
        
        const emojis = ['🎀', '💕', '👑', '✨', '💖', '🎉'];
        confettiPiece.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        
        document.body.appendChild(confettiPiece);
        
        const duration = Math.random() * 3 + 2;
        const xMove = (Math.random() - 0.5) * 400;
        
        let top = -10;
        let opacity = 1;
        const speed = window.innerHeight / (duration * 1000);
        
        const interval = setInterval(() => {
            top += speed;
            opacity -= 1 / (duration * 100);
            
            confettiPiece.style.top = top + 'px';
            confettiPiece.style.left = (parseFloat(confettiPiece.style.left) + xMove / (duration * 100)) + 'px';
            confettiPiece.style.opacity = opacity;
            
            if (top > window.innerHeight) {
                clearInterval(interval);
                confettiPiece.remove();
            }
        }, 20);
    }
}

function createHearts() {
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '💕';
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.top = Math.random() * window.innerHeight + 'px';
            heart.style.fontSize = '2em';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '9999';
            heart.style.animation = 'float 2s ease-in-out forwards';
            
            document.body.appendChild(heart);
            
            setTimeout(() => heart.remove(), 2000);
        }, i * 100);
    }
}

// Add keyboard shortcut
document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        document.querySelector('.forgive-button').click();
    }
});

// Easter egg - double click to show special message
let doubleClickCount = 0;
document.addEventListener('dblclick', () => {
    doubleClickCount++;
    if (doubleClickCount === 1) {
        const responseMessage = document.getElementById('responseMessage');
        responseMessage.innerHTML = `<span style="color: #FF69B4; font-size: 1.2em;">I promise to spend more quality time with you 💖<br>You're my priority always 👑</span>`;
        triggerConfetti();
    }
});

// Random heart animation on page load
window.addEventListener('load', () => {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            createHearts();
        }, i * 300);
    }
});
