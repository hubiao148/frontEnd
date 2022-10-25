/*
 * @Author: hcy
 * @Date: 2022-10-24 17:14:30
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-25 15:14:41
 * @FilePath: \src\src\pages\myShare\components\QuestionDetails\components\Comments\index.tsx
 * @Description: 
 * 
 */
import { DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined } from '@ant-design/icons';
import { Avatar, Comment, Tooltip, Divider } from 'antd';
import React, { createElement, useState } from 'react';
interface propsMsg {
    msg: {
        auth: string,
        time: string,
        all: number,
        comment: string[],
        replyNum: number

    },
    id: number

}
export default function (props: propsMsg) {
    const e = props.msg;
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [action, setAction] = useState<string | null>(null);

    const like = () => {
        setLikes(1);
        setDislikes(0);
        setAction('liked');
    };

    const dislike = () => {
        setLikes(0);
        setDislikes(1);
        setAction('disliked');
    };

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
            <Divider style={{ margin: '0' }}></Divider>
            <Comment
                actions={actions}
                author={<a>{e.auth}</a>}
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
                content={
                    <p>
                        {e.comment[props.id]}
                    </p>
                }
                datetime={
                    <Tooltip title="2016-11-22 11:22:33">
                        <span> {e.time} </span>
                    </ Tooltip>
                }
            />
        </>
    );
};
