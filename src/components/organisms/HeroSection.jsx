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
              <GlassCard animate3d={true} className="aspect-[1.6/1] flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="text-white/60 text-sm font-medium">T.RICKS</div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-6 rounded bg-white/10" />
                    <div className="w-8 h-6 rounded bg-white/10" />
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent"
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(99, 102, 241, 0.3)",
                          "0 0 40px rgba(139, 92, 246, 0.5)",
                          "0 0 20px rgba(236, 72, 153, 0.3)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <div className="space-y-2 flex-1">
                      <div className="h-2 bg-white/20 rounded-full w-3/4" />
                      <div className="h-2 bg-white/10 rounded-full w-1/2" />
                    </div>
                  </div>

                  <div className="text-white/90 font-mono text-2xl tracking-wider">
                    4323 7645 2826 0715
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white/40 text-xs">VALID THRU</div>
                      <div className="text-white/90 font-mono">12/25</div>
                    </div>
                    <div className="text-right">
                      <div className="text-white/40 text-xs">CVV</div>
                      <div className="text-white/90 font-mono">***</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -inset-px bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl opacity-50 -z-10" />
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl opacity-20 blur-xl -z-20" />
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