(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66e3b825"],{"023d":function(e,t,n){},"24cd":function(e,t,n){"use strict";n("2657")},2657:function(e,t,n){},"57da":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("el-container",[n("el-header",[n("Header")],1),n("el-main",[n("router-view")],1),n("el-footer",[n("Footer")],1)],1)],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("el-card",[n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":e.activeIndex,mode:"horizontal",router:""},on:{select:e.handleSelect}},[n("el-menu-item",{attrs:{index:"#"},on:{click:function(t){return e.home()}}},[e._v(" 首页")]),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[e._v("我的工作台")]),e._l(e.menu,(function(t,s){return[t.hidden?e._e():n("div",{key:s},e._l(t.children,(function(t,s){return n("el-submenu",{key:s,attrs:{index:s+""}},[n("template",{slot:"title"},[e._v(e._s(t.name))]),e._l(t.children,(function(t,s){return[n("el-menu-item",{key:s,attrs:{index:t.path}},[e._v(" "+e._s(t.name)+" ")])]}))],2)})),1)]}))],2),n("el-submenu",{attrs:{index:"3"}},[n("template",{slot:"title"},[e._v("可视化数据Map")]),n("el-menu-item",{attrs:{index:"1-1"}},[e._v("微博热搜榜")]),n("el-menu-item",{attrs:{index:"1-2"}},[e._v("树图")])],2),n("el-menu-item",{attrs:{index:"mc"}},[e._v("我的世界热力图-小游戏")])],1),n("div",{staticClass:"line"})],1)],1)},r=[],u={data(){return{activeIndex:"1",activeIndex2:"1",menu:[]}},created(){this.menu=[...this.$router.options.routes]},mounted(){window.name=""},methods:{home(){""===window.name?this.$message({message:"目前正在首页",type:"success"}):(this.$router.push("/home"),this.$message({message:"回到首页",type:"success"}),window.name="")},student(){this.$router.push("/home/Student"),this.$message({message:"欢迎访问学生管理系统",type:"success"})}}},l=u,c=(n("a8e0"),n("2877")),o=Object(c["a"])(l,i,r,!1,null,null,null),d=o.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Footer"},[n("el-card",[n("span",[e._v(" @2022 sopeak ")])])],1)},h=[],v={name:"Footer"},f=v,p=(n("cf76"),Object(c["a"])(f,m,h,!1,null,"290d115e",null)),_=p.exports,x={components:{Header:d,Footer:_}},w=x,b=(n("24cd"),Object(c["a"])(w,s,a,!1,null,"6dbcd02a",null));t["default"]=b.exports},a826:function(e,t,n){},a8e0:function(e,t,n){"use strict";n("023d")},cf76:function(e,t,n){"use strict";n("a826")}}]);
//# sourceMappingURL=chunk-66e3b825.270f4591.js.map