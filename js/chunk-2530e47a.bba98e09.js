(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2530e47a"],{"43d0":function(t,e,n){"use strict";n("ea88")},"4ec3":function(t,e,n){"use strict";n.d(e,"f",(function(){return d})),n.d(e,"h",(function(){return l})),n.d(e,"g",(function(){return f})),n.d(e,"d",(function(){return m})),n.d(e,"c",(function(){return p})),n.d(e,"e",(function(){return h})),n.d(e,"a",(function(){return g})),n.d(e,"b",(function(){return b})),n.d(e,"i",(function(){return w}));var r=n("ba5f"),i=n("bc3a"),o=n.n(i);const a=o.a.create({headers:{"content-type":"application/x-www-form-urlencoded"},timeout:3e3});a.interceptors.request.use(t=>t,t=>Promise.reject(t)),a.interceptors.response.use(t=>(console.log("response:",t),t),t=>{console.log("拦截器 response error "),console.log(t)});var u=a,c=n("34d3"),s=n.n(c);function d(t){return Object(r["a"])({method:"post",url:"/login",data:t})}function l(t){return Object(r["a"])({method:"get",url:"/students",params:t})}function f(t){return Object(r["a"])({method:"delete",url:"/students/"+t})}function m(t,e){e=s.a.stringify(e);let n={method:t,url:"/info",data:e};return Object(r["a"])(n)}function p(){return Object(r["a"])({method:"get",url:"/info"})}function h(t){return Object(r["a"])({method:"delete",url:"info/"+t})}function g(){return Object(r["a"])({method:"get",url:"/dataview"})}function b(t){return u({method:"get",url:t})}function w(){return Object(r["a"])({method:"get",url:"/travel"})}},ea88:function(t,e,n){},ec21:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"data-view"},[n("el-card",[n("div",{attrs:{id:"main1"}})]),n("el-card",[n("div",{attrs:{id:"main2"}})])],1)},i=[],o=n("4ec3"),a={data(){return{}},mounted(){let t=this.$echarts.init(document.getElementById("main1"));t.setOption({title:{text:"大佬进阶班"},tooltip:{},xAxis:{data:["一班","二班","三班","四班","五班"]},yAxis:{},series:[{name:"人数",type:"line",data:[45,42,46,59,46,55,86,11]}]})},created(){Object(o["a"])().then(t=>{if(console.log(t),200===t.data.status){let{legend:e,xAxis:n,series:r}=t.data.data;this.draw(e,n,r)}}).catch(t=>{throw t})},methods:{draw(t,e,n){let r=this.$echarts.init(document.getElementById("main2")),i={title:{text:"会话量"},tooltip:{trigger:"axis"},legend:{data:t},xAxis:{type:"category",data:e},yAxis:{typpe:"value"},series:n};r.setOption(i)}}},u=a,c=(n("43d0"),n("2877")),s=Object(c["a"])(u,r,i,!1,null,"46d21761",null);e["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2530e47a.bba98e09.js.map