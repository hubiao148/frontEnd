/*
 * @Author: hcy
 * @Date: 2022-10-21 09:57:38
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-21 16:57:19
 * @FilePath: \src\src\pages\AskQuestion\components\Eidtor\index.tsx
 * @Description: 
 * 
 */
import React, { useEffect, useRef, useState } from 'react'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css';
const mdParser = new MarkdownIt(/* Markdown-it options */);
export default function index() {
    const [text, setText] = useState('');
    //数据绑定
    useEffect(() => {
        setText('- sdasd');
    }, [])
    function handleEditorChange(args: any) {
        setText(args.text);
    }
    //图片上传函数
    function handleImageUpload(file: any, callback: any) {
        const reader = new FileReader()
        reader.onload = () => {
            const convertBase64UrlToBlob = (urlData: any) => {
                let arr = urlData.split(','), mime = arr[0].match(/:(.*?);/)[1]
                let bstr = atob(arr[1])
                let n = bstr.length
                let u8arr = new Uint8Array(n)
                while (n--) {
                    u8arr[n] = bstr.charCodeAt(n)
                }
                return new Blob([u8arr], { type: mime })
            }
            const blob = convertBase64UrlToBlob(reader.result)
            setTimeout(() => {
                // setTimeout 模拟异步上传图片
                // 当异步上传获取图片地址后，执行calback回调（参数为imageUrl字符串），即可将图片地址写入markdown
                callback(reader.result)
            }, 1000)
        }
        reader.readAsDataURL(file)

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
