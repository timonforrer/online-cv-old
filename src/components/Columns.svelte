<script>
  export let content;
  let columns = content;

  import ComponentsController from '../ComponentsController.svelte';
  console.log(columns)
</script>

{#each columns as column}
  {#each column.content as columnContent}
    <ComponentsController activeComponent={columnContent.type} content={columnContent.content} />
  {/each}
{/each}
