<script>
  import { fetchAntonyms } from "../utils.js";
  import Results from "./results.svelte";

  let loading = $state(false);
  let name = $state("word");
  let wordData = $state({
    word: "",
    antonyms: []
  });

  async function setWordData(e) {
    e.preventDefault();
    loading = true;
    wordData = await fetchAntonyms(name);
    loading = false;
  }
</script>

<h1>Antonyms</h1>
<br />

<form id="lookup-form" on:submit={setWordData}>
  <input
    bind:value={name}
    name="word"
    id="lookup"
    type="text"
    required
    on:input={() => console.log(name)}
  />
  <input name="submit" type="submit" value="Search" />
</form>

<br />

<div id="related-words-container">
  {#if loading}
    <p>Searching for <em>{name}</em>...</p>
  {:else}
    <Results word={wordData.word} antonyms={wordData.antonyms} />
  {/if}
</div>
