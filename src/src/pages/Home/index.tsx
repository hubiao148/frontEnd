/*
 * @Author: hcy
 * @Date: 2022-10-05 12:01:18
 * @LastEditors: hcy
 * @LastEditTime: 2022-11-15 15:26:19
 * @FilePath: \src\src\pages\Home\index.tsx
 * @Description: 主页
 *
 */
import { Divider } from 'antd';
import { useHistory } from 'umi';
import { currentPageHeader } from '@/jotai'
import { FireOutlined, ArrowRightOutlined } from '@ant-design/icons';
import CaseList from './component/CaseList';
import style from './index.less';
import Graph from './component/graph';
import storage from '@/utils/storage';
import { useAtom } from 'jotai';
export default function Home() {
  const [page, setPage] = useAtom(currentPageHeader);
  const history = useHistory();
  const caseList = [
    //页面数据
    { title: '策略模式', imgSrc: require('@/assets/caseImg.png') },
    { title: '策略模式', imgSrc: require('@/assets/caseImg.png') },
    { title: '策略模式', imgSrc: require('@/assets/caseImg.png') },
    { title: '策略模式', imgSrc: require('@/assets/caseImg1.png') },
    { title: '策略模式', imgSrc: require('@/assets/caseImg1.png') },
    { title: '策略模式', imgSrc: require('@/assets/caseImg1.png') },
  ];
  // console.log(process.env.UMI_ENV);

  return (
    <div className={style.homeWrapper}>
      {/**知识图谱*/}
      <Graph />
      <Divider orientation="left" plain>
        <FireOutlined style={{ color: 'red' }} /> 热点案例
      </Divider>
      <CaseList caseList={caseList} />
      <div className={style.bottomLeft}>
        <div onClick={() => {
          setPage(2);
          storage.setItem('currentPageHeader', 2);
          history.push('/case');
        }}>
          探索更多设计模式
          <ArrowRightOutlined />
        </div>
      </div>
    </div>
  );
}
