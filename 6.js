// Animate cake layers dropping one by one
function animateCake() {
    const layers = ['layer2', 'layer3', 'layer4'];
    let delay = 0;

    layers.forEach((layerId, index) => {
        setTimeout(() => {
            const layer = document.getElementById(layerId);
            if (layer) {
                layer.classList.add('drop');
            }
        }, delay);
        delay += 800; // 800ms delay between each layer
    });

    // After all layers are done (3 layers * 800ms = 2400ms), show candles
    setTimeout(() => {
        showCandles();
    }, delay + 500);
}

// Show candles with animation
function showCandles() {
    const candles = document.getElementById('candles');
    if (candles) {
        candles.classList.add('show');
    }

    // Show timer after candles appear
    setTimeout(() => {
        showTimer();
    }, 1000);
}

// Show timer with countdown
function showTimer() {
    const timerElement = document.getElementById('timer');
    if (timerElement) {
        timerElement.classList.add('show');
        startCountdown();
    }
}

// Start countdown timer
function startCountdown() {
    let seconds = 3; // 3 second countdown
    const timerElement = document.getElementById('timer');

    const countdown = setInterval(() => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;

        timerElement.textContent = `00:${remainingSeconds.toString().padStart(2, '0')}`;

        seconds--;

        if (seconds < 0) {
            clearInterval(countdown);
            timerElement.textContent = "🎉";
            
            // Blow out candles
            blowCandles();
        }
    }, 1000);
}

// Blow out candles with animation
function blowCandles() {
    const candles = document.querySelectorAll('.candle');
    const smokes = document.querySelectorAll('.smoke');
    
    // Blow out each candle one by one
    candles.forEach((candle, index) => {
        setTimeout(() => {
            // Add blown class to hide flame
            candle.classList.add('blown');
            
            // Show smoke effect
            if (smokes[index]) {
                smokes[index].classList.add('active');
            }
        }, index * 200); // 200ms delay between each candle
    });

    // After all candles are blown, show confetti and birthday text
    setTimeout(() => {
        triggerConfetti();
        showHappyBirthday();
    }, candles.length * 200 + 500);
}

// Show Happy Birthday text
function showHappyBirthday() {
    const happyBirthday = document.getElementById('happyBirthday');
    if (happyBirthday) {
        happyBirthday.classList.add('show');
    }

    // Show next button after birthday text appears
    setTimeout(() => {
        showNextButton();
    }, 1500);
}

// Show next button
function showNextButton() {
    const nextButton = document.getElementById('nextButton');
    if (nextButton) {
        nextButton.classList.add('show');
    }
}

// Simple confetti effect
function triggerConfetti() {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE'];
    
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            createConfetti(colors[Math.floor(Math.random() * colors.length)]);
        }, i * 30);
    }
}

function createConfetti(color) {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = color;
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '-10px';
    confetti.style.borderRadius = '50%';
    confetti.style.zIndex = '9999';
    confetti.style.pointerEvents = 'none';
    
    document.body.appendChild(confetti);
    
    const animation = confetti.animate([
        { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
        { transform: `translateY(100vh) rotate(${Math.random() * 720}deg)`, opacity: 0 }
    ], {
        duration: 3000 + Math.random() * 2000,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    });
    
    animation.onfinish = () => {
        confetti.remove();
    };
}

// Start animations when page loads
window.onload = function() {
    setTimeout(animateCake, 500); // Start after 500ms delay
};
