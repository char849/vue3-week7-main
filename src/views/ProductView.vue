<template>
  <div class="container">
    <div class="row">
      <h2>單一產品頁面</h2>
      <div class="col-sm-6">
        <img class="img-fluid" :src="product.imageUrl" alt="" />
      </div>
      <div class="col-sm-6">
        <span class="badge bg-primary rounded-pill">{{
          product.category
        }}</span>
        <p>商品描述：{{ product.description }}</p>
        <p>商品內容：{{ product.content }}</p>
        <div class="h5">{{ product.origin_price }} 元</div>
        <del class="h6">原價 {{ product.origin_price }} 元</del>
        <div class="h5">現在只要 {{ product.price }} 元</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //將產品渲染到畫面上必需建立data()
  data() {
    return {
      //將產品存到 products 裡面
      product: {},
    };
  },
  methods: {
    //console.log(process.env.VUE_APP_API, process.env.VUE_APP_PATH);
    getProduct() {
      //console.log("route:", this.$route);
      const { id } = this.$route.params;
      this.$http
        .get(
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`
        )
        .then((res) => {
          //console.log(res.data.product);
          // 將遠端資料取回
          this.product = res.data.product;
        });
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>
