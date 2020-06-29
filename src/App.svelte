<script>
  import { onMount } from 'svelte';
  import queryString from 'query-string';
  import { FirebaseApp, User, Doc, Collection } from "sveltefire";
  import firebase from "firebase/app";
  import "firebase/firestore";
  import "firebase/auth";
  import "firebase/performance";
  import firebaseConfig from '../firebase-config.js';

  import SlidesController from './SlidesController.svelte';
  
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  let message;

  onMount(async () => {
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
    {message}
  {/if}

  <FirebaseApp {firebase}>

    <User let:user let:auth>

      <Collection path={`agencies/${user.uid}/slides`} let:data={slides}>
        <SlidesController {slides} />
        <div slot="loading">loading collection</div>
        <div slot="fallback">fallback</div>
      </Collection>

      <div slot="loading">auth pending</div>
      <div slot="fallback">fallback</div>

    </User>

  </FirebaseApp>

</main>
