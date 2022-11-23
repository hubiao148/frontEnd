/*
 * @Author: zyqqun
 * @Date: 2022-11-23 19:16:31
 * @LastEditors: zyqqun 2450100414@qq.com
 * @LastEditTime: 2022-11-23 19:42:35
 * @FilePath: \src\src\pages\Message\noMessage.tsx
 * @Description:
 *
 * Copyright (c) 2022 by zyqqun 2450100414@qq.com, All Rights Reserved.
 */
import React from 'react';
import style from './index.less';
function NoMessage() {
  return (
    <div className={style.MessageWra}>
      <div className={style.content}>
        <div className={style.img}></div>
        <div>暂无消息</div>
      </div>
    </div>
  );
}

export default NoMessage;
