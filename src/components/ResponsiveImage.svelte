<script>
  export let images = {};
</script>

<picture>
  <source srcset={images.desktop} media="(min-width: 720px)" />
  <source srcset={images.tablet} media="(min-width: 300px)" />
  <img src={images.phone} alt="" loading="lazy" />
</picture>