<template>
  <div>
    <h1>Search</h1>
    <Card style="margin-bottom: var(--content-padding)">
      <template #content>
       <AutoComplete
          v-model="selectedTags"
          :multiple="true"
          :suggestions="tagSuggestions"
          @complete="searchTags($event)"
        />
      </template>
    </Card>
      <ContentList v-slot="{ list }" :query="queryFilter" :key="componentKey">
        <div class="flex">
          <template v-for="item of list"
            :key="item._path">
            <ProjectCard
            v-if="item._path.startsWith('/projects')"
            :project="item"
          />
          <ArticleCard v-else :article="item"/>
          </template>
          </div>
        </ContentList>
  </div>
</template>

<script lang="ts" setup>
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";
import type { ParsedContent } from "@nuxt/content/dist/runtime/types";
const componentKey = ref(0);
let { query } = useRoute();

const queryTags = typeof query.tags == "string" ? query.tags.split(",") : []
const selectedTags = ref(queryTags.filter(e => e));


const queryFilter = computed(() => { 
  componentKey.value += 1
  return {
  path: "/",
  sort: [{ date: -1, $numeric: true }],
  where: {
    tags: { $contains: [...selectedTags.value] }
  },
  only: ["title", "description", "date", "readTime", "tags", "_path", "link", "name", "image"],
}})

interface ArticleData extends ParsedContent {
  title: string;
  description: string;
  readTime: number;
  date: string;
  tags: string[];
  _path: string;
}

interface ProjectData extends ParsedContent {
  name: string;
  image: string | null;
  link: string;
  tags: string[];
  description: string;
}

type ArticlesAndProjects = (ArticleData | ProjectData)[]

const { data, error } = await useAsyncData(
  "articles-projects",
  () => {
    return queryContent<ArticlesAndProjects>("/")
      .sort({ date: -1, $numeric: true })
      .only(["title", "description", "date", "readTime", "tags", "_path", "link", "name", "image"])
      .find();
  }
);

// This should be done a better way
const articlesAndProjects = data.value as ArticlesAndProjects

if (error.value) {
  throw createError({
    statusCode: 500,
    statusMessage: "Unable to load search results.",
    fatal: true,
  });
}

// get all tags from both articles and projects
const removeDuplicateStrings = (array: string[]): string[] => {
  const uniqueValues = [];
  const seenMap = {};

  for (const item of array) {
    if (seenMap[item]) {
      continue;
    }
    seenMap[item] = true;
    uniqueValues.push(item);
  }
  return uniqueValues;
};

// get all unique tags
const tagArrays = [...articlesAndProjects.map((e) => e.tags)];
const allTags = removeDuplicateStrings(tagArrays.flat());
const tagSuggestions = ref<string[]>(allTags);

// search tags for auto complete
const searchTags = (event: { query: string }) => {
  const lowerCaseQuery = event.query.toLowerCase();
  tagSuggestions.value = allTags.filter((e) =>
    e.toLocaleLowerCase().includes(lowerCaseQuery)
  );
};

// http://localhost:3000/search?articles=false&projects=false&tags=vue,js,html&name=hfkhasdk
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: var(--content-padding);
}
</style>
