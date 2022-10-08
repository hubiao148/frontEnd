/*
 * @Author: hcy
 * @Date: 2022-10-05 12:01:18
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-06 21:12:50
 * @FilePath: \src\src\pages\Home\index.tsx
 * @Description: 主页
 * 
 */
import React from 'react'
import { useHistory } from 'umi'
import { Divider } from 'antd'
import { FireOutlined ,ArrowRightOutlined } from '@ant-design/icons';
import CaseList from './component/CaseList';
import style from './index.less'
export default function BeforeLogin() {
  const caseList = [
    { title: '策略模式', imgSrc: require('@/assets/caseImg.png' )},
    { title: '策略模式', imgSrc: require('@/assets/caseImg.png' )},
    { title: '策略模式', imgSrc: require('@/assets/caseImg.png') },
    { title: '策略模式', imgSrc: require('@/assets/caseImg1.png') },
    { title: '策略模式', imgSrc: require('@/assets/caseImg1.png') },
    { title: '策略模式', imgSrc: require('@/assets/caseImg1.png' )},]
  return (
    <div>
      <div>知识图谱</div>
      <Divider orientation="left" plain>
       <FireOutlined style={{color: 'red' }} /> 热点案例
      </Divider>
      <CaseList caseList={ caseList} />
      <div className={style.bottomLeft}>
        <div>
          探索更多设计模式<ArrowRightOutlined />
        </div>
      </div>
    </div>
  )
}
