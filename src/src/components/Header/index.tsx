/*
 * @Author: hcy
 * @Date: 2022-10-05 11:52:12
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-05 19:31:23
 * @FilePath: \src\src\components\Header\index.tsx
 * @Description: 头部
 * 
 */
import React from 'react'
import { UserOutlined ,UnorderedListOutlined} from '@ant-design/icons';
import { Avatar, Image ,Badge,} from 'antd';
import Menu from './components/Menu'
import style from './index.less'
export default () => {
  return (
    <div className={style.header}>
      <div className={style.menu}>logo</div>
      <Menu></Menu>
      <div className={style.headerAvatar}> 
        <Badge count={1}>
        <Avatar shape="square" icon={<UserOutlined />} />
      </Badge>
        <Avatar src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 32 }} />} />
        <UnorderedListOutlined></UnorderedListOutlined>
      </div>
    </div>
  )
}