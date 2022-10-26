/*
 * @Author: hcy
 * @Date: 2022-10-21 17:23:47
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-25 17:47:01
 * @FilePath: \src\src\pages\myShare\components\QuestionDetails\index.tsx
 * @Description: 
 * 
 */
import React, { useRef } from 'react';
import { CheckCircleTwoTone } from '@ant-design/icons'
import { useHistory } from 'umi';
import style from './index.less';
import { Breadcrumb, Divider, Button, Input } from 'antd';
import Comments from './components/Comments';
import { LikeOutlined, DislikeOutlined, BranchesOutlined, BookOutlined } from '@ant-design/icons';
import ReplyDetail from './components/ReplyDetail';
import storage from '@/utils/storage';
const { TextArea } = Input;
export default function index() {
    console.log(storage.getItem('token'));
    const msg = {
        auth: 'hcy',
        time: '2022-11-21',
        all: 120,
        comment: ['/^(?!.{101}).*{.*\[.*\].*}.*$/ 这样？（不知道你的规则还有什么要求）小建议：这种场景别用正则', '/^(?!.{101}).*{.*\[.*\].*}.*$/ 这样？（不知道你的规则还有什么要求）小建议：这种场景别用正则', '/^(?!.{101}).*{.*\[.*\].*}.*$/ 这样？（不知道你的规则还有什么要求）小建议：这种场景别用正则'],
        replyNum: 10,
    }
    const states = [
        { id: 0, s: false, disable: false },
        { id: 1, s: false, disable: false },
        { id: 2, s: false },
        { id: 3, s: false },
    ]
    const history = useHistory();
    function goBack() {
        history.push('/myshare');
    }
    function changeDisabled(id: number) {
        if (id == 0) {
            states[1].disable = !states[1].disable;
        } else if (id == 1) {
            states[0].disable = !states[0].disable;
        }
    }
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
    return (
        <div className={style.container}>
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
                        <div>
                            <div
                                onClick={(e) => { handleColorClick(0, e) }}
                            ><LikeOutlined />
                            </div>
                            <div
                                onClick={(e) => { handleColorClick(1, e) }}
                            ><DislikeOutlined />
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>{msg.replyNum}个回答</div>
                                <div>
                                    <Button>最新</Button>
                                    <Button style={{ marginLeft: '5px' }}>神评</Button>
                                </div>
                            </div>
                            {msg.comment.map((e, i) => {
                                return (
                                    <Comments msg={msg} key={i} id={i}></Comments>
                                )
                            })}
                        </div>
                    </div>
                    <div>
                        <div></div>
                        <div>
                            <div>撰写回答</div>
                            <Divider style={{ margin: '0' }}></Divider>
                            {storage.getItem('token') ?
                                (
                                    <div className={style.clickBtn}>
                                        <TextArea></TextArea>
                                        <div style={{ marginTop: '10px' }}>
                                            <Button style={{ marginRight: '10px' }}>重置</Button>
                                            <Button >发布</Button>

                                        </div>
                                    </div>
                                ) : (<div>
                                    <span>你尚未登录，登录后可以<br /></span>
                                    <span><CheckCircleTwoTone twoToneColor="#52c41a" />和开发者交流问题的细节<br /></span>
                                    <span><CheckCircleTwoTone twoToneColor="#52c41a" />关注并接收问题和回答的更新提醒<br /></span>
                                    <span><CheckCircleTwoTone twoToneColor="#52c41a" />参与内容的编辑和改进，让解决方法与时俱进<br /></span>
                                    <span><Button type='primary'>登录注册</Button></span>
                                </div>)

                            }
                        </div>
                    </div>
                </div>
                <div>2</div>
            </div>
        </div >
    )
}
