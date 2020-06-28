<script>
  import { onMount } from 'svelte';

  import queryString from 'query-string';

  import { FirebaseApp, User, Doc, Collection } from "sveltefire";

  import firebase from "firebase/app";
  import "firebase/firestore";
  import "firebase/auth";
  import "firebase/performance";
  // import "firebase/analytics";

  import firebaseConfig from '../firebase-config.js';
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  let message;

  onMount(async () => {
    const queryParams = queryString.parse(location.search);
    const res = await fetch(`/api/login?agency=${queryParams.agency}&token=${queryParams.token}`);
    const json = await res.json();
    if (res.ok) {
      auth.signInWithCustomToken(json.token);
    }
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
        {#each slides as slide}
          {slide.id}

          {#each slide.body as item}
            {item.content}
          {/each}
        {/each}
      </Collection>
      <div slot="loading">loading</div>
      <div slot="fallback">fallback</div>
    </User>

    <!-- <Collection path={'agencies/ostendis/slides'} let:data={slides}>

      {#each slides as slide}
        <section>
          <h1>{slide.id}</h1>
          <ul>
          {#each slide.body as item}

            <li>
              <h2>{item.type}</h2>
              {#if item.type === 'columns'}
                <div class="columns">
                  {#each item.content as column}
                    
                    <div class="column">
                      {#each column.content as column_content}
                        {#if column_content.type === 'icon'}
                          icon: {column_content.content}
                        {:else if column_content.type === 'heading'}
                          <h3>{column_content.content}</h3>
                        {:else if column_content.type === 'paragraph'}
                          <p>{column_content.content}</p>
                        {/if}
                      {/each}
                    </div>

                  {/each}
                </div>
              {:else if item.content}
                {item.content}
              {/if}
            </li>

          {/each}
          </ul>

        </section>
      {/each}

    </Collection> -->

  </FirebaseApp>

</main>

<style>
:global(html) {
  background-color: #fafafa;
}
* {
  box-sizing: border-box;
}
.columns {
  display: flex;
  flex-wrap: wrap;
  margin: -1.5rem;
  width: 100%;
}
.column {
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.1);
  flex-basis: 17rem;
  flex-grow: 1;
  margin: .75rem;
  padding: 2rem;
}
</style>