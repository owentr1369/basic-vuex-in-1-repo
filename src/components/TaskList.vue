<template>
  <div>
    <h1>Task list</h1>
    <div v-for="(task, index) in tasks" :key="index">
      <input
        :id="index"
        type="checkbox"
        :checked="task.done"
        v-model="task.done"
      />
      <label :for="index" :class="task.done ? 'done' : ''">{{
        task.name
      }}</label>
    </div>
    <h1>{{ $store.state.name }}</h1>
  </div>
</template>

<script>
export default {
  props: ["tasks"],
};
</script>

<style>
</style>