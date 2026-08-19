// Lightweight Canvas Confetti Generator

export function triggerConfetti() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '99999';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#f43f5e', '#38bdf8', '#fbbf24', '#34d399', '#a855f7', '#ec4899', '#f97316'];
    const particles = [];
    const count = 120;

    for (let i = 0; i < count; i++) {
        particles.push({
            x: canvas.width / 2 + (Math.random() - 0.5) * 200,
            y: canvas.height / 2 + (Math.random() - 0.5) * 50,
            vx: (Math.random() - 0.5) * 16,
            vy: -Math.random() * 14 - 6,
            size: Math.random() * 8 + 4,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 10,
            opacity: 1,
            gravity: 0.35,
            drag: 0.98
        });
    }

    let animationId;
    const startTime = Date.now();

    function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let active = 0;

        for (const p of particles) {
            p.vx *= p.drag;
            p.vy += p.gravity;
            p.x += p.vx;
            p.y += p.vy;
            p.rotation += p.rotationSpeed;

            const elapsed = Date.now() - startTime;
            if (elapsed > 1800) {
                p.opacity -= 0.02;
            }

            if (p.opacity > 0 && p.y < canvas.height + 50) {
                active++;
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate((p.rotation * Math.PI) / 180);
                ctx.globalAlpha = Math.max(0, p.opacity);
                ctx.fillStyle = p.color;
                ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
                ctx.restore();
            }
        }

        if (active > 0 && Date.now() - startTime < 3500) {
            animationId = requestAnimationFrame(render);
        } else {
            cancelAnimationFrame(animationId);
            if (canvas.parentNode) {
                canvas.parentNode.removeChild(canvas);
            }
        }
    }

    render();
}
