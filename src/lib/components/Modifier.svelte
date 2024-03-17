<script>
  import { Text } from "$lib/index";
  export let modifiers;
</script>

<p class="font-semibold text-lg">Select Modifiers</p>

<fieldset
  class="border border-solid border-gray-800 p-4 rounded bg-gray-100 gap-y-2"
>
  <legend class="px-1">Modifiers</legend>
  {#each modifiers as modifier}
    <div>
      <input
        type="checkbox"
        id={modifier.label}
        name={modifier.label}
        bind:checked={modifier.checked}
      />
      <label class="cursor-pointer" for={modifier.label}>{modifier.label}</label
      >
      {#if modifier.checked}
        <div class="flex space-x-2">
          <Text title="Cost" grow bind:text={modifier.cost} />
          <Text title="Unit" bind:text={modifier.unit} />
          <Text title="Modifier" bind:text={modifier.modifier} />
        </div>
      {/if}
    </div>
  {/each}
</fieldset>
