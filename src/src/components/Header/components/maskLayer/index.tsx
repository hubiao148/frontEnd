import React, { useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { useHistory } from 'umi';
import styled from './index.less';

interface maskProps {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: maskProps['isModalOpen']) => void;
}
function MaskLayer({ isModalOpen, setIsModalOpen }: maskProps) {
  const history = useHistory();
  return (
    <div className={styled['maskWrapper']}>
      <div className={styled['header']}>
        <div className={styled['logo']}>logo</div>
        <div className={styled['cancel']}>
          <CloseOutlined
            onClick={() => {
              return history.push('/home'), setIsModalOpen(!isModalOpen);
            }}
          />
        </div>
      </div>
      <div className={styled['content']}>
        <div className={styled['left']}>
          <ul>
            <li>
              <span>CASE</span>
              <div
                onClick={() => {
                  return history.push('/case'), setIsModalOpen(!isModalOpen);
                }}
              >
                -实践案例
              </div>
            </li>
            <li>
              <span>GRAPH</span>
              <div
                onClick={() => {
                  return history.push('/home'), setIsModalOpen(!isModalOpen);
                }}
              >
                -知识图谱
              </div>
            </li>
            <li>
              <span>TASKS</span>
              <div
                onClick={() => {
                  return history.push('/task'), setIsModalOpen(!isModalOpen);
                }}
              >
                -实践任务
              </div>
            </li>
            <li>
              <span>ASK</span>
              <div
                onClick={() => {
                  return history.push('/myshare'), setIsModalOpen(!isModalOpen);
                }}
              >
                -技术问答
              </div>
            </li>
          </ul>
        </div>
        <div className={styled['right']}>
          <div className={styled['title']}>
            <div>
              基于软件工程专业的
              <br />
              实践教辅平台
            </div>
            <div>
              It is a practical teaching platform based on
              <br /> software engineering
            </div>
          </div>
        </div>
      </div>
      <div className={styled['footer']}>
        <div
          style={{
            color: 'rgb(209, 209, 209)',
            top: '20rem',
          }}
        >
          ©2021-2022 Sicnu Software easySE. All rights reserved.
        </div>
        <div style={{ color: 'rgb(209, 209, 209)' }}>BY easySE</div>
      </div>
    </div>
  );
}

export default MaskLayer;
