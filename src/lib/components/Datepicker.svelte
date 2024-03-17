<script lang="ts">
  import Icon from "@iconify/svelte";

  let value = iso(new Date());
  let date = iso(new Date());
  console.log(date, value);
  let days = "S|M|T|W|T|F|S".split("|");
  let months = "Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec".split("|");
  let start = 0; // first day of the week (0 = Sunday, 1 = Monday)
  let offset = 0; // offset in months from currently selected date

  export let selectedDates = [];

  // $: acceptDate(value);

  $: viewDate = viewDateFrom(date, offset);

  $: month = months[viewDate.getMonth()];
  $: year = viewDate.getFullYear();
  $: weeks = weeksFrom(viewDate, date, start);

  function acceptDate(value) {
    const newDate = new Date(value);

    if (!isNaN(newDate)) {
      date = iso(newDate);
    }
  }

  function go(direction) {
    offset = offset + direction;
  }

  function selectDate(newValue) {
    date = newValue;
    value = newValue;
    offset = 0;

    // add date if not included. Remove date if already added
    if (selectedDates.includes(date)) {
      selectedDates = selectedDates.filter((x) => {
        return x !== date;
      });
      return;
    }
    selectedDates = [...selectedDates, date];
  }

  function iso(date) {
    const pad = (n) => (n < 10 ? "0" + n : n);
    return (
      date.getFullYear() +
      "-" +
      pad(date.getMonth() + 1) +
      "-" +
      pad(date.getDate())
    );
  }

  function viewDateFrom(date, offset) {
    let viewDate = new Date(date);
    viewDate.setMonth(viewDate.getMonth() + offset);
    return viewDate;
  }

  function weeksFrom(viewDate, date, start) {
    let first = new Date(viewDate.getTime());
    first.setDate(1);
    first.setDate(first.getDate() + ((start - first.getDay() - 7) % 7));

    let last = new Date(viewDate.getTime());
    last.setDate(
      new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0).getDate()
    );
    last.setDate(last.getDate() + ((start - last.getDay() + 6) % 7));

    let d = new Date(first.getTime()),
      M = viewDate.getMonth(),
      Y = viewDate.getFullYear(),
      week = [],
      weeks = [week];

    while (d.getTime() <= last.getTime()) {
      let dd = d.getDate(),
        mm = d.getMonth(),
        yy = d.getFullYear(),
        value = iso(d);

      week.push({
        date: dd,
        value,
        class: [
          mm == M ? "" : (mm > M ? yy >= Y : yy > Y) ? "future" : "past",
        ].join(" "),
      });

      d = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);

      if (d.getDay() === start) {
        week = [];
        weeks.push(week);
      }
    }

    return weeks;
  }
</script>

<div class="grid grid-cols-7 gap-1 select-none">
  <div
    class="cursor-pointer flex justify-center p-2 py-4 hover:bg-gray-200"
    on:click={() => go(-1)}
  >
    <Icon icon="teenyicons:left-solid" />
  </div>
  <div
    class="col-span-5 font-semibold flex justify-center items-center tracking-wider text-lg"
  >
    {month}
    {year}
  </div>
  <div
    class="cursor-pointer flex justify-center p-2 py-4 hover:bg-gray-200"
    on:click={() => go(+1)}
  >
    <Icon icon="teenyicons:right-solid" />
  </div>
  {#each days as day}
    <div class="font-semibold text-center">{day}</div>
  {/each}
  {#each weeks as week}
    {#each week as day}
      <div
        class="{day.class} text-center p-2 cursor-pointer hover:bg-gray-300 rounded-sm {selectedDates.includes(
          day.value
        )
          ? 'bg-red-800 hover:bg-red-900 text-gray-100 rounded-lg'
          : ''}"
        on:click={() => selectDate(day.value)}
      >
        {day.date}
      </div>
    {/each}
  {/each}
</div>

<style>
  .past,
  .future {
    opacity: 0.5;
  }
</style>
