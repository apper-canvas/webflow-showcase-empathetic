import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import tagService from "@/services/api/tagService";
import Tag from "@/components/atoms/Tag";

const TagsSection = () => {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadTags = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await tagService.getAll();
      setTags(data.slice(0, 12));
    } catch (err) {
      setError(err.message || "Failed to load tags");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTags();
  }, []);

  if (loading || error || tags.length === 0) {
    return null;
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface/30">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 justify-center"
        >
          {tags.map((tag, index) => (
            <motion.div
              key={tag.Id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Tag>{tag.name}</Tag>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TagsSection;