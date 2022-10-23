/*
 * @Author: hcy
 * @Date: 2022-10-15 16:59:45
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-22 10:00:32
 * @FilePath: \src\src\pages\User\components\Common\index.tsx
 * @Description: 多个页面共用的组件
 * 
 */
import style from './index.less'
import { Pagination, Avatar } from 'antd'
import { useHistory } from 'umi'
interface Data {
  listData: { //传值参数类型接口
    anser: number,
    read: number,
    title: string,
    tag: string[],
    auth: string
  }[],
  num?: number //最大展示个数
}
export default (props: Data) => {
  const history = useHistory();
  function go() {
    history.push('/details');
  }
  return (
    <div className={style.container}>
      {
        props.listData.map((e, i) => {
          return (<div className={style.ele} key={i} onClick={go}>
            <div>
              <div>{e.anser} <br /> 回答</div>
              <div>{e.read}<br />阅读</div>
              <div className={style.eleChild}>
                <div>{e.title}</div>
                <div>
                  {
                    e.tag.map((el, index) => {
                      return (
                        <div key={index} >{el}</div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
            <div >
              <div> <Avatar
                src="https://joeschmoe.io/api/v1/random"
                size={{ xs: 12, sm: 12, md: 20, lg: 40, xl: 40, xxl: 40 }}
              />{e.auth}
              </div>
            </div>
          </div>
          )
        })
      }
      <div><Pagination pageSize={props.num || 4} total={40} responsive={true} /></div>
    </div>
  )
}