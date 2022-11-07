<template>
  <div>
    <h1><span class="primary">Non</span>Technical Tech</h1>
    <Card class="intro">
      <template #content>
        &#128075; Hi, I am Brett Ormsby, a student and programming hobbyist from
        Ontario Canada. I enjoy to read, play sports and board and card games in
        my spare time. My current interests are Vue.js, TypeScript and
        Scriptable.
      </template>
    </Card>
    <div class="flex">
      <div>
        <h2><span class="primary">new</span> Article()</h2>
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
        <h2><span class="primary">new</span> Project()</h2>
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

<style scoped>
.flex {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: var(--content-padding);
}
.intro {
  max-width: 750px;
  margin: 0 auto;
}
.intro:deep(.p-card-body) {
  padding: 1.25rem;
}
.intro:deep(.p-card-content) {
  padding: 0;
}
</style>
