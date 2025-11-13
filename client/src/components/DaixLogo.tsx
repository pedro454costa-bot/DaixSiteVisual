export function DaixLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className="text-2xl font-bold text-foreground">
        DAI
        <span 
          className="inline-block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-pulse-glow"
          style={{ 
            filter: "drop-shadow(0 0 8px rgba(0, 102, 255, 0.3))"
          }}
        >
          X
        </span>
      </div>
    </div>
  );
}
