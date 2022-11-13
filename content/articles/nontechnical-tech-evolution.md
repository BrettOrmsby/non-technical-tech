---
date: 2022-09-25​
readTime: 3
tags:
  - Vue
  - Nuxt
  - Primevue
  - Design
title: NonTechnical Tech Evolution
description: For just under 4 months of existence, this website has changed in many ways.
image: /articles/non-technical-tech.jpg
---

NonTechnical tech has went through many changes just in the 4 months it has been operational.

This website was the first real website I ever made using my new and first computer. It was also the first website I ever made with :InlineLink{label="Vue" to="/search?tags=vue"}.

## Phase 1, Vue options api

> Vue 3, options API, Webpack, self-made CSS, publicly served markdown and JSON data

My first time using Vue, node and all the bells and whistles that come with development from a computer came with many struggles.

The opinion API was actually pretty easy to use. The properties were self-explanatory and sped up development far faster than regular vanilla JS.

Reaching the end, after struggling through many router issues and determining the best way to fetch the markdown, I had an okay-looking website that worked for what I had in mind.

## Phase 2, Hosting Markdown and Data on Supabase

> Vue 3, options api, Webpack, self-made CSS, Supabase served markdown and JSON data

Then, I wanted to be able to update my articles and projects and was learning a bit about CMS. I looked for free CMS' that allows you to serve raw markdown and JSON data, but I could not find any.

At this time, I was also looking into Subabase and discovered that it has a storage API. So, I decided to use Supabase, meant for authentication and storing user data, to host my markdown files and JSON data.

I also added my project page, latest project and search page to the website. It was beginning to look like something that I had envisioned.

I spent some more time fixing styles and bugs, then phase 2 was complete.

## Phase 3, Composition API

> Vue 3, composition api, Vite, self-made CSS, Supabase served markdown and JSON data

I began to learn the composition API and kind of enjoyed it. To understand it better, I decided to rewrite all the components in my website to use the composition API instead of the options.

Using `Ref`s was probably the hardest thing to get used to. The code was pretty easy to rewrite and looked far more readable than before.

I also changed the Supabase hosting slightly to make it easier, switched to using Vite to bundle the code and fixed many CSS bugs.

## Phase 4, Nuxt JS

> Nuxt, composition API, typescript, Vite, Primevue, Nuxt Content

And now to the phase I am currently designing as I write this article.

Phase 4 is all about improving the feel of the website.

Markdown is loaded for the article before finishing the navigation. This removed the loading that was a turn-off to look at while the markdown was being fetched in phase 3.

The styling of the website now uses Primevue to give it a much more professional look.

Markdown and JSON data are hosted with Nuxt Content to make a faster load time and make it easier for me to update information.

SEO should greatly improve because of the APIs Nuxt provides.

I have these goals for phase 4 and hope they be fulfilled.
