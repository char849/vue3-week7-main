(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9a409e0e"],{a434:function(t,e,c){"use strict";var o=c("23e7"),a=c("da84"),l=c("23cb"),n=c("5926"),i=c("07fa"),r=c("7b0b"),d=c("65f0"),s=c("8418"),u=c("1dde"),b=u("splice"),p=a.TypeError,h=Math.max,m=Math.min,O=9007199254740991,f="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!b},{splice:function(t,e){var c,o,a,u,b,j,g=r(this),v=i(g),P=l(t,v),y=arguments.length;if(0===y?c=o=0:1===y?(c=0,o=v-P):(c=y-2,o=m(h(n(e),0),v-P)),v+c-o>O)throw p(f);for(a=d(g,o),u=0;u<o;u++)b=P+u,b in g&&s(a,u,g[b]);if(a.length=o,c<o){for(u=P;u<v-o;u++)b=u+o,j=u+c,b in g?g[j]=g[b]:delete g[j];for(u=v;u>v-o+c;u--)delete g[u-1]}else if(c>o)for(u=v-o;u>P;u--)b=u+o-1,j=u+c-1,b in g?g[j]=g[b]:delete g[j];for(u=0;u<c;u++)g[u+P]=arguments[u+2];return g.length=v-o+c,a}})},aa93:function(t,e,c){"use strict";c.r(e);var o=c("7a23"),a={class:"container"},l=Object(o["h"])("h2",null,"後台產品管理列表",-1),n={class:"text-end mt-4"},i={class:"table mt-4"},r=Object(o["h"])("thead",null,[Object(o["h"])("tr",null,[Object(o["h"])("th",{width:"120"},"圖片"),Object(o["h"])("th",{width:"120"},"分類"),Object(o["h"])("th",null,"產品名稱"),Object(o["h"])("th",{width:"120"},"原價"),Object(o["h"])("th",{width:"120"},"售價"),Object(o["h"])("th",{width:"100"},"是否啟用"),Object(o["h"])("th",{width:"120"},"編輯")])],-1),d={style:{width:"200px"}},s={class:"text-end"},u={class:"text-end"},b=["onClick"],p={class:"btn-group"},h=["onClick"],m=["onClick"];function O(t,e,c,O,f,j){var g=Object(o["G"])("Loading"),v=Object(o["G"])("Pagination"),P=Object(o["G"])("AdminProductModal"),y=Object(o["G"])("DelProductModal");return Object(o["y"])(),Object(o["g"])("div",a,[Object(o["j"])(g,{active:f.isLoading},null,8,["active"]),l,Object(o["h"])("div",n,[Object(o["h"])("button",{class:"btn btn-primary",type:"button",onClick:e[0]||(e[0]=function(t){return j.openModal("isNew","item")})}," 建立新的產品 ")]),Object(o["h"])("table",i,[r,Object(o["h"])("tbody",null,[(Object(o["y"])(!0),Object(o["g"])(o["a"],null,Object(o["E"])(f.products,(function(t){return Object(o["y"])(),Object(o["g"])("tr",{key:t.id},[Object(o["h"])("td",d,[Object(o["h"])("div",{style:Object(o["s"])([{height:"100px","background-size":"cover","background-position":"center"},{backgroundImage:"url(".concat(t.imageUrl,")")}])},null,4)]),Object(o["h"])("td",null,Object(o["J"])(t.category),1),Object(o["h"])("td",null,Object(o["J"])(t.title),1),Object(o["h"])("td",s,Object(o["J"])(t.origin_price),1),Object(o["h"])("td",u,Object(o["J"])(t.price),1),Object(o["h"])("td",null,[Object(o["h"])("button",{type:"button",class:Object(o["r"])(["btn btn-sm",{"btn-success":t.is_enabled,"btn-light":!t.is_enabled}]),onClick:function(e){return t.is_enabled=!t.is_enabled}},Object(o["J"])(t.is_enabled?"啟用":"未啟用"),11,b)]),Object(o["h"])("td",null,[Object(o["h"])("div",p,[Object(o["h"])("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:function(e){return j.openModal("edit",t)}}," 編輯 ",8,h),Object(o["h"])("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:function(e){return j.openModal("delete",t)}}," 刪除 ",8,m)])])])})),128))])]),Object(o["j"])(v,{pages:f.pagination,onGetProduct:j.getProducts},null,8,["pages","onGetProduct"]),Object(o["j"])(P,{product:f.tempProduct,"is-new":f.isNew,ref:"adminProductModal",onGetProducts:j.getProducts},null,8,["product","is-new","onGetProducts"]),Object(o["j"])(y,{"temp-product":f.tempProduct,ref:"delProductModal",onGetProducts:j.getProducts},null,8,["temp-product","onGetProducts"])])}c("99af"),c("e9c4");var f=c("1799"),j=(c("a434"),c("a4d3"),c("e01a"),{id:"AdminProductModal",ref:"modal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"}),g={class:"modal-dialog modal-xl"},v={class:"modal-content border-0"},P={class:"modal-header bg-dark text-white"},y={id:"productModalLabel",class:"modal-title"},U=Object(o["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),M={class:"modal-body"},w={class:"row"},x={class:"col-sm-4"},k={class:"mb-3"},$=Object(o["h"])("label",{for:"imageUrl",class:"form-label"},"主要圖片",-1),S={class:"mb-3"},C={for:"customFile",class:"form-label"},J=Object(o["i"])("或 上傳圖片 "),N={key:0,class:"fas fa-spinner fa-spin"},F=["src"],_=Object(o["h"])("h3",{class:"mb-3"},"多圖新增",-1),D={key:0},L={class:"mb-1"},V={class:"mb-3"},A=Object(o["h"])("label",{for:"imageUrl",class:"form-label"},"圖片網址",-1),G=["onUpdate:modelValue"],I=["src"],E=["onClick"],B={class:"col-sm-8"},T={class:"mb-3"},z=Object(o["h"])("label",{for:"title",class:"form-label"},"標題",-1),q={class:"row"},H={class:"mb-3 col-md-6"},K=Object(o["h"])("label",{for:"category",class:"form-label"},"分類",-1),Q={class:"mb-3 col-md-6"},R=Object(o["h"])("label",{for:"price",class:"form-label"},"單位",-1),W={class:"row"},X={class:"mb-3 col-md-6"},Y=Object(o["h"])("label",{for:"origin_price",class:"form-label"},"原價",-1),Z={class:"mb-3 col-md-6"},tt=Object(o["h"])("label",{for:"price",class:"form-label"},"售價",-1),et=Object(o["h"])("hr",null,null,-1),ct={class:"mb-3"},ot=Object(o["h"])("label",{for:"description",class:"form-label"},"產品描述",-1),at={class:"mb-3"},lt=Object(o["h"])("label",{for:"content",class:"form-label"},"說明內容",-1),nt={class:"mb-3"},it={class:"form-check"},rt=Object(o["h"])("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),dt={class:"modal-footer"},st=Object(o["h"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function ut(t,e,c,a,l,n){return Object(o["y"])(),Object(o["g"])("div",j,[Object(o["h"])("div",g,[Object(o["h"])("div",v,[Object(o["h"])("div",P,[Object(o["h"])("h5",y,[Object(o["h"])("span",null,Object(o["J"])(c.isNew?"新增":"修改")+"產品",1)]),U]),Object(o["h"])("div",M,[Object(o["h"])("div",w,[Object(o["h"])("div",x,[Object(o["h"])("div",k,[$,Object(o["U"])(Object(o["h"])("input",{id:"imageUrl","onUpdate:modelValue":e[0]||(e[0]=function(t){return l.tempProduct.imageUrl=t}),type:"text",class:"form-control mb-2",placeholder:"請輸入圖片連結"},null,512),[[o["O"],l.tempProduct.imageUrl]]),Object(o["h"])("div",S,[Object(o["h"])("label",C,[J,l.status.fileUploading?(Object(o["y"])(),Object(o["g"])("i",N)):Object(o["f"])("",!0)]),Object(o["h"])("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:e[1]||(e[1]=function(){return n.uploadFile&&n.uploadFile.apply(n,arguments)})},null,544)]),Object(o["h"])("img",{class:"img-fluid",src:l.tempProduct.imageUrl},null,8,F)]),_,Array.isArray(l.tempProduct.imagesUrl)?(Object(o["y"])(),Object(o["g"])("div",D,[(Object(o["y"])(!0),Object(o["g"])(o["a"],null,Object(o["E"])(l.tempProduct.imagesUrl,(function(t,e){return Object(o["y"])(),Object(o["g"])(o["a"],{key:e+"123"},[Object(o["h"])("div",L,[Object(o["h"])("div",V,[A,Object(o["U"])(Object(o["h"])("input",{"onUpdate:modelValue":function(t){return l.tempProduct.imagesUrl[e]=t},type:"text",class:"form-control",placeholder:"請輸入圖片連結"},null,8,G),[[o["O"],l.tempProduct.imagesUrl[e]]])]),Object(o["h"])("img",{class:"img-fluid",src:l.tempProduct.imagesUrl[e]},null,8,I)]),Object(o["h"])("button",{type:"button",class:"btn btn-outline-danger btn-sm d-block w-100",onClick:function(t){return l.tempProduct.imagesUrl.splice(e,1)}}," 刪除 ",8,E)],64)})),128)),!l.tempProduct.imagesUrl.length||l.tempProduct.imagesUrl[l.tempProduct.imagesUrl.length-1]?(Object(o["y"])(),Object(o["g"])("button",{key:0,type:"button",class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[2]||(e[2]=function(t){return l.tempProduct.imagesUrl.push("")})}," 新增一張圖片 ")):Object(o["f"])("",!0)])):Object(o["f"])("",!0)]),Object(o["h"])("div",B,[Object(o["h"])("div",T,[z,Object(o["U"])(Object(o["h"])("input",{id:"title","onUpdate:modelValue":e[3]||(e[3]=function(t){return l.tempProduct.title=t}),type:"text",class:"form-control",placeholder:"請輸入標題"},null,512),[[o["O"],l.tempProduct.title]])]),Object(o["h"])("div",q,[Object(o["h"])("div",H,[K,Object(o["U"])(Object(o["h"])("input",{id:"category","onUpdate:modelValue":e[4]||(e[4]=function(t){return l.tempProduct.category=t}),type:"text",class:"form-control",placeholder:"請輸入分類"},null,512),[[o["O"],l.tempProduct.category]])]),Object(o["h"])("div",Q,[R,Object(o["U"])(Object(o["h"])("input",{id:"unit","onUpdate:modelValue":e[5]||(e[5]=function(t){return l.tempProduct.unit=t}),type:"text",class:"form-control",placeholder:"請輸入單位"},null,512),[[o["O"],l.tempProduct.unit]])])]),Object(o["h"])("div",W,[Object(o["h"])("div",X,[Y,Object(o["U"])(Object(o["h"])("input",{id:"origin_price","onUpdate:modelValue":e[6]||(e[6]=function(t){return l.tempProduct.origin_price=t}),type:"number",min:"0",class:"form-control",placeholder:"請輸入原價"},null,512),[[o["O"],l.tempProduct.origin_price,void 0,{number:!0}]])]),Object(o["h"])("div",Z,[tt,Object(o["U"])(Object(o["h"])("input",{id:"price","onUpdate:modelValue":e[7]||(e[7]=function(t){return l.tempProduct.price=t}),type:"number",min:"0",class:"form-control",placeholder:"請輸入售價"},null,512),[[o["O"],l.tempProduct.price,void 0,{number:!0}]])])]),et,Object(o["h"])("div",ct,[ot,Object(o["U"])(Object(o["h"])("textarea",{id:"description","onUpdate:modelValue":e[8]||(e[8]=function(t){return l.tempProduct.description=t}),type:"text",class:"form-control",placeholder:"請輸入產品描述"},"\n                ",512),[[o["O"],l.tempProduct.description]])]),Object(o["h"])("div",at,[lt,Object(o["U"])(Object(o["h"])("textarea",{id:"description","onUpdate:modelValue":e[9]||(e[9]=function(t){return l.tempProduct.content=t}),type:"text",class:"form-control",placeholder:"請輸入說明內容"},"\n                ",512),[[o["O"],l.tempProduct.content]])]),Object(o["h"])("div",nt,[Object(o["h"])("div",it,[Object(o["U"])(Object(o["h"])("input",{id:"is_enabled","onUpdate:modelValue":e[10]||(e[10]=function(t){return l.tempProduct.is_enabled=t}),class:"form-check-input",type:"checkbox","true-value":1,"false-value":0},null,512),[[o["M"],l.tempProduct.is_enabled]]),rt])])])])]),Object(o["h"])("div",dt,[st,Object(o["h"])("button",{type:"button",class:"btn btn-primary",onClick:e[11]||(e[11]=function(t){return n.updateProduct()})}," 確認 ")])])])],512)}var bt=c("7c2b"),pt=c.n(bt),ht={props:{product:{type:Object,default:function(){return{}}},isNew:{type:Boolean,default:!1}},data:function(){return{modal:{},id:"",isLoading:!1,tempProduct:{imagesUrl:[]},status:{}}},inject:["emitter"],methods:{uploadFile:function(){var t=this,e=this.$refs.fileInput.files[0],c=new FormData;c.append("file-to-upload",e);var o="".concat("https://vue3-course-api.hexschool.io/v2/","/api/").concat("charlotte-hexschool","/admin/upload");this.status.fileUploading=!0,this.$http.post(o,c,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){t.status.fileUploading=!1,e.data.success?(t.tempProduct.imageUrl=e.data.imageUrl,t.$refs.fileInput.value="",t.emitter.emit("push-message",{style:"success",title:"圖片上傳結果",content:e.data.message})):(t.$refs.fileInput.value="",t.emitter.emit("push-message",{style:"danger",title:"圖片上傳結果",content:e.data.message}))})).catch((function(e){t.status.fileUploading=!1,t.$httpMessageState(e.response,"圖片失敗")}))},updateProduct:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/v2/","api/").concat("charlotte-hexschool","/admin/product"),c="post",o="新增產品";this.isNew||(e="".concat("https://vue3-course-api.hexschool.io/v2/","api/").concat("charlotte-hexschool","/admin/product/").concat(this.tempProduct.id),c="put",o="更新產品"),this.$http[c](e,{data:this.tempProduct}).then((function(e){t.adminProductModal.hide(),t.$httpMessageState(e,o),t.$emit("get-products")})).catch((function(e){t.$httpMessageState(e.response,o)}))},openModal:function(){this.adminProductModal.show()},closeModal:function(){this.adminProductModal.hide()}},watch:{product:function(){this.tempProduct=JSON.parse(JSON.stringify(this.product))}},mounted:function(){this.adminProductModal=new pt.a(this.$refs.modal,{keyboard:!1,backdrop:"static"})}},mt=c("6b0d"),Ot=c.n(mt);const ft=Ot()(ht,[["render",ut]]);var jt=ft,gt={id:"DelProductModal",ref:"modal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},vt={class:"modal-dialog"},Pt={class:"modal-content border-0"},yt=Object(o["h"])("div",{class:"modal-header bg-danger text-white"},[Object(o["h"])("h5",{id:"delProductModalLabel",class:"modal-title"},[Object(o["h"])("span",null,"刪除產品")]),Object(o["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Ut={class:"modal-body"},Mt=Object(o["i"])(" 是否刪除 "),wt={class:"text-danger"},xt=Object(o["i"])(" 商品(刪除後將無法恢復)。 "),kt={class:"modal-footer"},$t=Object(o["h"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function St(t,e,c,a,l,n){return Object(o["y"])(),Object(o["g"])("div",gt,[Object(o["h"])("div",vt,[Object(o["h"])("div",Pt,[yt,Object(o["h"])("div",Ut,[Mt,Object(o["h"])("strong",wt,Object(o["J"])(c.tempProduct.title),1),xt]),Object(o["h"])("div",kt,[$t,Object(o["h"])("button",{type:"button",class:"btn btn-danger",onClick:e[0]||(e[0]=function(){return n.delProduct&&n.delProduct.apply(n,arguments)})}," 確認刪除 ")])])])],512)}var Ct={props:["tempProduct"],methods:{delProduct:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/v2/","api/").concat("charlotte-hexschool","/admin/product/").concat(this.tempProduct.id);this.$http.delete(e).then((function(e){t.$emit("get-products"),t.delProductModal.hide(),t.$httpMessageState(e,"刪除產品")})).catch((function(e){t.$httpMessageState(e.response,"錯誤訊息")}))},openModal:function(){this.delProductModal.show()},closeModal:function(){this.delProductModal.hide()}},mounted:function(){this.delProductModal=new pt.a(this.$refs.modal,{keyboard:!1,backdrop:"static"})}};const Jt=Ot()(Ct,[["render",St]]);var Nt=Jt,Ft={data:function(){return{products:[],isLoadingItem:"",isLoading:!1,isNew:!1,tempProduct:{imagesUrl:[]},status:{fileUploading:!1},modal:{AdminProductModal:"",DelProductModal:""},pagination:{}}},components:{Pagination:f["a"],AdminProductModal:jt,DelProductModal:Nt},methods:{getProducts:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var c="".concat("https://vue3-course-api.hexschool.io/v2/","api/").concat("charlotte-hexschool","/admin/products?page=").concat(e);this.$http.get(c).then((function(e){console.log(e),t.products=e.data.products,t.isLoading=!1,t.pagination=e.data.pagination})).catch((function(e){t.$httpMessageState(e.response,"錯誤訊息")}))},openModal:function(t,e){console.log(t,e),"isNew"===t?(this.tempProduct={imagesUrl:[]},this.isNew=!0,this.$refs.adminProductModal.openModal()):"edit"===t?(this.tempProduct=JSON.parse(JSON.stringify(e)),this.isNew=!1,this.$refs.adminProductModal.openModal(),this.tempProduct.imagesUrl||(this.tempProduct.imagesUrl=[])):"delete"===t&&(this.tempProduct=JSON.parse(JSON.stringify(e)),this.$refs.delProductModal.openModal())}},mounted:function(){this.getProducts()}};const _t=Ot()(Ft,[["render",O]]);e["default"]=_t},e01a:function(t,e,c){"use strict";var o=c("23e7"),a=c("83ab"),l=c("da84"),n=c("e330"),i=c("1a2d"),r=c("1626"),d=c("3a9b"),s=c("577e"),u=c("9bf2").f,b=c("e893"),p=l.Symbol,h=p&&p.prototype;if(a&&r(p)&&(!("description"in h)||void 0!==p().description)){var m={},O=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:s(arguments[0]),e=d(h,this)?new p(t):void 0===t?p():p(t);return""===t&&(m[e]=!0),e};b(O,p),O.prototype=h,h.constructor=O;var f="Symbol(test)"==String(p("test")),j=n(h.toString),g=n(h.valueOf),v=/^Symbol\((.*)\)[^)]+$/,P=n("".replace),y=n("".slice);u(h,"description",{configurable:!0,get:function(){var t=g(this),e=j(t);if(i(m,t))return"";var c=f?y(e,7,-1):P(e,v,"$1");return""===c?void 0:c}}),o({global:!0,forced:!0},{Symbol:O})}},e9c4:function(t,e,c){var o=c("23e7"),a=c("da84"),l=c("d066"),n=c("2ba4"),i=c("e330"),r=c("d039"),d=a.Array,s=l("JSON","stringify"),u=i(/./.exec),b=i("".charAt),p=i("".charCodeAt),h=i("".replace),m=i(1..toString),O=/[\uD800-\uDFFF]/g,f=/^[\uD800-\uDBFF]$/,j=/^[\uDC00-\uDFFF]$/,g=function(t,e,c){var o=b(c,e-1),a=b(c,e+1);return u(f,t)&&!u(j,a)||u(j,t)&&!u(f,o)?"\\u"+m(p(t,0),16):t},v=r((function(){return'"\\udf06\\ud834"'!==s("\udf06\ud834")||'"\\udead"'!==s("\udead")}));s&&o({target:"JSON",stat:!0,forced:v},{stringify:function(t,e,c){for(var o=0,a=arguments.length,l=d(a);o<a;o++)l[o]=arguments[o];var i=n(s,null,l);return"string"==typeof i?h(i,O,g):i}})}}]);
//# sourceMappingURL=chunk-9a409e0e.091392b8.js.map