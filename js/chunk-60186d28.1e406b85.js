(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60186d28"],{"77f1":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"StudentInfo"},[a("el-card",[a("el-main",[a("el-table",{staticStyle:{"text-align":"center"},attrs:{data:e.compData,border:"",fit:!0}},[a("el-table-column",{attrs:{prop:"name",label:"姓名",align:"center"}}),a("el-table-column",{attrs:{prop:"sex_text",label:"性别",align:"center"}}),a("el-table-column",{attrs:{prop:"age",label:"年龄",align:"center"}}),a("el-table-column",{attrs:{prop:"number",label:"学号",align:"center"}}),a("el-table-column",{attrs:{prop:"class",label:"班级",align:"center"}}),a("el-table-column",{attrs:{prop:"state_text",label:"状态",align:"center"}}),a("el-table-column",{attrs:{prop:"address",label:"地址",align:"center"}}),a("el-table-column",{attrs:{prop:"phone",label:"联系方式",align:"center"}}),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-delete"},on:{click:function(a){return e.del(t.row)}}})]}}])})],1)],1),a("el-footer",{staticStyle:{height:"10%"}},[a("el-card",[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[5,10,20,30,50],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)],1)],1)},l=[],r=a("a1e0"),o={name:"Student",components:{},data(){return{tableData:r,currentPage:1,pageSize:10,total:r.length}},mounted(){window.name="Student"},computed:{compData(){return this.tableData.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize)}},methods:{del(e){console.log(e),this.$message({message:"没有操作权限",type:"warning"})},handleSizeChange(e){console.log(`每页 ${e} 条`),this.pageSize=e,this.currentPage=1},handleCurrentChange(e){console.log("当前页: "+e),this.currentPage=e}}},c=o,s=(a("a17d"),a("2877")),i=Object(s["a"])(c,n,l,!1,null,"53bc6882",null);t["default"]=i.exports},"805d":function(e,t,a){},a17d:function(e,t,a){"use strict";a("805d")}}]);
//# sourceMappingURL=chunk-60186d28.1e406b85.js.map