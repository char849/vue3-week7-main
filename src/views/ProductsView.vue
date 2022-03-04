<template>
  <div class="container">
    <Loading :active="isLoading"></Loading>
    <h2>前台產品列表</h2>
    <div class="container">
      <div class="row row-cols-1 row-cols-lg-5 g-3">
        <div class="col" v-for="product in products" :key="product.id">
          <div class="card h-100">
            <img :src="product.imageUrl" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{ product.title }}</h5>
              <p class="card-text">
                {{ product.description }}
              </p>
              <div class="h5" v-if="product.price === product.origin_price">
                {{ product.price }} 元
              </div>
              <div v-else>
                <del class="h6">原價 {{ product.origin_price }} 元</del>
                <p class="h5">現在只要 {{ product.price }} 元</p>
              </div>
            </div>
            <div class="card-footer bg-white">
              <div class="d-grid gap-2 text-center d-md-block">
                <button
                  class="btn my-2 me-2 btn-outline-primary btn-sm"
                  type="button"
                  :disabled="isLoadingItem === product.id"
                  @click="openProductModal(product.id)"
                >
                  <font-awesome-icon
                    icon="spinner"
                    pulse
                    v-if="isLoadingItem === product.id"
                  />
                  查看更多
                </button>
                <button
                  :disabled="isLoadingItem === product.id"
                  @click="addCart(product.id)"
                  class="btn btn-primary btn-sm"
                  type="button"
                >
                  <!-- 6. 如果條件成立，就出現局部動畫效果 -->
                  <font-awesome-icon
                    icon="spinner"
                    pulse
                    v-if="isLoadingItem === product.id"
                  />
                  加到購物車
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 分頁元件 -->
      <Pagination :pages="pagination" @get-product="getProducts"></Pagination>
    </div>

    <!-- 1. 產品Modal $refs product-modal 元件掛在畫面上 -->
    <!-- 2. 加入 ref="productModal" 來操控外層元件 openProductModal -->
    <!-- 12. 前內 @add-cart 後外 addCart，將內層資料傳出來 -->
    <ProductModal
      :id="productId"
      ref="productModal"
      @add-cart="addCart"
    ></ProductModal>
    <!-- 產品Modal -->
  </div>
</template>

<script>
import emitter from "@/libs/emitter";
import ProductModal from "@/components/ProductModal.vue";
import Pagination from "@/components/Pagination.vue";

export default {
  data() {
    return {
      // 購物車列表
      cartData: {
        carts: [], // 14. 加入第二層 carts: [] html的清空購物車那邊就可以寫入它的結構了
      },
      // 產品列表
      products: [],
      productId: "", // 3. 存放傳送外層產品 id 到內層的modal
      isLoadingItem: "", // 6. 局部讀取效果的變數
      isLoading: false,
      product: {}, // 4. 存入單一筆遠端資料
      modal: {
        ProductModal: "",
      },
      pagination: {},
    };
  },
  components: {
    ProductModal,
    Pagination,
  },
  methods: {
    // 5. 加入購物車內容，帶入二個參數 id、數量，再加入參數預設值 qty = 1
    addCart(id, qty = 1) {
      // 5. 加入購物車的資料格式
      const data = {
        product_id: id,
        qty,
      };
      this.isLoadingItem = id; // 6. 帶入讀取的id
      this.$http
        .post(
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`,
          { data }
        ) // 5. 將資料格式帶入
        .then((res) => {
          console.log(res);
          // 5. 加入購物車後，再重新取得購物車內容
          //this.getCart();
          // 12. 從內層 modal 新增數量後關閉
          this.$refs.productModal.closeModal();
          // 6. 讀取完後，清空id
          this.isLoadingItem = "";
          // get-cart
          emitter.emit("get-cart");
        });
    },
    getProducts(page = 1) {
      // 參數預設值
      this.isLoading = true;
      this.$http
        .get(
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${page}` //query 用? 去帶
        )
        .then((res) => {
          console.log(res);
          //把產品列表存起來，準備呈現在畫面
          this.products = res.data.products;
          this.isLoading = false;
          this.pagination = res.data.pagination;
        });
    },
    // 2. 運用 $refs 直接操作內層的 openModal
    openProductModal(id) {
      // 3. 傳入"內層"參數為產品的 id
      this.productId = id;
      // 2. 運用 $refs 取得 html 中 ref="productModal" 的元件
      // 來操控 內層 openModal() 的方法
      this.$refs.productModal.openModal();
    },
  },
  //初使化
  mounted() {
    //把getProducts產品列表運作起來
    this.getProducts();
  },
};
</script>
