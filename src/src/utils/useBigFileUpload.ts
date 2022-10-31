/*
 * @Author: hcy
 * @Date: 2022-10-30 20:34:49
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-31 00:35:44
 * @FilePath: \src\src\utils\useBigFileUpload.ts
 * @Description: 大文件上传
 *
 */
import SparkMD5 from 'spark-md5';
import request from '@/api/api';

export async function useBigFileUpload(
  bigFile: File,
  size: number,
  url: string,
) {
  // 生成切片
  const fileList = handleFileChunk(bigFile, size);
  // 获取文件hash值
  const containerHash = await getFileHash(fileList);
  // 遍历配置对象 用（）返回对象数组
  const fileMsg = fileList.map(({ file }, index) => ({
    // 整个文件hash
    fileHash: containerHash,
    // 当前切片的hash
    hash: containerHash[index] + '-' + index,
    // 当前是第几个切片
    index,
    // 文件个数
    fileCount: fileList.length,
    // 切片内容
    chunk: file,
    // 文件总体大小
    totalSize: bigFile.size,
    // 单个文件大小
    size: size,
  }));
  Upload(fileMsg, url);
}

/**
 * 获取分片数组hash
 */

async function getFileHash(fileList: { file: Blob }[]) {
  const spark = new SparkMD5.ArrayBuffer();
  // 获取全部内容
  const result = fileList.map((item) => {
    return getContent(item.file);
  });
  try {
    const contentList = await Promise.all(result);
    for (let i = 0; i < contentList.length; i++) {
      spark.append(contentList[i]);
    }
    // 生成指纹
    const res = spark.end();
    return res;
  } catch (e) {
    console.log(e);
  }
}

/**
 *
 * @param fileList 文件的每片
 *
 *
 * @returns Blob的二进制流
 */
async function getContent(fileList: Blob) {
  return new Promise((resolve, reject) => {
    let fileReader = new FileReader();
    fileReader.readAsArrayBuffer(fileList);
    fileReader.onload = (e) => {
      if (e.target == null) {
        reject(fileReader.error);
        fileReader.abort();
      } else {
        resolve(e.target.result);
      }
    };
    fileReader.onerror = (e) => {
      reject(fileReader.error);
      fileReader.abort();
    };
  });
}

/***
 *
 * 切片
 *
 * @params
 * file :文件
 * size:分片大小
 */
function handleFileChunk(file: File, size: number): { file: Blob }[] {
  console.log(file.size);
  let list = []; // 存储分片的数组
  let currentIndex = 0;
  while (currentIndex < file.size) {
    // 最后一片根据情况定
    let endIndex =
      currentIndex + size <= file.size ? currentIndex + size : file.size;
    let fileSlice = file.slice(currentIndex, endIndex);
    currentIndex = endIndex;
    list.push({ file: fileSlice });
  }
  return list;
}

/***
 * 并发上传
 *
 */

interface fileListItem {
  fileHash: any;
  hash: string;
  index: number;
  fileCount: number;
  chunk: Blob;
  totalSize: number;
  size: number;
}

async function Upload(fileList: fileListItem[], url: string) {
  const req = fileList
    .map(({ fileHash, hash, index, fileCount, chunk, totalSize, size }, i) => {
      const formData = new FormData();
      formData.append('fileHash', fileHash);
      formData.append('hash', hash);
      formData.append('index', index.toString());
      formData.append('fileCount', fileCount.toString());
      formData.append('chunk', chunk);
      formData.append('totalSize', totalSize.toString());
      formData.append('size', size.toString());

      return { formData, i };
    })
    .map(async ({ formData, i }) => {
      return request({
        url: '/user',
        method: 'post',
        data: formData,
        Headers: {
          'Content-Type':
            'multipart/form-data;boundary = ' + new Date().getTime(),
        },
      });
    });
  await Promise.all(req);
}
