/*
 * @Author: hcy
 * @Date: 2022-10-06 18:46:41
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-13 19:40:35
 * @FilePath: \src\src\pages\User\index.tsx
 * @Description: 个人空间
 * 
 */
import style from './index.less'
import Menu from '@/components/Header/components/Menu'
export default function User(props:any) {
  const listMenu = [
        { path: '/user/usermsgs', title: '账号信息' },
          { path: '/user/mycases', title: '我收藏的案例' },
          { path: '/user/myquestions', title: '我收藏的回答' },
          { path: '/user/myasks', title: '我回答的问题' },
          { path: '/user/myshares', title: '我发布的问题' },
    ];
  return (
    <div>
      <div className={style.head}>
        <h1>个人中心</h1>
        <h3>管理你的账户</h3>
      </div>
      <div className={style.nav}>
        <Menu id={'User'} listMenu={listMenu}></Menu>
      </div>
      <div className={style.body}>{ props.children}</div>
    </div>
  )
}
