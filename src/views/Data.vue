<template>
  <section id="data" class="min-h-screen py-20 px-4 relative">
    <!-- 背景装饰 -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div class="absolute top-1/3 right-1/4 w-[500px] h-[500px] hero-gradient opacity-20"></div>
      <div class="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] hero-gradient opacity-20"></div>
    </div>

    <div class="container mx-auto relative">
      <div class="text-center mb-16">
        <h2 class="hero-title text-4xl mb-4">行业数据洞察</h2>
        <p class="text-gray-400 max-w-2xl mx-auto">深度解析房地产行业发展趋势，多维度呈现市场动态</p>
      </div>

      <!-- 数据概览卡片 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div class="glass-effect p-6 hover-scale">
          <div class="flex items-start space-x-4">
            <div class="p-3 rounded-xl bg-white bg-opacity-10">
              <svg class="w-8 h-8 text-accent-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
              </svg>
            </div>
            <div>
              <div class="text-sm text-gray-400">总投资规模</div>
              <div class="text-2xl font-bold gradient-text mt-1">13.7万亿</div>
              <div class="text-sm text-green-400 flex items-center mt-1">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
                3.2%
              </div>
            </div>
          </div>
        </div>
        <div class="glass-effect p-6 hover-scale" style="animation-delay: 0.2s;">
          <div class="flex items-start space-x-4">
            <div class="p-3 rounded-xl bg-white bg-opacity-10">
              <svg class="w-8 h-8 text-accent-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
              </svg>
            </div>
            <div>
              <div class="text-sm text-gray-400">百强市占率</div>
              <div class="text-2xl font-bold gradient-text mt-1">46.8%</div>
              <div class="text-sm text-green-400 flex items-center mt-1">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
                2.1%
              </div>
            </div>
          </div>
        </div>
        <div class="glass-effect p-6 hover-scale" style="animation-delay: 0.4s;">
          <div class="flex items-start space-x-4">
            <div class="p-3 rounded-xl bg-white bg-opacity-10">
              <svg class="w-8 h-8 text-accent-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
              </svg>
            </div>
            <div>
              <div class="text-sm text-gray-400">平均利润率</div>
              <div class="text-2xl font-bold gradient-text mt-1">15.3%</div>
              <div class="text-sm text-green-400 flex items-center mt-1">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
                行业领先水平
              </div>
            </div>
          </div>
        </div>
        <div class="glass-effect p-6 hover-scale" style="animation-delay: 0.6s;">
          <div class="flex items-start space-x-4">
            <div class="p-3 rounded-xl bg-white bg-opacity-10">
              <svg class="w-8 h-8 text-accent-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
              </svg>
            </div>
            <div>
              <div class="text-sm text-gray-400">研发投入</div>
              <div class="text-2xl font-bold gradient-text mt-1">285亿</div>
              <div class="text-sm text-green-400 flex items-center mt-1">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
                18.5%
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 主要数据图表区域 -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <!-- 投资趋势分析 -->
        <div class="glass-effect p-8 rounded-2xl">
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-xl font-bold">投资趋势分析</h3>
            <div class="flex space-x-2">
              <button class="px-4 py-1 rounded-full text-sm bg-white bg-opacity-10 hover:bg-opacity-20 transition-colors">
                月度
              </button>
              <button class="px-4 py-1 rounded-full text-sm bg-white bg-opacity-10 hover:bg-opacity-20 transition-colors">
                季度
              </button>
              <button class="px-4 py-1 rounded-full text-sm bg-white bg-opacity-10 hover:bg-opacity-20 transition-colors">
                年度
              </button>
            </div>
          </div>
          <EChart
            chart-id="investmentChart"
            :options="investmentChartOptions"
            height="400px"
            @rendered="onChartRendered"
            @error="onChartError"
          />
        </div>

        <!-- 区域分布格局 -->
        <div class="glass-effect p-8 rounded-2xl">
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-xl font-bold">区域分布格局</h3>
            <div class="flex items-center space-x-4">
              <select class="bg-transparent border border-white border-opacity-20 rounded-lg px-3 py-1 text-sm">
                <option value="investment">投资额</option>
                <option value="projects">项目数</option>
                <option value="area">建筑面积</option>
              </select>
            </div>
          </div>
          <EChart
            chart-id="regionChart"
            :options="regionChartOptions"
            height="400px"
            @rendered="onChartRendered"
            @error="onChartError"
          />
        </div>
      </div>

      <!-- 融资结构与宏观经济 -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- 融资结构分析 -->
        <div class="glass-effect p-8 rounded-2xl">
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-xl font-bold">融资结构分析</h3>
            <div class="flex items-center space-x-2">
              <div class="w-3 h-3 rounded-full bg-primary-color"></div>
              <span class="text-sm text-gray-400">银行贷款</span>
              <div class="w-3 h-3 rounded-full bg-accent-color ml-4"></div>
              <span class="text-sm text-gray-400">债券融资</span>
              <div class="w-3 h-3 rounded-full bg-green-400 ml-4"></div>
              <span class="text-sm text-gray-400">股权融资</span>
            </div>
          </div>
          <EChart
            chart-id="financingChart"
            :options="financingChartOptions"
            height="400px"
            @rendered="onChartRendered"
            @error="onChartError"
          />
        </div>

        <!-- 宏观经济关联 -->
        <div class="glass-effect p-8 rounded-2xl">
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-xl font-bold">宏观经济关联</h3>
            <button class="text-sm text-accent-color hover:underline">
              查看详细分析
            </button>
          </div>
          <EChart
            chart-id="economyChart"
            :options="economyChartOptions"
            height="400px"
            @rendered="onChartRendered"
            @error="onChartError"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import EChart from '@/components/EChart.vue'
