<script>
  import DecoratedImage from './DecoratedImage.svelte';
  export let imagePathPartial = '';
  export let projectType = '';
  export let title = '';
  export let url = '';
  const baseUrl = 'https://res.cloudinary.com/dcx8f5ez0/image/upload/'
  const urls = {
    phone: `${baseUrl}/t_phone/${imagePathPartial}`,
    tablet: `${baseUrl}/t_tablet/${imagePathPartial}`,
    desktop: `${baseUrl}/t_desktop/${imagePathPartial}`
  }
</script>

<!-- <div>
  {imagePathPartial}
  {projectType}
  {title}
  {url}
</div> -->

<div class="stack--400 mega-card">
  <DecoratedImage images={urls} />
  <div class="stack--300 mega-card__content">
    <div class="stack--100">
      <p class="secondary wght--700">{projectType}</p>
      <h2>{title}</h2>
    </div>
    <div class="stack--300">
      <a href="{url}" class="button button--primary">Website ansehen</a>
    </div>
  </div>
</div>