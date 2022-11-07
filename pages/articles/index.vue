<template>
  <div>
    <h1>
      <span class="primary">For</span> Article
      <span class="primary">Of</span> Articles
    </h1>
    <main>
      <div class="flex">
        <ContentList v-slot="{ list }" :query="query">
          <ArticleCard
            v-for="article of list"
            :key="article._path"
            :article="article"
          />
        </ContentList>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";
useHead({
  title: "Articles",
  meta: [
    {
      hid: "og-title",
      property: "og:title",
      content: "Articles • NonTechnical Tech",
    },
  ],
});
const query: QueryBuilderParams = {
  path: "/articles",
  sort: [{ date: -1, $numeric: true }],
  only: ["title", "description", "date", "readTime", "tags", "_path", "image"],
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
