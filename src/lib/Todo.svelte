<script>
  import TodoCounter from "./TodoCounter.svelte";
  import TodoList from "./TodoList.svelte";
import { todos } from "./store";

</script>
<main>
    <h3>Todo list app</h3>
    <TodoCounter/>
    <TodoList todoList={$todos}/>
</main>

<style>
    
</style>