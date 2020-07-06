<script>
  export let activeComponent = 'columns';
  export let content;

  import H1 from './components/typographic-elements/H1.svelte';
  import H2 from './components/typographic-elements/H2.svelte';
  import H3 from './components/typographic-elements/H3.svelte';
  import P from './components/typographic-elements/P.svelte';

  import Columns from './components/Columns.svelte';
  import Icon from './components/Icon.svelte';
  import Image from './components/Image.svelte';
  import Lead from './components/Lead.svelte';
  import List from './components/List.svelte';
  import Logo from './components/Logo.svelte';
  import MegaCard from './components/MegaCard.svelte';
  import Project from './components/Project.svelte';
  import Quote from './components/Quote.svelte';
  import Title from './components/Title.svelte';

  const components = {
    h1: H1,
    h2: H2,
    h3: H3,
    p: P,
    columns: Columns,
    icon: Icon,
    image: Image,
    lead: Lead,
    list: List,
    logo: Logo,
    megacard: MegaCard,
    project: Project,
    quote: Quote,
    title: Title
  }
</script>

<svelte:component this={components[activeComponent]} {content} />
