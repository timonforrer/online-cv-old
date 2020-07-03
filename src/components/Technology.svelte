<script>
  export let technology = '';

  import Airtable from './icons/technologies/airtable.svg';
  import Firebase from './icons/technologies/firebase.svg';
  import Gatsby from './icons/technologies/gatsby.svg';
  import Netlify from './icons/technologies/netlify.svg';
  import Nextjs from './icons/technologies/nextjs.svg';
  import React from './icons/technologies/react.svg';
  import Svelte from './icons/technologies/svelte.svg';
  import Vercel from './icons/technologies/vercel.svg';
  import Vuejs from './icons/technologies/vuejs.svg';
  import Wordpress from './icons/technologies/wordpress.svg';

  const icons = {
    airtable: Airtable,
    firebase: Firebase,
    gatsby: Gatsby,
    netlify: Netlify,
    nextjs: Nextjs,
    react: React,
    svelte: Svelte,
    vercel: Vercel,
    vuejs: Vuejs,
    wordpress: Wordpress
  }
</script>

<svelte:component this={icons[technology]} />
