/*
 * @Author: hcy
 * @Date: 2022-10-05 11:23:03
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-06 19:37:34
 * @FilePath: \src\src\layouts\index.tsx
 * @Description: 
 * 
 */
import Header from '@/components/Header';
import Footer from '../components/Footer';
import styles from './index.less';
import {Divider} from 'antd'
export default function IndexLayout(props:any) { //布局
return (
    <div className={styles.basicLayout}>
    <Header /> {/*  头部 */}
    <Divider style={{margin:0}}/>
      <div className={styles.container}>{props.children}</div>
       <Footer />{/*  底部 */}
    </div>
  );
    
}