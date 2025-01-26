import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="font-bold text-xl">
              王娜
            </span>
            <div className="flex space-x-8">
              <a href="#experience" className="hover:text-gray-600">工作经验</a>
              <a href="#projects" className="hover:text-gray-600">项目经验</a>
              <a href="#contact" className="hover:text-gray-600">联系我</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-48 h-48 rounded-full bg-gray-200 flex-shrink-0 relative overflow-hidden">
            <img
              src="/portfolio-site/images/myphoto.jpg"
              alt="王娜的照片"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              你好，我是 王娜 👋
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              资深UI设计师 / 12年设计经验
            </p>
            <div className="text-gray-600 max-w-2xl space-y-4">
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
                <h3 className="font-bold text-xl">兴业数金</h3>
                <span className="text-gray-500">2023.04 - 至今</span>
              </div>
              <ul className="space-y-2 text-gray-600 list-disc pl-5">
                <li>负责兴享惠金融生活类小程序UI设计，提升用户体验和品牌辨识度</li>
                <li>负责B端兴魔方云化低代码开发平台的UI设计，优化操作体验，统一视觉语言</li>
                <li>设计推广活动物料，包括DM单和易拉宝，有效提升用户转化率</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-xl">阿里云计算</h3>
                <span className="text-gray-500">2020.04 - 2022.08</span>
              </div>
              <ul className="space-y-2 text-gray-600 list-disc pl-5">
                <li>负责无影云电脑B端产品的系统界面设计与icon动效</li>
                <li>主导云管控侧平台界面视觉与交互设计工作</li>
                <li>编写视觉交互设计规范文档，确保设计方案有效实施</li>
                <li>参与产品可用性测试，持续优化设计提升产品竞争力</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-xl">拼多多</h3>
                <span className="text-gray-500">2018.03 - 2019.06</span>
              </div>
              <ul className="space-y-2 text-gray-600 list-disc pl-5">
                <li>负责商品详情页和主图展示效果设计，提升用户购物体验</li>
                <li>设计推广图和运营活动，提高页面点击率和转化率</li>
                <li>参与品牌形象设计，为平台提供创新设计方案</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 md:px-8" id="projects">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">项目经验</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="h-48 bg-gray-100 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  兴享惠小程序截图
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">兴享惠金融小程序</h3>
                <p className="text-gray-600 mb-4">
                  负责小程序UI设计与运营活动设计，通过优化用户界面和视觉体验，提升了用户参与度和品牌认知度。重点优化了支付流程和会员服务界面，使用户操作更加流畅。
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="h-48 bg-gray-100 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  无影云电脑截图
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">阿里无影云电脑</h3>
                <p className="text-gray-600 mb-4">
                  为B端企业打造的云桌面服务，负责系统界面设计与交互规范制定。通过深入理解企业用户需求，设计了直观且高效的管理界面，显著提升了产品易用性。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50" id="contact">
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
              href="/portfolio-site/wangna-resume.pdf"
              className="flex items-center gap-3 text-black hover:text-gray-600 transition-colors px-4 py-2 rounded-full hover:bg-gray-50"
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
