/*
 * @Author: zyqqun
 * @Date: 2022-11-21 21:22:32
 * @LastEditors: zyqqun 2450100414@qq.com
 * @LastEditTime: 2022-12-25 19:43:26
 * @FilePath: \src\src\pages\Task\components\Manage\TackItem\index.tsx
 * @Description:
 *
 * Copyright (c) 2022 by zyqqun 2450100414@qq.com, All Rights Reserved.
 */
import storage from '@/utils/storage';
import { CheckCircleTwoTone } from '@ant-design/icons';
const moment = require('moment');
import './index.less';

interface Iprops {
  name: string;
  // desc: string;
  //startTime: string;
  finisheddate: string;
  active: boolean;
  onUpload: () => void;
  onEdit: () => void;
  upload: string;
}

function TaskItem(props: Iprops) {
  const {
    name,
    // desc,
    finisheddate,
    active = false,
    upload,
    onUpload,
    onEdit,
  } = props;
  return (
    <div className={`task-item ${active ? 'task-item--active' : ''}`}>
      <div className="task-item__info">
        <div className="task-item__title">{name}</div>
        <div className="task-item__ddl">{finisheddate}</div>
        {/* <div className="task-item__desc">{desc}</div> */}
      </div>
      <div className="task-item__status">
        {upload == '0' ? (
          <button className="task-item__upload-btn" onClick={onUpload}>
            上传
          </button>
        ) : (
          <button className="task-item__HaveUpload-btn">
            已上传
            <CheckCircleTwoTone twoToneColor="#52c41a" />
          </button>
        )}
        <button className="task-item__edit-btn" onClick={onEdit}>
          编辑
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
