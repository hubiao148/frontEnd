/*
 * @Author: zyq
 * @Date: 2022-10-24 17:06:04
 * @Last Modified by: zyq
 * @Last Modified time: 2022-10-24 20:52:19
 */

import React, { useEffect, useState } from 'react';
import { LikeOutlined, StarOutlined } from '@ant-design/icons';
import { Input, Card, Skeleton, Divider } from 'antd';
import { useHistory } from 'umi';
import styled from './index.less';
import InfiniteScroll from 'react-infinite-scroll-component';
const { Meta } = Card;
const { Search } = Input;
function techShare() {
  const history = useHistory();
  const [modeList, setModeList] = useState([]);

  const appendData = () => {
    fetch('/umi/modeList')
      .then((res) => res.json())
      .then((res) => {
        setModeList(res.data);
        console.log(res.data[0]);
      });
  };

  useEffect(() => {
    appendData();
  }, []);

  const getData = async () => {};
  return (
    <div className={styled['shareWrapper']}>
      {/* 设计模式的卡片 */}
      <Search
        className={styled['search']}
        placeholder="搜索技术分享"
        onSearch={getData}
      />
      <div className={styled['card']}>
        <InfiniteScroll
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: '20px',
          }}
          dataLength={modeList.length}
          next={appendData}
          hasMore={modeList.length < 50}
          loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
          endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        >
          {modeList.map((item: any, index: any) => {
            return (
              <Card
                key={item.id}
                hoverable
                className={styled.cardItem}
                style={{ width: '22rem', height: '36rem' }}
                cover={<img alt="example" src={item.src} />}
                actions={[
                  <LikeOutlined key="like" />,
                  <StarOutlined key="star" />,
                ]}
              >
                <Meta title={item.title} description={item.description} />
              </Card>
            );
          })}
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default techShare;
