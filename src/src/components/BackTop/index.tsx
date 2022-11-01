import React from 'react';
import { BackTop } from 'antd';
import { UpOutlined } from '@ant-design/icons';

const style: React.CSSProperties = {
  height: 40,
  width: 45,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: 'rgb(42, 71, 109)',
  color: '#fff',
  textAlign: 'center',
  fontSize: 20,
};
function BackToTop() {
  return (
    <>
      <BackTop>
        <div style={style}>
          <UpOutlined />
        </div>
      </BackTop>
    </>
  );
}

export default BackToTop;
