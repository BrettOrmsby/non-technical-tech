<template>
  <div>
    <NavBar />
    <div class="container">
      <slot />
    </div>
    <FooterNav />
  </div>
</template>

<style scoped>
.container {
  margin-top: 2rem;
}
</style>
