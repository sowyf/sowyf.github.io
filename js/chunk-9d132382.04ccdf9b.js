(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9d132382"],{"4ec3":function(e,t,n){"use strict";n.d(t,"f",(function(){return u})),n.d(t,"h",(function(){return d})),n.d(t,"g",(function(){return m})),n.d(t,"d",(function(){return g})),n.d(t,"c",(function(){return f})),n.d(t,"e",(function(){return p})),n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return b})),n.d(t,"i",(function(){return x}));var a=n("ba5f"),r=n("bc3a"),l=n.n(r);const o=l.a.create({headers:{"content-type":"application/x-www-form-urlencoded"},timeout:3e3});o.interceptors.request.use(e=>e,e=>Promise.reject(e)),o.interceptors.response.use(e=>(console.log("response:",e),e),e=>{console.log("拦截器 response error "),console.log(e)});var s=o,i=n("34d3"),c=n.n(i);function u(e){return Object(a["a"])({method:"post",url:"/login",data:e})}function d(e){return Object(a["a"])({method:"get",url:"/students",params:e})}function m(e){return Object(a["a"])({method:"delete",url:"/students/"+e})}function g(e,t){t=c.a.stringify(t);let n={method:e,url:"/info",data:t};return Object(a["a"])(n)}function f(){return Object(a["a"])({method:"get",url:"/info"})}function p(e){return Object(a["a"])({method:"delete",url:"info/"+e})}function h(){return Object(a["a"])({method:"get",url:"/dataview"})}function b(e){return s({method:"get",url:e})}function x(){return Object(a["a"])({method:"get",url:"/travel"})}},"5b4a":function(e,t,n){"use strict";n("df04")},ddfd:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"studentList"},[n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline,size:"small"}},[n("el-form-item",{attrs:{label:"姓名"}},[n("el-input",{attrs:{placeholder:"请输入姓名查询"},model:{value:e.formInline.name,callback:function(t){e.$set(e.formInline,"name",t)},expression:"formInline.name"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.find}},[e._v("查询")])],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.reset}},[e._v("重置")])],1)],1),n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.compData,border:""}},[n("el-table-column",{attrs:{prop:"name",label:"姓名",align:"center"}}),n("el-table-column",{attrs:{prop:"sex_text",label:"性别",align:"center"}}),n("el-table-column",{attrs:{prop:"age",label:"年龄",align:"center"}}),n("el-table-column",{attrs:{prop:"number",label:"学号",align:"center"}}),n("el-table-column",{attrs:{prop:"class",label:"班级",align:"center"}}),n("el-table-column",{attrs:{prop:"state_text",label:"状态",align:"center"}}),n("el-table-column",{attrs:{prop:"address",label:"地址",align:"center"}}),n("el-table-column",{attrs:{prop:"phone",label:"联系方式",align:"center"}}),n("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-delete"},on:{click:function(n){return e.del(t.row)}}})]}}])})],1),n("el-card",{staticClass:"card"},[n("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[5,10,20,30,50],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},r=[],l=n("4ec3"),o={name:"StudentList",data(){return{tableData:[],currentPage:1,pageSize:10,total:0,formInline:{name:""}}},computed:{compData(){return this.tableData.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize)}},created(){this.getData()},methods:{find(){console.log(this.formInline),this.getData(this.formInline)},reset(){console.log(this.formInline),this.formInline={},this.getData(this.formInline)},handleSizeChange(e){console.log(`每页 ${e} 条`),this.pageSize=e,this.currentPage=1},handleCurrentChange(e){console.log("当前页: "+e),this.currentPage=e},getData(e){Object(l["h"])(e).then(e=>{console.log("res:",e),200===e.data.status&&(this.tableData=e.data.data,this.total=e.data.data.length,this.tableData.forEach(e=>{1===e.sex?e.sex_text="男":e.sex_text="女","1"===e.state?e.state_text="已入学":"2"===e.state?e.state_text="未入学":e.state_text="休学中"}),console.log("打印res",e))})},del(e){console.log(e),Object(l["g"])(e.id).then(e=>{console.log(e),200===e.data.status&&(this.$message({message:"删除数据成功",type:"success"}),this.getData())})}}},s=o,i=(n("5b4a"),n("2877")),c=Object(i["a"])(s,a,r,!1,null,null,null);t["default"]=c.exports},df04:function(e,t,n){}}]);
//# sourceMappingURL=chunk-9d132382.04ccdf9b.js.map