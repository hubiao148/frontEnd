/*
 * @Author: hcy
 * @Date: 2022-10-18 16:54:33
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-19 21:33:56
 * @FilePath: \src\src\pages\myShare\components\Mouth\index.tsx
 * @Description: 
 * 
 */
import Common from '@/pages/User/components/Common'
import React from 'react'

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
    },
    {
      anser: 60,
      read: 15,
      title: '{}内必须包含[]的js正则怎么写？',
      tag: ['php', 'js', 'docker', '运维', '容器'],
      id: 1,
      auth: '汝河不上云霄',
      headIcon: '',

    },
    {
      anser: 60,
      read: 15,
      title: '{}内必须包含[]的js正则怎么写？',
      tag: ['php', 'js', 'docker', '运维', '容器'],
      id: 1,
      auth: '汝河不上云霄',
      headIcon: '',

    },
    {
      anser: 60,
      read: 15,
      title: '{}内必须包含[]的js正则怎么写？',
      tag: ['php', 'js', 'docker', '运维', '容器'],
      id: 1,
      auth: '汝河不上云霄',
      headIcon: '',
    }
  ]
  return (
    <>
      <Common listData={listData} num={7} loading={false}></Common>
    </>
  )
}