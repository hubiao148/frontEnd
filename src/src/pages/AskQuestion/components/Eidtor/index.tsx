/*
 * @Author: hcy
 * @Date: 2022-10-21 09:57:38
 * @LastEditors: hcy
 * @LastEditTime: 2022-12-30 15:52:39
 * @FilePath: \src\src\pages\AskQuestion\components\Eidtor\index.tsx
 * @Description: 
 * 
 */
import React, { useEffect, useRef, useState } from 'react'
import { useAtom } from 'jotai'
import { msg } from '@/jotai';
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css';
import { markdownFileUPload } from '@/api/myShare/markdownFileUPload';
const mdParser = new MarkdownIt(/* Markdown-it options */);
export default function index() {
    const [text, setText] = useAtom(msg);
    //数据绑定
    useEffect(() => {
        setText('# 标题');
    }, [])
    function handleEditorChange(args: any) {
        setText(args.text);
        // console.log(text)
    }
    //图片上传函数
    function handleImageUpload(file: any, callback: any) {
        // 当异步上传获取图片地址后，执行calback回调（参数为imageUrl字符串），即可将图片地址写入markdown
        let FormDatas = new FormData()
        console.log(file)
        FormDatas.append('file', file);
        markdownFileUPload(FormDatas).then((res: any) => {
            console.log(res.returnFileUrl)
            callback(res.returnFileUrl)
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <div>
            <MdEditor
                value={text}
                style={{ height: "500px" }}
                renderHTML={(text) => mdParser.render(text)}
                onChange={handleEditorChange}
                onImageUpload={handleImageUpload}
            />
        </div>
    )
}
