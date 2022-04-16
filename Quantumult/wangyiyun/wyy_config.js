module.exports = {
    // 网易云相关配置
    wangyi: {
        // 不填写则使用默认回复
        // 
        doSignInMusician: true,     // 是否执行音乐人签到
        doShareBlog:true,           // 是否执行音乐人发布动态任务
        shareMsg: "",               // 发送动态的文字内容
        doCommentYourself:true,     // 是否执行音乐人主创说任务
        commentMsg: "",             // 主创说评论内容
        doRePrivatrMessage:true,     // 是否执行音乐人私信任务
        reMsg: "",                  // 私信内容
        doReplyMusicComment:true,   // 是否执行音乐人回复粉丝评论任务
        reCommentMsg: "",           // 回复评论内容
        doViewMyCircle:true,        // 是否执行音乐人访问自己云圈任务
        doWatchLesson:true,          // 是否执行音乐人观看课程任务
        users: [
            {
                // 账号一
                // 说明: 若填写cookie将直接通过cookie登录,电话账号登录将会失效(优先级:cookie > 账号登录)
                // 因此cookie 和 电话二选一即可(推荐cookie登录)
                cookie: "MUSIC_U=2da45fadcea83dbe492669abdc6c2690d89fdfb5c377e5a9e548218dd27afef3993166e004087dd3d78b6050a17a35e705925a4e6992f61d07c385928f88e8de;__csrf=6d4b52f2c55af05556fa31d913134659;",
                phone: "18382750609",
                password: "laoxin0318",
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
