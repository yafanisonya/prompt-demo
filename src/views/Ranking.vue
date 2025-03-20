<template>
  <section id="ranking" class="min-h-screen py-20 px-4 relative">
    <!-- 背景装饰 -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 right-1/4 w-96 h-96 hero-gradient opacity-30"></div>
      <div class="absolute bottom-1/4 left-1/4 w-96 h-96 hero-gradient opacity-30"></div>
    </div>

    <div class="container mx-auto relative">
      <div class="text-center mb-16">
        <h2 class="hero-title text-4xl mb-4">百强企业榜单</h2>
        <p class="text-gray-400 max-w-2xl mx-auto">基于企业规模、盈利能力、发展速度等多维度评估，遴选出引领行业发展的标杆企业</p>
      </div>

      <!-- 榜单切换标签 -->
      <div class="flex justify-center mb-12">
        <div class="glass-effect rounded-full p-1 inline-flex space-x-2">
          <button 
            :class="[
              'px-6 py-2 rounded-full transition-colors',
              currentRanking === 'comprehensive' ? 'bg-white bg-opacity-10 text-white' : 'hover:bg-white hover:bg-opacity-5'
            ]"
            @click="setRanking('comprehensive')"
          >
            综合排名
          </button>
          <button 
            :class="[
              'px-6 py-2 rounded-full transition-colors',
              currentRanking === 'scale' ? 'bg-white bg-opacity-10 text-white' : 'hover:bg-white hover:bg-opacity-5'
            ]"
            @click="setRanking('scale')"
          >
            规模排名
          </button>
          <button 
            :class="[
              'px-6 py-2 rounded-full transition-colors',
              currentRanking === 'growth' ? 'bg-white bg-opacity-10 text-white' : 'hover:bg-white hover:bg-opacity-5'
            ]"
            @click="setRanking('growth')"
          >
            增长排名
          </button>
          <button 
            :class="[
              'px-6 py-2 rounded-full transition-colors',
              currentRanking === 'efficiency' ? 'bg-white bg-opacity-10 text-white' : 'hover:bg-white hover:bg-opacity-5'
            ]"
            @click="setRanking('efficiency')"
          >
            效率排名
          </button>
        </div>
      </div>

      <!-- 添加搜索功能 -->
      <div class="max-w-xl mx-auto mb-12">
        <div class="glass-effect rounded-full p-2 flex items-center">
          <input 
            type="text" 
            placeholder="搜索企业名称..." 
            class="bg-transparent border-none outline-none px-4 py-2 w-full text-white placeholder-gray-400"
            v-model="searchQuery"
          >
          <button class="p-2 hover:bg-white hover:bg-opacity-10 rounded-full transition-colors" @click="searchCompany">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- 榜单展示区 -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <!-- 左侧评选维度 -->
        <div class="lg:col-span-3 space-y-6">
          <div class="glass-effect p-8 rounded-2xl">
            <h3 class="text-xl font-bold mb-6 gradient-text">评选维度</h3>
            <div class="space-y-4">
              <div class="relative pl-8">
                <div class="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary-color to-accent-color"></div>
                <div>
                  <h4 class="font-semibold">规模效益</h4>
                  <p class="text-sm text-gray-400">年度营收与资产规模</p>
                </div>
              </div>
              <div class="relative pl-8">
                <div class="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary-color to-accent-color opacity-80"></div>
                <div>
                  <h4 class="font-semibold">盈利能力</h4>
                  <p class="text-sm text-gray-400">利润率与投资回报</p>
                </div>
              </div>
              <div class="relative pl-8">
                <div class="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary-color to-accent-color opacity-60"></div>
                <div>
                  <h4 class="font-semibold">发展速度</h4>
                  <p class="text-sm text-gray-400">增长率与扩张能力</p>
                </div>
              </div>
              <div class="relative pl-8">
                <div class="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary-color to-accent-color opacity-40"></div>
                <div>
                  <h4 class="font-semibold">运营效率</h4>
                  <p class="text-sm text-gray-400">资产周转与管理水平</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 榜单概览 -->
          <div class="glass-effect p-8 rounded-2xl">
            <div class="space-y-4">
              <div class="flex justify-between items-center">
                <span class="text-gray-400">入榜门槛</span>
                <span class="text-xl font-bold gradient-text">50亿元</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-400">平均规模</span>
                <span class="text-xl font-bold gradient-text">280亿元</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-400">累计营收</span>
                <span class="text-xl font-bold gradient-text">2.8万亿</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 右侧3D展示区 -->
        <div class="lg:col-span-9">
          <div class="glass-effect p-8 rounded-2xl h-[600px] relative overflow-hidden">
            <!-- 榜单表格 -->
            <div class="absolute inset-0 p-8 overflow-auto">
              <table class="w-full">
                <thead>
                  <tr>
                    <th class="py-3 text-left text-sm font-medium text-gray-300">排名</th>
                    <th class="py-3 text-left text-sm font-medium text-gray-300">企业名称</th>
                    <th class="py-3 text-right text-sm font-medium text-gray-300">营收（亿元）</th>
                    <th class="py-3 text-right text-sm font-medium text-gray-300">同比增长</th>
                    <th class="py-3 text-right text-sm font-medium text-gray-300">排名变化</th>
                    <th class="py-3 text-center text-sm font-medium text-gray-300">操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr 
                    v-for="(company, index) in filteredCompanies" 
                    :key="company.id"
                    class="border-b border-white border-opacity-10 hover:bg-white hover:bg-opacity-5 transition-colors"
                  >
                    <td class="py-4">
                      <div class="flex items-center">
                        <div class="w-8 h-8 rounded-lg bg-gradient-to-r from-primary-color to-accent-color flex items-center justify-center text-sm font-bold">
                          {{ index + 1 }}
                        </div>
                      </div>
                    </td>
                    <td class="py-4 font-medium">{{ company.name }}</td>
                    <td class="py-4 text-right">{{ company.revenue }}</td>
                    <td class="py-4 text-right" :class="{'text-green-400': company.growth > 0, 'text-red-400': company.growth < 0}">
                      {{ company.growth > 0 ? '+' : '' }}{{ company.growth }}%
                    </td>
                    <td class="py-4 text-right">
                      <span v-if="company.rankChange > 0" class="text-green-400">↑ {{ company.rankChange }}</span>
                      <span v-else-if="company.rankChange < 0" class="text-red-400">↓ {{ Math.abs(company.rankChange) }}</span>
                      <span v-else>-</span>
                    </td>
                    <td class="py-4 text-center">
                      <button 
                        class="text-sm text-accent-color hover:underline"
                        @click="showCompanyDetail(company)"
                      >
                        查看详情
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- 底部数据分析 -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div class="glass-effect p-6 rounded-2xl">
          <h4 class="text-lg font-semibold mb-4">区域分布</h4>
          <EChart 
            chart-id="regionPieChart" 
            :options="regionPieChartOptions" 
            height="200px"
          />
        </div>
        <div class="glass-effect p-6 rounded-2xl">
          <h4 class="text-lg font-semibold mb-4">规模分布</h4>
          <EChart 
            chart-id="scalePieChart" 
            :options="scalePieChartOptions" 
            height="200px"
          />
        </div>
        <div class="glass-effect p-6 rounded-2xl">
          <h4 class="text-lg font-semibold mb-4">增长趋势</h4>
          <EChart 
            chart-id="growthLineChart" 
            :options="growthLineChartOptions" 
            height="200px"
          />
        </div>
      </div>

      <!-- 企业详情弹窗 -->
      <div v-if="showDetail" class="fixed inset-0 bg-black bg-opacity-50 z-50 backdrop-blur-sm flex items-center justify-center">
        <div class="glass-effect p-8 rounded-2xl w-full max-w-4xl relative">
          <button class="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors" @click="closeCompanyDetail">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div class="flex items-center space-x-4 mb-6">
                <div class="w-16 h-16 rounded-xl bg-gradient-to-r from-primary-color to-accent-color flex items-center justify-center text-2xl font-bold">
                  {{ selectedCompany ? selectedCompany.rank : '-' }}
                </div>
                <div>
                  <h3 class="text-2xl font-bold gradient-text">{{ selectedCompany ? selectedCompany.name : '' }}</h3>
                  <p class="text-gray-400">
                    <span v-if="selectedCompany && selectedCompany.rankChange > 0" class="text-green-400">排名上升 {{ selectedCompany.rankChange }} 位</span>
                    <span v-else-if="selectedCompany && selectedCompany.rankChange < 0" class="text-red-400">排名下降 {{ Math.abs(selectedCompany.rankChange) }} 位</span>
                    <span v-else>排名无变化</span>
                  </p>
                </div>
              </div>
              
              <div class="space-y-4">
                <div class="glass-effect p-4 rounded-xl">
                  <div class="text-sm text-gray-400">年度营收</div>
                  <div class="text-2xl font-bold gradient-text">{{ selectedCompany ? selectedCompany.revenue : '' }}</div>
                  <div class="text-sm" :class="{'text-green-400': selectedCompany && selectedCompany.growth > 0, 'text-red-400': selectedCompany && selectedCompany.growth < 0}">
                    {{ selectedCompany && selectedCompany.growth > 0 ? '↑' : '↓' }} {{ selectedCompany ? Math.abs(selectedCompany.growth) : 0 }}%
                  </div>
                </div>
                
                <div class="glass-effect p-4 rounded-xl">
                  <div class="text-sm text-gray-400">总资产</div>
                  <div class="text-2xl font-bold gradient-text">{{ selectedCompany ? selectedCompany.assets : '' }}</div>
                  <div class="text-sm" :class="{'text-green-400': selectedCompany && selectedCompany.assetGrowth > 0, 'text-red-400': selectedCompany && selectedCompany.assetGrowth < 0}">
                    {{ selectedCompany && selectedCompany.assetGrowth > 0 ? '↑' : '↓' }} {{ selectedCompany ? Math.abs(selectedCompany.assetGrowth) : 0 }}%
                  </div>
                </div>
                
                <div class="glass-effect p-4 rounded-xl">
                  <div class="text-sm text-gray-400">净利润</div>
                  <div class="text-2xl font-bold gradient-text">{{ selectedCompany ? selectedCompany.profit : '' }}</div>
                  <div class="text-sm" :class="{'text-green-400': selectedCompany && selectedCompany.profitGrowth > 0, 'text-red-400': selectedCompany && selectedCompany.profitGrowth < 0}">
                    {{ selectedCompany && selectedCompany.profitGrowth > 0 ? '↑' : '↓' }} {{ selectedCompany ? Math.abs(selectedCompany.profitGrowth) : 0 }}%
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div id="companyPerformanceChart" class="h-[300px]">
                <!-- 公司业绩图表将在选中公司后渲染 -->
                <EChart 
                  v-if="selectedCompany"
                  chart-id="companyPerformanceChart" 
                  :options="companyPerformanceChartOptions" 
                  height="300px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, computed, watch } from 'vue'
