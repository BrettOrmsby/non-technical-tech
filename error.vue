<template>
  <div class="container">
    <h1>404</h1>
    <p>Page not found</p>
    <NuxtLink to="/"><Button label="Home" /></NuxtLink>
  </div>
</template>

<style scoped>
h1 {
  font-size: 9em;
  line-height: 0;
}
.container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
