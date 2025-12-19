import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";
import { cn } from "@/utils/cn";

const ProjectCard = ({ project, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <Link to={`/project/${project.Id}`} className="block">
        <div className="relative overflow-hidden rounded-2xl glass hover:glass-strong transition-all duration-300">
          <div className="aspect-[16/10] overflow-hidden">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="text-white/70 text-sm line-clamp-2">{project.description}</p>
              <div className="flex items-center gap-4 text-white/60 text-sm">
                <div className="flex items-center gap-1">
                  <ApperIcon name="Eye" size={16} />
                  <span>{project.viewCount.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <ApperIcon name="Heart" size={16} />
                  <span>{project.likeCount}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-white/10">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white group-hover:gradient-text transition-all duration-300">
                {project.title}
              </h3>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <div className="flex items-center gap-1">
                  <ApperIcon name="Heart" size={14} />
                  <span>{project.likeCount}</span>
                </div>
                <div className="flex items-center gap-1">
                  <ApperIcon name="Eye" size={14} />
                  <span>{(project.viewCount / 1000).toFixed(1)}k</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;