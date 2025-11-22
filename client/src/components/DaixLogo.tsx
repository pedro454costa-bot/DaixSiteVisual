export function DaixLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className="text-2xl font-bold">
        <span className="text-primary">DAI</span>
        <span 
          className="inline-block icon-neon"
          style={{ 
            color: 'hsl(var(--daix-secondary))',
            filter: "drop-shadow(0 0 8px rgba(120, 6, 6, 0.6))"
          }}
        >
          X
        </span>
      </div>
    </div>
  );
}
