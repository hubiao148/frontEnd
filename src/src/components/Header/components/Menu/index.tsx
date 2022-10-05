/*
 * @Author: hcy
 * @Date: 2022-10-05 16:29:38
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-05 17:05:59
 * @FilePath: \src\src\components\Header\components\Menu\index.tsx
 * @Description: 
 * 
 */
import React from 'react'
import { useHistory } from 'umi';
import style from './index.less' 
export default function () {
    const history = useHistory();
    const listMenu = [
        { path: '/home', title: '首页' },
        { path: '/home', title: '技术问答' },
        { path: '/home', title: '技术问答' },
        { path: '/home', title: '技术问答' },
        { path: '/home', title: '技术问答' }
    ];
    return (
        <div className={style.menu}>
            {listMenu.map((e,index) => {
                return <div key={index} onClick={() => {
                    console.log(e.path)
                }}>{e.title}</div>
            })}
        </div>
    )
    
}
