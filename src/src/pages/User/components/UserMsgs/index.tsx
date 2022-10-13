/*
 * @Author: hcy
 * @Date: 2022-10-13 19:30:41
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-13 22:52:15
 * @FilePath: \src\src\pages\User\components\UserMsgs\index.tsx
 * @Description: 
 * 
 */
import React from 'react'
import style from './index.less'
import {Avatar} from 'antd'
export default () => {
  return (
    <div className={style.usermsgs}>
      
      <div className={style.topcontainer}>
        <Avatar
        src="https://joeschmoe.io/api/v1/random"
        size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
      />
        <div className={style.mark}>{'学生'}</div>
      </div>
      <div>姓名</div>
      <div>邮箱</div>
      <div>密码</div>
    </div>
  )
}

