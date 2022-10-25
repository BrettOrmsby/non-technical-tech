<script lang="ts" setup>
import type { ParsedContent } from "@nuxt/content/dist/runtime/types";

interface ProjectData extends ParsedContent {
  name: string;
  image: string | null;
  link: string;
  tags: string[];
  description: string;
}

const { data: projectArray } = await useAsyncData("content-project", () => {
  return queryContent<ProjectData>("projects")
    .sort({ date: -1, $numeric: true })
    .only(["name", "description", "image", "link", "tags"])
    .find();
});
</script>
<template>
  <div>
    <h1>
      <span class="primary">For</span> Project
      <span class="primary">Of</span> Projects
    </h1>
    <div class="flex">
      <ProjectCard
        v-for="(project, index) of projectArray"
        :key="index"
        :project="project as ProjectData"
      />
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
