/*
 * @Author: hcy
 * @Date: 2022-10-05 12:01:18
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-05 13:20:26
 * @FilePath: \src\src\pages\Home\index.tsx
 * @Description: 主页
 * 
 */
import React from 'react'
import { useHistory } from 'umi'
export default function BeforeLogin(){
  const history = useHistory()
  function goBeforeLogin(){
    history.push('/beforeLogin')
  }
  return (
    <div>
      <h1>homePages</h1>
      <button onClick={goBeforeLogin}>去登陆注册</button>
    </div>
  )
}
