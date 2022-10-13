/*
 * @Author: hcy
 * @Date: 2022-10-05 16:29:38
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-13 19:21:34
 * @FilePath: \src\src\components\Header\components\Menu\index.tsx
 * @Description: 
 * 
 */
import { useHistory } from 'umi';
import { useAtom } from 'jotai';
import storage from '@/utils/storage'
import style from './index.less' 
import { currentPageUser, currentPageHeader} from '@/jotai';
export default function (props: { id: string, listMenu: { path: string, title: string }[] }) {
    const [page, setPage] = useAtom(props.id=='Header'?currentPageHeader:currentPageUser);
    const history = useHistory();
    const listMenu = props.listMenu;
    console.log('shuxin')
    const id = props.id;//判断是哪里应用的组件
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
