/**
 * 网易云音乐人
 * @author: github@laoxinH
 * @version: 2.3
 * 每天10点10分执行任务，如有需要请自行修改cron表达式
 ==============cookie获取方式===================
 打开我在校园微信小程序--"我的",脚本将会自动获取,当看到通知获取成功时即可
 ===============配置方式=========================
 ===#quanx====
 [rewrite_local]
 https:\/\/music\.163\.com\/weapi\/feedback url script-request-header https://raw.githubusercontent.com/laoxinH/MyScript/main/Quantumult/wangyiyun/cookie_wyy.js
 ========================================
 [mitm]
 hostname = music.163.com
 ========================================
 [task_local]
 10 10 * * * https://raw.githubusercontent.com/laoxinH/MyScript/main/Quantumult/wangyiyun/wyy_yyr.js, tag=网易云音乐人, img-url=https://github.com/laoxinH/MyScript/blob/main/Quantumult/wangyiyun/icon.png?raw=true?raw=true, enabled=true
 =======boxjs订阅地址=======
 https://raw.githubusercontent.com/laoxinH/MyScript/main/boxjs/laoxin.boxjs.json
 */
const $ = new Env("网易云音乐云豆");
const api = new NCApi();


// CrytoJS加密
var CryptoJS=CryptoJS||function(u,p){var d={},l=d.lib={},s=function(){},t=l.Base={extend:function(a){s.prototype=this;var c=new s;a&&c.mixIn(a);c.hasOwnProperty("init")||(c.init=function(){c.$super.init.apply(this,arguments)});c.init.prototype=c;c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a){a.hasOwnProperty(c)&&(this[c]=a[c])}a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},r=l.WordArray=t.extend({init:function(a,c){a=this.words=a||[];this.sigBytes=c!=p?c:4*a.length},toString:function(a){return(a||v).stringify(this)},concat:function(a){var c=this.words,e=a.words,j=this.sigBytes;a=a.sigBytes;this.clamp();if(j%4){for(var k=0;k<a;k++){c[j+k>>>2]|=(e[k>>>2]>>>24-8*(k%4)&255)<<24-8*((j+k)%4)}}else{if(65535<e.length){for(k=0;k<a;k+=4){c[j+k>>>2]=e[k>>>2]}}else{c.push.apply(c,e)}}this.sigBytes+=a;return this},clamp:function(){var a=this.words,c=this.sigBytes;a[c>>>2]&=4294967295<<32-8*(c%4);a.length=u.ceil(c/4)},clone:function(){var a=t.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var c=[],e=0;e<a;e+=4){c.push(4294967296*u.random()|0)}return new r.init(c,a)}}),w=d.enc={},v=w.Hex={stringify:function(a){var c=a.words;a=a.sigBytes;for(var e=[],j=0;j<a;j++){var k=c[j>>>2]>>>24-8*(j%4)&255;e.push((k>>>4).toString(16));e.push((k&15).toString(16))}return e.join("")},parse:function(a){for(var c=a.length,e=[],j=0;j<c;j+=2){e[j>>>3]|=parseInt(a.substr(j,2),16)<<24-4*(j%8)}return new r.init(e,c/2)}},b=w.Latin1={stringify:function(a){var c=a.words;a=a.sigBytes;for(var e=[],j=0;j<a;j++){e.push(String.fromCharCode(c[j>>>2]>>>24-8*(j%4)&255))}return e.join("")},parse:function(a){for(var c=a.length,e=[],j=0;j<c;j++){e[j>>>2]|=(a.charCodeAt(j)&255)<<24-8*(j%4)}return new r.init(e,c)}},x=w.Utf8={stringify:function(a){try{return decodeURIComponent(escape(b.stringify(a)))}catch(c){throw Error("Malformed UTF-8 data")}},parse:function(a){return b.parse(unescape(encodeURIComponent(a)))}},q=l.BufferedBlockAlgorithm=t.extend({reset:function(){this.i4m=new r.init;this.sL0x=0},vE1x:function(a){"string"==typeof a&&(a=x.parse(a));this.i4m.concat(a);this.sL0x+=a.sigBytes},kG8y:function(a){var c=this.i4m,e=c.words,j=c.sigBytes,k=this.blockSize,b=j/(4*k),b=a?u.ceil(b):u.max((b|0)-this.JP5U,0);a=b*k;j=u.min(4*a,j);if(a){for(var q=0;q<a;q+=k){this.rb0x(e,q)}q=e.splice(0,a);c.sigBytes-=j}return new r.init(q,j)},clone:function(){var a=t.clone.call(this);a.i4m=this.i4m.clone();return a},JP5U:0});l.Hasher=q.extend({cfg:t.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){q.reset.call(this);this.ly8q()},update:function(a){this.vE1x(a);this.kG8y();return this},finalize:function(a){a&&this.vE1x(a);return this.mD8v()},blockSize:16,lT8L:function(a){return function(b,e){return(new a.init(e)).finalize(b)}},vy1x:function(a){return function(b,e){return(new n.HMAC.init(a,e)).finalize(b)}}});var n=d.algo={};return d}(Math);(function(){var u=CryptoJS,p=u.lib.WordArray;u.enc.Base64={stringify:function(d){var l=d.words,p=d.sigBytes,t=this.bA4E;d.clamp();d=[];for(var r=0;r<p;r+=3){for(var w=(l[r>>>2]>>>24-8*(r%4)&255)<<16|(l[r+1>>>2]>>>24-8*((r+1)%4)&255)<<8|l[r+2>>>2]>>>24-8*((r+2)%4)&255,v=0;4>v&&r+0.75*v<p;v++){d.push(t.charAt(w>>>6*(3-v)&63))}}if(l=t.charAt(64)){for(;d.length%4;){d.push(l)}}return d.join("")},parse:function(d){var l=d.length,s=this.bA4E,t=s.charAt(64);t&&(t=d.indexOf(t),-1!=t&&(l=t));for(var t=[],r=0,w=0;w<l;w++){if(w%4){var v=s.indexOf(d.charAt(w-1))<<2*(w%4),b=s.indexOf(d.charAt(w))>>>6-2*(w%4);t[r>>>2]|=(v|b)<<24-8*(r%4);r++}}return p.create(t,r)},bA4E:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}})();(function(u){function p(b,n,a,c,e,j,k){b=b+(n&a|~n&c)+e+k;return(b<<j|b>>>32-j)+n}function d(b,n,a,c,e,j,k){b=b+(n&c|a&~c)+e+k;return(b<<j|b>>>32-j)+n}function l(b,n,a,c,e,j,k){b=b+(n^a^c)+e+k;return(b<<j|b>>>32-j)+n}function s(b,n,a,c,e,j,k){b=b+(a^(n|~c))+e+k;return(b<<j|b>>>32-j)+n}for(var t=CryptoJS,r=t.lib,w=r.WordArray,v=r.Hasher,r=t.algo,b=[],x=0;64>x;x++){b[x]=4294967296*u.abs(u.sin(x+1))|0}r=r.MD5=v.extend({ly8q:function(){this.cO5T=new w.init([1732584193,4023233417,2562383102,271733878])},rb0x:function(q,n){for(var a=0;16>a;a++){var c=n+a,e=q[c];q[c]=(e<<8|e>>>24)&16711935|(e<<24|e>>>8)&4278255360}var a=this.cO5T.words,c=q[n+0],e=q[n+1],j=q[n+2],k=q[n+3],z=q[n+4],r=q[n+5],t=q[n+6],w=q[n+7],v=q[n+8],A=q[n+9],B=q[n+10],C=q[n+11],u=q[n+12],D=q[n+13],E=q[n+14],x=q[n+15],f=a[0],m=a[1],g=a[2],h=a[3],f=p(f,m,g,h,c,7,b[0]),h=p(h,f,m,g,e,12,b[1]),g=p(g,h,f,m,j,17,b[2]),m=p(m,g,h,f,k,22,b[3]),f=p(f,m,g,h,z,7,b[4]),h=p(h,f,m,g,r,12,b[5]),g=p(g,h,f,m,t,17,b[6]),m=p(m,g,h,f,w,22,b[7]),f=p(f,m,g,h,v,7,b[8]),h=p(h,f,m,g,A,12,b[9]),g=p(g,h,f,m,B,17,b[10]),m=p(m,g,h,f,C,22,b[11]),f=p(f,m,g,h,u,7,b[12]),h=p(h,f,m,g,D,12,b[13]),g=p(g,h,f,m,E,17,b[14]),m=p(m,g,h,f,x,22,b[15]),f=d(f,m,g,h,e,5,b[16]),h=d(h,f,m,g,t,9,b[17]),g=d(g,h,f,m,C,14,b[18]),m=d(m,g,h,f,c,20,b[19]),f=d(f,m,g,h,r,5,b[20]),h=d(h,f,m,g,B,9,b[21]),g=d(g,h,f,m,x,14,b[22]),m=d(m,g,h,f,z,20,b[23]),f=d(f,m,g,h,A,5,b[24]),h=d(h,f,m,g,E,9,b[25]),g=d(g,h,f,m,k,14,b[26]),m=d(m,g,h,f,v,20,b[27]),f=d(f,m,g,h,D,5,b[28]),h=d(h,f,m,g,j,9,b[29]),g=d(g,h,f,m,w,14,b[30]),m=d(m,g,h,f,u,20,b[31]),f=l(f,m,g,h,r,4,b[32]),h=l(h,f,m,g,v,11,b[33]),g=l(g,h,f,m,C,16,b[34]),m=l(m,g,h,f,E,23,b[35]),f=l(f,m,g,h,e,4,b[36]),h=l(h,f,m,g,z,11,b[37]),g=l(g,h,f,m,w,16,b[38]),m=l(m,g,h,f,B,23,b[39]),f=l(f,m,g,h,D,4,b[40]),h=l(h,f,m,g,c,11,b[41]),g=l(g,h,f,m,k,16,b[42]),m=l(m,g,h,f,t,23,b[43]),f=l(f,m,g,h,A,4,b[44]),h=l(h,f,m,g,u,11,b[45]),g=l(g,h,f,m,x,16,b[46]),m=l(m,g,h,f,j,23,b[47]),f=s(f,m,g,h,c,6,b[48]),h=s(h,f,m,g,w,10,b[49]),g=s(g,h,f,m,E,15,b[50]),m=s(m,g,h,f,r,21,b[51]),f=s(f,m,g,h,u,6,b[52]),h=s(h,f,m,g,k,10,b[53]),g=s(g,h,f,m,B,15,b[54]),m=s(m,g,h,f,e,21,b[55]),f=s(f,m,g,h,v,6,b[56]),h=s(h,f,m,g,x,10,b[57]),g=s(g,h,f,m,t,15,b[58]),m=s(m,g,h,f,D,21,b[59]),f=s(f,m,g,h,z,6,b[60]),h=s(h,f,m,g,C,10,b[61]),g=s(g,h,f,m,j,15,b[62]),m=s(m,g,h,f,A,21,b[63]);
        a[0]=a[0]+f|0;a[1]=a[1]+m|0;a[2]=a[2]+g|0;a[3]=a[3]+h|0},mD8v:function(){var b=this.i4m,n=b.words,a=8*this.sL0x,c=8*b.sigBytes;n[c>>>5]|=128<<24-c%32;var e=u.floor(a/4294967296);n[(c+64>>>9<<4)+15]=(e<<8|e>>>24)&16711935|(e<<24|e>>>8)&4278255360;n[(c+64>>>9<<4)+14]=(a<<8|a>>>24)&16711935|(a<<24|a>>>8)&4278255360;b.sigBytes=4*(n.length+1);this.kG8y();b=this.cO5T;n=b.words;for(a=0;4>a;a++){c=n[a],n[a]=(c<<8|c>>>24)&16711935|(c<<24|c>>>8)&4278255360}return b},clone:function(){var b=v.clone.call(this);b.cO5T=this.cO5T.clone();return b}});t.MD5=v.lT8L(r);t.HmacMD5=v.vy1x(r)})(Math);(function(){var u=CryptoJS,p=u.lib,d=p.Base,l=p.WordArray,p=u.algo,s=p.EvpKDF=d.extend({cfg:d.extend({keySize:4,hasher:p.MD5,iterations:1}),init:function(d){this.cfg=this.cfg.extend(d)},compute:function(d,r){for(var p=this.cfg,s=p.hasher.create(),b=l.create(),u=b.words,q=p.keySize,p=p.iterations;u.length<q;){n&&s.update(n);var n=s.update(d).finalize(r);s.reset();for(var a=1;a<p;a++){n=s.finalize(n),s.reset()}b.concat(n)}b.sigBytes=4*q;return b}});u.EvpKDF=function(d,l,p){return s.create(p).compute(d,l)}})();CryptoJS.lib.Cipher||function(u){var p=CryptoJS,d=p.lib,l=d.Base,s=d.WordArray,t=d.BufferedBlockAlgorithm,r=p.enc.Base64,w=p.algo.EvpKDF,v=d.Cipher=t.extend({cfg:l.extend(),createEncryptor:function(e,a){return this.create(this.JN5S,e,a)},createDecryptor:function(e,a){return this.create(this.bkt2x,e,a)},init:function(e,a,b){this.cfg=this.cfg.extend(b);this.YP9G=e;this.J4N=a;this.reset()},reset:function(){t.reset.call(this);this.ly8q()},process:function(e){this.vE1x(e);return this.kG8y()},finalize:function(e){e&&this.vE1x(e);return this.mD8v()},keySize:4,ivSize:4,JN5S:1,bkt2x:2,lT8L:function(e){return{encrypt:function(b,k,d){return("string"==typeof k?c:a).encrypt(e,b,k,d)},decrypt:function(b,k,d){return("string"==typeof k?c:a).decrypt(e,b,k,d)}}}});d.StreamCipher=v.extend({mD8v:function(){return this.kG8y(!0)},blockSize:1});var b=p.mode={},x=function(e,a,b){var c=this.tm0x;c?this.tm0x=u:c=this.Fo4s;for(var d=0;d<b;d++){e[a+d]^=c[d]}},q=(d.BlockCipherMode=l.extend({createEncryptor:function(e,a){return this.Encryptor.create(e,a)},createDecryptor:function(e,a){return this.Decryptor.create(e,a)},init:function(e,a){this.vl1x=e;this.tm0x=a}})).extend();q.Encryptor=q.extend({processBlock:function(e,a){var b=this.vl1x,c=b.blockSize;x.call(this,e,a,c);b.encryptBlock(e,a);this.Fo4s=e.slice(a,a+c)}});q.Decryptor=q.extend({processBlock:function(e,a){var b=this.vl1x,c=b.blockSize,d=e.slice(a,a+c);b.decryptBlock(e,a);x.call(this,e,a,c);this.Fo4s=d}});b=b.CBC=q;q=(p.pad={}).Pkcs7={pad:function(a,b){for(var c=4*b,c=c-a.sigBytes%c,d=c<<24|c<<16|c<<8|c,l=[],n=0;n<c;n+=4){l.push(d)}c=s.create(l,c);a.concat(c)},unpad:function(a){a.sigBytes-=a.words[a.sigBytes-1>>>2]&255}};d.BlockCipher=v.extend({cfg:v.cfg.extend({mode:b,padding:q}),reset:function(){v.reset.call(this);var a=this.cfg,b=a.iv,a=a.mode;if(this.YP9G==this.JN5S){var c=a.createEncryptor}else{c=a.createDecryptor,this.JP5U=1}this.eP6J=c.call(a,this,b&&b.words)},rb0x:function(a,b){this.eP6J.processBlock(a,b)},mD8v:function(){var a=this.cfg.padding;if(this.YP9G==this.JN5S){a.pad(this.i4m,this.blockSize);var b=this.kG8y(!0)}else{b=this.kG8y(!0),a.unpad(b)}return b},blockSize:4});var n=d.CipherParams=l.extend({init:function(a){this.mixIn(a)},toString:function(a){return(a||this.formatter).stringify(this)}}),b=(p.format={}).OpenSSL={stringify:function(a){var b=a.ciphertext;a=a.salt;return(a?s.create([1398893684,1701076831]).concat(a).concat(b):b).toString(r)},parse:function(a){a=r.parse(a);var b=a.words;if(1398893684==b[0]&&1701076831==b[1]){var c=s.create(b.slice(2,4));b.splice(0,4);a.sigBytes-=16}return n.create({ciphertext:a,salt:c})}},a=d.SerializableCipher=l.extend({cfg:l.extend({format:b}),encrypt:function(a,b,c,d){d=this.cfg.extend(d);var l=a.createEncryptor(c,d);b=l.finalize(b);l=l.cfg;return n.create({ciphertext:b,key:c,iv:l.iv,algorithm:a,mode:l.mode,padding:l.padding,blockSize:a.blockSize,formatter:d.format})},decrypt:function(a,b,c,d){d=this.cfg.extend(d);b=this.In5s(b,d.format);return a.createDecryptor(c,d).finalize(b.ciphertext)},In5s:function(a,b){return"string"==typeof a?b.parse(a,this):a}}),p=(p.kdf={}).OpenSSL={execute:function(a,b,c,d){d||(d=s.random(8));a=w.create({keySize:b+c}).compute(a,d);c=s.create(a.words.slice(b),4*c);a.sigBytes=4*b;return n.create({key:a,iv:c,salt:d})}},c=d.PasswordBasedCipher=a.extend({cfg:a.cfg.extend({kdf:p}),encrypt:function(b,c,d,l){l=this.cfg.extend(l);d=l.kdf.execute(d,b.keySize,b.ivSize);l.iv=d.iv;b=a.encrypt.call(this,b,c,d.key,l);b.mixIn(d);return b},decrypt:function(b,c,d,l){l=this.cfg.extend(l);c=this.In5s(c,l.format);d=l.kdf.execute(d,b.keySize,b.ivSize,c.salt);l.iv=d.iv;return a.decrypt.call(this,b,c,d.key,l)}})}();(function(){for(var u=CryptoJS,p=u.lib.BlockCipher,d=u.algo,l=[],s=[],t=[],r=[],w=[],v=[],b=[],x=[],q=[],n=[],a=[],c=0;256>c;c++){a[c]=128>c?c<<1:c<<1^283}for(var e=0,j=0,c=0;256>c;c++){var k=j^j<<1^j<<2^j<<3^j<<4,k=k>>>8^k&255^99;l[e]=k;
    s[k]=e;var z=a[e],F=a[z],G=a[F],y=257*a[k]^16843008*k;t[e]=y<<24|y>>>8;r[e]=y<<16|y>>>16;w[e]=y<<8|y>>>24;v[e]=y;y=16843009*G^65537*F^257*z^16843008*e;b[k]=y<<24|y>>>8;x[k]=y<<16|y>>>16;q[k]=y<<8|y>>>24;n[k]=y;e?(e=z^a[a[a[G^z]]],j^=a[a[j]]):e=j=1}var H=[0,1,2,4,8,16,32,64,128,27,54],d=d.AES=p.extend({ly8q:function(){for(var a=this.J4N,c=a.words,d=a.sigBytes/4,a=4*((this.bhX2x=d+6)+1),e=this.bko2x=[],j=0;j<a;j++){if(j<d){e[j]=c[j]}else{var k=e[j-1];j%d?6<d&&4==j%d&&(k=l[k>>>24]<<24|l[k>>>16&255]<<16|l[k>>>8&255]<<8|l[k&255]):(k=k<<8|k>>>24,k=l[k>>>24]<<24|l[k>>>16&255]<<16|l[k>>>8&255]<<8|l[k&255],k^=H[j/d|0]<<24);e[j]=e[j-d]^k}}c=this.bkn2x=[];for(d=0;d<a;d++){j=a-d,k=d%4?e[j]:e[j-4],c[d]=4>d||4>=j?k:b[l[k>>>24]]^x[l[k>>>16&255]]^q[l[k>>>8&255]]^n[l[k&255]]}},encryptBlock:function(a,b){this.Fn4r(a,b,this.bko2x,t,r,w,v,l)},decryptBlock:function(a,c){var d=a[c+1];a[c+1]=a[c+3];a[c+3]=d;this.Fn4r(a,c,this.bkn2x,b,x,q,n,s);d=a[c+1];a[c+1]=a[c+3];a[c+3]=d},Fn4r:function(a,b,c,d,e,j,l,f){for(var m=this.bhX2x,g=a[b]^c[0],h=a[b+1]^c[1],k=a[b+2]^c[2],n=a[b+3]^c[3],p=4,r=1;r<m;r++){var q=d[g>>>24]^e[h>>>16&255]^j[k>>>8&255]^l[n&255]^c[p++],s=d[h>>>24]^e[k>>>16&255]^j[n>>>8&255]^l[g&255]^c[p++],t=d[k>>>24]^e[n>>>16&255]^j[g>>>8&255]^l[h&255]^c[p++],n=d[n>>>24]^e[g>>>16&255]^j[h>>>8&255]^l[k&255]^c[p++],g=q,h=s,k=t}q=(f[g>>>24]<<24|f[h>>>16&255]<<16|f[k>>>8&255]<<8|f[n&255])^c[p++];s=(f[h>>>24]<<24|f[k>>>16&255]<<16|f[n>>>8&255]<<8|f[g&255])^c[p++];t=(f[k>>>24]<<24|f[n>>>16&255]<<16|f[g>>>8&255]<<8|f[h&255])^c[p++];n=(f[n>>>24]<<24|f[g>>>16&255]<<16|f[h>>>8&255]<<8|f[k&255])^c[p++];a[b]=q;a[b+1]=s;a[b+2]=t;a[b+3]=n},keySize:8});u.AES=p.lT8L(d)})();
