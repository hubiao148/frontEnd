import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'umi';
function Success() {
  const [time, setTime] = useState(5); //倒计时时间
  const timeRef = useRef<NodeJS.Timeout>(); //设置延时器
  const history = useHistory();
  useEffect(() => {
    //如果设置倒计时且倒计时不为0
    if (time && time !== 0)
      timeRef.current = setTimeout(() => {
        setTime((time) => time - 1);
      }, 1000);
    else history.replace('/beforeLogin/login');
    //清楚延时器
    return () => {
      clearTimeout(timeRef.current);
    };
    // setTimeout(() => {
    //   history.replace('/beforeLogin/login');
    // }, 5000);
  }, [time]);
  return (
    <div>
      <h3>修改成功！{time}s后返回登录页面</h3>
    </div>
  );
}

export default Success;
