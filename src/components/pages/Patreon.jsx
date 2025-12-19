import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import GlassCard from "@/components/molecules/GlassCard";

const Patreon = () => {
  const tiers = [
    {
      name: "Apprentice",
      price: "$5",
      features: [
        "Access to basic tutorials",
        "Community Discord access",
        "Monthly newsletter",
      ],
    },
    {
      name: "Wizard",
      price: "$15",
      features: [
        "All Apprentice benefits",
        "Advanced tutorial library",
        "Exclusive code templates",
        "Priority support",
      ],
      featured: true,
    },
    {
      name: "Master",
      price: "$30",
      features: [
        "All Wizard benefits",
        "1-on-1 consultation monthly",
        "Custom tutorial requests",
        "Early access to new content",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0A2E] via-[#1E1B4B] to-[#0F0A2E] py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold text-white">Support on Patreon</h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Join the community and get exclusive access to premium tutorials, templates, and personalized support
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
<GlassCard 
                  className={tier.featured ? "ring-2 ring-primary" : ""} 
                  animate3d={true} 
                  enableFloatingAnimation={tier.featured}
                >
                  <div className="space-y-6">
                    {tier.featured && (
                      <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-white text-sm font-medium">
                        Most Popular
                      </div>
                    )}
                    <div>
                      <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                      <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-4xl font-bold gradient-text">{tier.price}</span>
                        <span className="text-white/60">/month</span>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <ApperIcon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-white/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" variant={tier.featured ? "primary" : "secondary"}>
                      Choose {tier.name}
                    </Button>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Patreon;