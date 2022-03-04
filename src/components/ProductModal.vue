<template>
  <div
    class="modal fade"
    id="productModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>{{ product.title }}</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
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
              <div>
                <div class="input-group">
                  <!-- 11. 先挷定數量 v-model="qty"，再 @click="addCart" 要在元件內觸發的
                      min="1" 最小值只能是1 -->
                  <!-- <input type="number" class="form-control" min="1"
                      v-model="qty"> -->
                  <select id="" class="form-select" v-model="qty">
                    <option :value="num" v-for="num in 5" :key="`${num}-${id}`">
                      {{ num }}
                    </option>
                  </select>
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="$emit('add-cart', product.id, qty)"
                  >
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
            <!-- col-sm-6 end -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "bootstrap/js/dist/modal";

export default {
  props: ["id"],
  // props: {
  //   id: String,
  // },
  data() {
    return {
      modal: {}, // 2. 定義一個 modal 的資料變數
      product: {}, // 4. 存入單一筆遠端資料
      qty: 1, // 11. modal中加入購物車的數量
    };
  },
  // 4. 利用 watch 監控 props: ['id']，當 id 觸發時 getProduct() 取得遠端資料
  // 每次打開 modal 就要搓伺服器一次，偏向用戶行為
  watch: {
    id() {
      //console.log(this.id);
      this.product = {};
      this.getProduct();
    },
  },
  // 2. 新增 methods 將 openModal 包出去
  methods: {
    // 4. 在元件內取得遠端資料
    getProduct() {
      this.$http
        .get(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${this.id}`
        )
        .then((res) => {
          console.log(res);
          this.product = res.data.product;
        });
    },
    openModal() {
      this.productModal.show();
    },
    // 12. 內層元件也要新增 closeModal()
    closeModal() {
      this.productModal.hide();
    },
  },

  // 12. 內層傳外層
  // addCart() {
  //   this.$emit("add-cart", this.product.id, this.qty);
  // },

  // 初始化
  mounted() {
    // 1. ref="modal"
    this.productModal = new Modal(this.$refs.modal, {
      keyboard: false,
      backdrop: "static",
    });
  },
};
</script>
