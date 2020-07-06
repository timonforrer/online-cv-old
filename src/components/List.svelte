<script>
  export let content = [];
</script>

<ul class="checked-list">
  {#each content as item}
    <li class="lead">{item}</li>
  {/each}
</ul>
