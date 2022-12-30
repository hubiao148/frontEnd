/*
 * @Author: hcy
 * @Date: 2022-10-24 17:14:30
 * @LastEditors: hcy
 * @LastEditTime: 2022-12-30 12:12:12
 * @FilePath: \src\src\pages\myShare\components\QuestionDetails\components\Comments\index.tsx
 * @Description: 评论
 * 
 */
import { DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined } from '@ant-design/icons';
import moment from 'moment';
import { Avatar, Comment, Tooltip, Divider, Empty } from 'antd';
import React, { createElement, useState } from 'react';
interface propsMsg {
    comment: {
        content: string;
        time: string;
        commentAuth: string;
        headerUrl: string;
        id: number;
    } | null,
    id: number

}
export default function (props: propsMsg) {
    // 获取参数
    const e = props.comment;
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [action, setAction] = useState<string | null>(null);
    // 喜欢操作
    const like = () => {
        setLikes(1);
        setDislikes(0);
        setAction('liked');
    };
    // 不喜欢操作
    const dislike = () => {
        setLikes(0);
        setDislikes(1);
        setAction('disliked');
    };
    // 封装组件
    const actions = [
        <Tooltip key="comment-basic-like" title="Like">
            <span onClick={like}>
                {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
                <span className="comment-action">{likes}</span>
            </span>
        </Tooltip>,
        <Tooltip key="comment-basic-dislike" title="Dislike">
            <span onClick={dislike}>
                {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
                <span className="comment-action">{dislikes}</span>
            </span>
        </Tooltip>,
        <span key="comment-basic-reply-to">回复</span>,
    ];

    return (
        <>
            {
                e ? (
                    <>
                        {/* 展示插件并传值 */}
                        <Divider style={{ margin: '0' }}></Divider>
                        <Comment
                            actions={actions}
                            author={<a>{e.commentAuth}</a>}
                            avatar={<Avatar src={e.headerUrl} alt="Han Solo" />}
                            content={
                                <p>
                                    {e.content}
                                </p>
                            }
                            datetime={
                                <Tooltip >
                                    <span> {e.time} </span>
                                </ Tooltip>
                            }
                        />
                    </>
                ) : <Empty />
            }
        </>
    );
};
