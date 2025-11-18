import { useEffect, useState } from 'react';

export function ParallaxBackground() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Floating geometric shapes with parallax */}
      <div 
        className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-lg rotate-12 blur-sm"
        style={{
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5 + scrollY * 0.1}px) rotate(${scrollY * 0.1}deg)`,
          transition: 'transform 0.2s ease-out'
        }}
      />
      
      <div 
        className="absolute top-40 right-20 w-24 h-24 bg-accent/15 rounded-full blur-md"
        style={{
          transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3 + scrollY * 0.15}px)`,
          transition: 'transform 0.2s ease-out'
        }}
      />

      <div 
        className="absolute bottom-40 left-1/4 w-40 h-40 bg-primary/5 rounded-full blur-xl"
        style={{
          transform: `translate(${mousePosition.x * 0.8}px, ${mousePosition.y * 0.8 + scrollY * 0.2}px)`,
          transition: 'transform 0.2s ease-out'
        }}
      />

      <div 
        className="absolute top-1/3 right-1/4 w-20 h-20 border-2 border-accent/30 rounded-lg rotate-45"
        style={{
          transform: `translate(${-mousePosition.x * 0.6}px, ${-mousePosition.y * 0.6 + scrollY * 0.25}px) rotate(${45 + scrollY * 0.2}deg)`,
          transition: 'transform 0.2s ease-out'
        }}
      />

      <div 
        className="absolute bottom-1/4 right-10 w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg"
        style={{
          transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4 + scrollY * 0.3}px) rotate(${scrollY * 0.15}deg)`,
          transition: 'transform 0.2s ease-out'
        }}
      />

      {/* Animated lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(0, 102, 255)" stopOpacity="0" />
            <stop offset="50%" stopColor="rgb(0, 212, 255)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="rgb(0, 102, 255)" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        <line 
          x1="10%" 
          y1="20%" 
          x2="90%" 
          y2="30%" 
          stroke="url(#lineGradient)" 
          strokeWidth="2"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        
        <line 
          x1="20%" 
          y1="60%" 
          x2="80%" 
          y2="70%" 
          stroke="url(#lineGradient)" 
          strokeWidth="2"
          style={{
            transform: `translateY(${scrollY * 0.15}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
      </svg>

      {/* Orbiting particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/40 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${30 + Math.sin(i) * 20}%`,
              animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
              transform: `translate(${mousePosition.x * (0.1 * i)}px, ${mousePosition.y * (0.1 * i)}px)`,
              transition: 'transform 0.3s ease-out'
            }}
          />
        ))}
      </div>
    </>
  );
}
