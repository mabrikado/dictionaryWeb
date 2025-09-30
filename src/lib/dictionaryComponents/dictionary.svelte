<script>
  import Results from "./results.svelte";
  import { fetchWordData } from "../utils.js";

  let loading = false;
  let name = "word";

  let wordData = {
    word: "",
    phonetic: "",
    audio: "",
    examples: [],
    partOfSpeeches: []
  };

  async function setWordData(event) {
    event.preventDefault();
    loading = true;
    wordData = await fetchWordData(name);
    loading = false;
  }
</script>

<h1>Dictionary</h1>
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

<div id="results">
  {#if loading}
    <p>Searching for <em>{name}</em>...</p>
  {:else}
    <Results
      word={wordData.word}
      phonetic={wordData.phonetic}
      audio={wordData.audio}
      examples={wordData.examples}
      partOfSpeeches={wordData.partOfSpeeches}
    />
  {/if}
</div>
