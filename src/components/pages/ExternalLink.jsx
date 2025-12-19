import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const ExternalLink = () => {
  const { platform } = useParams();
  const navigate = useNavigate();

  const platformUrls = {
    dribbble: "https://dribbble.com",
    youtube: "https://youtube.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    github: "https://github.com",
  };

  useEffect(() => {
    const url = platformUrls[platform];
    if (url) {
      setTimeout(() => {
        window.open(url, "_blank");
        navigate("/");
      }, 1500);
    } else {
      navigate("/");
    }
  }, [platform, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F0A2E] via-[#1E1B4B] to-[#0F0A2E]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center space-y-6"
      >
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <ApperIcon name="ExternalLink" size={64} className="text-primary mx-auto" />
        </motion.div>
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-white">Opening {platform}...</h2>
          <p className="text-white/60">You'll be redirected shortly</p>
        </div>
      </motion.div>
    </div>
  );
};

export default ExternalLink;