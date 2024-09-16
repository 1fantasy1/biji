"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[6518],{2789:(i,s)=>{s.A=(i,s)=>{const a=i.__vccOpts||i;for(const[i,n]of s)a[i]=n;return a}},8920:(i,s,a)=>{a.r(s),a.d(s,{comp:()=>l,data:()=>h});var n=a(7829);const t=[(0,n.Fv)('<p>Windows 11 22H2 已经支持 TCP BBR v2 拥塞控制。本文通过简单的设置，Windows 系统默认的 Cubic 拥塞控制切换到 BBR v2 拥塞控制，无需重启电脑，即可让您的 Windows11 网络速度直接起飞。</p><h1 id="一、什么是bbr算法" tabindex="-1"><a class="header-anchor" href="#一、什么是bbr算法"><span>一、什么是BBR算法？</span></a></h1><p>BBR (Bottleneck Bandwidth and Round-trip propagation time) 是一种拥塞控制算法，用于优化 TCP 协议在高带宽、高丢包网络环境下的性能。它可以根据当前网络的拥塞情况和延迟来自适应地调整发送速率，以达到最大的网络吞吐量和最小的延迟。BBR算法通过动态的测量和估计网络带宽和延迟等参数，确定合适的拥塞窗口大小，从而达到更好的传输效果。BBR算法目前已被广泛应用于Google的网络服务中，例如YouTube和Google Cloud平台。</p><h1 id="二、目前windows-默认的算法是什么" tabindex="-1"><a class="header-anchor" href="#二、目前windows-默认的算法是什么"><span>二、目前Windows 默认的算法是什么？</span></a></h1><p>CUBIC (Cubic TCP) 算法是一种与 BB-Reno 算法类似的拥塞控制算法，但是与 BB-Reno 算法不同的是，CUBIC 算法采用了一种非线性拥塞窗口增长方式，可以更好地适应高带宽、高延迟的网络环境。</p><p>CUBIC 算法的拥塞控制窗口类似于一个立方体的增长曲线，采用了一种基于拥塞窗口的拟合曲线计算机制，通过对丢包事件的监控来调节窗口大小，实现拥塞避免和控制。CUBIC 算法可以在网络拥塞时自动进行拥塞避免和恢复措施，确保网络性能的稳定和流畅。</p><p>CUBIC 算法已经被广泛应用于 Linux TCP 模块中，并且还被用于各种广域网和互联网环境中，是一种非常实用的拥塞控制算法。</p><h1 id="三、两者有什么区别" tabindex="-1"><a class="header-anchor" href="#三、两者有什么区别"><span>三、两者有什么区别？</span></a></h1><p>BBR算法和CUBIC算法有以下几个本质不同点：</p><ol><li>算法的思想不同：BBR算法的核心思想是维持网络中最后一个瓶颈链路的带宽和延迟，即以网络的最小带宽和最大延迟为基准进行拥塞控制；而CUBIC算法采用了一种类似于拟合曲线的方式计算拥塞窗口大小。</li><li>算法的参数不同：BBR算法需要动态的测量和估计带宽和延迟等网络参数；而CUBIC算法则是根据拥塞窗口大小的变化来进行自适应控制。</li><li>算法的适用环境不同：BBR算法更适合高带宽、高延迟、小数据包的网络环境，例如Google的网络服务，而CUBIC算法更适用于高带宽、长距离的广域网环境。</li></ol><h1 id="四、什么环境下使用不同的算法" tabindex="-1"><a class="header-anchor" href="#四、什么环境下使用不同的算法"><span>四、什么环境下使用不同的算法？</span></a></h1><p>简单来说，选择合适的拥塞控制算法要根据网络环境的情况来定。一般来说，当网络的带宽较大、丢包率较低时，BBR算法表现得更好，因为它能够更快地发现网络中存在的带宽并充分利用它。而当网络的带宽较小、丢包率较高时，CUBIC算法能够更好地适应网络状况，减少数据包的丢失和网络拥塞情况的发生。所以，在选择算法时，需要结合实际网络状况和需求来进行选择。</p><h1 id="五、实现windows11-切换bbr算法" tabindex="-1"><a class="header-anchor" href="#五、实现windows11-切换bbr算法"><span>五、实现Windows11 切换BBR算法</span></a></h1><p><strong>5.1</strong> 查看当前的算法</p><ul><li><p>以管理员身份打开Powershell</p></li><li><p>输入命令查看当前的算法</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> NetTCPSetting</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> Select</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> SettingName,</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> CongestionProvider</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul><figure><img src="https://my-img.675222.xyz/fantasy-biji/2024/09/a7a4266ed457809cbb55f3fb2f74e166.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>5.2</strong> 切换BBR算法</p><ul><li><p>逐条输入命令</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">netsh</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> int</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> tcp</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> supplemental</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> template=Internet</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> congestionprovider=BBR2</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">netsh</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> int</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> tcp</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> supplemental</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> template=InternetCustom</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> congestionprovider=BBR2</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">netsh</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> int</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> tcp</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> supplemental</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> template=Datacenter</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> congestionprovider=BBR2</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">netsh</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> int</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> tcp</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> supplemental</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> template=DatacenterCustom</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> congestionprovider=BBR2</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">netsh</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> int</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> tcp</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> supplemental</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> template=Compat</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> congestionprovider=BBR2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>全部都是确定之后，输入查看当前算法的命令再次确认是否正确切换。</p></li></ul><div class="language-vb line-numbers-mode" data-highlighter="shiki" data-ext="vb" data-title="vb" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">SettingName      CongestionProvider</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">-----------</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">      ------------------</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">Automatic</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">InternetCustom   BBR2</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">DatacenterCustom BBR2</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">Compat           BBR2</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">Datacenter       BBR2</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">Internet         BBR2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="六、备注" tabindex="-1"><a class="header-anchor" href="#六、备注"><span>六、备注</span></a></h1><ul><li><p>无需重启电脑，切换就能用。</p></li><li><p>要是BBR启用后网络变慢，请按照上述步骤 切换成 <code>CUBIC</code>即可。</p></li></ul><p><strong>从BBR v2 恢复到原有的 CUBIC</strong></p><p>在 Powershell 中输入下面的命令：</p><div class="language-vb line-numbers-mode" data-highlighter="shiki" data-ext="vb" data-title="vb" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">netsh </span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> tcp</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> set </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">supplemental </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Template</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Internet</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> CongestionProvider</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">cubic</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">netsh </span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> tcp</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> set </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">supplemental </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Template</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Datacenter</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> CongestionProvider</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">cubic</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">netsh </span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> tcp</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> set </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">supplemental </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Template</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Compat</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> CongestionProvider</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">newreno</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">netsh </span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> tcp</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> set </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">supplemental </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Template</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">DatacenterCustom</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> CongestionProvider</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">cubic</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">netsh </span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> tcp</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> set </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">supplemental </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Template</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">InternetCustom</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> CongestionProvider</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">cubic</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后再使用 <code>Get-NetTCPSetting | Select SettingName, CongestionProvider</code> 命令来查看当前使用的 TCP 拥塞控制</p>',25)],e={},l=(0,a(2789).A)(e,[["render",function(i,s){return(0,n.uX)(),(0,n.CE)("div",null,t)}]]),h=JSON.parse('{"path":"/posts/2024-03-01-blog_example.html","title":"「Windows系列」如何在Windows 11上引入并安装BBR拥塞算法","lang":"zh-CN","frontmatter":{"title":"「Windows系列」如何在Windows 11上引入并安装BBR拥塞算法","date":"2024-09-16T00:00:00.000Z","category":["网络"],"tag":["网络配置","使用指南"],"sticky":true,"star":true,"order":-1,"description":"Windows 11 22H2 已经支持 TCP BBR v2 拥塞控制。本文通过简单的设置，Windows 系统默认的 Cubic 拥塞控制切换到 BBR v2 拥塞控制，无需重启电脑，即可让您的 Windows11 网络速度直接起飞。 一、什么是BBR算法？ BBR (Bottleneck Bandwidth and Round-trip prop...","head":[["meta",{"property":"og:url","content":"https://biji.675222.xyz/posts/2024-03-01-blog_example.html"}],["meta",{"property":"og:site_name","content":"Fantasy的笔记"}],["meta",{"property":"og:title","content":"「Windows系列」如何在Windows 11上引入并安装BBR拥塞算法"}],["meta",{"property":"og:description","content":"Windows 11 22H2 已经支持 TCP BBR v2 拥塞控制。本文通过简单的设置，Windows 系统默认的 Cubic 拥塞控制切换到 BBR v2 拥塞控制，无需重启电脑，即可让您的 Windows11 网络速度直接起飞。 一、什么是BBR算法？ BBR (Bottleneck Bandwidth and Round-trip prop..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://my-img.675222.xyz/fantasy-biji/2024/09/a7a4266ed457809cbb55f3fb2f74e166.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-16T08:17:43.000Z"}],["meta",{"property":"article:author","content":"Fantasy"}],["meta",{"property":"article:tag","content":"网络配置"}],["meta",{"property":"article:tag","content":"使用指南"}],["meta",{"property":"article:published_time","content":"2024-09-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-16T08:17:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"「Windows系列」如何在Windows 11上引入并安装BBR拥塞算法\\",\\"image\\":[\\"https://my-img.675222.xyz/fantasy-biji/2024/09/a7a4266ed457809cbb55f3fb2f74e166.png\\"],\\"datePublished\\":\\"2024-09-16T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-16T08:17:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Fantasy\\",\\"url\\":\\"https://biji.675222.xyz\\"}]}"]]},"headers":[],"git":{"createdTime":1725691170000,"updatedTime":1726474663000,"contributors":[{"name":"fantasy","email":"127208503+1fantasy1@users.noreply.github.com","commits":2},{"name":"沧海有泪","email":"127208503+1fantasy1@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":4.38,"words":1315},"filePathRelative":"_posts/2024-03-01-blog_example.md","localizedDate":"2024年9月16日","excerpt":"<p>Windows 11 22H2 已经支持 TCP BBR v2 拥塞控制。本文通过简单的设置，Windows 系统默认的 Cubic 拥塞控制切换到 BBR v2 拥塞控制，无需重启电脑，即可让您的 Windows11 网络速度直接起飞。</p>\\n<h1>一、什么是BBR算法？</h1>\\n<p>BBR (Bottleneck Bandwidth and Round-trip propagation time) 是一种拥塞控制算法，用于优化 TCP 协议在高带宽、高丢包网络环境下的性能。它可以根据当前网络的拥塞情况和延迟来自适应地调整发送速率，以达到最大的网络吞吐量和最小的延迟。BBR算法通过动态的测量和估计网络带宽和延迟等参数，确定合适的拥塞窗口大小，从而达到更好的传输效果。BBR算法目前已被广泛应用于Google的网络服务中，例如YouTube和Google Cloud平台。</p>","autoDesc":true}')}}]);