import { 
  getInvestmentChartOptions, 
  getRegionChartOptions, 
  getFinancingChartOptions, 
  getEconomyChartOptions 
} from '@/assets/js/chartOptions.js'
import { ref, onMounted, onBeforeUnmount } from 'vue'

export default {
  name: 'DataPage',
  components: {
    EChart
  },
  setup() {
    // 图表配置
    const investmentChartOptions = ref(getInvestmentChartOptions())
    const regionChartOptions = ref(getRegionChartOptions())
    const financingChartOptions = ref(getFinancingChartOptions())
    const economyChartOptions = ref(getEconomyChartOptions())
    
    // 图表渲染状态跟踪
    const renderedCharts = ref(new Set())
    const chartErrors = ref(new Map())
    
    // 视口可见性变化处理
    let visibilityHandler = null
    
    // 处理图表渲染完成事件
    const onChartRendered = (chartInstance) => {
      if (!chartInstance) return
      
      try {
        const chartId = chartInstance.getDom().parentElement.getAttribute('chart-id')
        console.log(`图表 ${chartId} 渲染完成`)
        renderedCharts.value.add(chartId)
        
        // 强制触发一次resize确保尺寸正确
        setTimeout(() => {
          chartInstance.resize()
        }, 50)
      } catch (err) {
        console.error('图表渲染回调错误:', err)
      }
    }
    
    // 处理图表错误
    const onChartError = (error) => {
      console.error('图表渲染错误:', error)
      if (error && error.chartId) {
        chartErrors.value.set(error.chartId, error.message || '未知错误')
      }
    }
    
    // 组件挂载
    onMounted(() => {
      // 监听文档可见性变化，当页面重新变为可见时刷新图表
      visibilityHandler = () => {
        if (document.visibilityState === 'visible') {
          console.log('页面重新可见，刷新图表')
          // 50ms延迟确保DOM完全就绪
          setTimeout(() => {
            // 这里EChart组件内部会处理resize
          }, 50)
        }
      }
      
      document.addEventListener('visibilitychange', visibilityHandler)
      
      // 首次载入时，强制触发窗口resize事件以确保图表正确渲染
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'))
      }, 300)
    })
    
    // 组件卸载前
    onBeforeUnmount(() => {
      // 清理事件监听
      if (visibilityHandler) {
        document.removeEventListener('visibilitychange', visibilityHandler)
      }
    })
    
    return {
      investmentChartOptions,
      regionChartOptions,
      financingChartOptions,
      economyChartOptions,
      onChartRendered,
      onChartError,
      renderedCharts,
      chartErrors
    }
  }
}
</script>