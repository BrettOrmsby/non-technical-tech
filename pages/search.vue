<template>
  <div>
    <h1>Search</h1>
    <Card class="form-card">
      <template #content>
        <span
          class="p-input-icon-left input-span"
          style="margin-bottom: var(--content-padding)"
        >
          <i class="pi pi-search" />
          <InputText
            v-model="searchText"
            placeholder="Search"
            type="text"
            style="width: 100%"
          />
        </span>
        <span class="input-span" style="display: flex">
          <label for="tags">Tags</label>
          <Chips
            id="tags"
            v-model="selectedTags"
            placeholder="Type in a tag and press enter"
          />
        </span>
      </template>
    </Card>
    <!-- eslint-disable-next-line -->
    <ContentList :key="componentKey" :query="{
        path: '/',
        sort: [{ date: -1, $numeric: true }],
        only: [
          'title',
          'description',
          'date',
          'readTime',
          'tags',
          '_path',
          'link',
          'name',
          'image',
        ],
      }"
    >
      <template #default="{ list }">
        <div class="flex">
          <div v-for="item of matchQuery(list)" :key="item._path">
            <ProjectCard v-if="item.name" :project="item as ProjectData" />
            <ArticleCard v-else :article="item as ArticleData" />
          </div>
        </div>
      </template>
      <template #not-found>Not Found </template>
    </ContentList>
  </div>
</template>

<script lang="ts" setup>
import type { ParsedContent } from "@nuxt/content/dist/runtime/types";
useHead({
  title: "Search",
  meta: [
    {
      hid: "og-title",
      property: "og:title",
      content: "Search • NonTechnical Tech",
    },
  ],
});
const componentKey = ref(0);
const { query } = useRoute();

const queryTags = typeof query.tags === "string" ? query.tags.split(",") : [];
const selectedTags = ref(queryTags.filter((e) => e));
const searchText = ref(typeof query.search === "string" ? query.search : "");

interface ArticleData extends ParsedContent {
  title: string;
  description: string;
  readTime: number;
  date: string;
  tags: string[];
  _path: string;
  image: string;
}

interface ProjectData extends ParsedContent {
  name: string;
  image: string | null;
  link: string;
  tags: string[];
  description: string;
}

const matchQuery = (items: (ArticleData | ProjectData)[]) => {
  return items.filter((item) => {
    for (const tag of selectedTags.value) {
      if (!item.tags.map((e) => e.toLowerCase()).includes(tag.toLowerCase())) {
        return false;
      }
    }

    const searchMatchTitle =
      item.title && item.title.toLowerCase().includes(searchText.value);
    const searchMatchName: boolean =
      item.name && item.name.toLowerCase().includes(searchText.value);
    const searchMatchDescription = item.description
      .toLowerCase()
      .includes(searchText.value);
    const didMatchSearchText =
      searchMatchDescription || searchMatchName || searchMatchTitle;

    if (!didMatchSearchText) {
      return false;
    }
    return true;
  });
};
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: var(--content-padding);
}
.form-card {
  margin-bottom: var(--content-padding);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
.form-card :deep(.p-card-content) {
  padding: 0;
}
.input-span {
  width: 100%;
}
.input-span label {
  align-self: center;
  margin-right: var(--inline-spacing);
}
.p-chips,
:deep(.p-chips-multiple-container) {
  width: 100%;
}
</style>
