/*
 * @Author: hcy
 * @Date: 2022-10-18 16:54:33
 * @LastEditors: hcy
 * @LastEditTime: 2022-12-30 12:13:30
 * @FilePath: \src\src\pages\myShare\components\Reply\index.tsx
 * @Description: 最热
 * 
 */
import { latestData } from '@/api/myShare/latest';
import Common from '@/pages/User/components/Common'
import { useAtom } from 'jotai';
import { divider1 } from '@/jotai';
import React, { useEffect, useState } from 'react'

export default () => {
  // 设置加载状态
  const [loadingState, setLoadingState] = useState(true);
  // 默认数据
  const defaultListData = [
    {
      anser: 60,
      read: 15,
      title: '{}内必须包含[]的js正则怎么写？',
      tag: ['php', 'js', 'docker', '运维', '容器'],
      headIcon: '',
      id: 1,
      userId: 0,
      auth: '汝河不上云霄'
    },
    {
      anser: 60,
      read: 15,
      title: '{}内必须包含[]的js正则怎么写？',
      tag: ['php', 'js', 'docker', '运维', '容器'],
      headIcon: '',
      id: 1,
      userId: 0,
      auth: '汝河不上云霄'
    },
    {
      anser: 60,
      read: 15,
      title: '{}内必须包含[]的js正则怎么写？',
      tag: ['php', 'js', 'docker', '运维', '容器'],
      headIcon: '',
      id: 1,
      userId: 0,
      auth: '汝河不上云霄',
    },
    {
      anser: 60,
      read: 15,
      title: '{}内必须包含[]的js正则怎么写？',
      tag: ['php', 'js', 'docker', '运维', '容器'],
      id: 1,
      auth: '汝河不上云霄',
      userId: 0,
      headIcon: '',

    },
    {
      anser: 60,
      read: 15,
      title: '{}内必须包含[]的js正则怎么写？',
      tag: ['php', 'js', 'docker', '运维', '容器'],
      id: 1,
      auth: '汝河不上云霄',
      userId: 0,
      headIcon: '',

    },
    {
      anser: 60,
      read: 15,
      title: '{}内必须包含[]的js正则怎么写？',
      tag: ['php', 'js', 'docker', '运维', '容器'],
      id: 1,
      auth: '汝河不上云霄',
      userId: 0,
      headIcon: '',
    },
    {
      anser: 60,
      read: 15,
      title: '8{}内必须包含[]的js正则怎么写？',
      tag: ['php', 'js', 'docker', '运维', '容器'],
      id: 1,
      auth: '汝河不上云霄',
      userId: 0,
      headIcon: '',
    }
  ]
  const [listData, setListData] = useState(defaultListData);
  const [page] = useAtom(divider1);
  const [total, setTotal] = useState(10)

  // 获取首页列表数据
  useEffect(() => {
    setLoadingState(true)
    latestData(1).then((result: any) => {
      let data = result.data.techqas.filter((e: any, i: number) => i < 7 * page && i >= 7 * (page - 1)).map((e: any, i: number) => {
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
      // 更新参数
      setTotal(result.data.techqas.length)
      setListData(data);
      setLoadingState(false)
    }).catch((err: Error) => {
      console.log(err)
    })
  }, [page])
  return (
    <>
      {/* 展示 */}
      <Common listData={listData} num={7} loading={loadingState} id={1} total={total}></Common>
    </>
  )
}
