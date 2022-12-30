/*
 * @Author: hcy
 * @Date: 2022-10-06 20:08:37
 * @LastEditors: hcy
 * @LastEditTime: 2022-12-30 11:45:57
 * @FilePath: \src\src\pages\Home\component\CaseList\index.tsx
 * @Description: 主页case案例组件
 *
 */
import { currentPageHeader } from '@/jotai';
import storage from '@/utils/storage';
import { useAtom } from 'jotai';
import React from 'react';
import { useHistory } from 'umi';
import style from './index.less';
export default function (props: {
  caseList: { title: string; imgSrc: string }[];
}) {
  const history = useHistory();
  // 控制导航栏数据
  const [page, setPage] = useAtom(currentPageHeader);
  // 获取传入的参数
  const { caseList } = props;
  return (
    <div className={style.hotCaseList}>
      {caseList.map((e, index) => { // 遍历传进来的list 展示数据
        return (
          <div
            key={index}
            className={style.listItem}
            style={{ backgroundImage: `url(${e.imgSrc})` }}
            onClick={() => {
              setPage(2);
              storage.setItem('currentPageHeader', 2);
              history.push('/case');
            }}
          >
            <div>{e.title}</div>
          </div>
        );
      })}
    </div>
  );
}
