<script>
    let {word , antonyms , searched = false} = $props();
</script>
    <h2>
        <div id="word">{word}</div> &nbsp;
    </h2>
    {#if antonyms.length}
        <ol>
            {#each antonyms as antonym}
            <p class="related-word">{antonym}</p>
            {/each}
        </ol>
    {:else if searched && word}
    <p>Could not find antonyms for <em>${word}</em>.</p>
    {/if}