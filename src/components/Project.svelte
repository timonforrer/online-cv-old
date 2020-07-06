<script>
  import List from './List.svelte';
  import MegaCard from './MegaCard.svelte';
  import Technology from './Technology.svelte';
  export let content = [];
  console.log(content.technologies);
</script>


<div class="stack--500">
  <MegaCard {...content.megacard} />

  <div>
    <List content={content.list} />
  </div>

  <div class="stack--200">
    <p class="uppercase">Projekt realisiert mit</p>
    <div class="technology-list">
      {#each content.technologies as technology}
        <Technology {technology} />
      {/each}
    </div>
  </div>
</div>
