<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">回到前台</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/products"
              >後台產品列表</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/orders"
              >後台訂單列表</router-link
            >
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" @click.prevent="signout">登出</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-link v-if="checkSuccess"></router-link>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      checkSuccess: false,
    };
  },
  methods: {
    checkLogin() {
      // 取出 Token
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      if (token) {
        this.$http.defaults.headers.common.Authorization = token;

        const url = `${process.env.VUE_APP_API}api/user/check`;
        this.$http
          // 帶入token
          .post(url, { api_token: this.token })
          .then(() => {
            this.checkSuccess = true;
            //alert("登入成功");
          })
          .catch((err) => {
            alert(err.data.message);
            this.$router.push("/login");
          });
      } else {
        alert("您尚未登入");
        this.$router.push("/login");
      }
    },
    signout() {
      document.cookie = "hexToken=;expires=;";
      //alert("token 已清除");
      this.$router.push("/login");
    },
  },
  //初始
  mounted() {
    this.checkLogin();
  },
};
</script>
