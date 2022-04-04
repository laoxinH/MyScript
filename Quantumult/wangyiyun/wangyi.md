## 🎵网易云音乐腾讯云函数教程
#### 目前仓库发布仅有网易云音乐人任务脚本,后续将会发布更多脚本（如果有什么有趣的脚本需要编写请提交[Issues](https://github.com/laoxinH/MyScript/issues)）
#### 感谢支持和建议，欢迎[打赏](https://github.com/laoxinH/MyScript#赞赏码开发维护不易请赏杯茶水费)
>目前完成的功能，简单说明一下，任务都是周任务，像发布动态回复评论这种任务不会一次性执行完。跑一次脚本执行一次。所以别问为啥没执行完

- [x] 多账号支持
- [x] 每日登录
- [x] 发布动态
- [x] 回复私信
- [x] 回复评论
- [x] 发主创说
- [x] 访问云圈
---------- 
**前往此处观看体验更佳  [云函数教程](https://www.laoxin.top/index.php/2022/04/04/ncmusiciancloud/)**  
**[Quantumult教程](https://www.laoxin.top/index.php/2022/04/04/ncmusicianqx/)**
### 1.下载依赖和脚本代码

	
- [点击下载依赖](https://github.com/laoxinH/MyScript/releases/download/node.js/node_modules.zip)（下载后的文件名：node_modules.zip）
- [前往下载脚本](https://github.com/laoxinH/MyScript)*下载方式参考下图*（下载后的文件名：MyScript-main.zip）
![code.png](https://github.com/laoxinH/MyScript/blob/main/Quantumult/wangyiyun/img/%E6%BA%90%E7%A0%81%E4%B8%8B%E8%BD%BD.png?raw=true)

### 2.建立脚本目录
1. 找一个位置建立script文件夹*（文件夹名字随意）*
2. 将之前下载的依赖解压到新建的文件夹
3. 将下载的脚本解压，找到**sendNotify.js** | **wyy_config.js** | **wyy_yyr.js**

> sendNotify.js---发送通知的脚本（位置：你解压的目录/sendNotify.js）<br>
> wyy_config.js---网易云配置文件（位置：你解压的目录/Quantumult/wangyiyun/wyy_config.js）<br>
> wyy_yyr.js---网易云音乐人任务脚本(位置:你解压的目录/Quantumult/wangyiyun/wyy_yyr.js)<br>

![code1.png](https://github.com/laoxinH/MyScript/blob/main/Quantumult/wangyiyun/img/%E7%9B%AE%E5%BD%95%E5%B1%95%E7%A4%BA1.png?raw=true)
### 3.建立index.js并抓取cookie（账号登录已修复可以通过账号登录跳过抓取cookie）<a id="index"></a>
#### 同时复制浏览器的UA备用
1. 在上面的script目录新建index.js文件并添加以下代码（使用自带的文本编辑器即可）

		exports.main_handler = async (event, context, callback) => {
		  // 解决云函数热启动问题
		  // 以后需要添加其他脚本也在需要此添加以下两行代码才能执行
		  // delete require.cache[require.resolve('./你需要的脚本.js')];
		  // require('./你需要的脚本.js'); 
		  // 注意“./”是必不可少的
		  delete require.cache[require.resolve('./wyy_yyr.js')];
		  require('./wyy_yyr.js'); //这里写你想要的脚本
		}
**账号登录（若账号登录存在问题请使用cookie登录）**
> 账号登录已修复<br>
> 在laoxinH_config.js中填写即可（将第5步的粘贴cookie改为填写电话和密码）<br>
> 若使用账号密码登录直接跳过获取cookie（获取cookie对应本部分的2，3，4步）<br>
> 下面为修改好的示例代码<br>
> 多账号参考账号1和脚本注释填写即可


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
			                // 建议填写最简cookie：MUSIC_U=xxxxx; __csrf=xxxxxx;
			                // 电话登录配置
			                phone: "188888888888",    // 电话号码
			                password: "qweerrttt", // 密码
					UA:"你的浏览器UA"
			            },
			            {
			                // 账号二
			                cookie: "",
			                phone: "",
			                password: ""，
					UA:"你的浏览器UA"
			            }
			            /**
			             * 若需要添加更多账号请自行添加以下内容，注意每一个{}之间有英文逗号“,”分割
			             {
			                cookie: "",
			                phone: "",
			                password: "",
					UA:"你的浏览器UA"
			            }
			             */
			        ]
			    }
			}
			
**在wyy_config.js填写好点账号密码后[击跳过获取cookie](#zuizhong)**

**以下为通过cookie方式登录（推荐）**

2. 前往[网易云音乐(点击直达)](https://music.163.com)获取cookie(推荐使用edge或者chrome浏览器)
3. 登录后按F12打开复制cookie(以chrome为例)
![cookie](https://github.com/laoxinH/MyScript/blob/main/Quantumult/wangyiyun/img/%E5%A4%8D%E5%88%B6cookie.png?raw=true)
4. 切换到控制台(Console)格式化为最简cookie
	> 通过执行以下代码格式化cookie

		var CV = '单引号里面放拿到的完整cookie';
		var CookieValue = CV.match(/MUSIC_U=.+?;/) + CV.match(/__csrf=.+?;/);
		copy(CookieValue);

	> 建议复制一行执行一行代码(粘贴到控制台后回车执行)<br>
	> 详细参考下图<br>
	> 格式化后的cookie格式为MUSIC_U=xxxx;__csrf=xxxx;<br>
	> 示例:MUSIC_U=2da45fadcea83dbe492669abdc6c26c4a1e1d6db309b58b6853993166e004087dd3d78b6050a17a35e705925a4e6992f61dfe3f0151024f9e31;__csrf=a43e6551fb5b7978040b5b463b20;
	
	![格式化ck](https://github.com/laoxinH/MyScript/blob/main/Quantumult/wangyiyun/img/%E6%A0%BC%E5%BC%8F%E5%8C%96ck.png?raw=true)
5. 将格式化后的cookie粘贴到laoxinH_config.js文件的对应位置
	> 粘贴后代码示例如下<br>
	> 多账号参考账号1和脚本注释填写即可
	
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
			                cookie: "MUSIC_U=2da45fadcea83dbe492669abdc6c26c4a1e1d6db309b58b688403539931004087dd3d78b6050a17a35e705925a4e6992f61dfe3f0151024f9e31;__csrf=a43e6551fb5b7978040b5b463b20;",
			                // 请填写最简cookie：MUSIC_U=xxxxx; __csrf=xxxxxx;
			                // 电话登录配置
			                phone: "",    // 电话号码
			                password: "", // 密码
					UA:"你的浏览器UA"
			            },
			            {
			                // 账号二
			                cookie: "",
			                phone: "",
			                password: "",
					UA:"你的浏览器UA"
			            }
			            /**
			             * 若需要添加更多账号请自行添加以下内容，注意每一个{}之间有英文逗号“,”分割
			             {
			                cookie: "",
			                phone: "",
			                password: "",
					UA:"你的浏览器UA"
			            }
			             */
			        ]
			    }
			}


	>最终目录展示 <a id="zuizhong"></a>
	
	![最终目录](https://github.com/laoxinH/MyScript/blob/main/Quantumult/wangyiyun/img/%E7%9B%AE%E5%BD%95%E5%B1%95%E7%A4%BA2.png?raw=true)

### 4.登录腾讯云函数上传代码
1. [点击前往](https://console.cloud.tencent.com/scf)腾讯云函数
2. 选择  函数服务>>新建
	> 参考下图
	
	![新建云函数](https://github.com/laoxinH/MyScript/blob/main/Quantumult/wangyiyun/img/%E6%96%B0%E5%BB%BA%E4%BA%91%E5%87%BD%E6%95%B01.png?raw=true)

3. 下拉网页找到 **高级配置**
	>  ### **环境配置** <br>
	>  内存64MB<br>
	>  初始化超时时间300秒<br>
	>  执行超时时间900秒<br>
	>  ### **执行配置**<br>
	>  异步执行勾选启用<br>
	
	*其他使用默认即可*

4. 下拉网页找到 **触发器配置**
	> 创建触发器勾选自定义创建<br>
	> 触发周期选择自定义触发周期<br>
	> Cron表达式填写 10 10 * * *（表示每天10.10分执行，可自行修改，修改方法百度cron表达式）<br>

	*其他使用默认即可*

5. 点击**完成**
**至此配置完成**
### 其他说明
**通知配置**
> 这里以service酱为例<br>
> service的SCKEY(SendKey)[点击登录微信获取](https://sct.ftqq.com/sendkey)<br>
> 其他通知配置方式参考sendNotify.js脚本注释并自行百度相关使用方法<br>

![通知配置](https://github.com/laoxinH/MyScript/blob/main/Quantumult/wangyiyun/img/%E9%80%9A%E7%9F%A5%E9%85%8D%E7%BD%AE.png?raw=true)
**添加新脚本(如果以后还会有网易云脚本的话)**

> 将新脚本上传到云函数目录(具体方法百度,不在赘述)<br>
> 并按照[第三部](#index)分将脚本添加到index.js<br>

**脚本更新说明**

> 打开**函数服务**>>**函数代码**<br>
> 将更新后的脚本上传,并删除老脚本(具体百度,不在赘述)
