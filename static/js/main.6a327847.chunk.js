(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[0],{211:function(e,t,a){e.exports=a(409)},220:function(e,t,a){},408:function(e,t,a){},409:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),l=a.n(c),o=a(41),i=a(26),d=(a(220),a(414)),u=a(83),s=a(207),m=a(34),g=a(418),p=a(20),y=a(412),b=a(38),f=a(32);function E(){var e=Object(b.a)(["\n    query categoryById($id: ID){\n        categoryById(id: $id){\n            id\n            name\n            icons\n        }\n    }\n"]);return E=function(){return e},e}function h(){var e=Object(b.a)(["\n    {\n        categoriesAll{\n            id,\n            name,\n            icons\n        }\n    }\n"]);return h=function(){return e},e}var O=Object(f.b)(h()),v=Object(f.b)(E()),I={width:"20px",height:"100%",marginRight:"10px"},j=function(){var e=Object(p.b)(O),t=e.loading,a=(e.error,e.data);if(t)return r.a.createElement("p",null,"Loading ... ");var n=a.categoriesAll;console.log(n);var c=[{title:"Name",dataIndex:"name",key:"name"},{title:"ID",dataIndex:"id",key:"id"},{title:"Icons",dataIndex:"icons",key:"icons",render:function(e){return 0!==e.length?r.a.createElement("div",null,e.map((function(e){return r.a.createElement("img",{key:e,alt:"img",src:e,style:I})}))):r.a.createElement("span",null,"no icons")}}];return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{dataSource:n,columns:c,rowKey:"id"}))},P=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Categories"),r.a.createElement(j,null),r.a.createElement(s.a,{title:"Add Category"},r.a.createElement(m.a,{type:"dashed",shape:"circle",style:{position:"fixed",bottom:"50px",right:"50px",color:"#08c"}},r.a.createElement(g.a,{style:{fontSize:"22px",color:"#08c"}}))))},_=a(51),C=a(22),k=a(415);function w(){var e=Object(b.a)(["\n    query productsByCategoryId($categoryId: ID!){\n        productsByCategoryId(categoryId: $categoryId){\n            id\n            name\n            price\n            category{\n                id\n                name\n            }\n        }\n    }\n"]);return w=function(){return e},e}function A(){var e=Object(b.a)(["\n    {\n        productsAll{\n            id,\n            name,\n            price,\n            images,\n            category{\n                id,\n                name,\n                icons\n            }\n        }\n    }\n"]);return A=function(){return e},e}var R=Object(f.b)(A()),S=Object(f.b)(w());function D(){var e=Object(b.a)(["\n    mutation clearRecycleBin {\n        clearRecycleBin{\n            __typename\n        }\n    }\n"]);return D=function(){return e},e}function x(){var e=Object(b.a)(["\n    mutation deleteProduct($id: ID!) {\n        deleteProduct(id: $id){\n            id\n        }\n    }\n"]);return x=function(){return e},e}function $(){var e=Object(b.a)(["\n    mutation updateProduct($id: ID!, $name: String!, $price: String!, $categoryId: ID!, $images: [String] ) {\n        updateProduct(id: $id, name: $name, price: $price, categoryId: $categoryId, images: $images ){\n            id\n            name\n            price\n            images\n            category{\n                id\n                name\n            }\n        }\n    }\n"]);return $=function(){return e},e}function B(){var e=Object(b.a)(["\n    mutation addProduct($name: String!, $price: String!, $categoryId: ID!, $images: [String] ) {\n        addProduct(name: $name, price: $price, categoryId: $categoryId, images: $images ){\n            id\n            name\n            price\n            images\n            category{\n                id\n                name\n            }\n        }\n    }\n"]);return B=function(){return e},e}var q=Object(f.b)(B()),M=Object(f.b)($()),N=Object(f.b)(x()),T=Object(f.b)(D()),F=function(e){return{type:"EDIT_PRODUCT",payload:e}},L=function(e){return{type:"IS_OPEN_EDIT_MODAL",payload:e}},U=function(e){return{type:"IS_OPEN_ADD_MODAL",payload:e}},V=a(419),K={width:"50px",height:"100%",marginRight:"10px"},Q={width:"20px",height:"100%",marginRight:"10px"},X=Object(o.b)(null,{setIsOpenEditProductModal:L,editProduct:F},null,{pure:!1})((function(e){var t=e.editProduct,a=e.setIsOpenEditProductModal,c=Object(p.b)(R),l=c.loading,o=(c.error,c.data),i=Object(p.a)(M),d=Object(C.a)(i,2),u=d[0];Object(_.a)(d[1]);var g=Object(n.useState)(!1),b=Object(C.a)(g,2),f=b[0],E=b[1],h=Object(n.useState)({}),O=Object(C.a)(h,2),v=O[0],I=O[1],j=Object(p.a)(N),P=Object(C.a)(j,2);P[0];if(Object(_.a)(P[1]),console.log("productDeleted",v),l)return r.a.createElement("p",null,"Loading ... ");var w=o.productsAll.filter((function(e){return"5e84ad3fe6b396aef7657ca4"!==e.category.id}));console.log("productsAllWithoutRecycleBin",w);var A=[{title:"Name",dataIndex:"name",key:"name"},{title:"ID",dataIndex:"id",key:"id"},{title:"Price",dataIndex:"price",key:"price"},{title:"Category",dataIndex:"category",key:"category",render:function(e){var t=e.name,a=e.icons,n=e.id;return r.a.createElement("div",null,r.a.createElement("span",null,t," "),0!==a.length?r.a.createElement("img",{key:a[0],alt:"img",src:a[0],style:Q}):"",r.a.createElement("span",null," ",n))}},{title:"Images",dataIndex:"images",key:"images",render:function(e){return 0!==e.length?r.a.createElement("div",null,e.map((function(e){return r.a.createElement("img",{key:e,alt:"img",src:e,style:K})}))):r.a.createElement("span",null,"no images")}},{title:"Actions",dataIndex:"id",key:"id",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{title:"Edit this product"},r.a.createElement(m.a,{onClick:function(){return function(e){t(w.find((function(t){return t.id===e}))),a(!0)}(e)},type:"dashed"},"Edit")),r.a.createElement(s.a,{title:"Move to recycle bin"},r.a.createElement(m.a,{style:{float:"right"},onClick:function(){return function(e){E(!0),I(w.find((function(t){return t.id===e})))}(e)},type:"dashed",danger:!0,icon:r.a.createElement(V.a,null)},"\xa0")))}}];return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{dataSource:w,columns:A,rowKey:"id"}),r.a.createElement(k.a,{title:"Delete product in recycle bin?",visible:f,onOk:function(){return function(){console.log("productDeleted.id",v.id);var e=v.id,t=v.name,a=v.price,n=v.images,r=v.icon;u({variables:{id:e,name:t,price:a,categoryId:"5e84ad3fe6b396aef7657ca4",images:n,icon:r}}).then((function(e){return console.log("updateProductMESSAGE:",e)})).catch((function(e){return console.log("updateProductERROR:",e)})),E(!1)}(v.id)},onCancel:function(){E(!1)}},r.a.createElement("p",null,v.name)))})),W=a(19),z=a(36),G=a(413),J=a(417),Y=a(416),H=a(95),Z=a(90),ee=a.n(Z),te=a(118),ae=a.n(te),ne={labelCol:{xs:{span:24},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:20}}},re={wrapperCol:{xs:{span:24,offset:0},sm:{span:20,offset:4}}},ce=Object(o.b)((function(e){return{isOpenEditProductModal:e.edit_product_modal.isOpen,edited_product:e.edit_product.product}}),{setIsOpenEditProductModal:L,editProduct:F})((function(e){var t=e.edited_product,a=e.editProduct,c=e.isOpenEditProductModal,l=e.setIsOpenEditProductModal,o=G.a.useForm(),i=Object(C.a)(o,1)[0],d=Object(p.a)(M),u=Object(C.a)(d,2),s=u[0];Object(_.a)(u[1]);var g=Object(p.b)(O),y=(g.loading,g.error,g.data),b=Object(n.useState)({}),f=Object(C.a)(b,2),E=f[0],h=f[1];Object(n.useEffect)((function(){h(t),console.log("edited_product",t)}),[t]),Object(n.useEffect)((function(){return i.setFieldsValue({name:t.name,price:t.price,images:t.images,icon:t.icon}),function(){i.resetFields()}}),[t]),console.log("values+++",E);var v=function(e){var t=e.target,a=t.name,n=t.value;h(Object(z.a)({},E,Object(W.a)({},a,n)))};if(!y.categoriesAll)return r.a.createElement(J.a,null);var I=y.categoriesAll;if(!t)return r.a.createElement(J.a,null);var j=t.category;return console.log("cat",j),console.log("OpenEditProductModal",c),r.a.createElement(k.a,{title:"Product information id: ".concat(E.id),visible:c,footer:!1,onCancel:function(e){console.log(e),l(!1),a({})},forceRender:!0,destroyOnClose:!1},r.a.createElement(G.a,Object.assign({form:i,name:"product"},re,{onFinish:function(e){console.log("Received values of form:",E);var t=e.name,a=e.categoryId,n=e.price,r=e.images,c=e.icon,o=String(E.id);console.log("onFinish",e),s({variables:{id:o,name:t,price:n,categoryId:a,images:r,icon:c}}).then((function(e){return console.log("updateProductMESSAGE:",e)})).catch((function(e){return console.log("updateProductERROR:",e)})),l(!1)}}),r.a.createElement(G.a.Item,{label:"Name product",name:"name",value:E.name,rules:[{required:!0,message:"Name product is required"}]},r.a.createElement(Y.a,{onChange:v,placeholder:"name product",style:{width:"100%",marginRight:8}})),r.a.createElement(G.a.Item,{label:"Price",name:"price",rules:[{required:!0,message:"Price is required"}]},r.a.createElement(Y.a,{type:"number",placeholder:"Price $",style:{width:"100%",marginRight:8}})),r.a.createElement(G.a.Item,{label:"Category",name:"categoryId",onChange:v,rules:[{required:!0,message:"Category is required"}]},r.a.createElement(H.a,{placeholder:"Select category"},I.map((function(e){return r.a.createElement(H.a.Option,{key:e.id,firstActiveValue:"nike"},e.name)})))),r.a.createElement(G.a.List,{name:"images"},(function(e,t){var a=t.add,n=t.remove;return r.a.createElement("div",null,e.map((function(t,a){return r.a.createElement(G.a.Item,Object.assign({},0===a?ne:re,{label:0===a?"Images":"",required:!1,key:t.key}),r.a.createElement(G.a.Item,Object.assign({},t,{validateTrigger:["onChange","onBlur"],rules:[{required:!0,whitespace:!0,message:"Please input image url or delete this field."}],noStyle:!0}),r.a.createElement(Y.a,{value:E.images[a],placeholder:"image url",style:{width:"90%",marginRight:8}})),e.length>1?r.a.createElement(ae.a,{className:"dynamic-delete-button",onClick:function(){n(t.name)}}):null)})),r.a.createElement(G.a.Item,null,r.a.createElement(m.a,{type:"dashed",onClick:function(){a()},style:{width:"80%"}},r.a.createElement(ee.a,null)," Add image url")))})),r.a.createElement(G.a.Item,{label:"Icon",name:"icon"},r.a.createElement(Y.a,{onChange:v,placeholder:"icon url",style:{width:"100%",marginRight:8}})),r.a.createElement(m.a,{type:"primary",htmlType:"submit"},"Submit")))})),le=(a(394),{labelCol:{xs:{span:24},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:20}}}),oe={wrapperCol:{xs:{span:24,offset:0},sm:{span:20,offset:4}}},ie=Object(o.b)((function(e){return{isOpenAddProductModal:e.add_product_modal.isOpen}}),{setIsOpenAddProductModal:U})((function(e){var t=e.isOpenAddProductModal,a=e.setIsOpenAddProductModal,c=Object(p.a)(q,{update:function(e,t){var a=t.data.addProduct,n=e.readQuery({query:R}).productsAll;e.writeQuery({query:R,data:{productsAll:n.concat([a])}})}}),l=Object(C.a)(c,2),o=l[0];Object(_.a)(l[1]);var i=Object(p.b)(O),d=(i.loading,i.error,i.data),u=Object(n.useState)({}),s=Object(C.a)(u,2),g=s[0],y=s[1];console.log("values+++",g);var b=function(e){var t=e.target,a=t.name,n=t.value;console.log("target",e.target),y(Object(z.a)({},g,Object(W.a)({},a,n)))},f=d.categoriesAll,E=void 0===f?[]:f;return console.log("isOpenAddProductModal",t),r.a.createElement(k.a,{title:"Product information",visible:t,footer:!1,onCancel:function(e){e.preventDefault(),console.log(e),a(!1)}},r.a.createElement(G.a,Object.assign({name:"product"},oe,{onFinish:function(e){console.log("Received values of form:",g);var t=g.name,n=(g.images,g.price),r=g.categoryId,c=g.icon;console.log("onFinish"),o({variables:{name:t,price:n,categoryId:r,images:e.images,icon:c}}).then((function(e){return console.log("addProduct:",e)})).catch((function(e){return console.log("addProductERROR:",e)})),a(!1)}}),r.a.createElement(G.a.Item,{label:"Name product",rules:[{required:!0,message:"Name product is required"}]},r.a.createElement(Y.a,{name:"name",onChange:b,placeholder:"name product",style:{width:"100%",marginRight:8}})),r.a.createElement(G.a.Item,{label:"Price",rules:[{required:!0,message:"Price is required"}]},r.a.createElement(Y.a,{name:"price",onChange:b,type:"number",placeholder:"Price $",style:{width:"100%",marginRight:8}})),r.a.createElement(G.a.Item,{label:"Category",name:"categoryId",rules:[{required:!0,message:"Category is required"}]},r.a.createElement(H.a,{name:"categoryId",onChange:function(e){y(Object(z.a)({},g,{categoryId:e}))},placeholder:"Select category"},E.map((function(e){return r.a.createElement(H.a.Option,{key:e.id,value:e.id,onChange:b},e.name)})))),r.a.createElement(G.a.List,{name:"images"},(function(e,t){var a=t.add,n=t.remove;return r.a.createElement("div",null,e.map((function(t,a){return r.a.createElement(G.a.Item,Object.assign({},0===a?le:oe,{label:0===a?"Images":"",required:!1,key:t.key}),r.a.createElement(G.a.Item,Object.assign({},t,{validateTrigger:["onChange","onBlur"],rules:[{required:!0,whitespace:!0,message:"Please input image url or delete this field."}],noStyle:!0}),r.a.createElement(Y.a,{style:{width:"90%",marginRight:8}})),e.length>1?r.a.createElement(ae.a,{className:"dynamic-delete-button",onClick:function(){n(t.name)}}):null)})),r.a.createElement(G.a.Item,null,r.a.createElement(m.a,{type:"dashed",onClick:function(){a()},style:{width:"80%"}},r.a.createElement(ee.a,null)," Add image url")))})),r.a.createElement(G.a.Item,{label:"Icon",name:"icon"},r.a.createElement(Y.a,{onChange:b,placeholder:"icon url",style:{width:"100%",marginRight:8}})),r.a.createElement(m.a,{type:"primary",htmlType:"submit"},"Submit")))})),de=Object(o.b)(null,{setIsOpenAddProductModal:U,editProduct:F},null,{pure:!1})((function(e){var t=e.setIsOpenAddProductModal;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Products"),r.a.createElement(X,null),r.a.createElement(ce,null),r.a.createElement(ie,null),r.a.createElement(s.a,{title:"Add Product"},r.a.createElement(m.a,{onClick:function(){F({}),t(!0)},type:"dashed",shape:"circle",style:{position:"fixed",bottom:"50px",right:"50px",color:"#08c"}},r.a.createElement(g.a,{style:{fontSize:"22px",color:"#08c"}}))))})),ue=function(e){var t=e.categoryById;return 0==e.productsByCategoryId.length?r.a.createElement("img",{src:t.icons[0],width:15,alt:"recycle bin"}):r.a.createElement("img",{src:t.icons[3],width:15,alt:"recycle bin"})},se={width:"50px",height:"100%",marginRight:"10px"},me=function(e){e.editProduct,e.setIsOpenEditProductModal;var t=Object(p.b)(S,{variables:{categoryId:"5e84ad3fe6b396aef7657ca4"}}),a=t.loading,c=(t.recycle_bin_prod_error,t.data),l=Object(n.useState)(!1),o=Object(C.a)(l,2),i=o[0],d=o[1],u=Object(n.useState)({}),g=Object(C.a)(u,2),b=g[0],f=g[1],E=Object(p.a)(N),h=Object(C.a)(E,2),O=h[0];if(Object(_.a)(h[1]),console.log("productDeleted",b),a)return r.a.createElement("p",null,"Loading ... ");var v=c.productsByCategoryId;console.log("productsByCategoryId",v);var I=[{title:"Name",dataIndex:"name",key:"name"},{title:"ID",dataIndex:"id",key:"id"},{title:"Price",dataIndex:"price",key:"price"},{title:"Images",dataIndex:"images",key:"images",render:function(e){return e?r.a.createElement("div",null,e.map((function(e){return r.a.createElement("img",{key:e,alt:"img",src:e,style:se})}))):r.a.createElement("span",null,"no icons")}},{title:"Actions",dataIndex:"id",key:"id",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{title:"Recovery this product in any category"},r.a.createElement(m.a,{disabled:!0,onClick:function(){},type:"dashed"},"Recovery in category")),r.a.createElement(s.a,{title:"Delete forever"},r.a.createElement(m.a,{onClick:function(){return function(e){d(!0),f(v.find((function(t){return t.id===e})))}(e)},type:"dashed",danger:!0},"Delete")))}}];return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{dataSource:v,columns:I,rowKey:"id"}),r.a.createElement(k.a,{title:"Delete product?",visible:i,onOk:function(){return b.id,console.log("productDeleted.id",b.id),O({variables:{id:b.id}}).then((function(e){return console.log("deleteProduct response:",e)})),void d(!1)},onCancel:function(){d(!1)}},r.a.createElement("p",null,b.name)))},ge=function(){var e=Object(n.useState)(!1),t=Object(C.a)(e,2),a=t[0],c=t[1],l=Object(p.a)(T,{update:function(e,t){t.data.clearRecycleBin,e.readQuery({query:S,variables:{categoryId:"5e84ad3fe6b396aef7657ca4"}}).productsByCategoryId;e.writeQuery({query:S,variables:{categoryId:"5e84ad3fe6b396aef7657ca4"},data:{productsByCategoryId:[]}})}}),o=Object(C.a)(l,1)[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:{display:"inline-block"}},"Recycle bin"),r.a.createElement(s.a,{title:"Delete all products from recycle bin forever"},r.a.createElement(m.a,{style:{float:"right"},onClick:function(){c(!0)},type:"dashed",danger:!0,icon:r.a.createElement(V.a,null)},"Clear recycle bin")),r.a.createElement(k.a,{title:"Clear recycle bin?",visible:a,onOk:function(){o().then((function(e){return console.log("Cleared recycle bin")})),c(!1)},onCancel:function(){c(!1)}},r.a.createElement(V.a,null),"..."),r.a.createElement(me,null))},pe=d.a.TabPane;function ye(e){console.log(e)}var be=function(){var e=Object(p.b)(O),t=e.loading,a=(e.cat_error,e.data),n=Object(p.b)(R),c=n.loading,l=(n.prod_error,n.data),o=Object(p.b)(S,{variables:{categoryId:"5e84ad3fe6b396aef7657ca4"}}),i=(o.loading,o.recycle_bin_error,o.data,Object(p.b)(S,{variables:{categoryId:"5e84ad3fe6b396aef7657ca4"}})),s=i.loading,m=(i.recycle_bin_prod_error,i.data),g=Object(p.b)(v,{variables:{id:"5e84ad3fe6b396aef7657ca4"}}),y=g.loading,b=(g.recycle_bin_cat_error,g.data);if(t||c||s||y)return r.a.createElement("p",null,"Loading ... ");a.categoriesAll,l.productsAll;var f=m.productsByCategoryId,E=b.categoryById;return console.log("categoryById",E),r.a.createElement(d.a,{defaultActiveKey:"1",onChange:ye},r.a.createElement(d.a.TabPane,{tab:"Products",key:"1"},r.a.createElement(de,null)),r.a.createElement(pe,{tab:"Categories",key:"2"},r.a.createElement(P,null)),r.a.createElement(pe,{tab:r.a.createElement("span",null,r.a.createElement(ue,{categoryById:E,productsByCategoryId:f}),"Recycle bin"),key:"3"},0===f.length?r.a.createElement(u.a,null):r.a.createElement(ge,null)))};a(407),a(408);var fe=function(){return console.log("after .env"),console.log("process.env.NODE_ENV ","production"),console.log("process.env.REACT_APP_BASE_URL ","https://glacial-mesa-30936.herokuapp.com/graphql"),console.log("process.env.REACT_APP_RECYCLE_BIN_ID ","5e84ad3fe6b396aef7657ca4"),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",null,r.a.createElement("code",null," APP")),r.a.createElement("a",{className:"App-link",href:"https://glacial-mesa-30936.herokuapp.com/graphql",target:"_blank",rel:"noopener noreferrer"},"BASE_URL")),r.a.createElement(be,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ee=new(a(67).a),he=new f.a({cache:Ee,uri:"https://glacial-mesa-30936.herokuapp.com/graphql"}),Oe=a(68),ve={isOpen:!1},Ie={isOpen:!1},je={product:{}},Pe=Object(Oe.b)({edit_product_modal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS_OPEN_EDIT_MODAL":return Object(z.a)({},e,{isOpen:t.payload});default:return e}},add_product_modal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS_OPEN_ADD_MODAL":return Object(z.a)({},e,{isOpen:t.payload});default:return e}},edit_product:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"EDIT_PRODUCT":return Object(z.a)({},e,{product:t.payload});default:return e}}}),_e=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):Oe.c)(),Ce=Object(Oe.d)(Pe,{},_e);l.a.render(r.a.createElement(o.a,{store:Ce},r.a.createElement(i.a,{client:he},r.a.createElement(fe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[211,1,2]]]);
//# sourceMappingURL=main.6a327847.chunk.js.map