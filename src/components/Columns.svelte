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
