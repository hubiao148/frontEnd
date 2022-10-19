/*
 * @Author: hcy
 * @Date: 2022-10-05 16:29:38
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-18 16:49:58
 * @FilePath: \src\src\components\Header\components\Menu\index.tsx
 * @Description: 
 * 
 */
import { useHistory } from 'umi';
import { useAtom } from 'jotai';
import storage from '@/utils/storage'
import style from './index.less' 
import { currentPageUser, currentPageHeader,currentPageMyShare}from '@/jotai';
import { useEffect } from 'react';
export default function (props: { id: string, listMenu: { path: string, title: string }[] }) {
    const history = useHistory();
    const listMenu = props.listMenu;
    const id = props.id;//判断是哪里应用的组件
    const [page, setPage] = useAtom(id == 'Header' ? currentPageHeader : (id == 'User' ? currentPageUser : currentPageMyShare));
    useEffect(() => {
        history.push(listMenu[page].path);
    },[])//重新加载页面
    return (
        <div className={style.menu}>
            {listMenu.map((e,index) => {
                return <div key={index} className={index == page ? style.isActive : null} onClick={() => {
                    setPage(index)
                    storage.setItem('currentPage'+id,index)
                    history.push(e.path)
                }}>{e.title}</div>
            })}
        </div>
    )
    
}
