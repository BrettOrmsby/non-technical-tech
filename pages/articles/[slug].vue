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

const { data: article, error } = await useAsyncData(`content-${path}`, () => {
  return queryContent<ArticleData>().where({ _path: path }).findOne();
});

if (error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page Not Found",
    fatal: true,
  });
}
useHead({
  title: article.value.title,
  meta: [
    { name: "description", content: article.value.description },
    { hid: "og-title", property: "og:title", content: article.value.title },
    {
      hid: "og-desc",
      property: "og:description",
      content: article.value.description,
    },
    {
      hid: "og-image",
      property: "og:image",
      content: article.value.image,
    },
  ],
});
</script>

<template>
  <div>
    <h1>{{ article.title }}</h1>
    <div class="horizontal-space">
      <Card>
        <template #content>
          <small>{{ article.date }} | {{ article.readTime }}min read</small>
          <div class="tags">
            <TagLink v-for="tag of article.tags" :key="tag" :tag="tag" />
          </div>
          <em>{{ article.description }}</em>
        </template>
      </Card>
      <TableOfContents :links="article.body.toc.links" />
      <article>
        <ContentRenderer :value="article">
          <ContentRendererMarkdown :value="article" />
          <template #empty>
            <p>No content found.</p>
          </template>
        </ContentRenderer>
      </article>
    </div>
  </div>
</template>

<style scoped>
.p-card:deep(.p-card-content) {
  padding: 0;
}
.horizontal-space {
  max-width: 70ch;
  margin: 0 auto;
}
.tags {
  margin-bottom: var(--inline-spacing);
  display: flex;
  flex-wrap: wrap;
  row-gap: 0.5rem;
}
small {
  display: block;
  margin-bottom: var(--inline-spacing);
}
</style>
