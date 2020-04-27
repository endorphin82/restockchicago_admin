(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[0],{205:function(e,t,a){e.exports=a(395)},214:function(e,t,a){},392:function(e,t,a){},395:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),l=a.n(i),c=a(27),o=a(398),d=a(32),u=(a(214),a(401)),s=a(85),m=a(201),g=a(39),p=a(405),E=a(17),y=a(23),f=a(10),v=a(402),h=a(400),b=a(403),O=a(95),C=a(42),_=a.n(C),I=a(46),S=a.n(I),j=function(e){return{type:"EDIT_PRODUCT",payload:e}},P=function(){return{type:"CLEAR_EDIT_PRODUCT"}},A=function(e){return{type:"IS_OPEN_EDIT_PRODUCT_MODAL",payload:e}},k=function(e){return{type:"IS_OPEN_ADD_PRODUCT_MODAL",payload:e}},R=function(e){return{type:"IS_OPEN_EDIT_CATEGORY_MODAL",payload:e}},w=function(e){return{type:"IS_OPEN_ADD_CATEGORY_MODAL",payload:e}},D=function(e){return Math.round(100*parseFloat(e.replace(/[$,]/g,"")))},$=function(e){return Number(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"})};var q=String("recyclebin"),x=String("https://endorphin82.github.io/restockchicago-img/img/no-image/no-image-available.svg"),T=String("https://glacial-mesa-30936.herokuapp.com/graphql"),M=a(25),B=a(24),N=a.n(B),L=a(18);function F(){var e=Object(M.a)(["\n    mutation AddProduct($name: String!, $price: Float!, $categories: [String], $images: [String], $icon: String) {\n  addProduct(name: $name, price: $price, categories: $categories, images: $images, icon: $icon) {\n    id\n    name\n    price\n    images\n    icon\n    categories\n  }\n}\n    "]);return F=function(){return e},e}var G=N()(F());function U(){var e=Object(M.a)(["\n    query ProductsAll {\n  productsAll {\n    id\n    name\n    price\n    images\n    icon\n    categories\n  }\n}\n    "]);return U=function(){return e},e}var Q=N()(U());function W(e){return L.c(Q,e)}function Y(){var e=Object(M.a)(["\n    query CategoriesAll {\n  categoriesAll {\n    _id\n    name\n    icons\n    images\n    parent\n  }\n}\n    "]);return Y=function(){return e},e}var V=N()(Y());function K(e){return L.c(V,e)}var z={labelCol:{xs:{span:24},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:20}}},J={wrapperCol:{xs:{span:24,offset:0},sm:{span:20,offset:4}}},H=Object(c.b)((function(e){return{isOpenAddProductModal:e.add_product_modal.isOpen}}),{setIsOpenAddProductModal:k})((function(e){var t,a=e.isOpenAddProductModal,i=e.setIsOpenAddProductModal,l=(t={update:function(e,t){var a=t.data.addProduct,n=e.readQuery({query:Q}).productsAll.productsAll;e.writeQuery({query:Q,data:{productsAll:null===n||void 0===n?void 0:n.concat([a])}})},refetchQueries:[{query:Q}]},L.b(G,t)),c=Object(f.a)(l,1)[0],o=K(),d=o.loading,u=o.error,s=o.data,m=Object(n.useState)({}),p=Object(f.a)(m,2),C=p[0],I=p[1];console.log("values+++",C);var j=function(e){var t=e.target,a=t.name,n=t.value;console.log("target",e.target),I(Object(y.a)({},C,Object(E.a)({},a,n)))};if(d)return r.a.createElement("div",null,"Loading...");if(u||!s)return r.a.createElement("div",null,"Error...");var P=s.categoriesAll,A=null===P||void 0===P?void 0:P.filter((function(e){return(null===e||void 0===e?void 0:e._id)!==q}));return console.log("isOpenAddProductModal",a),r.a.createElement(v.a,{title:"Product information",visible:Boolean(a),footer:!1,onCancel:function(){i(!1)}},r.a.createElement(h.a,Object.assign({name:"product"},J,{onFinish:function(e){console.log("Received values of form:",C);var t=C.name,a=C.icon,n=D(C.price);console.log("onFinish"),c({variables:{name:t,price:n,categories:e.categories,images:e.images?e.images:[x],icon:a}}).then((function(e){return console.log("addProduct:",e)})).catch((function(e){return console.log("addProductERROR:",e)})),i(!1)}}),r.a.createElement(h.a.Item,{label:"Name product",rules:[{required:!0,message:"Name product is required"}]},r.a.createElement(b.a,{name:"name",onChange:j,placeholder:"name product",style:{width:"100%",marginRight:8}})),r.a.createElement(h.a.Item,{label:"Price",rules:[{required:!0,message:"Price is required"}]},r.a.createElement(b.a,{name:"price",onChange:j,type:"number",placeholder:"Price $",style:{width:"100%",marginRight:8}})),r.a.createElement(h.a.Item,{label:"Category",name:"categories",rules:[{required:!0,message:"Category is required"}]},r.a.createElement(O.a,{onChange:function(e){I(Object(y.a)({},C,{categoryId:e}))},mode:"multiple",placeholder:"Select category"},null===A||void 0===A?void 0:A.map((function(e){return r.a.createElement(O.a.Option,{key:String(null===e||void 0===e?void 0:e._id),value:String(null===e||void 0===e?void 0:e._id),onChange:j},String(null===e||void 0===e?void 0:e._id))})))),r.a.createElement(h.a.List,{name:"images"},(function(e,t){var a=t.add,n=t.remove;return r.a.createElement("div",null,e.map((function(t,a){return r.a.createElement(h.a.Item,Object.assign({},0===a?z:J,{label:0===a?"Images":"",required:!1,key:t.key}),r.a.createElement(h.a.Item,Object.assign({},t,{validateTrigger:["onChange","onBlur"],rules:[{required:!0,whitespace:!0,message:"Please input image url or delete this field."}],noStyle:!0}),r.a.createElement(b.a,{style:{width:"90%",marginRight:8}})),e.length>=1?r.a.createElement(S.a,{className:"dynamic-delete-button",onClick:function(){n(t.name)}}):r.a.createElement("span",null))})),r.a.createElement(h.a.Item,null,r.a.createElement(g.a,{type:"dashed",onClick:function(){a()},style:{width:"80%"}},r.a.createElement(_.a,null)," Add image url")))})),r.a.createElement(h.a.Item,{label:"Icon",name:"icon"},r.a.createElement(b.a,{onChange:j,placeholder:"icon url",style:{width:"100%",marginRight:8}})),r.a.createElement(g.a,{type:"primary",htmlType:"submit"},"Submit")))})),X=a(404),Z=a(399),ee=a(117),te=a.n(ee),ae={width:"50px",height:"100%",marginRight:"10px"},ne=function(e){var t=e.handleEditProp,a=e.handleDeleteProp,n=e.productsAllWithoutRecycleBinProp,i=[{title:"Name",dataIndex:"name",key:"name"},{title:"ID",dataIndex:"id",key:"id"},{title:"Price",dataIndex:"price",key:"price",render:function(e){return $(e)}},{title:"Categories",dataIndex:"categories",key:"categories",render:function(e){return r.a.createElement("span",null,e.map((function(e){return r.a.createElement(X.a,{color:"blue",key:String(e)},e)})))}},{title:"Images",dataIndex:"images",key:"images",render:function(e){return e?r.a.createElement("div",null,e.map((function(e,t){return r.a.createElement("img",{key:String("".concat(e,"+").concat(t)),alt:"img",src:String(e),style:ae})}))):r.a.createElement("span",null,"no  images")}},{title:"Actions",dataIndex:"id",key:"id",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{title:"Edit this product"},r.a.createElement(g.a,{onClick:function(){return t(e)},type:"dashed"},"Edit")),r.a.createElement(m.a,{title:"Move to recycle bin"},r.a.createElement(g.a,{style:{float:"right"},onClick:function(){return a(e)},type:"dashed",danger:!0,icon:r.a.createElement(te.a,null)})))}}];return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z.a,{dataSource:n,columns:i,rowKey:"id"}))};function re(){var e=Object(M.a)(["\n    mutation UpdateProduct($id: ID!, $name: String!, $price: Float!, $categories: [String], $images: [String], $icon: String) {\n  updateProduct(id: $id, name: $name, price: $price, categories: $categories, images: $images, icon: $icon) {\n    id\n    name\n    price\n    images\n    icon\n    categories\n  }\n}\n    "]);return re=function(){return e},e}var ie=N()(re());function le(e){return L.b(ie,e)}function ce(){var e=Object(M.a)(["\n    query ProductsByCategoryId($id: String!) {\n  productsByCategoryId(id: $id) {\n    id\n    name\n    price\n    images\n    icon\n    categories\n  }\n}\n    "]);return ce=function(){return e},e}var oe=N()(ce());function de(e){return L.c(oe,e)}var ue=b.a.Search,se=function(e){e.searchname;var t=e.handleChange,a=e.handleSearch,n=e.handleEnterSearch;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ue,{onChange:t,onKeyPress:n,placeholder:"input search text",onSearch:function(e){return a(e)},style:{width:300}}))};function me(){var e=Object(M.a)(["\n    query ProductsByName($name: String!) {\n  productsByName(name: $name) {\n    id\n    name\n    price\n    images\n    icon\n    categories\n  }\n}\n    "]);return me=function(){return e},e}var ge=N()(me());var pe=Object(c.b)(null,{setIsOpenEditProductModal:A,editProduct:j})((function(e){var t,a=e.editProduct,i=e.setIsOpenEditProductModal,l=W(),c=l.loading,o=(l.error,l.data,le({refetchQueries:[{query:oe,variables:{id:q}}]})),d=Object(f.a)(o,1)[0],u=Object(n.useState)(""),s=Object(f.a)(u,2),m=s[0],g=s[1],p=(t={variables:{name:m}},L.c(ge,t)),E=(p.loading,p.error),y=p.data,h=Object(n.useState)(!1),b=Object(f.a)(h,2),O=b[0],C=b[1],_=Object(n.useState)({}),I=Object(f.a)(_,2),S=I[0],j=I[1];if(console.log("productDeleted",S),c)return r.a.createElement("div",null,"Loading...");if(E||!y)return r.a.createElement("div",null,"Error...");var P=y.productsByName,A=null===P||void 0===P?void 0:P.filter((function(e){var t;return!(null===e||void 0===e||null===(t=e.categories)||void 0===t?void 0:t.includes(q))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(se,{searchname:m,handleChange:function(e){},handleEnterSearch:function(e){13===e.charCode&&g(e.target.value)},handleSearch:function(e){g(e)}}),r.a.createElement(ne,{productsAllWithoutRecycleBinProp:A,handleEditProp:function(e){var t=null===A||void 0===A?void 0:A.find((function(t){return t.id===e}));a(t),i(!0)},handleDeleteProp:function(e){C(!0),j(A.find((function(t){return t.id===e})))}}),r.a.createElement(v.a,{title:"Delete product in recycle bin?",visible:Boolean(O),onOk:function(){return function(e){var t=e.id,a=e.name,n=e.price,r=e.categories,i=e.images,l=e.icon;r.push(q),d({variables:{id:t,name:a,price:n,categories:r,images:i,icon:l}}).then((function(e){return console.log("updateProductMESSAGE:",e)})).catch((function(e){return console.log("updateProductERROR:",e)})),C(!1)}(S)},onCancel:function(){C(!1)}},r.a.createElement("p",null,S.id)))})),Ee={labelCol:{xs:{span:24},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:20}}},ye={wrapperCol:{xs:{span:24,offset:0},sm:{span:20,offset:4}}},fe=Object(c.b)((function(e){return{isOpenEditProductModal:e.edit_product_modal.isOpen,edited_product:e.edit_product.product}}),{setIsOpenEditProductModal:A,clearEditProduct:P})((function(e){var t=e.clearEditProduct,a=e.edited_product,i=e.isOpenEditProductModal,l=e.setIsOpenEditProductModal,c=h.a.useForm(),o=Object(f.a)(c,1)[0],d=le(),u=Object(f.a)(d,1)[0],s=K(),m=s.loading,p=s.error,C=s.data,I=Object(n.useState)({}),j=Object(f.a)(I,2),P=j[0],A=j[1];Object(n.useEffect)((function(){A(a)}),[a]),Object(n.useEffect)((function(){return o.setFieldsValue({name:a.name,price:a.price,images:a.images,icon:a.icon,categories:a.categories}),function(){o.resetFields()}}),[a,o]);var k=function(e){var t=e.target,a=t.name,n=t.value;A(Object(y.a)({},P,Object(E.a)({},a,n)))};if(m)return r.a.createElement("div",null,"Loading...");if(p||!C)return r.a.createElement("div",null,"Error...");var R=C.categoriesAll,w=null===R||void 0===R?void 0:R.filter((function(e){return(null===e||void 0===e?void 0:e._id)!==q}));return r.a.createElement(v.a,{title:"Product information id: ".concat(P.id),visible:Boolean(i),footer:!1,onCancel:function(){l(!1),t()}},r.a.createElement(h.a,Object.assign({form:o,name:"product"},ye,{onFinish:function(e){var t=e.name,a=e.categories,n=e.images,r=e.icon,i=String(null===P||void 0===P?void 0:P.id),c=D(String(e.price));u({variables:{id:i,name:t,price:c,categories:a,images:n,icon:r}}).then((function(e){return console.log("updateProductMESSAGE:",e)})).catch((function(e){return console.log("updateProductERROR:",e)})),l(!1)}}),r.a.createElement(h.a.Item,{label:"Name product",name:"name",value:String(null===P||void 0===P?void 0:P.name),rules:[{required:!0,message:"Name product is required"}]},r.a.createElement(b.a,{onChange:k,placeholder:"name product",style:{width:"100%",marginRight:8}})),r.a.createElement(h.a.Item,{label:"Price",name:"price",rules:[{required:!0,message:"Price is required"}]},r.a.createElement(b.a,{type:"number",placeholder:"Price $",style:{width:"100%",marginRight:8}})),r.a.createElement(h.a.Item,{label:"Categories",name:"categories",onChange:k,rules:[{required:!0,message:"Category is required"}]},r.a.createElement(O.a,{mode:"multiple",placeholder:"Select category"},null===w||void 0===w?void 0:w.map((function(e){return r.a.createElement(O.a.Option,{defaultValue:a.categories,key:String(null===e||void 0===e?void 0:e._id),value:String(null===e||void 0===e?void 0:e._id)},String(null===e||void 0===e?void 0:e.name))})))),r.a.createElement(h.a.List,{name:"images"},(function(e,t){var a=t.add,n=t.remove;return r.a.createElement("div",null,e.map((function(t,a){return r.a.createElement(h.a.Item,Object.assign({},0===a?Ee:ye,{label:0===a?"Images":"",required:!1,key:t.key}),r.a.createElement(h.a.Item,Object.assign({},t,{validateTrigger:["onChange","onBlur"],rules:[{required:!0,whitespace:!0,message:"Please input image url or delete this field."}],noStyle:!0}),r.a.createElement(b.a,{value:P.images[a],placeholder:"image url",style:{width:"90%",marginRight:8}})),e.length>1?r.a.createElement(S.a,{className:"dynamic-delete-button",onClick:function(){n(t.name)}}):r.a.createElement("span",null))})),r.a.createElement(h.a.Item,null,r.a.createElement(g.a,{type:"dashed",onClick:function(){a()},style:{width:"80%"}},r.a.createElement(_.a,null)," Add image url")))})),r.a.createElement(h.a.Item,{label:"Icon",name:"icon"},r.a.createElement(b.a,{onChange:k,placeholder:"icon url",style:{width:"100%",marginRight:8}})),r.a.createElement(g.a,{type:"primary",htmlType:"submit"},"Submit")))})),ve=Object(c.b)(null,{setIsOpenAddProductModal:k,clearEditProduct:P})((function(e){var t=e.setIsOpenAddProductModal,a=e.clearEditProduct;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Products"),r.a.createElement(pe,null),r.a.createElement(fe,null),r.a.createElement(H,null),r.a.createElement(m.a,{title:"Add Product"},r.a.createElement(g.a,{onClick:function(){a(),t(!0)},type:"dashed",shape:"circle",style:{position:"fixed",bottom:"50px",right:"50px",color:"#08c"}},r.a.createElement(p.a,{style:{fontSize:"22px",color:"#08c"}}))))}));function he(){var e=Object(M.a)(["\n    query CategoryById($_id: String) {\n  categoryById(_id: $_id) {\n    _id\n    name\n    icons\n    images\n    parent\n  }\n}\n    "]);return he=function(){return e},e}var be=N()(he());function Oe(){var e=Object(M.a)(["\n    mutation DeleteCascadeCategoryWithProductsById($_id: String!) {\n  deleteCascadeCategoryWithProductsById(_id: $_id) {\n    __typename\n  }\n}\n    "]);return Oe=function(){return e},e}var Ce=N()(Oe());var _e={width:"20px",height:"100%",marginRight:"10px"},Ie=Object(c.b)(null,{editCategory:function(e){return{type:"EDIT_CATEGORY",payload:e}},setIsOpenEditCategoryModal:R})((function(e){var t,a=e.editCategory,i=e.setIsOpenEditCategoryModal,l=K(),c=l.loading,o=l.error,d=l.data,u=(t={refetchQueries:[{query:V}]},L.b(Ce,t)),s=Object(f.a)(u,1)[0],p=Object(n.useState)(!1),E=Object(f.a)(p,2),y=E[0],h=E[1],b=Object(n.useState)({}),O=Object(f.a)(b,2),C=O[0],_=O[1];if(c)return r.a.createElement("div",null,"Loading...");if(o||!d)return r.a.createElement("div",null,"Error...");var I=d.categoriesAll,S=null===I||void 0===I?void 0:I.filter((function(e){return e._id!==q})),j=[{title:"Name",dataIndex:"name",key:"name"},{title:"ID",dataIndex:"_id",key:"_id"},{title:"Parent",dataIndex:"parent",key:"parent",render:function(e){return e?r.a.createElement("span",null,r.a.createElement(X.a,{color:"green",key:String(e)},e)):null}},{title:"Icons",dataIndex:"icons",key:"icons",render:function(e){return 0!==e.length?r.a.createElement("div",null,e.map((function(e){return r.a.createElement("img",{key:String(e),alt:"img",src:String(e),style:_e})}))):r.a.createElement("span",null,"no icons")}},{title:"Images",dataIndex:"images",key:"images",render:function(e){return 0!==e.length?r.a.createElement("div",null,e.map((function(e){return r.a.createElement("img",{key:String(e),alt:"img",src:String(e),style:_e})}))):r.a.createElement("span",null,"no images")}},{title:"Actions",dataIndex:"_id",key:"_id",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{title:"Edit this category"},r.a.createElement(g.a,{onClick:function(){return function(e){var t=null===S||void 0===S?void 0:S.find((function(t){return t._id===e}));a(t),i(!0)}(e)},type:"dashed"},"Edit")),r.a.createElement(m.a,{title:"Delete Category With All Products"},r.a.createElement(g.a,{style:{float:"right"},onClick:function(){return function(e){h(!0),_(S.find((function(t){return t._id===e})))}(String(e))},type:"dashed",danger:!0,icon:r.a.createElement(te.a,null)})))}}];return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z.a,{dataSource:S,columns:j,rowKey:"id"}),r.a.createElement(v.a,{title:"Delete Category With All Products WITHOUT recovery!?",visible:Boolean(y),onOk:function(){return e=C._id,s({variables:{_id:String(e)}}).then((function(e){return console.log("deleteCascadeCategoryWithProductsById response:",e)})),void h(!1);var e},onCancel:function(){h(!1)}},r.a.createElement("p",null,C.name)))}));function Se(){var e=Object(M.a)(["\n    mutation AddCategory($_id: String!, $name: String!, $images: [String], $icons: [String], $parent: String) {\n  addCategory(_id: $_id, name: $name, images: $images, icons: $icons, parent: $parent) {\n    _id\n    name\n    images\n    icons\n    parent\n  }\n}\n    "]);return Se=function(){return e},e}var je=N()(Se());var Pe={labelCol:{xs:{span:24},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:20}}},Ae={wrapperCol:{xs:{span:24,offset:0},sm:{span:20,offset:4}}},ke=Object(c.b)((function(e){return{isOpenAddCategoryModal:e.add_cat_modal.isOpen}}),{setIsOpenAddCategoryModal:w})((function(e){var t,a=e.setIsOpenAddCategoryModal,i=e.isOpenAddCategoryModal,l=(t={update:function(e,t){var a=t.data.addCategory,n=e.readQuery({query:V}).categoriesAll.categoriesAll;e.writeQuery({query:V,data:{categoriesAll:null===n||void 0===n?void 0:n.concat([a])}})},refetchQueries:[{query:V}]},L.b(je,t)),c=Object(f.a)(l,1)[0],o=K(),d=o.loading,u=o.error,s=o.data,m=Object(n.useState)({}),p=Object(f.a)(m,2),C=p[0],I=p[1];if(d)return r.a.createElement("div",null,"Loading...");if(u||!s)return r.a.createElement("div",null,"Error...");var j=s.categoriesAll,P=null===j||void 0===j?void 0:j.filter((function(e){return e._id!==q})),A=function(e){var t=e.target,a=t.name,n=t.value;console.log("target",e.target),I(Object(y.a)({},C,Object(E.a)({},a,n)))};return r.a.createElement(v.a,{title:"Category information",visible:Boolean(i),footer:!1,onCancel:function(){a(!1)}},r.a.createElement(h.a,Object.assign({name:"category"},Ae,{onFinish:function(e){var t=C._id,n=C.icons,r=C.images,i=C.name;console.log("++++++++++++",e),console.log("+++V+++V++++++",C),c({variables:{_id:t,name:i,icons:n,images:r,parent:e.parent}}).then((function(e){return console.log("addCategoryMESSAGE:",e)})).catch((function(e){return console.log("addCategoryERROR:",e)})),a(!1)}}),r.a.createElement(h.a.Item,{label:"ID category",rules:[{required:!0,message:"ID category is required"}]},r.a.createElement(b.a,{name:"_id",onChange:A,placeholder:"name category",style:{width:"100%",marginRight:8}})),r.a.createElement(h.a.Item,{label:"Name category",rules:[{required:!0,message:"Name category is required"}]},r.a.createElement(b.a,{name:"name",onChange:A,placeholder:"name category",style:{width:"100%",marginRight:8}})),r.a.createElement(h.a.Item,{label:"Parent category",name:"parent",onChange:A},r.a.createElement(O.a,{placeholder:"Select category"},null===P||void 0===P?void 0:P.map((function(e){return r.a.createElement(O.a.Option,{key:String(e._id),value:String(e._id)},e._id)})))),r.a.createElement(h.a.List,{name:"icons"},(function(e,t){var a=t.add,n=t.remove;return r.a.createElement("div",null,e.map((function(t,a){return r.a.createElement(h.a.Item,Object.assign({},0===a?Pe:Ae,{label:0===a?"icons":"",required:!1,key:t.key}),r.a.createElement(h.a.Item,Object.assign({},t,{validateTrigger:["onChange","onBlur"],rules:[{required:!0,whitespace:!0,message:"Please input icon url or delete this field."}],noStyle:!0}),r.a.createElement(b.a,{style:{width:"90%",marginRight:8}})),e.length>=1?r.a.createElement(S.a,{className:"dynamic-delete-button",onClick:function(){n(t.name)}}):r.a.createElement("span",null))})),r.a.createElement(h.a.Item,null,r.a.createElement(g.a,{type:"dashed",onClick:function(){a()},style:{width:"80%"}},r.a.createElement(_.a,null)," Add icon url")))})),r.a.createElement(h.a.List,{name:"images"},(function(e,t){var a=t.add,n=t.remove;return r.a.createElement("div",null,e.map((function(t,a){return r.a.createElement(h.a.Item,Object.assign({},0===a?Pe:Ae,{label:0===a?"Images":"",required:!1,key:t.key}),r.a.createElement(h.a.Item,Object.assign({},t,{validateTrigger:["onChange","onBlur"],rules:[{required:!0,whitespace:!0,message:"Please input image url or delete this field."}],noStyle:!0}),r.a.createElement(b.a,{style:{width:"90%",marginRight:8}})),e.length>=1?r.a.createElement(S.a,{className:"dynamic-delete-button",onClick:function(){n(t.name)}}):r.a.createElement("span",null))})),r.a.createElement(h.a.Item,null,r.a.createElement(g.a,{type:"dashed",onClick:function(){a()},style:{width:"80%"}},r.a.createElement(_.a,null)," Add image url")))})),r.a.createElement(g.a,{type:"primary",htmlType:"submit"},"Submit")))}));function Re(){var e=Object(M.a)(["\n    mutation UpdateCategory($_id: String!, $name: String!, $images: [String], $icons: [String], $parent: String) {\n  updateCategory(_id: $_id, name: $name, images: $images, icons: $icons, parent: $parent) {\n    _id\n    name\n    images\n    icons\n    parent\n  }\n}\n    "]);return Re=function(){return e},e}var we=N()(Re());var De={labelCol:{xs:{span:24},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:20}}},$e={wrapperCol:{xs:{span:24,offset:0},sm:{span:20,offset:4}}},qe=Object(c.b)((function(e){return{isOpenEditCategoryModal:e.edit_cat_modal.isOpen,edited_category:e.edit_category.category}}),{setIsOpenEditCategoryModal:R,clearEditCategory:function(){return{type:"CLEAR_EDIT_CATEGORY"}}})((function(e){var t,a=e.edited_category,i=e.setIsOpenEditCategoryModal,l=e.isOpenEditCategoryModal,c=h.a.useForm(),o=Object(f.a)(c,1)[0],d=(t={refetchQueries:[{query:V},{query:Q}]},L.b(we,t)),u=Object(f.a)(d,1)[0],s=Object(n.useState)({}),m=Object(f.a)(s,2),p=m[0],C=m[1];Object(n.useEffect)((function(){C(a)}),[a]),Object(n.useEffect)((function(){return o.setFieldsValue({name:a.name,icons:a.icons,images:a.images,parent:a.parent,_id:a._id}),function(){o.resetFields()}}),[a,o]);var I=K(),j=I.loading,P=I.error,A=I.data;if(j)return r.a.createElement("div",null,"Loading...");if(P||!A)return r.a.createElement("div",null,"Error...");var k=A.categoriesAll,R=null===k||void 0===k?void 0:k.filter((function(e){return e._id!==q})),w=function(e){var t=e.target,a=t.name,n=t.value;C(Object(y.a)({},p,Object(E.a)({},a,n)))};return r.a.createElement(v.a,{title:"Category information id: ".concat(p._id),visible:Boolean(l),footer:!1,onCancel:function(){i(!1)}},r.a.createElement(h.a,Object.assign({form:o,name:"category"},$e,{onFinish:function(e){var t=e.name,a=e.images,n=e.icons,r=e.parent,l=String(null===p||void 0===p?void 0:p._id);u({variables:{_id:l,name:t,images:a,icons:n,parent:r}}).then((function(e){return console.log("updateProductMESSAGE:",e)})).catch((function(e){return console.log("updateProductERROR:",e)})),i(!1)}}),r.a.createElement(h.a.Item,{label:"ID category",name:"_id",value:String(null===p||void 0===p?void 0:p._id),rules:[{required:!0,message:"Name category is required"}]},r.a.createElement(b.a,{onChange:w,placeholder:"name category",style:{width:"100%",marginRight:8}})),r.a.createElement(h.a.Item,{label:"Name category",name:"name",value:String(null===p||void 0===p?void 0:p.name),rules:[{required:!0,message:"Name category is required"}]},r.a.createElement(b.a,{onChange:w,placeholder:"name category",style:{width:"100%",marginRight:8}})),r.a.createElement(h.a.Item,{label:"Parent category",name:"parent",onChange:w},r.a.createElement(O.a,{defaultValue:p._id,placeholder:"Select category"},null===R||void 0===R?void 0:R.map((function(e){return r.a.createElement(O.a.Option,{key:String(e._id),value:String(e._id)},e._id)})))),r.a.createElement(h.a.List,{name:"icons"},(function(e,t){var a=t.add,n=t.remove;return r.a.createElement("div",null,e.map((function(t,a){return r.a.createElement(h.a.Item,Object.assign({},0===a?De:$e,{label:0===a?"icons":"",required:!1,key:t.key}),r.a.createElement(h.a.Item,Object.assign({},t,{validateTrigger:["onChange","onBlur"],rules:[{required:!0,whitespace:!0,message:"Please input icons url or delete this field."}],noStyle:!0}),r.a.createElement(b.a,{value:p.icons[a],placeholder:"icon url",style:{width:"90%",marginRight:8}})),e.length>1?r.a.createElement(S.a,{className:"dynamic-delete-button",onClick:function(){n(t.name)}}):r.a.createElement("span",null))})),r.a.createElement(h.a.Item,null,r.a.createElement(g.a,{type:"dashed",onClick:function(){a()},style:{width:"80%"}},r.a.createElement(_.a,null)," Add icon url")))})),r.a.createElement(h.a.List,{name:"images"},(function(e,t){var a=t.add,n=t.remove;return r.a.createElement("div",null,e.map((function(t,a){return r.a.createElement(h.a.Item,Object.assign({},0===a?De:$e,{label:0===a?"Images":"",required:!1,key:t.key}),r.a.createElement(h.a.Item,Object.assign({},t,{validateTrigger:["onChange","onBlur"],rules:[{required:!0,whitespace:!0,message:"Please input image url or delete this field."}],noStyle:!0}),r.a.createElement(b.a,{value:p.images[a],placeholder:"image url",style:{width:"90%",marginRight:8}})),e.length>1?r.a.createElement(S.a,{className:"dynamic-delete-button",onClick:function(){n(t.name)}}):r.a.createElement("span",null))})),r.a.createElement(h.a.Item,null,r.a.createElement(g.a,{type:"dashed",onClick:function(){a()},style:{width:"80%"}},r.a.createElement(_.a,null)," Add image url")))})),r.a.createElement(g.a,{type:"primary",htmlType:"submit"},"Submit")))})),xe=Object(c.b)(null,{setIsOpenAddCategoryModal:w})((function(e){var t=e.setIsOpenAddCategoryModal;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Categories"),r.a.createElement(Ie,null),r.a.createElement(qe,null),r.a.createElement(ke,null),r.a.createElement(m.a,{title:"Add Category"},r.a.createElement(g.a,{onClick:function(){t(!0)},type:"dashed",shape:"circle",style:{position:"fixed",bottom:"50px",right:"50px",color:"#08c"}},r.a.createElement(p.a,{style:{fontSize:"22px",color:"#08c"}}))))})),Te=function(e){var t=e.categoryById,a=e.productsByCategoryId;return 0===a.length?r.a.createElement("img",{src:String(t.icons[0]),width:15,alt:"recycle bin"}):a.length>0?r.a.createElement("img",{src:String(t.icons[3]),width:15,alt:"recycle bin"}):void 0},Me=a(21);function Be(){var e=Object(M.a)(["\n    mutation DeleteProduct($id: ID!) {\n  deleteProduct(id: $id) {\n    id\n    name\n    price\n    images\n    icon\n    categories\n  }\n}\n    "]);return Be=function(){return e},e}var Ne=N()(Be());var Le={width:"50px",height:"100%",marginRight:"10px"},Fe=Object(c.b)((function(e){return{edited_product:e.edit_product.product}}),{editProduct:j,clearEditProduct:P})((function(e){var t,a=e.clearEditProduct,i=e.editProduct,l=e.edited_product,c=de({variables:{id:q}}),o=c.loading,d=c.error,u=c.data,s=K(),p=s.loading,b=s.error,C=s.data,_=Object(n.useState)({}),I=Object(f.a)(_,2),S=I[0],j=I[1],P=Object(n.useState)(!1),A=Object(f.a)(P,2),k=A[0],R=A[1],w=Object(n.useState)(!1),D=Object(f.a)(w,2),x=D[0],T=D[1],M=Object(n.useState)({}),B=Object(f.a)(M,2),N=B[0],F=B[1],G=(t={refetchQueries:[{query:oe,variables:{id:q}}]},L.b(Ne,t)),U=Object(f.a)(G,1)[0],Q=le({refetchQueries:[{query:oe,variables:{id:q}}]}),W=Object(f.a)(Q,1)[0];if(p)return r.a.createElement("div",null,"Loading...");if(b||!C)return r.a.createElement("div",null,"Error...");var Y=C.categoriesAll,V=null===Y||void 0===Y?void 0:Y.filter((function(e){return(null===e||void 0===e?void 0:e._id)!==q}));if(console.log("productDeleted",N),o)return r.a.createElement("div",null,"Loading...");if(d||!u)return r.a.createElement("div",null,"Error...");var z=u.productsByCategoryId;console.log("productsByCategoryId",null===u||void 0===u?void 0:u.productsByCategoryId);var J=[{title:"Name",dataIndex:"name",key:"name"},{title:"ID",dataIndex:"id",key:"id"},{title:"Price",dataIndex:"price",key:"price",render:function(e){return $(e)}},{title:"Categories",dataIndex:"categories",key:"categories",render:function(e){return r.a.createElement("span",null,e.map((function(e){return e!==q?r.a.createElement(X.a,{color:"blue",key:String(e)},e):r.a.createElement(X.a,{color:"red",key:String(e)},e)})))}},{title:"Images",dataIndex:"images",key:"images",render:function(e){return e?r.a.createElement("div",null,e.map((function(e){return r.a.createElement("img",{key:String(e),alt:"img",src:String(e),style:Le})}))):r.a.createElement("span",null,"no images")}},{title:"Actions",dataIndex:"id",key:"id",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{title:"Recovery this product in any category"},r.a.createElement(g.a,{onClick:function(){return function(e){var t=null===z||void 0===z?void 0:z.find((function(t){return t.id===e}));if(1===t.categories.length)i(t),T(!0);else{var a=t.categories.filter((function(e){return e!==q})),n=Object(y.a)({},t,{categories:Object(Me.a)(a)}),r=n.id,l=n.name,c=n.price,o=n.categories,d=n.images,u=n.icon;console.log("productWithoutRecycleBin",n),W({variables:{id:r,name:l,price:c,categories:o,images:d,icon:u}}).then((function(e){console.log("updateProductMESSAGE:",e)})).catch((function(e){return console.log("updateProductERROR:",e)}))}}(e)},type:"dashed"},"Recovery in category")),r.a.createElement(m.a,{title:"Delete forever"},r.a.createElement(g.a,{onClick:function(){return function(e){R(!0),F(null===z||void 0===z?void 0:z.find((function(t){return t.id===e})))}(e)},type:"dashed",danger:!0},"Delete")))}}];return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z.a,{dataSource:z,columns:J,rowKey:"id"}),r.a.createElement(v.a,{title:"Delete product?",visible:k,onOk:function(){return e=N.id,console.log("productDeleted.id",N.id),U({variables:{id:String(e)}}).then((function(e){return console.log("deleteProduct response:",e)})),void R(!1);var e},onCancel:function(){R(!1)}},r.a.createElement("p",null,N.name)),r.a.createElement(v.a,{footer:!1,title:"Restore in category?",visible:x,onCancel:function(){a(),T(!1)}},r.a.createElement(h.a,{name:"restore",onFinish:function(e){var t=Object(y.a)({},l,{categories:[null===e||void 0===e?void 0:e.category]}),a=t.name,n=t.images,r=t.price,i=t.categories,c=t.icon,o=String(l.id);console.log("onFinish",l),W({variables:{id:o,name:a,price:r,categories:i,images:n,icon:c}}).then((function(e){console.log("updateProductMESSAGE:",e)})).catch((function(e){return console.log("updateProductERROR:",e)})),T(!1)}},r.a.createElement(h.a.Item,{label:"Category",name:"category",onChange:function(e){var t=e.target,a=t.name,n=t.value;j(Object(y.a)({},S,Object(E.a)({},a,n)))},rules:[{required:!0,message:"Category is required"}]},r.a.createElement(O.a,{placeholder:"Select category"},null===V||void 0===V?void 0:V.map((function(e){return r.a.createElement(O.a.Option,{key:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.name)})))),r.a.createElement(g.a,{type:"primary",htmlType:"submit"},"Restore"))))})),Ge=a(406);function Ue(){var e=Object(M.a)(["\n    mutation ClearRecycleBin {\n  clearRecycleBin {\n    __typename\n  }\n}\n    "]);return Ue=function(){return e},e}var Qe=N()(Ue());var We=function(){var e,t=Object(n.useState)(!1),a=Object(f.a)(t,2),i=a[0],l=a[1],c=(e={refetchQueries:[{query:oe,variables:{id:q}}]},L.b(Qe,e)),o=Object(f.a)(c,1)[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:{display:"inline-block"}},"Recycle bin"),r.a.createElement(m.a,{title:"Delete all products from recycle bin forever"},r.a.createElement(g.a,{style:{float:"right"},onClick:function(){l(!0)},type:"dashed",danger:!0,icon:r.a.createElement(Ge.a,null)},"Clear recycle bin")),r.a.createElement(v.a,{title:"Clear recycle bin?",visible:Boolean(i),onOk:function(){o().then(),l(!1)},onCancel:function(){l(!1)}},r.a.createElement(Ge.a,null),"..."),r.a.createElement(Fe,null))},Ye=u.a.TabPane;function Ve(e){console.log(e)}var Ke=function(){var e,t=K(),a=t.loading,n=t.error,i=t.data,l=W(),c=l.loading,o=l.error,d=l.data,m=de({variables:{id:q}}),g=m.loading,p=m.error,E=m.data,y=(e={variables:{_id:q}},L.c(be,e)),f=y.loading,v=y.error,h=y.data;if(a||c||g||f)return r.a.createElement("div",null,"Loading...");if(n||o||p||v||!i||!d||!E||!h)return r.a.createElement("div",null,"Error.");var b=E.productsByCategoryId,O=h.categoryById;return r.a.createElement(u.a,{defaultActiveKey:"1",onChange:Ve},r.a.createElement(u.a.TabPane,{tab:"Products",key:"1"},r.a.createElement(ve,null)),r.a.createElement(Ye,{tab:"Categories",key:"2"},r.a.createElement(xe,null)),r.a.createElement(Ye,{tab:r.a.createElement("span",null,r.a.createElement(Te,{categoryById:O,productsByCategoryId:b}),"Recycle bin"),key:"3"},0===(null===b||void 0===b?void 0:b.length)?r.a.createElement(s.a,null):r.a.createElement(We,null)))},ze=(a(391),a(392),function(){return console.log("app.tsx"),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",null,r.a.createElement("code",null,"APP")),r.a.createElement("a",{className:"App-link",href:T,target:"_blank",rel:"noopener noreferrer"},"BASE_URL")),r.a.createElement(Ke,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Je=a(202),He=new(a(71).a),Xe=new Je.a({cache:He,uri:"https://glacial-mesa-30936.herokuapp.com/graphql"}),Ze=a(61),et={isOpen:!1},tt={isOpen:!1},at={isOpen:!1},nt={isOpen:!1},rt={product:{}},it={category:{}},lt=Object(Ze.combineReducers)({add_cat_modal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS_OPEN_ADD_CATEGORY_MODAL":return Object(y.a)({},e,{isOpen:t.payload});default:return e}},edit_cat_modal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:at,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS_OPEN_EDIT_CATEGORY_MODAL":return Object(y.a)({},e,{isOpen:t.payload});default:return e}},edit_product_modal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS_OPEN_EDIT_PRODUCT_MODAL":return Object(y.a)({},e,{isOpen:t.payload});default:return e}},add_product_modal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS_OPEN_ADD_PRODUCT_MODAL":return Object(y.a)({},e,{isOpen:t.payload});default:return e}},edit_product:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"EDIT_PRODUCT":return Object(y.a)({},e,{product:t.payload});case"CLEAR_EDIT_PRODUCT":return Object(y.a)({},rt);default:return e}},edit_category:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:it,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"EDIT_CATEGORY":return Object(y.a)({},e,{category:t.payload});case"CLEAR_EDIT_CATEGORY":return Object(y.a)({},it);default:return e}}}),ct=a(199),ot=Object(ct.composeWithDevTools)(),dt=Object(Ze.createStore)(lt,{},ot);l.a.render(r.a.createElement(c.a,{store:dt},r.a.createElement(o.a,{client:Xe},r.a.createElement(d.a,{client:Xe},r.a.createElement(ze,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[205,1,2]]]);
//# sourceMappingURL=main.86626e48.chunk.js.map