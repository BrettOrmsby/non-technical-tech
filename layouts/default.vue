<template>
  <div>
    <NavBar />
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 2rem;
}
</style>
