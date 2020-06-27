<script>
  import { FirebaseApp, User, Doc, Collection } from "sveltefire";

  import firebase from "firebase/app";
  import "firebase/firestore";
  import "firebase/auth";
  import "firebase/performance";
  import "firebase/analytics";

  let firebaseConfig = {
    apiKey: "AIzaSyDEyoW88yU4gCLpjTQxCQm4bcDVZTupp9k",
    authDomain: "online-cv-57b2e.firebaseapp.com",
    databaseURL: "https://online-cv-57b2e.firebaseio.com",
    projectId: "online-cv-57b2e",
    storageBucket: "online-cv-57b2e.appspot.com",
    messagingSenderId: "828401225902",
    appId: "1:828401225902:web:3661d2e8b540b5b6311d3f"
  };

  firebase.initializeApp(firebaseConfig);
</script>

<main>
  <FirebaseApp {firebase}>

  <Collection path={'agencies/ostendis/slides'} let:data={slides}>

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

  </Collection>

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