const isPhone = !$.isNode() || $.isLoon() || $.isQuanX() || $.isSurge();  // 环境检测
let users,index = 0,message = "";
let shareMsg = getData("shareMsg")? getData("shareMsg"):"好歌推荐~~"
    ,commentMsg = getData("commentMsg") ? getData("commentMsg") :"顶顶顶~~"
    ,reMsg = getData("reMsg")? getData("reMsg"):"感谢支持和意见~~"
    ,reCommentMsg = getData("reCommentMsg")?getData("reCommentMsg"):"感谢支持和意见~~";

// 初始化脚本
console.log("【通知📢】", "开始初始化脚本, 当前环境 : " + (isPhone ? "手机端" : "nodejs"),"开始执行!");
if (isPhone) {
    cookie = $.toStr(getData("cookie")).replaceAll("\n","");
    users = [{
        cookie:cookie,
        phone:"",
        password:"",
        UA:getData("UA")
    }];
};



if (!isPhone){
    users = getData("users");
    console.log("【通知📢】", "你提供了 " + users.length + " 个账号");
}

!(async () => {
    for (let user of users) {
        index += 1; // 账号统计
        if (!await getCookie(user)) {
            continue;
        };
        await getMusicianInfo();
        message += "音乐人昵称:" + $.artistName + "\n";
        let YDCount = $.YDCount;
        await flashTaskInfo();
        await doTask();
        console.log("\n\n-------------------------任务执行完成!---------------------------");
        console.log("【通知📢】", "刷新任务列表!");
        await flashTaskInfo();
        await getReword();
        // 刷新数据
        await getMusicianInfo();
        $.getYD = $.YDCount - YDCount;
        message += "执行脚本获得云豆:" + ($.getYD) + "\n" + "当前云豆数量:" + $.YDCount + "\n\n\n";
    }
    message += "有些任务已经下线，但是脚本获取任务列表时任然存在，不用管！\r\n此脚本目前只是执行：登录音乐人中心、发布动态、发布主创说、回复粉丝私信、回复粉丝评论、访问自己云圈 六个任务，其他任务请手动执行！";
    message += "laoxinH的脚本仓库地址，获取更多🔥脚本和打赏请访问：https://github.com/laoxinH/MyScript\r\n💕感谢支持😊";
    await sendNotify();
    return $.done();
})();
// 格式化cookie
async function getCookie(user){
    let cookie;
    api.UA = user.UA;
    console.log("---------------------账号【"+ index +"】-------------------------");
    message += "---------------------账号【"+ index +"】-------------------------\n";
    let tempCk = user.cookie;
    if (!tempCk || tempCk == "" ) {
        message += "尚未填写cookie,nodejs用户请自行通过浏览器抓取并填写到wyy_config.js,quanx等ios用户打开网址将自动获取\n\n\n";
        console.log($.name,"📢请打开: https://music.163.com 并登录获取cookie","nodejs用户请自行通过浏览器抓取并填写到wyy_config.js","quanx等ios用户打开网址将自动获取");
        if (isPhone) {
            let opts = {
                'open-url': 'https://music.163.com',
                'media-url': 'https://github.com/laoxinH/MyScript/blob/main/Quantumult/wangyiyun/icon.png?raw=true'
            }
            $.msg($.name,"📢请打开: https://music.163.com 并登录获取cookie(手机用户切换到电脑网页即可登录)","点击此通知直达网址",opts);
            return false;
        }
    } else {
        // cookie检查
        cookie = tempCk;
        let reg_csrf = /__csrf=(\w)+/;
        let reg_music_u = /MUSIC_U=(\w)+/;
        if (reg_csrf.test(cookie) && reg_music_u.test(cookie)) {
            let csrf_token = cookie.match(/__csrf=(\w)+/)[0].substring(7);
            api.cookie = cookie;
            api.csrf_token = csrf_token;
            console.log("【通知】账号 " + index,"cookie格式化成功!");
            let data = await api.getMusicianInfo();
            if (data.info != false) {  /// 检查cookie是否失效
                return true;
            } else {
                if (isPhone) {
                    let opts = {
                        'open-url': 'https://music.163.com',
                        'media-url': 'https://github.com/laoxinH/MyScript/blob/main/Quantumult/wangyiyun/icon.png?raw=true'
                    }
                    setData("","wyy_cookie");
                    $.msg($.name,"📢cookie已失效，请重新获取: https://music.163.com 并登录获取cookie(手机用户切换到电脑网页即可登录)","点击此通知直达网址",opts);
                    return false;
                }
                message += "cookie已失效；请打开；请打开: https://music.163.com 并登录获取cookie,nodejs用户请自行通过浏览器抓取并填写到wyy_config.js\n";
                console.log($.name,"📢 cookie已失效；请打开: https://music.163.com 并登录获取cookie","nodejs用户请自行通过浏览器抓取并填写到wyy_config.js","quanx等ios用户打开网址将自动获取");

            }
        } else {
            console.log("【错误❌】","账号 【" + index + "】 填写的cookie有误,参考：MUSIC_U=2da45fadcea83dbe492669abdc93166e004087dd3d78b6050a17a35e705925a4e6992f61dfe3f0151024f9e31; __csrf=e1f260e08c8b91351abd40466b14e;","请登录：https://music.163.com重新获取！");
            message += "cookie格式有误；请打开；请打开: https://music.163.com 并登录获取cookie,nodejs用户请自行通过浏览器抓取并填写到wyy_config.js\n" +
                "参考格式:MUSIC_U=2da45fadcea83dbe492669abdc93166e004087dd3d78b6050a17a35e705925a4e6992f61dfe3f0151024f9e31; __csrf=e1f260e08c8b91351abd40466b14e;\n";
        }
    }
    if (isPhone) return false;
    console.log("开始尝试账号密码登录!");
    if (!user.phone || !user.password ) {
        console.log("【错误❌】","账号 " + index + " 登录失败","请到wyy_config.js填写账号和密码!");
        message += "账号【" + index + "】cookie格式化出错，且未填写账号密码，详情请查看脚本日志\r\n请按照要求正确填写cookie或者填写账号密码登录！\n\n\n"
        return false;
    }
    cookie = "os=pc; osver=Microsoft-Windows-10-Professional-build-10586-64bit; appver=2.0.3.131777; channel=netease; __remember_me=true;";
    api.cookie = cookie;
    let data =  await api.login(user.phone,user.password);
    if (!data){
        message += "登录失败!请到检查填写的账号和密码是否正确!如果检查账号密码无误仍然登录失败,请使用cookie登录!\n\n\n";
        console.log("【错误❌】","账号 " + index + " 登录失败","请到检查填写的账号和密码是否正确! 如果检查账号密码无误任然登录失败,请使用cookie登录!");
        return false;
    } else {
        console.log("账号密码登录成功!");
        return true
    }
}

