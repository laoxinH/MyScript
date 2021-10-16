/**
 * 网易云音乐人
 * @author: github@laoxinH
 * @version: 1.0
 * 每天10点10分执行自动打卡
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
 10 10 * * * https://raw.githubusercontent.com/laoxinH/MyScript/main/Quantumult/wangyiyun/wyy_yyr.js, tag=网易云音乐人, img-url=https://github.com/laoxinH/MyScript/blob/main/Quantumult/wozaixiaoyuan/icon.jpg?raw=true, enabled=true
 =======boxjs订阅地址=======
 https://raw.githubusercontent.com/laoxinH/MyScript/main/boxjs/laoxin.boxjs.json
 */


const $ = new Env("网易云音乐云豆");
// CrytoJS加密
var CryptoJS=CryptoJS||function(u,p){var d={},l=d.lib={},s=function(){},t=l.Base={extend:function(a){s.prototype=this;var c=new s;a&&c.mixIn(a);c.hasOwnProperty("init")||(c.init=function(){c.$super.init.apply(this,arguments)});c.init.prototype=c;c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a){a.hasOwnProperty(c)&&(this[c]=a[c])}a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},r=l.WordArray=t.extend({init:function(a,c){a=this.words=a||[];this.sigBytes=c!=p?c:4*a.length},toString:function(a){return(a||v).stringify(this)},concat:function(a){var c=this.words,e=a.words,j=this.sigBytes;a=a.sigBytes;this.clamp();if(j%4){for(var k=0;k<a;k++){c[j+k>>>2]|=(e[k>>>2]>>>24-8*(k%4)&255)<<24-8*((j+k)%4)}}else{if(65535<e.length){for(k=0;k<a;k+=4){c[j+k>>>2]=e[k>>>2]}}else{c.push.apply(c,e)}}this.sigBytes+=a;return this},clamp:function(){var a=this.words,c=this.sigBytes;a[c>>>2]&=4294967295<<32-8*(c%4);a.length=u.ceil(c/4)},clone:function(){var a=t.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var c=[],e=0;e<a;e+=4){c.push(4294967296*u.random()|0)}return new r.init(c,a)}}),w=d.enc={},v=w.Hex={stringify:function(a){var c=a.words;a=a.sigBytes;for(var e=[],j=0;j<a;j++){var k=c[j>>>2]>>>24-8*(j%4)&255;e.push((k>>>4).toString(16));e.push((k&15).toString(16))}return e.join("")},parse:function(a){for(var c=a.length,e=[],j=0;j<c;j+=2){e[j>>>3]|=parseInt(a.substr(j,2),16)<<24-4*(j%8)}return new r.init(e,c/2)}},b=w.Latin1={stringify:function(a){var c=a.words;a=a.sigBytes;for(var e=[],j=0;j<a;j++){e.push(String.fromCharCode(c[j>>>2]>>>24-8*(j%4)&255))}return e.join("")},parse:function(a){for(var c=a.length,e=[],j=0;j<c;j++){e[j>>>2]|=(a.charCodeAt(j)&255)<<24-8*(j%4)}return new r.init(e,c)}},x=w.Utf8={stringify:function(a){try{return decodeURIComponent(escape(b.stringify(a)))}catch(c){throw Error("Malformed UTF-8 data")}},parse:function(a){return b.parse(unescape(encodeURIComponent(a)))}},q=l.BufferedBlockAlgorithm=t.extend({reset:function(){this.i4m=new r.init;this.sL0x=0},vE1x:function(a){"string"==typeof a&&(a=x.parse(a));this.i4m.concat(a);this.sL0x+=a.sigBytes},kG8y:function(a){var c=this.i4m,e=c.words,j=c.sigBytes,k=this.blockSize,b=j/(4*k),b=a?u.ceil(b):u.max((b|0)-this.JP5U,0);a=b*k;j=u.min(4*a,j);if(a){for(var q=0;q<a;q+=k){this.rb0x(e,q)}q=e.splice(0,a);c.sigBytes-=j}return new r.init(q,j)},clone:function(){var a=t.clone.call(this);a.i4m=this.i4m.clone();return a},JP5U:0});l.Hasher=q.extend({cfg:t.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){q.reset.call(this);this.ly8q()},update:function(a){this.vE1x(a);this.kG8y();return this},finalize:function(a){a&&this.vE1x(a);return this.mD8v()},blockSize:16,lT8L:function(a){return function(b,e){return(new a.init(e)).finalize(b)}},vy1x:function(a){return function(b,e){return(new n.HMAC.init(a,e)).finalize(b)}}});var n=d.algo={};return d}(Math);(function(){var u=CryptoJS,p=u.lib.WordArray;u.enc.Base64={stringify:function(d){var l=d.words,p=d.sigBytes,t=this.bA4E;d.clamp();d=[];for(var r=0;r<p;r+=3){for(var w=(l[r>>>2]>>>24-8*(r%4)&255)<<16|(l[r+1>>>2]>>>24-8*((r+1)%4)&255)<<8|l[r+2>>>2]>>>24-8*((r+2)%4)&255,v=0;4>v&&r+0.75*v<p;v++){d.push(t.charAt(w>>>6*(3-v)&63))}}if(l=t.charAt(64)){for(;d.length%4;){d.push(l)}}return d.join("")},parse:function(d){var l=d.length,s=this.bA4E,t=s.charAt(64);t&&(t=d.indexOf(t),-1!=t&&(l=t));for(var t=[],r=0,w=0;w<l;w++){if(w%4){var v=s.indexOf(d.charAt(w-1))<<2*(w%4),b=s.indexOf(d.charAt(w))>>>6-2*(w%4);t[r>>>2]|=(v|b)<<24-8*(r%4);r++}}return p.create(t,r)},bA4E:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}})();(function(u){function p(b,n,a,c,e,j,k){b=b+(n&a|~n&c)+e+k;return(b<<j|b>>>32-j)+n}function d(b,n,a,c,e,j,k){b=b+(n&c|a&~c)+e+k;return(b<<j|b>>>32-j)+n}function l(b,n,a,c,e,j,k){b=b+(n^a^c)+e+k;return(b<<j|b>>>32-j)+n}function s(b,n,a,c,e,j,k){b=b+(a^(n|~c))+e+k;return(b<<j|b>>>32-j)+n}for(var t=CryptoJS,r=t.lib,w=r.WordArray,v=r.Hasher,r=t.algo,b=[],x=0;64>x;x++){b[x]=4294967296*u.abs(u.sin(x+1))|0}r=r.MD5=v.extend({ly8q:function(){this.cO5T=new w.init([1732584193,4023233417,2562383102,271733878])},rb0x:function(q,n){for(var a=0;16>a;a++){var c=n+a,e=q[c];q[c]=(e<<8|e>>>24)&16711935|(e<<24|e>>>8)&4278255360}var a=this.cO5T.words,c=q[n+0],e=q[n+1],j=q[n+2],k=q[n+3],z=q[n+4],r=q[n+5],t=q[n+6],w=q[n+7],v=q[n+8],A=q[n+9],B=q[n+10],C=q[n+11],u=q[n+12],D=q[n+13],E=q[n+14],x=q[n+15],f=a[0],m=a[1],g=a[2],h=a[3],f=p(f,m,g,h,c,7,b[0]),h=p(h,f,m,g,e,12,b[1]),g=p(g,h,f,m,j,17,b[2]),m=p(m,g,h,f,k,22,b[3]),f=p(f,m,g,h,z,7,b[4]),h=p(h,f,m,g,r,12,b[5]),g=p(g,h,f,m,t,17,b[6]),m=p(m,g,h,f,w,22,b[7]),f=p(f,m,g,h,v,7,b[8]),h=p(h,f,m,g,A,12,b[9]),g=p(g,h,f,m,B,17,b[10]),m=p(m,g,h,f,C,22,b[11]),f=p(f,m,g,h,u,7,b[12]),h=p(h,f,m,g,D,12,b[13]),g=p(g,h,f,m,E,17,b[14]),m=p(m,g,h,f,x,22,b[15]),f=d(f,m,g,h,e,5,b[16]),h=d(h,f,m,g,t,9,b[17]),g=d(g,h,f,m,C,14,b[18]),m=d(m,g,h,f,c,20,b[19]),f=d(f,m,g,h,r,5,b[20]),h=d(h,f,m,g,B,9,b[21]),g=d(g,h,f,m,x,14,b[22]),m=d(m,g,h,f,z,20,b[23]),f=d(f,m,g,h,A,5,b[24]),h=d(h,f,m,g,E,9,b[25]),g=d(g,h,f,m,k,14,b[26]),m=d(m,g,h,f,v,20,b[27]),f=d(f,m,g,h,D,5,b[28]),h=d(h,f,m,g,j,9,b[29]),g=d(g,h,f,m,w,14,b[30]),m=d(m,g,h,f,u,20,b[31]),f=l(f,m,g,h,r,4,b[32]),h=l(h,f,m,g,v,11,b[33]),g=l(g,h,f,m,C,16,b[34]),m=l(m,g,h,f,E,23,b[35]),f=l(f,m,g,h,e,4,b[36]),h=l(h,f,m,g,z,11,b[37]),g=l(g,h,f,m,w,16,b[38]),m=l(m,g,h,f,B,23,b[39]),f=l(f,m,g,h,D,4,b[40]),h=l(h,f,m,g,c,11,b[41]),g=l(g,h,f,m,k,16,b[42]),m=l(m,g,h,f,t,23,b[43]),f=l(f,m,g,h,A,4,b[44]),h=l(h,f,m,g,u,11,b[45]),g=l(g,h,f,m,x,16,b[46]),m=l(m,g,h,f,j,23,b[47]),f=s(f,m,g,h,c,6,b[48]),h=s(h,f,m,g,w,10,b[49]),g=s(g,h,f,m,E,15,b[50]),m=s(m,g,h,f,r,21,b[51]),f=s(f,m,g,h,u,6,b[52]),h=s(h,f,m,g,k,10,b[53]),g=s(g,h,f,m,B,15,b[54]),m=s(m,g,h,f,e,21,b[55]),f=s(f,m,g,h,v,6,b[56]),h=s(h,f,m,g,x,10,b[57]),g=s(g,h,f,m,t,15,b[58]),m=s(m,g,h,f,D,21,b[59]),f=s(f,m,g,h,z,6,b[60]),h=s(h,f,m,g,C,10,b[61]),g=s(g,h,f,m,j,15,b[62]),m=s(m,g,h,f,A,21,b[63]);
        a[0]=a[0]+f|0;a[1]=a[1]+m|0;a[2]=a[2]+g|0;a[3]=a[3]+h|0},mD8v:function(){var b=this.i4m,n=b.words,a=8*this.sL0x,c=8*b.sigBytes;n[c>>>5]|=128<<24-c%32;var e=u.floor(a/4294967296);n[(c+64>>>9<<4)+15]=(e<<8|e>>>24)&16711935|(e<<24|e>>>8)&4278255360;n[(c+64>>>9<<4)+14]=(a<<8|a>>>24)&16711935|(a<<24|a>>>8)&4278255360;b.sigBytes=4*(n.length+1);this.kG8y();b=this.cO5T;n=b.words;for(a=0;4>a;a++){c=n[a],n[a]=(c<<8|c>>>24)&16711935|(c<<24|c>>>8)&4278255360}return b},clone:function(){var b=v.clone.call(this);b.cO5T=this.cO5T.clone();return b}});t.MD5=v.lT8L(r);t.HmacMD5=v.vy1x(r)})(Math);(function(){var u=CryptoJS,p=u.lib,d=p.Base,l=p.WordArray,p=u.algo,s=p.EvpKDF=d.extend({cfg:d.extend({keySize:4,hasher:p.MD5,iterations:1}),init:function(d){this.cfg=this.cfg.extend(d)},compute:function(d,r){for(var p=this.cfg,s=p.hasher.create(),b=l.create(),u=b.words,q=p.keySize,p=p.iterations;u.length<q;){n&&s.update(n);var n=s.update(d).finalize(r);s.reset();for(var a=1;a<p;a++){n=s.finalize(n),s.reset()}b.concat(n)}b.sigBytes=4*q;return b}});u.EvpKDF=function(d,l,p){return s.create(p).compute(d,l)}})();CryptoJS.lib.Cipher||function(u){var p=CryptoJS,d=p.lib,l=d.Base,s=d.WordArray,t=d.BufferedBlockAlgorithm,r=p.enc.Base64,w=p.algo.EvpKDF,v=d.Cipher=t.extend({cfg:l.extend(),createEncryptor:function(e,a){return this.create(this.JN5S,e,a)},createDecryptor:function(e,a){return this.create(this.bkt2x,e,a)},init:function(e,a,b){this.cfg=this.cfg.extend(b);this.YP9G=e;this.J4N=a;this.reset()},reset:function(){t.reset.call(this);this.ly8q()},process:function(e){this.vE1x(e);return this.kG8y()},finalize:function(e){e&&this.vE1x(e);return this.mD8v()},keySize:4,ivSize:4,JN5S:1,bkt2x:2,lT8L:function(e){return{encrypt:function(b,k,d){return("string"==typeof k?c:a).encrypt(e,b,k,d)},decrypt:function(b,k,d){return("string"==typeof k?c:a).decrypt(e,b,k,d)}}}});d.StreamCipher=v.extend({mD8v:function(){return this.kG8y(!0)},blockSize:1});var b=p.mode={},x=function(e,a,b){var c=this.tm0x;c?this.tm0x=u:c=this.Fo4s;for(var d=0;d<b;d++){e[a+d]^=c[d]}},q=(d.BlockCipherMode=l.extend({createEncryptor:function(e,a){return this.Encryptor.create(e,a)},createDecryptor:function(e,a){return this.Decryptor.create(e,a)},init:function(e,a){this.vl1x=e;this.tm0x=a}})).extend();q.Encryptor=q.extend({processBlock:function(e,a){var b=this.vl1x,c=b.blockSize;x.call(this,e,a,c);b.encryptBlock(e,a);this.Fo4s=e.slice(a,a+c)}});q.Decryptor=q.extend({processBlock:function(e,a){var b=this.vl1x,c=b.blockSize,d=e.slice(a,a+c);b.decryptBlock(e,a);x.call(this,e,a,c);this.Fo4s=d}});b=b.CBC=q;q=(p.pad={}).Pkcs7={pad:function(a,b){for(var c=4*b,c=c-a.sigBytes%c,d=c<<24|c<<16|c<<8|c,l=[],n=0;n<c;n+=4){l.push(d)}c=s.create(l,c);a.concat(c)},unpad:function(a){a.sigBytes-=a.words[a.sigBytes-1>>>2]&255}};d.BlockCipher=v.extend({cfg:v.cfg.extend({mode:b,padding:q}),reset:function(){v.reset.call(this);var a=this.cfg,b=a.iv,a=a.mode;if(this.YP9G==this.JN5S){var c=a.createEncryptor}else{c=a.createDecryptor,this.JP5U=1}this.eP6J=c.call(a,this,b&&b.words)},rb0x:function(a,b){this.eP6J.processBlock(a,b)},mD8v:function(){var a=this.cfg.padding;if(this.YP9G==this.JN5S){a.pad(this.i4m,this.blockSize);var b=this.kG8y(!0)}else{b=this.kG8y(!0),a.unpad(b)}return b},blockSize:4});var n=d.CipherParams=l.extend({init:function(a){this.mixIn(a)},toString:function(a){return(a||this.formatter).stringify(this)}}),b=(p.format={}).OpenSSL={stringify:function(a){var b=a.ciphertext;a=a.salt;return(a?s.create([1398893684,1701076831]).concat(a).concat(b):b).toString(r)},parse:function(a){a=r.parse(a);var b=a.words;if(1398893684==b[0]&&1701076831==b[1]){var c=s.create(b.slice(2,4));b.splice(0,4);a.sigBytes-=16}return n.create({ciphertext:a,salt:c})}},a=d.SerializableCipher=l.extend({cfg:l.extend({format:b}),encrypt:function(a,b,c,d){d=this.cfg.extend(d);var l=a.createEncryptor(c,d);b=l.finalize(b);l=l.cfg;return n.create({ciphertext:b,key:c,iv:l.iv,algorithm:a,mode:l.mode,padding:l.padding,blockSize:a.blockSize,formatter:d.format})},decrypt:function(a,b,c,d){d=this.cfg.extend(d);b=this.In5s(b,d.format);return a.createDecryptor(c,d).finalize(b.ciphertext)},In5s:function(a,b){return"string"==typeof a?b.parse(a,this):a}}),p=(p.kdf={}).OpenSSL={execute:function(a,b,c,d){d||(d=s.random(8));a=w.create({keySize:b+c}).compute(a,d);c=s.create(a.words.slice(b),4*c);a.sigBytes=4*b;return n.create({key:a,iv:c,salt:d})}},c=d.PasswordBasedCipher=a.extend({cfg:a.cfg.extend({kdf:p}),encrypt:function(b,c,d,l){l=this.cfg.extend(l);d=l.kdf.execute(d,b.keySize,b.ivSize);l.iv=d.iv;b=a.encrypt.call(this,b,c,d.key,l);b.mixIn(d);return b},decrypt:function(b,c,d,l){l=this.cfg.extend(l);c=this.In5s(c,l.format);d=l.kdf.execute(d,b.keySize,b.ivSize,c.salt);l.iv=d.iv;return a.decrypt.call(this,b,c,d.key,l)}})}();(function(){for(var u=CryptoJS,p=u.lib.BlockCipher,d=u.algo,l=[],s=[],t=[],r=[],w=[],v=[],b=[],x=[],q=[],n=[],a=[],c=0;256>c;c++){a[c]=128>c?c<<1:c<<1^283}for(var e=0,j=0,c=0;256>c;c++){var k=j^j<<1^j<<2^j<<3^j<<4,k=k>>>8^k&255^99;l[e]=k;
    s[k]=e;var z=a[e],F=a[z],G=a[F],y=257*a[k]^16843008*k;t[e]=y<<24|y>>>8;r[e]=y<<16|y>>>16;w[e]=y<<8|y>>>24;v[e]=y;y=16843009*G^65537*F^257*z^16843008*e;b[k]=y<<24|y>>>8;x[k]=y<<16|y>>>16;q[k]=y<<8|y>>>24;n[k]=y;e?(e=z^a[a[a[G^z]]],j^=a[a[j]]):e=j=1}var H=[0,1,2,4,8,16,32,64,128,27,54],d=d.AES=p.extend({ly8q:function(){for(var a=this.J4N,c=a.words,d=a.sigBytes/4,a=4*((this.bhX2x=d+6)+1),e=this.bko2x=[],j=0;j<a;j++){if(j<d){e[j]=c[j]}else{var k=e[j-1];j%d?6<d&&4==j%d&&(k=l[k>>>24]<<24|l[k>>>16&255]<<16|l[k>>>8&255]<<8|l[k&255]):(k=k<<8|k>>>24,k=l[k>>>24]<<24|l[k>>>16&255]<<16|l[k>>>8&255]<<8|l[k&255],k^=H[j/d|0]<<24);e[j]=e[j-d]^k}}c=this.bkn2x=[];for(d=0;d<a;d++){j=a-d,k=d%4?e[j]:e[j-4],c[d]=4>d||4>=j?k:b[l[k>>>24]]^x[l[k>>>16&255]]^q[l[k>>>8&255]]^n[l[k&255]]}},encryptBlock:function(a,b){this.Fn4r(a,b,this.bko2x,t,r,w,v,l)},decryptBlock:function(a,c){var d=a[c+1];a[c+1]=a[c+3];a[c+3]=d;this.Fn4r(a,c,this.bkn2x,b,x,q,n,s);d=a[c+1];a[c+1]=a[c+3];a[c+3]=d},Fn4r:function(a,b,c,d,e,j,l,f){for(var m=this.bhX2x,g=a[b]^c[0],h=a[b+1]^c[1],k=a[b+2]^c[2],n=a[b+3]^c[3],p=4,r=1;r<m;r++){var q=d[g>>>24]^e[h>>>16&255]^j[k>>>8&255]^l[n&255]^c[p++],s=d[h>>>24]^e[k>>>16&255]^j[n>>>8&255]^l[g&255]^c[p++],t=d[k>>>24]^e[n>>>16&255]^j[g>>>8&255]^l[h&255]^c[p++],n=d[n>>>24]^e[g>>>16&255]^j[h>>>8&255]^l[k&255]^c[p++],g=q,h=s,k=t}q=(f[g>>>24]<<24|f[h>>>16&255]<<16|f[k>>>8&255]<<8|f[n&255])^c[p++];s=(f[h>>>24]<<24|f[k>>>16&255]<<16|f[n>>>8&255]<<8|f[g&255])^c[p++];t=(f[k>>>24]<<24|f[n>>>16&255]<<16|f[g>>>8&255]<<8|f[h&255])^c[p++];n=(f[n>>>24]<<24|f[g>>>16&255]<<16|f[h>>>8&255]<<8|f[k&255])^c[p++];a[b]=q;a[b+1]=s;a[b+2]=t;a[b+3]=n},keySize:8});u.AES=p.lT8L(d)})();
