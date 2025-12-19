import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

const GlassCard = ({ className = "", children, animate3d = true, enableFloatingAnimation = false }) => {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!animate3d || !cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXValue = ((y - centerY) / centerY) * -8;
    const rotateYValue = ((x - centerX) / centerX) * 8;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    if (animate3d) {
      setRotateX(0);
      setRotateY(0);
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className={cn("glass-strong rounded-2xl p-6 relative overflow-hidden", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: animate3d ? "preserve-3d" : "flat",
        perspective: animate3d ? "1000px" : "none",
      }}
      animate={animate3d ? {
        rotateX: rotateX,
        rotateY: rotateY,
        y: enableFloatingAnimation ? [0, -5, 0] : 0,
      } : enableFloatingAnimation ? {
        y: [0, -5, 0],
      } : {}}
      transition={animate3d ? {
        rotateX: { type: "spring", stiffness: 300, damping: 30 },
        rotateY: { type: "spring", stiffness: 300, damping: 30 },
        y: enableFloatingAnimation ? { duration: 2, repeat: Infinity, ease: "easeInOut" } : {}
      } : enableFloatingAnimation ? {
        y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
      } : {}}
      whileHover={animate3d ? {
        scale: 1.02,
        boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.25)",
      } : {
        scale: 1.02,
      }}
    >
      {/* Animated background gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 opacity-30"
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      
      {/* Floating orb animations */}
      <motion.div
        className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-sm"
        animate={{
          x: [0, 10, 0],
          y: [0, -5, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-gradient-to-r from-secondary/20 to-accent/20 blur-sm"
        animate={{
          x: [0, -8, 0],
          y: [0, 5, 0],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default GlassCard;