import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import GlassCard from "@/components/molecules/GlassCard";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0A2E] via-[#1E1B4B] to-[#0F0A2E] py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold text-white">About T.RICKS</h1>
            <p className="text-xl text-white/70">
              Empowering Webflow developers with cutting-edge techniques
            </p>
          </div>

<GlassCard animate3d={true} enableFloatingAnimation={true}>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <ApperIcon name="Sparkles" size={32} className="text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Timothy Ricks</h2>
                  <p className="text-white/60">Webflow Wizard</p>
                </div>
              </div>

              <p className="text-white/80 text-lg leading-relaxed">
                Welcome to T.RICKS, where we transform ordinary Webflow developers into extraordinary digital wizards. Through interactive tutorials, cutting-edge techniques, and a touch of creative magic, we help you push the boundaries of what's possible in web design.
              </p>

              <p className="text-white/80 text-lg leading-relaxed">
                From glassmorphism effects to advanced animations, scroll-triggered interactions to 3D transforms, we cover everything you need to create stunning, modern websites that stand out from the crowd.
              </p>

              <div className="grid md:grid-cols-3 gap-6 pt-6">
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold gradient-text">500+</div>
                  <div className="text-white/60">Tutorials</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold gradient-text">10k+</div>
                  <div className="text-white/60">Students</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold gradient-text">50+</div>
                  <div className="text-white/60">Techniques</div>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};

export default About;