let cookie = ""||$.getval("Cookie_wyy"); // nodejs用户请直接将获取的cookie填写到双引号中
let csrf_token = "";
const checkToken = "9ca17ae2e6ffcda170e2e6ee92f94fa7ad9db4e14e8ca88eb7d54f929e9fbbf13f8b8a97aef74d86aca7acc62af0feaec3b92a8dac8ad6f66db2eda2d7fb5e928f8ab7d44a8aabf8abc1648a9797d7c548e996ee9e";
const infoData = {csrf_token : csrf_token};
const shareMsg = "好歌推荐~~";
const commentMsg = "顶顶顶~~";
const reMsg = "感谢支持和意见~~";
!(async () => {
    if (!(cookie && cookie != "")) {
        console.log($.name,"📢请打开: https://music.163.com 并登录获取cookie","nodejs用户请自行通过浏览器抓取","quanx等ios用户打开网址将自动获取");
        if (!$.isNode()) {
            $.msg($.name,"📢请打开: https://music.163.com 并登录获取cookie","nodejs用户请自行通过浏览器抓取","quanx等ios用户打开网址将自动获取")
        }
        $.done();
        return;

    }
    csrf_token = cookie.match(/__csrf=(\w)+/)[0].substring(7);

    // 获取账户信息
    await getUserInfo();
    // 获取任务列表
    await getTaskInfo();
    // 执行任务
    await runTask();
    // 领取奖励
    await getReword();
    // 通知
    await sendNotify();
    $.done();
    return;

})()