async function sendNotify(){
    $.msg($.name,"【通知📢】本次执行获得云豆: " + ($.getYD || 0) + "; 当前总云豆: " + ($.YDCount || 0),message);
    if (!isPhone) {
        require("./sendNotify").sendNotify($.name,message);
    }
}
// 获取音乐人信息
async function getMusicianInfo(){
    console.log("【通知📢】开始获取音乐人账户信息");
    let YDData = await api.getYDCount();
    $.YDCount = parseInt(YDData.data.data.cloudBean);
    let userData = await api.getMusicianInfo();
    $.artistName = userData.data.data.artistName;
    $.artistId = userData.data.data.artistId;
    console.log("【通知📢】 音乐人昵称: "+$.artistName,"当前账户云豆数量: "+ $.YDCount);

}
// 刷新任务列表
async function flashTaskInfo(){
    let dayTaskData = await api.getMusicianDayTaskInfo();
    let recommendTaskData = await api.getMusicianRecommendTaskInfo();

    let taskList = [];
    let taskList1 = dayTaskData.data.data.list;
    let tasList2 = recommendTaskData.data.data.list;
    taskList = taskList1.concat(tasList2);
    let unfinishedTasks = [],a = 0;
    let finishedTasks = [],b = 0;
    for (let task of taskList) {
        //if (task.userId == 0) continue;
        if (task.status == 10 || task.status == 0) {
            console.log("【任务】: " + task.description + " | 未完成(进度:" + task.progressRate + "/" + (task.targetCount ? task.targetCount : 1) + ")");
            unfinishedTasks[a] = task;
            a++;
        }
        if (task.status == 20) {
            console.log("【任务】: " + task.description + " | 已完成但未领取奖励 稍后将会领取");
            finishedTasks[b] = task;
            b++;
        }
        if (task.status == 100) {
            console.log("【任务】: " + task.description + " | 已领取奖励 云豆数量: " + task.rewardWorth);
        }
    }
    $.unfinishedTasks = unfinishedTasks;
    $.finishedTasks = finishedTasks;
}
// 执行任务
async function doTask() {
    $.doneTasks = [];
    console.log("【通知📢】", "待做任务数量: " + $.unfinishedTasks.length,"开始执行!");
    // 执行任务
    for (let unfinishedTask of $.unfinishedTasks) {
        if (unfinishedTask.description.indexOf("签到") != -1) {
            await doSignInMusician().catch(e=>{console.error(e)});
            console.log("休息一下~~", "等待10秒");
            await $.wait(10000);
        }
        if (unfinishedTask.description.indexOf("动态") != -1) {
            await doShareBlog().catch(e=>{console.error(e)});
            $.doneTasks.push(unfinishedTask);
            console.log("休息一下~~", "等待10秒");
            await $.wait(10000);
        }
        if (unfinishedTask.description.indexOf("主创") != -1) {
            await doCommentYourself().catch(e=>{console.error(e)});
            $.doneTasks.push(unfinishedTask);
            console.log("休息一下~~", "等待10秒");
            await $.wait(10000);
        }
        if (unfinishedTask.description.indexOf("私信") != -1) {
            let count = unfinishedTask.targetCount - unfinishedTask.progressRate;
            console.log("已完成回复数量: " + unfinishedTask.progressRate, "还需回复: " + (unfinishedTask.targetCount - unfinishedTask.progressRate));
            for (let i = 0; i < count; i++) {
                await doRePrivatrMessage().catch(e=>{console.error(e)});
                console.log("休息一下~~", "等待10秒");
                await $.wait(10000);
            }
            $.doneTasks.push(unfinishedTask);
        }
        if(unfinishedTask.description.indexOf("评论") != -1) {
            await doReplyMusicComment().catch(e=>{console.error(e)});
            $.doneTasks.push(unfinishedTask);
            console.log("休息一下~~", "等待10秒");
            await $.wait(10000);
        }
        if (unfinishedTask.description.indexOf("云圈") != -1) {
            await doViewMyCircle().catch(e=>{console.error(e)});
            $.doneTasks.push(unfinishedTask);
            console.log("休息一下~~", "等待10秒");
            await $.wait(10000);
        }
        if (unfinishedTask.description.indexOf("课程") != -1) {
            await doWatchLesson().catch(e=>{console.error(e)});
            $.doneTasks.push(unfinishedTask);
            console.log("休息一下~~", "等待10秒");
            await $.wait(10000);
        }
    }
}
// 发布动态任务
async function doShareBlog(){
    if (getData("doShareBlog") == false ? true : false) {
        console.log("【通知】 已关闭执行发布动态任务！");
        return;
    }
    console.log("【通知】 开始执行发布动态任务！");
    let data = await api.getRecommendedPlaylist();
    let playLists = data.data.recommend;
    let index = Math.round(Math.random()*(playLists.length-1));
    let playList = playLists[index];
    let result = await api.shareBlog(shareMsg,playList.id);
    if (!result.info) {
        console.log("【错误❌】 动态发送失败！ 原因：" +  $.toStr(result.msg));
        message += "❌动态发送失败！原因：" +  $.toStr(result.msg)  + "\n";
    } else {
        console.log("动态发送成功！内容：" + shareMsg + "  歌单：" + playList.name);
        message += "✅动态发送成功！内容：" + shareMsg + "  歌单：" + playList.name + "\n";
    }
}
// 音乐人签到
async function doSignInMusician(){
    if (getData("doSignInMusician") == false ? true : false) {
        console.log("【通知】 已关闭执行音乐人签到任务！");
        return;
    }
    console.log("【通知】 开始执行音乐人签到任务！");
    let result = await api.signInMusician();
    if (result.info){
        console.log(`✅音乐人签到成功！`);
        message += `✅音乐人签到成功!\n`;
    } else {
        console.log("【错误❌】 音乐人签到失败！ 原因：" + $.toStr(result.msg));
        message += "❌音乐人签到失败！\n原因:" + $.toStr(result.msg) + "\n";
    }
}
// 回复评论
async function doReplyMusicComment(){
    if (getData("doReplyMusicComment") == false ? true : false) {
        console.log("【通知】 已关闭执行回复评论任务！");
        return;
    }
    console.log("【通知】 开始执行回复粉丝评论任务！");
    let myAlbumData = await api.getMyAlbum();
    let myAlbumList = myAlbumData.data.data.list;
    let myAlbumIndex = Math.round(Math.random()*(myAlbumList.length-1));
    let album = myAlbumList[myAlbumIndex];
    let myMusicData = await api.getMusicsByAlbum(album.id);
    let musicIndex = Math.round(Math.random()*(myMusicData.length-1));
    let myMusic = myMusicData[musicIndex];
    // console.log(myMusic)
    console.log(`随机抽取的我的专辑：${album.name}\n随机抽取的音乐 : ${myMusic.name}`);

    let commentData = await api.getMusicComments(myMusic.id);
    let commentList = commentData.data.data.comments;
   /* let user = {
        name:listElement.user.nickname,
        cid : listElement.commentId,
        msg: listElement.content,
        mid:commentData.mid,
        mname:commentData.musicName
    }*/
    let commentIndex = Math.round(Math.random()*(commentList.length - 1));
    let comment = commentList[commentIndex];
    console.log(`随机抽取的评论：${comment.content}--来自用户：${comment.user.nickname}`);
    let data = await api.replyComment(reCommentMsg,comment.commentId,myMusic.id);
    if (data.info) {
        console.log(`✅回复粉丝评论成功！回复内容：${reCommentMsg}`);
        message += `✅回复粉丝评论成功!\n回复音乐：${myMusic.name}\n回复内容：${reCommentMsg}\n回复用户：${comment.user.nickname}\n`;
    } else {
        console.log("【错误❌】 回复粉丝评论失败！ 原因：" + $.toStr(data.msg));
        message += "❌回复粉丝评论失败！\n原因:" + $.toStr(data.msg) + "\n";
    }
}

