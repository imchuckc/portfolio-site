'use client';

import { useEffect } from 'react';

export default function BaiduAnalytics() {
  useEffect(() => {
    const loadScript = () => {
      try {
        console.log('初始化百度统计...');
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://hm.baidu.com/hm.js?861e8cbf49ea01e44d8edc43cc12bbbe`;
        
        script.onload = () => {
          console.log('百度统计加载成功');
          window._hmt = window._hmt || [];
        };
        
        script.onerror = (error) => {
          console.error('百度统计加载失败，可能是广告拦截器导致', error);
          // 检查是否是广告拦截器导致
          checkAdBlocker();
        };

        document.head.appendChild(script);
      } catch (error) {
        console.error('百度统计初始化失败:', error);
      }
    };

    // 检查是否存在广告拦截器
    const checkAdBlocker = async () => {
      try {
        const response = await fetch('https://hm.baidu.com/hm.gif');
        if (!response.ok) {
          console.log('检测到广告拦截器，部分功能可能受限');
        }
      } catch (error) {
        console.log('检测到广告拦截器，部分功能可能受限');
      }
    };

    if (typeof window !== 'undefined') {
      loadScript();
    }

    return () => {
      // 清理函数
      const scripts = document.getElementsByTagName('script');
      for (let script of scripts) {
        if (script.src.includes('hm.baidu.com')) {
          script.remove();
        }
      }
    };
  }, []);

  return null;
} 