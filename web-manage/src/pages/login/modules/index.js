import md5 from "js-md5";
import router from "@/routes";
import { checkLogin } from "../services";

export default {
  namespaced: true,
  state: () => ({
    loading: false,
    userInfo: {},
  }),
  mutations: { 
    checkLogin(state, data) {
      state.userInfo = data;
      state.loading = false;
      localStorage.setItem('token', `${md5(JSON.stringify(data))}`);
      router.push('/');
      ElMessage.success('登陆成功!');
    },

    updateLoading(state, data) {
      state.loading = data
    }
  },
  actions: { 
    async checkLogin (context, params) {
      context.commit('updateLoading', true);
      const response = await checkLogin(params);
      let data = response?.data || [];
      data = data?.find((item) => {
        return item.user_name === params.user_name && item.password === params.password
      });
      if (response.code != 200) {
        ElMessage.error(response.message);
        return;
      }
      if (!data) {
        context.commit('updateLoading', false);
        ElMessage.warning('账号密码错误!');
        return;
      }
      context.commit('checkLogin', data || {});
    }
  },
  getters: {

  }
}