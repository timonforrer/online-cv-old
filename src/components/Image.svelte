<script>
  export let content = '';
  import ResponsiveImage from './ResponsiveImage.svelte';
  import Urls from '../utils/getUrls.js';
  const urls = new Urls(content);
</script>

<ResponsiveImage images={urls} />