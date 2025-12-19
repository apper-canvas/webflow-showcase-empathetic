import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import projectService from "@/services/api/projectService";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import Tag from "@/components/atoms/Tag";
import Loading from "@/components/ui/Loading";
import ErrorView from "@/components/ui/ErrorView";
import GlassCard from "@/components/molecules/GlassCard";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadProject = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await projectService.getById(id);
      setProject(data);
    } catch (err) {
      setError(err.message || "Failed to load project");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      loadProject();
    }
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <ErrorView error={error} onRetry={loadProject} />;
  if (!project) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0A2E] via-[#1E1B4B] to-[#0F0A2E] py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <Button variant="ghost" onClick={() => navigate("/")}>
            <ApperIcon name="ArrowLeft" size={20} className="mr-2" />
            Back to Home
          </Button>

          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-white">{project.title}</h1>
            <div className="flex items-center gap-6 text-white/60">
              <div className="flex items-center gap-2">
                <ApperIcon name="Eye" size={20} />
                <span>{project.viewCount.toLocaleString()} views</span>
              </div>
              <div className="flex items-center gap-2">
                <ApperIcon name="Heart" size={20} />
                <span>{project.likeCount} likes</span>
              </div>
            </div>
          </div>

          <div className="aspect-video rounded-2xl overflow-hidden">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

<GlassCard animate3d={true} enableFloatingAnimation={true}>
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">About this project</h2>
                <p className="text-white/80 text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>

              {project.liveUrl && (
                <Button
                  onClick={() => window.open(project.liveUrl, "_blank")}
                  className="w-full sm:w-auto"
                >
                  <ApperIcon name="ExternalLink" size={20} className="mr-2" />
                  View Live Project
                </Button>
              )}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;