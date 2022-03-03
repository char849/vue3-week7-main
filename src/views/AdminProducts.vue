<template>
  <div class="container">
    <h2>後台產品管理列表</h2>
    <div class="text-end mt-4">
      <button
        class="btn btn-primary"
        type="button"
        @click="openModal('isNew', 'item')"
      >
        建立新的產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-end">
            {{ item.origin_price }}
          </td>
          <td class="text-end">
            {{ item.price }}
          </td>
          <td>
            <button
              type="button"
              class="btn btn-sm"
              :class="{
                'btn-success': item.is_enabled,
                'btn-light': !item.is_enabled,
              }"
              @click="item.is_enabled = !item.is_enabled"
            >
              {{ item.is_enabled ? "啟用" : "未啟用" }}
            </button>
          </td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="openModal('edit', item)"
              >
                編輯
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="openModal('delete', item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 前內: pages, 後外: pagination,用 v-bind -->
    <!-- 前內: get-product, 後外: getProducts, 將內層的事件送到外層用 v-on -->
    <!-- 1.分頁元件 -->
    <Pagination :pages="pagination" @get-product="getProducts"></Pagination>
    <!-- 分頁元件 -->
  </div>
</template>

<script>
import Pagination from "@/components/Pagination.vue";

export default {
  data() {
    return {
      products: [],
      isNew: false,
      tempProduct: {
        imagesUrl: [],
      },
      // 1.傳入分頁資訊
      pagination: {},
    };
  },

  // 1.區域註冊
  components: {
    Pagination,
  },
  methods: {
    //取得產品列表
    getProducts(page = 1) {
      //陣列包物件
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`;
      //物件包物件
      //const url = `${api}/api/${path}/admin/products/all`;
      this.$http
        .get(api)
        .then((res) => {
          this.products = res.data.products;
          this.pagination = res.data.pagination;
        })
        .catch((err) => {
          alert(err.data.message);
        });
      //物件跑迴圈二種方式 - 實戰常用
      // Object.value(this.products).forEach((item) => {
      //   console.log(item);
      // })

      // Object.keys(this.products).forEach((key) => {
      //   console.log(this.products[key], key);
      // })
    },
  },
};
</script>
