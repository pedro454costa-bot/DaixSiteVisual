import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  radius: number;
  connections: number[];
  pulsePhase: number;
}

interface DataPacket {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
}

export function AutomationFlowEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const nodes: Node[] = [];
    const dataPackets: DataPacket[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createNodes = () => {
      const nodeCount = 8;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(canvas.width, canvas.height) * 0.3;

      nodes.length = 0;

      for (let i = 0; i < nodeCount; i++) {
        const angle = (i / nodeCount) * Math.PI * 2;
        const x = centerX + Math.cos(angle) * radius + (Math.random() - 0.5) * 100;
        const y = centerY + Math.sin(angle) * radius + (Math.random() - 0.5) * 100;
        
        const connections: number[] = [];
        // Conectar cada nó a 2-3 outros nós
        const numConnections = 2 + Math.floor(Math.random() * 2);
        for (let j = 0; j < numConnections; j++) {
          const targetIndex = (i + 1 + j) % nodeCount;
          if (!connections.includes(targetIndex)) {
            connections.push(targetIndex);
          }
        }

        nodes.push({
          x,
          y,
          radius: 8,
          connections,
          pulsePhase: Math.random() * Math.PI * 2
        });
      }
    };

    const createDataPacket = () => {
      if (nodes.length === 0) return;
      
      const fromNode = Math.floor(Math.random() * nodes.length);
      const node = nodes[fromNode];
      
      if (node.connections.length > 0) {
        const toNode = node.connections[Math.floor(Math.random() * node.connections.length)];
        
        dataPackets.push({
          fromNode,
          toNode,
          progress: 0,
          speed: 0.005 + Math.random() * 0.01
        });
      }
    };

    const drawNode = (node: Node, time: number) => {
      // Pulsing outer glow
      const pulseSize = Math.sin(time * 0.002 + node.pulsePhase) * 3 + node.radius;
      
      // Outer glow
      const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, pulseSize * 2);
      gradient.addColorStop(0, 'rgba(0, 212, 255, 0.4)');
      gradient.addColorStop(0.5, 'rgba(0, 102, 255, 0.2)');
      gradient.addColorStop(1, 'rgba(0, 102, 255, 0)');
      
      ctx.beginPath();
      ctx.arc(node.x, node.y, pulseSize * 2, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Inner circle
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 212, 255, 0.8)';
      ctx.fill();
      
      // Core
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius * 0.5, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.fill();
    };

    const drawConnection = (from: Node, to: Node, time: number) => {
      // Animated dashed line
      const dashOffset = (time * 0.05) % 20;
      
      ctx.beginPath();
      ctx.moveTo(from.x, from.y);
      ctx.lineTo(to.x, to.y);
      
      ctx.strokeStyle = 'rgba(0, 102, 255, 0.2)';
      ctx.lineWidth = 2;
      ctx.setLineDash([10, 10]);
      ctx.lineDashOffset = -dashOffset;
      ctx.stroke();
      ctx.setLineDash([]);
    };

    const drawDataPacket = (packet: DataPacket) => {
      const fromNode = nodes[packet.fromNode];
      const toNode = nodes[packet.toNode];
      
      const x = fromNode.x + (toNode.x - fromNode.x) * packet.progress;
      const y = fromNode.y + (toNode.y - fromNode.y) * packet.progress;
      
      // Glowing data packet
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, 8);
      gradient.addColorStop(0, 'rgba(0, 212, 255, 1)');
      gradient.addColorStop(0.5, 'rgba(0, 102, 255, 0.6)');
      gradient.addColorStop(1, 'rgba(0, 102, 255, 0)');
      
      ctx.beginPath();
      ctx.arc(x, y, 8, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Core dot
      ctx.beginPath();
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 1)';
      ctx.fill();

      // Trail effect
      for (let i = 1; i <= 3; i++) {
        const trailProgress = Math.max(0, packet.progress - i * 0.05);
        const trailX = fromNode.x + (toNode.x - fromNode.x) * trailProgress;
        const trailY = fromNode.y + (toNode.y - fromNode.y) * trailProgress;
        
        ctx.beginPath();
        ctx.arc(trailX, trailY, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${0.3 - i * 0.1})`;
        ctx.fill();
      }
    };

    const updateDataPackets = () => {
      for (let i = dataPackets.length - 1; i >= 0; i--) {
        dataPackets[i].progress += dataPackets[i].speed;
        
        if (dataPackets[i].progress >= 1) {
          dataPackets.splice(i, 1);
        }
      }
    };

    let lastPacketTime = 0;
    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      nodes.forEach((node, i) => {
        node.connections.forEach(targetIndex => {
          drawConnection(node, nodes[targetIndex], time);
        });
      });

      // Draw data packets
      dataPackets.forEach(packet => {
        drawDataPacket(packet);
      });

      // Draw nodes
      nodes.forEach(node => {
        drawNode(node, time);
      });

      // Create new data packets periodically
      if (time - lastPacketTime > 300) {
        createDataPacket();
        lastPacketTime = time;
      }

      updateDataPackets();

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createNodes();
    animate(0);

    window.addEventListener('resize', () => {
      resizeCanvas();
      createNodes();
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
}
