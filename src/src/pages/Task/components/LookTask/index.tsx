/*
 * @Author: hcy
 * @Date: 2022-11-20 21:37:01
 * @LastEditors: hcy
 * @LastEditTime: 2022-11-30 20:03:43
 * @FilePath: \src\src\pages\Task\components\LookTask\index.tsx
 * @Description: 查看
 * 
 */
import React, { useState } from 'react'
import FileViewer from "@/components/FileViewer"

import style from './index.less'
import { Breadcrumb, Modal, Badge, Descriptions, Input, Button, Switch } from 'antd'
const { TextArea } = Input;
import { Link } from 'umi'
export default function index() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className={style.container}>
            <div className={style['menu']}>
                <Breadcrumb separator=">">
                    <Breadcrumb.Item>
                        <Link to="/task">实践任务</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to="/task/staging">工作台</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to="/task/taskManage">任务管理</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>任务查看</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className={style.body}>
                <h2 style={{ textAlign: 'center' }}>表头</h2>
                <Descriptions title={'截止时间：' + 2022} bordered column={1} labelStyle={{ textAlign: 'center', width: '15%' }} extra={(

                    <div>
                        是否审查通过：
                        <Switch />
                    </div>
                )}>
                    <Descriptions.Item label="描述" >JavaScript（JS）是一种具有函数优先特性的轻量级、解释型或者说即时编译型的编程语言。虽然作为 Web 页面中的脚本语言被人所熟知，但是它也被用到了很多非浏览器环境中，例如 Node.js、Apache CouchDB、Adobe Acrobat 等。进一步说，JavaScript 是一种基于原型、多范式、单线程的动态语言，并且支持面向对象、命令式和声明式（如函数式编程）风格。了解更多关于 JavaScript。

                        本部分文档将专注于 JavaScript 语言本身，而非局限于网页或其他运行环境。想要了解网页中特有的 API，请参考 Web API 以及 DOM。

                        ECMAScript 语言规范（ECMAScript Language Specification）（ECMA-262）和ECMAScript 国际化 API 规范（ECMAScript Internationalization API specification）（ECMA-402）是 Javascript 的标准。当某个 ECMAScript 新特性的提案已经被一些浏览器实现时，MDN 上的文档或示例就可能会涉及到这些新特性。大多数时候，处在 stages 3 和 4 的新特性会被收录到文档中，且收录时间通常早于其正式发布的时间。

                        不要将 JavaScript 与 Java 编程语言 混淆。虽然“Java”和“JavaScript”都是 Oracle 公司在美国和其他国家注册（或未注册）的商标，但是这两门语言在语法、语义与用途方面有相当大的不同。

                        想成为一名前端网页开发人员吗？

                        为了帮助你实现这个目标，我们总结了一条包含所有必要信息的学习路线。

                        从这里起步

                        教程
                        借助指南和教程来学习如何用 JavaScript 编程。

                        对于完全的初学者
                        如果你想学习 JavaScript，却从未接触过 JavaScript 或编程，你可以投入到我们的 JavaScript 主题学习区。下面列出了这部分的所有章节：

                        JavaScript 第一步
                        回答了一些基本问题，比如“JavaScript 是什么？”、“它长什么样子？”、“它可以用来做什么？”等，同时还谈及了如变量、字符串、数值、数组等 JavaScript 的关键特性。

                        JavaScript 基本结构
                        继介绍了 JavaScript 关键的基本特性后，我们需要关注常见的代码组成部分，如条件语句、循环、函数、事件等。

                        介绍 JavaScript 对象
                        如果你想进一步使用它撰写更有效率的代码，理解 JavaScript 面向对象的特性是很重要的，因此我们提供了该模块来帮助你理解它。

                        异步 JavaScript
                        介绍异步 Javascript，解释为什么这个特性是重要的，以及如何借助这个特性，有效解决诸如从服务器抓取资源这类潜在的阻塞操作。

                        客户端 web API
                        了解 API 是什么，以及如何使用那些在开发工作中常见的 API。

                        JavaScript 指南
                        JavaScript 指南
                        一份更详尽的 JavaScript 指南，适用于有过 JavaScript 或</Descriptions.Item>
                    <Descriptions.Item label="图片" contentStyle={{ textAlign: 'center' }}>
                        <span style={{ cursor: 'pointer', color: '#4096ff' }} onClick={() => setIsModalOpen(true)}>点击预览</span>
                    </Descriptions.Item>
                    <Descriptions.Item label="附件" contentStyle={{ textAlign: 'center' }}><a href="https://qn.liuyinjihua.com/%E5%AE%9E%E6%96%BD%E5%91%A8%E6%8A%A5.xlsx?e=1669810096&token=bs0nrwJpD1z6JJLOEOpgc9BxuHemz3IEyVIrF3dQ:NftNE9YGY2I07Vkq5iwSO6DOT3c=">点击下载</a></Descriptions.Item>
                    <Descriptions.Item label="仓库" contentStyle={{ textAlign: 'center' }}>  <a href="https://gitee.com/han-changyuan/easySE_frontEnd/tree/zyqproduct/src/src" target={'_blank'}>点击跳转</a> </Descriptions.Item>
                    <Descriptions.Item label="提问" >需求文档写不来啊！</Descriptions.Item>
                    <Descriptions.Item label="评论&回复"><TextArea rows={4} placeholder="maxLength is 6" maxLength={6} /></Descriptions.Item>
                </Descriptions>
                <div className={style.footer}>
                    <div>
                        <Button danger type="primary">取消</Button>
                        <Button type="primary">确定</Button>
                    </div>
                </div>
            </div>
            <Modal
                closable={false}
                footer={null}
                width="100vw"
                style={{
                    maxWidth: '100vw',
                    top: 0,
                    paddingBottom: 0,
                }}
                bodyStyle={{ height: '100vh' }}
                open={isModalOpen}
                onCancel={() => { setIsModalOpen(false) }}
            >
                <FileViewer file={'https://qn.liuyinjihua.com/%E7%BD%91%E7%BB%9C%E5%8D%8A%E6%9C%9F%E5%AE%9E%E9%AA%8C%E8%AE%BE%E8%AE%A1%E6%96%B9%E6%A1%88.docx?e=1669207211&token=bs0nrwJpD1z6JJLOEOpgc9BxuHemz3IEyVIrF3dQ:0dt2wfPsN7mjBmIWRP8X89qrE1w='}></FileViewer>

            </Modal>
        </div >
    )
}
