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

    // Cache the center positions of all items to avoid layout thrashing
    const cachePositions = () => {
      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        itemCenters[index] = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2
        };
      });
    };

    // Initial cache
    cachePositions();

    const onPointerMove = (x: number, y: number) => {
      items.forEach((item, index) => {
        const center = itemCenters[index];
        if (!center) return;

        const b = x - center.x;
        const a = y - center.y;
        const c = Math.sqrt(a * a + b * b) || 1;
        const r = ((Math.acos(b / c) * 180) / Math.PI) * (y > center.y ? 1 : -1);

        item.style.setProperty('--rotate', `${r}deg`);
      });
    };

    const handlePointerMove = (e: PointerEvent) => {
      requestAnimationFrame(() => {
        onPointerMove(e.clientX, e.clientY);
      });
    };
    
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('resize', cachePositions); // Re-cache on resize

    // Trigger initial alignment
    if (items.length) {
      const middleIndex = Math.floor(items.length / 2);
      if (itemCenters[middleIndex]) {
        onPointerMove(itemCenters[middleIndex].x, itemCenters[middleIndex].y);
      }
    }

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', cachePositions);
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
