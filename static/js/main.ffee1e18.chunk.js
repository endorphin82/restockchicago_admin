(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[0],{204:function(e,t,n){e.exports=n(394)},213:function(e,t,n){},391:function(e,t,n){},394:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(7),c=n.n(i),l=n(29),o=n(397),d=n(30),u=(n(213),n(400)),s=n(85),m=n(201),g=n(37),p=n(403),y=n(48),f=n(14),v=n(398),E=n(401),h=n(22),b=n(24),O=n.n(b),I=n(21);function C(){var e=Object(h.a)(["\n    query CategoriesAll {\n  categoriesAll {\n    id\n    name\n    icons\n  }\n}\n    "]);return C=function(){return e},e}var j=O()(C());function P(e){return I.c(j,e)}var S=String("5e84ad3fe6b396aef7657ca4"),A=String("https://endorphin82.github.io/restockchicago-img/img/no-image/no-image-available.svg");function k(){var e=Object(h.a)(["\n    mutation DeleteCascadeCategoryWithProductsById($id: ID!) {\n  deleteCascadeCategoryWithProductsById(id: $id) {\n    __typename\n  }\n}\n    "]);return k=function(){return e},e}var _=O()(k());var D=n(115),R=n.n(D),w={width:"20px",height:"100%",marginRight:"10px"},q=function(){var e,t=P(),n=t.loading,i=t.error,c=t.data,l=(e={refetchQueries:[{query:j}]},I.b(_,e)),o=Object(f.a)(l,2),d=o[0];Object(y.a)(o[1]);var u=Object(a.useState)(!1),s=Object(f.a)(u,2),p=s[0],h=s[1],b=Object(a.useState)({}),O=Object(f.a)(b,2),C=O[0],A=O[1];if(n)return r.a.createElement("div",null,"Loading...");if(i||!c)return r.a.createElement("div",null,"Error...");var k=c.categoriesAll,D=null===k||void 0===k?void 0:k.filter((function(e){return e.id!==S})),q=[{title:"Name",dataIndex:"name",key:"name"},{title:"ID",dataIndex:"id",key:"id"},{title:"Icons",dataIndex:"icons",key:"icons",render:function(e){return 0!==e.length?r.a.createElement("div",null,e.map((function(e){return r.a.createElement("img",{key:String(e),alt:"img",src:String(e),style:w})}))):r.a.createElement("span",null,"no icons")}},{title:"Actions",dataIndex:"id",key:"id",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{title:"Edit this category"},r.a.createElement(g.a,{disabled:!0,onClick:function(){},type:"dashed"},"Edit")),r.a.createElement(m.a,{title:"Delete Category With All Products"},r.a.createElement(g.a,{style:{float:"right"},onClick:function(){return function(e){h(!0),A(D.find((function(t){return t.id===e})))}(e)},type:"dashed",danger:!0,icon:r.a.createElement(R.a,null)})))}}];return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{dataSource:D,columns:q,rowKey:"id"}),r.a.createElement(E.a,{title:"Delete Category With All Products WITHOUT recovery!?",visible:Boolean(p),onOk:function(){return e=C.id,d({variables:{id:String(e)}}).then((function(e){return console.log("deleteCascadeCategoryWithProductsById response:",e)})),void h(!1);var e},onCancel:function(){h(!1)}},r.a.createElement("p",null,C.name)))},x=function(e){return{type:"EDIT_PRODUCT",payload:e}},$=function(){return{type:"CLEAR_EDIT_PRODUCT"}},B=function(e){return{type:"IS_OPEN_EDIT_PRODUCT_MODAL",payload:e}},M=function(e){return{type:"IS_OPEN_ADD_PRODUCT_MODAL",payload:e}},T=function(e){return{type:"IS_OPEN_ADD_CATEGORY_MODAL",payload:e}},N=n(19),F=n(25);function L(){var e=Object(h.a)(["\n    mutation AddCategory($name: String!, $images: [String], $icons: [String]) {\n  addCategory(name: $name, images: $images, icons: $icons) {\n    id\n    name\n    images\n    icons\n  }\n}\n    "]);return L=function(){return e},e}var U=O()(L());function Q(){var e=Object(h.a)(["\n    query ProductsAll {\n  productsAll {\n    id\n    name\n    price\n    images\n    icon\n    category {\n      id\n      name\n      icons\n    }\n  }\n}\n    "]);return Q=function(){return e},e}var W=O()(Q());function G(e){return I.c(W,e)}var K=n(399),Y=n(402),z=n(71),J=n.n(z),V=n(60),H=n.n(V),X={labelCol:{xs:{span:24},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:20}}},Z={wrapperCol:{xs:{span:24,offset:0},sm:{span:20,offset:4}}},ee=Object(l.b)((function(e){return{isOpenAddCategoryModal:e.add_cat_modal.isOpen}}),{setIsOpenAddCategoryModal:T})((function(e){var t,n=e.setIsOpenAddCategoryModal,i=e.isOpenAddCategoryModal,c=(t={update:function(e,t){var n=t.data.addCategory,a=e.readQuery({query:W}).categoriesAll.categoriesAll;e.writeQuery({query:j,data:{categoriesAll:null===a||void 0===a?void 0:a.concat([n])}})},refetchQueries:[{query:j}]},I.b(U,t)),l=Object(f.a)(c,2),o=l[0],d=(l[1].data,P()),u=(d.loading,d.error,d.data,Object(a.useState)({})),s=Object(f.a)(u,2),m=s[0],p=s[1];return r.a.createElement(E.a,{title:"Category information",visible:Boolean(i),footer:!1,onCancel:function(){n(!1)}},r.a.createElement(K.a,Object.assign({name:"category"},Z,{onFinish:function(e){var t=m.name,a=e.icons,r=e.images;o({variables:{name:t,icons:a,images:r}}).then((function(e){return console.log("addCategory:",e)})).catch((function(e){return console.log("addCategoryERROR:",e)})),n(!1)}}),r.a.createElement(K.a.Item,{label:"Name category",rules:[{required:!0,message:"Name category is required"}]},r.a.createElement(Y.a,{name:"name",onChange:function(e){var t=e.target,n=t.name,a=t.value;console.log("target",e.target),p(Object(F.a)({},m,Object(N.a)({},n,a)))},placeholder:"name category",style:{width:"100%",marginRight:8}})),r.a.createElement(K.a.List,{name:"icons"},(function(e,t){var n=t.add,a=t.remove;return r.a.createElement("div",null,e.map((function(t,n){return r.a.createElement(K.a.Item,Object.assign({},0===n?X:Z,{label:0===n?"icons":"",required:!1,key:t.key}),r.a.createElement(K.a.Item,Object.assign({},t,{validateTrigger:["onChange","onBlur"],rules:[{required:!0,whitespace:!0,message:"Please input icon url or delete this field."}],noStyle:!0}),r.a.createElement(Y.a,{style:{width:"90%",marginRight:8}})),e.length>=1?r.a.createElement(J.a,{className:"dynamic-delete-button",onClick:function(){a(t.name)}}):r.a.createElement("span",null))})),r.a.createElement(K.a.Item,null,r.a.createElement(g.a,{type:"dashed",onClick:function(){n()},style:{width:"80%"}},r.a.createElement(H.a,null)," Add icon url")))})),r.a.createElement(K.a.List,{name:"images"},(function(e,t){var n=t.add,a=t.remove;return r.a.createElement("div",null,e.map((function(t,n){return r.a.createElement(K.a.Item,Object.assign({},0===n?X:Z,{label:0===n?"Images":"",required:!1,key:t.key}),r.a.createElement(K.a.Item,Object.assign({},t,{validateTrigger:["onChange","onBlur"],rules:[{required:!0,whitespace:!0,message:"Please input image url or delete this field."}],noStyle:!0}),r.a.createElement(Y.a,{style:{width:"90%",marginRight:8}})),e.length>=1?r.a.createElement(J.a,{className:"dynamic-delete-button",onClick:function(){a(t.name)}}):r.a.createElement("span",null))})),r.a.createElement(K.a.Item,null,r.a.createElement(g.a,{type:"dashed",onClick:function(){n()},style:{width:"80%"}},r.a.createElement(H.a,null)," Add image url")))})),r.a.createElement(g.a,{type:"primary",htmlType:"submit"},"Submit")))})),te=Object(l.b)(null,{setIsOpenAddCategoryModal:T})((function(e){var t=e.setIsOpenAddCategoryModal;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Categories"),r.a.createElement(q,null),r.a.createElement(ee,null),r.a.createElement(m.a,{title:"Add Category"},r.a.createElement(g.a,{onClick:function(){t(!0)},type:"dashed",shape:"circle",style:{position:"fixed",bottom:"50px",right:"50px",color:"#08c"}},r.a.createElement(p.a,{style:{fontSize:"22px",color:"#08c"}}))))})),ne=function(e){return Math.round(100*parseFloat(e.replace(/[$,]/g,"")))},ae=function(e){return Number(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"})};var re={width:"50px",height:"100%",marginRight:"10px"},ie={width:"20px",height:"100%",marginRight:"10px"},ce=function(e){var t=e.handleEditProp,n=e.handleDeleteProp,a=e.productsAllWithoutRecycleBinProp,i=[{title:"Name",dataIndex:"name",key:"name"},{title:"ID",dataIndex:"id",key:"id"},{title:"Price",dataIndex:"price",key:"price",render:function(e){return ae(e)}},{title:"Category",dataIndex:"category",key:"category",render:function(e){var t=e.name,n=e.icons,a=e.id;return r.a.createElement("div",null,r.a.createElement("span",null,t," "),0!==(null===n||void 0===n?void 0:n.length)?r.a.createElement("img",{key:String(n[0]),alt:"img",src:String(n[0]),style:ie}):"",r.a.createElement("span",null," ",a," "))}},{title:"Images",dataIndex:"images",key:"images",render:function(e){return e?r.a.createElement("div",null,e.map((function(e,t){return r.a.createElement("img",{key:String("".concat(e,"+").concat(t)),alt:"img",src:String(e),style:re})}))):r.a.createElement("span",null,"no  images")}},{title:"Actions",dataIndex:"id",key:"id",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{title:"Edit this product"},r.a.createElement(g.a,{onClick:function(){return t(e)},type:"dashed"},"Edit")),r.a.createElement(m.a,{title:"Move to recycle bin"},r.a.createElement(g.a,{style:{float:"right"},onClick:function(){return n(e)},type:"dashed",danger:!0,icon:r.a.createElement(R.a,null)})))}}];return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{dataSource:a,columns:i,rowKey:"id"}))};function le(){var e=Object(h.a)(["\n    mutation UpdateProduct($id: ID!, $name: String!, $price: Float!, $categoryId: ID!, $images: [String], $icon: String) {\n  updateProduct(id: $id, name: $name, price: $price, categoryId: $categoryId, images: $images, icon: $icon) {\n    id\n    name\n    price\n    images\n    icon\n    category {\n      id\n      name\n      icons\n    }\n  }\n}\n    "]);return le=function(){return e},e}var oe=O()(le());function de(e){return I.b(oe,e)}function ue(){var e=Object(h.a)(["\n    query ProductsByCategoryId($categoryId: ID!) {\n  productsByCategoryId(categoryId: $categoryId) {\n    id\n    name\n    price\n    images\n    icon\n    category {\n      id\n      name\n      icons\n    }\n  }\n}\n    "]);return ue=function(){return e},e}var se=O()(ue());function me(e){return I.c(se,e)}var ge=Object(l.b)(null,{setIsOpenEditProductModal:B,editProduct:x})((function(e){var t=e.editProduct,n=e.setIsOpenEditProductModal,i=G(),c=i.loading,l=i.error,o=i.data,d=de({refetchQueries:[{query:se,variables:{categoryId:S}}]}),u=Object(f.a)(d,2),s=u[0];Object(y.a)(u[1]);var m=Object(a.useState)(!1),g=Object(f.a)(m,2),p=g[0],v=g[1],h=Object(a.useState)({}),b=Object(f.a)(h,2),O=b[0],I=b[1];if(console.log("productDeleted",O),c)return r.a.createElement("div",null,"Loading...");if(l||!o)return r.a.createElement("div",null,"Error...");var C=o.productsAll,j=null===C||void 0===C?void 0:C.filter((function(e){var t;return(null===e||void 0===e||null===(t=e.category)||void 0===t?void 0:t.id)!==S}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(ce,{productsAllWithoutRecycleBinProp:j,handleEditProp:function(e){var a=null===j||void 0===j?void 0:j.find((function(t){return t.id===e}));t(a),n(!0)},handleDeleteProp:function(e){v(!0),I(j.find((function(t){return t.id===e})))}}),r.a.createElement(E.a,{title:"Delete product in recycle bin?",visible:Boolean(p),onOk:function(){return function(e){var t=e.id,n=e.name,a=e.price,r=e.images,i=e.icon;s({variables:{id:t,name:n,price:a,categoryId:S,images:r,icon:i}}).then((function(e){return console.log("updateProductMESSAGE:",e)})).catch((function(e){return console.log("updateProductERROR:",e)})),v(!1)}(O)},onCancel:function(){v(!1)}},r.a.createElement("p",null,O.id)))})),pe=n(95),ye={labelCol:{xs:{span:24},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:20}}},fe={wrapperCol:{xs:{span:24,offset:0},sm:{span:20,offset:4}}},ve=Object(l.b)((function(e){return{isOpenEditProductModal:e.edit_product_modal.isOpen,edited_product:e.edit_product.product}}),{setIsOpenEditProductModal:B,clearEditProduct:$})((function(e){var t=e.clearEditProduct,n=e.edited_product,i=e.isOpenEditProductModal,c=e.setIsOpenEditProductModal,l=K.a.useForm(),o=Object(f.a)(l,1)[0],d=de(),u=Object(f.a)(d,2),s=u[0];Object(y.a)(u[1]);var m=P(),p=m.loading,v=m.error,h=m.data,b=Object(a.useState)({}),O=Object(f.a)(b,2),I=O[0],C=O[1];Object(a.useEffect)((function(){C(n)}),[n]),Object(a.useEffect)((function(){return o.setFieldsValue({name:n.name,price:n.price,images:n.images,icon:n.icon}),function(){o.resetFields()}}),[n]);var j=function(e){var t=e.target,n=t.name,a=t.value;C(Object(F.a)({},I,Object(N.a)({},n,a)))};if(p)return r.a.createElement("div",null,"Loading...");if(v||!h)return r.a.createElement("div",null,"Error...");var A=h.categoriesAll,k=null===A||void 0===A?void 0:A.filter((function(e){return(null===e||void 0===e?void 0:e.id)!==S}));return r.a.createElement(E.a,{title:"Product information id: ".concat(I.id),visible:Boolean(i),footer:!1,onCancel:function(){c(!1),t()}},r.a.createElement(K.a,Object.assign({form:o,name:"product"},fe,{onFinish:function(e){var t=e.name,n=e.categoryId,a=e.images,r=e.icon,i=String(null===I||void 0===I?void 0:I.id),l=ne(String(e.price));s({variables:{id:i,name:t,price:l,categoryId:String(n),images:a,icon:r}}).then((function(e){return console.log("updateProductMESSAGE:",e)})).catch((function(e){return console.log("updateProductERROR:",e)})),c(!1)}}),r.a.createElement(K.a.Item,{label:"Name product",name:"name",value:String(null===I||void 0===I?void 0:I.name),rules:[{required:!0,message:"Name product is required"}]},r.a.createElement(Y.a,{onChange:j,placeholder:"name product",style:{width:"100%",marginRight:8}})),r.a.createElement(K.a.Item,{label:"Price",name:"price",rules:[{required:!0,message:"Price is required"}]},r.a.createElement(Y.a,{type:"number",placeholder:"Price $",style:{width:"100%",marginRight:8}})),r.a.createElement(K.a.Item,{label:"Category",name:"categoryId",onChange:j,rules:[{required:!0,message:"Category is required"}]},r.a.createElement(pe.a,{placeholder:"Select category"},null===k||void 0===k?void 0:k.map((function(e){return r.a.createElement(pe.a.Option,{key:String(null===e||void 0===e?void 0:e.id),firstActiveValue:"nike",value:String(null===e||void 0===e?void 0:e.id)},String(null===e||void 0===e?void 0:e.name))})))),r.a.createElement(K.a.List,{name:"images"},(function(e,t){var n=t.add,a=t.remove;return r.a.createElement("div",null,e.map((function(t,n){return r.a.createElement(K.a.Item,Object.assign({},0===n?ye:fe,{label:0===n?"Images":"",required:!1,key:t.key}),r.a.createElement(K.a.Item,Object.assign({},t,{validateTrigger:["onChange","onBlur"],rules:[{required:!0,whitespace:!0,message:"Please input image url or delete this field."}],noStyle:!0}),r.a.createElement(Y.a,{value:I.images[n],placeholder:"image url",style:{width:"90%",marginRight:8}})),e.length>1?r.a.createElement(J.a,{className:"dynamic-delete-button",onClick:function(){a(t.name)}}):r.a.createElement("span",null))})),r.a.createElement(K.a.Item,null,r.a.createElement(g.a,{type:"dashed",onClick:function(){n()},style:{width:"80%"}},r.a.createElement(H.a,null)," Add image url")))})),r.a.createElement(K.a.Item,{label:"Icon",name:"icon"},r.a.createElement(Y.a,{onChange:j,placeholder:"icon url",style:{width:"100%",marginRight:8}})),r.a.createElement(g.a,{type:"primary",htmlType:"submit"},"Submit")))}));function Ee(){var e=Object(h.a)(["\n    mutation AddProduct($name: String!, $price: Float!, $categoryId: ID!, $images: [String], $icon: String) {\n  addProduct(name: $name, price: $price, categoryId: $categoryId, images: $images, icon: $icon) {\n    id\n    name\n    price\n    images\n    icon\n    category {\n      id\n      name\n      icons\n    }\n  }\n}\n    "]);return Ee=function(){return e},e}var he=O()(Ee());var be={labelCol:{xs:{span:24},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:20}}},Oe={wrapperCol:{xs:{span:24,offset:0},sm:{span:20,offset:4}}},Ie=Object(l.b)((function(e){return{isOpenAddProductModal:e.add_product_modal.isOpen}}),{setIsOpenAddProductModal:M})((function(e){var t,n=e.isOpenAddProductModal,i=e.setIsOpenAddProductModal,c=(t={update:function(e,t){var n=t.data.addProduct,a=e.readQuery({query:W}).productsAll.productsAll;e.writeQuery({query:W,data:{productsAll:null===a||void 0===a?void 0:a.concat([n])}})},refetchQueries:[{query:W}]},I.b(he,t)),l=Object(f.a)(c,2),o=l[0],d=(l[1].data,P()),u=d.loading,s=d.error,m=d.data,p=Object(a.useState)({}),y=Object(f.a)(p,2),v=y[0],h=y[1];console.log("values+++",v);var b=function(e){var t=e.target,n=t.name,a=t.value;console.log("target",e.target),h(Object(F.a)({},v,Object(N.a)({},n,a)))};if(u)return r.a.createElement("div",null,"Loading...");if(s||!m)return r.a.createElement("div",null,"Error...");var O=m.categoriesAll,C=null===O||void 0===O?void 0:O.filter((function(e){return(null===e||void 0===e?void 0:e.id)!==S}));return console.log("isOpenAddProductModal",n),r.a.createElement(E.a,{title:"Product information",visible:Boolean(n),footer:!1,onCancel:function(){i(!1)}},r.a.createElement(K.a,Object.assign({name:"product"},Oe,{onFinish:function(e){console.log("Received values of form:",v);var t=v.name,n=v.categoryId,a=v.icon,r=ne(v.price);console.log("onFinish"),o({variables:{name:t,price:r,categoryId:n,images:e.images?e.images:[A],icon:a}}).then((function(e){return console.log("addProduct:",e)})).catch((function(e){return console.log("addProductERROR:",e)})),i(!1)}}),r.a.createElement(K.a.Item,{label:"Name product",rules:[{required:!0,message:"Name product is required"}]},r.a.createElement(Y.a,{name:"name",onChange:b,placeholder:"name product",style:{width:"100%",marginRight:8}})),r.a.createElement(K.a.Item,{label:"Price",rules:[{required:!0,message:"Price is required"}]},r.a.createElement(Y.a,{name:"price",onChange:b,type:"number",placeholder:"Price $",style:{width:"100%",marginRight:8}})),r.a.createElement(K.a.Item,{label:"Category",name:"categoryId",rules:[{required:!0,message:"Category is required"}]},r.a.createElement(pe.a,{onChange:function(e){h(Object(F.a)({},v,{categoryId:e}))},placeholder:"Select category"},null===C||void 0===C?void 0:C.map((function(e){return r.a.createElement(pe.a.Option,{key:String(null===e||void 0===e?void 0:e.id),value:String(null===e||void 0===e?void 0:e.id),onChange:b},String(null===e||void 0===e?void 0:e.name))})))),r.a.createElement(K.a.List,{name:"images"},(function(e,t){var n=t.add,a=t.remove;return r.a.createElement("div",null,e.map((function(t,n){return r.a.createElement(K.a.Item,Object.assign({},0===n?be:Oe,{label:0===n?"Images":"",required:!1,key:t.key}),r.a.createElement(K.a.Item,Object.assign({},t,{validateTrigger:["onChange","onBlur"],rules:[{required:!0,whitespace:!0,message:"Please input image url or delete this field."}],noStyle:!0}),r.a.createElement(Y.a,{style:{width:"90%",marginRight:8}})),e.length>=1?r.a.createElement(J.a,{className:"dynamic-delete-button",onClick:function(){a(t.name)}}):r.a.createElement("span",null))})),r.a.createElement(K.a.Item,null,r.a.createElement(g.a,{type:"dashed",onClick:function(){n()},style:{width:"80%"}},r.a.createElement(H.a,null)," Add image url")))})),r.a.createElement(K.a.Item,{label:"Icon",name:"icon"},r.a.createElement(Y.a,{onChange:b,placeholder:"icon url",style:{width:"100%",marginRight:8}})),r.a.createElement(g.a,{type:"primary",htmlType:"submit"},"Submit")))})),Ce=Object(l.b)(null,{setIsOpenAddProductModal:M,clearEditProduct:$})((function(e){var t=e.setIsOpenAddProductModal,n=e.clearEditProduct;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Products"),r.a.createElement(ge,null),r.a.createElement(ve,null),r.a.createElement(Ie,null),r.a.createElement(m.a,{title:"Add Product"},r.a.createElement(g.a,{onClick:function(){n(),t(!0)},type:"dashed",shape:"circle",style:{position:"fixed",bottom:"50px",right:"50px",color:"#08c"}},r.a.createElement(p.a,{style:{fontSize:"22px",color:"#08c"}}))))})),je=function(e){var t=e.categoryById,n=e.productsByCategoryId;return 0===n.length?r.a.createElement("img",{src:String(t.icons[0]),width:15,alt:"recycle bin"}):n.length>0?r.a.createElement("img",{src:String(t.icons[3]),width:15,alt:"recycle bin"}):void 0},Pe=n(96);function Se(){var e=Object(h.a)(["\n    query productsByCategoryId($categoryId: ID!){\n        productsByCategoryId(categoryId: $categoryId){\n            id\n            name\n            price\n            images\n            icon\n            category{\n                id\n                name\n                icons\n            }\n        }\n    }\n"]);return Se=function(){return e},e}function Ae(){var e=Object(h.a)(["\n    query productsAll{\n        productsAll{\n            id\n            name\n            price\n            images\n            icon\n            category{\n                id\n                name\n                icons\n            }\n        }\n    }\n"]);return Ae=function(){return e},e}Object(Pe.b)(Ae());var ke=Object(Pe.b)(Se());function _e(){var e=Object(h.a)(["\n    mutation DeleteProduct($id: ID!) {\n  deleteProduct(id: $id) {\n    id\n    name\n    price\n    images\n    icon\n    category {\n      id\n      name\n      icons\n    }\n  }\n}\n    "]);return _e=function(){return e},e}var De=O()(_e());var Re={width:"50px",height:"100%",marginRight:"10px"},we=Object(l.b)((function(e){return{edited_product:e.edit_product.product}}),{editProduct:x,clearEditProduct:$})((function(e){var t,n=e.clearEditProduct,i=e.editProduct,c=e.edited_product,l=me({variables:{categoryId:S}}),o=l.loading,d=l.error,u=l.data,s=P(),p=s.loading,h=s.error,b=s.data,O=Object(a.useState)({}),C=Object(f.a)(O,2),j=C[0],A=C[1],k=Object(a.useState)(!1),_=Object(f.a)(k,2),D=_[0],R=_[1],w=Object(a.useState)(!1),q=Object(f.a)(w,2),x=q[0],$=q[1],B=Object(a.useState)({}),M=Object(f.a)(B,2),T=M[0],L=M[1],U=(t={refetchQueries:[{query:ke,variables:{categoryId:S}}]},I.b(De,t)),Q=Object(f.a)(U,2),W=Q[0];Object(y.a)(Q[1]);var G=de({refetchQueries:[{query:ke,variables:{categoryId:S}}]}),Y=Object(f.a)(G,2),z=Y[0];if(Object(y.a)(Y[1]),p)return r.a.createElement("div",null,"Loading...");if(h||!b)return r.a.createElement("div",null,"Error...");var J=b.categoriesAll,V=null===J||void 0===J?void 0:J.filter((function(e){return(null===e||void 0===e?void 0:e.id)!==S}));if(console.log("productDeleted",T),o)return r.a.createElement("div",null,"Loading...");if(d||!u)return r.a.createElement("div",null,"Error...");var H=u.productsByCategoryId;console.log("productsByCategoryId",null===u||void 0===u?void 0:u.productsByCategoryId);var X=[{title:"Name",dataIndex:"name",key:"name"},{title:"ID",dataIndex:"id",key:"id"},{title:"Price",dataIndex:"price",key:"price",render:function(e){return ae(e)}},{title:"Images",dataIndex:"images",key:"images",render:function(e){return e?r.a.createElement("div",null,e.map((function(e){return r.a.createElement("img",{key:String(e),alt:"img",src:String(e),style:Re})}))):r.a.createElement("span",null,"no images")}},{title:"Actions",dataIndex:"id",key:"id",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{title:"Recovery this product in any category"},r.a.createElement(g.a,{onClick:function(){return function(e){i(null===H||void 0===H?void 0:H.find((function(t){return t.id===e}))),$(!0)}(e)},type:"dashed"},"Recovery in category")),r.a.createElement(m.a,{title:"Delete forever"},r.a.createElement(g.a,{onClick:function(){return function(e){R(!0),L(null===H||void 0===H?void 0:H.find((function(t){return t.id===e})))}(e)},type:"dashed",danger:!0},"Delete")))}}];return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{dataSource:H,columns:X,rowKey:"id"}),r.a.createElement(E.a,{title:"Delete product?",visible:D,onOk:function(){return e=T.id,console.log("productDeleted.id",T.id),W({variables:{id:String(e)}}).then((function(e){return console.log("deleteProduct response:",e)})),void R(!1);var e},onCancel:function(){R(!1)}},r.a.createElement("p",null,T.name)),r.a.createElement(E.a,{footer:!1,title:"Restore in category?",visible:x,onCancel:function(){n(),$(!1)}},r.a.createElement(K.a,{name:"restore",onFinish:function(e){console.log("Received values of form:",j);var t=e.categoryId,n=c.name,a=c.images,r=c.price,i=c.icon,l=String(c.id);console.log("onFinish",e),z({variables:{id:l,name:n,price:r,categoryId:t,images:a,icon:i}}).then((function(e){console.log("updateProductMESSAGE:",e)})).catch((function(e){return console.log("updateProductERROR:",e)})),$(!1)}},r.a.createElement(K.a.Item,{label:"Category",name:"categoryId",onChange:function(e){var t=e.target,n=t.name,a=t.value;A(Object(F.a)({},j,Object(N.a)({},n,a)))},rules:[{required:!0,message:"Category is required"}]},r.a.createElement(pe.a,{placeholder:"Select category"},null===V||void 0===V?void 0:V.map((function(e){return r.a.createElement(pe.a.Option,{key:null===e||void 0===e?void 0:e.id},null===e||void 0===e?void 0:e.name)})))),r.a.createElement(g.a,{type:"primary",htmlType:"submit"},"Restore"))))})),qe=n(404);function xe(){var e=Object(h.a)(["\n    mutation ClearRecycleBin {\n  clearRecycleBin {\n    __typename\n  }\n}\n    "]);return xe=function(){return e},e}var $e=O()(xe());var Be=function(){var e,t=Object(a.useState)(!1),n=Object(f.a)(t,2),i=n[0],c=n[1],l=(e={refetchQueries:[{query:se,variables:{categoryId:S}}]},I.b($e,e)),o=Object(f.a)(l,1)[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:{display:"inline-block"}},"Recycle bin"),r.a.createElement(m.a,{title:"Delete all products from recycle bin forever"},r.a.createElement(g.a,{style:{float:"right"},onClick:function(){c(!0)},type:"dashed",danger:!0,icon:r.a.createElement(qe.a,null)},"Clear recycle bin")),r.a.createElement(E.a,{title:"Clear recycle bin?",visible:Boolean(i),onOk:function(){o().then(),c(!1)},onCancel:function(){c(!1)}},r.a.createElement(qe.a,null),"..."),r.a.createElement(we,null))};function Me(){var e=Object(h.a)(["\n    query CategoryById($id: ID) {\n  categoryById(id: $id) {\n    id\n    name\n    icons\n  }\n}\n    "]);return Me=function(){return e},e}var Te=O()(Me());var Ne=u.a.TabPane;function Fe(e){console.log(e)}var Le=function(){var e,t=P(),n=t.loading,a=t.error,i=t.data,c=G(),l=c.loading,o=c.error,d=c.data,m=me({variables:{categoryId:S}}),g=m.loading,p=m.error,y=m.data,f=me({variables:{categoryId:S}}),v=f.loading,E=f.error,h=f.data,b=(e={variables:{id:S}},I.c(Te,e)),O=b.loading,C=b.error,j=b.data;if(n||l||v||g||O)return r.a.createElement("div",null,"Loading...");if(a||o||p||E||C||!i||!d||!h||!j||!y)return r.a.createElement("div",null,"Error.");var A=h.productsByCategoryId,k=j.categoryById;return r.a.createElement(u.a,{defaultActiveKey:"1",onChange:Fe},r.a.createElement(u.a.TabPane,{tab:"Products",key:"1"},r.a.createElement(Ce,null)),r.a.createElement(Ne,{tab:"Categories",key:"2"},r.a.createElement(te,null)),r.a.createElement(Ne,{tab:r.a.createElement("span",null,r.a.createElement(je,{categoryById:k,productsByCategoryId:A}),"Recycle bin"),key:"3"},0===(null===A||void 0===A?void 0:A.length)?r.a.createElement(s.a,null):r.a.createElement(Be,null)))},Ue=(n(390),n(391),function(){return console.log("app.tsx"),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",null,r.a.createElement("code",null,"APP")),r.a.createElement("a",{className:"App-link",href:"https://glacial-mesa-30936.herokuapp.com/graphql",target:"_blank",rel:"noopener noreferrer"},"BASE_URL")),r.a.createElement(Le,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Qe=new(n(69).a),We=new Pe.a({cache:Qe,uri:"https://glacial-mesa-30936.herokuapp.com/graphql"}),Ge=n(59),Ke={isOpen:!1},Ye={isOpen:!1},ze={isOpen:!1},Je={isOpen:!1},Ve={product:{}},He=Object(Ge.combineReducers)({add_cat_modal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS_OPEN_ADD_CATEGORY_MODAL":return Object(F.a)({},e,{isOpen:t.payload});default:return e}},edit_cat_modal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS_OPEN_EDIT_CATEGORY_MODAL":return Object(F.a)({},e,{isOpen:t.payload});default:return e}},edit_product_modal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS_OPEN_EDIT_PRODUCT_MODAL":return Object(F.a)({},e,{isOpen:t.payload});default:return e}},add_product_modal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS_OPEN_ADD_PRODUCT_MODAL":return Object(F.a)({},e,{isOpen:t.payload});default:return e}},edit_product:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"EDIT_PRODUCT":return Object(F.a)({},e,{product:t.payload});case"CLEAR_EDIT_PRODUCT":return Object(F.a)({},Ve);default:return e}}}),Xe=n(199),Ze=Object(Xe.composeWithDevTools)(),et=Object(Ge.createStore)(He,{},Ze);c.a.render(r.a.createElement(l.a,{store:et},r.a.createElement(o.a,{client:We},r.a.createElement(d.a,{client:We},r.a.createElement(Ue,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[204,1,2]]]);
//# sourceMappingURL=main.ffee1e18.chunk.js.map