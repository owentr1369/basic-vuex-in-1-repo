<template>
  <div>
    <h1>Task list</h1>
    <h3 v-for="(task, index) in tasks" :key="index">{{ task.name }}</h3>
  </div>
</template>

<script>
export default {
  props: ["tasks"],
};
</script>

<style>
</style>