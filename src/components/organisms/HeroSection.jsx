import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import GlassCard from "@/components/molecules/GlassCard";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F0A2E] via-[#1E1B4B] to-[#0F0A2E]" />
      
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-2">
              <ApperIcon name="Sparkles" size={32} className="text-accent" />
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                WEBFLOW
                <br />
                <span className="gradient-text">TRICKS AND</span>
                <br />
                <span className="gradient-text">WIZARDRY</span>
              </h1>

              <p className="text-xl text-white/70 max-w-lg">
                Giving Webflow developers a competitive edge in the industry through interactive tutorials
              </p>
            </div>

            <Link to="/tutorials">
              <Button size="lg" className="group">
                <span>GLASSMORPHISM TUTORIAL</span>
                <ApperIcon
                  name="ArrowRight"
                  size={20}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto" style={{ perspective: "1000px" }}>
<GlassCard animate3d={true} className="aspect-[1.6/1] flex flex-col justify-between p-6 relative overflow-hidden">
                {/* Card Header */}
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="text-white/90 text-lg font-bold tracking-wide">T.RICKS</div>
                    <div className="text-white/50 text-xs uppercase tracking-widest">Premium Card</div>
                  </div>
                  <div className="flex gap-2">
                    <motion.div 
                      className="w-10 h-7 rounded bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/10"
                      animate={{
                        boxShadow: [
                          "0 2px 10px rgba(255, 255, 255, 0.1)",
                          "0 4px 20px rgba(99, 102, 241, 0.2)",
                          "0 2px 10px rgba(255, 255, 255, 0.1)",
                        ],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <motion.div 
                      className="w-10 h-7 rounded bg-gradient-to-br from-primary/30 to-accent/20 backdrop-blur-sm border border-white/10"
                      animate={{
                        boxShadow: [
                          "0 2px 10px rgba(236, 72, 153, 0.1)",
                          "0 4px 20px rgba(139, 92, 246, 0.2)",
                          "0 2px 10px rgba(236, 72, 153, 0.1)",
                        ],
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                    />
                  </div>
                </div>

                {/* Card Content */}
                <div className="space-y-8 flex-1 flex flex-col justify-center">
                  {/* Chip and Animation */}
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="w-14 h-11 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent relative"
                      animate={{
                        boxShadow: [
                          "0 4px 25px rgba(99, 102, 241, 0.4)",
                          "0 8px 35px rgba(139, 92, 246, 0.6)",
                          "0 4px 25px rgba(236, 72, 153, 0.4)",
                        ],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    >
                      <div className="absolute inset-1 bg-black/20 rounded-md" />
                      <div className="absolute inset-2 bg-gradient-to-br from-white/10 to-transparent rounded-sm" />
                    </motion.div>
                    <div className="space-y-3 flex-1">
                      <motion.div 
                        className="h-2.5 bg-gradient-to-r from-white/30 to-white/10 rounded-full w-4/5"
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <motion.div 
                        className="h-2 bg-gradient-to-r from-white/20 to-white/5 rounded-full w-3/5"
                        animate={{ opacity: [0.4, 0.8, 0.4] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
                      />
                    </div>
                  </div>

                  {/* Card Number */}
                  <motion.div 
                    className="text-white/95 font-mono text-2xl tracking-[0.2em] font-light"
                    animate={{
                      textShadow: [
                        "0 0 10px rgba(255, 255, 255, 0.3)",
                        "0 0 20px rgba(99, 102, 241, 0.4)",
                        "0 0 10px rgba(255, 255, 255, 0.3)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    4323 7645 2826 0715
                  </motion.div>
                </div>

                {/* Card Footer */}
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="text-white/40 text-[10px] uppercase tracking-wider font-medium">Valid Thru</div>
                    <div className="text-white/90 font-mono text-lg tracking-widest">12/25</div>
                  </div>
                  <div className="text-right space-y-1">
                    <div className="text-white/40 text-[10px] uppercase tracking-wider font-medium">CVV</div>
                    <div className="text-white/90 font-mono text-lg tracking-widest">***</div>
                  </div>
                </div>

                {/* Enhanced Background Effects */}
                <motion.div 
                  className="absolute -inset-px bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl opacity-60 -z-10"
                  animate={{
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute -inset-2 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl opacity-20 blur-xl -z-20"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.15, 0.3, 0.15],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
                
                {/* Additional Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 rounded-2xl -z-5" />
              </GlassCard>
            </div>

            <motion.div
              className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-r from-primary to-secondary blur-3xl opacity-30"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-gradient-to-r from-secondary to-accent blur-3xl opacity-30"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.5, 0.3, 0.5],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ApperIcon name="ChevronDown" size={32} className="text-white/40" />
      </motion.div>
    </section>
  );
};

export default HeroSection;