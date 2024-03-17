<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import type { Site } from "$lib/types/index";

  export let grow = false;
  export let color = "default";
  export let options: Site[];
  export let selected: string;

  const baseClass =
    "rounded px-4 py-3 cursor-pointer shadow-[0px_2px_0px_0px_black,0px_0px_0px_1px_black] active:shadow-[inset_0px_1px_0px_0px_black,0px_0px_0px_1px_black]";
  const colorClasses = {
    default: "bg-neutral-50 dark:bg-neutral-800 ",
    yellow:
      "bg-yellow-400 text-neutral-900 hover:bg-yellow-500 active:bg-yellow-600 dark:bg-yellow-500",
    red: "bg-[#a52222] hover:bg-[#8d1c1c] active:bg-[#811a1a] text-neutral-50 dark:hover:bg-[#3d1010] dark:active:bg-[#370d0d] dark:bg-[#481414]",
  };

  $: selectClass = twMerge(
    baseClass,
    colorClasses[color],
    grow && "w-full grow"
  );
</script>

<label class="font-semibold block my-2" for=""><slot name="title" /></label>
<select class={selectClass} bind:value={selected} name="" id="">
  {#each options as option}
    <option value={option.value}>{option.name}</option>
  {/each}
</select>
