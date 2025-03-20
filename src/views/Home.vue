<template>
  <section id="main" class="min-h-screen relative overflow-hidden">
    <!-- 粒子背景（如需要） -->
    <div id="particleBackground" class="absolute top-0 left-0 w-full h-full"></div>
    
    <!-- 背景渐变效果 -->
    <div class="absolute top-1/4 left-1/4 w-96 h-96 hero-gradient"></div>
    <div class="absolute bottom-1/4 right-1/4 w-96 h-96 hero-gradient"></div>
    
    <div class="relative z-10 container mx-auto h-full flex items-center px-6">
      <div class="hero-text-container w-full md:w-3/5 space-y-8 pt-32">
        <div class="space-y-6">
          <div class="inline-block px-4 py-2 rounded-full bg-white bg-opacity-10 backdrop-blur-sm">
            <span class="text-sm font-medium">2024年度发布会</span>
          </div>
          <h2 class="hero-title">引领地产<br/>新纪元</h2>
          <h3 class="hero-subtitle">探索行业趋势 · 共创美好未来</h3>
          <p class="text-xl text-gray-300 max-w-2xl leading-relaxed">
            汇聚行业精英，解析市场趋势，共同探讨中国房地产行业的创新与可持续发展之路
          </p>
        </div>
        
        <div class="flex flex-wrap gap-4 pt-8">
          <button class="primary-button flex items-center space-x-2">
            <span>预约参会</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </button>
          <button class="secondary-button flex items-center space-x-2">
            <span>查看往期回顾</span>
          </button>
        </div>
        
        <!-- 关键数据展示 -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12">
          <div class="glass-effect p-4 text-center hover-scale" style="animation-delay: 0.1s;">
            <div class="text-3xl font-bold gradient-text">100+</div>
            <div class="text-sm text-gray-400 mt-1">参会企业</div>
          </div>
          <div class="glass-effect p-4 text-center hover-scale" style="animation-delay: 0.2s;">
            <div class="text-3xl font-bold gradient-text">50+</div>
            <div class="text-sm text-gray-400 mt-1">行业专家</div>
          </div>
          <div class="glass-effect p-4 text-center hover-scale" style="animation-delay: 0.3s;">
            <div class="text-3xl font-bold gradient-text">10+</div>
            <div class="text-sm text-gray-400 mt-1">主题论坛</div>
          </div>
          <div class="glass-effect p-4 text-center hover-scale" style="animation-delay: 0.4s;">
            <div class="text-3xl font-bold gradient-text">5000+</div>
            <div class="text-sm text-gray-400 mt-1">线上观众</div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 底部装饰线 -->
    <div class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-color to-transparent"></div>
  </section>
</template>

<script>
export default {
  name: 'HomePage',
  mounted() {
    // 实现粒子背景效果（如需要）
    this.initParticles()
  },
  methods: {
    initParticles() {
      // 如果需要实现粒子效果可在此处添加相关代码
    }
  }
}
</script> 