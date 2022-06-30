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
    <h1>{{ getName }}</h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["tasks"],
  computed: {
    ...mapGetters(["getName"]),
  },
};
</script>

<style>
</style>