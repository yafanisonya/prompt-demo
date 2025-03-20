<template>
  <div ref="chartContainer" :style="{ height: height || '300px' }" class="echarts-container"></div>
</template>

<script>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import * as echarts from 'echarts'

export default {
  name: 'EChart',
  props: {
    options: {
      type: Object,
      required: true
    },
    height: {
      type: String,
      default: '300px'
    },
    chartId: {
      type: String,
      required: true
    }
  },
  emits: ['rendered', 'error'],
  setup(props, { emit }) {
    const chartContainer = ref(null)
    let chartInstance = null

    const initChart = () => {
      if (!chartContainer.value) return

      try {
        chartInstance = echarts.init(chartContainer.value)
        chartInstance.setOption(props.options)
        emit('rendered', chartInstance)
      } catch (error) {
        emit('error', { chartId: props.chartId, message: error.message })
      }
    }

    onMounted(() => {
      initChart()
      window.addEventListener('resize', () => chartInstance?.resize())
    })

    onUnmounted(() => {
      chartInstance?.dispose()
      window.removeEventListener('resize', () => chartInstance?.resize())
    })

    watch(() => props.options, (newOptions) => {
      chartInstance?.setOption(newOptions)
    }, { deep: true })

    return {
      chartContainer
    }
  }
}
</script>

<style scoped>
.echarts-container {
  width: 100%;
}
</style>