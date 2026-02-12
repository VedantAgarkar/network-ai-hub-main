import { useEffect, useRef } from "react";

interface Dot {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  color: string;
}

const InteractiveDotGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();

  const colors = [
    "#8b5cf6", // purple
    "#3b82f6", // blue
    "#06b6d4", // cyan
    "#10b981", // green
    "#ec4899", // pink
    "#f59e0b", // amber
    "#ef4444", // red
    "#6366f1", // indigo
  ];

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
      initDots();
    };

    // Initialize dots
    const initDots = () => {
      const dots: Dot[] = [];
      const spacing = 40; // Increased spacing for less density
      const rows = Math.ceil(canvas.offsetHeight / spacing);
      const cols = Math.ceil(canvas.offsetWidth / spacing);

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          dots.push({
            x: j * spacing + spacing / 2,
            y: i * spacing + spacing / 2,
            baseX: j * spacing + spacing / 2,
            baseY: i * spacing + spacing / 2,
            color: colors[Math.floor(Math.random() * colors.length)],
          });
        }
      }
      dotsRef.current = dots;
    };

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    // Animation loop
    const animate = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      dotsRef.current.forEach((dot) => {
        const dx = mouseRef.current.x - dot.x;
        const dy = mouseRef.current.y - dot.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        if (distance < maxDistance) {
          // Stretch effect - push dots away from cursor
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(dy, dx);
          const pushX = Math.cos(angle) * force * 30; // Reduced push strength
          const pushY = Math.sin(angle) * force * 30;

          dot.x = dot.baseX - pushX;
          dot.y = dot.baseY - pushY;

          // Change color based on proximity
          const colorIndex = Math.floor((force * colors.length));
          dot.color = colors[Math.min(colorIndex, colors.length - 1)];
        } else {
          // Return to base position
          dot.x += (dot.baseX - dot.x) * 0.1;
          dot.y += (dot.baseY - dot.y) * 0.1;
        }

        // Draw dot with subtle size and opacity
        ctx.globalAlpha = 0.3; // Add transparency for subtlety
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 2.5, 0, Math.PI * 2); // Smaller size
        ctx.fillStyle = dot.color;
        ctx.fill();

        // Add subtle glow effect
        ctx.shadowBlur = 8;
        ctx.shadowColor = dot.color;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1; // Reset alpha
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    updateCanvasSize();
    canvas.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", updateCanvasSize);
    animate();

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", updateCanvasSize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 rounded-2xl overflow-hidden">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-accent/10 backdrop-blur-md border border-white/20" />
      
      {/* Interactive dot grid */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ mixBlendMode: "screen" }}
      />
      
      {/* Additional glass effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
    </div>
  );
};

export default InteractiveDotGrid;
