import React, { useRef } from "react";
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
              <div className="aspect-[5/3] w-full max-w-[400px] relative">
                {/* Main card container with glassmorphism */}
                <motion.div 
                  className="relative w-full h-full rounded-2xl overflow-hidden"
                  style={{
                    background: "rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                  }}
                  initial={{ opacity: 0, y: 50, rotateX: -15 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    rotateX: 0,
                    boxShadow: [
                      "0 8px 32px rgba(99, 102, 241, 0.2)",
                      "0 12px 48px rgba(139, 92, 246, 0.3)",
                      "0 8px 32px rgba(236, 72, 153, 0.2)",
                    ],
                  }}
                  transition={{ 
                    opacity: { duration: 0.8 },
                    y: { duration: 0.8 },
                    rotateX: { duration: 0.8 },
                    boxShadow: { duration: 4, repeat: Infinity }
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 5,
                    boxShadow: "0 20px 60px rgba(99, 102, 241, 0.4)"
                  }}
                >
                  {/* Animated gradient background */}
                  <motion.div 
                    className="absolute inset-0 opacity-60"
                    style={{
                      background: "linear-gradient(135deg, rgba(99, 102, 241, 0.3) 0%, rgba(139, 92, 246, 0.4) 50%, rgba(236, 72, 153, 0.3) 100%)",
                    }}
                    animate={{
                      opacity: [0.4, 0.8, 0.4],
                      background: [
                        "linear-gradient(135deg, rgba(99, 102, 241, 0.3) 0%, rgba(139, 92, 246, 0.4) 50%, rgba(236, 72, 153, 0.3) 100%)",
                        "linear-gradient(135deg, rgba(236, 72, 153, 0.4) 0%, rgba(99, 102, 241, 0.3) 50%, rgba(139, 92, 246, 0.4) 100%)",
                        "linear-gradient(135deg, rgba(139, 92, 246, 0.4) 0%, rgba(236, 72, 153, 0.3) 50%, rgba(99, 102, 241, 0.3) 100%)",
                        "linear-gradient(135deg, rgba(99, 102, 241, 0.3) 0%, rgba(139, 92, 246, 0.4) 50%, rgba(236, 72, 153, 0.3) 100%)",
                      ]
                    }}
                    transition={{ duration: 6, repeat: Infinity }}
                  />

                  {/* Card content */}
                  <div className="relative z-10 p-8 flex flex-col justify-between h-full">
                    {/* Card Header */}
                    <motion.div 
                      className="flex items-center justify-between"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                    >
                      <div>
                        <div className="text-white text-xl font-bold tracking-wider">T.RICKS</div>
                        <div className="text-white/60 text-sm uppercase tracking-widest mt-1">Premium Card</div>
                      </div>
                      
                      {/* Card type indicator */}
                      <motion.div 
                        className="flex items-center gap-1"
                        animate={{
                          x: [0, 2, 0],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <div className="w-8 h-6 rounded bg-gradient-to-r from-primary to-secondary opacity-80" />
                        <div className="w-8 h-6 rounded bg-gradient-to-r from-secondary to-accent opacity-80 -ml-2" />
                      </motion.div>
                    </motion.div>

                    {/* Chip */}
                    <motion.div 
                      className="my-6"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                    >
                      <motion.div
                        className="w-16 h-12 rounded-lg relative"
                        style={{
                          background: "linear-gradient(135deg, rgba(255, 215, 0, 0.9) 0%, rgba(218, 165, 32, 0.9) 100%)",
                          border: "1px solid rgba(255, 255, 255, 0.3)",
                        }}
                        animate={{
                          boxShadow: [
                            "0 2px 8px rgba(255, 215, 0, 0.3)",
                            "0 6px 20px rgba(255, 215, 0, 0.6)",
                            "0 2px 8px rgba(255, 215, 0, 0.3)",
                          ],
                          rotateY: [0, 5, 0],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        {/* Chip pattern */}
                        <div className="absolute inset-2 grid grid-cols-3 gap-1">
                          {[...Array(9)].map((_, i) => (
                            <motion.div 
                              key={i} 
                              className="bg-black/20 rounded-sm"
                              animate={{
                                opacity: [0.4, 0.7, 0.4],
                              }}
                              transition={{ 
                                duration: 2, 
                                repeat: Infinity, 
                                delay: i * 0.1 
                              }}
                            />
                          ))}
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* Card Number */}
                    <motion.div 
                      className="text-white text-2xl font-mono tracking-[0.3em] font-light my-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        textShadow: [
                          "0 0 10px rgba(255, 255, 255, 0.3)",
                          "0 0 20px rgba(99, 102, 241, 0.6)",
                          "0 0 25px rgba(139, 92, 246, 0.4)",
                          "0 0 10px rgba(255, 255, 255, 0.3)",
                        ],
                      }}
                      transition={{ 
                        opacity: { delay: 0.7, duration: 0.6 },
                        y: { delay: 0.7, duration: 0.6 },
                        textShadow: { duration: 4, repeat: Infinity }
                      }}
                    >
                      4323 7645 2826 0715
                    </motion.div>

                    {/* Card Footer */}
                    <motion.div 
                      className="flex items-end justify-between"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9, duration: 0.6 }}
                    >
                      <div>
                        <div className="text-white/50 text-xs uppercase tracking-wider font-medium">Valid Thru</div>
                        <div className="text-white text-lg font-mono tracking-wider mt-1">12/25</div>
                      </div>
                      <div className="text-right">
                        <div className="text-white/50 text-xs uppercase tracking-wider font-medium">CVV</div>
                        <div className="text-white text-lg font-mono tracking-wider mt-1">***</div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Animated border glow */}
                  <motion.div 
                    className="absolute -inset-[2px] rounded-2xl opacity-50 -z-10"
                    style={{
                      background: "linear-gradient(45deg, rgba(99, 102, 241, 0.6), rgba(139, 92, 246, 0.6), rgba(236, 72, 153, 0.6), rgba(99, 102, 241, 0.6))",
                    }}
                    animate={{
                      rotate: [0, 360],
                      opacity: [0.3, 0.8, 0.3],
                      scale: [1, 1.02, 1],
                    }}
                    transition={{ 
                      rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                      opacity: { duration: 3, repeat: Infinity },
                      scale: { duration: 4, repeat: Infinity }
                    }}
                  />

                  {/* Floating particles */}
                  <motion.div
                    className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-white/30"
                    animate={{
                      y: [0, -20, 0],
                      x: [0, 10, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: 1,
                    }}
                  />
                  <motion.div
                    className="absolute bottom-1/3 left-1/3 w-1 h-1 rounded-full bg-primary/40"
                    animate={{
                      y: [0, 15, 0],
                      x: [0, -8, 0],
                      opacity: [0, 0.8, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: 2,
                    }}
                  />
                </motion.div>
              </div>
            </div>
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