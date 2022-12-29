export default {
  //设计模式列表
  'GET /umi/modeList': {
    status: 'success',
    data: [
      {
        id: 1,
        src: '	https://img2.woyaogexing.com/2020/04/05/eac6b0e6ba16494884b092b520f8809e!1242x9999.jpeg',
        title: '后台设计模式1',
        description: '单例设计模式就是一种控制实例化对象个数的设计模式。。。',
      },
      {
        id: 2,
        src: 'https://img2.woyaogexing.com/2022/10/31/0db5a69812a17820!400x400.jpg',
        title: '后台设计模式2',
        description: '单例设计模式就是一种控制实例化对象个数的设计模式。。。',
      },
      {
        id: 3,
        src: 'https://img2.woyaogexing.com/2022/11/04/e4e5d4dab894f38b!400x400.jpg',
        title: '后台设计模式3',
        description: '单例设计模式就是一种控制实例化对象个数的设计模式。。。',
      },
      {
        id: 4,
        src: '	https://img2.woyaogexing.com/2020/04/05/747f38e7b7fc462e853103ce90d769d2!1242x9999.jpeg',
        title: '后台设计模式4',
        description: '单例设计模式就是一种控制实例化对象个数的设计模式。。。',
      },
      {
        id: 5,
        src: 'https://img2.woyaogexing.com/2022/11/01/742df791e647c16e!400x400.jpg',
        title: '后台设计模式5',
        description: '单例设计模式就是一种控制实例化对象个数的设计模式。。。',
      },
      {
        id: 6,
        src: 'https://pic1.zhimg.com/80/v2-377cc507a4b525328e96e10a0fe20958_1440w.webp?source=1940ef5c',
        title: '后台设计模式6',
        description: '单例设计模式就是一种控制实例化对象个数的设计模式。。。',
      },
      {
        id: 7,
        src: 'https://lupic.cdn.bcebos.com/20220107/3085838872_14_561_400.jpg',
        title: '后台设计模式7',
        description: '单例设计模式就是一种控制实例化对象个数的设计模式。。。',
      },
      {
        id: 8,
        src: 'https://lupic.cdn.bcebos.com/20220107/3085838872_14_561_400.jpg',
        title: '后台设计模式',
        description: '单例设计模式就是一种控制实例化对象个数的设计模式。。。',
      },
      {
        id: 9,
        src: 'https://lupic.cdn.bcebos.com/20220107/3085838872_14_561_400.jpg',
        title: '后台设计模式',
        description: '单例设计模式就是一种控制实例化对象个数的设计模式。。。',
      },
      {
        id: 10,
        src: 'https://lupic.cdn.bcebos.com/20220107/3085838872_14_561_400.jpg',
        title: '后台设计模式',
        description: '单例设计模式就是一种控制实例化对象个数的设计模式。。。',
      },
      {
        id: 11,
        src: 'https://lupic.cdn.bcebos.com/20220107/3085838872_14_561_400.jpg',
        title: '后台设计模式',
        description: '单例设计模式就是一种控制实例化对象个数的设计模式。。。',
      },
      {
        id: 12,
        src: 'https://lupic.cdn.bcebos.com/20220107/3085838872_14_561_400.jpg',
        title: '后台设计模式',
        description: '单例设计模式就是一种控制实例化对象个数的设计模式。。。',
      },
      {
        id: 13,
        src: 'https://lupic.cdn.bcebos.com/20220107/3085838872_14_561_400.jpg',
        title: '后台设计模式',
        description: '单例设计模式就是一种控制实例化对象个数的设计模式。。。',
      },
      {
        id: 14,
        src: 'https://lupic.cdn.bcebos.com/20220107/3085838872_14_561_400.jpg',
        title: '后台设计模式',
        description: '单例设计模式就是一种控制实例化对象个数的设计模式。。。',
      },
      {
        id: 15,
        src: 'https://lupic.cdn.bcebos.com/20220107/3085838872_14_561_400.jpg',
        title: '后台设计模式',
        description: '单例设计模式就是一种控制实例化对象个数的设计模式。。。',
      },
    ],
  },

  //设计模式详情页面数据模拟
  'GET /umi/modeDetail': {
    status: 'success',
    data: {
      title: '设计模式篇',
      content: `<img src='	https://img-blog.csdnimg.cn/20200427090526159.png?…G4ubmV0L3FxXzM0Nzg0MzU0,size_16,color_FFFFFF,t_70'/><h3>设计模式</h3><br/>
        <hr/><p>在学习源码的过程中不可避免的涉及到了很多设计模式，其实在我们自己开发中也会不自觉的使用设计模式。
        设计模式其实是对开发设计的一种落地方法，它属于实现层面。设计模式将代码设计的一些范例进行了抽象和总结<br/><br/>
        一个好的设计，便于理解和阅读的复杂框架代码一定都使用了良好的设计模式，因此在学习源码的时候也需要对常用的设计模式进行学习和了解<br/><br/>
        前人帮我们总结了23种设计模式，本文并不是对于设计模式的简单罗列和介绍（这样的文章在网上很多），而是对于我在看源码的过程中学习到的设计模式的理解<br/><br/>
        学习和背的所有的设计模式并不是本事，在开发中能够不自觉的熟练运用设计模式才是正道。也许有一天当你已经忘记了所有的设计模式，而开发中随心所欲的运用各种设计模式，就像张三丰让张无忌忘记所学的武功招式那样，可能你才真正的掌握了他们
        <h3>工厂方法</h3>
        <h3>抽象工厂方法</h3></p>
        <h2>1.什么是设计模式????????</h2>
        <p>设计模式对是经验的总结，是一套被反复使用的、多数人知晓的、经过分类编目的、代码设计经验的总结。代表了最佳的实战。</p>
        <h2>2.提出及GOF</h2>
        <p>在 1994 年，由 Erich Gamma、Richard Helm、Ralph Johnson 和 John Vlissides<br>   四人合著出版了一本名为 Design Patterns - Elements of Reusable Object-Oriented<br>   Software（中文译名：设计模式 - 可复用的面向对象软件元素） 的书，该书首次提到了软件开发中设计模式的概念。<br>四位作者合称 GOF（四人帮，全拼 Gang of Four）。</p>
        <h2>3.设计模式目的</h2>
        <ul>
        <li>为了代码可重用性</li>
        <li>让代码更容易被他人理解</li>
        <li>保证代码可靠性</li>
        </ul>
        <h2>4.设计原则</h2>
        <p><a href="https://segmentfault.com/a/1190000014745488">设计原则</a>是设计模式为了达到其目的，所实现的一些准则。</p>
        <ol>
        <li>开闭原则</li>
        <li>单一职责原则</li>
        <li>里氏替换原则</li>
        <li>依赖倒转原则</li>
        <li>接口隔离原则</li>
        <li>迪米特法则</li>
        <li>合成复用原则</li>
        </ol>
        <h2>5.设计模式分类</h2>
        <p>1.创建型<br><a href="https://segmentfault.com/a/1190000014698332">工厂模式</a>（Factory Pattern）[简单/静态工厂模式]、<a href="https://segmentfault.com/a/1190000014746401">抽象工厂模式</a>（Abstract Factory Pattern）、<a href="https://segmentfault.com/a/1190000014654273">单例模式</a>（Singleton Pattern）[多例模式]、<a href="https://segmentfault.com/a/1190000014892929">建造者模式</a>（Builder Pattern）、<a href="https://segmentfault.com/a/1190000014911294">原型模式</a>（Prototype Pattern）</p>
        <p>2.结构型<br><a href="https://segmentfault.com/a/1190000014928585">适配器模式</a>（Adapter Pattern）、<a href="https://segmentfault.com/a/1190000014935223">桥接模式</a>（Bridge Pattern）、<a href="https://segmentfault.com/a/1190000014961726">组合模式</a>（Composite Pattern）、<a href="https://segmentfault.com/a/1190000014999375">装饰器模式</a>（Decorator Pattern）、<a href="https://segmentfault.com/a/1190000015017161">外观模式</a>（Facade Pattern）、<a href="https://segmentfault.com/a/1190000015035255">享元模式</a>（Flyweight Pattern）、<a href="https://segmentfault.com/a/1190000015043862">代理模式</a>（Proxy Pattern）</p>
        <p>3.行为型<br><a href="https://segmentfault.com/a/1190000015106008">责任链模式</a>（Chain of Responsibility Pattern）、<a href="https://segmentfault.com/a/1190000015124283">命令模式</a>（Command Pattern）、<a href="https://segmentfault.com/a/1190000015148412">解释器模式</a>（Interpreter Pattern）、<a href="https://segmentfault.com/a/1190000015154760">迭代器模式</a>（Iterator Pattern）、<a href="https://segmentfault.com/a/1190000015171007">中介者模式</a>（Mediator Pattern）、<a href="https://segmentfault.com/a/1190000015189132">备忘录模式</a>（Memento Pattern）、<a href="https://segmentfault.com/a/1190000015205654">观察者模式</a>（Observer Pattern）、<a href="https://segmentfault.com/a/1190000015242229">状态模式</a>（State Pattern）、<a href="https://segmentfault.com/a/1190000014635851">策略模式</a>（Strategy Pattern）、<a href="https://segmentfault.com/a/1190000015255020">模板模式</a>（Template Pattern）、<a href="https://segmentfault.com/a/1190000015269065">访问者模式</a>（Visitor Pattern）</p>
        `,
    },
  },

  //开源项目左侧导航栏信息
  'GET /umi/openProject/navigation': {
    status: 'success',
    data: [
      { label: '项目类别1', key: `sort1` },
      { label: '项目类别2', key: `sort2` },
      { label: '项目类别3', key: `sort3` },
    ],
  },

  //开源项目项目信息列表
  'GET /umi/openProject/projectList': {
    status: 'success',
    data: Array.from({ length: 23 }).map((_, i) => ({
      href: 'https://gitee.com/han-changyuan/easySE_frontEnd',
      title: `值得学习的开源项目 ${i}`,
      avatar: 'https://joeschmoe.io/api/v1/random',
      description:
        'Gitee, a design language for background applications, is refined by Ant UED Team.',
      content:
        '这是一个基于React17+Redux+Typescript4+umi3+jotai+ant的企业级React项目',
    })),
  },

  //开源项目项目信息列表
  'GET /api/openProject/projectListsort1': {
    status: 'success',
    data: Array.from({ length: 23 }).map((_, i) => ({
      href: 'https://gitee.com/han-changyuan/easySE_frontEnd',
      title: `开源项目类别一 ${i}`,
      avatar: 'https://joeschmoe.io/api/v1/random',
      description:
        'Gitee, a design language for background applications, is refined by Ant UED Team.',
      content:
        '这是一个基于React17+Redux+Typescript4+umi3+jotai+ant的企业级React项目',
    })),
  },

  //开源项目项目信息列表
  'GET /umi/openProject/projectListsort2': {
    status: 'success',
    data: Array.from({ length: 23 }).map((_, i) => ({
      href: 'https://gitee.com/han-changyuan/easySE_frontEnd',
      title: `开源项目类别二 ${i}`,
      avatar: 'https://joeschmoe.io/api/v1/random',
      description:
        'Gitee, a design language for background applications, is refined by Ant UED Team.',
      content:
        '这是一个基于React17+Redux+Typescript4+umi3+jotai+ant的企业级React项目',
    })),
  },

  //开源项目项目信息列表
  'GET /umi/openProject/projectListsort3': {
    status: 'success',
    data: Array.from({ length: 23 }).map((_, i) => ({
      href: 'https://gitee.com/han-changyuan/easySE_frontEnd',
      title: `开源项目类别三 ${i}`,
      avatar: 'https://joeschmoe.io/api/v1/random',
      description:
        'Gitee, a design language for background applications, is refined by Ant UED Team.',
      content:
        '这是一个基于React17+Redux+Typescript4+umi3+jotai+ant的企业级React项目',
    })),
  },

  //技术分享左侧导航栏信息
  'GET /umi/techShare/navigation': {
    status: 'success',
    data: [
      { label: '前端', key: `Front` },
      { label: '后端', key: `End` },
      { label: '游戏开发', key: `Game` },
      { label: '其它', key: `Other` },
    ],
  },

  //技术分享信息列表
  'GET /umi/techShare/shareList2': {
    status: 'success',
    data: Array.from({ length: 23 }).map((_, i) => ({
      href: 'https://gitee.com/han-changyuan/easySE_frontEnd',
      title: `前端资料 ${i}`,
      avatar: 'https://joeschmoe.io/api/v1/random',
      description:
        'Gitee, a design language for background applications, is refined by Ant UED Team.',
      content:
        '这是一个基于React17+Redux+Typescript4+umi3+jotai+ant的企业级React项目',
    })),
  },

  //技术分享信息列表
  'GET /umi/techShare/shareList1': {
    status: 'success',
    data: Array.from({ length: 23 }).map((_, i) => ({
      href: 'https://gitee.com/han-changyuan/easySE_frontEnd',
      title: `后端资料 ${i}`,
      avatar: 'https://joeschmoe.io/api/v1/random',
      description:
        'Gitee, a design language for background applications, is refined by Ant UED Team.',
      content:
        '这是一个基于React17+Redux+Typescript4+umi3+jotai+ant的企业级React项目',
    })),
  },

  //技术分享信息列表
  'GET /umi/techShare/shareList3': {
    status: 'success',
    data: Array.from({ length: 23 }).map((_, i) => ({
      href: 'https://gitee.com/han-changyuan/easySE_frontEnd',
      title: `游戏开发资料 ${i}`,
      avatar: 'https://joeschmoe.io/api/v1/random',
      description:
        'Gitee, a design language for background applications, is refined by Ant UED Team.',
      content:
        '这是一个基于React17+Redux+Typescript4+umi3+jotai+ant的企业级React项目',
    })),
  },

  //技术分享信息列表
  'GET /umi/techShare/shareList4': {
    status: 'success',
    data: Array.from({ length: 23 }).map((_, i) => ({
      href: 'https://gitee.com/han-changyuan/easySE_frontEnd',
      title: `其它资料 ${i}`,
      avatar: 'https://joeschmoe.io/api/v1/random',
      description:
        'Gitee, a design language for background applications, is refined by Ant UED Team.',
      content:
        '这是一个基于React17+Redux+Typescript4+umi3+jotai+ant的企业级React项目',
    })),
  },
};
