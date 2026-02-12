import { useRef, useEffect, FC, CSSProperties } from 'react';
import './MagnetLines.css';

interface MagnetLinesProps {
  rows?: number;
  columns?: number;
  containerSize?: string;
  lineColor?: string;
  lineWidth?: string;
  lineHeight?: string;
  baseAngle?: number;
  className?: string;
  style?: CSSProperties;
}

const MagnetLines: FC<MagnetLinesProps> = ({
  rows = 9,
  columns = 9,
  containerSize = '80vmin',
  lineColor = '#efefef',
  lineWidth = '1vmin',
  lineHeight = '6vmin',
  baseAngle = -10,
  className = '',
  style = {}
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll<HTMLSpanElement>('span');
    const itemCenters: { x: number; y: number }[] = [];

    // Cache positions relative to the document (not viewport)
    const cachePositions = () => {
      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        itemCenters[index] = {
          x: rect.left + rect.width / 2 + window.scrollX,
          y: rect.top + rect.height / 2 + window.scrollY
        };
      });
    };

    // Initial cache - slight delay ensures layout is stable
    setTimeout(cachePositions, 50);

    const onPointerMove = (x: number, y: number) => {
      items.forEach((item, index) => {
        const center = itemCenters[index];
        if (!center) return;

        // Calculate distance relative to document coordinates
        const b = x - center.x;
        const a = y - center.y;
        const c = Math.sqrt(a * a + b * b) || 1;
        const r = ((Math.acos(b / c) * 180) / Math.PI) * (y > center.y ? 1 : -1);

        item.style.setProperty('--rotate', `${r}deg`);
      });
    };

    const handlePointerMove = (e: PointerEvent) => {
      requestAnimationFrame(() => {
        // Use pageX/Y which are document relative
        onPointerMove(e.pageX, e.pageY);
      });
    };
    
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('resize', cachePositions);
    // Also re-cache on scroll just in case layout shifts without resize (optional but safer)
    window.addEventListener('scroll', cachePositions); 

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', cachePositions);
      window.removeEventListener('scroll', cachePositions);
    };
  }, []);

  const total = rows * columns;
  const spans = Array.from({ length: total }, (_, i) => (
    <span
      key={i}
      style={
        {
          '--rotate': `${baseAngle}deg`,
          backgroundColor: lineColor,
          width: lineWidth,
          height: lineHeight
        } as CSSProperties
      }
    />
  ));

  return (
    <div
      ref={containerRef}
      className={`magnetLines-container ${className}`}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        width: containerSize,
        height: containerSize,
        ...style
      }}
    >
      {spans}
    </div>
  );
};

export default MagnetLines;
