import React, { useCallback, useState, useRef } from 'react';
import { Button } from 'antd';

interface YZMButtonProps {
  onClick: (e: any) => any;
  time: number;
  text?: string;
}

function YzmButton({ onClick, time }: YZMButtonProps) {
  const [Time, setTime] = useState(time);
  const timeRef = useRef(Time); //设置延时器
  timeRef.current = Time;
  const flag = Time === time;
  const handleClick = useCallback(
    (e: any) => {
      if (flag) {
        if (!onClick(e)) {
          return;
        }
        //点击后开始倒计时
        let timer = setInterval(() => {
          if (timeRef.current === 0) {
            clearInterval(timer);
            setTime(time);
          } else {
            setTime((value) => value - 1);
          }
        }, 1000);
      }
    },
    [flag, onClick, time],
  );

  return (
    <Button type="primary" onClick={handleClick} disabled={!flag}>
      {flag ? '获取验证码' : `还剩${Time}s`}
    </Button>
  );
}

export default YzmButton;
