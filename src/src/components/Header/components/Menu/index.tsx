/*
 * @Author: hcy
 * @Date: 2022-10-05 16:29:38
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-05 19:06:31
 * @FilePath: \src\src\components\Header\components\Menu\index.tsx
 * @Description: 
 * 
 */
import React from 'react'
import { useHistory } from 'umi';
import {currentPage} from '@/jotai'
import { useAtom } from 'jotai';
import storage from '@/utils/storage'
import style from './index.less' 
export default function () {
    const history = useHistory();
    const [page, setPage] = useAtom(currentPage);
    const listMenu = [
        { path: '/home', title: '首页' },
        { path: '/home', title: '技术问答' },
        { path: '/home', title: '实践案例' },
        { path: '/home', title: '实践任务' },
        { path: '/home', title: '个人空间' }
    ];
    return (
        <div className={style.menu}>
            {listMenu.map((e,index) => {
                return <div key={index} className={index == page ? style.isActive : null} onClick={() => {
                    setPage(index)
                    storage.setItem('currentPage',index)
                }}>{e.title}</div>
            })}
        </div>
    )
    
}
