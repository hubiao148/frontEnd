import { get, post } from '../api';

//获取图谱数据
export const getChar = () => get('/umi/chart');
