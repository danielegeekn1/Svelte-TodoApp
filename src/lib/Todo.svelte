<script>
  import AddTodo from "./AddTodo.svelte";
  import TodoCounter from "./TodoCounter.svelte";
  import TodoList from "./TodoList.svelte";
import { todos } from "./store";

</script>
<main>
    <h3>Todo list app</h3>
    <TodoCounter/>
    <AddTodo/>
    <TodoList todoList={$todos}/>
</main>

<style>
    
</style>