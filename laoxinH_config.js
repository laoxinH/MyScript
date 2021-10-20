module.exports = {
    wangyi : {
        // 说明: 若填写cookie将直接通过cookie登录,电话号码登录将会失效(优先级:cookie > 电话登录)
        // 因此cookie 和 电话二选一即可
        // 账号密码登录目前存在问题，原因未知，强烈建议cookie登录
        cookie : "",  // 网易云cookie填写处(注意不要有cookie结尾不能有换行获回车符号"\n"等)
        // 请填写最简cookie：MUSIC_U=xxxxx; __csrf=xxxxxx;
        // 电话登录配置
        phone: "",    // 电话号码
        password: "", // 密码
    }
}
