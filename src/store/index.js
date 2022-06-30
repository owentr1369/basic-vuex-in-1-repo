import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "Lap trinh",
  },
  getters: {
    getName(state) {
      return state.name;
    },
  },
  mutations: {
    setName(state, name) {
      state.name = name;
    },
  },
  actions: {
    udpateProfile(context) {
      //context là store ở trạng thái khởi điểm khi chạy hàm
      context.commit("setName", "Ronaldo Siuuuuuuu");
    },
  },
  modules: {},
});