// 回复粉丝私信
async function doRePrivatrMessage(){
    if (getData("doRePrivatrMessage") == false ? true : false) {
        console.log("【通知】 已关闭执行回复粉丝私信！");
        return;
    }
    console.log("【通知】 开始执行回复回复粉丝私信任务！");

    let privatrMessageData = await api.getPrivatrMessageList();
    let msgList = privatrMessageData.data.msgs;

    let index = Math.round(Math.random()*(msgList.length-1));
    let msg = msgList[index];
   let data = await api.sendPrivatrMessage(reMsg,msg.fromUser.userId);
    if ( data.info){
        console.log(`✅回复粉丝私信成功！\n回复用户：${msg.fromUser.nickname}\n回复内容：${reMsg}`);
        message += `✅回复粉丝私信成功!\n回复用户：${msg.fromUser.nickname}\n回复内容：${reMsg}\n`;
    } else {
        console.log("【错误❌】 回复粉丝私信失败！ 原因：" + $.toStr(data.msg));
        message += "❌回复粉丝私信失败！\n原因:" + $.toStr(data.msg) + "\n";
    }
}

//访问我的圈
async function doViewMyCircle(){
    if (getData("doViewMyCircle") == false ? true : false) {
        console.log("【通知】 已关闭执行访问我的云圈！");
        return;
    }
    console.log("【通知】 开始执行回复访问我的云圈任务！");
    let data = await api.getMusicianHome($.artistId);
    let blocks = data.data.data.blocks;
    let resourceId = null;
    for (let block of blocks) {
        if (block.showType == "MY_CIRCLE_WITH_MORE") {
            let creatives = block.creatives;
            for (let creative of creatives) {
                let resources = creative.resources;
                for (let resource of resources){
                    if (resource.resourceType == "CIRCLE") {
                        resourceId = resource.resourceId;
                        break;
                    }
                    if (resourceId) break;
                }
                if (resourceId) break;
            }
        }
        if (resourceId) break;
    }
    let result = await api.getCircle(resourceId);
    if (result.info){
        console.log(`✅访问自己的云圈成功！`);
        message += `✅访问自己的云圈成功!\n`;
    } else {
        console.log("【错误❌】 访问自己的云圈失败！ 原因：" + $.toStr(result.msg));
        message += "❌访问自己的云圈失败！\n原因:" + $.toStr(result.msg) + "\n";
    }

}
//发布主创说
async function doCommentYourself(){
    if (getData("doCommentYourself") == false ? true : false) {
        console.log("【通知】 已关闭执行发布主创说！");
        return;
    }
    console.log("【通知】 开始执行主创说任务！");
    let myAlbumData = await api.getMyAlbum();
    let myAlbumList = myAlbumData.data.data.list;
    let myAlbumIndex = Math.round(Math.random()*(myAlbumList.length-1));
    let album = myAlbumList[myAlbumIndex];
    let myMusicData = await api.getMusicsByAlbum(album.id);
    let musicIndex = Math.round(Math.random()*(myMusicData.length-1));
    let myMusic = myMusicData[musicIndex];

    let result = await api.commentMusic(commentMsg,myMusic.id);
    if (result.info){
        console.log(`✅发布主创说成功！\n发布内容：${commentMsg}\n发布歌曲：${myMusic.name}`);
        message += `✅发布主创说成功!\n发布内容：${commentMsg}\n发布歌曲：${myMusic.name}\n`;
    } else {
        console.log("【错误❌】 发布主创说失败！ 原因：" + $.toStr(result.msg));
        message += "❌发布主创说失败！\n原因:" + $.toStr(result.msg) + "\n";
    }
}
// 执行观看课程任务
async function doWatchLesson(){
    if (getData("doWatchLesson") == false ? true : false) {
        console.log("【通知】 已关闭执行观看课程任务！");
        return;
    }
    console.log("【通知】 开始观看课程任务！");
    let result = await api.watchLesson();
    if (result.info) {
        console.log("✅观看课程成功!");
        message += "✅观看课程成功!\n";
    } else {
        console.log("【错误❌】 观看课程失败！ 原因：" + $.toStr(result.msg));
        message += "❌观看课程失败！\n原因:" + $.toStr(result.msg) + "\n";
    }
}
//领取已完成奖励
async function getReword(){
    console.log("【通知📢】", "待领取奖励: " + $.finishedTasks.length,"开始执行!");
    for (let i = 0; i < $.finishedTasks.length; i++) {
        let result = await api.drawReward($.finishedTasks[i]);
        if (result.info){
            console.log(`✅领取云豆成功！${$.finishedTasks[i].description}`);
            message += `✅领取云豆成功！${$.finishedTasks[i].description}\n\n`;
        } else {
            console.log("【错误❌】 领取云豆失败！"+ $.finishedTasks[i].description +" 原因：" + $.toStr(result.msg));
            message += "❌领取云豆失败！" + $.finishedTasks[i].description + "原因:" + $.toStr(result.msg) + "\n\n";
        }

    }
}
function getData(key = ""){
    if (isPhone) {
        key = "wyy_" + key;
        return $.getdata(key);
    } else {
        let config = require("./wyy_config.js").wangyi;
        return config[key];
    }
}

