/**
 * 我在校园健康打卡
 * @author: github@laoxinH
 * @version: 1.0
 * 每天10点10分执行自动打卡
 ==============cookie获取方式===================
 打开我在校园微信小程序--"我的",脚本将会自动获取,当看到通知获取成功时即可
 ===============配置方式=========================
 ===#quanx====
 [rewrite_local]
 https:\/\/gw\.wozaixiaoyuan\.com\/basicinfo\/mobile\/my\/index url script-request-header https://raw.githubusercontent.com/laoxinH/MyScript/main/Quantumult/wozaixiaoyuan/cookie_wzxy.js
 ========================================
 [mitm]
 hostname = gw.woziaxiaoyuan.com
 ========================================
 [task_local]
 10 10 * * * https://raw.githubusercontent.com/laoxinH/MyScript/main/Quantumult/wozaixiaoyuan/wzxy_health.js, tag=我在校园健康打卡, img-url=https://github.com/laoxinH/MyScript/blob/main/Quantumult/wozaixiaoyuan/icon.jpg?raw=true, enabled=true

 =======boxjs订阅地址=======
 https://raw.githubusercontent.com/laoxinH/MyScript/main/boxjs/laoxin.boxjs.json
 **********************提示*************************
 *                                                *
 ** *其中设涉及填写的内容，node需要手动填写，ios参考注释* **
 *                                                *
 *******       *****************    ****************
 * */
const $laoxin = new Env("我在校园健康打卡");
const cookieKey = "Cookie_wzxy";
let cookieVal = $laoxin.getjson(cookieKey);
const JWSESSION = ""/**JWSESSION填写处，抓包获取，ios请使用cookie脚本自动获取*/ || cookieVal.JWSESSION;
let cookieName = ""/**填写自定义cookie名称，ios可通过脚本自动获取 */ || cookieVal.cookieName;
const autoLocation = false /**自动获取位置信息，ios若已安装boxjs请在boxjs中修改,未安装boxjs的和其他用户直接修改即可false表示关闭,true表示开启 */ || $laoxin.getdata("wzxy_autoLocation");
/**
 *  *****************答案填写说明********************
 *                                                *
 *  *答案填写区域,ios若已安装boxjs直接在boxjs中填写即可  *
 *     *node和未安装boxjs的ios用户请在双引号("")中填写  *
 *                                                *
 *******       *****************    ***************
 *
 * 非boxjs用户请在双引号("")中填写
 * https://restapi.amap.com/v3/geocode/regeo?key=5df7fee749f489424dd417dfcb792b45&location=106.76937866210938%2C31.666606903076172&extensions=all&s=rsx&platform=WXJS&appname=5df7fee749f489424dd417dfcb792b45&sdkversion=1.2.0&logversion=2.0
 * */
let data_answers = {
    answers: "" || $laoxin.getdata("wzxy_answers"),           // 填写答案,格式["0","0","0","2","3","2"]
    longitude: "" || $laoxin.getdata("wzxy_longitude"),       // 经度
    latitude: "" || $laoxin.getdata("wzxy_latitude"),         // 纬度
    /** 开启自动获取位置信息时，以下内容无需填写（即使填写也不会生效），只需填写以上的三个内容*/
    country: "" || $laoxin.getdata("wzxy_country"),           // 国家
    city: "" || $laoxin.getdata("wzxy_city"),                 // 城市
    district: "" || $laoxin.getdata("wzxy_district"),         // 区(县)
    province: "" || $laoxin.getdata("wzxy_province"),         // 省
    township: "" || $laoxin.getdata("wzxy_township"),         // 街道(镇) 如东城街道(大塘镇)
    street: "" || $laoxin.getdata("wzxy_street"),             // 街
    areacode: "" || $laoxin.getdata("wzxy_areacode")          // 区域代码
};
let reg_count = NaN;
if (!cookieKey) {
    $laoxin.msg($laoxin.name, `🔈请先获取cookie后在运行脚本`, "【提示】请打开我在校园小程序--\"我的\"重新获取!");
    $laoxin.done();
} else {
    start();
}

