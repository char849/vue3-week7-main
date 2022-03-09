<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">漢文帝模型館</router-link>
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
            <router-link class="nav-link" to="/">首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/products"
              >前台產品列表</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cart">前台購物車</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">登入產品後台</router-link>
          </li>
          <li class="nav-item">
            <router-link
              v-if="status === true"
              class="nav-link"
              to="/admin/products"
              >產品後台</router-link
            >
          </li>
        </ul>
      </div>
      <router-link type="button" class="btn btn-primary" to="/cart">
        購物車
        <span class="badge rounded-pill bg-danger">{{
          cartData?.carts?.length
        }}</span>
      </router-link>
    </div>
  </nav>
</template>

<script>
import emitter from "@/libs/emitter";

export default {
  data() {
    return {
      cartData: {
        carts: [], // 14. 加入第二層 carts: [] html的清空購物車那邊就可以寫入它的結構了
      },
      //status: false,
    };
  },
  methods: {
    // 5. 取得購物車內容
    getCart() {
      this.$http
        .get(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          console.log("cart:", res);
          this.cartData = res.data.data;
        });
    },
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
      .then(() => {
        this.status = true;
        this.$router.push("/admin/products");
      })
      .catch(() => {
        this.status = false;
        this.$router.push("/products");
      });
  },
  //初使化
  mounted() {
    this.getCart();
    //當emitter被觸發時，會再次取得購物車品項
    emitter.on("get-cart", () => {
      this.getCart();
    });
  },
};
</script>
