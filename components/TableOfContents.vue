<template>
  <div>
    <h2>Table of Contents</h2>
    <nav>
      <ul>
        <li
          v-for="link of flattenLinks(links)"
          :key="link.id"
          :class="`link-depth-${link.depth}`"
        >
          <a :href="`#${link.id}`">
            {{ link.text }}
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" setup>
type linkObj = {
  text: string;
  id: string;
  depth: number;
  children?: linkObj[];
};
defineProps<{ links: linkObj[] }>();

// flatten links nested arrays to one array
const flattenLinks = (links: linkObj[]) => {
  return links
    .map((link) => {
      let linkList = [link];
      if (link.children) {
        const flattenedChildren = flattenLinks(link.children);
        linkList = [link, ...flattenedChildren];
      }
      return linkList;
    })
    .flat(1);
};
</script>
<style scoped>
ul {
  list-style: none;
}
.link-depth-3 {
  margin-left: 1em;
}
</style>
