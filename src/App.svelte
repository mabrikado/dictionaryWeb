<script>
  import Antonyms from "./lib/antonymsComponents/antonyms.svelte";
  import Synonyms from "./lib/synonymsComponents/synonyms.svelte";
  import Dictionary from "./lib/dictionaryComponents/dictionary.svelte";

  // 1. Reactive route tracking
  let route = window.location.hash || '#/';

  window.addEventListener('hashchange', () => {
    route = window.location.hash;
  });
</script>

<main>
  <div class="nav-links">
    <nav>
      <!-- 2. Use hash-based hrefs -->
      <a href="#/">Dictionary</a>
      <a href="#/antonyms">Antonyms</a>
      <a href="#/synonyms">Synonyms</a>
    </nav>
  </div>

  <div>
    <!-- 3. Render based on route -->
    {#if route === '#/'}
      <Dictionary />
    {:else if route === '#/antonyms'}
      <Antonyms />
    {:else if route === '#/synonyms'}
      <Synonyms />
    {:else}
      <p>Page not found.</p>
    {/if}
  </div>
</main>

