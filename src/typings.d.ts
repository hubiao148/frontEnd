/*
 * @Author: zyqqun
 * @Date: 2022-10-01 16:39:53
 * @LastEditors: zyqqun 2450100414@qq.com
 * @LastEditTime: 2022-12-24 22:33:27
 * @FilePath: \src\typings.d.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by zyqqun 2450100414@qq.com, All Rights Reserved. 
 */
declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}
declare module 'react-file-viewer';
