import { writable } from "svelte/store";
export const todos = writable([
  {
    title: "shopping",
    done: false,
  },
  {
    title: "web app",
    done: true,
  },
]);
