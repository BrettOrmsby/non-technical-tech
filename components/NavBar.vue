<template>
  <Toolbar ref="nav" :class="{ nav: true, absolute: isAbsolute }">
    <template #start>
      <NuxtLink to="/" class="title">
        <Button type="button" class="p-button-text">
          <span class="primary">Non</span
          ><span class="normal-color">Technical Tech</span>
        </Button>
      </NuxtLink>
    </template>
    <template #end>
      <NuxtLink to="/articles">
        <Button type="button" class="p-button-text">
          <span class="remove2">Articles</span>
          <i class="pi pi-book icon"></i>
        </Button>
      </NuxtLink>
      <NuxtLink to="/projects">
        <Button type="button" class="p-button-text">
          <span class="remove2">Projects</span>
          <i class="pi pi-code icon"></i>
        </Button>
      </NuxtLink>
      <NuxtLink to="/search">
        <Button type="button" class="p-button-text">
          <span class="remove1">Search</span>
          <i class="pi pi-search icon"></i>
        </Button>
      </NuxtLink>
    </template>
  </Toolbar>
</template>

<script lang="ts" setup>
const isAbsolute = ref(true);
onMounted(() => {
  let prevScrollPos = window.pageYOffset;
  window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      isAbsolute.value = false;
    } else {
      isAbsolute.value = true;
    }
    prevScrollPos = currentScrollPos;
  };
});
</script>

<style scoped>
.title {
  font-weight: bold;
  color: inherit;
  text-decoration: none;
}

.normal-color {
  color: var(--text-color);
}

.icon {
  margin-left: var(--inline-spacing);
}

.nav {
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0.5rem 0.5rem;
}

.absolute {
  position: absolute;
}

.p-button:focus {
  box-shadow: none;
}

@media only screen and (max-width: 600px) {
  .remove1 {
    display: none;
  }

  .icon.pi-search {
    margin: 0;
  }
}

@media only screen and (max-width: 550px) {
  .remove2 {
    display: none;
  }

  .icon {
    margin: 0;
  }
}
</style>
