<template>
  <DashboardBar></DashboardBar>
  <ToastMessages></ToastMessages>
  <router-view v-if="status" />
</template>

<style>
h2 {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
  text-align: center;
}
</style>

<script>
import DashboardBar from "@/components/DashboardBar.vue";
import ToastMessages from "@/components/ToastMessages.vue";
import emitter from "@/libs/emitter";

export default {
  components: {
    DashboardBar,
    ToastMessages,
  },
  data() {
    return {
      status: false,
    };
  },
  provide() {
    return {
      emitter,
    };
  },
  created() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    this.$http.defaults.headers.common.Authorization = `${token}`;
    const api = `${process.env.VUE_APP_API}api/user/check`;
    this.$http
      .post(api)
      .then((res) => {
        this.$httpMessageState(res, "登入");
        this.status = true;
      })
      .catch((err) => {
        this.$router.push("/");
        this.$httpMessageState(err.response, "錯誤訊息");
      });
  },
};
</script>
