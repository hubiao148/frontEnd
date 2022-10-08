/*
 * @Author: hcy
 * @Date: 2022-10-05 16:29:38
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-06 19:27:23
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
        { path: '/myshare', title: '技术问答' },
        { path: '/case', title: '实践案例' },
        { path: '/task', title: '实践任务' },
        { path: '/user', title: '个人空间' }
    ];
    return (
        <div className={style.menu}>
            {listMenu.map((e,index) => {
                return <div key={index} className={index == page ? style.isActive : null} onClick={() => {
                    setPage(index)
                    storage.setItem('currentPage',index)
                    history.push(e.path)
                }}>{e.title}</div>
            })}
        </div>
    )
    
}
