import { useEffect, useRef } from "react";

const NeonChaser = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const angleRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    updateCanvasSize();

    // Neon colors for the chaser
    const neonColors = [
      "#ff00ff", // Magenta
      "#00ffff", // Cyan
      "#ffff00", // Yellow
      "#00ff00", // Green
      "#ff0080", // Pink
      "#0080ff", // Blue
      "#ff8000", // Orange
      "#8000ff", // Purple
    ];

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) / 2 - 10;

      ctx.clearRect(0, 0, width, height);

      // Draw multiple chaser lights
      const numberOfLights = 8;
      const lightSize = 30;
      const rotationSpeed = 0.02;

      for (let i = 0; i < numberOfLights; i++) {
        const angle = angleRef.current + (i * (Math.PI * 2)) / numberOfLights;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        // Create gradient for glow effect
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, lightSize);
        const color = neonColors[i % neonColors.length];
        
        gradient.addColorStop(0, color);
        gradient.addColorStop(0.5, color + "88"); // 88 = 50% opacity in hex
        gradient.addColorStop(1, color + "00"); // 00 = 0% opacity in hex

        // Draw the light
        ctx.beginPath();
        ctx.arc(x, y, lightSize, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Add extra glow
        ctx.shadowBlur = 20;
        ctx.shadowColor = color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Draw connecting trail effect
      ctx.strokeStyle = "#ffffff22";
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let i = 0; i <= 100; i++) {
        const angle = (i / 100) * Math.PI * 2;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();

      angleRef.current += rotationSpeed;
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", updateCanvasSize);
    animate();

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default NeonChaser;