function start() {
    if (autoLocation) {
        $laoxin.log("【log】自动获取位置信息已开启,开始获取位置信息!");
        getLocation();
    } else {
        $laoxin.log("【log】自动获取位置信息已关闭!");
    }
    if (!cookieName){
        getUserInfo();
    } else {
        $laoxin.log(`【log】当前用户名：${cookieName}!`);
    }
    getRegNum();
    $laoxin.log("【log】等待⏱ 1 秒后开始执行");
    setTimeout(register, 1000);
    $laoxin.log(`【log】开始执行签到任务!`);
}

//签到方法
function register() {
    let title = $laoxin.name;
    let subTitle,
        detail;
   // $laoxin.log("数据获取","data",toStringBody(data_answers));
    $laoxin.post(getRequestData("health/save.json", toStringBody(data_answers)), (onerror, response, data) => {
        // 签到出错
        if (onerror) {
            $laoxin.logErr(onerror);
            subTitle = "❌未知错误"
            detail = "【提示】未知错误，请联系脚本作者获取帮助！"
        }
        const result = $laoxin.toObj(data);
        //签到成功
        if (result && result.code == 0) {
            subTitle = `【用户】${cookieName}：签到成功!`;
            detail = `【记录】当前签到日期:${$laoxin.time("yyyy-MM-dd")}\r\n👏累计签到次数：${reg_count}次👏`;
        } else if (result.code == -10) {
            // 签到失败
            subTitle = `【用户】${cookieName}：cookie失效!`;
            $laoxin.setdata("", cookieKey);
            detail = `【提示】当前cookie:${cookieVal}---已失效\r\n请打开我在校园小程序--"我的"重新获取!`;
        } else {
            subTitle = "❌答案不完整或已过签到时间,请检查!"
            detail = `【提示】请检查脚本(或者boxjs)答案处是否填写完整\r\n${JSON.stringify(result)}`;
        }
        $laoxin.msg(title, subTitle, detail);
        $laoxin.done();
    })
}

// 获取签到次数
function getRegNum() {
    $laoxin.post(getRequestData("health/getHealthLatest.json"), (onerror, response, data) => {
        if (onerror) {
            $laoxin.logErr(`【log】签到次数获取失败:${onerror}`);
            return;
        }
        const result = $laoxin.toObj(data);
        if (result && result.code == 0) {
            reg_count = result.data.length;
            $laoxin.log(`【log】已签到次数:${reg_count}`)
        } else {
            $laoxin.log(`【log】获取签到次数失败:${JSON.stringify(result)}`);
        }
    })
}

// 获取位置地址
function getLocation() {
    const latitude = $laoxin.getdata("wzxy_latitude");
    const longitude = $laoxin.getdata("wzxy_longitude");
    const url = `https://restapi.amap.com/v3/geocode/regeo?key=5df7fee749f489424dd417dfcb792b45&location=${longitude}%2C${latitude}&extensions=all&s=rsx&platform=WXJS&appname=5df7fee749f489424dd417dfcb792b45&sdkversion=1.2.0&logversion=2.0`;
    //$laoxin.msg("数据获取","data",url);
    $laoxin.post(getRequestData(url, ""), (onerror, response, data) => {
        if (onerror) {
            $laoxin.logErr(onerror);
            $laoxin.msg("🔈位置信息获取失败", "请重新获取", `【提示】如一直无法获取请关闭自动获取位置信息选项并手动填写到boxjs或者脚本答案区域中`);
            $laoxin.done();
        }
        const result = $laoxin.toObj(data);
        if (result && result.status == 1) {
            data_answers.areacode = result.regeocode.addressComponent.adcode;
            data_answers.city = result.regeocode.addressComponent.city;
            data_answers.country = result.regeocode.addressComponent.country;
            data_answers.district = result.regeocode.addressComponent.district;
            data_answers.province = result.regeocode.addressComponent.province;
            data_answers.township = result.regeocode.addressComponent.township;
            data_answers.street = result.regeocode.addressComponent.streetNumber.street;
            $laoxin.log("【log】位置获取成功",
                `当前位置: ${data_answers.country}${data_answers.province}${data_answers.city}${data_answers.district}${data_answers.township}${data_answers.street}`,
                `区域代码: ${data_answers.areacode}`);
        } else {
            $laoxin.msg("🔈位置信息获取失败", "请重新获取", `【提示】如一直无法获取请关闭自动获取位置信息选项并手动填写到boxjs或者脚本答案区域中`);
            $laoxin.done();
        }
    })
}

