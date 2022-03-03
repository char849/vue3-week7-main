import { createApp } from "vue";

import axios from "axios";
import VueAxios from "vue-axios";
// 匯入 fontawesome 套件
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
// 匯入 vee-validate 主套件
import { Form, Field, ErrorMessage, defineRule, configure } from "vee-validate";
// 匯入 vee-validate 相關規則
import AllRules from "@vee-validate/rules";
// 匯入多國語系的功能
import { localize, setLocale } from "@vee-validate/i18n";
// 匯入繁體中文語系檔案
import zhTW from "@vee-validate/i18n/dist/locale/zh_TW.json";

// 定義驗證規則
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

// 設定 vee-validate 全域規則
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});
// 設定預設語系
setLocale("zh_TW");

library.add(faSpinner);

import App from "./App.vue";
import router from "./router";

createApp(App)
  .use(router)
  .use(VueAxios, axios)
  .component("Loading", Loading)
  // 註冊 vee-validate 三個全域元件
  .component("Form", Form)
  .component("Field", Field)
  .component("ErrorMessage", ErrorMessage)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