async function sendNotify(){
    console.log("---------------------------发送通知--------------------------------")
    let msg = `--------【通知📢】${$.name}----------\r\n`;
    msg += "本次执行任务: "+$.doneTasks.length+"\r\n";
    for (let doneTask of $.doneTasks) {
        msg += doneTask.description + "\r\n";
    }
    /*    msg += "已完成任务: "+$.finishedTasks.length+"\r\n";
        for (let finishedTask of $.finishedTasks) {
            msg += finishedTask.description + "\r\n";
        }*/
    msg += "未完成任务: "+$.unfinishedTasks.length+"\r\n";
    for (let unfinishedTask of $.unfinishedTasks) {
        msg += "任务：" + unfinishedTask.description + "; 任务进度: " + unfinishedTask.progressRate +"/"+unfinishedTask.targetCount + "\r\n";
    }
    msg += "本次执行获得云豆: " + ($.YDCount || 0) + "; 当前总云豆: " + (($.YDCount || 0) + $.cbCount) + "\r\n";
    msg += "有些任务已经下线，但是脚本获取任务列表时任然存在，不用管！\r\n此脚本目前只是执行：登录音乐人中心、发布动态、发布主创说、回复粉丝私信四个任务，其他任务请手动执行！"
    $.msg($.name,"【通知📢】本次执行获得云豆: " + ($.YDCount || 0) + "; 当前总云豆: " + (($.YDCount || 0) + $.cbCount),msg);
    return null;
}
/**
 * 领取已完成的奖励
 * @returns {Promise<void>}
 */
