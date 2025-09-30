<script lang="ts">
    let {word , phonetic , audio , examples , partOfSpeeches} = $props();
</script>

    <h2>
        <div id="word">{word}</div> &nbsp;
        <div id="phonetic">{phonetic}</div>
    </h2>
    {#if audio}
    <h3>Audio</h3>
    <audio controls>
        <source src={audio} type="audio/mp3">
        Your browser does not support the audio tag.
    </audio>
    {/if}
    {#if partOfSpeeches.length}
    <h3>Meanings</h3>
    {#each partOfSpeeches as pos}
        <h4 class="part-of-speech">{pos.partOfSpeech}</h4>
        <ol>
        {#each pos.definitions as def}
            <li class="definition">{def.definition}</li>
        {/each}
        </ol>
    {/each}
    {/if}
    {#if examples.length}
        <h3>Examples</h3>
        <ol>
            {#each examples as example}
            <li class = "example">{example}</li>
            {/each}
        </ol>
    {/if}
