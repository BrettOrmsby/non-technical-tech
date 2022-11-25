<template>
  <Card>
    <template v-if="project.image" #header>
      <img :alt="project.name" :src="project.image" />
    </template>
    <template #title>
      {{ project.name }}
    </template>
    <template #subtitle>
      <div class="tags">
        <TagLink v-for="(tag, index) in project.tags" :key="index" :tag="tag" />
      </div>
      {{ project.description }}
    </template>
    <template #content>
      <NuxtLink :to="project.link" target="_blank"
        ><Button label="Visit"
      /></NuxtLink>
    </template>
  </Card>
</template>

<script lang="ts" setup>
type ProjectData = {
  name: string;
  image: string | null;
  link: string;
  tags: string[];
  description: string;
};

defineProps<{
  project: ProjectData;
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
  height: 200px;
}

img {
  max-height: 200px;
  object-fit: cover;
}
</style>
