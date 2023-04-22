<script>
  import Radio from "./Radio.svelte";
    import { todos } from "./store";
    /**
   * @type {any}
   */
   let radioValue;
	
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
    function addOpt(){
      todos.update((old)=>{
        old.push({
          title:radioValue,
          done:false
        })
        return old
      })
    }
    const options = [{
		value: 'green',
		label: 'Bulbasaur',
	}, {
		value: 'red',
		label: 'Charmander',
	}, {
		value: 'blue',
		label: 'Squirtle',
	}]
</script>
<input type="text" bind:value={newTodo}>
<Radio {options} fontSize={16} legend='Select a starter Pokemon' bind:userSelected={radioValue}/>
<button on:click={addto} >add task in todo list</button>
<p>
{radioValue} is selected
</p>
<button on:click={addOpt}>add pokemon options in todolist </button>