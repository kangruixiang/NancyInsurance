<script lang="ts">
  import { twMerge } from "tailwind-merge";
  export let grow = false;
  export let color = "default";
  export let text: string;
  export let title: string;

  const baseClass =
    "rounded w-24 px-4 py-2 border-solid border border-gray-600";
  const colorClasses = {
    default: "bg-white",
    yellow:
      "bg-yellow-400 text-neutral-900 hover:bg-yellow-500 active:bg-yellow-600 dark:bg-yellow-500",
    red: "bg-[#a52222] hover:bg-[#8d1c1c] active:bg-[#811a1a] text-neutral-50 dark:hover:bg-[#3d1010] dark:active:bg-[#370d0d] dark:bg-[#481414]",
  };

  $: inputClass = twMerge(
    baseClass,
    colorClasses[color],
    grow && "w-full grow"
  );
</script>

<div class="flex flex-col">
  <label for={text}>{title}</label>
  <input class={inputClass} id={text} type="text" value={text} />
</div>
