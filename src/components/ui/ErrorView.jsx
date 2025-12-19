import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const ErrorView = ({ error, onRetry }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F0A2E] via-[#1E1B4B] to-[#0F0A2E] px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6 max-w-md"
      >
        <div className="relative w-24 h-24 mx-auto">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 to-pink-500 opacity-20 blur-xl" />
          <div className="relative w-24 h-24 rounded-full glass-strong flex items-center justify-center">
            <ApperIcon name="AlertTriangle" size={48} className="text-red-400" />
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-white">Oops! Something went wrong</h2>
          <p className="text-white/60 text-lg">
            {error || "We encountered an unexpected error. Please try again."}
          </p>
        </div>
        {onRetry && (
          <Button onClick={onRetry} className="mx-auto">
            <ApperIcon name="RotateCw" size={20} className="mr-2" />
            Try Again
          </Button>
        )}
      </motion.div>
    </div>
  );
};

export default ErrorView;