---
date: 2022-09-25​
readTime: 3
tags: 
  - Vue
  - Nuxt
  - Primevue
  - Design
title: NonTechnical Tech Evolution
description: For just under 4 months of existence, this website has changed a lot under the hood, and a bit on top.
---

NonTechnical tech has gone through many changes just in the 4 months is has been operational.

This website was the first real website that I ever made, using my new and first computer. It was also the first website I ever made with :InlineLink{label="Vue" to="/search?tags=vue"}.

## Phase 1, Vue options api
> Vue 3, options api, Webpack , self made css, publicly served markdown and json data

My first time using Vue, node and all the bells and whistles that come with development from a computer came with many struggles.

The opinion api was actually pretty easy to use. The properties were all self-explanatory and if sped up development far faster than regular vanilla JS would.

By the end, after struggling through many router issues, and determining the best way to fetch the markdown, I had a okay-looking website that worked for what I had in mind.

## Phase 2, Hosting Markdown and Data on Supabase
> Vue 3, options api, Webpack , self made css, Supabase served markdown and json data

Then, I wanted to be able to update my articles and projects and I was learning a bit about CMS. I looked for any free CMS that allows you to serve raw markdown and json data but I could not find any.

At this time, I was also looking into Subabase, and I discovered that it has a storage api. So, I decided to use Supabase, meant for authentication and storing user data, to host my markdown files and json data.

I also added my project page, latest project and search page to the website. It was beginning to look like something that I had envisioned.

I spent some more time fixing styles and bugs and phase 2 was complete.

## Phase 3, Composition Api
> Vue 3, composition api, Vite, self made css, Supabase served markdown and json data

I began to learn the composition api and kind of enjoyed it. To learn I better, I decided to re-write all the components in my website to use the composition api, instead of the options.

Using `Ref`s was probably the hardest thing to get used to. The code was pretty easy to re-write and it definitely looked more readable than before.

I also changed the Supabase hosting slightly to make it easier, switched to using Vite to bundle the code and fixed many css bugs.

## Phase 4, Nuxt JS
> Nuxt, composition api, typescript, Vite , Primevue, Nuxt Content

And now to the phase that I am currently designing as I write this article. 

Phase 4 is all about improving the feel of the website. 

Markdown in loaded for the article before finishing the navigation. This removed the loading that was kind of a turn off to look at while the markdown was being fetched in phase 3.

The style of the website now uses Prime vue to give it a much more professional look.

Markdown and json data is hosted with Nuxt Content to make a faster load time and make it easier for me to update information.

SEO should greatly increase because Nuxt makes it easier and most data is fetched before entering a page.

These are the goals that I have for phase 4 and I hope they end up being fulfilled.