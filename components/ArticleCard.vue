<template>
  <Card>
    <template v-if="article.image" #header>
      <img :alt="article.title" :src="article.image" />
    </template>
    <template #title>
      {{ article.title }}
    </template>
    <template #subtitle>
      <small>{{ article.date }} | {{ article.readTime }}min read</small>
      <div class="tags">
        <TagLink v-for="(tag, index) in article.tags" :key="index" :tag="tag" />
      </div>
      {{ article.description }}
    </template>
    <template #content>
      <NuxtLink :to="article._path"><Button label="Read More" /></NuxtLink>
    </template>
  </Card>
</template>

<script lang="ts" setup>
type ArticleData = {
  _path: string;
  title: string;
  description: string;
  readTime: number;
  date: string;
  tags: string[];
  image: string;
};

defineProps<{
  article: ArticleData;
}>();
</script>

<style scoped>
.p-card {
  max-width: 450px;
  width: 100%;
  align-self: start;
}

:deep(.p-card-content) {
  padding-bottom: 0;
}

:deep(.p-card-header) {
  height: 200px;
}

img {
  object-fit: cover;
  object-position: center;
  height: 100%;
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
