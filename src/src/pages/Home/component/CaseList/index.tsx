/*
 * @Author: hcy
 * @Date: 2022-10-06 20:08:37
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-06 20:55:54
 * @FilePath: \src\src\pages\Home\component\CaseList\index.tsx
 * @Description: 主页case案例组件
 * 
 */
import React from 'react'
import style from './index.less'
export default function (props: { caseList: { title: string, imgSrc: string }[] }) {
    const {caseList} = props;
    return (
        <div className={style.list}>
            {
                caseList.map((e,index) => {
                    return <div key={index} style={{backgroundImage:`url(${e.imgSrc})`}}><div>{ e.title}</div></div>
                })
            }
        </div>
    )
}
