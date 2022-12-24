/*
 * @Author: hcy
 * @Date: 2022-10-13 19:33:28
 * @LastEditors: hcy
 * @LastEditTime: 2022-12-24 21:28:17
 * @FilePath: \src\src\pages\User\components\MyAsks\index.tsx
 * @Description: 
 * 
 */
import { queryMyTechqa, queryMytechqaReply } from '@/api/user';
import { divider2 } from '@/jotai';
import { useAtom } from 'jotai';
import React, { useEffect, useState } from 'react'
import Common from '../Common'
const defaultListData = [
  {
    anser: 60,
    read: 15,
    title: '{}内必须包含[]的js正则怎么写？',
    tag: ['php', 'js', 'docker', '运维', '容器'],
    headIcon: '',
    auth: '汝河不上云霄',
    id: 1,
    userId: 1,
  },
]
export default () => {

  const [loadingState, setLoadingState] = useState(true);
  const [page,] = useAtom(divider2);
  const [total, setTotal] = useState(10)
  const [listData, setListData] = useState(defaultListData);
  // 获取首页列表数据
  useEffect(() => {
    setLoadingState(true)
    // storage.getItem('userMsg').id
    queryMytechqaReply(1).then((result: any) => {
      console.log(result)
      let data = result.data.datas.filter((e: any, i: number) => i < 4 * page && i >= 4 * (page - 1)).map((e: any, i: number) => {
        console.log(e)
        return {
          anser: e.techqa.commentAmount || 0, // 评论
          read: e.visitcount || 0, // 阅读
          title: e.techqa.title || 0, // 题目
          tag: e.topics.map((el: any) => el.description) || '无', // 文章标签
          auth: e.user.username ? e.user.username : null, // 文章所有者昵称
          headIcon: e.user.headerUrl || '', // 头像地址
          id: e.techqa.id,// 文章id
          userId: e.user.id // 文章所有者id
        }
      })
      setTotal(result.data.datas.length)
      setListData(data);
      setLoadingState(false)
    }).catch((err: Error) => {
      console.log(err)
    })
  }, [page])
  return (
    <>
      <Common listData={listData} loading={loadingState} num={4} id={2} total={total}></Common>
    </>
  )
}