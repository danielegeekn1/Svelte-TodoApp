<script>
    import { todos } from "./store";
    /**
   * @type {any}
   */
    let newTodo
    function addto(){
        todos.update((old)=>{
            old.push({
                title:newTodo,
                done:false
            })
            return old
        })
    }
</script>
<input type="text" bind:value={newTodo}>
<button on:click={addto} >add task in todo list</button>