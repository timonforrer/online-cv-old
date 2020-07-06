<script>
  import { onMount } from 'svelte';
  import queryString from 'query-string';
  import { FirebaseApp, User, Doc, Collection } from "sveltefire";
  import firebase from "firebase/app";
  import "firebase/firestore";
  import "firebase/auth";
  import firebaseConfig from '../firebase-config.js';

  import './styles/global.css';

  import SlidesController from './SlidesController.svelte';
  
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  let message;

  onMount(async () => {
    message = 'Bitte warten: Authentifizierung läuft…';
    auth.signOut();
    const {
      agency,
      token
    } = queryString.parse(location.search);

    const res = await fetch(`/api/login?agency=${agency}&token=${token}`);
    const json = await res.json();

    if (res.ok) auth.signInWithCustomToken(json.token);
    message = json.message;
  });
</script>

<main>
  {#if message}
    <div class="container">
      {message}
    </div>
  {/if}

  <FirebaseApp {firebase}>

    <User let:user let:auth>

      <Collection path={`agencies/${user.uid}/slides`} let:data={slides}>
        <SlidesController {slides} />

        <div slot="loading"><div class="container">Daten werden geladen</div></div>
        <div slot="fallback"><div class="container">Daten konnten nicht geladen werden</div></div>
      </Collection>

    </User>

  </FirebaseApp>

</main>
