/*
 * @Author: hcy
 * @Date: 2022-10-13 19:33:16
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-15 19:22:10
 * @FilePath: \src\src\pages\User\components\MyQuestions\index.tsx
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
      auth: '汝河不上云霄'
    },
    {
      anser: 60,
      read: 15,
      title: '{}内必须包含[]的js正则怎么写？',
      tag: ['php', 'js', 'docker', '运维', '容器'],
      auth: '汝河不上云霄'
    },
    {
      anser: 60,
      read: 15,
      title: '{}内必须包含[]的js正则怎么写？',
      tag: ['php', 'js', 'docker', '运维', '容器'],
      auth: '汝河不上云霄'
    },
    {
      anser: 60,
      read: 15,
      title: '{}内必须包含[]的js正则怎么写？',
      tag: ['php', 'js', 'docker', '运维', '容器'],
      auth: '汝河不上云霄'
    }
  ]
  return (
    <>
      <Common listData={listData}></Common>
    </>
  )
}