<script>
  import Dots from './icons/dots.svg';
  import ResponsiveImage from './ResponsiveImage.svelte'
  export let images = {};
</script>

<div class="decorated-image">
  <Dots />
    <div class="decorated-image__wrapper">
      <div class="decorated-image__content"></div>
      <ResponsiveImage {images} />
    </div>
  <Dots />
</div>
