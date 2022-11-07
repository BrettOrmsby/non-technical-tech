<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} • NonTechnical Tech`
      : "NonTechnical Tech";
  },
  meta: [
    {
      name: "description",
      content:
        "Hi, I am Brett Ormsby, and this is my portfolio website where you can see my projects and articles.",
    },
    { hid: "og-type", property: "og:type", content: "website" },
    { hid: "og-title", property: "og:title", content: "NonTechnical Tech" },
    {
      hid: "og-desc",
      property: "og:description",
      content:
        "Hi, I am Brett Ormsby, and this is my portfolio website where you can see my projects and articles.t",
    },
    {
      hid: "og-image",
      property: "og:image",
      content: "/apple-touch-icon.png",
    },
    {
      hid: "og-url",
      property: "og:url",
      content: "https://nontechnicaltech.vercel.app",
    },
    { hid: "t-type", name: "twitter:card", content: "summary_large_image" },
  ],
  link: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
  ],
});
</script>
