<script lang="ts" setup>
import type { ParsedContent } from "@nuxt/content/dist/runtime/types";

interface ArticleData extends ParsedContent {
  title: string;
  description: string;
  readTime: number;
  date: string;
  tags: string[];
  _path: string;
}

const { data: articleArray } = await useAsyncData("content-article", () => {
  return queryContent<ArticleData[]>("articles")
    .sort({ date: -1, $numeric: true })
    .only(["title", "description", "date", "readTime", "tags", "_path"])
    .find();
});
</script>
<template>
  <div>
    <h1>
      <span class="primary">For</span> Article
      <span class="primary">Of</span> Articles
    </h1>
    <div class="flex">
      <ArticleCard
        v-for="(article, index) of articleArray"
        :key="index"
        :article="article as ArticleData"
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
