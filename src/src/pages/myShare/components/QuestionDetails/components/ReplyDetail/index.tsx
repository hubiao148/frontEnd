/*
 * @Author: hcy
 * @Date: 2022-10-24 14:34:59
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-25 15:10:08
 * @FilePath: \src\src\pages\myShare\components\QuestionDetails\components\ReplyDetail\index.tsx
 * @Description: 
 * 
 */
import React from 'react'
import { Avatar, Tag, Button } from 'antd'
import ReactMarkdown from "react-markdown"
import style from './index.less'
import 'github-markdown-css'
import gfm from 'remark-gfm'
interface propsMsg {
    msg: {
        auth: string,
        time: string,
        all: number,
        comment: string[],
        replyNum: number
    }
}
export default function index(props: propsMsg) {
    const e = props.msg;
    let markdown = '# 这是标题\n' +
        '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
        '| Head | Head | Head |\n' +
        '| --- | --- | --- |\n' +
        '| Data | Data | Data |\n' +
        '| Data | Data | Data |\n' +
        '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
        '**这是加粗的文字**\n\n' +
        '*这是倾斜的文字*`\n\n' +
        '***这是斜体加粗的文字***\n\n' +
        '~~这是加删除线的文字~~ \n\n' +
        '\`console.log(Hello World)\` \n\n' +
        '```const a=2; ```\n' +
        'herf=![www.baidu.com]'
    return (
        <div className={style.container}>
            <div className={style.item1}>
                <h2>titlesssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</h2>

            </div>
            <div className={style.item2}>
                <Avatar
                    src="https://joeschmoe.io/api/v1/random"
                    size={{ xs: 12, sm: 12, md: 20, lg: 40, xl: 40, xxl: 40 }}
                />
                <div style={{ color: '#1890ff', marginLeft: '3px' }}>{e.auth}</div>
                &nbsp;发布于{e.time}
            </div>
            <div >
                <ReactMarkdown
                    remarkPlugins={[gfm]}
                    className='markdown-body'
                >
                    {markdown}
                </ReactMarkdown>
            </div>
            <div style={{ marginTop: '60px' }}>
                <Tag color='blue'>vue.js</Tag>
                <Tag color='blue'>vue.js</Tag>
                <Tag color='blue'>vue.js</Tag>
                <Tag color='blue'>vue.js</Tag>
                <Tag color='blue'>vue.js</Tag>
                <Tag color='blue'>vue.js</Tag>
                <Tag color='blue'>vue.js</Tag>
                <Tag color='blue'>vue.js</Tag>
                <Tag color='blue'>vue.js</Tag>
                <Tag color='blue'>vue.js</Tag>
                <Tag color='blue'>vue.js</Tag>
                <Tag color='blue'>vue.js</Tag>
                <Tag color='blue'>vue.js</Tag>
                <Tag color='blue'>vue.js</Tag>
                <Tag color='blue'>vue.js</Tag>
                <Tag color='blue'>vue.js</Tag>
            </div>
            <div >
                <Button type="primary">关注 {e.all}</Button>
                <Button style={{ marginLeft: '10px' }}>收藏</Button>
            </div>
            <div style={{ color: '#727B82', fontSize: '10px', marginBottom: '20px' }}>回复 阅读{e.all}</div>
        </div >
    )
}
