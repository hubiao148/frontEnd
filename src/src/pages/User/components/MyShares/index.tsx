/*
 * @Author: hcy
 * @Date: 2022-10-13 19:32:27
 * @LastEditors: hcy
 * @LastEditTime: 2022-12-30 12:29:29
 * @FilePath: \src\src\pages\User\components\MyShares\index.tsx
 * @Description: 我发布的问题
 * 
 */
import {  queryMyTechqa } from '@/api/user';
import {  divider3 } from '@/jotai';
import storage from '@/utils/storage';
import { useAtom } from 'jotai';
import React, { useEffect, useState } from 'react'
import Common from '../Common'
// 默认数据
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
  }, {
    anser: 60,
    read: 15,
    title: '{}内必须包含[]的js正则怎么写？',
    tag: ['php', 'js', 'docker', '运维', '容器'],
    headIcon: '',
    auth: '汝河不上云霄',
    id: 1,
    userId: 1,
  }, {
    anser: 60,
    read: 15,
    title: '{}内必须包含[]的js正则怎么写？',
    tag: ['php', 'js', 'docker', '运维', '容器'],
    headIcon: '',
    auth: '汝河不上云霄',
    id: 1,
    userId: 1,
  }, {
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
  // 加载状态
  const [loadingState, setLoadingState] = useState(true);
  const [page,] = useAtom(divider3);
  const [total, setTotal] = useState(10)
  const [listData, setListData] = useState(defaultListData);
  // 获取首页列表数据
  useEffect(() => {
    setLoadingState(true)
    // storage.getItem('userMsg').id
    queryMyTechqa(1).then((result: any) => {
      let data = result.data.techqas.filter((e: any, i: number) => i < 4 * page && i >= 4 * (page - 1)).map((e: any, i: number) => {
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
      setTotal(result.data.techqas.length)
      setListData(data);
      setLoadingState(false)
    }).catch((err: Error) => {
      console.log(err)
    })
  }, [page])
  return (
    <>
      {/* 展示数据 */}
      <Common listData={listData} loading={loadingState} num={4} id={3} total={total}></Common>
    </>
  )
}