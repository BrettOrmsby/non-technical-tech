<template>
  <footer>
    <nav>
      <NuxtLink to="/">NonTechnical Tech</NuxtLink>
      <NuxtLink to="/articles">Articles</NuxtLink>
      <NuxtLink to="/projects">Projects</NuxtLink>
      <NuxtLink to="/search">Search</NuxtLink>
      <NuxtLink to="https://github.com/BrettOrmsby/non-technical-tech"
        >GitHub</NuxtLink
      >
    </nav>
    <small><a href="mailto:brettwormsby@outlook.com">Contact me</a></small>
    <small>© Brett Ormsby 2022-{{ new Date().getFullYear() }}</small>
  </footer>
</template>

<style scoped>
footer {
  border: 1px solid #3f4b5b;
  width: 100%;
  padding: 1rem;
  background: var(--layer);
}
nav {
  display: flex;
  justify-content: center;
  gap: var(--content-padding);
  width: 100%;
  margin-bottom: var(--content-padding);
  flex-wrap: wrap;
}
small {
  color: var(--muted);
  display: block;
  text-align: center;
}
</style>
