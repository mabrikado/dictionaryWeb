<script>
  import Synonyms from "./synonyms.svelte";

    let {word , synonyms , searched = false} = $props();
    console.log($state.snapshot(synonyms));
</script>
    <h2>
        <div id="word">{word}</div> &nbsp;
    </h2>
    {#if synonyms.length}
        <ol>
            {#each synonyms as synonym}
            <p class="related-word">{synonym}</p>
            {/each}
        </ol>
    {:else if searched && word}
    <p>Could not find synonyms for<em>${word}</em>.</p>
    {/if}