/*
 * @Author: hcy
 * @Date: 2022-10-06 18:44:18
 * @LastEditors: zyqqun 2450100414@qq.com
 * @LastEditTime: 2023-01-08 21:59:29
 * @FilePath: \src\src\pages\Case\index.tsx
 * @Description: 时间案例界面
 *
 */
import { useEffect, useState } from 'react';
import { Card } from 'antd';
import styled from './index.less';
import ClassicCase from './components/classicCase';
import OpenProject from './components/openProject';
const tabListNoTitle = [
  {
    key: 'classicCase',
    tab: '经典案例',
  },
  {
    key: 'openProject',
    tab: '开源项目',
  },
];

const contentListNoTitle: Record<string, React.ReactNode> = {
  classicCase: <ClassicCase></ClassicCase>,
  openProject: <OpenProject></OpenProject>,
};
export default function Case() {
  const [activeTabKey, setActiveTabKey] = useState<string>('classicCase');
  const [loading, setLoading] = useState(false);
  const onTabChange = (key: string) => {
    setActiveTabKey(key);
  };

  return (
    <div className={styled.caseWrapper}>
      <Card
        loading={loading}
        style={{ width: '100%', backgroundColor: '#e9ecef' }}
        bodyStyle={{
          width: '83%',
          minHeight:'600px',
          marginLeft: '10%',
          backgroundColor: '#ffffff',
        }}
        headStyle={{ paddingLeft: '11%' }}
        bordered={false}
        tabList={tabListNoTitle}
        activeTabKey={activeTabKey}
        onTabChange={(key) => {
          onTabChange(key);
        }}
      >
        {contentListNoTitle[activeTabKey]}
      </Card>
    </div>
  );
}
