<script lang="ts">
  import { Button, Select, Modifier, Datepicker } from "$lib/index";
  import type { Site } from "$lib/types/index";
  import { test } from "$lib/scripts/test";

  let dates;
  let selectedWebsite = "availity";
  let showBtn = false;
  let selectedDiagnosis;
  let bScript = "";

  const websites: Array<Site> = [
    {
      name: "Availity",
      value: "availity",
      url: "",
    },
    {
      name: "Officeally",
      value: "officeally",
      url: "",
    },
    {
      name: "MyVaCCN",
      value: "myvaccn",
      url: "",
    },
    {
      name: "United Health Care",
      value: "united",
      url: "",
    },
  ];

  const diagnosis = [
    {
      name: "1",
      value: 1,
    },
    {
      name: "2",
      value: 2,
    },
    {
      name: "3",
      value: 3,
    },
    {
      name: "4",
      value: 4,
    },
    {
      name: "5",
      value: 5,
    },
  ];

  const modifiers = [
    {
      label: 99203,
      checked: false,
      modifier: "25",
      cost: "85",
      unit: "1",
    },
    {
      label: 99212,
      checked: false,
      modifier: "25",
      cost: "55",
      unit: "1",
    },
    {
      label: 99213,
      checked: false,
      modifier: "25",
      cost: "65",
      unit: "1",
    },
    {
      label: 97813,
      checked: false,
      modifier: "",
      cost: "75",
      unit: "1",
    },
    {
      label: 97814,
      checked: false,
      modifier: "",
      cost: "120",
      unit: "2",
    },
    {
      label: 97810,
      checked: false,
      modifier: "",
      cost: "65",
      unit: "1",
    },
    {
      label: 97811,
      checked: false,
      modifier: "",
      cost: "110",
      unit: "2",
    },
    {
      label: 97816,
      checked: false,
      modifier: "",
      cost: "100",
      unit: "2",
    },
    {
      label: 97026,
      checked: false,
      modifier: "GP",
      cost: "10",
      unit: "1",
    },
    {
      label: 97139,
      checked: false,
      modifier: "GP",
      cost: "40",
      unit: "1",
    },
    {
      label: 97140,
      checked: false,
      modifier: "GP",
      cost: "60",
      unit: "2",
    },
  ];

  function generateBookmark() {
    let initScriptUrl: string;
    switch (selectedWebsite) {
      case "availity":
        initScriptUrl =
          "https://kangruixiang.github.io/NancyInsurance/js/availity.js";
        break;
      case "officeally":
        initScriptUrl =
          "https://kangruixiang.github.io/NancyInsurance/js/officeally.js";
        break;
      case "myvaccn":
        initScriptUrl =
          "https://kangruixiang.github.io/NancyInsurance/js/myvaccn.js";
        break;
      default:
        initScriptUrl =
          "https://kangruixiang.github.io/NancyInsurance/js/united.js";
        break;
    }

    const configString = JSON.stringify({
      website: selectedWebsite,
      dates: dates,
      diagnosisCode: selectedDiagnosis,
      cpt: modifiers,
    });

    // bScript = encodeURIComponent(
    //   `var BOOKMARK = ${configString}; var s = document.createElement("script"); s.type = "text/javascript"; s.src="${initScriptUrl}"; document.body.appendChild(s);`
    // );

    bScript = `const BOOKMARK = ${configString}; const s = document.createElement("script"); s.type = "text/javascript"; s.src="http://localhost:5173/availity2.js"; document.body.appendChild(s);void(0);`;

    showBtn = true;
  }
</script>

<div class="flex flex-col gap-4 bg-white rounded-lg p-8 py-12 shadow-lg">
  <h1>Welcome</h1>
  <Select bind:selected={selectedWebsite} options={websites}>
    <svelte:fragment slot="title">Select Website</svelte:fragment></Select
  >

  <h2>Select Dates</h2>

  <div class="flex">
    <div class="w-[70%] mx-auto">
      <Datepicker bind:selectedDates={dates} />
    </div>

    {#if dates}
      <div class="w-[30%]">
        <h2 class="text-center">Dates</h2>
        <div class="grid grid-cols-2 auto-rows-min">
          {#each dates as date}
            <div
              class="p-2 flex gap-2 cursor-pointer hover:bg-gray-300 items-center group"
              on:click={() => {
                dates = dates.filter((x) => {
                  console.log(date);
                  return x !== date;
                });
              }}
            >
              {date}
            </div>
          {/each}
        </div>
      </div>
    {/if}
  </div>

  <Select bind:selected={selectedDiagnosis} options={diagnosis}>
    <svelte:fragment slot="title">Select Diagnosis Codes</svelte:fragment>
  </Select>

  <Modifier {modifiers} />

  <Button on:click={generateBookmark}>Generate Link</Button>
  {#if showBtn}
    <a
      class="p-2 border border-dashed bg-gray-200 border-black"
      href="javascript: {bScript}">Bookmark Link</a
    >
  {/if}
</div>
