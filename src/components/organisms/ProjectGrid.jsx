import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import projectService from "@/services/api/projectService";
import ProjectCard from "@/components/molecules/ProjectCard";
import Loading from "@/components/ui/Loading";
import ErrorView from "@/components/ui/ErrorView";
import Empty from "@/components/ui/Empty";

const ProjectGrid = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadProjects = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await projectService.getAll();
      setProjects(data);
    } catch (err) {
      setError(err.message || "Failed to load projects");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="aspect-[16/10] rounded-2xl glass animate-pulse" />
        ))}
      </div>
    );
  }

  if (error) {
    return <ErrorView error={error} onRetry={loadProjects} />;
  }

  if (projects.length === 0) {
    return <Empty title="No projects yet" message="Check back soon for new projects!" />;
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-surface/50">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 space-y-4"
        >
          <h2 className="text-4xl font-bold text-white">More sites by Timothy Ricks</h2>
          <p className="text-white/60 text-lg">Explore more creative projects and tutorials</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{projects.map((project, index) => (
            <ProjectCard key={project.Id} project={project} index={index} animate3d={true} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;