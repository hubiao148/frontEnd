/*
 * @Author: hcy
 * @Date: 2022-10-13 19:33:22
 * @LastEditors: hcy
 * @LastEditTime: 2022-12-24 21:59:20
 * @FilePath: \src\src\pages\User\components\MyCases\index.tsx
 * @Description: 
 * 
 */
import React, { useEffect, useState } from 'react'
import style from './index.less'
import {
  EyeOutlined
} from '@ant-design/icons';
import { Pagination, Avatar, Skeleton } from 'antd';
import { queryCollectionById } from '@/api/user';
import storage from '@/utils/storage';
export default () => {
  const list = [{
    title: 'java高级技术开发',
    auth: '小李子',
    imgUrl: require('@/assets/user_case.jpg'),
    headerUrl:''
  }
  ]
  const [listMenu, setListMenu] = useState(list);
  const [loadingState, setLoadingState] = useState(true);
  useEffect(() => {
    setLoadingState(true)
    queryCollectionById(1, storage.getItem('userMsg').id).then((res) => {
      console.log(res.data.datas)
      let resData =  res.data.datas.map((i:any) => {
        console.log(i.designModeCase.title)
        return {
          title: i.designModeCase.title,
          auth: i.user.username,
          imgUrl: i.user.headerUrl,
          headerUrl: i.user.headerUrl
        }
      })
      console.log(resData)
      setListMenu(resData)
      setLoadingState(false)
    })
  },[])
  return (
    <div className={style.container}>
      {
        listMenu.map((e,index) => {
          return (<div className={style.ele}  key={index}>
            {loadingState ? <Skeleton.Image active /> : (<div className={style.img} style={{ backgroundImage: `url(${e.imgUrl})` }}>
              <div className={style.mask}>
                <div className={style.EyeOutlined}><EyeOutlined /></div>
              </div>
            </div>)}
            {loadingState ? null : (<div style={{ fontSize: '1.5rem', fontWeight: '500' }}>{e.title}</div>)}
            <div style={{ fontSize: '1.2rem', fontWeight: '550' }}> {loadingState ? <Skeleton.Avatar active></Skeleton.Avatar> : <Avatar
              src={e.headerUrl}
              size={{ xs: 12, sm: 12, md: 20, lg: 20, xl: 20, xxl: 20 }}
            />}{loadingState ? <Skeleton.Input active >
            </Skeleton.Input> : e.auth}</div>
          </div> )
        })
      }
      {listMenu.length > 6 ? (<div><Pagination pageSize={6} total={50} responsive={true} /></div>):null}
    </div>
  )
}