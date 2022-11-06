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
      content: `<img src='https://img0.hitv.com/cms/2022/07/22/Si0YS5pskGrm6HaAa3fas.jpeg'/><p><h3>设计模式</h3><br/>
        <hr/>在学习源码的过程中不可避免的涉及到了很多设计模式，其实在我们自己开发中也会不自觉的使用设计模式。
        设计模式其实是对开发设计的一种落地方法，它属于实现层面。设计模式将代码设计的一些范例进行了抽象和总结<br/><br/>
        一个好的设计，便于理解和阅读的复杂框架代码一定都使用了良好的设计模式，因此在学习源码的时候也需要对常用的设计模式进行学习和了解<br/><br/>
        前人帮我们总结了23种设计模式，本文并不是对于设计模式的简单罗列和介绍（这样的文章在网上很多），而是对于我在看源码的过程中学习到的设计模式的理解<br/><br/>
        学习和背的所有的设计模式并不是本事，在开发中能够不自觉的熟练运用设计模式才是正道。也许有一天当你已经忘记了所有的设计模式，而开发中随心所欲的运用各种设计模式，就像张三丰让张无忌忘记所学的武功招式那样，可能你才真正的掌握了他们
        </p>`,
    },
  },

  //技术分享详情页面数据模拟
  'GET /umi/techShareDetail': {
    status: 'success',
    data: {
      title: 'Jenkins 如何获取vue build构建结果；并且发送飞书消息？',
      content: `<img src='https://img0.hitv.com/cms/2022/07/22/Si0YS5pskGrm6HaAa3fas.jpeg'/><p><b>
        目的：实现jenkins部署后发送「飞书机器人」推送消息</b><br/>
        问题：在自己的jenkins项目 - 可用环境变量中找不到 $BUILD_STATUS 可用变量；<br/>
        请教：想问问大家怎么在自己的jenkins部署后按照部署结果发生 成功 or 失败 的消息判断的？<br/><br/>
        如果你的方向是前端， 那前端目前就分pc， 移动。 如果是pc， 要考虑游览器兼容问题。 移动的话要考虑分辨率， 流量问题。 两者都要考虑性能问题。 
        目前前端三大神器：vue， react， angular2.0。angular2.0和vue差不多，性能差点，难上手， 适合angular1.x的老用户用。 vue和react两者必会其一。 
        如果楼主关心其他编程范式的话， 可以考虑rxjs响应式库， rambda函数式库。<br/><br/>
        当然， 前端工程化也是必须的。 这些东西你要会babel来将es6，es7的代码转为es5使用。 包括webpack fs3这些构建工具来帮助你构建工程。<br/><br/>
        写完了前端。 假设后端你已经写好了(node用来写业务逻辑， redis保存缓存数据， mongodb保存长期数据)。 然后利用docker来发布你的产品。
        </p>`,
    },
  },
};
