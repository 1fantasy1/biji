---
title: 基于Algolia实现网站全文搜索
date: 2024-09-17
category:
  - 工具
tag:
  - 页面配置
  - 使用指南
order: -2
---

## 一、 前言

​	我的笔记来使用的是本地搜素，可是总是会有一些内容搜索不出来。在网上搜索后，找到了第三方搜索AlgoliaDocSearch 来实现个人网站的全文搜索。

## 二、Algolia

​	VuePress 的官方文档就是使用的 Algolia 搜索，使用 Algolia 搜索最大的好处就是方便，它会自动爬取网站的页面内容并构建索引，你只用申请一个 Algolia 服务，在网站上添加一些代码，就像添加统计代码一样，然后就可以实现一个全文搜索功能

## 三、实现全文搜索

##### 1.申请Algolia DocSearch服务

​	前往 [Algolia DocSearch Apply](https://docsearch.algolia.com/apply/) 网站，填写网站地址、邮箱、仓库地址等信息，然后提交申请。

![](https://my-img.675222.xyz/fantasy-biji/2024/09/a26c594128435ec52eae983b79839dae.png)

> 注：填写的网站地址必须是公开的、完整的、内容稳定。如果网站还处于测试阶段，申请通过的概率很小。

##### 2 回复确认邮件

​	申请通过后，Algolia DocSearch 官方会发送确认邮件到上一个步骤中填写的邮箱，收到后需要回复一下这个网站是我们负责开发维护的，并且可以修改网站代码。

![](https://my-img.675222.xyz/fantasy-biji/2024/09/cefffd2de66a1cb3dc6a990ce63f7363.png)

> ```bash
> 回复内容：Thanks! I am the maintatiner of the website, I can modify the code.
> ```

![](https://my-img.675222.xyz/fantasy-biji/2024/09/474f4a3778615e8304666192f38ee064.png)

​	然后第二天就会收到包含 AppId 等所需信息的邮件：

![](https://my-img.675222.xyz/fantasy-biji/2024/09/313fb240493680309001c1d3c4401e4a.png)

##### 3.启动搜索服务

Algolia DocSearch 发的邮件包含 **appId、apiKey 和 indexName**，用于在网站生成框架中配置使用，我的笔记模板已经提供，其他框架类似：

![](https://my-img.675222.xyz/fantasy-biji/2024/09/1a87a85eb74faec8360b8db8c05a44ce.png)

​	邮件还会提供接受邀请的链接，前往该链接重新设置密码后（账号是申请时填的邮箱），即可登录 Algolia。

![](https://my-img.675222.xyz/fantasy-biji/2024/09/0da780d320570674c5c411892e0cc3a1.png)

​	登陆后选择对应的项目，与indexName的名字相同：

![](https://my-img.675222.xyz/fantasy-biji/2024/09/8e179cfddc11e25020f10f3d782804ea.png)

​	点击Go To Crawler（**上图蓝色底**）进入爬虫后台，提示前往[新网站](crawler.algolia.com)：

![](https://my-img.675222.xyz/fantasy-biji/2024/09/83167707a55d37906a841f92dc803266.png)

​	点击进入爬虫：

![](https://my-img.675222.xyz/fantasy-biji/2024/09/7af053eb1a0cddc412fc4c7e8e13b5d3.png)

​	如上图红色框内数字为0需进行下一步：

点击左侧菜单中的"Editor"查看并编辑爬虫代码，注意看代码中的 `pathsToMatch` 路径（图中白色框），很明显不对，后面多了个 `docs`，将它改成正确的网站路径 `https://biji.675222.xyz/**`：

> 原因是我们的网站主页是https://biji.675222.xyz/，需要搜索的内容也都在这里。

![](https://my-img.675222.xyz/fantasy-biji/2024/09/35296146de56c200adf676522b023c14.png)

修改完成后，进行测试（图中红色框），如果能成功提取到数据则表示没问题（有图中黄色框类似内容），点击右上角的"Save"按钮保存代码后切换回"Overview"，点击右上角的 “Restart crawling” 重新爬取数据即可。

> 如果还是没有提取到数据，可参见：https://github.com/mqyqingfeng/Blog/issues/267#issuecomment-1078620438

完