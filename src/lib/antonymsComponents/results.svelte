<script>
    let {word , antonyms} = $props();
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
    {/if}