<script>
  export let technology = '';

  import Airtable from './icons/technologies/airtable.svg';
  import Eleventy from './icons/technologies/eleventy.svg';
  import Firebase from './icons/technologies/firebase.svg';
  import Gatsby from './icons/technologies/gatsby.svg';
  import Netlify from './icons/technologies/netlify.svg';
  import Nextjs from './icons/technologies/nextjs.svg';
  import Prismic from './icons/technologies/prismic.svg';
  import React from './icons/technologies/react.svg';
  import Svelte from './icons/technologies/svelte.svg';
  import Vercel from './icons/technologies/vercel.svg';
  import Vuejs from './icons/technologies/vuejs.svg';
  import Wordpress from './icons/technologies/wordpress.svg';

  const icons = {
    eleventy: {
      icon: Eleventy,
      url: 'https://www.11ty.dev/'
    },
    airtable: {
      icon: Airtable,
      url: 'https://airtable.com/',
    },
    firebase: {
      icon: Firebase,
      url: 'https://firebase.google.com/'
    },
    gatsby: {
      icon: Gatsby,
      url: 'https://www.gatsbyjs.org/'
    },
    netlify: {
      icon: Netlify,
      url: 'https://www.netlify.com/'
    },
    nextjs: {
      icon: Nextjs,
      url: 'https://nextjs.org/'
    },
    prismic: {
      icon: Prismic,
      url: 'https://prismic.io/'
    },
    react: {
      icon: React,
      url: 'https://reactjs.org/'
    },
    svelte: {
      icon: Svelte,
      url: 'https://svelte.dev/'
    },
    vercel: {
      icon: Vercel,
      url: 'https://vercel.com/'
    },
    vuejs: {
      icon: Vuejs,
      url: 'https://vuejs.org/'
    },
    wordpress: {
      icon: Wordpress,
      url: 'https://de.wordpress.org/'
    }
  }
</script>

<a href="{icons[technology].url}" target="blank" rel="noreferrer noopener">
  <svelte:component this={icons[technology].icon} />
</a>
