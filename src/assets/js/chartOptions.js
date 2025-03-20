/**
 * 图表配置选项
 */

// 投资趋势分析图表配置
export const getInvestmentChartOptions = () => {
  return {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['投资额', '同比增长'],
      textStyle: { color: '#fff' }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      boundaryGap: false,
      data: ['Q1', 'Q2', 'Q3', 'Q4'],
      axisLabel: { color: '#fff' },
      axisLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } }
    }],
    yAxis: [{
      type: 'value',
      name: '投资额(亿元)',
      nameTextStyle: { color: '#fff' },
      axisLabel: { color: '#fff' },
      splitLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } }
    }],
    series: [{
      name: '投资额',
      type: 'line',
      smooth: true,
      lineStyle: {
        width: 3,
        color: '#2C5F9D'
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0,
            color: 'rgba(44, 95, 157, 0.3)'
          }, {
            offset: 1,
            color: 'rgba(44, 95, 157, 0.1)'
          }]
        }
      },
      data: [3200, 3800, 4200, 4500]
    }]
  }
}

// 区域分布图表配置
export const getRegionChartOptions = () => {
  return {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      right: 10,
      top: 'center',
      textStyle: { color: '#fff' }
    },
    series: [{
      name: '区域分布',
      type: 'pie',
      radius: ['40%', '70%'],
      center: ['40%', '50%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderColor: '#0A1128',
        borderWidth: 2
      },
      label: {
        show: true,
        color: '#fff'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '14',
          fontWeight: 'bold'
        }
      },
      data: [
        { value: 35, name: '华东地区' },
        { value: 25, name: '华南地区' },
        { value: 20, name: '华北地区' },
        { value: 15, name: '西部地区' },
        { value: 5, name: '其他地区' }
      ]
    }]
  }
}

// 融资结构分析图表配置
export const getFinancingChartOptions = () => {
  return {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['银行贷款', '债券融资', '股权融资'],
      textStyle: { color: '#fff' }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['2019', '2020', '2021', '2022', '2023'],
      axisLabel: { color: '#fff' },
      axisLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } }
    },
    yAxis: {
      type: 'value',
      axisLabel: { color: '#fff' },
      splitLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } }
    },
    series: [{
      name: '银行贷款',
      type: 'bar',
      stack: 'total',
      emphasis: {
        focus: 'series'
      },
      data: [320, 332, 301, 334, 390]
    }, {
      name: '债券融资',
      type: 'bar',
      stack: 'total',
      emphasis: {
        focus: 'series'
      },
      data: [120, 132, 101, 134, 90]
    }, {
      name: '股权融资',
      type: 'bar',
      stack: 'total',
      emphasis: {
        focus: 'series'
      },
      data: [220, 182, 191, 234, 290]
    }]
  }
}

// 宏观经济关联图表配置
export const getEconomyChartOptions = () => {
  return {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['GDP增速', '房地产投资', '商品房销售'],
      textStyle: { color: '#fff' }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['2019', '2020', '2021', '2022', '2023'],
      axisLabel: { color: '#fff' },
      axisLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } }
    },
    yAxis: {
      type: 'value',
      name: '增长率(%)',
      nameTextStyle: { color: '#fff' },
      axisLabel: { color: '#fff' },
      splitLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } }
    },
    series: [{
      name: 'GDP增速',
      type: 'line',
      smooth: true,
      data: [6.1, 2.3, 8.1, 3.0, 5.2],
      lineStyle: { width: 3 }
    }, {
      name: '房地产投资',
      type: 'line',
      smooth: true,
      data: [9.9, 7.0, 4.4, -10.0, -9.0],
      lineStyle: { width: 3 }
    }, {
      name: '商品房销售',
      type: 'line',
      smooth: true,
      data: [6.5, 3.2, 4.8, -26.7, -8.5],
      lineStyle: { width: 3 }
    }]
  }
}

// 区域饼图配置
export const getRegionPieChartOptions = () => {
  return {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    series: [{
      name: '区域分布',
      type: 'pie',
      radius: '70%',
      center: ['50%', '50%'],
      data: [
        { value: 40, name: '华东' },
        { value: 25, name: '华南' },
        { value: 18, name: '华北' },
        { value: 12, name: '西部' },
        { value: 5, name: '其他' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      },
      itemStyle: {
        borderColor: '#0A1128',
        borderWidth: 2
      },
      label: {
        color: '#fff'
      }
    }]
  }
}

// 规模饼图配置
export const getScalePieChartOptions = () => {
  return {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    series: [{
      name: '规模分布',
      type: 'pie',
      radius: '70%',
      center: ['50%', '50%'],
      data: [
        { value: 35, name: '超大型' },
        { value: 30, name: '大型' },
        { value: 25, name: '中型' },
        { value: 10, name: '小型' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      },
      itemStyle: {
        borderColor: '#0A1128',
        borderWidth: 2
      },
      label: {
        color: '#fff'
      }
    }]
  }
}

// 增长趋势图配置
export const getGrowthLineChartOptions = () => {
  return {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      data: ['2019', '2020', '2021', '2022', '2023'],
      axisLabel: { color: '#fff' },
      axisLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } }
    },
    yAxis: {
      type: 'value',
      axisLabel: { color: '#fff' },
      splitLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } }
    },
    series: [{
      data: [15, 8, 12, 6, 10],
      type: 'line',
      smooth: true,
      lineStyle: {
        width: 3,
        color: '#E6B980'
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0,
            color: 'rgba(230, 185, 128, 0.3)'
          }, {
            offset: 1,
            color: 'rgba(230, 185, 128, 0.1)'
          }]
        }
      }
    }]
  }
} 