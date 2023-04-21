<script>
  import TodoComponent from "./TodoComponent.svelte";
    /**
   * @type {any[]}
   */
     export let todoList = []
</script>
{#each todoList as todo, pos}
<TodoComponent {todo} {pos}/>
{/each}