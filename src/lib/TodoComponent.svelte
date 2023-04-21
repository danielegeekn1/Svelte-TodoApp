<script>
  import { todos } from "./store";

    /**
   * @type {{ title: any; }}
   */
     export let todo
     /**
   * @type {any}
   */
      export let pos
      function deleteTask(){
       todos.update((old)=>{
        old.splice(pos, 1)
        return old
       })
      }
</script>
<div>
    {pos}
    {todo.title}
    <button on:click={deleteTask}>X</button> 
</div>