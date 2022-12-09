/*
 * @Author: zyq
 * @Date: 2022-10-30 17:14:12
 * @Last Modified time: 2022-10-30 17:14:12
 */

import React, { useEffect, useState } from 'react';
import { generateCatalog, CatalogNode } from '@/utils/generateCatalog';
import { Anchor, List } from 'antd';
const { Link } = Anchor;
import Viewer from 'viewerjs';
import './index.less';
import styled from './index.less';

const data = [
  'ECMAScript',
  'webpack',
  'SEO优化',
  'React',
  'Vue',
  'TypeScript',
  'Vuex',
];
function Article() {
  const [detail, setDetail] = useState({ title: '', content: '' });
  const [nodes, setNodes] = useState<{
    catalogNodes: CatalogNode[];
    htmlText: string;
  }>({
    catalogNodes: [{ title: '', tag: '', childs: Array(0), id: '' }],
    htmlText: '',
  });
  const [targetOffset, setTargetOffset] = useState<number | undefined>(
    undefined,
  );
  //文章锚点再中间
  useEffect(() => {
    setTargetOffset(window.innerHeight / 2);
  }, []);
  useEffect(() => {
    fetch('/umi/searchDetail')
      .then((res) => res.json())
      .then((res) => {
        setDetail(res.data);
        console.log('res.data', res.data);
      });
  }, []);
  useEffect(() => {
    const result = generateCatalog(detail.content);
    setNodes({
      catalogNodes: result.catalogNodes,
      htmlText: result.htmlText,
    });
  }, [detail]);

  //生成文章目录
  const RenderList = (catalogNodes: CatalogNode[]) => {
    if (catalogNodes.length === 0) {
      return <></>;
    }
    return (
      <Anchor className={styled['list-wrap']} targetOffset={targetOffset}>
        {catalogNodes.map((node: CatalogNode) => (
          <React.Fragment key={node.id}>
            <Link href={`#${node.id}`} title={node.title} />
            {RenderList(node.childs)}
          </React.Fragment>
        ))}
      </Anchor>
    );
  };

  //富文本图片预览
  const dataCopy = String(nodes.htmlText).replaceAll(
    '<img',
    '<img class="view-img"',
  );
  useEffect(() => {
    const imgList = document.querySelectorAll('.view-img');
    imgList.forEach((imgItem: any) => {
      const viewer = new Viewer(imgItem, {
        // 0: 不显示
        // 1：显示
        // 2：width>768px
        // 3: width>992px
        // 4: width>1200px
        toolbar: {
          zoomIn: 4,
          zoomOut: 4,
          oneToOne: 4,
          reset: 4,
          prev: 4,
          play: {
            show: 4,
            size: 'large',
          },
          next: 4,
          rotateLeft: 4,
          rotateRight: 4,
          flipHorizontal: 4,
          flipVertical: 4,
        },
        viewed() {
          viewer.zoomTo(1);
        },
      });
    });
  }, [nodes.htmlText]);

  return (
    <>
      <div className={styled['left']}>
        <div className={styled['title']}>{detail.title}</div>
        <div dangerouslySetInnerHTML={{ __html: dataCopy }}></div>
      </div>
      <div className={styled['right']}>
        {/* 相关搜索 */}
        <div className={styled['relate_search']}>
          <List
            size="large"
            header={<div>相关搜索</div>}
            bordered
            dataSource={data}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </div>
        <div className={styled['catalog']}>
          {/* 生成文章目录 */}
          <h2 style={{ fontWeight: '600' }}>文章目录</h2>
          {RenderList(nodes.catalogNodes)}
        </div>
      </div>
    </>
  );
}

export default Article;
