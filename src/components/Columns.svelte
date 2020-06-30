<script>
  export let content;
  let columns = content;

  import ComponentsController from '../ComponentsController.svelte';
  console.log(columns)
</script>

<div class="columns">
  {#each columns as column}
    <div class="column">
      {#each column.content as columnContent}
        <ComponentsController activeComponent={columnContent.type} content={columnContent.content} />
      {/each}
    </div>
  {/each}
</div>

<style>
.columns {
  display: flex;
  flex-wrap: wrap;
  margin: -.75rem;
}
.column {
  flex-basis: 17rem;
  flex-grow: 1;
  margin: .75rem;
}
:global(.column svg) {
  height: auto;
  max-width: 100%;
  width: 8rem;
}
</style>
