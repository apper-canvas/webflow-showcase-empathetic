import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const Empty = ({ title = "No items found", message = "There's nothing to display here yet.", actionLabel, onAction }) => {
  return (
    <div className="min-h-[400px] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center space-y-6 max-w-md"
      >
        <div className="relative w-24 h-24 mx-auto">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-20 blur-xl" />
          <div className="relative w-24 h-24 rounded-full glass-strong flex items-center justify-center">
            <ApperIcon name="Inbox" size={48} className="text-primary" />
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <p className="text-white/60">{message}</p>
        </div>
        {actionLabel && onAction && (
          <Button onClick={onAction} className="mx-auto">
            {actionLabel}
          </Button>
        )}
      </motion.div>
    </div>
  );
};

export default Empty;