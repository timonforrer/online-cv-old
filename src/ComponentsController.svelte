<script>
  export let activeComponent = 'columns';
  export let content;

  import H1 from './components/typographic-elements/H1.svelte';
  import H2 from './components/typographic-elements/H2.svelte';
  import H3 from './components/typographic-elements/H3.svelte';
  import P from './components/typographic-elements/P.svelte';

  import Columns from './components/Columns.svelte';
  import Icon from './components/Icon.svelte';
  import Lead from './components/Lead.svelte';
  import Logo from './components/Logo.svelte';
  import Quote from './components/Quote.svelte';
  import Title from './components/Title.svelte';

  const components = {
    h1: H1,
    h2: H2,
    h3: H3,
    p: P,
    columns: Columns,
    icon: Icon,
    lead: Lead,
    logo: Logo,
    quote: Quote,
    title: Title
  }
</script>

<svelte:component this={components[activeComponent]} {content} />
