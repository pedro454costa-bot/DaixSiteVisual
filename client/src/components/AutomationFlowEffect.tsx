import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
}

interface Wave {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
}

export function AutomationFlowEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const particles: Particle[] = [];
    const waves: Wave[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = () => {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        life: 0,
        maxLife: 200 + Math.random() * 100,
        size: 1 + Math.random() * 1.5
      });
    };

    const createWave = () => {
      if (Math.random() > 0.98) {
        waves.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: 0,
          maxRadius: 80 + Math.random() * 40,
          opacity: 0.3
        });
      }
    };

    const drawParticle = (particle: Particle) => {
      const lifeRatio = particle.life / particle.maxLife;
      const opacity = Math.sin(lifeRatio * Math.PI) * 0.4;
      
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, particle.size * 3
      );
      gradient.addColorStop(0, `rgba(0, 212, 255, ${opacity})`);
      gradient.addColorStop(1, `rgba(0, 102, 255, 0)`);
      
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    };

    const drawWave = (wave: Wave) => {
      ctx.beginPath();
      ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(0, 212, 255, ${wave.opacity})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    const updateParticles = () => {
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        if (particle.life >= particle.maxLife) {
          particles.splice(i, 1);
        }
      }
    };

    const updateWaves = () => {
      for (let i = waves.length - 1; i >= 0; i--) {
        const wave = waves[i];
        wave.radius += 0.8;
        wave.opacity -= 0.003;

        if (wave.radius >= wave.maxRadius || wave.opacity <= 0) {
          waves.splice(i, 1);
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Maintain particle count
      while (particles.length < 30) {
        createParticle();
      }

      createWave();

      // Draw waves
      waves.forEach(wave => {
        drawWave(wave);
      });

      // Draw particles
      particles.forEach(particle => {
        drawParticle(particle);
      });

      updateParticles();
      updateWaves();

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.5 }}
    />
  );
}
