<script lang="ts">
    export let summary: string;
    export let author: string;
    export let image: string;
    export let alt = "";
</script>

<div class="mt-8 relative">
    <div class="bg-white rounded overflow-hidden shadow-md">
        <img src={image} {alt} class="w-full h-32 sm:h-48 object-cover" />
        <div>
            <p>{summary}</p>
            <p class="text-gray-500 text-sm">By: {author.toUpperCase()}</p>
        </div>
    </div>
    <div class="bg-success text-sm text-white font-bold py-1 px-2 rounded-full absolute top-0 ml-2 mt-2">
        <span>25 mins</span>
    </div>
</div>
