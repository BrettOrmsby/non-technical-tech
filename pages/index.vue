<template>
  <div>
    <h1>Hi, I am <span class="primary">Brett Ormsby</span></h1>
    <p class="subheading">A student and programming hobbyist</p>

    <h2>Self.<span class="primary">About</span></h2>
    <Card class="text">
      <template #content>
        I am a current student and programming hobbyist from Ontario, Canada. I
        enjoy solving problems and creating fun and useful websites. You also
        might find me reading my latest book or playing card and board games.
      </template>
    </Card>

    <h2>Skills.<span class="primary">list</span>()</h2>
    <Card class="text">
      <template #content>
        <div class="tags">
          <TagLink v-for="(tag, index) in skills" :key="index" :tag="tag" />
        </div>
      </template>
    </Card>

    <div class="flex">
      <div>
        <h2>Articles.<span class="primary">latest</span>()</h2>
        <ContentQuery
          v-slot="{ data }"
          path="articles"
          :sort="{ date: -1, $numeric: true }"
          :only="[
            'title',
            'description',
            'image',
            '_path',
            'tags',
            'readTime',
            'date',
            'image',
          ]"
          :limit="1"
        >
          <ArticleCard :article="data[0]" />
        </ContentQuery>
      </div>
      <div>
        <h2>Projects.<span class="primary">latest</span>()</h2>
        <ContentQuery
          v-slot="{ data }"
          path="projects"
          :sort="{ date: -1, $numeric: true }"
          :only="['name', 'description', 'image', 'link', 'tags']"
          :limit="1"
        >
          <ProjectCard :project="data[0]" />
        </ContentQuery>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const skills = [
  "Vue",
  "Typescript",
  "Javascript",
  "Primevue",
  "Nuxt",
  "Vite",
].sort();
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: var(--content-padding);
}
h1 {
  margin-bottom: var(--inline-spacing);
}
.subheading {
  margin-top: 0;
  opacity: 0.8;
  text-align: center;
}

h2 {
  text-align: center;
}

.text {
  max-width: 750px;
  margin: 0 auto;
}
.text:deep(.p-card-body) {
  padding: 1.25rem;
}
.text:deep(.p-card-content) {
  padding: 0;
}
.tags {
  justify-content: center;
}
</style>
