<template>
  <div class="container">
    <Loading :active="isLoading"></Loading>
    <h2>購物車</h2>
    <!-- 購物車列表 -->
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="text-end">
          <!-- 14. js data 那邊要定義到第二層 carts: [] 才能使用，如果寫成 cartData.carts?.( ?.可選串連) length [es6 的寫法] 就不用定義第二層 carts -->
          <button
            class="btn btn-danger"
            type="button"
            @click="delAllCarts"
            :disabled="cartData.carts.length === 0"
          >
            清空購物車
          </button>
        </div>
        <table class="table align-middle">
          <thead>
            <tr>
              <th></th>
              <th>品名</th>
              <th style="width: 130px">數量/單位</th>
              <th></th>
              <th>單價</th>
            </tr>
          </thead>
          <tbody>
            <!-- 7. 購物車列表，判斷購物車資料有沒有存在 -->
            <template v-if="cartData.carts">
              <tr v-for="item in cartData.carts" :key="item.id">
                <td>
                  <!-- 8. 刪除的方法帶入id,removeCartItem(item.id) -->
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm"
                    @click="removeCartItem(item.id)"
                    :disabled="isLoadingItem === item.id"
                  >
                    <font-awesome-icon
                      icon="spinner"
                      pulse
                      v-if="isLoadingItem === item.id"
                    />
                    x
                  </button>
                </td>

                <td>
                  <!-- 7. 資料格式包在下一層 product 中，所以要再加一層 product  -->
                  {{ item.product.title }}
                  <!-- <div class="text-success">已套用優惠券</div> -->
                </td>
                <td>
                  <div class="input-group input-group-sm">
                    <div class="input-group mb-3">
                      <!-- <input min="1" type="number" class="form-control" /> -->
                      <!-- 9. 用select的型式規定使用者輸入的資料格式，數量20個，
                           當前值 item.qty 跟 num 1-20的值一樣的話就選那個值
                           :key="`${num}-${item.id}`"這種寫法可以確保是唯一值 -->
                      <select
                        class="form-select"
                        v-model="item.qty"
                        @change="updateCartItem(item)"
                        :disabled="isLoadingItem === item.id"
                      >
                        <option
                          :value="num"
                          v-for="num in 10"
                          :key="`${num}-${item.id}`"
                        >
                          {{ num }}
                        </option>
                      </select>
                      <span class="input-group-text" id="basic-addon2">{{
                        item.product.unit
                      }}</span>
                    </div>
                  </div>
                </td>
                <td></td>
                <td class="text-end">
                  <!-- <small class="text-success">折扣價：</small> -->
                  {{ item.total }}
                </td>
              </tr>
            </template>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="4" class="text-end">總計</td>
              <td class="text-end">{{ cartData.total }}</td>
            </tr>
            <!-- <tr>
                <td colspan="3" class="text-end text-success">折扣價</td>
                <td class="text-end text-success">{{ }}</td>
              </tr> -->
          </tfoot>
        </table>
      </div>
    </div>
    <div class="my-5 row justify-content-center">
      <Form
        ref="form"
        class="col-md-6"
        v-slot="{ errors }"
        @submit="createOrder"
      >
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <Field
            id="email"
            name="email"
            type="email"
            class="form-control"
            :class="{ 'is-invalid': errors['email'] }"
            placeholder="請輸入 Email"
            rules="email|required"
            v-model="form.user.email"
          ></Field>
          <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="name" class="form-label">收件人姓名</label>
          <Field
            id="name"
            name="姓名"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['姓名'] }"
            placeholder="請輸入姓名"
            rules="required"
            v-model="form.user.name"
          ></Field>
          <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="tel" class="form-label">收件人電話</label>
          <Field
            id="tel"
            name="電話"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['電話'] }"
            placeholder="請輸入電話"
            :rules="isPhone"
            v-model="form.user.tel"
          ></Field>
          <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="address" class="form-label">收件人地址</label>
          <Field
            id="address"
            name="地址"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['地址'] }"
            placeholder="請輸入地址"
            rules="required"
            v-model="form.user.address"
          ></Field>
          <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">留言</label>
          <textarea
            name=""
            id="message"
            class="form-control"
            cols="30"
            rows="10"
            v-model="form.message"
          ></textarea>
        </div>
        <div class="text-end">
          <button
            type="submit"
            class="btn btn-danger"
            :disabled="
              Object.keys(errors).length > 0 || cartData.carts.length === 0
            "
          >
            送出訂單
          </button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
import emitter from "@/libs/emitter";
export default {
  data() {
    return {
      cartData: {
        carts: [], // 14. 加入第二層 carts: [] html的清空購物車那邊就可以寫入它的結構了
      },
      // 13. 表單驗證格式
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: "",
        },
        message: "",
      },
      products: [],
      isLoadingItem: "", // 6. 局部讀取效果的變數
      isLoading: false,
    };
  },
  methods: {
    isPhone(value) {
      // cell: (^09|\+?8869)\d{2}(-?\d{3}-?\d{3})$
      // phone: (((\+?(886)\d{1,2})|(^0\d{1,2}))-?)(\d{3,4}-?)(\d{4}-?)$
      const phoneNum = /(^09|\+?8869)\d{2}(-?\d{3}-?\d{3})$/;
      return phoneNum.test(value) ? true : "請輸入正確的手機號碼";
    },
    getProducts() {
      this.$http
        .get(
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products`
        )
        .then((res) => {
          console.log(res);
          //把產品列表存起來，準備呈現在畫面
          this.products = res.data.products;
        });
    },
    // 5. 取得購物車內容
    getCart() {
      this.isLoading = true;
      this.$http
        .get(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          //console.log("cart:", res);
          this.cartData = res.data.data;
          this.isLoading = false;
          // // get-cart
          // emitter.emit("get-cart");
        });
    },
    // 8. 刪除品項
    removeCartItem(id) {
      this.isLoadingItem = id;
      this.$http
        .delete(
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
        ) // 5. 將資料格式帶入
        .then((res) => {
          console.log(res);
          // 8. 刪除購物車後，再重新取得購物車內容
          this.getCart();
          // 8. 讀取完後，清空id
          this.isLoadingItem = "";
          // get-cart
          emitter.emit("get-cart");
        });
    },
    updateCartItem(item) {
      //10. 更新購物車的資料格式
      const data = {
        product_id: item.product_id,
        qty: item.qty,
      };
      this.isLoadingItem = item.id; // 10. 帶入讀取的id
      this.$http
        .put(
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`,
          { data }
        ) // 10. 將資料格式帶入
        .then((res) => {
          console.log(res);
          // 10. 更新購物車後，再重新取得購物車內容
          this.getCart();
          // 10. 讀取完後，清空id
          this.isLoadingItem = "";
        });
    },
    // 14. 刪除購物車內容
    delAllCarts() {
      this.isLoading = true;
      this.$http
        .delete(
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`
        )
        .then((res) => {
          console.log(res);
          this.isLoading = false;
          this.getCart();
          // get-cart
          emitter.emit("get-cart");
        });
    },
    // 15. 送出訂單
    createOrder() {
      this.isLoading = true;
      const order = this.form;
      this.$http
        .post(
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`,
          { data: order }
        )
        .then((res) => {
          this.isLoading = false;
          alert(res.data.message);
          // 15. 當表單送出時，清空資料，resetForm()是 VeeValidate 提供的函式
          this.$refs.form.resetForm();
          this.getCart();
        });
    },
  },
  //初使化
  mounted() {
    // 取得購物車列表
    this.getCart();
  },
};
</script>
