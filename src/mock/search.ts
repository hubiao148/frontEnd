/*
 * @Author: zyqqun
 * @Date: 2022-11-30 19:07:19
 * @LastEditors: zyqqun 2450100414@qq.com
 * @LastEditTime: 2022-11-30 19:11:18
 * @FilePath: \src\mock\search.ts
 * @Description:
 *
 * Copyright (c) 2022 by zyqqun 2450100414@qq.com, All Rights Reserved.
 */
//热点技术详情页面数据模拟
export default {
  'GET /umi/searchDetail': {
    status: 'success',
    data: {
      title: '前端',
      content: `<p>本文介绍了前端实际工作中用到的大部分内容及其相关知识点，大家可以收藏仔细阅读慢慢看～</p>
      <ul>
      <li><a href="#git-%E5%B8%B8%E8%A7%81%E6%93%8D%E4%BD%9C%E9%9B%86%E9%94%A6" title="#git-%E5%B8%B8%E8%A7%81%E6%93%8D%E4%BD%9C%E9%9B%86%E9%94%A6">Git 常见操作集锦</a></li>
      <li><a href="#git-%E5%88%86%E6%94%AF%E7%AE%A1%E7%90%86%E8%A7%84%E8%8C%83%E5%8F%8A%E5%8F%91%E5%B8%83%E6%B5%81%E7%A8%8B" title="#git-%E5%88%86%E6%94%AF%E7%AE%A1%E7%90%86%E8%A7%84%E8%8C%83%E5%8F%8A%E5%8F%91%E5%B8%83%E6%B5%81%E7%A8%8B">Git 分支管理规范及发布流程</a></li>
      <li><a href="#%E5%9F%BA%E7%A1%80%E5%89%8D%E7%AB%AF%E7%9F%A5%E8%AF%86%E4%BD%93%E7%B3%BB" title="#%E5%9F%BA%E7%A1%80%E5%89%8D%E7%AB%AF%E7%9F%A5%E8%AF%86%E4%BD%93%E7%B3%BB">基础前端知识体系</a></li>
      <li><a href="#ecmascript-%E7%9F%A5%E8%AF%86%E4%BD%93%E7%B3%BB" title="#ecmascript-%E7%9F%A5%E8%AF%86%E4%BD%93%E7%B3%BB">ECMAScript 知识体系</a></li>
      <li><a href="#%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9F%A5%E8%AF%86%E4%BD%93%E7%B3%BB" title="#%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9F%A5%E8%AF%86%E4%BD%93%E7%B3%BB">浏览器知识体系</a></li>
      <li><a href="#%E5%89%8D%E7%AB%AF%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E5%8E%9F%E7%90%86%E4%B8%8E%E5%AE%9E%E8%B7%B5" title="#%E5%89%8D%E7%AB%AF%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E5%8E%9F%E7%90%86%E4%B8%8E%E5%AE%9E%E8%B7%B5">前端性能优化原理与实践</a></li>
      <li><a href="#javascript-%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F" title="#javascript-%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F">JavaScript 设计模式</a></li>
      <li><a href="#%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95%E7%9F%A5%E8%AF%86%E4%BD%93%E7%B3%BB" title="#%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95%E7%9F%A5%E8%AF%86%E4%BD%93%E7%B3%BB">数据结构与算法知识体系</a></li>
      <li><a href="#%E8%AE%BE%E8%AE%A1%E7%A8%BF%E8%BF%98%E5%8E%9F%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86%E7%82%B9" title="#%E8%AE%BE%E8%AE%A1%E7%A8%BF%E8%BF%98%E5%8E%9F%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86%E7%82%B9">设计稿还原相关知识点</a></li>
      <li><a href="#typescript-%E7%9F%A5%E8%AF%86%E4%BD%93%E7%B3%BB" title="#typescript-%E7%9F%A5%E8%AF%86%E4%BD%93%E7%B3%BB">Typescript 知识体系</a>
      <ul>
      <li><a href="#%E5%9F%BA%E7%A1%80%E7%AF%87" title="#%E5%9F%BA%E7%A1%80%E7%AF%87">基础篇</a></li>
      <li><a href="#%E5%B7%A5%E7%A8%8B%E7%AF%87" title="#%E5%B7%A5%E7%A8%8B%E7%AF%87">工程篇</a></li>
      <li><a href="#%E5%AE%9E%E6%88%98%E7%AF%87" title="#%E5%AE%9E%E6%88%98%E7%AF%87">实战篇</a></li>
      </ul>
      </li>
      <li><a href="#react-%E7%9F%A5%E8%AF%86%E4%BD%93%E7%B3%BB" title="#react-%E7%9F%A5%E8%AF%86%E4%BD%93%E7%B3%BB">React 知识体系</a></li>
      <li><a href="#webpack-%E7%9F%A5%E8%AF%86%E4%BD%93%E7%B3%BB" title="#webpack-%E7%9F%A5%E8%AF%86%E4%BD%93%E7%B3%BB">webpack 知识体系</a></li>
      <li><a href="#node-%E7%9F%A5%E8%AF%86%E4%BD%93%E7%B3%BB" title="#node-%E7%9F%A5%E8%AF%86%E4%BD%93%E7%B3%BB">Node 知识体系</a></li>
      </ul>
      <h2 data-id="heading-0">Git</h2>
      <h3 data-id="heading-1">Git 常见操作集锦</h3>
      <p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b77977127db84155b1664282f30846d4~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="git-operate" loading="lazy"></p>
      <p><a href="https://link.juejin.cn?target=https%3A%2F%2Fwww.processon.com%2Fview%2Flink%2F5fd224bfe0b34d06f4ec645a" target="_blank" rel="nofollow noopener noreferrer" title="https://www.processon.com/view/link/5fd224bfe0b34d06f4ec645a" ref="nofollow noopener noreferrer">点击查看原图</a></p>
      <p>这张思维导图主要包含</p>
      <ul>
      <li>如何对使用前的做 Git 基础配置</li>
      <li><code>.git</code>文件夹下几个文件的浅析</li>
      <li>工作中 Git 的常用操作
      <ul>
      <li><code>如何关联远程仓库</code></li>
      <li><code>如何遵循 Git 提交规范</code></li>
      <li>Git 的分支管理规范是什么</li>
      <li><code>如何使用 Git 命令重命名文件</code></li>
      <li><code>如何使用 Git 命令删除文件</code></li>
      <li><code>如何修改Git的历史记录</code></li>
      <li><code>如何恢复到历史记录的指定版本</code></li>
      <li>如何比较 Git 历史记录 📝 之间的差异</li>
      <li>.....</li>
      </ul>
      </li>
      </ul>
      <h3 data-id="heading-2">Git 分支管理规范及发布流程</h3>
      <p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a8161a0f943942e9a9e69fd13aade9dc~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="20210621151742" loading="lazy"></p>
      <p><a href="https://link.juejin.cn?target=https%3A%2F%2Fwww.processon.com%2Fview%2Flink%2F5fbcd578e0b34d59cf8886cd" target="_blank" rel="nofollow noopener noreferrer" title="https://www.processon.com/view/link/5fbcd578e0b34d59cf8886cd" ref="nofollow noopener noreferrer">点击查看完整思维导图</a></p>
      <h2 data-id="heading-3">基础前端知识体系</h2>
      <p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/483849b795804eb3af5450b9de594809~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="基础前端知识体系" loading="lazy"></p>
      <p><a href="https://link.juejin.cn?target=https%3A%2F%2Fwww.processon.com%2Fview%2Flink%2F5fc467586376895e9ae80eb4" target="_blank" rel="nofollow noopener noreferrer" title="https://www.processon.com/view/link/5fc467586376895e9ae80eb4" ref="nofollow noopener noreferrer">点击查看原图</a></p>
      <p>基础前端知识体系主要分为四个部分</p>
      <ul>
      <li>HTML</li>
      <li>JavaScript</li>
      <li>CSS</li>
      <li>API
      <ul>
      <li>浏览器环境</li>
      <li>小程序环境</li>
      <li>Node 环境</li>
      <li>......</li>
      </ul>
      </li>
      </ul>
      <p>关联文章:</p>
      <ul>
      <li><a href="https://juejin.cn/post/6970875511220207629" target="_blank" title="https://juejin.cn/post/6970875511220207629">JavaScript 知识体系之数组基础</a></li>
      <li><a href="https://juejin.cn/post/6971446711113744421" target="_blank" title="https://juejin.cn/post/6971446711113744421">30 种常用 JS 数组操作集锦</a></li>
      <li><a href="https://juejin.cn/post/6902323901888462862" target="_blank" title="https://juejin.cn/post/6902323901888462862">JavaScript 字符串翻转的三种方式</a></li>
      <li><a href="https://juejin.cn/post/6844904194197962759" target="_blank" title="https://juejin.cn/post/6844904194197962759">老生常谈--"闭包"不完全解析</a></li>
      </ul>
      <h2 data-id="heading-4">ECMAScript 知识体系</h2>
      <p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2e9cdaf151e74a34ab9468b775ee6a1b~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="ECMAScript-all" loading="lazy"></p>
      <p><a href="https://link.juejin.cn?target=https%3A%2F%2Fwww.processon.com%2Fview%2Flink%2F60a320615653bb3d82dc8e0d" target="_blank" rel="nofollow noopener noreferrer" title="https://www.processon.com/view/link/60a320615653bb3d82dc8e0d" ref="nofollow noopener noreferrer">点击查看原图</a></p>
      <p>编者花了 2 周多的时间查阅各种文献资料，再进行分类，总结了 <code>ECMAScript</code> 从 <code>ES5</code>-<code>ES13</code> 各个版本的新特性</p>
      <p>关联文章:</p>
      <ul>
      <li><a href="https://juejin.cn/post/6968113844086374431#heading-0" target="_blank" title="https://juejin.cn/post/6968113844086374431#heading-0">最全 ECMAScript 攻略之 ES2022-ES13</a></li>
      </ul>
      <h2 data-id="heading-5">浏览器知识体系</h2>
      <p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/32cfe5d783d649f69a1a5a9a9d9c50e2~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="浏览器工作原理与实践" loading="lazy"></p>
      <p><a href="https://link.juejin.cn?target=https%3A%2F%2Fwww.processon.com%2Fview%2Flink%2F603e43f7f346fb55c9a9d8ec" target="_blank" rel="nofollow noopener noreferrer" title="https://www.processon.com/view/link/603e43f7f346fb55c9a9d8ec" ref="nofollow noopener noreferrer">点击查看原图</a></p>
      <h2 data-id="heading-6">前端性能优化原理与实践</h2>
      <p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/558123a178294d40b628b7f0b54d8272~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="前端性能优化原理与实践" loading="lazy"></p>
      <p><a href="https://link.juejin.cn?target=https%3A%2F%2Fwww.processon.com%2Fview%2Flink%2F6037a8575653bb4bcff04240" target="_blank" rel="nofollow noopener noreferrer" title="https://www.processon.com/view/link/6037a8575653bb4bcff04240" ref="nofollow noopener noreferrer">点击查看原图</a></p>
      <h2 data-id="heading-7">JavaScript 设计模式</h2>
      <p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/776ca6fc06fb4819b9cca34df4179e6c~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="JavaScript设计模式" loading="lazy"></p>
      <p><a href="https://link.juejin.cn?target=https%3A%2F%2Fwww.processon.com%2Fview%2Flink%2F60335e461e085364c6548b79" target="_blank" rel="nofollow noopener noreferrer" title="https://www.processon.com/view/link/60335e461e085364c6548b79" ref="nofollow noopener noreferrer">点击查看原图</a></p>
      <h2 data-id="heading-8">数据结构与算法知识体系</h2>
      <p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ed1219234f4648d39606a6c3c9a6dbec~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="我的数据结构与算法🥶" loading="lazy"></p>
      <p><a href="https://link.juejin.cn?target=https%3A%2F%2Fwww.processon.com%2Fview%2Flink%2F60c9c55ef346fb12b8f45e59" target="_blank" rel="nofollow noopener noreferrer" title="https://www.processon.com/view/link/60c9c55ef346fb12b8f45e59" ref="nofollow noopener noreferrer">点击查看原图</a></p>
      <h2 data-id="heading-9">设计稿还原相关知识点</h2>
      <p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c30766b5635248768bd07a44f00089c8~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="设计稿还原相关知识" loading="lazy"></p>
      <p><a href="https://link.juejin.cn?target=https%3A%2F%2Fwww.processon.com%2Fview%2Flink%2F6002cbc11e08534bec21bb6e" target="_blank" rel="nofollow noopener noreferrer" title="https://www.processon.com/view/link/6002cbc11e08534bec21bb6e" ref="nofollow noopener noreferrer">点击查看原图</a></p>
      <p>关联文章:</p>
      <ul>
      <li><a href="https://juejin.cn/post/6918323869824909319" target="_blank" title="https://juejin.cn/post/6918323869824909319">作为前端，你应该了解的分辨率/逻辑像素/物理像素/retina 屏知识 🧐</a></li>
      </ul>
      <h2 data-id="heading-10">Typescript 知识体系</h2>
      <h3 data-id="heading-11">基础篇</h3>
      <p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ef4e86fe18b7415a8be1b3ee1a976288~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="基础篇" loading="lazy"></p>
      <p><a href="https://link.juejin.cn?target=https%3A%2F%2Fwww.processon.com%2Fview%2Flink%2F5fc8b9d4e0b34d4f98cf2049" target="_blank" rel="nofollow noopener noreferrer" title="https://www.processon.com/view/link/5fc8b9d4e0b34d4f98cf2049" ref="nofollow noopener noreferrer">点击查看原图</a></p>
      <h3 data-id="heading-12">工程篇</h3>
      <p><a href="https://link.juejin.cn?target=https%3A%2F%2Fwww.processon.com%2Fview%2Flink%2F5fc5ebb8e0b34d1856d6695a" target="_blank" rel="nofollow noopener noreferrer" title="https://www.processon.com/view/link/5fc5ebb8e0b34d1856d6695a" ref="nofollow noopener noreferrer">点击查看原图</a></p>
      <h3 data-id="heading-13">实战篇</h3>
      <p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3bd9d4bd0ad248fdb7cf07bff64fe84c~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="实战篇" loading="lazy"></p>
      <p><a href="https://link.juejin.cn?target=https%3A%2F%2Fwww.processon.com%2Fview%2Flink%2F60c9c3ac5653bb3c31ea3077" target="_blank" rel="nofollow noopener noreferrer" title="https://www.processon.com/view/link/60c9c3ac5653bb3c31ea3077" ref="nofollow noopener noreferrer">点击查看原图</a></p>
      <p>关联文章</p>
      <ul>
      <li><a href="https://juejin.cn/post/6972105032078458917" target="_blank" title="https://juejin.cn/post/6972105032078458917">构建 Typescript 知识体系(三)-TS class 浅析</a></li>
      <li><a href="https://juejin.cn/post/6972342025832103950" target="_blank" title="https://juejin.cn/post/6972342025832103950">构建 Typescript 知识体系(五)- 泛型的类/接口/函数</a></li>
      </ul>
      <h2 data-id="heading-14">React 知识体系</h2>
      <p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1247e0992f394bff9bc1b3850dd072b1~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt="我的React知识体系1" loading="lazy"></p>
      <p><a href="https://link.juejin.cn?target=https%3A%2F%2Fwww.processon.com%2Fview%2Flink%2F609cf91b1e0853709cb16e25" target="_blank" rel="nofollow noopener noreferrer" title="https://www.processon.com/view/link/609cf91b1e0853709cb16e25" ref="nofollow noopener noreferrer">点击查看原图</a></p>
      <h2 data-id="heading-15">webpack 知识体系</h2>
      <p><a href="https://link.juejin.cn?target=https%3A%2F%2Fwww.processon.com%2Fview%2Flink%2F5fe215d1e0b34d299ff812aa" target="_blank" rel="nofollow noopener noreferrer" title="https://www.processon.com/view/link/5fe215d1e0b34d299ff812aa" ref="nofollow noopener noreferrer">点击查看原图</a></p>
      <h2 data-id="heading-16">Node 知识体系</h2>`,
    },
  },
};
