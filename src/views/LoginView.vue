<template>
  <div class="container">
    <Loading :active="isLoading" :z-index="1060"></Loading>
    <ToastMessages></ToastMessages>
    <h2>後台登入頁面</h2>
    <div class="row">
      <div class="col-12">
        <form class="form-signin" @submit.prevent="signIn">
          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              v-model="user.username"
              id="floatingInput"
              placeholder="Password"
              required
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              v-model="user.password"
              id="floatingPassword"
              placeholder="Password"
              required
            />
            <label for="floatingPassword">Password</label>
          </div>
          <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">
            登入
          </button>
        </form>
      </div>
    </div>
    <p class="mt-5 mb-3 text-muted">
      &copy; 2022 - Charlotte Lee<br />
      vue 第七週主線任務
      <router-link class="nav-link" to="/">返回首頁</router-link>
    </p>
  </div>
  <!-- <button type="button" @click="login">登入</button> -->
</template>

<script>
import emitter from "@/libs/emitter";
import ToastMessages from "@/components/ToastMessages.vue";

export default {
  components: {
    ToastMessages,
  },
  data() {
    return {
      user: {},
      isLoading: false,
    };
  },
  provide() {
    return {
      emitter,
    };
  },
  // email 登入,寫入 cookie、轉址
  methods: {
    signIn() {
      const api = `${process.env.VUE_APP_API}admin/signin`;
      this.isLoading = true;
      this.$http
        .post(api, this.user)
        //成功的結果
        .then((res) => {
          //取出token，解構的寫法
          const { token, expired } = res.data;
          // 儲存登入的cookie token資訊
          // expires 設置有效時間 unix timestamp 時間戳
          document.cookie = `hexToken=${token};expires=${new Date(expired)};`;
          this.isLoading = false;
          //轉址的動作
          // $router(方法), $route(取得參數)
          // 轉址到後台使用 push() 方法
          // 陣列的概念 ['/','login','admin/products']
          this.$router.push("/admin/products");
        })
        //失敗結果
        .catch((err) => {
          //alert(err.data.message);
          this.isLoading = false;
          this.$httpMessageState(err.response, "登入");
        });
    },
  },
};
</script>
