import React, { useEffect } from 'react';
import { useHistory } from 'umi';
function Success() {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      history.replace('/beforeLogin/login');
    }, 5000);
  }, []);
  return (
    <div>
      <h3>修改成功！5s后返回登录页面</h3>
    </div>
  );
}

export default Success;
