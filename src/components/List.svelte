<script>
  export let items = [];
</script>

<ul class="checked-list">
  {#each items as item}
    <li class="lead">{item}</li>
  {/each}
</ul>
