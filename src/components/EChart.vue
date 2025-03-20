<template>
  <div 
    ref="chartContainer" 
    :class="['chart-container', { 'chart-visible': !loading, 'chart-error': error }]" 
    :style="{ height: height, width: width }"
  >
    <div v-if="loading" class="absolute inset-0 flex items-center justify-center text-white">
      <div class="flex flex-col items-center">
        <div class="spinner"></div>
        <div class="mt-2">数据加载中...</div>
      </div>
    </div>
    <div v-if="error" class="chart-error">{{ error }}</div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import { onMounted, onBeforeUnmount, ref, watch } from 'vue'

export default {
  name: 'EChart',
  props: {
    // 图表选项
    options: {
      type: Object,
      required: true
    },
    // 容器宽度
    width: {
      type: String,
      default: '100%'
    },
    // 容器高度
    height: {
      type: String,
      default: '400px'
    },
    // 是否自动调整大小
    autoResize: {
      type: Boolean,
      default: true
    },
    // 渲染器类型: 'canvas'或'svg'
    renderer: {
      type: String,
      default: 'canvas'
    },
    // 图表ID
    chartId: {
      type: String,
      required: true
    }
  },
  setup(props, { emit }) {
    const chartContainer = ref(null)
    const chartInstance = ref(null)
    const loading = ref(true)
    const error = ref(null)
    let resizeObserver = null
    let resizeTimeout = null

    // 初始化图表
    const initChart = () => {
      if (!chartContainer.value) return
      
      try {
        loading.value = true
        error.value = null
        
        // 设置容器样式，确保可见
        chartContainer.value.style.visibility = 'visible'
        chartContainer.value.style.opacity = '1'
        chartContainer.value.style.height = props.height || '400px'
        
        // 如果已经存在实例，先销毁
        if (chartInstance.value) {
          chartInstance.value.dispose()
        }
        
        // 新建图表实例
        chartInstance.value = echarts.init(chartContainer.value, null, { 
          renderer: props.renderer,
          devicePixelRatio: window.devicePixelRatio,
          // 强制使用 height/width 属性时候使用 !important
          width: 'auto',
          height: 'auto',
          useDirtyRect: false
        })
        
        // 设置图表选项
        chartInstance.value.setOption(props.options, true)
        
        // 图表渲染完成事件
        chartInstance.value.on('rendered', () => {
          loading.value = false
          emit('rendered', chartInstance.value)
        })
        
        // 设置超时检测
        setTimeout(() => {
          if (loading.value) {
            loading.value = false
            console.warn(`图表 ${props.chartId} 渲染超时，可能存在问题`)
          }
        }, 5000)
        
      } catch (err) {
        console.error(`初始化图表 ${props.chartId} 失败:`, err)
        error.value = '图表加载失败'
        loading.value = false
        emit('error', err)
      }
    }

    // 更新图表
    const updateChart = () => {
      if (!chartInstance.value) return
      
      try {
        // 设置图表新选项
        chartInstance.value.setOption(props.options, true)
      } catch (err) {
        console.error(`更新图表 ${props.chartId} 失败:`, err)
        error.value = '图表更新失败'
        emit('error', err)
      }
    }

    // 调整图表大小
    const resizeChart = () => {
      if (!chartInstance.value) return
      
      try {
        chartInstance.value.resize()
        emit('resize')
      } catch (err) {
        console.error(`调整图表 ${props.chartId} 大小失败:`, err)
      }
    }

    // 获取图表实例
    const getChartInstance = () => {
      return chartInstance.value
    }

    // 监听窗口大小变化
    const handleResize = () => {
      if (!props.autoResize) return
      
      // 使用防抖处理resize事件
      if (resizeTimeout) clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        resizeChart()
      }, 100)
    }

    // 在组件挂载后初始化
    onMounted(() => {
      // 使用异步操作，确保DOM元素已完全渲染
      setTimeout(initChart, 50)
      
      if (props.autoResize) {
        // 添加窗口尺寸变化监听
        window.addEventListener('resize', handleResize)
        
        // 使用ResizeObserver监控容器大小变化
        if (window.ResizeObserver && chartContainer.value) {
          resizeObserver = new ResizeObserver(() => {
            handleResize()
          })
          resizeObserver.observe(chartContainer.value)
        }
        
        // 监听视口变化
        document.addEventListener('visibilitychange', () => {
          if (document.visibilityState === 'visible') {
            setTimeout(resizeChart, 200)
          }
        })
      }
    })

    // 在组件卸载前销毁
    onBeforeUnmount(() => {
      // 移除事件监听
      window.removeEventListener('resize', handleResize)
      
      if (resizeObserver) {
        resizeObserver.disconnect()
        resizeObserver = null
      }
      
      // 销毁图表实例
      if (chartInstance.value) {
        try {
          chartInstance.value.dispose()
          chartInstance.value = null
        } catch (err) {
          console.error(`销毁图表 ${props.chartId} 失败:`, err)
        }
      }
    })

    // 监听选项变化，更新图表
    watch(() => props.options, () => {
      if (chartInstance.value) {
        updateChart()
      } else {
        initChart()
      }
    }, { deep: true })

    // 导出方法供父组件使用
    return {
      chartContainer,
      loading,
      error,
      getChartInstance,
      resizeChart
    }
  }
}
</script>

<style scoped>
.chart-container {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  transition: opacity 0.3s ease;
}

.spinner {
  width: 30px;
  height: 30px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: var(--accent-color);
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style> 