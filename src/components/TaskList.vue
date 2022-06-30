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
    <button @click="udpateProfile">Thay doi ten</button>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  props: ["tasks"],
  computed: {
    ...mapGetters(["getName"]),
  },
  methods: {
    ...mapMutations(["setName"]),
    // lấy setName từ mutaions của store về this
    ...mapActions(["udpateProfile"]),
  },
};
</script>

<style>
</style>