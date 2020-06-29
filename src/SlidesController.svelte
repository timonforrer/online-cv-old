<script>
  import {fade} from 'svelte/transition'
  import ComponentsController from './ComponentsController.svelte';

  export let slides;
  let activeSlide = 1;
</script>

<div>
  {#each slides as slide, i}
    <section class="container slide">
      {#if activeSlide === i}
        <div transition:fade>
          {#each slide.body as item}
            <ComponentsController activeComponent={item.type} content={item.content} />
          {/each}
        </div>
      {/if}
    </section>
  {/each}

  <div class="controls">
    <div class="container">
      <button disabled="{activeSlide <= 0}" on:click={e => activeSlide -= 1}>Previous</button>
      <button disabled="{activeSlide >= (slides.length-1)}" on:click={e => activeSlide += 1}>Next</button>
    </div>
  </div>
</div>

<style>
.controls {
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
}
section.slide {
  top: 0;
  right: 0;
  bottom: 0;
  left:  0;
  height: fit-content;
  margin-bottom: 4rem;
  position: absolute;
}
.controls {
  backdrop-filter: blur(.5rem);
  background-color: rgba(255, 255, 255, 0.6);
}
.controls .container {
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;
}
</style>
