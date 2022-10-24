<script lang="ts" setup>
import type { ParsedContent } from "@nuxt/content/dist/runtime/types";
const { path } = useRoute();
interface ArticleData extends ParsedContent {
  title: string;
  description: string;
  readTime: number;
  date: string;
  tags: string[];
}

const { data: articleData } = await useAsyncData(`content-${path}`, () => {
  return queryContent<ArticleData>()
    .where({ _path: path })
    .only(["title", "description", "date", "readTime", "tags"])
    .findOne();
});
</script>

<template>
  <div>
    {{ articleData }}
    <h1>{{ articleData.title }}</h1>
    <em>{{ articleData.description }}</em>
    <article>
      <ContentDoc />
    </article>
  </div>
</template>
