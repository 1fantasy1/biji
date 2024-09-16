---
# 文章标题
title: 「Windows系列」如何在Windows 11上引入并安装BBR拥塞算法
# 设置写作时间
date: 2024-09-16
# 一个页面可以有多个分类
category:
  - 网络
# 一个页面可以有多个标签
tag:
  - 网络配置
  - 使用指南
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在文章收藏中
star: true
# 侧边栏的顺序
# 数字越小越靠前，支持非整数和负数，比如 -10 < -9.5 < 3.2, order 为 -10 的文章会最靠上。
# 个人偏好将非干货或随想短文的 order 设置在 -0.01 到 -0.99，将干货类长文的 order 设置在 -1 到负无穷。每次新增文章都会在上一篇的基础上递减 order 值。
order: -1
---

本文通过简单的设置，无需重启电脑，即可让您的 Windows11 网络速度直接起飞。

# 一、什么是BBR算法？

 BBR (Bottleneck Bandwidth and Round-trip propagation time) 是一种拥塞控制算法，用于优化 TCP 协议在高带宽、高丢包网络环境下的性能。它可以根据当前网络的拥塞情况和延迟来自适应地调整发送速率，以达到最大的网络吞吐量和最小的延迟。BBR算法通过动态的测量和估计网络带宽和延迟等参数，确定合适的拥塞窗口大小，从而达到更好的传输效果。BBR算法目前已被广泛应用于Google的网络服务中，例如YouTube和Google Cloud平台。

# 二、目前Windows 默认的算法是什么？

 CUBIC (Cubic TCP) 算法是一种与 BB-Reno 算法类似的拥塞控制算法，但是与 BB-Reno 算法不同的是，CUBIC 算法采用了一种非线性拥塞窗口增长方式，可以更好地适应高带宽、高延迟的网络环境。

CUBIC 算法的拥塞控制窗口类似于一个立方体的增长曲线，采用了一种基于拥塞窗口的拟合曲线计算机制，通过对丢包事件的监控来调节窗口大小，实现拥塞避免和控制。CUBIC 算法可以在网络拥塞时自动进行拥塞避免和恢复措施，确保网络性能的稳定和流畅。

CUBIC 算法已经被广泛应用于 Linux TCP 模块中，并且还被用于各种广域网和互联网环境中，是一种非常实用的拥塞控制算法。

# 三、两者有什么区别？

BBR算法和CUBIC算法有以下几个本质不同点：

1. 算法的思想不同：BBR算法的核心思想是维持网络中最后一个瓶颈链路的带宽和延迟，即以网络的最小带宽和最大延迟为基准进行拥塞控制；而CUBIC算法采用了一种类似于拟合曲线的方式计算拥塞窗口大小。
2. 算法的参数不同：BBR算法需要动态的测量和估计带宽和延迟等网络参数；而CUBIC算法则是根据拥塞窗口大小的变化来进行自适应控制。
3. 算法的适用环境不同：BBR算法更适合高带宽、高延迟、小数据包的网络环境，例如Google的网络服务，而CUBIC算法更适用于高带宽、长距离的广域网环境。

# 四、什么环境下使用不同的算法？

 简单来说，选择合适的拥塞控制算法要根据网络环境的情况来定。一般来说，当网络的带宽较大、丢包率较低时，BBR算法表现得更好，因为它能够更快地发现网络中存在的带宽并充分利用它。而当网络的带宽较小、丢包率较高时，CUBIC算法能够更好地适应网络状况，减少数据包的丢失和网络拥塞情况的发生。所以，在选择算法时，需要结合实际网络状况和需求来进行选择。

# 五、实现Windows11 切换BBR算法

**5.1** 查看当前的算法

- 以管理员身份打开Powershell

  

- 输入命令查看当前的算法

  ```shell
   NetTCPSetting | Select SettingName, CongestionProvider
  ```

**5.2** 切换BBR算法

- 逐条输入命令

  ```shell
  netsh int tcp set supplemental template=Internet congestionprovider=BBR2
  netsh int tcp set supplemental template=InternetCustom congestionprovider=BBR2
  netsh int tcp set supplemental template=Datacenter congestionprovider=BBR2
  netsh int tcp set supplemental template=DatacenterCustom congestionprovider=BBR2
  netsh int tcp set supplemental template=Compat congestionprovider=BBR2
  ```

  

 全部都是确定之后，输入查看当前算法的命令再次确认是否正确切换。

![image-20230427085605114](https://s2.loli.net/2023/04/27/4NncGRCphEvguIT.png)

# 六、备注

- 无需重启电脑，切换就能用。
- 要是BBR启用后网络变慢，请按照上述步骤 切换成 `CUBIC`即可。
