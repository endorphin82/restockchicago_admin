(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[0],{208:function(e,t,a){e.exports=a(406)},217:function(e,t,a){},405:function(e,t,a){},406:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),l=a(41),i=a(25),d=(a(217),a(411)),u=a(81),s=a(203),m=a(34),g=a(415),p=a(23),y=a(409),E=a(38),b=a(32);function f(){var e=Object(E.a)(["\n    query categoryById($id: ID){\n        categoryById(id: $id){\n            id\n            name\n            icons\n        }\n    }\n"]);return f=function(){return e},e}function h(){var e=Object(E.a)(["\n    {\n        categoriesAll{\n            id,\n            name,\n            icons\n        }\n    }\n"]);return h=function(){return e},e}var O=Object(b.b)(h()),v=Object(b.b)(f()),I={width:"20px",height:"100%",marginRight:"10px"},j=function(){var e=Object(p.b)(O),t=e.loading,a=(e.error,e.data);if(t)return r.a.createElement("p",null,"Loading ... ");var n=a.categoriesAll;console.log(n);var c=[{title:"Name",dataIndex:"name",key:"name"},{title:"ID",dataIndex:"id",key:"id"},{title:"Icons",dataIndex:"icons",key:"icons",render:function(e){return 0!==e.length?r.a.createElement("div",null,e.map((function(e){return r.a.createElement("img",{key:e,alt:"img",src:e,style:I})}))):r.a.createElement("span",null,"no icons")}}];return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{dataSource:n,columns:c,rowKey:"id"}))},P=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Categories"),r.a.createElement(j,null),r.a.createElement(s.a,{title:"Add Category"},r.a.createElement(m.a,{type:"dashed",shape:"circle",style:{position:"fixed",bottom:"50px",right:"50px",color:"#08c"}},r.a.createElement(g.a,{style:{fontSize:"22px",color:"#08c"}}))))},_=a(91),C=a(26),A=a(412);function w(){var e=Object(E.a)(["\n    query productsByCategoryId($categoryId: ID!){\n        productsByCategoryId(categoryId: $categoryId){\n            id\n            name\n            price\n            category{\n                id\n                name\n            }\n        }\n    }\n"]);return w=function(){return e},e}function k(){var e=Object(E.a)(["\n    {\n        productsAll{\n            id,\n            name,\n            price,\n            images,\n            category{\n                id,\n                name,\n                icons\n            }\n        }\n    }\n"]);return k=function(){return e},e}var R=Object(b.b)(k()),S=Object(b.b)(w());function D(){var e=Object(E.a)(["\n    mutation clearRecycleBin {\n        clearRecycleBin{\n            name\n        }\n    }\n"]);return D=function(){return e},e}function x(){var e=Object(E.a)(["\n    mutation deleteProduct($id: ID!) {\n        deleteProduct(id: $id){\n            id\n        }\n    }\n"]);return x=function(){return e},e}function $(){var e=Object(E.a)(["\n    mutation updateProduct($id: ID!, $name: String!, $price: String!, $categoryId: ID!, $images: [String] ) {\n        updateProduct(id: $id, name: $name, price: $price, categoryId: $categoryId, images: $images ){\n            id\n            name\n            price\n            category{\n                id\n                name\n            }\n        }\n    }\n"]);return $=function(){return e},e}function B(){var e=Object(E.a)(["\n    mutation addProduct($name: String!, $price: String!, $categoryId: ID!, $images: [String] ) {\n        addProduct(name: $name, price: $price, categoryId: $categoryId, images: $images ){\n            id\n            name\n            price\n            category{\n                id\n                name\n            }\n        }\n    }\n"]);return B=function(){return e},e}var M=Object(b.b)(B()),N=Object(b.b)($()),q=Object(b.b)(x()),T=(Object(b.b)(D()),function(e){return{type:"EDIT_PRODUCT",payload:e}}),L=function(e){return{type:"IS_OPEN_EDIT_MODAL",payload:e}},F=function(e){return{type:"IS_OPEN_ADD_MODAL",payload:e}},U={width:"50px",height:"100%",marginRight:"10px"},V={width:"20px",height:"100%",marginRight:"10px"},X=Object(l.b)(null,{setIsOpenEditProductModal:L,editProduct:T},null,{pure:!1})((function(e){var t=e.editProduct,a=e.setIsOpenEditProductModal,c=Object(p.b)(R),o=c.loading,l=(c.error,c.data),i=Object(p.a)(N),d=Object(C.a)(i,2),u=d[0];Object(_.a)(d[1]);var s=Object(n.useState)(!1),g=Object(C.a)(s,2),E=g[0],b=g[1],f=Object(n.useState)({}),h=Object(C.a)(f,2),O=h[0],v=h[1],I=Object(p.a)(q),j=Object(C.a)(I,2);j[0];if(Object(_.a)(j[1]),console.log("productDeleted",O),o)return r.a.createElement("p",null,"Loading ... ");var P=l.productsAll.filter((function(e){return"5e84ad3fe6b396aef7657ca4"!==e.category.id}));console.log("productsAllWithoutRecycleBin",P);var w=[{title:"Name",dataIndex:"name",key:"name"},{title:"ID",dataIndex:"id",key:"id"},{title:"Price",dataIndex:"price",key:"price"},{title:"Category",dataIndex:"category",key:"category",render:function(e){var t=e.name,a=e.icons,n=e.id;return r.a.createElement("div",null,r.a.createElement("span",null,t," "),0!==a.length?r.a.createElement("img",{key:a[0],alt:"img",src:a[0],style:V}):"",r.a.createElement("span",null," ",n))}},{title:"Images",dataIndex:"images",key:"images",render:function(e){return 0!==e.length?r.a.createElement("div",null,e.map((function(e){return r.a.createElement("img",{key:e,alt:"img",src:e,style:U})}))):r.a.createElement("span",null,"no images")}},{title:"Actions",dataIndex:"id",key:"id",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{onClick:function(){return function(e){t(P.find((function(t){return t.id===e}))),a(!0)}(e)},type:"dashed"},"Edit"),r.a.createElement(m.a,{onClick:function(){return function(e){b(!0),v(P.find((function(t){return t.id===e})))}(e)},type:"dashed",danger:!0},"Delete"))}}];return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{dataSource:P,columns:w,rowKey:"id"}),r.a.createElement(A.a,{title:"Delete product in recycle bin?",visible:E,onOk:function(){return function(){console.log("productDeleted.id",O.id);var e=O.id,t=O.name,a=O.price,n=O.images,r=O.icon;u({variables:{id:e,name:t,price:a,categoryId:"5e84ad3fe6b396aef7657ca4",images:n,icon:r}}).then((function(e){return console.log("updateProductMESSAGE:",e)})).catch((function(e){return console.log("updateProductERROR:",e)})),b(!1)}(O.id)},onCancel:function(){b(!1)}},r.a.createElement("p",null,O.name)))})),K=a(19),W=a(36),z=a(410),G=a(414),J=a(413),Y=a(93),H=a(87),Q=a.n(H),Z=a(116),ee=a.n(Z),te={labelCol:{xs:{span:24},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:20}}},ae={wrapperCol:{xs:{span:24,offset:0},sm:{span:20,offset:4}}},ne=Object(l.b)((function(e){return{isOpenEditProductModal:e.edit_product_modal.isOpen,edited_product:e.edit_product.product}}),{setIsOpenEditProductModal:L,editProduct:T})((function(e){var t=e.edited_product,a=e.editProduct,c=e.isOpenEditProductModal,o=e.setIsOpenEditProductModal,l=z.a.useForm(),i=Object(C.a)(l,1)[0],d=Object(p.a)(N),u=Object(C.a)(d,2),s=u[0];Object(_.a)(u[1]);var g=Object(p.b)(O),y=(g.loading,g.error,g.data),E=Object(n.useState)({}),b=Object(C.a)(E,2),f=b[0],h=b[1];Object(n.useEffect)((function(){h(t),console.log("edited_product",t)}),[t]),Object(n.useEffect)((function(){return i.setFieldsValue({name:t.name,price:t.price,images:t.images,icon:t.icon}),function(){i.resetFields()}}),[t]),console.log("values+++",f);var v=function(e){var t=e.target,a=t.name,n=t.value;h(Object(W.a)({},f,Object(K.a)({},a,n)))};if(!y.categoriesAll)return r.a.createElement(G.a,null);var I=y.categoriesAll;if(!t)return r.a.createElement(G.a,null);var j=t.category;return console.log("cat",j),console.log("OpenEditProductModal",c),r.a.createElement(A.a,{title:"Product information id: ".concat(f.id),visible:c,footer:!1,onCancel:function(e){console.log(e),o(!1),a({})},forceRender:!0,destroyOnClose:!1},r.a.createElement(z.a,Object.assign({form:i,name:"product"},ae,{onFinish:function(e){console.log("Received values of form:",f);var t=e.name,a=e.categoryId,n=e.price,r=e.images,c=e.icon,l=String(f.id);console.log("onFinish",e),s({variables:{id:l,name:t,price:n,categoryId:a,images:r,icon:c}}).then((function(e){return console.log("updateProductMESSAGE:",e)})).catch((function(e){return console.log("updateProductERROR:",e)})),o(!1)}}),r.a.createElement(z.a.Item,{label:"Name product",name:"name",value:f.name,rules:[{required:!0,message:"Name product is required"}]},r.a.createElement(J.a,{onChange:v,placeholder:"name product",style:{width:"100%",marginRight:8}})),r.a.createElement(z.a.Item,{label:"Price",name:"price",rules:[{required:!0,message:"Price is required"}]},r.a.createElement(J.a,{type:"number",placeholder:"Price $",style:{width:"100%",marginRight:8}})),r.a.createElement(z.a.Item,{label:"Category",name:"categoryId",onChange:v,rules:[{required:!0,message:"Category is required"}]},r.a.createElement(Y.a,{placeholder:"Select category"},I.map((function(e){return r.a.createElement(Y.a.Option,{key:e.id,firstActiveValue:"nike"},e.name)})))),r.a.createElement(z.a.List,{name:"images"},(function(e,t){var a=t.add,n=t.remove;return r.a.createElement("div",null,e.map((function(t,a){return r.a.createElement(z.a.Item,Object.assign({},0===a?te:ae,{label:0===a?"Images":"",required:!1,key:t.key}),r.a.createElement(z.a.Item,Object.assign({},t,{validateTrigger:["onChange","onBlur"],rules:[{required:!0,whitespace:!0,message:"Please input image url or delete this field."}],noStyle:!0}),r.a.createElement(J.a,{value:f.images[a],placeholder:"image url",style:{width:"90%",marginRight:8}})),e.length>1?r.a.createElement(ee.a,{className:"dynamic-delete-button",onClick:function(){n(t.name)}}):null)})),r.a.createElement(z.a.Item,null,r.a.createElement(m.a,{type:"dashed",onClick:function(){a()},style:{width:"80%"}},r.a.createElement(Q.a,null)," Add image url")))})),r.a.createElement(z.a.Item,{label:"Icon",name:"icon"},r.a.createElement(J.a,{onChange:v,placeholder:"icon url",style:{width:"100%",marginRight:8}})),r.a.createElement(m.a,{type:"primary",htmlType:"submit"},"Submit")))})),re=(a(391),{labelCol:{xs:{span:24},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:20}}}),ce={wrapperCol:{xs:{span:24,offset:0},sm:{span:20,offset:4}}},oe=Object(l.b)((function(e){return{isOpenAddProductModal:e.add_product_modal.isOpen}}),{setIsOpenAddProductModal:F})((function(e){var t=e.isOpenAddProductModal,a=e.setIsOpenAddProductModal,c=Object(p.a)(M),o=Object(C.a)(c,2),l=o[0],i=(o[1].data,Object(p.b)(O)),d=(i.loading,i.error,i.data),u=Object(n.useState)({}),s=Object(C.a)(u,2),g=s[0],y=s[1];console.log("values+++",g);var E=function(e){var t=e.target,a=t.name,n=t.value;console.log("target",e.target),y(Object(W.a)({},g,Object(K.a)({},a,n)))},b=d.categoriesAll,f=void 0===b?[]:b;return console.log("isOpenAddProductModal",t),r.a.createElement(A.a,{title:"Product information",visible:t,footer:!1,onCancel:function(e){e.preventDefault(),console.log(e),a(!1)}},r.a.createElement(z.a,Object.assign({name:"product"},ce,{onFinish:function(e){console.log("Received values of form:",g);var t=g.name,n=(g.images,g.price),r=g.categoryId,c=g.icon;console.log("onFinish"),l({variables:{name:t,price:n,categoryId:r,images:e.images,icon:c}}).then((function(e){return console.log("addProduct:",e)})).catch((function(e){return console.log("addProductERROR:",e)})),a(!1)}}),r.a.createElement(z.a.Item,{label:"Name product",rules:[{required:!0,message:"Name product is required"}]},r.a.createElement(J.a,{name:"name",onChange:E,placeholder:"name product",style:{width:"100%",marginRight:8}})),r.a.createElement(z.a.Item,{label:"Price",rules:[{required:!0,message:"Price is required"}]},r.a.createElement(J.a,{name:"price",onChange:E,type:"number",placeholder:"Price $",style:{width:"100%",marginRight:8}})),r.a.createElement(z.a.Item,{label:"Category",name:"categoryId",rules:[{required:!0,message:"Category is required"}]},r.a.createElement(Y.a,{name:"categoryId",onChange:function(e){y(Object(W.a)({},g,{categoryId:e}))},placeholder:"Select category"},f.map((function(e){return r.a.createElement(Y.a.Option,{key:e.id,value:e.id,onChange:E},e.name)})))),r.a.createElement(z.a.List,{name:"images"},(function(e,t){var a=t.add,n=t.remove;return r.a.createElement("div",null,e.map((function(t,a){return r.a.createElement(z.a.Item,Object.assign({},0===a?re:ce,{label:0===a?"Images":"",required:!1,key:t.key}),r.a.createElement(z.a.Item,Object.assign({},t,{validateTrigger:["onChange","onBlur"],rules:[{required:!0,whitespace:!0,message:"Please input image url or delete this field."}],noStyle:!0}),r.a.createElement(J.a,{style:{width:"90%",marginRight:8}})),e.length>1?r.a.createElement(ee.a,{className:"dynamic-delete-button",onClick:function(){n(t.name)}}):null)})),r.a.createElement(z.a.Item,null,r.a.createElement(m.a,{type:"dashed",onClick:function(){a()},style:{width:"80%"}},r.a.createElement(Q.a,null)," Add image url")))})),r.a.createElement(z.a.Item,{label:"Icon",name:"icon"},r.a.createElement(J.a,{onChange:E,placeholder:"icon url",style:{width:"100%",marginRight:8}})),r.a.createElement(m.a,{type:"primary",htmlType:"submit"},"Submit")))})),le=Object(l.b)(null,{setIsOpenAddProductModal:F,editProduct:T},null,{pure:!1})((function(e){var t=e.setIsOpenAddProductModal;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Products"),r.a.createElement(X,null),r.a.createElement(ne,null),r.a.createElement(oe,null),r.a.createElement(s.a,{title:"Add Product"},r.a.createElement(m.a,{onClick:function(){T({}),t(!0)},type:"dashed",shape:"circle",style:{position:"fixed",bottom:"50px",right:"50px",color:"#08c"}},r.a.createElement(g.a,{style:{fontSize:"22px",color:"#08c"}}))))})),ie=function(e){var t=e.categoryById;return 0==e.productsByCategoryId.length?r.a.createElement("img",{src:t.icons[0],width:15,alt:"recycle bin"}):r.a.createElement("img",{src:t.icons[3],width:15,alt:"recycle bin"})},de=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Recycle bin"))},ue=d.a.TabPane;function se(e){console.log(e)}var me=function(){var e=Object(p.b)(O),t=e.loading,a=(e.cat_error,e.data),n=Object(p.b)(R),c=n.loading,o=(n.prod_error,n.data),l=Object(p.b)(S,{variables:{categoryId:"5e84ad3fe6b396aef7657ca4"}}),i=(l.loading,l.recycle_bin_error,l.data,Object(p.b)(S,{variables:{categoryId:"5e84ad3fe6b396aef7657ca4"}})),s=i.loading,m=(i.recycle_bin_prod_error,i.data),g=Object(p.b)(v,{variables:{id:"5e84ad3fe6b396aef7657ca4"}}),y=g.loading,E=(g.recycle_bin_cat_error,g.data);if(t||c||s||y)return r.a.createElement("p",null,"Loading ... ");a.categoriesAll,o.productsAll;var b=m.productsByCategoryId,f=E.categoryById;return console.log("categoryById",f),r.a.createElement(d.a,{defaultActiveKey:"1",onChange:se},r.a.createElement(d.a.TabPane,{tab:"Products",key:"1"},r.a.createElement(le,null)),r.a.createElement(ue,{tab:"Categories",key:"2"},r.a.createElement(P,null)),r.a.createElement(ue,{tab:r.a.createElement("span",null,r.a.createElement(ie,{categoryById:f,productsByCategoryId:b}),"Recycle bin"),key:"3"},0===b.length?r.a.createElement(u.a,null):r.a.createElement(de,{productsByCategoryId:b})))};a(404),a(405);var ge=function(){return console.log("after .env"),console.log("process.env.NODE_ENV ","production"),console.log("process.env.REACT_APP_BASE_URL ","https://glacial-mesa-30936.herokuapp.com/graphql"),console.log("process.env.REACT_APP_RECYCLE_BIN_ID ","5e84ad3fe6b396aef7657ca4"),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",null,r.a.createElement("code",null," APP")),r.a.createElement("a",{className:"App-link",href:"https://glacial-mesa-30936.herokuapp.com/graphql",target:"_blank",rel:"noopener noreferrer"},"BASE_URL")),r.a.createElement(me,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var pe=new b.a({uri:"https://glacial-mesa-30936.herokuapp.com/graphql"}),ye=a(65),Ee={isOpen:!1},be={isOpen:!1},fe={product:{}},he=Object(ye.b)({edit_product_modal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS_OPEN_EDIT_MODAL":return Object(W.a)({},e,{isOpen:t.payload});default:return e}},add_product_modal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS_OPEN_ADD_MODAL":return Object(W.a)({},e,{isOpen:t.payload});default:return e}},edit_product:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"EDIT_PRODUCT":return Object(W.a)({},e,{product:t.payload});default:return e}}}),Oe=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):ye.c)(),ve=Object(ye.d)(he,{},Oe);o.a.render(r.a.createElement(l.a,{store:ve},r.a.createElement(i.a,{client:pe},r.a.createElement(ge,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[208,1,2]]]);
//# sourceMappingURL=main.4e3225e1.chunk.js.map