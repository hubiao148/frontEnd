/*
 * @Author: hcy
 * @Date: 2022-10-21 17:23:47
 * @LastEditors: hcy
 * @LastEditTime: 2022-12-30 12:07:56
 * @FilePath: \src\src\pages\myShare\components\QuestionDetails\index.tsx
 * @Description: 技术问答详情页面
 * 
 */
import React, { useEffect, useRef, useState } from 'react';
import { CheckCircleTwoTone } from '@ant-design/icons'
import { useHistory, useLocation, useParams } from 'umi';
import style from './index.less';
import { Breadcrumb, Divider, Button, Input } from 'antd';
import Comments from './components/Comments';
import { LikeOutlined, DislikeOutlined, BranchesOutlined, BookOutlined } from '@ant-design/icons';
import ReplyDetail from './components/ReplyDetail';
import storage from '@/utils/storage';
const { TextArea } = Input;
import { addVistNum } from '@/api/myShare/addVistNum';
import { articleDetail } from '@/api/myShare/articleDetail';
import { addComment } from '@/api/myShare/addComment'
import { number } from 'echarts/core';
interface defaultMsg {
    auth: string,
    time: string,
    headerUrl: string,
    content: string,
    tags: [],
    title: string,
    likeCount: number | null,
    likeStatus: number | null,
    replyNum: number | null,
    articleId: number ,
    userId: number 
}

