import React, { useEffect, useState } from 'react';
import styled from './index.less';
function Article() {
  const [detail, setDetail] = useState({ title: '', content: '' });
  useEffect(() => {
    fetch('/umi/techShareDetail')
      .then((res) => res.json())
      .then((res) => {
        setDetail(res.data);
        console.log(res.data);
      });
  }, []);

  return (
    <>
      <div className={styled['title']}>{detail.title}</div>
      <div dangerouslySetInnerHTML={{ __html: detail.content }}></div>
    </>
  );
}

export default Article;
