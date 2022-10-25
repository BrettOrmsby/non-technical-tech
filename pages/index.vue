<script lang="ts" setup>
// There must be a easier way to do this
import type { ParsedContent } from "@nuxt/content/dist/runtime/types";

interface ArticleData extends ParsedContent {
  title: string;
  description: string;
  readTime: number;
  date: string;
  tags: string[];
  _path: string;
}

interface ProjectData extends ParsedContent {
  name: string;
  image: string | null;
  link: string;
  tags: string[];
  description: string;
}

const { data: articleArray } = await useAsyncData("content-article", () => {
  return queryContent<ArticleData>("articles")
    .sort({ date: -1, $numeric: true })
    .only(["title", "description", "date", "readTime", "tags", "_path"])
    .find();
});
const { data: projectArray } = await useAsyncData("content-project", () => {
  return queryContent<ProjectData>("projects")
    .sort({ date: -1, $numeric: true })
    .only(["name", "description", "image", "link", "tags"])
    .find();
});

const articleData = articleArray.value[0] as ArticleData;
const projectData = projectArray.value[0] as ProjectData;
</script>
<template>
  <div>
    <h1><span class="primary">Non</span>Technical Tech</h1>
    <div class="flex">
      <div>
        <h2><span class="primary">new</span> Article()</h2>
        <ArticleCard :article="articleData" />
      </div>
      <div>
        <h2><span class="primary">new</span> Project()</h2>
        <ProjectCard :project="projectData" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: var(--content-padding);
}
</style>
