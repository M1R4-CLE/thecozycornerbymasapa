'use client';

import { useMemo } from 'react';

export default function GoldenFlakesBackground({ count = 55 }) {
  const flakes = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const size = 3 + Math.random() * 7;           // px
      const left = Math.random() * 100;             // vw
      const duration = 12 + Math.random() * 18;     // s
      const delay = -Math.random() * duration;      // s (start mid-animation)
      const drift = (Math.random() * 2 - 1) * 18;   // vw
      const opacity = 0.25 + Math.random() * 0.55;
      const blur = Math.random() * 1.4;             // px

      return { i, size, left, duration, delay, drift, opacity, blur };
    });
  }, [count]);

  return (
    <div className="goldenFlakes" aria-hidden="true">
      {flakes.map((f) => (
        <span
          key={f.i}
          className="goldenFlake"
          style={{
            '--left': `${f.left}vw`,
            '--size': `${f.size}px`,
            '--duration': `${f.duration}s`,
            '--delay': `${f.delay}s`,
            '--drift': `${f.drift}vw`,
            '--opacity': f.opacity,
            '--blur': `${f.blur}px`,
          }}
        />
      ))}
    </div>
  );
}