// 获取用户信息
function getUserInfo(){
    //https://gw.wozaixiaoyuan.com/basicinfo/mobile/my/index
    $laoxin.post(getRequestData("basicinfo/mobile/my/index"),(onerror,response,data)=>{
        if (onerror){
            $laoxin.logErr(`【log】用户信息获取失败: ${onerror}`)
            $laoxin.msg("🔈用户信息获取失败", "请重新获取", `【提示】如一直无法获取请手动填写脚本开头代码的cookieName中`);
            return;
        }
        const result = $laoxin.toObj(data);
        if (result && result.code == 0) {
            cookieName = result.data.username;
            cookieVal.cookieName = cookieName;
            $laoxin.setjson(cookieVal,cookieKey);
            $laoxin.log("【log】用户信息获取成功，下次将不在获取！")
        } else {
            $laoxin.msg("🔈用户信息获取失败", "请重新获取", `【提示】如一直无法获取请手动填写脚本开头代码的cookieName中`);
        }
    })
}

// 生成请求参数
function getRequestData(type, body) {
    const url = type.indexOf("http") != -1 ? type : `https://student.wozaixiaoyuan.com/${type}`;
    const headers = {
        "Host": "student.wozaixiaoyuan.com",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-cn",
        "Connection": "keep-alive",
        "User-Agent": "Mozilla/5.0 (iPad; CPU OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.9(0x18000929) NetType/WIFI Language/zh_CN",
        "Referer": "https://servicewechat.com/wxce6d08f781975d91/176/page-frame.html",
        //"token": "3b4ed663-8e59-44c2-b891-dcc70816315f",
        "Content-Length": "350",
        "Cookie": "[object Null]",
        "JWSESSION": JWSESSION
    };
    return {url: url, headers: headers, body: body};
}

//https://gw.wozaixiaoyuan.com/basicinfo/mobile/login/username?username=18382750609&password=laoxin0318&openId=o0-5d1rUvXNaZ9HqrVD9-g8QogHI&unionId=oUXUs1ZLNSUVEVEY3cuHSyP-JFn4&phoneInfo=3____ipad%3B+cpu+os+14_6+like+mac+os+x
// json序列化并编码uri
function toStringBody(parse) {
    //$laoxin.log("数据获取","json",JSON.stringify(parse));
    let stringBody = "";
    for (let key in parse) {
        stringBody += (key + "=" + parse[key] + "&");
    }
    return encodeURI(stringBody.substr(0, stringBody.length - 1));
}


function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}isShadowrocket(){return"undefined"!=typeof $rocket}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){if(t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){let s=require("iconv-lite");this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:i,statusCode:r,headers:o,rawBody:h}=t;e(null,{status:i,statusCode:r,headers:o,rawBody:h},s.decode(h,this.encoding))},t=>{const{message:i,response:r}=t;e(i,r,r&&s.decode(r.rawBody,this.encoding))})}}post(t,e=(()=>{})){const s=t.method?t.method.toLocaleLowerCase():"post";if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient[s](t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method=s,this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){let i=require("iconv-lite");this.initGotEnv(t);const{url:r,...o}=t;this.got[s](r,o).then(t=>{const{statusCode:s,statusCode:r,headers:o,rawBody:h}=t;e(null,{status:s,statusCode:r,headers:o,rawBody:h},i.decode(h,this.encoding))},t=>{const{message:s,response:r}=t;e(s,r,r&&i.decode(r.rawBody,this.encoding))})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
