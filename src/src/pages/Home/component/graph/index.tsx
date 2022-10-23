/*
 * @Author: zyq
 * @Date: 2022-10-22 21:14:44
 * @Last Modified by: zyq
 * @Last Modified time: 2022-10-22 22:18:57
 */

import { Input } from 'antd';
import Chart from './components';
import { option } from './option';
import styled from './index.less';

const { Search } = Input;
export default function Graph() {
  // 点击触发的函数
  const getData = async () => {
    // graph = await getChar().then((res: any) => {
    //   return res.data;
    // }); //测试mock
    // // graph = data.data;
    // console.log(graph);
    // console.log(graph.links);
    //console.log(baseurl.baseApi);
  };

  return (
    <div className={styled['graphWrapper']}>
      <Search
        className={styled['search']}
        placeholder="搜索图谱节点"
        onSearch={getData}
      />
      <Chart option={option} />
    </div>
  );
}
