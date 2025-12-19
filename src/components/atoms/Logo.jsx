import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const Logo = ({ className = "" }) => {
  return (
    <motion.div
      className={cn("flex items-center gap-2", className)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
        <ApperIcon name="Sparkles" size={20} className="text-white" />
      </div>
      <span className="text-xl font-bold text-white">T.RICKS</span>
    </motion.div>
  );
};

import { cn } from "@/utils/cn";
export default Logo;