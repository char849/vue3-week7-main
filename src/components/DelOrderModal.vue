<template>
  <div
    class="modal fade"
    id="delOrderModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title">
            <span>刪除 {{ item.title }}</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger">{{ item.title }}</strong>
          (刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-danger"
            @click="$emit('del-order-item')"
          >
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "bootstrap/js/dist/modal";

export default {
  props: ["item"],
  data() {
    return {
      modal: {},
    };
  },
  methods: {
    openModal() {
      this.delOrderModal.show();
    },
    hideModal() {
      this.delOrderModal.hide();
    },
  },
  emits: ["del-order-item"],
  mounted() {
    this.delOrderModal = new Modal(this.$refs.modal, {
      keyboard: false,
      backdrop: "static",
    });
  },
};
</script>
