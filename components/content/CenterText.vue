<script lang="ts">
export default {
  name: "CenterText",
};
</script>

<template>
  <div>
    <ContentSlot :use="$slots.default" />
  </div>
</template>

<style scoped>
div {
  text-align: center;
  margin: 0 auto;
}
</style>
