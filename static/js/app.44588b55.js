(function(t){function e(e){for(var n,i,l=e[0],s=e[1],c=e[2],d=0,f=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,l=1;l<a.length;l++){var s=a[l];0!==o[s]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},o={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=s;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"00f8":function(t,e,a){},"034f":function(t,e,a){"use strict";var n=a("85ec"),o=a.n(n);o.a},"08f5":function(t,e,a){t.exports=a.p+"static/img/243c04f6236254826fcf5fc98b63832d3b150c76.7958748c.jpg"},"0e42":function(t,e,a){},1567:function(t,e,a){t.exports=a.p+"static/img/9df03d05gy1fdubomad3bj20pk0zu0wp.b70c6653.jpg"},"1eb9":function(t,e,a){},"213d":function(t,e,a){},2739:function(t,e,a){"use strict";var n=a("a4e9"),o=a.n(n);o.a},"2d88":function(t,e,a){t.exports=a.p+"static/img/QQ图片20170327222525.d6856770.png"},3228:function(t,e,a){"use strict";var n=a("ca15"),o=a.n(n);o.a},"3db5":function(t,e,a){"use strict";var n=a("213d"),o=a.n(n);o.a},"4a25":function(t,e,a){"use strict";var n=a("0e42"),o=a.n(n);o.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{attrs:{id:"app"}},[a("el-header",{staticStyle:{"background-color":"#f9f7ec"}},[a("navigation")],1),a("el-main",[a("keep-alive",[a("router-view")],1)],1)],1)},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-row",{staticClass:"header"},[a("el-col",{staticClass:"hTitle",attrs:{lg:5,md:5,sm:5,xs:22}},[t._v("Informal Essay")]),a("el-col",{attrs:{lg:19,md:19,sm:19,xs:0}},[a("ul",{staticClass:"hMenu"},t._l(t.route,(function(e,n){return a("router-link",{key:n,attrs:{to:{path:e.path}}},[a("li",{staticClass:"menu"},[t._v(t._s(e.title))])])})),1)]),a("el-col",{attrs:{lg:0,md:0,sm:0,xs:2}},[a("i",{staticClass:"el-icon-more el-icon--right",staticStyle:{"font-size":"24px",color:"#3399cc"},on:{click:function(e){t.drawer=!0}}})]),a("el-drawer",{attrs:{visible:t.drawer,title:"menu","with-header":!1,direction:"rtl",size:"40%"},on:{"update:visible":function(e){t.drawer=e}}},t._l(t.route,(function(e,n){return a("router-link",{key:n,attrs:{to:{path:e.path}}},[a("div",{staticClass:"item_box",on:{click:function(e){t.drawer=!1}}},[t._v(t._s(e.title))])])})),1)],1)],1)},l=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"gloss"},[t._v("***以下图片均来自互联网（The following images are from the Internet）***")]),a("div",{attrs:{id:"container"},on:{scroll:function(e){return t.scrollFn()}}},t._l(t.imgData.data,(function(t,e){return a("div",{key:e,staticClass:"box",style:{top:t.h,left:t.w}},[a("div",{staticClass:"box_img"},[a("img",{attrs:{src:t.src,alt:""}})])])})),0),a("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"gloss"},[t._v("正在加载……")])])},c=[],u=(a("c975"),a("2909")),d={data:function(){return{imgData:{data:[]},img:[{src:a("f729"),w:1920,h:1080},{src:a("8ff3"),w:636,h:581},{src:a("e849"),w:594,h:779},{src:a("08f5"),w:585,h:780},{src:a("2d88"),w:413,h:574},{src:a("1567"),w:690,h:968},{src:a("eb8e"),w:422,h:750}],minHeight:[],imgWidth:0,num:0,left_padding:0,loading:!0}},beforeMount:function(){for(var t=0;t<8;t++){var e;(e=this.imgData.data).push.apply(e,Object(u["a"])(this.img))}this.imgData=JSON.parse(JSON.stringify(this.imgData))},mounted:function(){var t=this;window.onload=function(){t.imgLocation("container","box")},window.addEventListener("scroll",this.scrollFn,!0)},destroyed:function(){window.removeEventListener("scroll",this.scrollFn,!0)},methods:{imgLocation:function(t,e){var a=document.getElementById(t),n=this.getChildElement(a,e);this.imgWidth=n[0].offsetWidth,this.num=Math.floor(a.offsetWidth/this.imgWidth)-1,this.left_padding=(a.offsetWidth-this.imgWidth*this.num)/(this.num-1);for(var o=0;o<this.num;o++)this.minHeight[o]=0;for(var r=0;r<n.length;r++){var i=Math.min.apply(null,this.minHeight),l=this.minHeight.indexOf(i);this.imgData.data[r].w=(this.imgWidth+this.left_padding)*l+"px",this.imgData.data[r].h=i+10+"px",this.minHeight[l]=this.minHeight[l]+n[r].offsetHeight+10}a.style.height=Math.max.apply(null,this.minHeight)+"px"},getMinHeightLocation:function(t,e){for(var a in t)if(t[a]==e)return a},getChildElement:function(t,e){for(var a=[],n=t.getElementsByTagName("*"),o=0;o<n.length;o++)n[o].className==e&&a.push(n[o]);return a},scrollFn:function(){var t=this;if(Math.floor(document.documentElement.scrollTop+window.innerHeight+100)>=document.body.offsetHeight){var e;(e=t.imgData.data).push.apply(e,Object(u["a"])(t.img)),t.imgData=JSON.parse(JSON.stringify(t.imgData));for(var a=t.imgData.data.length-7;a<t.imgData.data.length;a++){var n=Math.min.apply(null,t.minHeight),o=t.minHeight.indexOf(n);t.imgData.data[a].w=(t.imgWidth+t.left_padding)*o+"px",t.imgData.data[a].h=n+10+"px";var r=t.getChildElement(document.getElementById("container"),"box");t.minHeight[o]=t.minHeight[o]+r[a%7].offsetHeight+10,document.getElementById("container").style.height=Math.max.apply(null,this.minHeight)+"px"}}}},watch:{},computed:{}},f=d,h=(a("4a25"),a("2877")),m=Object(h["a"])(f,s,c,!1,null,"46e6eeb9",null),p=m.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"calculate"},[t._m(0),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("span",[t._v("目标经验：")]),a("el-input",{attrs:{type:"number",placeholder:"请输入目标经验值"},model:{value:t.max_Exp,callback:function(e){t.max_Exp=e},expression:"max_Exp"}})],1),a("el-col",{attrs:{span:8}},[a("span",[t._v("当前经验：")]),a("el-input",{attrs:{type:"number",placeholder:"请输入当前经验值"},model:{value:t.current_Exp,callback:function(e){t.current_Exp=e},expression:"current_Exp"}})],1),a("el-col",{attrs:{span:8}},[a("span",[t._v("拥有硬币：")]),a("el-input",{attrs:{type:"number",placeholder:"请输入当前硬币数量"},model:{value:t.current_coin,callback:function(e){t.current_coin=e},expression:"current_coin"}})],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",[a("el-button",{attrs:{type:"primary"},on:{click:t.count}},[t._v("开始计算")])],1)],1),a("el-row",{directives:[{name:"show",rawName:"v-show",value:t.day_count,expression:"day_count"}]},[a("el-col",[t._v("结果：满级所需"+t._s(t.day_count)+"天")])],1)],1)},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("span",{staticStyle:{"font-size":"18px","line-height":"1.7"}},[t._v("我爱B站，B站爱我")])])}],b=(a("99af"),a("a9e3"),{data:function(){return{max_Exp:"",current_Exp:"",current_coin:"",day_count:""}},mounted:function(){},methods:{count:function(){for(var t,e=0,a=this.max_Exp||28800,n=Number(this.current_Exp)||0,o=a-n,r=this.current_coin||0,i=0;o>0;i++){var l=void 0;r+1>=5?(r-=4,t=60,l=5):(r+=1,t=10,l=0),o-=t,n+=t,e+=1,console.log("第".concat(e,"天，使用").concat(l,"个，当前剩余硬币：").concat(r,"个，今天获得经验：").concat(t,"，总经验：").concat(n))}this.day_count=e}},watch:{},computed:{}}),y=b,C=(a("9173"),Object(h["a"])(y,g,v,!1,null,"2aaa8a36",null)),_=C.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("h1",[t._v("这个页面用来调试接口返回数据")]),a("h3",[t._v("server.js定时抓取数据存入数据库，前端调取接口时从再返回数据库中所保存的数据")]),a("div",{},[t._v("4000端口的user接口数据："+t._s(t.data))]),a("h2",{staticStyle:{margin:"22px"}},[t._v("B站今日番剧")]),a("div",{staticClass:"container"},t._l(t.biliData,(function(e,n){return a("div",{directives:[{name:"show",rawName:"v-show",value:t.biliData&&t.reg(e.title),expression:"biliData && reg(item.title)"}],key:n,attrs:{timestamp:e.pub_time}},[a("a",{attrs:{href:e.url}},[a("div",{staticClass:"single"},[a("el-image",{staticClass:"image",attrs:{src:e.cover,alt:e.title}},[a("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[t._v(" 加载中 "),a("span",{staticClass:"dot"},[t._v("...")])])]),a("h4",{staticClass:"title"},[t._v(t._s(e.title))])],1)])])})),0),a("h2",{staticStyle:{margin:"22px"}},[t._v("我的追番")]),a("div",{staticClass:"container"},t._l(t.followData,(function(e,n){return a("div",{key:n,attrs:{timestamp:e.pub_time}},[a("a",{attrs:{href:e.url}},[a("div",{staticClass:"single"},[a("div",{staticClass:"image"},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.badge,expression:"item.badge"}],staticClass:"label"},[t._v(t._s(e.badge))]),a("el-image",{attrs:{src:e.cover,alt:e.title}},[a("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[t._v(" 加载中 "),a("span",{staticClass:"dot"},[t._v("...")])])])],1),a("div",{staticClass:"text"},[a("h4",{staticClass:"title"},[t._v(t._s(e.title))]),a("h4",{staticClass:"title"},[t._v(t._s(e.progress))])])])])])})),0)])},x=[],k=(a("4d63"),a("ac1f"),a("25f0"),{data:function(){return{data:[],biliData:[],followData:[]}},mounted:function(){this.getData(),this.biliApi(),this.follow()},methods:{getData:function(){var t=this,e="http://localhost:4000/user";this.axios.get(e).then((function(e){t.data=e.data.data})).catch((function(e){console.log(e),t.data=e}))},biliApi:function(){var t=this,e="http://localhost:4000/bili";this.axios.get(e).then((function(e){t.biliData=e.data.data})).catch((function(t){console.log(t)}))},follow:function(){var t=this,e="http://localhost:4000/follow";this.axios.get(e).then((function(e){t.followData=e.data.data.list})).catch((function(t){console.log(t)}))}},watch:{},computed:{reg:function(){return function(t){var e=new RegExp("（","g");return!e.test(t)}}}}),D=k,O=(a("3db5"),Object(h["a"])(D,w,x,!1,null,"16f8a437",null)),B=O.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-button",{attrs:{type:"text"},on:{click:t.changePostOrGet}},[t._v("切换到"+t._s(t.upload?"图表":"爬虫"))]),a("el-form",{directives:[{name:"show",rawName:"v-show",value:t.upload,expression:"upload"}],ref:"uploadForm",staticClass:"demo-ruleForm",attrs:{model:t.uploadFormData,rules:t.uploadRules,"label-width":"65px"}},[a("el-form-item",{attrs:{label:"上传目标城市：",prop:"city"}},[a("el-input",{model:{value:t.uploadFormData.city,callback:function(e){t.$set(t.uploadFormData,"city",e)},expression:"uploadFormData.city"}})],1),a("el-form-item",{attrs:{label:"上传目标时间：",prop:"date"}},[a("el-input",{model:{value:t.uploadFormData.date,callback:function(e){t.$set(t.uploadFormData,"date",e)},expression:"uploadFormData.date"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.setCity}},[t._v("提交")]),a("el-button",{on:{click:function(e){return t.reset("uploadForm")}}},[t._v("重置")])],1)],1),a("el-form",{directives:[{name:"show",rawName:"v-show",value:!t.upload,expression:"!upload"}],ref:"form",staticClass:"demo-ruleForm",attrs:{model:t.formData,rules:t.rules,"label-width":"65px"}},[a("el-form-item",{attrs:{label:"城市：",prop:"city"}},[a("el-input",{model:{value:t.formData.city,callback:function(e){t.$set(t.formData,"city",e)},expression:"formData.city"}})],1),a("el-form-item",{attrs:{label:"年份：",prop:"year"}},[a("el-input",{model:{value:t.formData.year,callback:function(e){t.$set(t.formData,"year",e)},expression:"formData.year"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.getApi}},[t._v("查询")]),a("el-button",{on:{click:function(e){return t.reset("form")}}},[t._v("重置")])],1)],1),a("div",{attrs:{id:"mychart"}})],1)},j=[],S={北京:"beijing",天津:"tianjin",上海:"shanghai",重庆:"chongqing",三亚:"sanya",广州:"guangzhou",深圳:"shenzhen",成都:"chengdu",丽江:"lijiang"},H=a("313e"),F={data:function(){return{upload:!1,uploadFormData:{city:"",date:""},formData:{city:"",year:""},uploadRules:{city:[{required:!0,message:"内容不能爲空",trigger:"blur"}],date:[{required:!0,message:"内容不能爲空",trigger:"blur"}]},rules:{city:[{required:!0,message:"内容不能爲空",trigger:"blur"}],year:[{required:!0,message:"内容不能爲空",trigger:"blur"}]},chart:"",chartOption:{title:{text:""},tootip:{},xAxis:{data:[]},yAxis:{},series:[{name:"最高气温",type:"scatter",data:[]},{name:"最低气温",type:"scatter",data:[],color:"#2cb4e5"},{name:"气温温差",type:"bar",data:[],color:"#000000"}]}}},mounted:function(){},methods:{changePostOrGet:function(){this.upload=!this.upload},getApi:function(){var t=this,e=this,a=S[this.formData.city],n="http://localhost:4000/weather?city=".concat(a,"&year=").concat(this.formData.year);this.axios.get(n).then((function(a){for(var n=0;n<a.data.data.length;n++)e.chartOption.title.text="".concat(e.formData.year,"年 ").concat(e.formData.city," 最高气温和最低气温"),e.chartOption.xAxis.data[n]="".concat(a.data.data[n].date.substr(5,2),"/").concat(a.data.data[n].date.substr(8,2)),console.log(a.data.data),e.chartOption.series[0].data[n]=parseInt(a.data.data[n].maxTemperature),e.chartOption.series[1].data[n]=parseInt(a.data.data[n].minTemperature),e.chartOption.series[2].data[n]=parseInt(a.data.data[n].maxTemperature)-parseInt(a.data.data[n].minTemperature);t.setChart()})).catch((function(t){console.log(t)}))},setChart:function(){document.getElementById("mychart").style.height="550px",document.getElementById("mychart").style.width="100%";var t=H.init(document.getElementById("mychart"));t.setOption(this.chartOption)},reset:function(t){this.$refs[t].resetFields()},setCity:function(){var t=this,e=this,a="http://localhost:4000/saveWeather",n={city:S[e.uploadFormData.city],date:e.uploadFormData.date};this.axios.post(a,n).then((function(e){console.log("上传成功",e),t.changePostOrGet()})).catch((function(t){console.log(t)}))}},watch:{},computed:{}},M=F,$=(a("ff5a"),Object(h["a"])(M,E,j,!1,null,"4447f3b3",null)),T=$.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("router-view")],1)},N=[],W={data:function(){return{}},mounted:function(){},methods:{},watch:{},computed:{}},R=W,z=Object(h["a"])(R,I,N,!1,null,"b9f5d710",null),P=z.exports,Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"eidt_switch"},[a("el-switch",{attrs:{"active-text":"编辑模式"},model:{value:t.calendarConfig.isEdit,callback:function(e){t.$set(t.calendarConfig,"isEdit",e)},expression:"calendarConfig.isEdit"}})],1),a("div",{staticClass:"calendar"},[a("div",{staticClass:"calendar_btn_group"},[a("div",{staticClass:"calendar_btn",on:{click:t.prevMonth}},[t._v("上月")]),a("div",{staticClass:"calendar_btn",staticStyle:{width:"14rem","text-align":"center"}},[t._v(" "+t._s(t.date.getFullYear())+"年"+t._s(t.date.getMonth()+1)+"月 ")]),a("div",{staticClass:"calendar_btn",on:{click:t.nextMonth}},[t._v("下月")])]),a("div",{staticClass:"border_title",style:{backgroundColor:t.calendarConfig.tableHead.backgroundColor,color:t.calendarConfig.tableHead.color}},t._l(t.week,(function(e,n){return a("div",{key:n},[t._v(" "+t._s(e)+" ")])})),0),a("div",{staticClass:"border",style:{height:t.borderHeight+"rem"}},t._l(t.arr,(function(e,n){return a("div",{key:"item"+n,staticClass:"row",style:{left:t.offsetBorder+"rem",width:7*e.length+"rem"}},t._l(e,(function(e){return a("div",{directives:[{name:"show",rawName:"v-show",value:t.showNum(e),expression:"showNum(it)"}],key:e,staticClass:"item",style:{height:t.itemHeight+"rem",lineHeight:t.itemHeight+"rem",backgroundColor:t.todayBC(e),color:t.todayC(e)}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e,expression:"it"}]},[t.workOrRest(e)?a("div",{staticClass:"tag",style:{color:t.todayTC(e,t.calendarConfig.tableBody.restColor)}},[t._v(" 休 ")]):a("div",{staticClass:"tag",style:{color:t.todayTC(e,t.calendarConfig.tableBody.workColor)}},[t._v(" 班 ")])]),a("span",[t._v(t._s(e))]),"string"==typeof t.workOrRest(e)?a("span",{staticClass:"festival",style:{color:t.calendarConfig.tableBody.festivalColor}},[t._v(t._s(t.workOrRest(e)))]):t._e(),t.jieqi(e)?a("span",{staticClass:"festival",style:{color:t.calendarConfig.tableBody.festivalColor}},[t._v(t._s(t.jieqi(e)))]):t._e()])})),0)})),0)]),t.calendarConfig.isEdit?a("div",{staticClass:"calendar_config"},[a("el-form",{attrs:{"label-width":"8rem"}},[a("div",{staticClass:"calendar_config_group"},[a("div",{staticClass:"calendar_title"},[t._v("表头配置")]),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"表头背景颜色"}},[a("el-color-picker",{model:{value:t.calendarConfig.tableHead.backgroundColor,callback:function(e){t.$set(t.calendarConfig.tableHead,"backgroundColor",e)},expression:"calendarConfig.tableHead.backgroundColor"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"表头文字颜色"}},[a("el-color-picker",{model:{value:t.calendarConfig.tableHead.color,callback:function(e){t.$set(t.calendarConfig.tableHead,"color",e)},expression:"calendarConfig.tableHead.color"}})],1)],1)],1)],1),a("div",{staticClass:"calendar_config_group"},[a("div",{staticClass:"calendar_title"},[t._v("表格配置")]),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"背景颜色"}},[a("el-color-picker",{model:{value:t.calendarConfig.tableBody.backgroundColor,callback:function(e){t.$set(t.calendarConfig.tableBody,"backgroundColor",e)},expression:"calendarConfig.tableBody.backgroundColor"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"文字颜色"}},[a("el-color-picker",{model:{value:t.calendarConfig.tableBody.color,callback:function(e){t.$set(t.calendarConfig.tableBody,"color",e)},expression:"calendarConfig.tableBody.color"}})],1)],1)],1),a("el-row",[a("el-col",[a("el-form-item",{attrs:{label:"节日文字颜色"}},[a("el-color-picker",{model:{value:t.calendarConfig.tableBody.festivalColor,callback:function(e){t.$set(t.calendarConfig.tableBody,"festivalColor",e)},expression:"calendarConfig.tableBody.festivalColor"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"休息角标颜色"}},[a("el-color-picker",{model:{value:t.calendarConfig.tableBody.restColor,callback:function(e){t.$set(t.calendarConfig.tableBody,"restColor",e)},expression:"calendarConfig.tableBody.restColor"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"上班角标颜色"}},[a("el-color-picker",{model:{value:t.calendarConfig.tableBody.workColor,callback:function(e){t.$set(t.calendarConfig.tableBody,"workColor",e)},expression:"calendarConfig.tableBody.workColor"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"今日背景颜色"}},[a("el-color-picker",{model:{value:t.calendarConfig.tableBody.todayBackgroundColor,callback:function(e){t.$set(t.calendarConfig.tableBody,"todayBackgroundColor",e)},expression:"calendarConfig.tableBody.todayBackgroundColor"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"今日文字颜色"}},[a("el-color-picker",{model:{value:t.calendarConfig.tableBody.todayColor,callback:function(e){t.$set(t.calendarConfig.tableBody,"todayColor",e)},expression:"calendarConfig.tableBody.todayColor"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{offset:14,span:4}},[a("el-button",{on:{click:t.resetCalendarConfig}},[t._v("重置")])],1),a("el-col",{attrs:{span:4}},[a("el-button",{attrs:{type:"primary"},on:{click:t.saveCalendarConfig}},[t._v("保存")])],1)],1)],1)])],1):t._e(),a("div",{staticClass:"live2d"},[a("live2d",{attrs:{height:350,modelPath:"/live2dw/assets/asuna_33.model.json"}})],1)])},q=[],A=(a("caad"),a("d81d"),a("fb6a"),a("d3b7"),{rest:{1:["1","2","3"],2:["11","12","13","14","15","16","17"],4:["3","4","5"],5:["1","2","3","4","5"],6:["12","13","14"],9:["19","20","21"],10:["1","2","3","4","5","6","7"]},work:{2:["7","20"],4:["25"],5:["8"],9:["18","26"],10:["9"]},festival:{1:{1:"元旦节"},2:{11:"除夕",12:"春节"},4:{3:"清明节"},5:{1:"劳动节"},6:{12:"端午节"},9:{19:"中秋节"},10:{1:"国庆节"}},lunarInfo:[19416,19168,42352,21717,53856,55632,91476,22176,39632,21970,19168,42422,42192,53840,119381,46400,54944,44450,38320,84343,18800,42160,46261,27216,27968,109396,11104,38256,21234,18800,25958,54432,59984,28309,23248,11104,100067,37600,116951,51536,54432,120998,46416,22176,107956,9680,37584,53938,43344,46423,27808,46416,86869,19872,42416,83315,21168,43432,59728,27296,44710,43856,19296,43748,42352,21088,62051,55632,23383,22176,38608,19925,19152,42192,54484,53840,54616,46400,46752,103846,38320,18864,43380,42160,45690,27216,27968,44870,43872,38256,19189,18800,25776,29859,59984,27480,21952,43872,38613,37600,51552,55636,54432,55888,30034,22176,43959,9680,37584,51893,43344,46240,47780,44368,21977,19360,42416,86390,21168,43312,31060,27296,44368,23378,19296,42726,42208,53856,60005,54576,23200,30371,38608,19195,19152,42192,118966,53840,54560,56645,46496,22224,21938,18864,42359,42160,43600,111189,27936,44448,84835,37744,18936,18800,25776,92326,59984,27424,108228,43744,41696,53987,51552,54615,54432,55888,23893,22176,42704,21972,21200,43448,43344,46240,46758,44368,21920,43940,42416,21168,45683,26928,29495,27296,44368,84821,19296,42352,21732,53600,59752,54560,55968,92838,22224,19168,43476,41680,53584,62034,54560],differDays:[24],cOfSolarTerms:[5.4055,20.12,3.87,18.73,5.63,20.646,4.81,20.1,5.52,21.04,5.678,21.37,7.108,22.83,7.5,23.13,7.646,23.042,8.318,23.438,7.438,22.36,7.18,21.94],solarTerms:["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"]}),J={data:function(){return{screenWidth:document.body.clientWidth,timer:!1,arr:[[,,,,,,1,2,3,4,5,6,7],[2,3,4,5,6,7,8,9,10,11,12,13,14],[9,10,11,12,13,14,15,16,17,18,19,20,21],[16,17,18,19,20,21,22,23,24,25,26,27,28],[23,24,25,26,27,28,29,30,31,,,,,,,],[30,31,,,,,,,,,,,,]],week:["日","一","二","三","四","五","六"],date:"",itemHeight:4,d:[],solarTerms:[],calendarConfig:{isEdit:!1,tableHead:{backgroundColor:"#f74242",color:"#ffffff"},tableBody:{border:"",backgroundColor:"#f8f8f8",color:"#000000",festivalColor:"#f74242",restColor:"#0d9bee",workColor:"#f74242",todayColor:"#ffffff",todayBackgroundColor:"#62e795"}}}},created:function(){this.date=this.$store.getters.getDate,this.d=this.formula()},mounted:function(){this.checkCalendarConfigStorage();var t=this;t.setFontSize(),window.onresize=function(){return function(){var e=document.body.clientWidth;t.screenWidth=e}()}},methods:{checkCalendarConfigStorage:function(){if(!localStorage.getItem("calendarConfig"))return!1;var t=JSON.parse(localStorage.getItem("calendarConfig"));this.calendarConfig=t},resetCalendarConfig:function(){this.calendarConfig.tableHead={backgroundColor:"#f74242",color:"#ffffff"},this.calendarConfig.tableBody={border:"",backgroundColor:"#f8f8f8",color:"#000000",festivalColor:"#f74242",restColor:"#0d9bee",workColor:"#f74242",todayColor:"#ffffff",todayBackgroundColor:"#62e795"}},saveCalendarConfig:function(){localStorage.setItem("checkCalendarConfigStorage",JSON.stringify(this.calendarConfig)),this.calendarConfig.isEdit=!1},formula:function(){var t=this.date.getFullYear(),e=.2422,a=this.date.getMonth()+1,n=[A.cOfSolarTerms[2*a-2],A.cOfSolarTerms[2*a-1]];this.solarTerms=[A.solarTerms[2*a-2],A.solarTerms[2*a-1]];var o=Math.floor(t/4)-Math.floor(t/100)+Math.floor(t/400);return n.map((function(a){return Math.round(t*e+a)-o}))},setFontSize:function(){this.screenWidth<760?document.documentElement.style.fontSize=this.screenWidth/60+"px":document.documentElement.style.fontSize=this.screenWidth/100+"px"},lunarCalendar:function(){var t=A.lunarInfo[this.date.getFullYear()-1900].toString(2);if(t.length<16)for(var e=t.length;t.length<16;e++)t="0"+t;var a,n=parseInt(t.substring(t.length-4),2),o=t.slice(0,t.length-4);0!==n&&(a=A.lunarInfo[this.date.getFullYear()-1900]+""),console.log("十六进制：",t,"闰月：",n,"农历各月份天数：",o,"闰月大小：",a)},prevMonth:function(){var t=this.date.getMonth();0===t&&(t=12);var e=new Date("".concat(this.date.getFullYear(),"-").concat(t,"-").concat(this.date.getDate()));this.date=e,this.d=this.formula()},nextMonth:function(){var t=this.date.getMonth();11===t&&(t=-1);var e=new Date("".concat(this.date.getFullYear(),"-").concat(t+2,"-").concat(this.date.getDate()));this.date=e,this.d=this.formula()}},watch:{screenWidth:function(t){if(!this.timer){this.screenWidth=t,this.timer=!0;var e=this;setTimeout((function(){e.setFontSize(),e.timer=!1}),10)}}},computed:{offsetBorder:function(){var t=this.date,e=new Date("".concat(t.getFullYear(),"/").concat(t.getMonth()+1,"/01")),a=e.getDay(),n=a-0;return 7*(n-6)},borderHeight:function(){var t=this.date,e=new Date("".concat(t.getFullYear(),"/").concat(t.getMonth()+1,"/01")),a=e.getDay()>4?6:5;return a*this.itemHeight},jieqi:function(){return function(t){if(this.d.indexOf(t)>=0){var e=this.solarTerms[this.d.indexOf(t)];return e||!0}}},workOrRest:function(){return function(t){var e=this.date.getFullYear(),a=this.date.getMonth()+1,n=new Date("".concat(e,"/").concat(a,"/").concat(t)),o=n.getDay();if(A.rest[a]&&A.rest[a].indexOf(String(t))>=0){var r=A.festival[a][t];return r||!0}return!(A.work[a]&&A.work[a].indexOf(String(t))>=0)&&(0==o||6==o)}},showNum:function(){return function(t){var e=!0;return[2,4,6,9,11].includes(this.date.getMonth()+1)&&31==t&&(e=!1),this.date.getMonth()+1==2&&30==t&&(e=!1),this.date.getMonth()+1==2&&29==t&&(e=!(this.date.getFullYear()%4)),e}},todayBC:function(){var t=this;return function(e){return e!==t.date.getDate()?t.calendarConfig.tableBody.backgroundColor:t.calendarConfig.tableBody.todayBackgroundColor}},todayC:function(){var t=this;return function(e){return e!==t.date.getDate()?t.calendarConfig.tableBody.color:t.calendarConfig.tableBody.todayColor}},todayTC:function(){var t=this;return function(e,a){return e!==t.date.getDate()?a:t.calendarConfig.tableBody.todayColor}}}},Q=J,G=(a("a88f"),Object(h["a"])(Q,Y,q,!1,null,"077c5b7c",null)),L=G.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"whim"},t._l(t.routes,(function(e,n){return a("div",{key:n,staticClass:"whimMenu"},["目录"!=e.title?a("router-link",{attrs:{to:{name:e.name}}},[t._v(t._s(e.title))]):t._e()],1)})),0)},K=[],V=(a("7db0"),a("b0c0"),{data:function(){return{routes:Array}},mounted:function(){this.getRoute()},methods:{getRoute:function(){var t=this.$router.options.routes,e=this.$route.matched,a=t.find((function(t){return t.name==e[0].name}));this.routes=a.children}},watch:{},computed:{}}),X=V,Z=(a("3228"),Object(h["a"])(X,U,K,!1,null,"00220168",null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"gitPage"},[a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:18}},[a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"title"},[t._v("git常用语句 "),a("ruby",[t._v("(个人向、待补充)"),a("rt",[t._v("我是真的喜欢蓝色")])])])])],1),t._l(t.data,(function(e,n){return a("el-row",{key:n,attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:20}},[a("div",{staticClass:"title"},[t._v(t._s(e.command))]),a("div",[t._v(t._s(e.desc))])])],1)})),a("el-row",[a("el-col",{attrs:{span:24}},[a("span",{staticClass:"small_font"},[t._v("要是有写错的地方，那我就GG了")])])],1)],2)],1)],1)},at=[],nt={data:function(){return{data:[{command:"git pull origin",desc:"数据拉取，将远程仓库同步到本地"},{command:"git push origin",desc:"数据推送，将代码同步到远程仓库"},{command:"git remote -v",desc:"远程仓库地址"},{command:"git branch",desc:"代码分支，加上‘-a’就可以查看全部分支，包括远程分支"},{command:"git checkout -b branch1",desc:"创建本地分支branch1，并且切换到分支branch1"}]}},mounted:function(){},methods:{},watch:{},computed:{}},ot=nt,rt=(a("aec2"),Object(h["a"])(ot,et,at,!1,null,"7bb445cc",null)),it=rt.exports,lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"countdown"},[a("span",{staticClass:"time title"},[t._v(t._s(t.title))]),t.hours?a("div",[a("span",{staticClass:"time"},[t._v(t._s(t.hours))]),a("span",{staticClass:"time"},[t._v("小时")]),a("span",{staticClass:"time"},[t._v(t._s(t.minutes))]),a("span",{staticClass:"time"},[t._v("分钟")]),a("span",{staticClass:"time"},[t._v(t._s(t.seconds))]),a("span",{staticClass:"time"},[t._v("秒")])]):a("div",[a("span",[t._v("have a good day")])])])},st=[],ct=(a("b64b"),{data:function(){return{title:"距离下一个假期还有",hours:"00",minutes:"00",seconds:"00"}},mounted:function(){var t=this,e=new Date((new Date).setHours(0,0,0,0)),a=A.festival,n=this.getNextFestival(e,a);console.log(n),setInterval((function(){t.countdown(n)}),250)},methods:{getNextFestival:function(t,e){for(var a=e,n=0,o=Object.keys(a);n<o.length;n++){var r=o[n];if(r<t.getMonth()+1)delete a[r];else if(r==t.getMonth()+1){for(var i=0,l=Object.keys(a[r]);i<l.length;i++){var s=l[i];s<t.getDate()&&delete a[r][s]}0===Object.keys(a[r]).length&&delete a[r]}}var c=Object.keys(a)[0],u=Object.keys(a[c])[0];return this.title="距离".concat(e[c][u],"还有"),"".concat(t.getFullYear(),"-").concat(c,"-").concat(u," 00:00")},countdown:function(t){var e=new Date(t),a=new Date,n=parseInt((e.getTime()-a.getTime())/1e3);if(this.hours=parseInt(n/3600),this.hours<0)return!1;this.hours<10&&(this.hours="0".concat(this.hours)),this.minutes=parseInt((n-3600*this.hours)/60),this.minutes<10&&(this.minutes="0".concat(this.minutes)),this.seconds=parseInt(n-3600*this.hours-60*this.minutes),this.seconds<10&&(this.seconds="0".concat(this.seconds))},getData:function(){}},watch:{},computed:{}}),ut=ct,dt=(a("72e3"),Object(h["a"])(ut,lt,st,!1,null,"c15dccbc",null)),ft=dt.exports,ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",[t._v("自定义选项颜色")]),a("el-checkbox-group",{on:{change:t.changeRadioButtonColor},model:{value:t.formData,callback:function(e){t.formData=e},expression:"formData"}},t._l(t.config,(function(e,n){return a("el-checkbox-button",{key:n,ref:"checkbox"+n,refInFor:!0,attrs:{label:e.value}},[t._v(t._s(e.name))])})),1),a("div",[t._v("下拉列表联动")]),a("el-row",[a("el-col",{attrs:{span:7}},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:t.changeSelect},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t}})})),1)],1),a("el-col",{attrs:{span:7}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}},t._l(t.options2,(function(t){return a("el-option",{key:t.value,attrs:{label:t.name,value:t.value}})})),1)],1),a("el-col",{attrs:{span:7}},[a("el-input",{model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})],1)],1),a("el-row",[a("el-button",{on:{click:function(e){return t.setHeaders()}}},[t._v("set header")])],1),a("div",[t._v("时间选择器")]),a("el-row",[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间"},model:{value:t.dateTime,callback:function(e){t.dateTime=e},expression:"dateTime"}})],1)],1)},mt=[],pt=(a("4de4"),a("96cf"),a("1da1")),gt=a("b85c"),vt={data:function(){return{formData:[],config:[{name:"1",value:1,color:"#ff0000"},{name:"2",value:2,color:"#00ff00"},{name:"3",value:3,color:"#0000ff"}],options:[{value:"选项1",label:"黄金糕",class:1,shop:"店铺1"},{value:"选项2",label:"双皮奶",class:2,shop:"店铺2"},{value:"选项3",label:"蚵仔煎",class:3,shop:"店铺3"},{value:"选项4",label:"龙须面",class:4,shop:"店铺4"},{value:"选项5",label:"北京烤鸭",class:5,shop:"店铺5"}],value:"",value2:"",options2:[{value:1,name:"选项1"},{value:2,name:"选项2"},{value:3,name:"选项3"},{value:4,name:"选项4"},{value:5,name:"选项5"}],input:"",correspond:[{control:"value2",value:"class"},{control:"input",value:"value"}],dateTime:null}},mounted:function(){},methods:{changeRadioButtonColor:function(t){var e,a=this.config.filter((function(e,a){return e.index=a,e.value===t[t.length-1]})),n=this.$refs["checkbox"+(null===(e=a[0])||void 0===e?void 0:e.index)][0].$el.children[1];n.style.background=a[0].color,n.style.borderColor=a[0].color,n.style.boxShadow="-1px 0 0 0 ".concat(a[0].color)},changeSelect:function(t){var e,a=Object(gt["a"])(this.correspond);try{for(a.s();!(e=a.n()).done;){var n=e.value;this[n.control]=t[n.value]}}catch(o){a.e(o)}finally{a.f()}},setHeaders:function(){var t=this;return Object(pt["a"])(regeneratorRuntime.mark((function e(){var a,n,o,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a="http://localhost:4000/saveWeather",n={test:"test"},o={token:"fullName"},e.next=5,t.axios.post(a,n,{headers:o});case 5:r=e.sent,i=r.data,console.log(i);case 8:case"end":return e.stop()}}),e)})))()}},watch:{},computed:{}},bt=vt,yt=Object(h["a"])(bt,ht,mt,!1,null,"5399337f",null),Ct=yt.exports,_t=[{path:"/",name:"index",component:p,title:"蒋闻铭的主页"},{path:"/calculate",name:"calculate",component:_,title:"哔哩哔哩"},{path:"/fakedata",name:"fakedata",component:B,title:"接口数据测试"},{path:"/weather",name:"weather",component:T,title:"天气"},{path:"/whim",component:P,title:"蒋闻铭的突发奇想",children:[{path:"/",name:"menu",component:tt,title:"目录"},{path:"calendar",name:"calendar",component:L,title:"蒋闻铭的日历"},{path:"git",name:"git",component:it,title:"蒋闻铭的git"},{path:"countdown",name:"countdown",component:ft,title:"蒋闻铭的倒计时"},{path:"elementUI",name:"elementUI",component:Ct,title:"蒋闻铭的ElementUI"}]}],wt=_t,xt={data:function(){return{route:wt,drawer:!1}},mounted:function(){},methods:{},watch:{},computed:{}},kt=xt,Dt=(a("2739"),Object(h["a"])(kt,i,l,!1,null,"1bae50df",null)),Ot=Dt.exports,Bt={name:"App",components:{navigation:Ot}},Et=Bt,jt=(a("034f"),Object(h["a"])(Et,o,r,!1,null,null,null)),St=jt.exports,Ht=a("8c4f");n["default"].use(Ht["a"]);var Ft=new Ht["a"]({routes:wt}),Mt=a("2f62");n["default"].use(Mt["a"]);var $t=new Mt["a"].Store({state:{date:new Date},getters:{getDate:function(t){return t.date}},mutations:{},actions:{}}),Tt=$t,It=a("bc3a"),Nt=a.n(It),Wt=a("5c96"),Rt=a.n(Wt),zt=(a("0fae"),a("fffc")),Pt=a.n(zt);a("6672");n["default"].prototype.axios=Nt.a,n["default"].use(Rt.a),n["default"].use(Pt.a),n["default"].config.productionTip=!1,new n["default"]({el:"#app",router:Ft,store:Tt,render:function(t){return t(St)}}).$mount("#app")},"5e26":function(t,e,a){},6672:function(t,e,a){},"72e3":function(t,e,a){"use strict";var n=a("ca6e"),o=a.n(n);o.a},"85ec":function(t,e,a){},"8ff3":function(t,e,a){t.exports=a.p+"static/img/QQ图片20170115163333.1eb30aad.png"},9173:function(t,e,a){"use strict";var n=a("1eb9"),o=a.n(n);o.a},a4e9:function(t,e,a){},a88a:function(t,e,a){},a88f:function(t,e,a){"use strict";var n=a("a88a"),o=a.n(n);o.a},aec2:function(t,e,a){"use strict";var n=a("5e26"),o=a.n(n);o.a},ca15:function(t,e,a){},ca6e:function(t,e,a){},e849:function(t,e,a){t.exports=a.p+"static/img/d4bbcfe06fbfa4830422bfb69647c3c68bb932bc.1f7082fc.jpg"},eb8e:function(t,e,a){t.exports=a.p+"static/img/3bbb8053gy1fe02txccv2j20bq0kudhh.13631c37.jpg"},f729:function(t,e,a){t.exports=a.p+"static/img/QQ图片20170316160757.1d242e91.png"},ff5a:function(t,e,a){"use strict";var n=a("00f8"),o=a.n(n);o.a}});
//# sourceMappingURL=app.44588b55.js.map