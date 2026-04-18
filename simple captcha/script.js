let submitCount = 0;
let generatedCaptcha = "";

const form = document.getElementById('dynamicForm');
const step2Div = document.getElementById('step2');
const canvas = document.getElementById('captchaCanvas');
const ctx = canvas.getContext("2d");
const captchaInput = document.getElementById('captchaInput');
const refreshBtn = document.getElementById('refreshBtn');
const message = document.getElementById('message');

function randomColor() {
    return `rgb(${Math.floor(Math.random()*200)},
                ${Math.floor(Math.random()*200)},
                ${Math.floor(Math.random()*200)})`;
}

function generateCaptcha() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    generatedCaptcha = "";

    for (let i = 0; i < 6; i++) {
        generatedCaptcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    drawCaptcha();
}

function drawCaptcha() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Background
    ctx.fillStyle = "#f5f5f5";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw letters
    ctx.font = "32px Arial";
    for (let i = 0; i < generatedCaptcha.length; i++) {
        let x = 30 + i * 35;
        let y = 55 + Math.sin(i) * 5;
        let angle = Math.random() * 0.5 - 0.25;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);
        ctx.fillStyle = randomColor();
        ctx.fillText(generatedCaptcha[i], 0, 0);
        ctx.restore();
    }

    // Wavy distortion line
    ctx.strokeStyle = randomColor();
    ctx.beginPath();
    for (let i = 0; i < canvas.width; i++) {
        ctx.lineTo(i, 45 + Math.sin(i * 0.05) * 10);
    }
    ctx.stroke();

    // Random dots
    for (let i = 0; i < 40; i++) {
        ctx.fillStyle = randomColor();
        ctx.beginPath();
        ctx.arc(Math.random() * canvas.width,
                Math.random() * canvas.height,
                2, 0, Math.PI * 2);
        ctx.fill();
    }
}

refreshBtn.addEventListener("click", generateCaptcha);

form.addEventListener("submit", function(e) {
    e.preventDefault();

    if (submitCount === 0) {
        generateCaptcha();
        step2Div.classList.remove("hidden");
        submitCount++;
    } else {
        if (captchaInput.value.trim().toUpperCase() === generatedCaptcha) {
            message.style.color = "#00ffcc";
            message.innerText = "✅ Form Submitted Successfully!";
            form.reset();
            step2Div.classList.add("hidden");
            submitCount = 0;
        } else {
            message.style.color = "#ff4d4d";
            message.innerText = "❌ Invalid Captcha!";
            generateCaptcha();
            captchaInput.value = "";
        }
    }
});