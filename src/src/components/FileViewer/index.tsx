/*
 * @Author: hcy
 * @Date: 2022-11-21 21:27:59
 * @LastEditors: hcy
 * @LastEditTime: 2022-11-26 16:44:13
 * @FilePath: \src\src\components\FileViewer\index.tsx
 * @Description: 
 * 
 */
import React, { useEffect, useState } from 'react'
// import NewFileViewer from 'react-file-viewer'
import Viewer, { Worker } from '@phuocng/react-pdf-viewer';
import "./index.less"

export default function FileViewer(props: { file: string }) {
    const filePath = props.file
    const [type, setType] = useState('')
    useEffect(() => {
        const type = filePath.split('.')[filePath.split('.').length - 1]
        setType(type)
    }, [filePath])

    const getError = (val: Error) => {
        console.log('err=', val)
    }

    return (
        <div className='file-view'>
            {type ? (
                // <NewFileViewer
                //     fileType={'docx'}
                //     filePath={filePath}
                //     errorComponent={getError}
                //     onError={(err: Error) => console.log(err)}
                // />
                <iframe src="https://qn.liuyinjihua.com/d%E5%9B%9B%E5%B7%9D%E5%B8%88%E8%8C%83%E5%A4%A7%E5%AD%A6%E5%8C%96%E5%AD%A6%E4%B8%93%E4%B8%9A%E4%BA%BA%E6%89%8D%E5%9F%B9%E5%85%BB%E6%96%B9%E6%A1%88.pdf?e=1669452527&token=bs0nrwJpD1z6JJLOEOpgc9BxuHemz3IEyVIrF3dQ:CHJGNux-IBX2zmUVxt_Ahg-riUc=" width="100%" height="100%">
                </iframe>
            ) : (
                <div className='file-view-warn'>暂无文件预览</div>
            )
            }
        </div >
    )
}
