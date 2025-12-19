import projectsData from "../mockData/projects.json";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

class ProjectService {
  async getAll() {
    await delay(300);
    return [...projectsData];
  }

  async getById(id) {
    await delay(200);
    const project = projectsData.find((p) => p.Id === parseInt(id));
    if (!project) {
      throw new Error("Project not found");
    }
    return { ...project };
  }

  async getFeatured() {
    await delay(250);
    return projectsData.filter((p) => p.featured).map((p) => ({ ...p }));
  }

  async getByTag(tag) {
    await delay(300);
    return projectsData
      .filter((p) => p.tags.includes(tag))
      .map((p) => ({ ...p }));
  }
}

export default new ProjectService();