/*
 * @Author: hcy
 * @Date: 2022-10-06 18:45:27
 * @LastEditors: hcy
 * @LastEditTime: 2022-12-30 11:47:35
 * @FilePath: \src\src\pages\myShare\index.tsx
 * @Description: 个人问答&&技术分享
 * 
 */
import { useHistory } from 'umi';
import Menu from '@/components/Header/components/Menu';
import HotReply from './components/HotReply';
import HotTag from './components/HotTag';
import style from './index.less'

export default function myShare(props: any) {
  const history = useHistory();
  // 动态渲染导航栏
  const listMenu = [
    { path: '/myshare/latest', title: '最新' },
    { path: '/myshare/reply', title: '最热' },
    { path: '/myshare/mouth', title: '月榜' },
    { path: '/myshare/week', title: '周榜' },
  ];
  /**
   * 去提问界面
   */
  function goAskQuestion() {
    history.push('/askquestion');
  }
  return (
    <div style={{ backgroundColor: '#E9ECEF', width: '100%' }}>
      <div className={style.container}>
        <div className={style.left}>
          <div>
            {/* 技术问答 */}
            <div>技术问答</div>
            <div className={style.menuContainer}>
              <Menu id={'MyShare'} listMenu={listMenu} fontSize={'18px'}></Menu>
            </div>
            {/* 提问 */}
            <div onClick={goAskQuestion}>提问题</div>
          </div>
          <div>{props.children}</div>
        </div>
        <div className={style.right}>
          <div>
          {/* 标签和内容展示 */}
          </div>
          <div>
            <div className={style.tagContainer}>
              <HotTag></HotTag>
            </div>
            <div className={style.replyContainer}>
              <HotReply></HotReply>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: '80px' }}></div>
    </div>
  )
}
