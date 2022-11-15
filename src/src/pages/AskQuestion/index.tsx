/*
 * @Author: hcy
 * @Date: 2022-10-21 09:57:38
 * @LastEditors: hcy
 * @LastEditTime: 2022-11-15 17:41:52
 * @FilePath: \src\src\pages\AskQuestion\index.tsx
 * @Description: 提问题
 * 
 */

import React, { useEffect, useState } from 'react'
import { useHistory } from 'umi'
import { Breadcrumb, Input, Modal } from 'antd'
import Editor from './components/Eidtor'
import style from './index.less'
import TagAdd from './components/TagAdd'
export default function index() {

  const history = useHistory();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    history.push('/myshare');
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={style.container}>
      <Modal title="提示" okText={'确定'} keyboard={true} cancelText={'取消'} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>未保存要离开吗？</p>
      </Modal>
      <div>
        <div onClick={showModal}>技术问答</div>
        <div>提问题</div>
        <div><span>发布问题</span></div>
      </div>
      <div>
        <Breadcrumb separator=">" style={{ cursor: 'pointer' }}>
          <Breadcrumb.Item onClick={showModal}>技术问答</Breadcrumb.Item>
          <Breadcrumb.Item>提问</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div> <Input placeholder="请输入标题用问号结尾。" /></div>
      <div><TagAdd></TagAdd></div>
      <div className={style.editor}><Editor></Editor></div>
    </div>
  )
}
