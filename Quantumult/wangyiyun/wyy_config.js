module.exports = {
    // 网易云相关配置
    wangyi: {
        // 不填写则使用默认回复
        shareMsg: "",               // 发送动态的文字内容
        commentMsg: "",             // 主创说评论内容
        reMsg: "",                  // 私信内容
        reCommentMsg: "",           // 回复评论内容
        users: [
            {
                // 账号一
                // 说明: 优先级:cookie > 账号登录
                // cookie失效 将会通过账号登陆(推荐cookie登录)
                cookie: "MUSIC_U=2da45fadcebe492669abdc6c26d89fdfb5c377e5a9e548218dd27afef3993166e004087dd3d78b6050a17a35e705925a4e6992f61d07c385928f88e8de;__csrf=6d4b52f2c55af05556fa31d913134659;",
                phone: "",
                password: "",
                // UA推荐填写自己浏览器UA,防止大量UA相同出现错误
                UA:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.37 Edg/99.0.1150.55",

            },
            {
                // 账号二
                cookie: "",
                phone: "",
                password: "",
                UA:""
            }
            /**
             * 若需要添加更多账号请自行添加以下内容，注意每一个{}之间有英文逗号“,”分割
             {
                cookie: "",
                phone: "",
                password: "",
                UA:""
            }
             */
        ]
    }
}
