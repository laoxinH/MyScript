lx = init("getLeave.js");

/****************
 1. 务必遵守疫情防控、法律法规、校规！
 2. 至少正常请假一次，本脚本才能运行。
 3. 脚本没有对服务器上的数据进行操作。
 4. 仅供交流学习，请在下载后24小时内删除。一切责任由使用者自负，与作者无关。

 Quantumult X 配置参考，其他软件类似
 [rewrite]
 脚本: getLeave.js
 类型: script-response-body
 url: ^https://student\.wozaixiaoyuan\.com/leave2/getLeave\.json

 [Mitm]
 主机名: student.wozaixiaoyuan.com

 ****************/

if (!lx.isResponse()) {
    lx.log("$response不存在，启动方式错误，应以rewrite和mitm方式启动");
    lx.done()
};

//自定义设置，根据需要自行更改，不填写则不会更改
var user = {
    //指定假期开始时间结束时间 格式 "2021-06-28 10:00"
    //不指定则默认开始时间为当前 前1小时，结束时间当前 后2小时，不同时间打开会改变
    "start": "",
    "end": "",

    "state": 2,//假条状态 2应该是假期中
    "out": 1,//是否离校 1是 0否
    "studentName": "1313",//姓名，留空不变
    "studentId": "13131",//学生id，留空不变
    "type": "事假",//请假类型 事假 病假 实习 科研 出差 回家，留空不变
    "route": "13131",//外出地点，留空不变
    "location": "13113",//校区,销假地点,留空不变，注意格式[\"佛山三水校区\"]
    "tel": "13131",//紧急联系电话，留空不变
    "reason": "1313131",//请假理由，留空不变
    "userHead": "http://lorempixel.com/200/200/",//学生头像，默认随机，留空不变

    //下面这部分似乎不会在页面上显示
    "date": "",//请假提交时间，，留空不变
    "school": "",//学校，留空不变
    "college": "",//学院，留空不变
    "grade": "",//班级，留空不变
    "number": "",//学号，留空不变
    "phone": "",//电话，留空不变

    //下面这两条作用不明，懒得测试
    "scanHistory": [],//留空不变
    "imgs": [],//留空不变

    "teacher": "",//老师姓名，留空不变
    "approve": [
        {
            "time": "",//审批时间，留空随机生成，格式12.21 11:10

            "state": 2,//审核状态 3拒绝 2通过 1审批中
            "userType": 4,//老师身份，4为辅导员，3为院级，2为校级
            "name": "lll",//老师姓名，留空不变
            "reason": "131313",//审批理由，留空不变
            "position": "131311",//老师学院，留空不变
            "head": "http://lorempixel.com/400/400/"//老师头像，默认随机，留空不变
        }
    ]
};

Date.prototype.format=function(fmt){var o={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),"S":this.getMilliseconds()};if(/(y+)/.test(fmt)){fmt=fmt.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))};for(var k in o){if(new RegExp("("+k+")").test(fmt)){fmt=fmt.replace(RegExp.$1,(RegExp.$1.length==1)?(o[k]):(("00"+o[k]).substr((""+o[k]).length)))}};return fmt};

function getFormatTime(time, flag) {
    if (flag === 1) {
        return time.format("yyyy-MM-dd hh:mm")
    } else {
        return time.format("MM-dd hh:mm")
    }
};

//以下生成时间
var time = new Date();
time.setMinutes(0, 0, 0);
if (user["start"] == "" && user["end"] == "") {
    time.setHours(time.getHours() - 1);
    user["start"] = getFormatTime(time, 1);//开始时间
    time.setHours(time.getHours() + 3);
    user["end"] = getFormatTime(time, 1);//结束时间
};
if (user["approve"][0]["time"] == "") {//批假时间 前一天随机时刻
    time.setHours(Math.floor(Math.random() * (22 - 9 + 1) + 9), Math.floor(Math.random() * 60));
    time.setDate(time.getDate() - 1);
    user["approve"][0]["time"] = getFormatTime(time, 2);
};


let  data = {
    approve:[]
};

for (x in user) {//读取用户自定义设置
    if (x != "approve") {
        if (user[x]) {
            data[x] = user[x];
        }
    }
};
for (y in user["approve"][0]) {//读取用户自定义设置
    if (user["approve"][0][y]) {
        data["approve"][0][y] = user["approve"][0][y];
    }
};

function init(name){const startTime=new Date().getTime();const isRequest=function(){return"undefined"!==typeof $request};const isResponse=function(){return"undefined"!==typeof $response};const isPost=function(){return"POST"===$request.method};const isGet=function(){return"GET"===$request.method};const isNode=function(){return'undefined'!==typeof module&&!!module.exports};const isQuanX=function(){return'undefined'!==typeof $task};const isSurge=function(){return'undefined'!==typeof $httpClient&&'undefined'===typeof $loon};const isLoon=function(){return'undefined'!==typeof $loon};const toObj=function(str,defaultValue=null){try{return JSON.parse(str)}catch{return defaultValue}};const toStr=function(obj,defaultValue=null){try{return JSON.stringify(obj)}catch{return defaultValue}};const msg=function(title,subtitle='',desc=''){if(isQuanX()){$notify(title,subtitle,desc)}else if(isSurge()||isLoon()){$notification.post(title,subtitle,desc)}};const log=function(...logs){if(logs.length>0){logs=[...logs]};console.log(logs.join("\n"))};const get=async function(opts,callback){if(isSurge()||isLoon()){await $httpClient.get(opts,function(err,res,body){if(!err&&res){res.body=body;res.statusCode=res.status};callback(err,res,body)})}else if(isQuanX()){opts.method="GET";await $task.fetch(opts).then(function(res){const{statusCode:status,statusCode,headers,body}=res;callback(null,{status,statusCode,headers,body},body)},function(err){callback(err)})}};const post=async function(opts,callback=function(){}){if(isSurge()||isLoon()){await $httpClient.post(opts,function(err,res,body){if(!err&&res){res.body=body;res.statusCode=res.status};callback(err,res,body)})}else if(isQuanX()){opts.method="POST";await $task.fetch(opts).then(function(res){const{statusCode:status,statusCode,headers,body}=res;callback(null,{status,statusCode,headers,body},body)},function(err){callback(err)})}};const r=function(key){if(isQuanX()){return $prefs.valueForKey(key)}else if(isSurge()||isLoon()){return $persistentStore.read(key)}};const w=function(val,key){if(isQuanX()){return $prefs.setValueForKey(val,key)}else if(isSurge()||isLoon()){return $persistentStore.write(val,key)}};const wait=function(time){return new Promise(function(resolve){setTimeout(resolve,time)})};const done=function(val={}){const endTime=new Date().getTime();const costTime=(endTime-startTime)/1000;log(name+" 结束运行，耗时："+costTime);if(isQuanX()||isSurge()||isLoon()){$done(val)}};return{msg,log,get,post,done,r,w,wait,toObj,toStr,isLoon,isNode,isQuanX,isSurge,isRequest,isResponse,isPost,isGet};};

lx.done({ body: lx.toStr(bd) });
