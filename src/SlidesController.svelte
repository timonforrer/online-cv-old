<script>
  export let slides;
  let activeSlide = 1;

  import ComponentsController from './ComponentsController.svelte'
</script>

<div class="container">
  {#each slides as slide, i}
    {#if activeSlide === i}
      {#each slide.body as item}
        <ComponentsController activeComponent={item.type} content={item.content} />
      {/each}
    {/if}
  {/each}

  {#if activeSlide > 0}
    <button on:click={e => activeSlide -= 1}>Previous</button>
  {/if}
  {#if activeSlide < (slides.length-1)}
    <button on:click={e => activeSlide += 1}>Next</button>
  {/if}
</div>
