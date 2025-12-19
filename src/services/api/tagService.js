import tagsData from "../mockData/tags.json";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

class TagService {
  async getAll() {
    await delay(200);
    return [...tagsData];
  }

  async getByCategory(category) {
    await delay(150);
    return tagsData.filter((t) => t.category === category).map((t) => ({ ...t }));
  }
}

export default new TagService();