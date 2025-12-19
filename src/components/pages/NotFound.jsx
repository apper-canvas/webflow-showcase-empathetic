import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F0A2E] via-[#1E1B4B] to-[#0F0A2E] px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-8 max-w-lg"
      >
        <div className="relative">
          <motion.div
            className="text-[150px] font-bold gradient-text"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            404
          </motion.div>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <ApperIcon name="Sparkles" size={64} className="text-accent opacity-30" />
            </motion.div>
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white">Page Not Found</h1>
          <p className="text-xl text-white/60">
            Looks like you've wandered into uncharted territory. Let's get you back on track!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => navigate("/")}>
            <ApperIcon name="Home" size={20} className="mr-2" />
            Back to Home
          </Button>
          <Button variant="secondary" onClick={() => navigate(-1)}>
            <ApperIcon name="ArrowLeft" size={20} className="mr-2" />
            Go Back
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;