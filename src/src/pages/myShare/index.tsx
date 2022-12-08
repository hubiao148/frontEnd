/*
 * @Author: hcy
 * @Date: 2022-10-06 18:45:27
 * @LastEditors: hcy
 * @LastEditTime: 2022-11-27 16:09:54
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
  const listMenu = [
    { path: '/myshare/latest', title: '最新' },
    { path: '/myshare/reply', title: '待回答' },
    { path: '/myshare/mouth', title: '月榜' },
    { path: '/myshare/week', title: '周榜' },
  ];
  function goAskQuestion() {
    history.push('/askquestion');
  }
  return (
    <div style={{ backgroundColor: '#E9ECEF', width: '100%' }}>
      <div className={style.container}>
        <div className={style.left}>
          <div>
            <div>技术问答</div>
            <div className={style.menuContainer}>
              <Menu id={'MyShare'} listMenu={listMenu} fontSize={'18px'}></Menu>
            </div>
            <div onClick={goAskQuestion}>提问题</div>
          </div>
          <div>{props.children}</div>
        </div>
        <div className={style.right}>
          <div>

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
