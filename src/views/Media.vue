<template>
  <section id="media" class="min-h-screen py-20 px-4">
    <div class="container mx-auto">
      <h2 class="hero-title text-4xl mb-16">媒体资料</h2>
      
      <!-- 主要报告下载 -->
      <div class="glass-effect p-12 mb-12 relative overflow-hidden">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div class="space-y-6 md:w-1/2">
            <h3 class="text-3xl font-bold gradient-text">2025年度白皮书</h3>
            <p class="text-gray-400 text-lg">深度解析行业趋势，洞察未来发展方向</p>
            <button class="px-8 py-4 bg-white text-gray-900 rounded-full font-bold hover:bg-opacity-90 transition-all flex items-center space-x-2">
              <span>下载完整报告</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
              </svg>
            </button>
          </div>
          <div class="md:w-1/3 mt-8 md:mt-0">
            <div class="glass-effect aspect-[3/4] rounded-lg flex items-center justify-center">
              <div class="text-4xl font-bold gradient-text">报告预览</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 其他资料卡片 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="glass-effect p-8 hover:scale-105 transition-all cursor-pointer">
          <div class="flex items-start space-x-4">
            <div class="p-4 rounded-full bg-white bg-opacity-10">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold">发布会回放</h3>
              <p class="text-gray-400 mt-2">完整发布会视频与精彩集锦</p>
              <span class="inline-block mt-4 text-accent-color">观看视频 →</span>
            </div>
          </div>
        </div>

        <div class="glass-effect p-8 hover:scale-105 transition-all cursor-pointer">
          <div class="flex items-start space-x-4">
            <div class="p-4 rounded-full bg-white bg-opacity-10">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold">数据图表集</h3>
              <p class="text-gray-400 mt-2">高清可视化图表与解读</p>
              <span class="inline-block mt-4 text-accent-color">查看详情 →</span>
            </div>
          </div>
        </div>

        <div class="glass-effect p-8 hover:scale-105 transition-all cursor-pointer">
          <div class="flex items-start space-x-4">
            <div class="p-4 rounded-full bg-white bg-opacity-10">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold">新闻资料包</h3>
              <p class="text-gray-400 mt-2">媒体素材与新闻通稿</p>
              <span class="inline-block mt-4 text-accent-color">下载资料 →</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 媒体联系卡片 -->
      <div class="glass-effect p-8 mt-12">
        <h3 class="text-2xl font-bold mb-6">媒体联系方式</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 class="text-xl mb-4">媒体咨询</h4>
            <div class="space-y-3">
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-accent-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span>media@realestate100.com</span>
              </div>
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-accent-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span>+86 10-12345678</span>
              </div>
            </div>
          </div>
          <div>
            <h4 class="text-xl mb-4">投资者关系</h4>
            <div class="space-y-3">
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-accent-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span>investor@realestate100.com</span>
              </div>
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-accent-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span>+86 10-87654321</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 常见问题 -->
      <div class="mt-16">
        <h3 class="text-2xl font-bold mb-8">常见问题</h3>
        <div class="space-y-4">
          <div class="glass-effect p-6 rounded-xl" v-for="(faq, index) in faqs" :key="index">
            <h4 class="text-lg font-semibold mb-2">{{ faq.question }}</h4>
            <p class="text-gray-400">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MediaPage',
  setup() {
    const faqs = [
      {
        question: '如何获取完整的百强企业排名报告？',
        answer: '您可以在本页面顶部下载完整的《2025年度白皮书》，里面包含详细的排名数据和分析报告。'
      },
      {
        question: '发布会有回放视频吗？',
        answer: '是的，我们提供完整的发布会视频回放，包括主题演讲和专家讨论环节，可点击"发布会回放"卡片查看。'
      },
      {
        question: '媒体可以使用报告中的图表吗？',
        answer: '可以，媒体可以使用我们提供的图表资源，请在使用时注明"数据来源：2025中国房地产百强企业"。'
      },
      {
        question: '如何申请媒体采访？',
        answer: '请通过媒体咨询邮箱联系我们的媒体团队，说明您的采访需求，我们会尽快回复安排。'
      }
    ]
    
    return {
      faqs
    }
  }
}
</script> 