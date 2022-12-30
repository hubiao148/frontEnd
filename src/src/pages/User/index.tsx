/*
 * @Author: hcy
 * @Date: 2022-10-06 18:46:41
 * @LastEditors: hcy
 * @LastEditTime: 2022-12-30 12:31:15
 * @FilePath: \src\src\pages\User\index.tsx
 * @Description: 个人空间
 * 
 */
import style from './index.less'
import Menu from '@/components/Header/components/Menu'
import { addDesignMode } from '@/api/case';
import { useState } from 'react';
export default function User(props: any) {
  const [file, setFile] = useState<File>();
  // 动态渲染路由
  const listMenu = [
        { path: '/user/usermsgs', title: '账号信息' },
          { path: '/user/mycases', title: '我收藏的案例' },
          { path: '/user/myquestions', title: '我收藏的回答' },
          { path: '/user/myasks', title: '我回答的问题' },
          { path: '/user/myshares', title: '我发布的问题' },
  ];
  function upload() {
    let data = new FormData();
    if (file != undefined) data.append("file", file);
    console.log(data)
    addDesignMode({
      files: data,
      sceneDesign: {
        title: 'sds',
        groupId: 1,//form.getFieldValue().group
        sceneId: 1,
        date: new Date()
      }
    })
  }
  function inputChange(e:any) {
    console.log(e.target.files[0]);
    setFile(e.target.files[0])
  }
  return (
    <div>
      <div className={style.head}>
        <h1>个人中心</h1>
        <h3>管理你的账户</h3>
      </div>
      <div className={style.nav}>
        <Menu id={'User'} listMenu={listMenu}></Menu>
      </div>
      <div className={style.body}>
        <div className={style.container}>
           { props.children} {/*展示子路由 */}
        </div>
      </div>
    </div>
  )
}
