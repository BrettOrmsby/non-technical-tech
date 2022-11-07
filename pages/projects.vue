<template>
  <div>
    <h1>
      <span class="primary">For</span> Project
      <span class="primary">Of</span> Projects
    </h1>

    <main>
      <div class="flex">
        <ContentList v-slot="{ list }" :query="query">
          <ProjectCard
            v-for="project of list"
            :key="project.name"
            :project="project"
          />
        </ContentList>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";
useHead({
  title: "Projects",
  meta: [
    {
      hid: "og-title",
      property: "og:title",
      content: "Projects • NonTechnical Tech",
    },
  ],
});
const query: QueryBuilderParams = {
  path: "/projects",
  sort: [{ date: -1, $numeric: true }],
  only: ["name", "description", "image", "link", "tags"],
};
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: var(--content-padding);
}
</style>
