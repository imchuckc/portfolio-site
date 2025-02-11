'use client';
import Image from "next/image";
import { useState } from "react";

// Helper function to get the correct asset path
const getAssetPath = (path) => {
  return process.env.NODE_ENV === 'production' ? `/portfolio-site${path}` : path;
};

// Helper function to get Cloudinary URL
const getCloudinaryUrl = (imageName) => {
  // 从路径中提取文件名
  const fileName = imageName.split('/').pop().split('.')[0];
  return `https://res.cloudinary.com/dmclw72yc/image/upload/q_auto,f_auto/v1/portfolio-site/${fileName}`;
};

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleWheel = (e) => {
    if (e.ctrlKey) {
      // 仅在按住 Ctrl 键时进行缩放
      e.preventDefault();
      const delta = e.deltaY * -0.001;
      const newScale = Math.min(Math.max(1, scale + delta), 3);
      setScale(newScale);
    }
    // 不按 Ctrl 时保持正常滚动
  };

  const handleDragStart = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    
    const maxDragX = window.innerWidth * scale;
    const maxDragY = window.innerHeight * scale;
    
    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;
    
    setPosition({
      x: Math.min(Math.max(newX, -maxDragX), maxDragX),
      y: Math.min(Math.max(newY, -maxDragY), maxDragY)
    });
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      setSelectedImage(null);
      setScale(1);
      setPosition({ x: 0, y: 0 });
    }
  };

  const projects = [
    {
      title: "VR设计、数字展厅、数字人",
      image: "https://res.cloudinary.com/dmclw72yc/image/upload/v1739269717/P1_datavisual_z9dosr.jpg",
      description: "主导VR/AR数字孪生系统交互界面设计，整合AI技术生成展厅主视觉方案。设计VR古籍修复游戏全流程UI系统，优化3D界面交互逻辑，用户体验时长提升35%。开发AR导航跨端界面，统一各端视觉规范，服务日均用户1200+。主导200㎡智能展厅动态墙面视觉体系，开发4K级数据可视化模板。"
    },
    {
      title: "兴业数金金融产品",
      image: "https://res.cloudinary.com/dmclw72yc/image/upload/v1739269718/P5_xingxianghuixiaochengxu_jgwed9.png",
      description: "主导兴享惠小程序界面改版，重构布局与组件体系，强化品牌视觉一致性。设计兴魔方云平台B端方案，建立标准化交互组件库，简化复杂操作流程。搭建小程序活动视觉体系，通过动态排版与色彩策略提升banner及落地页引导效果。"
    },
    {
      title: "云计算、小程序、B端定制",
      image: "https://res.cloudinary.com/dmclw72yc/image/upload/v1739269717/P2_wuyingyunbangong_r8nkrs.jpg",
      description: "主导阿里无影云桌面UI设计，优化核心操作路径及管控后台可视化。设计三星BI数据平台可视化重构，建立B端可视化设计规范。重构恒基地产APP用户核心界面与标准化设计系统。设计天安农业电商小程序提货卡系统，统一线上线下视觉链路。"
    },
    {
      title: "社交电商与生活服务",
      image: "https://res.cloudinary.com/dmclw72yc/image/upload/v1739270719/P3_Samsung_nldt9g.jpg",
      description: "在拼多多期间主导商品详情页设计与主图展示效果优化，提升用户购物体验。设计推广图和运营活动，为品牌形象塑造提供支持。此前还主导设计白酒新零售电商平台、【菜谱大全】APP（食谱/食材商城/社区/短视频）与【不二街】（O2O联盟/优惠券营销）等项目。"
    },
    {
      title: "菜谱大全",
      image: "https://res.cloudinary.com/dmclw72yc/image/upload/v1739269718/P6_caipudaquan_xyiipg.png",
      description: "主导阿里无影云电脑界面视觉体系与多端交互规范设计，优化核心操作路径及管控后台可视化。设计三星BI数据平台可视化重构，建立B端可视化设计规范。重构恒基地产APP用户核心界面与标准化设计系统。设计天安农业电商小程序提货卡系统。"
    },
    {
      title: "小汤山小程序",
      image: "https://res.cloudinary.com/dmclw72yc/image/upload/v1739269718/P4_xiaotangshanxiaochengxu_isaq0i.png",
      description: "在拼多多期间主导商品详情页设计与主图展示效果优化，提升用户购物体验。设计推广图和运营活动，为品牌形象塑造提供支持。主导设计白酒新零售电商平台、【菜谱大全】APP（食谱/食材商城/社区/短视频）与【不二街】（O2O联盟/优惠券营销）等项目。"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-custom">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 nav-blur z-50 border-b border-[var(--border-color)]">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="font-bold text-xl text-[var(--text-primary)]">
              王娜
            </span>
            <div className="flex space-x-8">
              <a href="#experience" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)]">工作经验</a>
              <a href="#projects" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)]">项目经验</a>
              <a href="#contact" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)]">联系我</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 max-w-6xl mx-auto relative">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[var(--primary-color)]/10 to-[var(--primary-color)]/20 flex-shrink-0 relative overflow-hidden shadow-xl">
            <Image
              src={getAssetPath('/images/myphoto.jpg')}
              alt="王娜的照片"
              width={192}
              height={192}
              className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--text-primary)]">
              你好，我是 王娜 👋
            </h1>
            <p className="text-xl text-[var(--text-secondary)] mb-6">
              资深UI设计师 / 12年设计经验
            </p>
            <div className="text-[var(--text-secondary)] max-w-2xl space-y-4">
              <p>
                毕业于西安美术学院，拥有12年UI设计经验。曾就职于阿里、拼多多等知名互联网公司，
                专注于创造美观且实用的数字体验。
              </p>
              <p>
                擅长B端、C端产品设计，具有丰富的电商、金融、企业级应用设计经验。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50" id="experience">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">工作经验</h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-xl">上海历影数字科技有限公司</h3>
                <span className="text-gray-500">2024.09 - 2025.01</span>
              </div>
              <ul className="space-y-2 text-gray-600 list-disc pl-5">
                <li>主导VR古籍修复游戏UI设计，优化触控手势交互，体验时长提升35%</li>
                <li>运用AI工具（Midjourney+SD）生成品牌视觉资源，显著缩短设计周期</li>
                <li>设计200㎡智能财经展厅动态墙面系统，打造互动屏幕界面及展示内容</li>
                <li>主导VR数字展厅可视化设计，建立统一规范，效率提升70%</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-xl">上海艾融电子信息有限公司</h3>
                <span className="text-gray-500">2023.04 - 2024.09</span>
              </div>
              <ul className="space-y-2 text-gray-600 list-disc pl-5">
                <li>主导「兴享惠」小程序及「兴魔方」PaaS平台UI设计，实现跨端统一</li>
                <li>优化产品信息架构与交互流程，提升多端操作效率与体验一致性</li>
                <li>搭建UI组件库，协同产品研发完成落地，确保设计质量</li>
                <li>迭代核心功能界面，优化可视化呈现，提升业务转化与用户体验</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-xl">软通动力信息技术（集团）股份有限公司</h3>
                <span className="text-gray-500">2020.04 - 2023.03</span>
              </div>
              <ul className="space-y-2 text-gray-600 list-disc pl-5">
                <li>主导阿里无影云桌面UI设计，输出多端规范手册，实现90%+还原度</li>
                <li>构建云服务设计体系，搭建Sketch组件库，降低30%协作成本</li>
                <li>优化云平台功能及引导机制，提升复杂场景的操作体验</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-xl">拼多多</h3>
                <span className="text-gray-500">2018.03 - 2019.06</span>
              </div>
              <ul className="space-y-2 text-gray-600 list-disc pl-5">
                <li>设计首页活动及商品详情页，提升活动参与度15%-20%</li>
                <li>优化商品主图及详情页，提升点击率及转化率</li>
                <li>设计大型活动主视觉，输出全套营销物料，覆盖5000万+用户</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-xl">上海九象网络科技有限公司</h3>
                <span className="text-gray-500">2012.07 - 2018.02</span>
              </div>
              <ul className="space-y-2 text-gray-600 list-disc pl-5">
                <li>主导【菜谱大全】APP全流程设计，从需求分析到界面规范输出</li>
                <li>负责【品味点评】APP设计，确保产品视觉及体验统一</li>
                <li>优化【不二街】O2O后台系统，提升商户端操作体验</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 md:px-8 relative" id="projects">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 opacity-50"></div>
        <div className="max-w-7xl mx-auto relative">
          <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">项目经验</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col">
                <div 
                  className="h-48 bg-gray-100 relative overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(project.image)}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={338}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    quality={75}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                      点击查看详情
                    </span>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-white to-gray-50 flex-grow">
                  <h3 className="font-bold text-xl mb-3 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-95 z-50 overflow-y-auto"
          onClick={handleModalClick}
        >
          <button 
            className="fixed top-4 right-4 text-white hover:text-gray-300 transition-colors z-50 cursor-pointer"
            onClick={() => {
              setSelectedImage(null);
              setScale(1);
              setPosition({ x: 0, y: 0 });
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="min-h-screen w-full flex items-start justify-center">
            <div 
              className="w-[1000px] relative mt-8"
              onWheel={handleWheel}
              onMouseDown={handleDragStart}
              onMouseMove={handleDragMove}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              style={{
                cursor: isDragging ? 'grabbing' : 'grab'
              }}
            >
              <Image
                src={selectedImage}
                alt="Project preview"
                width={1000}
                height={2000}
                className="w-full object-contain select-none"
                quality={85}
                priority
                draggable={false}
                loading="eager"
                style={{
                  transform: `scale(${scale})`,
                  transformOrigin: 'top center',
                  transition: isDragging ? 'none' : 'transform 0.1s ease-out',
                }}
              />
            </div>
            <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-4 py-2 rounded-full">
              按住 Ctrl + 滚轮缩放，直接滚动查看图片
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-blue-50 via-white to-indigo-50" id="contact">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">联系我</h2>
          <p className="text-gray-600 mb-12">
            期待能有机会和您详细交流，了解更多合作机会
          </p>
          <div className="inline-flex flex-col md:flex-row justify-center items-center gap-6 bg-white px-8 py-6 rounded-lg shadow-sm">
            <a 
              href="tel:19521314815"
              className="flex items-center gap-3 text-black hover:text-gray-600 transition-colors px-4 py-2 rounded-full hover:bg-gray-50"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>19521314815</span>
            </a>
            <span className="hidden md:inline text-gray-300">|</span>
            <a 
              href="mailto:alice_wang_2018@163.com" 
              className="flex items-center gap-3 text-black hover:text-gray-600 transition-colors px-4 py-2 rounded-full hover:bg-gray-50"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <span>alice_wang_2018@163.com</span>
            </a>
            <span className="hidden md:inline text-gray-300">|</span>
            <a 
              href={getAssetPath('/WangNaResume0211.pdf')}
              className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors px-4 py-2 rounded-full hover:bg-blue-50"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="12" y1="18" x2="12" y2="12"/>
                <line x1="9" y1="15" x2="15" y2="15"/>
              </svg>
              <span>下载简历</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
