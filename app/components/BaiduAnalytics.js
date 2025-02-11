'use client';

import { useEffect } from 'react';

export default function BaiduAnalytics() {
  useEffect(() => {
    try {
      console.log('初始化百度统计...');
      window._hmt = window._hmt || [];
      const hm = document.createElement('script');
      hm.src = 'https://hm.baidu.com/hm.js?861e8cbf49ea01e44d8edc43cc12bbbe';
      const s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(hm, s);
      console.log('百度统计脚本已添加');
    } catch (error) {
      console.error('百度统计初始化失败:', error);
    }
  }, []);

  return null;
} 