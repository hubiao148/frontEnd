/*
 * @Author: hcy
 * @Date: 2022-10-13 19:30:41
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-14 21:13:05
 * @FilePath: \src\src\pages\User\components\UserMsgs\index.tsx
 * @Description: 
 * 
 */
import React from 'react'
import style from './index.less'
import {Avatar,Button} from 'antd'
export default () => {
  const listMenu = {
    name: 'hcy',
    email: '1458283943@qq.com',
  }
  return (
    <div className={style.usermsgs}>
      <div className={style.topcontainer}>
        <Avatar
        src="https://joeschmoe.io/api/v1/random"
        size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
      />
        <div className={style.mark}>{'学生'}</div>
      </div>
      <div className={style.msg}>
        <div>姓名:{ listMenu.name}<span className={style.btn}>修改</span></div>
        <div>邮箱:{ listMenu.email}<span className={style.btn}>修改</span></div>
        <div>密码: <span className={style.btn}>修改</span> </div>
      </div>
    </div>
  )
}