export default function index(props: any) {
    const defaultComments: {
        content: string;
        time: string;
        commentAuth: string;
        headerUrl: string;
        id: number;
    }[] = [];
    // 默认数据
    const defaultMsg: defaultMsg = {
        auth: '',
        time: '',
        headerUrl: '',
        content: '',
        tags: [],
        title: '',
        likeCount: null,
        likeStatus: null,
        replyNum: null,
        articleId: 1,
        userId:1
    }
    const [text,setText] = useState('');
    // 使用导航
    const history = useHistory();
    const params: { id: any } = useParams();
    const [msg, setMsg] = useState(defaultMsg)
    const [comments, setComments] = useState(defaultComments)
    // {
    //     auth: 'hcy',
    //         time: '2022-11-21',
    //             all: 120,
    //                 comment: ['/^(?!.{101}).*{.*\[.*\].*}.*$/ 这样？（不知道你的规则还有什么要求）小建议：这种场景别用正则', '/^(?!.{101}).*{.*\[.*\].*}.*$/ 这样？（不知道你的规则还有什么要求）小建议：这种场景别用正则', '/^(?!.{101}).*{.*\[.*\].*}.*$/ 这样？（不知道你的规则还有什么要求）小建议：这种场景别用正则'],
    //                     replyNum: 3,
    // }
    // 默认数据
    const board = [
        {
            title: '带你从零到一全面掌握前端「新宠」', msg: "TypeScript从入门到实践「2020 版」"
        }, {
            title: '带你从零到一全面掌握前端「新宠」', msg: "TypeScript从入门到实践「2020 版」"
        }, {
            title: '带你从零到一全面掌握前端「新宠」', msg: "TypeScript从入门到实践「2020 版」"
        }, {
            title: '带你从零到一全面掌握前端「新宠」', msg: "TypeScript从入门到实践「2020 版」"
        }, {
            title: '带你从零到一全面掌握前端「新宠」', msg: "TypeScript从入门到实践「2020 版」"
        },
    ]
    const states = [
        { id: 0, s: false, disable: false },
        { id: 1, s: false, disable: false },
        { id: 2, s: false },
        { id: 3, s: false },
    ]
    // 回到首页
    function goBack() {
        history.push('/myshare');
    }
    /**
     * 判断是否分享
     * @param id 
     */
    function changeDisabled(id: number) {
        if (id == 0) {
            states[1].disable = !states[1].disable;
        } else if (id == 1) {
            states[0].disable = !states[0].disable;
        }
    }
    /**
     * 点击分享后的操作
     * @param id 
     * @param e 
     * @returns 
     */
    function handleColorClick(id: number, e: any) {
        if (!states[id].s) {
            if ((id == 0 || id == 1) && states[id].disable == true) {
                return;
            }
            e.currentTarget.style.color = '#1c63d6';
            states[id].s = !states[id].s;
            changeDisabled(id);

        } else {
            e.currentTarget.style.color = '#000000';
            states[id].s = !states[id].s;
            changeDisabled(id);
        }

    }
    /**
     * 添加评论
     */
    function AddComment() {
        console.log(text)
        addComment(msg.articleId, storage.getItem('userMsg').id, {
            content: text,
            entityType: 1,
            entityId: msg.userId
        }).then((res: any) => {
            console.log(res)
            setText("");
        }).catch((err: Error) => {
            console.log(err)
        })
        
    }
    // 钩子函数获取数据
    useEffect(() => {
        // 获取详情数据
        articleDetail(params.id).then((res) => {
            console.log(res.data)
            let data = res.data;
            let resData = {
                auth: data.user.username, // 文章所有者昵称
                title: data.techqa.title, // 文章标题
                time: data.techqa.gmtCreate, // 文章创建时间
                headerUrl: data.user.headerUrl, // 头像地址
                content: data.techqa.content, // 内容
                tags: data.topics, // 标签
                likeCount: data.likecount, // 关注数
                likeStatus: data.likestatus, // 关注没
                replyNum: data.comments.length, // 回答数
                userId: data.user.id, // 文章所有者id
                articleId:data.techqa.id, // 文章id
            }

            // console.log(resData)
            setMsg(resData)
            let resComments = data.comments.map((e: any) => {
                return {
                    content: e.comment.content, // 内容
                    time: e.comment.gmtCreate, // 回答时间
                    commentAuth: e.user.username, // 昵称
                    headerUrl: e.user.headerUrl, // 头像
                    id: e.user.id // 评论者id
                }
            });
            setComments(resComments)
        }).catch((err: Error) => {
            console.log(err)
        })
        // 访问判断
        let setter = setTimeout(() => {
            addVistNum(params.id).then((result: any) => {
                console.log(result)
            }).catch((err: Error) => {
                console.log(err)
            });
        }, 5000)
        // 时间不够不增加
        return () => {
            clearTimeout(setter);
        }
    }, [])
    return (
        <div className={style.container}>
            {/* 面包屑 */}
            <div className={style.top}>
                <Breadcrumb separator=">" style={{ cursor: 'pointer' }}>
                    <Breadcrumb.Item onClick={goBack}>技术问答</Breadcrumb.Item>
                    <Breadcrumb.Item>提问</Breadcrumb.Item>
                </Breadcrumb></div>
            <div className={style.body}>
                <div>
                    <div>
                        <div>
                            <div
                                onClick={(e) => { handleColorClick(0, e) }}
                            ><LikeOutlined />
                            </div>
                            <div
                                onClick={(e) => { handleColorClick(1, e) }}
                            ><DislikeOutlined />
                            </div>
                            <div
                                onClick={(e) => { handleColorClick(2, e) }}
                            ><BookOutlined />
                            </div>
                            <div
                                onClick={(e) => { handleColorClick(3, e) }}
                            ><BranchesOutlined />
                            </div>
                        </div>
                        <div>
                            <ReplyDetail msg={msg}></ReplyDetail>
                        </div>
                    </div>
                    <div>
                        <div></div>
                        {/* 评论 */}
                        <div>
                            <div>
                                <div>{msg == null ? 0 : msg.replyNum}个回答</div>
                                <div>
                                    <Button>最新</Button>
                                    <Button style={{ marginLeft: '5px' }}>神评</Button>
                                </div>
                            </div>
                            {comments.map((e, i) => {
                                return (
                                    <Comments comment={e} key={i} id={i}></Comments>
                                )
                            })}
                        </div>
                    </div>
                    <div>
                        <div></div>
                        <div>
                            <div>撰写回答</div>
                            <Divider style={{ margin: '0' }}></Divider>
                            {/* 判断是否登录动态渲染 */}
                            {storage.getItem('token') ?
                                (
                                    <div className={style.clickBtn}>
                                        <TextArea value={text} onChange={(e) => {
                                            setText(e.target.value)
                                        }}></TextArea>
                                        <div style={{ marginTop: '10px' }}>
                                            <Button onClick={() => {
                                                setText("");
                                            }} style={{ marginRight: '10px' }}>重置</Button>&nbsp;&nbsp;&nbsp;
                                            <Button onClick={AddComment}>发布</Button>

                                        </div>
                                    </div>
                                ) : (<div>
                                    <span>你尚未登录，登录后可以<br /></span>
                                    <span><CheckCircleTwoTone twoToneColor="#52c41a" />和开发者交流问题的细节<br /></span>
                                    <span><CheckCircleTwoTone twoToneColor="#52c41a" />关注并接收问题和回答的更新提醒<br /></span>
                                    <span><CheckCircleTwoTone twoToneColor="#52c41a" />参与内容的编辑和改进，让解决方法与时俱进<br /></span>
                                    <span><Button type='primary'
                                        onClick={() => {
                                            history.push('/beforeLogin/login');
                                        }}
                                    >登录注册</Button></span>
                                </div>)

                            }
                        </div>
                    </div>
                </div>
                <div >
                    <div> 宣传栏</div>

                    {
                        board.map((e, i) => {
                            return (
                                <span key={i} onClick={() => { console.log(i) }}>
                                    <Divider style={{ margin: '0 0 8px 0' }}></Divider>
                                    <div style={{ fontSize: '15px', color: '#1890ff' }}>{e.title}</div>
                                    <div style={{ fontSize: '10px' }}>{e.msg}</div>
                                </span>
                            )
                        })
                    }
                </div>
            </div>
        </div >
    )
}