async function getReword(){
    console.log("【通知📢】", "待领取奖励: " + $.finishedTasks.length,"开始执行!");
    for (let i = 0; i < $.finishedTasks.length; i++) {
        await drawReward($.finishedTasks[i]);
    }
    return null;

}
/**
 * 执行任务
 * @returns {Promise<void>}
 */
async function runTask() {
    $.doneTasks = [];
    console.log("【通知📢】", "待做任务数量: " + $.unfinishedTasks.length,"开始执行!");
    // 执行任务
    for (let unfinishedTask of $.unfinishedTasks) {
        if (unfinishedTask.description.indexOf("登录") != -1) {
            console.log("【通知📢】", "开始执行", unfinishedTask.description);
            await getInfo("https://interface.music.163.com/weapi/feedback/weblog", "登录音乐人主页").catch(e=>{console.error(e)});
            $.doneTasks.push(unfinishedTask);
            console.log("休息一下~~", "等待5秒");
            await $.wait(5000)
        }
        if (unfinishedTask.description.indexOf("动态") != -1) {
            console.log("【通知📢】", "开始执行", unfinishedTask.description);
            await shareBlog(shareMsg).catch(e=>{console.error(e)});
            $.doneTasks.push(unfinishedTask);
            console.log("休息一下~~", "等待5秒");
            await $.wait(5000);
        }
        if (unfinishedTask.description.indexOf("主创") != -1) {
            console.log("【通知📢】", "开始执行", unfinishedTask.description);
            await randomComment(commentMsg).catch(e=>{console.error(e)});
            $.doneTasks.push(unfinishedTask);
            console.log("休息一下~~", "等待5秒");
            await $.wait(5000)
        }
        if (unfinishedTask.description.indexOf("私信") != -1) {
            console.log("【通知📢】", "开始执行", unfinishedTask.description);
            console.log("开始执行", unfinishedTask.description);
            let count = unfinishedTask.targetCount - unfinishedTask.progressRate;
            console.log("已完成回复数量: " + unfinishedTask.progressRate, "还需回复: " + (unfinishedTask.targetCount - unfinishedTask.progressRate));
            for (let i = 0; i < count; i++) {
                await sendMsgRandom(reMsg);
                console.log("休息一下~~", "等待5秒");
            }
            $.doneTasks.push(unfinishedTask);
        }
        
    }
    console.log("任务执行完成!")
    console.log("【通知📢】", "刷新任务列表!");
    await getTaskInfo();
    return null;
}
/**
 * 获取任务账户信息
 * @returns {Promise<void>}
 */
