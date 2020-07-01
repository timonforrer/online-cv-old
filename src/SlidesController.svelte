<script>
  import { fade } from 'svelte/transition';
  import { sineInOut } from 'svelte/easing';
  import ComponentsController from './ComponentsController.svelte';

  export let slides;
  let activeSlide = 0;
</script>

<div>
  {#each slides as slide, i}
    <section class="container slide {slide.layout ? slide.layout : ''}">
      {#if activeSlide === i}
        <div transition:fade={{ duration: 300, easing: sineInOut }}>
          {#each slide.body as item}
            <ComponentsController activeComponent={item.type} content={item.content} />
          {/each}
        </div>
      {/if}
    </section>
  {/each}

  <div class="controls">
    <div class="container">
      <div class="wrapper">
        <button
          class="button button--regular" 
          disabled="{activeSlide <= 0}" 
          on:click={e => activeSlide -= 1}
        >
          Vorherige Seite
        </button>
        <button
          class="button button--regular" 
          disabled="{activeSlide >= (slides.length-1)}" 
          on:click={e => activeSlide += 1}
        >
          Nächste Seite
        </button>
      </div>
    </div>
  </div>
</div>

<style>
section.slide {
  top: 3rem;
  right: 0;
  bottom: 0;
  left:  0;
  height: fit-content;
  margin-bottom: 10rem;
  position: absolute;
}

section.slide.centered {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.controls {
  right: 0;
  bottom: 0;
  left: 0;
  backdrop-filter: blur(.5rem);
  background-color: rgba(255, 255, 255, 0.6);
  position: fixed;
}

.controls .wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: -.5rem -.75rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.controls .wrapper > * {
  margin: .5rem .75rem;
}
</style>
