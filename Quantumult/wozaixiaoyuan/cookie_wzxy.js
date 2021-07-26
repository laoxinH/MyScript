/**
 * QX重写配置
 * https:\/\/gw\.wozaixiaoyuan\.com\/basicinfo\/mobile\/my\/index url script-request-header https://raw.githubusercontent.com/whyour/hundun/master/quanx/jx_nc.cookie.js
 * @type {string}
 */

const cookieName = '我在校园';
const cookieKey = 'chavy_cookie_wzxy';
const chavy = init();
const cookieVal = $request.headers['JWSESSION'];  // 获取jwsession
if (cookieVal) {
    if (chavy.setdata(cookieKey, cookieVal)) {
        chavy.msg(`${cookieName}`, '获取JWSESSION: 成功', '')
        chavy.log(`[${cookieName}] 获取JWSESSION: 成功, cookie: ${cookieVal}`)
    }
}https
function init() {
    isSurge = () => {
        return undefined === this.$httpClient ? false : true
    }
    isQuanX = () => {
        return undefined === this.$task ? false : true
    }
    getdata = (key) => {
        if (isSurge()) return $persistentStore.read(key)
        if (isQuanX()) return $prefs.valueForKey(key)
    }
    setdata = (key, val) => {
        if (isSurge()) return $persistentStore.write(key, val)
        if (isQuanX()) return $prefs.setValueForKey(key, val)
    }
    msg = (title, subtitle, body) => {
        if (isSurge()) $notification.post(title, subtitle, body)
        if (isQuanX()) $notify(title, subtitle, body)
    }
    log = (message) => console.log(message)
    get = (url, cb) => {
        if (isSurge()) {
            $httpClient.get(url, cb)
        }
        if (isQuanX()) {
            url.method = 'GET'
            $task.fetch(url).then((resp) => cb(null, {}, resp.body))
        }
    }
    post = (url, cb) => {
        if (isSurge()) {
            $httpClient.post(url, cb)
        }
        if (isQuanX()) {
            url.method = 'POST'
            $task.fetch(url).then((resp) => cb(null, {}, resp.body))
        }
    }
    done = (value = {}) => {
        $done(value)
    }
    return { isSurge, isQuanX, msg, log, getdata, setdata, get, post, done }
}
chavy.done()
