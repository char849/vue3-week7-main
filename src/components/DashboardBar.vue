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
            <a href="#" class="nav-link" @click.prevent="logout">登出</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      const api = `${process.env.VUE_APP_API}logout`;
      this.$http
        .post(api)
        .then((res) => {
          this.$httpMessageState(res, "登出");
          if (res.data.success) {
            this.$router.push("/login");
          }
        })
        .catch((err) => {
          this.$httpMessageState(err.response, "錯誤訊息");
        });
    },
  },
};
</script>
