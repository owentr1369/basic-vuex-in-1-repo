<template>
  <div id="app" class="container mt-5">
    <div class="col-6 mx-auto">
      <add-task @onAddTask="addTask" />
      <task-list :tasks="tasks" />
    </div>
  </div>
</template>

<script>
import AddTask from "./components/AddTask.vue";
import TaskList from "./components/TaskList.vue";
export default {
  name: "App",
  components: { AddTask, TaskList },
  data() {
    return {
      tasks: [{ name: "nau com", done: false }],
      newTask: { name: "", done: false },
    };
  },
  methods: {
    addTask: function (name) {
      this.tasks.push({ name: name, done: false });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
