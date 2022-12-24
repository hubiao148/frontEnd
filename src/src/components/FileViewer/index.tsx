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
                <iframe src="https://qn.liuyinjihua.com/inf3%281%29.jpg?e=1671533209&token=bs0nrwJpD1z6JJLOEOpgc9BxuHemz3IEyVIrF3dQ:oM-aMG6QfY5Hqzs4Nw87z7kytgg=" width="100%" height="100%">
                </iframe>
            ) : (
                <div className='file-view-warn'>暂无文件预览</div>
            )
            }
        </div >
    )
}
