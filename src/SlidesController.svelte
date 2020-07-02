<script>
  import { fade } from 'svelte/transition';
  import { sineInOut } from 'svelte/easing';
  import ComponentsController from './ComponentsController.svelte';

  export let slides;
  let activeSlide = 0;
</script>

<div>
  {#each slides as slide, i}
    {#if activeSlide === i}
      <section class="container slide {slide.layout ? slide.layout : ''}">
        <!-- <div transition:fade={{ duration: 300, easing: sineInOut }}> -->
        <div>
          {#each slide.body as item}
            <ComponentsController activeComponent={item.type} content={item.content} />
          {/each}
        </div>
        <!-- </div> -->
      </section>
    {/if}
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