async function getUserInfo(){
    console.log("【通知📢】","开始获取音乐人账户信息");
    let cbData =  await getInfo("https://music.163.com/weapi/cloudbean/get","获取云豆数量");
    if (!cbData && !$.isNode()){
        $.setval("","Cookie_wyy")
    }
    $.cbCount = cbData.data.cloudBean;
    let userData = await getInfo("https://music.163.com/weapi/nmusician/entrance/user/musician/info/get","音乐人信息");
    $.artistName = userData.data.artistName;
    $.artistId = userData.data.artistId;
    console.log("【通知📢】","音乐人昵称: "+$.artistName,"当前账户云豆数量: "+ $.cbCount);
    return null;

}

/**
 * 获取任务列表
 * @returns {Promise<void>}
 */
async function getTaskInfo(){
    console.log("【通知📢】","开始获取任务列表");
    let taskData = await getInfo("https://music.163.com/weapi/nmusician/workbench/mission/cycle/list","获取任务列表");
    let taskList = taskData.data.list;
    // console.log(taskList)
    let unfinishedTasks = [],a = 0;
    let finishedTasks = [],b = 0;
    for (let task of taskList) {
        //if (task.userId == 0) continue;
        if (task.status == 10 || task.status == 0) {
            console.log("任务: " + task.description + " 未完成");
            unfinishedTasks[a] = task;
            a ++;
        }
        if (task.status == 20) {
            console.log("任务: " + task.description + " 已完成但未领取奖励","稍后将会领取");
            finishedTasks[b] = task;
            b++;
        }
        if (task.status == 100) {
            console.log("任务: " + task.description + " 已领取奖励","云豆数量: " + task.rewardWorth);
        }
    }
    $.unfinishedTasks = unfinishedTasks;
    $.finishedTasks = finishedTasks;
    return null;

}
/**
 * 随机选择自己专辑中的随机歌曲发布主创说
 * @param msg
 * @returns {Promise<unknown>}
 */
