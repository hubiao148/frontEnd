/*
 * @Author: hcy
 * @Date: 2022-10-13 19:32:27
 * @LastEditors: hcy
 * @LastEditTime: 2022-12-06 15:52:49
 * @FilePath: \src\src\pages\User\components\MyShares\index.tsx
 * @Description: 
 * 
 */
import React from 'react'
import Common from '../Common'
export default () => {
  const listData = [
    {
      anser: 60,
      read: 15,
      title: '{}内必须包含[]的js正则怎么写？',
      tag: ['php', 'js', 'docker', '运维', '容器'],
      headIcon: '',
      auth: '汝河不上云霄',
      id: 1,
    },
    {
      anser: 60,
      read: 15,
      title: '{}内必须包含[]的js正则怎么写？',
      tag: ['php', 'js', 'docker', '运维', '容器'],
      headIcon: '',
      id: 1,
      auth: '汝河不上云霄'
    },
    {
      anser: 60,
      read: 15,
      title: '{}内必须包含[]的js正则怎么写？',
      tag: ['php', 'js', 'docker', '运维', '容器'],
      headIcon: '',
      id: 1,
      auth: '汝河不上云霄'
    },
    {
      anser: 60,
      read: 15,
      title: '{}内必须包含[]的js正则怎么写？',
      tag: ['php', 'js', 'docker', '运维', '容器'],
      headIcon: '',
      id: 1,
      auth: '汝河不上云霄',
    }
  ]
  return (
    <>
      <Common listData={listData} loading={false} num={4}></Common>
    </>
  )
}