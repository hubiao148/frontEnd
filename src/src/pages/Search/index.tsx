/*
 * @Author: zyqqun
 * @Date: 2022-11-30 18:24:31
 * @LastEditors: zyqqun 2450100414@qq.com
 * @LastEditTime: 2022-11-30 19:52:20
 * @FilePath: \src\src\pages\Search\index.tsx
 * @Description:搜索引擎搜索的界面
 *
 * Copyright (c) 2022 by zyqqun 2450100414@qq.com, All Rights Reserved.
 */
import React from 'react';
import styled from './index.less';
import Article from './article';

function Search() {
  return (
    <div className={styled['DetailWrapper']}>
      <Article />
    </div>
  );
}

export default Search;
