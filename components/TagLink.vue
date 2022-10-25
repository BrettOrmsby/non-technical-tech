<template>
  <Chip :label="tag" />
</template>

<script lang="ts" setup>
defineProps<{ tag: string }>();
</script>

<style scoped>
.p-chip {
  background-color: var(--primary);
  color: var(--primary-color-text);
  margin-right: var(--inline-spacing);
  font-size: 0.8em;
}

.p-chip:hover {
  background-color: var(--primary-hover);
}
</style>