import EChart from '@/components/EChart.vue'
import { 
  getRegionPieChartOptions, 
  getScalePieChartOptions,
  getGrowthLineChartOptions
} from '@/assets/js/chartOptions.js'

export default {
  name: 'RankingPage',
  components: {
    EChart
  },
  setup() {
    // 当前显示的排名类型
    const currentRanking = ref('comprehensive')
    // 搜索查询
    const searchQuery = ref('')
    // 显示详情弹窗
    const showDetail = ref(false)
    // 选中的公司
    const selectedCompany = ref(null)

    // 图表配置
    const regionPieChartOptions = ref(getRegionPieChartOptions())
    const scalePieChartOptions = ref(getScalePieChartOptions())
    const growthLineChartOptions = ref(getGrowthLineChartOptions())
    const companyPerformanceChartOptions = ref({})

    // 模拟公司数据
    const companies = ref([
      {
        id: 1,
        rank: 1,
        name: '碧桂园控股',
        revenue: '4,850亿',
        growth: 12.3,
        rankChange: 1,
        assets: '12,680亿元',
        assetGrowth: 8.7,
        profit: '568亿元',
        profitGrowth: 15.2
      },
      {
        id: 2,
        rank: 2,
        name: '万科企业',
        revenue: '4,620亿',
        growth: 9.8,
        rankChange: -1,
        assets: '11,980亿元',
        assetGrowth: 7.2,
        profit: '538亿元',
        profitGrowth: 8.5
      },
      {
        id: 3,
        rank: 3,
        name: '中国恒大',
        revenue: '4,570亿',
        growth: -5.2,
        rankChange: 0,
        assets: '12,350亿元',
        assetGrowth: -3.5,
        profit: '492亿元',
        profitGrowth: -8.7
      },
      {
        id: 4,
        rank: 4,
        name: '融创中国',
        revenue: '3,980亿',
        growth: 8.5,
        rankChange: 2,
        assets: '10,250亿元',
        assetGrowth: 9.2,
        profit: '412亿元',
        profitGrowth: 11.3
      },
      {
        id: 5,
        rank: 5,
        name: '保利发展',
        revenue: '3,780亿',
        growth: 7.2,
        rankChange: 0,
        assets: '9,850亿元',
        assetGrowth: 6.8,
        profit: '385亿元',
        profitGrowth: 8.9
      }
    ])

    // 过滤后的公司列表
    const filteredCompanies = computed(() => {
      if (!searchQuery.value) return companies.value

      const query = searchQuery.value.toLowerCase()
      return companies.value.filter(company => 
        company.name.toLowerCase().includes(query)
      )
    })

    // 设置当前排名类型
    const setRanking = (rankingType) => {
      currentRanking.value = rankingType
      // 这里可以根据排名类型重新排序公司列表
    }

    // 搜索公司
    const searchCompany = () => {
      // 搜索功能已通过计算属性实现
      console.log('搜索查询:', searchQuery.value)
    }

    // 显示公司详情
    const showCompanyDetail = (company) => {
      selectedCompany.value = company
      showDetail.value = true
      
      // 更新公司业绩图表
      updateCompanyPerformanceChart(company)
    }

    // 关闭公司详情
    const closeCompanyDetail = () => {
      showDetail.value = false
    }

    // 更新公司业绩图表
    const updateCompanyPerformanceChart = (company) => {
      companyPerformanceChartOptions.value = {
        backgroundColor: 'transparent',
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['营收', '利润', '资产'],
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
          name: '金额(亿元)',
          nameTextStyle: { color: '#fff' },
          axisLabel: { color: '#fff' },
          splitLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } }
        },
        series: [{
          name: '营收',
          type: 'bar',
          data: [3800, 4000, 4200, 4500, 4850],
          itemStyle: {
            color: '#2C5F9D'
          }
        }, {
          name: '利润',
          type: 'bar',
          data: [420, 450, 480, 510, 568],
          itemStyle: {
            color: '#E6B980'
          }
        }, {
          name: '资产',
          type: 'line',
          data: [9500, 10200, 11000, 11800, 12680],
          lineStyle: {
            width: 3,
            color: '#4CAF50'
          },
          symbol: 'circle',
          symbolSize: 8
        }]
      }
    }

    return {
      currentRanking,
      searchQuery,
      showDetail,
      selectedCompany,
      companies,
      filteredCompanies,
      regionPieChartOptions,
      scalePieChartOptions,
      growthLineChartOptions,
      companyPerformanceChartOptions,
      setRanking,
      searchCompany,
      showCompanyDetail,
      closeCompanyDetail
    }
  }
}
</script> 