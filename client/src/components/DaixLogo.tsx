export function DaixLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className="text-2xl font-bold">
        <span className="text-white">DAI</span>
        <span 
          className="inline-block text-primary icon-neon"
          style={{ 
            filter: "drop-shadow(0 0 8px rgba(11, 93, 255, 0.6))"
          }}
        >
          X
        </span>
      </div>
    </div>
  );
}
