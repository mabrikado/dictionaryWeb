<script>
  import { fetchSynonyms } from "../utils.js";
  import Results from "./results.svelte";

  let loading = $state(false);
  let searched = $state(false);
  let name = $state();
  let wordData = $state({
    word: "",
    synonyms: []
  });

  async function setWordData(e) {
    e.preventDefault();
    loading = true;
    wordData = await fetchSynonyms(name);
    loading = false;
    searched = true;
  }
  
</script>

<h1>Synonyms</h1>
<br />

<form id="lookup-form" onsubmit={setWordData}>
  <input
    bind:value={name}
    name="word"
    id="lookup"
    type="text"
    required
    oninput={() => {searched = false}}
  />
  <input name="submit" type="submit" value="Search" />
</form>

<br />

<div id="related-words-container">
  {#if loading}
    <p>Searching for <em>{name}</em>...</p>
  {:else}
    <Results word={(wordData.word) ? (wordData.word) : name} synonyms={wordData.synonyms} {searched}/>
  {/if}
</div>
