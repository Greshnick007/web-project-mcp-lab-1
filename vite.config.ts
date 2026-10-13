import { defineConfig } from "vite";

// Замените 'repo-name' на НАЗВАНИЕ вашего репозитория на GitHub!
const repoName = "web-project-mcp-lab-1";

export default defineConfig({
  base: `/${repoName}/`,
  build: {
    outDir: "dist" // сборка для деплоя через GitHub Actions
  }
});