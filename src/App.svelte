<script>
  import Antonyms from "./lib/antonymsComponents/antonyms.svelte";
  import Synonyms from "./lib/synonymsComponents/synonyms.svelte";
  import Dictionary from "./lib/dictionaryComponents/dictionary.svelte";

  let route = window.location.hash || '#/';

  window.addEventListener('hashchange', () => {
    route = window.location.hash;
  });

  import { onMount } from "svelte";

  onMount(() => {
    const html = document.documentElement;
    const themeToggleBtn = document.getElementById("theme-toggle");

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      html.setAttribute("data-theme", savedTheme);
    }

    themeToggleBtn?.addEventListener("click", () => {
      const currentTheme = html.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      themeToggleBtn.textContent = (newTheme === "dark") ? "Light Mode" : "Dark Mode";
      html.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
    });
  });
</script>

<main>
  <nav>
    <div class="nav-links" id="nav-menu">
      <a href="#/">Dictionary</a>
      <a href="#/antonyms">Antonyms</a>
      <a href="#/synonyms">Synonyms</a>
      <button id="theme-toggle">Toggle Theme</button>
    </div>
  </nav>

  <div>
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
