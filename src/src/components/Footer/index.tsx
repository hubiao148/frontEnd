/*
 * @Author: zyq
 * @Date: 2022-10-05 20:37:06
 * @Last Modified by: zyq
 * @Last Modified time: 2022-10-05 21:51:58
 */
import React from 'react';
import { Layout, Typography, Divider, Row, Col } from 'antd';
import styled from './index.less';
import image1 from '../../assets/backgr.png';
import image2 from '../../assets//login-side-img.png';

const companies = [
  { src: image1, title: 'Microsoft' },
  { src: image2, title: 'Youtube' },
];

const Footer: React.FC = () => {
  return (
    <Layout.Footer
      style={{
        backgroundColor: 'rgb(42, 71, 109)',
        color: 'rgb(232, 232, 232)',
        height: '330px',
      }}
    >
      <Typography.Title
        level={4}
        style={{
          textAlign: 'left',
          color: 'rgb(232, 232, 232)',
          paddingTop: '10PX',
        }}
      >
        ©2021-2022 Sicnu Software easySE. All rights reserved.
      </Typography.Title>
      <div className={styled['focusWrapper']}>
        <div>
          <span>关注</span>
        </div>
        <Divider
          style={{ marginBottom: '10px', color: 'rgb(108, 108, 108)' }}
        ></Divider>
        <Row>
          {companies.map((c, index) => (
            <Col span={7} key={'qr-' + index} style={{ marginRight: '10px' }}>
              <img src={c.src} className={styled['img']} alt="focusQr" />
            </Col>
          ))}
        </Row>
      </div>

      <Divider
        style={{ marginTop: '5px', color: 'rgb(108, 108, 108)' }}
      ></Divider>
      <Typography.Title
        level={5}
        style={{ textAlign: 'right', color: 'rgb(232, 232, 232)' }}
      >
        BY easySE
      </Typography.Title>
    </Layout.Footer>
  );
};

export default Footer;
