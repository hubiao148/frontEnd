/*
 * @Author: hcy
 * @Date: 2022-10-15 16:59:45
 * @LastEditors: hcy
 * @LastEditTime: 2022-12-24 20:48:22
 * @FilePath: \src\src\pages\User\components\Common\index.tsx
 * @Description: 多个页面共用的组件
 * 
 */
import style from './index.less'
import { Pagination, Avatar, Skeleton, message, Empty } from 'antd'
import { divider0 } from '@/jotai'
import { divider1 } from '@/jotai'
import { divider2 } from '@/jotai'
import { divider3 } from '@/jotai'
import { useHistory } from 'umi'
import { useAtom } from 'jotai'
interface Data {
  listData: { //传值参数类型接口
    anser: number,
    read: number,
    title: string,
    tag: string[],
    auth: string,
    headIcon: string,
    id: number,
    userId:number 
  }[] | null,
  num?: number,//最大展示个数
  loading: boolean,
  id: number,
  total:number
}
export default (props: Data) => {
  const [page0, setPage0] = useAtom(divider0);
  const [page1, setPage1] = useAtom(divider1);
  const [page2, setPage2] = useAtom(divider2);
  const [page3, setPage3] = useAtom(divider3);
  const history = useHistory();
  function go(id: number) {
    if (!props.loading)
      history.push(`/details/${id}`);
    else {
      message.error('加载中....');
    }
  }
  // 设置页数
  function pageChange(e: any) {
    // console.log(e)
    switch (props.id) {
      case 0:
        setPage0(e)
        break;
      case 1:
        setPage1(e)
        break;
      case 2:
        setPage2(e)
        break;
      case 3:
        setPage3(e)
        break;
      default:
        setPage0(1)
    } 
  }
  return (
    <div className={style.container}>
      {
        props.listData == null ? <Empty /> : (
          <>
            {
              props.listData.map((e, i) => {
                return (
                  <div className={style.ele} key={i} onClick={() => go(e.id)}>
                    <div>
                      {props.loading ? <Skeleton.Button active block={false}>
                      </Skeleton.Button> :
                        <div style={{ borderColor: '#4C81C9', borderStyle: 'solid' }}>{e.anser} <br /> 回答</div>
                      }
                      {props.loading ? <Skeleton.Button active block={false}>
                      </Skeleton.Button> :
                        <div>{e.read}<br />阅读</div>
                      }
                      <div className={style.eleChild}>
                        {props.loading ? <Skeleton paragraph={{ rows: 1 }} active >
                        </Skeleton> : <>
                          <div>{e.title}</div>
                          <div>
                            {
                              e.tag.map((el, index) => {
                                return (
                                  <div key={index} style={{ backgroundColor: '#E5F4EF' }} >{el}</div>
                                )
                              })
                            }
                          </div>
                        </>
                        }
                      </div>
                    </div>
                    <div >
                      <div> {props.loading ? <Skeleton.Avatar active></Skeleton.Avatar> : <Avatar
                        src={e.headIcon || "https://joeschmoe.io/api/v1/random"}
                        size={{ xs: 12, sm: 12, md: 20, lg: 40, xl: 40, xxl: 40 }}
                      />}
                        {props.loading ? <Skeleton.Input active >
                        </Skeleton.Input> : <>
                          &nbsp;&nbsp;&nbsp;{e.auth}
                        </>
                        }
                      </div>
                    </div>
                  </div>
                )
              })
            }
            {
              props.listData.length !=0  ? (
                <div>
                  <Pagination
                    onChange={pageChange}
                    pageSize={props.num || 4} total={props.total} responsive={true} />
                </div>
              ) : null
            }
          </>
        )
      }
    </div >
  )
}