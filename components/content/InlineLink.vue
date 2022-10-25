<template>
  <NuxtLink :to="to">{{ label }}</NuxtLink>
</template>

<script lang="ts" setup>
defineProps<{ to: string; label: string }>();
</script>
