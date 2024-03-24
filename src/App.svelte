<script lang="ts">
  import Nav from "./Layout/Nav.svelte";

  import Layout from "./Layout/Layout.svelte";
  import Main from "./Tabs/Main.svelte";
  import { tabStore } from "./store";

  let tab: string;

  const unsubscribe = tabStore.subscribe((value) => {
    tab = value;
  });

  $: console.log(tab);
</script>

<Layout>
  {#if tab === "home"}
    <Main />
  {/if}
  {#if tab === "about"}
    <h1>About</h1>
  {/if}
  {#if tab === "contact"}
    <h1>Contact</h1>
  {/if}
</Layout>
