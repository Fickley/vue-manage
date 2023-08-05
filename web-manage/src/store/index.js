import { createStore } from 'vuex';
import login from "@/pages/login/modules/index";
const store = createStore({
  modules: {
    login,
  },
  strict: true,
})

export default store;