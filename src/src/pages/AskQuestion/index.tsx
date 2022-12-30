/*
 * @Author: hcy
 * @Date: 2022-10-21 09:57:38
 * @LastEditors: hcy
 * @LastEditTime: 2022-12-30 20:34:42
 * @FilePath: \src\src\pages\AskQuestion\index.tsx
 * @Description: 提问题
 * 
 */

import React, { useEffect, useState } from 'react'
import { useHistory } from 'umi'
import { Breadcrumb, Input, Modal, message, Tag } from 'antd'
import Editor from './components/Eidtor'
import style from './index.less'
import TagAdd from './components/TagAdd'
import { msg } from '@/jotai'
import { Tags } from '@/jotai'
import { useAtom } from 'jotai'
import { addArticle } from '@/api/myShare/addArticle'
import storage from '@/utils/storage'
const { CheckableTag } = Tag;
export default function index() {
  const tagsData = ["后端", "大数据", "前端", "安卓"]
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [topicIds, setTopicIds] = useState<number[]>([1,2,3]);
  const [text] = useAtom(msg);
  const [tags] = useAtom(Tags);
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
  const addArticleClick = () => {
    console.log(text)
    console.log(tags)
    let techqa = { title: '测试', content: text, userId: storage.getItem("userMsg").id }
    addArticle({techqa,topicIds}).then((result) => {
      console.log(result)
      message.success({ content: '发布成功！', duration: 1 });
    }).catch((err) => {
      console.log(err)
    });
    history.push('/myshare');
  }
  function handleChangeTag(tag:string, checked:boolean) {
    console.log(tag, checked)
    const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
    // let num = nextSelectedTags.map((i,e) => {
    //   if()
    // })
    setSelectedTags(nextSelectedTags);
  }
  return (
    <div className={style.container}>
      <Modal title="提示" okText={'确定'} keyboard={true} cancelText={'取消'} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>未保存要离开吗？</p>
      </Modal>
      <div>
        <div onClick={showModal}>技术问答</div>
        <div>提问题</div>
        <div onClick={addArticleClick}><span>发布问题</span></div>
      </div>
      <div>
        <Breadcrumb separator=">" style={{ cursor: 'pointer' }}>
          <Breadcrumb.Item onClick={showModal}>技术问答</Breadcrumb.Item>
          <Breadcrumb.Item>提问</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div> <Input placeholder="请输入标题用问号结尾。" /></div>
      <div>
        {tagsData.map(tag => (
          <CheckableTag
            key={tag}
            checked={selectedTags.indexOf(tag) > -1}
            onChange={checked => handleChangeTag(tag, checked)}
          >
            {tag}
          </CheckableTag>
        ))}
      </div>
      <div className={style.editor}><Editor></Editor></div>
    </div>
  )
}
