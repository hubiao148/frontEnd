/*
 * @Author: hcy
 * @Date: 2022-10-05 11:23:03
 * @LastEditors: zyqqun 2450100414@qq.com
 * @LastEditTime: 2022-11-27 21:55:11
 * @FilePath: \src\src\layouts\index.tsx
 * @Description:
 *
 */
import Header from '@/components/Header';
import Footer from '../components/Footer';
import styles from './index.less';
import { Layout } from 'antd';
const { Content } = Layout;
export default function IndexLayout(props: any) {
  //布局
  return (
    <div className={styles.basicLayout}>
      {/*  头部 */}
      <Header />
      {/*  中间内容 */}
      <Content>{props.children}</Content>
      {/*  底部 */}
      <Footer />
    </div>
  );
}
