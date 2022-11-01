/*
 * @Author: hcy
 * @Date: 2022-10-06 18:46:12
 * @LastEditors: hcy
 * @LastEditTime: 2022-11-01 16:00:42
 * @FilePath: \src\src\pages\Task\index.tsx
 * @Description: 实践任务
 * 
 */
import { useBigFileUpload } from '@/utils/useBigFileUpload'
import { useUsualFileUpload } from '@/utils/useUsualFileUpload'
import style from './index.less'
export default function Task() {
  async function inputFileChange(e: any) {
    console.log(e.target.files[0])
    console.log(await useUsualFileUpload(e.target.files[0], '/umi/fileUpload'))
  }
  return (
    <div className={style.container}>
      <input onChange={(e) => { inputFileChange(e) }} type="file" accept=".png,.ppt,.jpg,.jpeg,.zip,.video/*" multiple />
    </div>
  )
}