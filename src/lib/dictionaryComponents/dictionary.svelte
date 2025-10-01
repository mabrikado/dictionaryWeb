<script lang="ts">
  import Results from "./results.svelte";
  import { fetchWordData } from "../utils.js";

  let loading: boolean = false;

  let name: string = "word";
  let wordData: {
    word: string;
    phonetic: string;
    audio: string;
    examples: string[];
    partOfSpeeches: { partOfSpeech: string; definitions: any[] }[];
  } = {
    word: "",
    phonetic: "",
    audio: "",
    examples: [],
    partOfSpeeches: []
  };

  async function setWordData(event: Event) {
    event.preventDefault();
    loading = true;
    wordData = await fetchWordData(name);
    loading = false;
  }
</script>

<h1>Dictionary</h1>
<br />

<form id="lookup-form" onsubmit={setWordData}>
  <input
    bind:value={name}
    name="word"
    id="lookup"
    type="text"
    required
  />
  <input name="submit" type="submit" value="Search" />
</form>

<br />

<div id="results">

    {#if loading}
    <p>Searching for <em>${name}</em>...</p>
    {:else if wordData.error && name}
    <p>Could not find word for {name}</p>
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