async function randomComment(msg){
    // 获取我的专辑(随机获取一个)
    let data = await getInfo("https://music.163.com/weapi/nmusician/production/common/artist/album/item/list/get","专辑列表");
    let albumList = data.data.list;

    let albumIndex = Math.round(Math.random()*(albumList.length-1));
    let album = {
        id : albumList[albumIndex].id,
        name : albumList[albumIndex].name
    };
    // 随机获取发布主创说的歌曲
    let musicData = await new Promise(resolve => {
        let opts = getOpts("",`http://music.163.com/api/album/${album.id}?ext=true&id=${album.id}&offset=0&total=true&limit=10`);
        $.get(opts,(err,res,data)=>{
            if (err){
                $.logErr(err);
                console.log("【错误❌】","专辑信息获取失败！","原因：" + err);
                resolve(null);
            }
            data = $.toObj(data);
            if (data != null && data.code == 200){
                console.log("专辑信息获取成功！");
                resolve(data.album.songs);
            } else {
                $.logErr("失败");
                console.log("【错误❌】", "专辑信息获取失败！", "原因：" + $.toStr(data));
                resolve(null);
            }
        });
    });
    let musicIndex = Math.round(Math.random()*(musicData.length-1));
    let music = {
        id:musicData[musicIndex].id,
        name:musicData[musicIndex].name
    };
    // 发送主创说
    return new Promise(resolve => {
        let data = {
            checkToken: checkToken,
            content: msg,
            csrf_token: csrf_token,
            threadId: "R_SO_4_" + music.id
        };
        let opts1 = getOpts(data,"https://music.163.com/weapi/resource/comments/add");
        $.post(opts1,(err,res,data)=>{
            if (err) {
                $.logErr(err);
                console.log("【错误❌】", "主创说发送失败！", "原因：" + err);
                resolve(null);
            }
            data = $.toObj(data);
            if (data != null && data.code == 200){
                console.log("主创说发送成功！", "内容: " + msg + "; 音乐: " + music.name);
                resolve(data);
            } else {
                $.logErr("失败");
                console.log("【错误❌】", "主创说发送失败！", "原因：" + $.toStr(data));
                resolve(null);
            }
        })
    })

}
/**
 * 从私信列表中随机回复指定内容
 * @param msg
 * @returns {Promise<unknown>}
 */
