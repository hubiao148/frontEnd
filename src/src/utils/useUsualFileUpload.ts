/*
 * @Author: hcy
 * @Date: 2022-10-31 23:06:19
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-31 23:40:26
 * @FilePath: \src\src\utils\useUsualFileUpload.ts
 * @Description:  正常文件上传
 *
 */

import request from '@/api/api';
import SparkMD5 from 'spark-md5';
import { message } from 'antd';
export async function useUsualFileUpload(file: File, url: string) {
  const spark = new SparkMD5.ArrayBuffer();
  const formData = new FormData();
  // 获取bolb二进制流
  let fileBolb = file.slice();
  formData.append('file', fileBolb);
  formData.append('size', file.size.toString());
    let fileReader = new FileReader();
    // 获取二进制文件
  fileReader.readAsArrayBuffer(fileBolb);
  fileReader.onload = (e) => {
    if (e.target?.result == null || typeof e.target?.result == 'string') {
      message.error('读取错误');
      fileReader.abort();
    } else {
      spark.append(e.target.result);
      formData.append('contentHash', spark.end());
    }
    };
    // 请求
  return request({
    url,
    data: formData,
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data;boundary = ' + new Date().getTime(),
    },
  });
}