function setData(){
    if (isPhone){
        key = "wyy_" + key;
        return $.setdata(value,key);
    }
    return null;
}

// 网易云音乐api
function NCApi() {
    return new class {
        checkToken = "9ca17ae2e6ffcda170e2e6ee92f94fa7ad9db4e14e8ca88eb7d54f929e9fbbf13f8b8a97aef74d86aca7acc62af0feaec3b92a8dac8ad6f66db2eda2d7fb5e928f8ab7d44a8aabf8abc1648a9797d7c548e996ee9e";
        csrf_token = "";
        cookie = "";
        UA = ""

        /**
         * 发送请求
         * @param url
         * @param data
         * @returns {Promise<unknown>}
         */
        async request(url,data = {},addCookie = ""){

            data.csrf_token = this.csrf_token;
            let opts = this.getOpts(data,url,null,addCookie);
            return new Promise(resolve => {
                let result = {
                    code:301,
                    info:false,
                    data:{},
                    msg:""
                }
                $.post(opts,(err,res,data)=>{
                    if (err){
                        result.msg = err;
                        resolve(result);
                    }
                    data = $.toObj(data);
                    if (data != null && data.code == 200){
                        result.code = data.code;
                        result.info = true;
                        result.data = data;
                        resolve(result);
                    } else {
//                        result.code = data.code;
                        result.msg = data;
                        resolve(result);
                    }
                })
            })
        }

        /**
         * 登录  data.profile.nickname
         * @param username
         * @param password
         * @return {Promise<unknown>}
         */
        async login(username,password){
            let  data = {
                checkToken:this.checkToken,
                phone: parseInt(username),
                csrf_token:"",
                password: md5(password),
                rememberLogin: 'true'
            }
            let opts = this.getOpts(data,"https://music.163.com/weapi/w/login/cellphone");
            opts.headers.Cookie = "os=pc; osver=Microsoft-Windows-10-Professional-build-10586-64bit; appver=2.0.3.131777; channel=netease; __remember_me=true;";
            return new Promise(resolve => {
                $.post(opts,(err,res,data)=>{
                    if (err){
                        resolve(false);
                    }
                    data = $.toObj(data);
                    if (data != null && data.code == 200){
                        let cookie = res.headers["set-cookie"] + "";
                        cookie = cookie.match(/MUSIC_U=.+?;/) + cookie.match(/__csrf=.+?;/);
                        this.csrf_token = cookie.match(/__csrf=(\w)+/)[0].substring(7);
                        this.cookie = cookie;
                        resolve(cookie);
                    } else {
                      resolve(false);
                    }
                })
            })
        }
        /**
         * 获取云豆数量
         * @return {Promise<unknown>}
         */
        async getYDCount(){
            return await this.request("https://music.163.com/weapi/cloudbean/get");
        }

        /**
         * 获取音乐人信息
         * @return {Promise<unknown>}
         */
        async  getMusicianInfo(){
            return  await this.request("https://music.163.com/weapi/nmusician/entrance/user/musician/info/get");
        }

        /**
         * 获取音乐人每日任务列表
         * @return {Promise<unknown>}
         */
        async getMusicianDayTaskInfo(){
            return await this.request("https://music.163.com/weapi/nmusician/workbench/mission/cycle/list");

        }

        /**
         * 获取音乐人推荐任务列表
         * @return {Promise<unknown>}
         */
        async getMusicianRecommendTaskInfo(){
            return await this.request("https://music.163.com/weapi/nmusician/workbench/mission/stage/list");

        }

        /**
         * 观看课程
         * @return {Promise<unknown>}
         */
        async watchLesson(){
            return await this.request("https://music.163.com/weapi/nmusician/workbench/creator/watch/college/lesson");
        }


        /**
         * 发带歌单的动态
         * @param msg
         * @param playListId
         * @returns {Promise<unknown>} data.list(任务列表)
         */


        async shareBlog(msg = "",playListId = 0,type = "palyList"){
            let data = {
                id:playListId,           //music.id
                msg: msg,
                type: "playlist",
                //uuid: "publish-" + +(new Date) + oL3x(5)
            };
           return await this.request("https://music.163.com/weapi/share/friends/resource",data);
        }

        /**
         * 音乐人签到
         * @return {Promise<unknown>}
         * @constructor
         */
        async signInMusician(){
            return await this.request("https://music.163.com/weapi/creator/user/access");
        }

        /**
         * 音乐人主页
         * @param artistId
         * @return {Promise<unknown>}
         */
        async getMusicianHome(artistId = ""){
            let data = {
                artistId :artistId
            }
            return await this.request("https://music.163.com/weapi/personal/home/page/artist",data);
        }

        /**
         * 访问云圈
         * @param circleId
         * @return {Promise<unknown>}
         */
        async getCircle(circleId = ""){
            let data = {
                circleId:circleId
            }
            return await this.request("https://music.163.com/weapi/circle/get",data);
        }
        /**
         * 获取音乐中的评论
         * @param musicId
         * @return {Promise<unknown>}
         */
        async getMusicComments(musicId){
            let data = {
                cursor: "-1",
                offset: "0",
                orderType: "1",
                pageNo: "1",
                pageSize: "20",
                rid: "R_SO_4_" + musicId,
                threadId: "R_SO_4_" + musicId
            }
            return await this.request("https://music.163.com/weapi/comment/resource/comments/get",data);
        }

        /**
         * 评论音乐
         * @param msg
         * @param musicId
         * @return {Promise<unknown>}
         */
        async commentMusic(msg = "",musicId){
            let data = {
               // checkToken: this.checkToken,
                content: msg,
                threadId: "R_SO_4_" + musicId
            };
            return await this.request("https://music.163.com/weapi/resource/comments/add",data,"os=android");

        }

        /**
         * 回复评论
         * @param msg
         * @param cid
         * @param mid
         * @return {Promise<void>}
         */
        async replyComment(msg = "",cid = 0,mid = 0){
            let data = {
              // checkToken: this.checkToken,
                commentId: cid,
                content: msg,
                threadId: "R_SO_4_" + mid
            }
            return await this.request("https://music.163.com/weapi/v1/resource/comments/reply",data,"os=android");
        }

        /**
         * 获取我发布的音乐列表
         * @return data.data.list(音乐列表)
         */
        async getMyAlbum(){
            return await this.request("https://music.163.com/weapi/nmusician/production/common/artist/album/item/list/get");
        }
        /**
         * 搜索指定数量的音乐
         * @param num 音乐数量
         * @param keyWord 关键字
         * @returns {Promise<unknown>} data.result.songs
         */
        async getMusic(num,keyWord) {
            let data = {
                hlposttag: "</span>",
                hlpretag: "<span class=\"s-fc7\">",
                isPub: "true",
                limit: num,
                offset: "0",
                s: keyWord,
                total: "true",
                type: "1"
            };
            return await this.request("https://music.163.com/weapi/cloudsearch/get/web",data);
        }
        async

        /**
         * 获取每日推荐歌单
         * @returns {Promise<unknown>} data.recommend(歌单列表)
         */
        async getRecommendedPlaylist(){
            return await this.request("https://music.163.com/weapi/discovery/recommend/resource");
        }

        /**
         * 领取云豆奖励
         * @param taskData
         * @returns {Promise<unknown>}  taskData.rewardWorth(云豆数量)
         */
        async drawReward(taskData = {}){
            //console.log($.log(taskData))
            let userMissionId = taskData.userMissionId;
            let period = taskData.period;
            let  data = {
                period: period,
                userMissionId: userMissionId
            }
            return await this.request("https://music.163.com//weapi/nmusician/workbench/mission/reward/obtain/new",data);
        }

        /**
         * 获取每日推荐歌曲
         * @returns {Promise<unknown>} data.recommend(歌曲列表)
         */
        async getPersonalizedMusic(){
            let url = "https://music.163.com/weapi/v2/discovery/recommend/songs";
            let data = {
                offset: "0",
                total: "true"
            };
            return await this.request(url,data);
        }

        /**
         * 通过专辑id获取专辑歌曲列表
         * @param albumId
         * @param num
         * @return {Promise<unknown>}
         */
        async getMusicsByAlbum(albumId = 0,num = 10){
            let opts = this.getOpts("",`http://music.163.com/api/album/${albumId}?ext=true&id=${albumId}&offset=0&total=true&limit=${num}`);
           return new Promise(resolve => {
               $.get(opts,(err,res,data)=>{
                   if (err){
                       resolve(null);
                   }
                   data = $.toObj(data);
                   if (data != null && data.code == 200){
                       resolve(data.album.songs);
                   } else {
                       resolve(null);
                   }
               });
           })
        }

        /**
         * 获取私信列表
         * @returns {Promise<unknown>}data.msgs(信息列表)
         */
        async getPrivatrMessageList(){
            return await this.request("https://music.163.com/weapi/msg/private/users");
        }

        /**
         * 发送文本私信
         * @param msg
         * @param userId
         * @returns {Promise<unknown>}
         */
        async sendPrivatrMessage(msg = "",userId = ""){
            let data = {
                //checkToken: this.checkToken,
                msg: msg,
                //time: `${new Date().getTime()}`,
                type: "text",
                userIds: "[\""+ userId +"\"]"
            }
            let url = "https://music.163.com/weapi/msg/private/send";
            return await this.request(url,data);

        }

        // 生成加密的body(params通过aes加密encSecKey可以为固定)
        getBody(data) {
            let nonce = "0CoJUm6Qyw8W8jud",
                vi = "0102030405060708",
                secretKey="TA3YiYCfY2dDJQgg",
                encSecKey="84ca47bca10bad09a6b04c5c927ef077d9b9f1e37098aa3eac6ea70eb59df0aa28b691b7e75e4f1f9831754919ea784c8f74fbfadf2898b0be17849fd656060162857830e241aba44991601f137624094c114ea8d17bce815b0cd4e5b8e2fbaba978c6d1d14dc3d1faf852bdd28818031ccdaaa13a6018e1024e2aae98844210";
            const key1 = CryptoJS.enc.Utf8.parse(nonce);
            const key2 = CryptoJS.enc.Utf8.parse(secretKey);
            const iv = CryptoJS.enc.Utf8.parse(vi);
            let srcs1 = CryptoJS.enc.Utf8.parse(data);
            let encrypted1 = CryptoJS.AES.encrypt(srcs1, key1, {iv: iv, mode: CryptoJS.mode.CBC});
            let baseData = encrypted1.ciphertext.toString(CryptoJS.enc.Base64);
            let srcs2 = CryptoJS.enc.Utf8.parse(baseData);
            let encrypted2 = CryptoJS.AES.encrypt(srcs2, key2, {iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7});
            return "params=" + encodeURIComponent(encrypted2.ciphertext.toString(CryptoJS.enc.Base64)) + "&encSecKey=" + encSecKey;
        }


        // 获取请求参数
        getOpts(data,url,method,addCookie = "") {
        data = $.toStr(data);
        let opts = {
            "method": "post",
            "url": `${url}?csrf_token=${this.csrf_token}`,
            "body": this.getBody(data),
            headers: {
                Accept: "*/*",
                "Accept-Encoding": "gzip, deflate, br",
                "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6,",
                Connection: "keep-alive",
                "Content-Type": "application/x-www-form-urlencoded",
                Cookie: this.cookie + addCookie,
                DNT: "1",
                Host: "music.163.com",
                Origin: "https://music.163.com",
                Referer: "https://music.163.com",
                "User-Agent": this.UA ? this.UA :"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36 Edg/99.0.1150.55"
            }
        };

        return opts;
    }
    }
}
// md5
function md5(md5str){var createMD5String=function(string){var x=Array();var k,AA,BB,CC,DD,a,b,c,d;var S11=7,S12=12,S13=17,S14=22;var S21=5,S22=9,S23=14,S24=20;var S31=4,S32=11,S33=16,S34=23;var S41=6,S42=10,S43=15,S44=21;string=uTF8Encode(string);x=convertToWordArray(string);a=1732584193;b=4023233417;c=2562383102;d=271733878;for(k=0;k<x.length;k+=16){AA=a;BB=b;CC=c;DD=d;a=FF(a,b,c,d,x[k+0],S11,3614090360);d=FF(d,a,b,c,x[k+1],S12,3905402710);c=FF(c,d,a,b,x[k+2],S13,606105819);b=FF(b,c,d,a,x[k+3],S14,3250441966);a=FF(a,b,c,d,x[k+4],S11,4118548399);d=FF(d,a,b,c,x[k+5],S12,1200080426);c=FF(c,d,a,b,x[k+6],S13,2821735955);b=FF(b,c,d,a,x[k+7],S14,4249261313);a=FF(a,b,c,d,x[k+8],S11,1770035416);d=FF(d,a,b,c,x[k+9],S12,2336552879);c=FF(c,d,a,b,x[k+10],S13,4294925233);b=FF(b,c,d,a,x[k+11],S14,2304563134);a=FF(a,b,c,d,x[k+12],S11,1804603682);d=FF(d,a,b,c,x[k+13],S12,4254626195);c=FF(c,d,a,b,x[k+14],S13,2792965006);b=FF(b,c,d,a,x[k+15],S14,1236535329);a=GG(a,b,c,d,x[k+1],S21,4129170786);d=GG(d,a,b,c,x[k+6],S22,3225465664);c=GG(c,d,a,b,x[k+11],S23,643717713);b=GG(b,c,d,a,x[k+0],S24,3921069994);a=GG(a,b,c,d,x[k+5],S21,3593408605);d=GG(d,a,b,c,x[k+10],S22,38016083);c=GG(c,d,a,b,x[k+15],S23,3634488961);b=GG(b,c,d,a,x[k+4],S24,3889429448);a=GG(a,b,c,d,x[k+9],S21,568446438);d=GG(d,a,b,c,x[k+14],S22,3275163606);c=GG(c,d,a,b,x[k+3],S23,4107603335);b=GG(b,c,d,a,x[k+8],S24,1163531501);a=GG(a,b,c,d,x[k+13],S21,2850285829);d=GG(d,a,b,c,x[k+2],S22,4243563512);c=GG(c,d,a,b,x[k+7],S23,1735328473);b=GG(b,c,d,a,x[k+12],S24,2368359562);a=HH(a,b,c,d,x[k+5],S31,4294588738);d=HH(d,a,b,c,x[k+8],S32,2272392833);c=HH(c,d,a,b,x[k+11],S33,1839030562);b=HH(b,c,d,a,x[k+14],S34,4259657740);a=HH(a,b,c,d,x[k+1],S31,2763975236);d=HH(d,a,b,c,x[k+4],S32,1272893353);c=HH(c,d,a,b,x[k+7],S33,4139469664);b=HH(b,c,d,a,x[k+10],S34,3200236656);a=HH(a,b,c,d,x[k+13],S31,681279174);d=HH(d,a,b,c,x[k+0],S32,3936430074);c=HH(c,d,a,b,x[k+3],S33,3572445317);b=HH(b,c,d,a,x[k+6],S34,76029189);a=HH(a,b,c,d,x[k+9],S31,3654602809);d=HH(d,a,b,c,x[k+12],S32,3873151461);c=HH(c,d,a,b,x[k+15],S33,530742520);b=HH(b,c,d,a,x[k+2],S34,3299628645);a=II(a,b,c,d,x[k+0],S41,4096336452);d=II(d,a,b,c,x[k+7],S42,1126891415);c=II(c,d,a,b,x[k+14],S43,2878612391);b=II(b,c,d,a,x[k+5],S44,4237533241);a=II(a,b,c,d,x[k+12],S41,1700485571);d=II(d,a,b,c,x[k+3],S42,2399980690);c=II(c,d,a,b,x[k+10],S43,4293915773);b=II(b,c,d,a,x[k+1],S44,2240044497);a=II(a,b,c,d,x[k+8],S41,1873313359);d=II(d,a,b,c,x[k+15],S42,4264355552);c=II(c,d,a,b,x[k+6],S43,2734768916);b=II(b,c,d,a,x[k+13],S44,1309151649);a=II(a,b,c,d,x[k+4],S41,4149444226);d=II(d,a,b,c,x[k+11],S42,3174756917);c=II(c,d,a,b,x[k+2],S43,718787259);b=II(b,c,d,a,x[k+9],S44,3951481745);a=addUnsigned(a,AA);b=addUnsigned(b,BB);c=addUnsigned(c,CC);d=addUnsigned(d,DD)}var tempValue=wordToHex(a)+wordToHex(b)+wordToHex(c)+wordToHex(d);return tempValue.toLowerCase()};var rotateLeft=function(lValue,iShiftBits){return(lValue<<iShiftBits)|(lValue>>>(32-iShiftBits))};var addUnsigned=function(lX,lY){var lX4,lY4,lX8,lY8,lResult;lX8=(lX&2147483648);lY8=(lY&2147483648);lX4=(lX&1073741824);lY4=(lY&1073741824);lResult=(lX&1073741823)+(lY&1073741823);if(lX4&lY4){return(lResult^2147483648^lX8^lY8)}if(lX4|lY4){if(lResult&1073741824){return(lResult^3221225472^lX8^lY8)}else{return(lResult^1073741824^lX8^lY8)}}else{return(lResult^lX8^lY8)}};var F=function(x,y,z){return(x&y)|((~x)&z)};var G=function(x,y,z){return(x&z)|(y&(~z))};var H=function(x,y,z){return(x^y^z)};var I=function(x,y,z){return(y^(x|(~z)))};var FF=function(a,b,c,d,x,s,ac){a=addUnsigned(a,addUnsigned(addUnsigned(F(b,c,d),x),ac));return addUnsigned(rotateLeft(a,s),b)};var GG=function(a,b,c,d,x,s,ac){a=addUnsigned(a,addUnsigned(addUnsigned(G(b,c,d),x),ac));return addUnsigned(rotateLeft(a,s),b)};var HH=function(a,b,c,d,x,s,ac){a=addUnsigned(a,addUnsigned(addUnsigned(H(b,c,d),x),ac));return addUnsigned(rotateLeft(a,s),b)};var II=function(a,b,c,d,x,s,ac){a=addUnsigned(a,addUnsigned(addUnsigned(I(b,c,d),x),ac));return addUnsigned(rotateLeft(a,s),b)};var convertToWordArray=function(string){var lWordCount;var lMessageLength=string.length;var lNumberOfWordsTempOne=lMessageLength+8;var lNumberOfWordsTempTwo=(lNumberOfWordsTempOne-(lNumberOfWordsTempOne%64))/64;var lNumberOfWords=(lNumberOfWordsTempTwo+1)*16;var lWordArray=Array(lNumberOfWords-1);var lBytePosition=0;var lByteCount=0;while(lByteCount<lMessageLength){lWordCount=(lByteCount-(lByteCount%4))/4;lBytePosition=(lByteCount%4)*8;lWordArray[lWordCount]=(lWordArray[lWordCount]|(string.charCodeAt(lByteCount)<<lBytePosition));lByteCount++}lWordCount=(lByteCount-(lByteCount%4))/4;lBytePosition=(lByteCount%4)*8;lWordArray[lWordCount]=lWordArray[lWordCount]|(128<<lBytePosition);lWordArray[lNumberOfWords-2]=lMessageLength<<3;lWordArray[lNumberOfWords-1]=lMessageLength>>>29;return lWordArray};var wordToHex=function(lValue){var WordToHexValue="",WordToHexValueTemp="",lByte,lCount;for(lCount=0;lCount<=3;lCount++){lByte=(lValue>>>(lCount*8))&255;WordToHexValueTemp="0"+lByte.toString(16);
    WordToHexValue=WordToHexValue+WordToHexValueTemp.substr(WordToHexValueTemp.length-2,2)}return WordToHexValue};var uTF8Encode=function(string){string=string.toString().replace(/\x0d\x0a/g,"\x0a");var output="";for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){output+=String.fromCharCode(c)}else{if((c>127)&&(c<2048)){output+=String.fromCharCode((c>>6)|192);output+=String.fromCharCode((c&63)|128)}else{output+=String.fromCharCode((c>>12)|224);output+=String.fromCharCode(((c>>6)&63)|128);output+=String.fromCharCode((c&63)|128)}}}return output};return createMD5String(md5str)};
// Env
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}isShadowrocket(){return"undefined"!=typeof $rocket}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){if(t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){let s=require("iconv-lite");this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:i,statusCode:r,headers:o,rawBody:h}=t;e(null,{status:i,statusCode:r,headers:o,rawBody:h},s.decode(h,this.encoding))},t=>{const{message:i,response:r}=t;e(i,r,r&&s.decode(r.rawBody,this.encoding))})}}post(t,e=(()=>{})){const s=t.method?t.method.toLocaleLowerCase():"post";if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient[s](t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method=s,this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){let i=require("iconv-lite");this.initGotEnv(t);const{url:r,...o}=t;this.got[s](r,o).then(t=>{const{statusCode:s,statusCode:r,headers:o,rawBody:h}=t;e(null,{status:s,statusCode:r,headers:o,rawBody:h},i.decode(h,this.encoding))},t=>{const{message:s,response:r}=t;e(s,r,r&&i.decode(r.rawBody,this.encoding))})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}

