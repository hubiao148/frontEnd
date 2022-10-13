/*
 * @Author: zyq
 * @Date: 2022-10-05 20:37:06
 * @Last Modified by: zyq
 * @Last Modified time: 2022-10-13 19:09:00
 */
import React from 'react';
import { Layout, Typography, Divider, Row, Col } from 'antd';
import styled from './index.less';
import image1 from '../../assets/backgr.png';
import image2 from '../../assets//login-side-img.png';

const qr = [
  { src: image1, title: 'img1' },
  { src: image2, title: 'img2' },
];

const Footer: React.FC = () => {
  return (
    <div className={styled['footerWrapper']}>
      <div
        style={{
          color: 'rgb(209, 209, 209)',
          top: '20rem',
        }}
      >
        ©2021-2022 Sicnu Software easySE. All rights reserved.
      </div>
      <div className={styled['focusWrapper']}>
        <span>关注</span>
        <Divider
          style={{
            marginBottom: '10px',
            marginTop: '5px',
            backgroundColor: 'rgb(77, 96, 126)',
          }}
        ></Divider>
        <Row>
          {qr.map((c, index) => (
            <Col span={7} key={'qr-' + index} style={{ marginRight: '2rem' }}>
              <img src={c.src} className={styled['img']} alt="focusQr" />
            </Col>
          ))}
        </Row>
      </div>

      <Divider
        style={{ marginTop: '5px', backgroundColor: 'rgb(77, 96, 126)' }}
      ></Divider>
      <span style={{ color: 'rgb(209, 209, 209)' }}>BY easySE</span>
    </div>
  );
};

export default Footer;
