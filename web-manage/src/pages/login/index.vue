<template>
  <div class="warp">
    <div class="form_card">
      <span>请登陆</span>
      <el-form
        ref="formRef"
        label-position="top"
        size="large"
        :model="loginData"
        class="formBox"
      >
        <el-form-item label="用户名" prop="userName">
          <el-input v-model="loginData.userName" />
        </el-form-item>
        <el-form-item label="密码" prop="passval">
          <el-input v-model="loginData.passval" type="password" />
        </el-form-item>
      </el-form>
      <el-button 
        id="buttonRef" 
        class="submitBtn" 
        color="#1677ff"
        @click="submitForm(formRef)"
      >
        登陆
      </el-button>
    </div>
  </div>
</template>

<script lang="js" setup>
  import { reactive, onMounted, ref } from 'vue';
  import { useStore } from "vuex";
  import md5 from "js-md5";

  const formRef = ref();
  const store = useStore();
  const state = store.state?.login || {};
  const loginData = reactive({
    userName: '',
    passval: '',
  })

   onMounted(() => {
    console.log('211233456789=>', state.loading);
   })

   const submitForm = (formEl) => {
      if (!formEl) return
      formEl.validate((valid) => {
        if (state.loading) {
          return;
        }
        if (valid && loginData.userName && loginData.passval) {
          const params =  {
            password: md5(loginData.passval),
            user_name: loginData.userName,
          }
          store.dispatch('login/checkLogin', params);
        } else {
          ElMessage.warning("请输入登陆用户!")
        }
      })
   }

</script>

<style lang="scss" scoped>
  @import url('./index.scss');
</style>