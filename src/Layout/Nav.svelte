<script lang="ts">
  import Layout from "../Layout/Layout.svelte";
  import { tabStore } from "../store";

  const changeTab = (tab: string) => {
    tabStore.set(tab);
  };
</script>

    <nav >
        <div>
            <h1 class="p-4 text-secondary font-bold border-b border-gray-100">Lorem Picsum Recipies</h1>
        </div>
      <ul class="flex justify-between py-4 px-8  bg-slate-50 w-100">
        <li><button on:click={() => changeTab('home')} type="button">Home</button></li>
        <li><button on:click={() => changeTab('about')} type="button">About</button></li>
        <li><button on:click={() => changeTab('contact')} type="button">Contact</button></li>
      </ul>
    </nav>

