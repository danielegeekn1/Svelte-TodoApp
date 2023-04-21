<script>
// @ts-nocheck

    /**
   * @type {{ value: any; }[]}
   */
     export let options
    /**
   * @type {any}
   */
     export let legend
    export let fontSize = 16;
	export let flexDirection = 'column'
    export let userSelected = options[0].value;
    const uniqueID = Math.floor(Math.random() * 100)
    const slugify = (str = "") =>
    str.toLowerCase().replace(/ /g, "-").replace(/\./g, "");
</script>
<div role="radiogroup" id={`group-${uniqueID}`} 
style="font-size:{fontSize}px; flex-direction:{flexDirection}" >
 <div class="legend" 
    id={`label-${uniqueID}`}>{legend}
</div>
{#each options as { value, label }}
<input
  class="sr-only"
  type="radio"
  id={slugify(label)}
  bind:group={userSelected}
  value={value} />
<label for={slugify(label)}> {label} </label>
{/each}
</div>