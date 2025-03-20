class DataVisualization {
    constructor() {
        this.charts = {};
        this.chartContainers = new WeakMap();
        this.initialized = false;
        
        // 修改：使用更短的加载超时时间
        this.loadingTimeout = 2000; // 改为2秒
        
        // 添加加载状态指示器
        this.addLoadingIndicator();
        
        // 修改：使用更可靠的初始化方式
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.delayedInit());
        } else {
            this.delayedInit();
        }
        console.log('DataVisualization 构造函数执行');
    }
    
    // 添加新方法
    addLoadingIndicator() {
        const loadingIndicator = document.createElement('div');
        loadingIndicator.id = 'chart-loading-indicator';
        loadingIndicator.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:rgba(0,0,0,0.7);color:white;padding:20px;border-radius:10px;z-index:9998;';
        loadingIndicator.innerHTML = '<p>数据加载中...</p>';
        document.body.appendChild(loadingIndicator);
        
        // 修改：缩短超时时间，添加加载完成后的清理
        setTimeout(() => {
            const indicator = document.getElementById('chart-loading-indicator');
            if (indicator) {
                if (!this.initialized) {
                    indicator.innerHTML += '<p>加载时间较长，请耐心等待...</p>';
                } else {
                    indicator.remove();
                }
            }
        }, 2000);
    }

    // 修改：添加移除加载指示器的方法
    removeLoadingIndicator() {
        const indicator = document.getElementById('chart-loading-indicator');
        if (indicator) {
            indicator.style.opacity = '0';
            setTimeout(() => indicator.remove(), 500);
        }
    }

    // 新增方法：延迟初始化
    delayedInit() {
        console.log('开始延迟初始化');
        setTimeout(() => {
            console.log('执行图表初始化');
            this.initCharts();
            setTimeout(() => {
                console.log('执行图表重绘');
                this.resizeAllCharts();
            }, 200);
        }, 300);
    }

    initCharts() {
        try {
            // 确保所有图表容器都存在
            const chartIds = ['investmentChart', 'regionChart', 'financingChart', 'economySphere', 
                            'regionPieChart', 'scalePieChart', 'growthLineChart'];
            
            const missingCharts = chartIds.filter(id => !document.getElementById(id));
            if (missingCharts.length > 0) {
                console.warn('部分图表容器不存在:', missingCharts.join(', '));
            }

            // 初始化每个存在的图表
            chartIds.forEach(id => {
                const container = document.getElementById(id);
                if (container) {
                    this.initSingleChart(id, container);
                }
            });

            // 标记初始化完成
            this.initialized = true;
            this.bindEvents();
            
            // 移除加载指示器
            this.removeLoadingIndicator();
            
            // 延迟执行resize
            setTimeout(() => {
                this.resizeAllCharts();
                // 再次延迟执行resize确保图表显示
                setTimeout(() => this.resizeAllCharts(), 500);
            }, 200);
            
        } catch (error) {
            console.error('图表初始化过程中发生错误:', error);
            this.showGlobalError();
        }
    }

    // 新增：单个图表初始化方法
    initSingleChart(id, container) {
        try {
            if (this.charts[id]) {
                this.charts[id].dispose();
            }

            // 确保容器有明确的高度和可见性
            container.style.height = '400px';
            container.style.visibility = 'visible';
            container.style.opacity = '1';
            container.style.display = 'block';

            this.charts[id] = echarts.init(container, null, {
                renderer: 'canvas',
                useDirtyRect: false
            });

            // 根据图表ID设置不同的配置
            const option = this.getChartOption(id);
            if (option) {
                this.charts[id].setOption(option);
            }

            // 添加事件监听
            this.charts[id].on('rendered', () => {
                console.log(`图表 ${id} 渲染完成`);
                container.classList.add('chart-loaded');
            });

        } catch (err) {
            console.error(`初始化图表 ${id} 失败:`, err);
            container.innerHTML = '<p class="chart-error">图表加载失败</p>';
        }
    }

    // 新增：获取图表配置的方法
    getChartOption(id) {
        const options = {
            // 投资趋势分析
            investmentChart: {
                // 保持原有配置不变
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
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(44, 95, 157, 0.3)'
                        }, {
                            offset: 1,
                            color: 'rgba(44, 95, 157, 0.1)'
                        }])
                    },
                    data: [3200, 3800, 4200, 4500]
                }]
            },
            // 区域分布格局
            regionChart: {
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
                    ],
                    animation: {
                        duration: 2000,
                        easing: 'cubicOut'
                    },
                    graphic: [{
                        type: 'text',
                        style: {
                            text: '加载中...',
                            fontSize: 20,
                            fill: '#fff'
                        },
                        left: 'center',
                        top: 'center'
                    }]
                }]
            },
            // 融资结构分析
            financingChart: {
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
            },
            // 宏观经济关联
            economySphere: {
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
            },
            // 区域饼图
            regionPieChart: {
                // ... 区域饼图配置 ...
            },
            // 规模饼图
            scalePieChart: {
                // ... 规模饼图配置 ...
            },
            // 增长趋势图
            growthLineChart: {
                // ... 增长趋势图配置 ...
            }
        };

        return options[id];
    }

    // 添加新方法：重新调整所有图表大小
    resizeAllCharts() {
        if (!this.initialized) return;
        
        Object.values(this.charts).forEach(chart => {
            if (chart) {
                try {
                    chart.resize();
                } catch (e) {
                    console.warn('图表调整大小失败:', e);
                }
            }
        });
    }

    bindEvents() {
        // 窗口大小改变时重新调整图表大小
        window.addEventListener('resize', () => {
            if (!this.initialized) return;
            
            // 使用防抖处理resize事件
            if (this.resizeTimer) clearTimeout(this.resizeTimer);
            this.resizeTimer = setTimeout(() => {
                this.resizeAllCharts();
            }, 100);
        });
        
        // 添加：监听标签页可见性变化
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible' && this.initialized) {
                setTimeout(() => {
                    this.resizeAllCharts();
                }, 200);
            }
        });
    }

    // 增加容器状态检查方法
    checkContainerState() {
        if (!this.initialized) return;
        
        Object.keys(this.charts).forEach(key => {
            const chart = this.charts[key];
            if (!chart) return;
            
            try {
                const container = chart.getDom();
                if (!container || !container.isConnected) {
                    console.warn(`图表容器 ${key} 已从DOM移除`);
                }
            } catch (e) {
                console.warn(`检查图表容器 ${key} 状态失败:`, e);
            }
        });
    }
    
    // 新增方法：显示全局错误提示
    showGlobalError() {
        const errorContainer = document.createElement('div');
        errorContainer.className = 'global-chart-error';
        errorContainer.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:rgba(0,0,0,0.8);color:white;padding:20px;border-radius:10px;z-index:9999;';
        errorContainer.innerHTML = '<p>数据可视化加载失败，请刷新页面重试</p>';
        document.body.appendChild(errorContainer);
    }
}

// 修改：确保DOM加载完成后执行
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDataVisualization);
} else {
    initDataVisualization();
}

function initDataVisualization() {
    // 延迟初始化，确保DOM完全渲染
    setTimeout(() => {
        try {
            window.dataVisualization = new DataVisualization();
        } catch (e) {
            console.error('初始化数据可视化失败:', e);
        }
    }, 300);
}

// 增加全局错误处理
window.addEventListener('error', (e) => {
    if (e.target && e.target.className === 'echarts-canvas') {
        const container = e.target.closest('.chart-container');
        if (container) {
            container.innerHTML = '<p class="chart-error">图表渲染异常</p>';
        }
    }
});