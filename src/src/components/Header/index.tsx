/*
 * @Author: hcy
 * @Date: 2022-10-05 11:52:12
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-05 21:13:11
 * @FilePath: \src\src\components\Header\index.tsx
 * @Description: 头部
 * 
 */
import {useEffect,useState} from 'react'
import { useHistory } from 'umi';
import { BellOutlined ,UnorderedListOutlined} from '@ant-design/icons';
import { Avatar, Image, Badge, Button} from 'antd';
import { useAuth } from '@/utils/auth';
import Menu from './components/Menu'
import style from './index.less'
import storage from '@/utils/storage';
export default () => {
  const [refresh, setRefresh] = useState(false);
 
  useEffect(() => { //刷新页面钩子函数
    refresh && setTimeout(() => setRefresh(false))
  } , [refresh])

  const history = useHistory();
  const { isLogin } = useAuth(); //判断受否登录
  function goLogin() {
    history.push('/beforeLogin')
  }
  function goLogout() {
    storage.clearItem('token');
    setRefresh(!refresh)
  }
  
  return (
    <div className={style.header}>
      <div className={style.menu}>logo</div>
      <Menu></Menu>
      <div className={style.headerAvatar}> 
        {isLogin&&<Badge count={1000}> {/**通过isLogin变量动态渲染按钮 */}
          <Avatar icon={<BellOutlined />} />
        </Badge>}
        {!isLogin && <Button onClick={goLogin}>登录/注册</Button>}
        {isLogin && <Avatar alt='loading' src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 32 }} />} />}
        {isLogin && <Button onClick={goLogout}>退出</Button>}
        <UnorderedListOutlined />
      </div>
    </div>
  )
}