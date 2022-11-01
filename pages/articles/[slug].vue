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

const { data: articleData, error } = await useAsyncData(
  `content-${path}`,
  () => {
    return queryContent<ArticleData>()
      .where({ _path: path })
      .only(["title", "description", "date", "readTime", "tags"])
      .findOne();
  }
);
if (error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page Not Found",
    fatal: true,
  });
}
</script>

<template>
  <div>
    {{ articleData }}
    <h1>{{ articleData.title }}</h1>
    <em>{{ articleData.description }}</em>
    <article>
      <ContentDoc>
        <template #not-found>
          <h1>Article Not Found</h1>
        </template>
      </ContentDoc>
    </article>
  </div>
</template>
