---
# 文章标题
title: Windows安装Anaconda
# 设置写作时间
date: 2024-09-26
# 一个页面可以有多个分类
category:
  - 软件
# 一个页面可以有多个标签
tag:
  - 软件安装
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在文章收藏中
star: false
# 侧边栏的顺序
order: -5
# 文章的摘要内容
excerpt: <p>本文介绍了在Windows 10/11系统中，通过命令查看和调整IPv4与IPv6的访问优先级，并提供了切换优先级和重置为默认设置的方法。</p>

---

​	Anaconda是一个广泛用于数据科学和机器学习的Python发行版，它简化了Python环境和库的管理。

## 步骤一：下载Anaconda

​	一般两个选择，一个是官网，另一个是国内[镜像网站](https://mirrors.tuna.tsinghua.edu.cn/help/anaconda/)（**大家自行选择**）。前者速度感人，所以国内可以选择镜像下载。

#### 1.镜像网站。

![](https://my-img.675222.xyz/fantasy-biji/2024/09/acdeb466f0954f7c4739b6e3b9c2b0fa.png)

![](https://my-img.675222.xyz/fantasy-biji/2024/09/45367b7dabece7b956bb748a72062883.png)

#### 2.官网。 

![](https://my-img.675222.xyz/fantasy-biji/2024/09/bf3fc8a36ed35e35c1b849b980f4bf16.png)

![](https://my-img.675222.xyz/fantasy-biji/2024/09/7782f6596e3ac42c5fcf2960c3cd1393.png)



## 步骤二：安装Anaconda

##### 1.运行安装程序： 双击下载的安装程序启动安装向导。

![image-20240926143617252](https://my-img.675222.xyz/fantasy-biji/2024/09/d3192d358b02f3939abab85c561aba99.png)

##### 2.一直点击 Next > 到这里可以修改安装路径（我设置的是<span id="1.1">D:\Anaconda3</span>，后续设置<font color=red>环境变量</font>要用）。

![image-20240926143648580](https://my-img.675222.xyz/fantasy-biji/2024/09/35c8bd1ab32eca76d4a772700c08fd44.png)

第一项：创建开始快捷方式。

第二项：自动将Anaconda3添加到我的PATH环境变量，建议自己设置。

第三项：注册Anaconda3作为我默认的Python 3.10。

第四项：完成后清除包缓存。

（建议按下图方式勾选，再点击“Install”）

![image-20240926151316314](https://my-img.675222.xyz/fantasy-biji/2024/09/0a4f36c2baca22a6f7c7bcfc92046936.png)

##### 3.一直点击直到点击 **Finish** 出现如下画面：

![image-20240926152753956](https://my-img.675222.xyz/fantasy-biji/2024/09/7683cc9f859d07e39db9de286ddbf79d.png)



## 步骤三：手动配置环境变量

​	如果上述步骤5中没有勾选第二项（将Anaconda3添加到我的PATH环境变量），那么需要我们手动配置环境变量。

##### 1.点击桌面上的“此电脑”，右键选择“属性”并点击，之后点击进入系统高级设置。

![](https://my-img.675222.xyz/fantasy-biji/2024/09/a129a82edf1a6492f871f1b2f5c0f671.png)

##### 2.点击进入环境变量设置。

![环境变量](https://my-img.675222.xyz/fantasy-biji/2024/09/08012a4aed2a05076635b05eed67dd99.png)

##### 3.进入的环境变量后，在系统变量一栏中找到**变量：Path**，双击进入编辑界面。在右边点击新建按钮添加如下三条变量。

> D:\Anaconda3
> D:\Anaconda3\Scripts
> D:\Anaconda3\Library\bin
>
> 注意我装的是[D:\Anaconda3](#1.1)这个目录，你要根据自己实际安装目录进行改动，比如装在C:\Anaconda3，就把所有D改成C就行，看情况不要无脑改。

![](https://my-img.675222.xyz/fantasy-biji/2024/09/eb1af77a058f3379eba29480ef8c15ee.png)

##### 4.最后，把刚才点击出来的窗口全部点击确定就行了。

##### 5.测试：

###### 5.1 打开CMD，输入conda info命令。

![CMD](https://my-img.675222.xyz/fantasy-biji/2024/09/0717bc72d54b13180d2b4477469e4d25.png)

​	有如上界面则Anaconda成功，如果提示conda不是内部或外部命令，那一般是，Anaconda的**环境变量**没配置好。



---



**废弃**测试（我使用的是PyCharm 2024.1.4）：

![pycharm主界面](https://my-img.675222.xyz/fantasy-biji/2024/09/8aa4dcf872c02abd83901af6e1b97c7e.png)

![点击添加本地解释器](https://my-img.675222.xyz/fantasy-biji/2024/09/f7f14a27479d5f57cf97cf39480cf01b.png)

![点击conda环境](https://my-img.675222.xyz/fantasy-biji/2024/09/2f4221b2bf65f13a6b197df72fcbbad3.png)

​	由上图，可以看出Anaconda安装完成了。