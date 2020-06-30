<script>
  export let content = 'coding';

  import Coding from './icons/coding.svg';
  import Graduate from './icons/graduate.svg';
  import Work from './icons/work.svg';

  const config = {
    coding: Coding,
    graduate: Graduate,
    work: Work
  }
</script>

<svelte:component this={config[content]} />