async function sendMsgRandom(msg){
    // 获取私信列表
    let  msgList = await getInfo("https://music.163.com/weapi/msg/private/users");
    let index = Math.round(Math.random()*(msgList.msgs.length-1));
    let userId = msgList.msgs[index].fromUser.userId;
    let data = {
        checkToken: checkToken,
        csrf_token: csrf_token,
        msg: msg,
        time: `${new Date().getTime()}`,
        type: "text",
        userIds: "[\""+ userId +"\"]"
    }
    let opts = getOpts(data,"https://music.163.com/weapi/msg/private/send");
    return new Promise(resolve => {
        $.post(opts,(err,res,data)=>{
            if (err){
                $.logErr(err);
                console.log("【错误❌】","私信发送失败！","原因：" + err);
                resolve(null);
            }
            data = $.toObj(data);
            if (data != null && data.code == 200){
                console.log("私信发送成功！","内容：" + msg + "  发送对象：" + $.toStr(data.newMsgs[0].toUser.nickname));
                resolve(data);
            } else {
                $.logErr("失败");
                console.log("【错误❌】","私信发送失败！","原因：" + $.toStr(data));
                resolve(null);
            }
        })
    })
}
/**
 * 发布动态
 * @param msg
 * @returns {Promise<unknown>}
 */
async function shareBlog(msg){
    // 获取uuid
    const ov8n = function(bt3x) {
        bt3x = Math.max(0, Math.min(bt3x || 8, 30));
        var fU5Z = Math.pow(10, bt3x - 1)
            , fC5H = fU5Z * 10;
        return Dk2x(fU5Z, fC5H).toString()
    }
    const Dk2x = function(fU5Z, fC5H) {
        return Math.floor(Math.random() * (fC5H - fU5Z) + fU5Z)
    }
    let music = await getRandomPersonalizedMusic();
    let data = {
        checkToken: checkToken,
        csrf_token: csrf_token,
        id: music.id,
        msg: msg,
        type: "song",
        uuid: "publish-" + +(new Date) + ov8n(5)
    };

    let opts = getOpts(data,"https://music.163.com/weapi/share/friends/resource");
    return new Promise(resolve => {
        $.post(opts,(err,res,data)=>{
            if (err){
                $.logErr(err);
                console.log("【错误❌】","动态发送失败！","原因：" + err);
                resolve(null);
            }
            data = $.toObj(data);
            if (data != null && data.code == 200){
                console.log("动态发送成功！","内容：" + msg + "歌曲：" + music.name)
                resolve(data);
            } else {
                $.logErr("失败");
                console.log("【错误❌】","动态发送失败！","原因：" + $.toStr(data));
                resolve(null);
            }
        })
    })
}
/**
 * 领取云豆奖励
 * @param taskData 任务json数据
 * @returns {Promise<unknown>}
 */
async function drawReward(taskData){
    //console.log($.log(taskData))
    let userMissionId = taskData.userMissionId;
    let period = taskData.period;
    let  data = {
        csrf_token: csrf_token,
        period: period,
        userMissionId: userMissionId
    }
    let opts = getOpts(data,"https://music.163.com//weapi/nmusician/workbench/mission/reward/obtain/new");
    return new Promise(resolve => {
        $.post(opts,(err,res,data)=>{
            if (err){
                $.logErr(err);
                console.log("【错误❌】","任务：" + taskData.description + " 云豆奖励领取失败！","原因：" + err);
                resolve(null);
            }
            data = $.toObj(data);
            if (data != null && data.code == 200){
                console.log("任务：" + taskData.description + " 云豆领取成功！","数量：" +taskData.rewardWorth);
                if ($.YDCount){
                    $.YDCount += taskData.rewardWorth;
                } else {
                    $.YDCount = taskData.rewardWorth;
                }
                resolve(data);
            } else {
                $.logErr("失败");
                console.log("【错误❌】","任务：" + taskData.description + " 云豆奖励领取失败！","原因：" + $.toStr(data));
                resolve(null);
            }
        })
    })
}

