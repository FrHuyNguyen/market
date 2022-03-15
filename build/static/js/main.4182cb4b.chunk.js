(this["webpackJsonpfinal-project"]=this["webpackJsonpfinal-project"]||[]).push([[0],{30:function(t,e,c){},36:function(t,e,c){"use strict";c.r(e);var r=c(0),n=c(1),i=c.n(n),s=c(21),a=c.n(s),j=(c(30),c(24)),d=c(7),o=c(9),l=c(4),u=c(2);function h(t){var e=t.cart.reduce((function(t,e){return t+e.quantity}),0);return Object(r.jsxs)("nav",{className:"navbar",children:[Object(r.jsx)(l.c,{to:"/",className:"nav-brand",children:"SuperM"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(l.c,{exact:!0,activeClassName:"active",to:"/",children:"Home"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(l.c,{exact:!0,activeClassName:"active",to:"/about",children:"About us"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(l.c,{activeClassName:"active",to:"/products",children:"Products"})}),Object(r.jsx)("li",{children:Object(r.jsxs)(l.c,{to:"/cart",className:"nav-item nav-cart btn btn-accent",children:["Cart (",e,")"]})})]})]})}function b(){return Object(r.jsxs)("div",{className:"home-layout",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Online shopping simplified"}),Object(r.jsxs)("p",{children:["Order your groceries from ",Object(r.jsx)("em",{children:"SuperM"})," with our easy to use app, and get your products delivered straight to your doorstep."]}),Object(r.jsx)(l.b,{to:"/products",className:"btn btn-default",children:"Start shopping"})]}),Object(r.jsx)("img",{src:"https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto,w_700/v1607770215/react-tutorial/supermarket/home.jpg",width:"350",height:"240",className:"rounded home-image",alt:""})]})}function O(){return Object(r.jsxs)("div",{className:"about-layout",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"About Us"}),Object(r.jsxs)("p",{children:["We started operations in 2020. We guarantee fresh produce.",Object(r.jsx)("br",{}),"Save time by shopping on our app and we'll deliver the products right to your home. ",Object(r.jsx)("br",{}),Object(r.jsx)("em",{children:"We use Stripe to process your payment."})]})]}),Object(r.jsx)("img",{src:"https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto,w_550/v1607770215/react-tutorial/supermarket/about.jpg",height:"275",width:"183",className:"rounded",alt:""})]})}var x=c(15),p=c(14);function m(t){var e=t.children,c=t.outline,n=t.className,i=Object(x.a)(t,["children","outline","className"]),s=Object(p.a)({btn:!0,"btn-default":!c,"btn-outline":c},n);return Object(r.jsx)("button",Object(d.a)(Object(d.a)({className:s},i),{},{children:e}))}function f(t){var e=t.details,c=t.cart.find((function(t){return t.id===e.id})),n=c?c.quantity:0;return Object(r.jsxs)("div",{className:"product",children:[Object(r.jsxs)("div",{className:"product-image-container",children:[Object(r.jsx)(l.b,{to:"/products/".concat(e.id),children:Object(r.jsx)("img",{src:e.image,width:"100",height:"100",className:"product-image",alt:e.name})}),n>0&&Object(r.jsx)("div",{className:"product-quantity-container",children:Object(r.jsx)("div",{className:"product-quantity",children:n})})]}),Object(r.jsxs)("div",{className:"product-info",children:[Object(r.jsx)("h3",{children:e.name}),Object(r.jsx)("p",{children:e.description})]}),Object(r.jsxs)("div",{className:"product-checkout",children:[Object(r.jsx)("div",{children:n>0&&Object(r.jsx)(m,{outline:!0,onClick:function(){return t.onProductDelete(e.id)},className:"product-delete",children:"x"})}),Object(r.jsxs)(m,{outline:!0,onClick:function(){return t.onProductAdd(e)},children:["$",e.price]})]})]})}function v(t){var e=Object(n.useState)(!0),c=Object(o.a)(e,2),r=c[0],i=c[1];return{get:function(e){return new Promise((function(c,r){fetch(t+e).then((function(t){return t.json()})).then((function(t){if(!t)return i(!1),r(t);i(!1),c(t)})).catch((function(t){i(!1),r(t)}))}))},post:function(e,c){return new Promise((function(r,n){fetch(t+e,Object(d.a)({},{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)})).then((function(t){return t.json()})).then((function(t){if(!t)return i(!1),n(t);i(!1),r(t)})).catch((function(t){i(!1),n(t)}))}))},loading:r}}function g(){return Object(r.jsx)("svg",{className:"spinner",width:"65px",height:"65px",viewBox:"0 0 66 66",xmlns:"http://www.w3.org/2000/svg",children:Object(r.jsx)("circle",{className:"path",fill:"none",strokeWidth:"6",strokeLinecap:"round",cx:"33",cy:"33",r:"30"})})}function y(t){var e=Object(n.useState)([]),c=Object(o.a)(e,2),i=c[0],s=c[1],a=v("https://react-tutorial-demo.firebaseio.com/"),j=a.get,d=a.loading;return Object(n.useEffect)((function(){j("supermarket.json").then((function(t){s(t)})).catch((function(t){return console.log("Could not load products",t)}))}),[]),Object(r.jsxs)("div",{className:"products-layout",children:[Object(r.jsx)("h1",{children:"Products"}),Object(r.jsx)("p",{children:"Take a look at our products"}),Object(r.jsxs)("div",{className:"products-grid",children:[d&&Object(r.jsx)(g,{}),i.map((function(e){return Object(r.jsx)(f,{details:e,cart:t.cart,onProductAdd:t.onProductAdd,onProductDelete:t.onProductDelete},e.id)}))]})]})}function N(t){var e=t.product,c=t.onProductAdd;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("p",{children:[e.description," sold at ",Object(r.jsxs)("strong",{children:["$",e.price]})," per piece."]}),Object(r.jsxs)(m,{onClick:function(){return c(e)},children:["$",e.price]})]})}function w(t){var e=t.nutrition;return Object(r.jsxs)("table",{className:"table table-nutrition",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Nutrient"}),Object(r.jsx)("th",{children:"Value"})]})}),Object(r.jsxs)("tbody",{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Protein"}),Object(r.jsxs)("td",{children:[e.protein,"g"]})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Carbohydrates"}),Object(r.jsxs)("td",{children:[e.carbs,"g"]})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Fat"}),Object(r.jsxs)("td",{children:[e.fat,"g"]})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Salt"}),Object(r.jsxs)("td",{children:[e.salt,"g"]})]})]})]})}function S(t){var e=t.storage;return Object(r.jsxs)("p",{children:[Object(r.jsx)("strong",{children:"Storage instructions:"})," ",e]})}function P(t){var e=Object(n.useState)({}),c=Object(o.a)(e,2),i=c[0],s=c[1],a=v("https://react-tutorial-demo.firebaseio.com/").get,j=Object(u.f)(),d=Object(u.g)();return Object(n.useEffect)((function(){a("productinfo/id".concat(j.id,".json")).then((function(t){s(t)})).catch((function(t){return console.log("Could not load product details",t)}))}),[]),Object(r.jsxs)("div",{className:"product-details-layout",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:i.name}),Object(r.jsx)("img",{src:i.image,width:"125",height:"125",className:"product-details-image",alt:i.name})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"tabs",children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(l.c,{exact:!0,activeClassName:"tab-active",to:d.url,children:"Details"})}),Object(r.jsx)("li",{children:Object(r.jsx)(l.c,{exact:!0,activeClassName:"tab-active",to:d.url+"/nutrition",children:"Nutrition"})}),Object(r.jsx)("li",{children:Object(r.jsx)(l.c,{exact:!0,activeClassName:"tab-active",to:d.url+"/storage",children:"Storage"})})]})}),Object(r.jsxs)(u.c,{children:[Object(r.jsx)(u.a,{exact:!0,path:d.path,children:Object(r.jsx)(N,{onProductAdd:t.onProductAdd,product:i})}),Object(r.jsx)(u.a,{path:d.path+"/nutrition",children:Object(r.jsx)(w,{nutrition:i.nutrition})}),Object(r.jsx)(u.a,{path:d.path+"/storage",children:Object(r.jsx)(S,{storage:i.storage})})]})]})]})}var q=c(23);function C(t){var e=t.className,c=t.placeholder,n=t.required,i=t.type,s=void 0===i?"text":i,a=Object(x.a)(t,["className","placeholder","required","type"]),j=Object(p.a)({input:!0},e);return Object(r.jsxs)("label",{className:"label",children:[c,n&&Object(r.jsx)("span",{className:"input-required",children:"*"}),Object(r.jsx)("div",{children:Object(r.jsx)("input",Object(d.a)({type:s,placeholder:c,className:j,required:n},a))})]})}var k=Object(q.a)("PK_REPLACE_WITH_YOUR_PUBLISHABLE_KEY");function A(t){var e=t.cart,c=e.reduce((function(t,e){return t+e.price*e.quantity}),0),i=Object(n.useState)(""),s=Object(o.a)(i,2),a=s[0],j=s[1];return Object(r.jsx)("div",{className:"cart-layout",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Your Cart"}),0===e.length&&Object(r.jsx)("p",{children:"You have not added any product to your cart yet."}),e.length>0&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("table",{className:"table table-cart",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{width:"25%",className:"th-product",children:"Product"}),Object(r.jsx)("th",{width:"20%",children:"Unit price"}),Object(r.jsx)("th",{width:"10%",children:"Quanity"}),Object(r.jsx)("th",{width:"25%",children:"Total"})]})}),Object(r.jsx)("tbody",{children:e.map((function(t){return Object(r.jsxs)("tr",{children:[Object(r.jsxs)("td",{children:[Object(r.jsx)("img",{src:t.image,width:"30",height:"30",alt:""})," ",t.name]}),Object(r.jsxs)("td",{children:["$",t.price]}),Object(r.jsx)("td",{children:t.quantity}),Object(r.jsx)("td",{children:Object(r.jsxs)("strong",{children:["$",t.price*t.quantity]})})]},t.id)}))}),Object(r.jsx)("tfoot",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{colSpan:"2"}),Object(r.jsx)("th",{className:"cart-highlight",children:"Total"}),Object(r.jsxs)("th",{className:"cart-highlight",children:["$",c]})]})})]}),Object(r.jsxs)("form",{className:"pay-form",onSubmit:function(t){t.preventDefault();var c=e.map((function(t){return{price:t.price_id,quantity:t.quantity}}));k.then((function(t){t.redirectToCheckout({lineItems:c,mode:"payment",successUrl:"https://superm.react-tutorial.app/",cancelUrl:"https://superm.react-tutorial.app/",customerEmail:a}).then((function(t){console.log(t.error)})).catch((function(t){console.log(t)}))}))},children:[Object(r.jsxs)("p",{children:["Enter your email and then click on pay and your products will be delivered to you on the same day!",Object(r.jsx)("br",{}),Object(r.jsx)("em",{children:"Enter your own Stripe Publishable Key in Cart.js for the checkout to work"})]}),Object(r.jsx)(C,{placeholder:"Email",onChange:function(t){return j(t.target.value)},value:a,type:"email",required:!0}),Object(r.jsx)(m,{type:"submit",children:"Pay"})]})]})]})})}var E=function(){var t=Object(n.useState)((function(){localStorage.getItem("cart");var t=[];try{t=JSON.parse(localStorage.getItem("cart"))||[]}catch(e){t=[]}return t})),e=Object(o.a)(t,2),c=e[0],i=e[1];function s(t){if(c.find((function(e){return e.id===t.id}))){var e=c.map((function(e){return e.id===t.id?Object(d.a)(Object(d.a)({},e),{},{quantity:e.quantity+1}):e}));i(e)}else i([].concat(Object(j.a)(c),[Object(d.a)(Object(d.a)({},t),{},{quantity:1})]))}return Object(n.useEffect)((function(){c&&localStorage.setItem("cart",JSON.stringify(c))}),[c]),Object(r.jsxs)(l.a,{children:[Object(r.jsx)(h,{cart:c}),Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)(u.c,{children:[Object(r.jsx)(u.a,{exact:!0,path:"/",children:Object(r.jsx)(b,{})}),Object(r.jsx)(u.a,{exact:!0,path:"/about",children:Object(r.jsx)(O,{})}),Object(r.jsx)(u.a,{exact:!0,path:"/products",children:Object(r.jsx)(y,{cart:c,onProductAdd:s,onProductDelete:function(t){var e=c.filter((function(e){return e.id!==t}));i(e)}})}),Object(r.jsx)(u.a,{path:"/products/:id",children:Object(r.jsx)(P,{onProductAdd:s})}),Object(r.jsx)(u.a,{exact:!0,path:"/cart",children:Object(r.jsx)(A,{cart:c})})]})})]})};a.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(E,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.4182cb4b.chunk.js.map