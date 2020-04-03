(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[0],{208:function(e,t,a){e.exports=a(406)},217:function(e,t,a){},405:function(e,t,a){},406:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),l=a(40),i=a(25),d=(a(217),a(411)),u=a(82),s=a(203),m=a(34),g=a(415),p=a(23),E=a(409),y=a(43),b=a(33);function f(){var e=Object(y.a)(["\n    query categoryById($id: ID){\n        categoryById(id: $id){\n            id\n            name\n            icons\n        }\n    }\n"]);return f=function(){return e},e}function h(){var e=Object(y.a)(["\n    {\n        categoriesAll{\n            id,\n            name,\n            icons\n        }\n    }\n"]);return h=function(){return e},e}var O=Object(b.b)(h()),v=Object(b.b)(f()),I={width:"20px",height:"100%",marginRight:"10px"},j=function(){var e=Object(p.b)(O),t=e.loading,a=(e.error,e.data);if(t)return r.a.createElement("p",null,"Loading ... ");var n=a.categoriesAll;console.log(n);var c=[{title:"Name",dataIndex:"name",key:"name"},{title:"ID",dataIndex:"id",key:"id"},{title:"Icons",dataIndex:"icons",key:"icons",render:function(e){return 0!==e.length?r.a.createElement("div",null,e.map((function(e){return r.a.createElement("img",{key:e,alt:"img",src:e,style:I})}))):r.a.createElement("span",null,"no icons")}}];return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{dataSource:n,columns:c,rowKey:"id"}))},_=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Categories"),r.a.createElement(j,null),r.a.createElement(s.a,{title:"Add Category"},r.a.createElement(m.a,{type:"dashed",shape:"circle",style:{position:"fixed",bottom:"50px",right:"50px",color:"#08c"}},r.a.createElement(g.a,{style:{fontSize:"22px",color:"#08c"}}))))},P=a(81),C=a(27),w=a(412);function A(){var e=Object(y.a)(["\n    query productsByCategoryId($categoryId: ID!){\n        productsByCategoryId(categoryId: $categoryId){\n            id\n            name\n            price\n            category{\n                id\n                name\n            }\n        }\n    }\n"]);return A=function(){return e},e}function k(){var e=Object(y.a)(["\n    {\n        productsAll{\n            id,\n            name,\n            price,\n            images,\n            category{\n                id,\n                name,\n                icons\n            }\n        }\n    }\n"]);return k=function(){return e},e}var S=Object(b.b)(k()),D=Object(b.b)(A());function x(){var e=Object(y.a)(["\n    mutation deleteProduct($id: ID!) {\n        deleteProduct(id: $id){\n            id\n        }\n    }\n"]);return x=function(){return e},e}function R(){var e=Object(y.a)(["\n    mutation updateProduct($id: ID!, $name: String!, $price: String!, $categoryId: ID!, $images: [String] ) {\n        updateProduct(id: $id, name: $name, price: $price, categoryId: $categoryId, images: $images ){\n            id\n            name\n            price\n            category{\n                id\n                name\n            }\n        }\n    }\n"]);return R=function(){return e},e}function $(){var e=Object(y.a)(["\n    mutation addProduct($name: String!, $price: String!, $categoryId: ID!, $images: [String] ) {\n        addProduct(name: $name, price: $price, categoryId: $categoryId, images: $images ){\n            id\n            name\n            price\n            category{\n                id\n                name\n            }\n        }\n    }\n"]);return $=function(){return e},e}var N=Object(b.b)($()),q=Object(b.b)(R()),M=Object(b.b)(x()),T=function(e){return{type:"EDIT_PRODUCT",payload:e}},B=function(e){return{type:"IS_OPEN_EDIT_MODAL",payload:e}},L=function(e){return{type:"IS_OPEN_ADD_MODAL",payload:e}},F={width:"50px",height:"100%",marginRight:"10px"},U={width:"20px",height:"100%",marginRight:"10px"},V=Object(l.b)(null,{setIsOpenEditProductModal:B,editProduct:T},null,{pure:!1})((function(e){var t=e.editProduct,a=e.setIsOpenEditProductModal,c=Object(p.b)(S),o=c.loading,l=(c.error,c.data),i=Object(n.useState)(!1),d=Object(C.a)(i,2),u=d[0],s=d[1],g=Object(n.useState)({}),y=Object(C.a)(g,2),b=y[0],f=y[1],h=Object(p.a)(M),O=Object(C.a)(h,2),v=O[0];if(Object(P.a)(O[1]),console.log("productDeleted",b),o)return r.a.createElement("p",null,"Loading ... ");var I=l.productsAll,j=[{title:"Name",dataIndex:"name",key:"name"},{title:"ID",dataIndex:"id",key:"id"},{title:"Price",dataIndex:"price",key:"price"},{title:"Category",dataIndex:"category",key:"category",render:function(e){var t=e.name,a=e.icons,n=e.id;return r.a.createElement("div",null,r.a.createElement("span",null,t," "),0!==a.length?r.a.createElement("img",{key:a[0],alt:"img",src:a[0],style:U}):"",r.a.createElement("span",null," ",n))}},{title:"Images",dataIndex:"images",key:"images",render:function(e){return 0!==e.length?r.a.createElement("div",null,e.map((function(e){return r.a.createElement("img",{key:e,alt:"img",src:e,style:F})}))):r.a.createElement("span",null,"no icons")}},{title:"Actions",dataIndex:"id",key:"id",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{onClick:function(){return function(e){t(I.find((function(t){return t.id===e}))),setTimeout((function(){return a(!0)}),250)}(e)},type:"dashed"},"Edit"),r.a.createElement(m.a,{onClick:function(){return function(e){s(!0),f(I.find((function(t){return t.id===e})))}(e)},type:"dashed",danger:!0},"Delete"))}}];return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{dataSource:I,columns:j,rowKey:"id"}),r.a.createElement(w.a,{title:"Delete product?",visible:u,onOk:function(){return b.id,console.log("productDeleted.id",b.id),v({variables:{id:b.id}}).then((function(e){return console.log("deleteProduct response:",e)})),void s(!1)},onCancel:function(){s(!1)}},r.a.createElement("p",null,b.name)))})),X=a(19),K=a(36),z=a(410),J=a(414),W=a(413),G=a(93),Y=a(88),H=a.n(Y),Q=a(116),Z=a.n(Q),ee={labelCol:{xs:{span:24},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:20}}},te={wrapperCol:{xs:{span:24,offset:0},sm:{span:20,offset:4}}},ae=Object(l.b)((function(e){return{isOpenEditProductModal:e.edit_product_modal.isOpen,edited_product:e.edit_product.product}}),{setIsOpenEditProductModal:B,editProduct:T})((function(e){var t=e.edited_product,a=e.editProduct,c=e.isOpenEditProductModal,o=e.setIsOpenEditProductModal,l=z.a.useForm(),i=Object(C.a)(l,1)[0],d=Object(p.a)(q),u=Object(C.a)(d,2),s=u[0];Object(P.a)(u[1]);var g=Object(p.b)(O),E=(g.loading,g.error,g.data),y=Object(n.useState)({}),b=Object(C.a)(y,2),f=b[0],h=b[1];Object(n.useEffect)((function(){h(t),console.log("edited_product",t)}),[t]),Object(n.useEffect)((function(){return i.setFieldsValue({name:t.name,price:t.price,images:t.images,icon:t.icon}),function(){i.resetFields()}}),[t]),console.log("values+++",f);var v=function(e){var t=e.target,a=t.name,n=t.value;h(Object(K.a)({},f,Object(X.a)({},a,n)))};if(!E.categoriesAll)return r.a.createElement(J.a,null);var I=E.categoriesAll;if(!t)return r.a.createElement(J.a,null);var j=t.category;return console.log("cat",j),console.log("OpenEditProductModal",c),r.a.createElement(w.a,{title:"Product information id: ".concat(f.id),visible:c,footer:!1,onCancel:function(e){console.log(e),o(!1),a({})},forceRender:!0,destroyOnClose:!1},r.a.createElement(z.a,Object.assign({form:i,name:"product"},te,{onFinish:function(e){console.log("Received values of form:",f);var t=e.name,a=e.categoryId,n=e.price,r=e.images,c=e.icon,l=String(f.id);console.log("onFinish",e),s({variables:{id:l,name:t,price:n,categoryId:a,images:r,icon:c}}).then((function(e){return console.log("updateProductMESSAGE:",e)})).catch((function(e){return console.log("updateProductERROR:",e)})),o(!1)}}),r.a.createElement(z.a.Item,{label:"Name product",name:"name",value:f.name,rules:[{required:!0,message:"Name product is required"}]},r.a.createElement(W.a,{onChange:v,placeholder:"name product",style:{width:"100%",marginRight:8}})),r.a.createElement(z.a.Item,{label:"Price",name:"price",rules:[{required:!0,message:"Price is required"}]},r.a.createElement(W.a,{type:"number",placeholder:"Price $",style:{width:"100%",marginRight:8}})),r.a.createElement(z.a.Item,{label:"Category",name:"categoryId",onChange:v,rules:[{required:!0,message:"Category is required"}]},r.a.createElement(G.a,{placeholder:"Select category"},I.map((function(e){return r.a.createElement(G.a.Option,{key:e.id,firstActiveValue:"nike"},e.name)})))),r.a.createElement(z.a.List,{name:"images"},(function(e,t){var a=t.add,n=t.remove;return r.a.createElement("div",null,e.map((function(t,a){return r.a.createElement(z.a.Item,Object.assign({},0===a?ee:te,{label:0===a?"Images":"",required:!1,key:t.key}),r.a.createElement(z.a.Item,Object.assign({},t,{validateTrigger:["onChange","onBlur"],rules:[{required:!0,whitespace:!0,message:"Please input image url or delete this field."}],noStyle:!0}),r.a.createElement(W.a,{value:f.images[a],placeholder:"image url",style:{width:"90%",marginRight:8}})),e.length>1?r.a.createElement(Z.a,{className:"dynamic-delete-button",onClick:function(){n(t.name)}}):null)})),r.a.createElement(z.a.Item,null,r.a.createElement(m.a,{type:"dashed",onClick:function(){a()},style:{width:"80%"}},r.a.createElement(H.a,null)," Add image url")))})),r.a.createElement(z.a.Item,{label:"Icon",name:"icon"},r.a.createElement(W.a,{onChange:v,placeholder:"icon url",style:{width:"100%",marginRight:8}})),r.a.createElement(m.a,{type:"primary",htmlType:"submit"},"Submit")))})),ne=(a(391),{labelCol:{xs:{span:24},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:20}}}),re={wrapperCol:{xs:{span:24,offset:0},sm:{span:20,offset:4}}},ce=Object(l.b)((function(e){return{isOpenAddProductModal:e.add_product_modal.isOpen}}),{setIsOpenAddProductModal:L})((function(e){var t=e.isOpenAddProductModal,a=e.setIsOpenAddProductModal,c=Object(p.a)(N),o=Object(C.a)(c,2),l=o[0];Object(P.a)(o[1]);var i=Object(p.b)(O),d=(i.loading,i.error,i.data),u=Object(n.useState)({}),s=Object(C.a)(u,2),g=s[0],E=s[1];console.log("values+++",g);var y=function(e){var t=e.target,a=t.name,n=t.value;console.log("target",e.target),E(Object(K.a)({},g,Object(X.a)({},a,n)))},b=d.categoriesAll,f=void 0===b?[]:b;return console.log("isOpenAddProductModal",t),r.a.createElement(w.a,{title:"Product information",visible:t,footer:!1,onCancel:function(e){e.preventDefault(),console.log(e),a(!1)}},r.a.createElement(z.a,Object.assign({name:"product"},re,{onFinish:function(e){console.log("Received values of form:",g);var t=g.name,n=(g.images,g.categoryId),r=g.icon,c=Number(g.price);console.log("onFinish"),l({variables:{name:t,price:c,categoryId:n,images:e.images,icon:r}}).then((function(e){return console.log("addProduct:",e)})).catch((function(e){return console.log("addProductERROR:",e)})),a(!1)}}),r.a.createElement(z.a.Item,{label:"Name product",rules:[{required:!0,message:"Name product is required"}]},r.a.createElement(W.a,{name:"name",onChange:y,placeholder:"name product",style:{width:"100%",marginRight:8}})),r.a.createElement(z.a.Item,{label:"Price",rules:[{required:!0,message:"Price is required"}]},r.a.createElement(W.a,{name:"price",onChange:y,type:"number",placeholder:"Price $",style:{width:"100%",marginRight:8}})),r.a.createElement(z.a.Item,{label:"Category",name:"categoryId",rules:[{required:!0,message:"Category is required"}]},r.a.createElement(G.a,{name:"categoryId",onChange:function(e){E(Object(K.a)({},g,{categoryId:e}))},placeholder:"Select category"},f.map((function(e){return r.a.createElement(G.a.Option,{key:e.id,value:e.id,onChange:y},e.name)})))),r.a.createElement(z.a.List,{name:"images"},(function(e,t){var a=t.add,n=t.remove;return r.a.createElement("div",null,e.map((function(t,a){return r.a.createElement(z.a.Item,Object.assign({},0===a?ne:re,{label:0===a?"Images":"",required:!1,key:t.key}),r.a.createElement(z.a.Item,Object.assign({},t,{validateTrigger:["onChange","onBlur"],rules:[{required:!0,whitespace:!0,message:"Please input image url or delete this field."}],noStyle:!0}),r.a.createElement(W.a,{style:{width:"90%",marginRight:8}})),e.length>1?r.a.createElement(Z.a,{className:"dynamic-delete-button",onClick:function(){n(t.name)}}):null)})),r.a.createElement(z.a.Item,null,r.a.createElement(m.a,{type:"dashed",onClick:function(){a()},style:{width:"80%"}},r.a.createElement(H.a,null)," Add image url")))})),r.a.createElement(z.a.Item,{label:"Icon",name:"icon"},r.a.createElement(W.a,{onChange:y,placeholder:"icon url",style:{width:"100%",marginRight:8}})),r.a.createElement(m.a,{type:"primary",htmlType:"submit"},"Submit")))})),oe=Object(l.b)(null,{setIsOpenAddProductModal:L,editProduct:T},null,{pure:!1})((function(e){var t=e.setIsOpenAddProductModal;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Products"),r.a.createElement(V,null),r.a.createElement(ae,null),r.a.createElement(ce,null),r.a.createElement(s.a,{title:"Add Product"},r.a.createElement(m.a,{onClick:function(){T({}),t(!0)},type:"dashed",shape:"circle",style:{position:"fixed",bottom:"50px",right:"50px",color:"#08c"}},r.a.createElement(g.a,{style:{fontSize:"22px",color:"#08c"}}))))})),le=function(e){var t=e.categoryById;return 0==e.productsByCategoryId.length?r.a.createElement("img",{src:t.icons[0],width:15,alt:"recycle bin"}):r.a.createElement("img",{src:t.icons[3],width:15,alt:"recycle bin"})},ie=d.a.TabPane;function de(e){console.log(e)}var ue=function(){var e=Object(p.b)(O),t=e.loading,a=(e.cat_error,e.data),n=Object(p.b)(S),c=n.loading,o=(n.prod_error,n.data),l=Object(p.b)(D,{variables:{categoryId:"5e846688cd408b19cec669cf"}}),i=(l.loading,l.recycle_bin_error,l.data,Object(p.b)(D,{variables:{categoryId:"5e846688cd408b19cec669cf"}})),s=i.loading,m=(i.recycle_bin_prod_error,i.data),g=Object(p.b)(v,{variables:{id:"5e846688cd408b19cec669cf"}}),E=g.loading,y=(g.recycle_bin_cat_error,g.data);if(t||c||s||E)return r.a.createElement("p",null,"Loading ... ");a.categoriesAll,o.productsAll;var b=m.productsByCategoryId,f=y.categoryById;return console.log("categoryById",f),r.a.createElement(d.a,{defaultActiveKey:"1",onChange:de},r.a.createElement(d.a.TabPane,{tab:"Products",key:"1"},r.a.createElement(oe,null)),r.a.createElement(ie,{tab:"Categories",key:"2"},r.a.createElement(_,null)),r.a.createElement(ie,{tab:r.a.createElement("span",null,r.a.createElement(le,{categoryById:f,productsByCategoryId:b}),"Recycle bin"),key:"3"},r.a.createElement(u.a,null)))};a(404),a(405);var se=function(){return console.log("process.env.NODE_ENV ","production"),console.log("process.env.REACT_APP_BASE_URL ","http://localhost:3005/graphql"),console.log("process.env.REACT_APP_RECYCLE_BIN_ID ","5e846688cd408b19cec669cf"),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",null,r.a.createElement("code",null," APP")),r.a.createElement("a",{className:"App-link",href:"http://localhost:3005/graphql",target:"_blank",rel:"noopener noreferrer"},"BASE_URL")),r.a.createElement(ue,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var me=new b.a({uri:"http://localhost:3005/graphql"}),ge=a(65),pe={isOpen:!1},Ee={isOpen:!1},ye={product:{}},be=Object(ge.b)({edit_product_modal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS_OPEN_EDIT_MODAL":return Object(K.a)({},e,{isOpen:t.payload});default:return e}},add_product_modal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS_OPEN_ADD_MODAL":return Object(K.a)({},e,{isOpen:t.payload});default:return e}},edit_product:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"EDIT_PRODUCT":return Object(K.a)({},e,{product:t.payload});default:return e}}}),fe=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):ge.c)(),he=Object(ge.d)(be,{},fe);o.a.render(r.a.createElement(l.a,{store:he},r.a.createElement(i.a,{client:me},r.a.createElement(se,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[208,1,2]]]);
//# sourceMappingURL=main.886ba4ef.chunk.js.map