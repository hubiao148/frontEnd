/*
 * @Author: hcy
 * @Date: 2022-10-06 18:46:12
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-31 22:06:17
 * @FilePath: \src\src\pages\Task\index.tsx
 * @Description: 实践任务
 * 
 */
import React, { useRef } from 'react'
import style from './index.less'
export default function Task() {
  function inputFileChange(e:any) {
      console.log(e.target.files[0])
  }
  return (
    <div className={style.container}>
      <input onChange={ (e)=>{inputFileChange(e)}} type="file" accept=".png,.ppt,.jpg,.jpeg,.zip,.video/*" multiple />
    </div>
  )
}