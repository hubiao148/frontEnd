/*
 * @Author: zyqqun
 * @Date: 2022-11-21 21:22:32
 * @LastEditors: zyqqun 2450100414@qq.com
 * @LastEditTime: 2022-12-30 19:54:33
 * @FilePath: \src\src\pages\Task\components\TaskList\TackItem\index.tsx
 * @Description:
 *
 * Copyright (c) 2022 by zyqqun 2450100414@qq.com, All Rights Reserved.
 */
import storage from '@/utils/storage';
import { CheckCircleTwoTone } from '@ant-design/icons';
const moment = require('moment');
import './index.less';

interface Iprops {
  taskName: string;
  // desc: string;
  //startTime: string;
  deadline: string;
  active: boolean;
  onUpload: () => void;
  onDelete: () => void;
  onEdit: () => void;
  sta: string;
}

function TaskItem(props: Iprops) {
  const {
    taskName,
    // desc,
    deadline,
    active = false,
    sta,
    onUpload,
    onEdit,
    onDelete,
  } = props;
  return (
    <div className={`task-item ${active ? 'task-item--active' : ''}`}>
      <div className="task-item__info">
        <div className="task-item__title">{taskName}</div>
        <div className="task-item__ddl">{deadline}</div>
        {/* <div className="task-item__desc">{desc}</div> */}
      </div>
      <div className="task-item__status">
        {sta == 'wait' ? (
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
        <button className="task-item__delete-btn" onClick={onDelete}>
          删除
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