/**
 * 获取随机的每日推荐歌曲
 * @returns {Promise<unknown>}
 */
async function getRandomPersonalizedMusic(){

    let url = "https://music.163.com/weapi/v2/discovery/recommend/songs";
    let data = {
        csrf_token: csrf_token,
        offset: "0",
        total: "true"
    };
    let opts = getOpts(data,url);
    return new Promise(resolve => {
        $.post(opts,(err,res,data)=>{
            if (err){
                $.logErr(err);
                console.log("【错误❌】","随机日推歌曲获取失败！","原因：" + err);
                resolve(null);
            }
            data = $.toObj(data);
            if (data != null && data.code == 200){
                let musics = [],t = 0;
                for (let recommendElement of data.recommend) {
                    let music = {
                        name:recommendElement.name,
                        id:recommendElement.id
                    }
                    musics[t] = music;
                    t++;
                }
                let index = Math.round(Math.random()*(musics.length-1));
                console.log("随机日推歌曲获取成功！","名称：" + musics[index].name)
                resolve(musics[index]);
            } else {
                $.logErr("失败");
                console.log("【错误❌】","随机日推歌曲获取失败！","原因：" + $.toStr(data));
                resolve(null);
            }
        })
    })
}

/**
 * 获取信息(任务列表,个人信息等)
 * @param url
 * @param noticeMsg
 * @returns {Promise<unknown>}
 */
async function getInfo(url,noticeMsg){
    const opts = getOpts(infoData,url);
    return new Promise(resolve => {
        $.post(opts,(err,res,data)=>{
            if (err){
                $.logErr(err);
                console.log("【错误❌】",noticeMsg + "执行失败!", "原因: " + err);
                resolve(null);
            }
            data = $.toObj(data);
            if (data != null && data.code == 200){
                console.log(noticeMsg + "执行成功!");
                resolve(data);
            } else {
                $.logErr("失败");
                console.log("【错误❌】",noticeMsg + "执行失败!", "原因: " + $.toStr(data));
                resolve(null);
            }
        })
    })
}
/**
 * 搜索指定数量的音乐
 * @param num 音乐数量
 * @param keyWord 关键字
 * @returns {Promise<unknown>}
 */
async function getMusic(num,keyWord) {
    let data = {
        csrf_token: csrf_token,
        hlposttag: "</span>",
        hlpretag: "<span class=\"s-fc7\">",
        isPub: "true",
        limit: num,
        offset: "0",
        s: keyWord,
        total: "true",
        type: "1"
    };
    const opts = getOpts(data,"https://music.163.com/weapi/cloudsearch/get/web");
    return new Promise(resolve => {
        $.post(opts,(err,res,data)=>{
            if (err){
                $.logErr(err);
                $.log("音乐获取失败: " + err);
                resolve(null);
            }
            data = $.toObj(data);
            if (data != null && data.code == 200){
                $.log("音乐搜索","成功!!")
                resolve(data.result.songs);
            } else {
                $.logErr("失败");
                $.log("音乐获取失败: " + $.toStr(data));
                resolve(null);
            }
        })
    })
}

// 获取请求参数
function getOpts(data,url) {
    data = $.toStr(data);
    let opts = {
        "method": "post",
        "url": `${url}?csrf_token=${csrf_token}`,
        "body": getBody(data),
        headers: {
            Accept: "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6,",
            Connection: "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            Cookie: cookie,
            DNT: "1",
            Host: "music.163.com",
            Origin: "https://music.163.com",
            Referer: "https://music.163.com/friend",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36 Edg/94.0.992.38"
        }
    };
    return opts;
}

// 生成加密的body(params通过aes加密encSecKey可以为固定)
function getBody(data) {
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
// 测试
function test() {
    let data = {"csrf_token":"3d4afd8ab3b7a113b375115a75a2faf4"}
    let opts = getOpts(data,"https://music.163.com/weapi/pl/count")
    console.log(opts)
    $.post(opts, (err, resp, data) => {
        if (err) {
            console.log(err)
        }
        console.log($.toStr(data))
    })
}
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}isShadowrocket(){return"undefined"!=typeof $rocket}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){if(t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){let s=require("iconv-lite");this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:i,statusCode:r,headers:o,rawBody:h}=t;e(null,{status:i,statusCode:r,headers:o,rawBody:h},s.decode(h,this.encoding))},t=>{const{message:i,response:r}=t;e(i,r,r&&s.decode(r.rawBody,this.encoding))})}}post(t,e=(()=>{})){const s=t.method?t.method.toLocaleLowerCase():"post";if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient[s](t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method=s,this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){let i=require("iconv-lite");this.initGotEnv(t);const{url:r,...o}=t;this.got[s](r,o).then(t=>{const{statusCode:s,statusCode:r,headers:o,rawBody:h}=t;e(null,{status:s,statusCode:r,headers:o,rawBody:h},i.decode(h,this.encoding))},t=>{const{message:s,response:r}=t;e(s,r,r&&i.decode(r.rawBody,this.encoding))})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}

