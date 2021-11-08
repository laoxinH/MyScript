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
                // 说明: 若填写cookie将直接通过cookie登录,电话号码登录将会失效(优先级:cookie > 电话登录)
                // 因此cookie 和 电话二选一即可
                // 账号密码登录可能有问题，原因异地登陆，若出现问题请使用cookie登录
                cookie: "",
                // 请填写最简cookie：MUSIC_U=xxxxx; __csrf=xxxxxx;
                // 电话登录配置
                phone: "",    // 电话号码
                password: "", // 密码
            },
            {
                // 账号二
                cookie: "",
                phone: "",
                password: ""
            }
            /**
             * 若需要添加更多账号请自行添加以下内容，注意每一个{}之间有英文逗号“,”分割
             {
                cookie: "",
                phone: "",
                password: ""
            }
             */
        ]
    }
}
