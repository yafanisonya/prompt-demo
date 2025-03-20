class DataInsightCharts {
    constructor() {
        this.charts = {};
        this.chartContainers = {
            region: this.checkContainer('regionPieChart'),
            scale: this.checkContainer('scalePieChart'),
            growth: this.checkContainer('growthLineChart')
        };
        
        // 增加渲染完成标记
        this.renderedCharts = new Set();
        
        // 使用双重初始化保障
        this.initializeWithRetry(0);
        setTimeout(() => this.initializeWithRetry(0), 1000);
        this.bindEvents();
    }

    checkContainer(id) {
        const el = document.getElementById(id);
        if (el) {
            // 强制显示容器元素
            el.style.opacity = '1';
            el.style.visibility = 'visible';
            el.style.height = el.dataset.initHeight || '400px'; // 保持初始高度
        }
        return el && el.offsetParent !== null ? el : null;
    }

    initializeWithRetry(attempt) {
        if (Object.values(this.chartContainers).every(Boolean)) {
            this.initCharts();
        } else if (attempt < 3) {
            console.log(`第${attempt + 1}次重试初始化`);
            setTimeout(() => this.initializeWithRetry(attempt + 1), 500 * (attempt + 1));
        } else {
            console.error('图表容器最终未找到:', Object.entries(this.chartContainers)
                .filter(([_,v]) => !v).map(([k]) => k));
        }
    }

    initCharts() {
        try {
            if (this.chartContainers.region && !this.renderedCharts.has('region')) {
                this.regionChart = echarts.init(this.chartContainers.region);
                
                // 强制重设尺寸
                setTimeout(() => {
                    this.regionChart.resize();
                    this.chartContainers.region.style.opacity = '1';
                }, 50);

                const regionOption = {
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
                        data: ['总投资额', '同比增长'],
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
                        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                        axisLabel: { color: '#fff' },
                        axisLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } }
                    }],
                    yAxis: [{
                        type: 'value',
                        name: '投资额(亿元)',
                        nameTextStyle: { color: '#fff' },
                        axisLabel: { color: '#fff' },
                        splitLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } }
                    }, {
                        type: 'value',
                        name: '同比增长(%)',
                        nameTextStyle: { color: '#fff' },
                        axisLabel: { color: '#fff' },
                        splitLine: { show: false }
                    }],
                    series: [{
                        name: '总投资额',
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
                        data: [1200, 1320, 1500, 1390, 1620, 1820, 1960, 2120, 2280, 2440, 2600, 2850]
                    }, {
                        name: '同比增长',
                        type: 'line',
                        yAxisIndex: 1,
                        smooth: true,
                        lineStyle: {
                            width: 3,
                            color: '#E6B980'
                        },
                        data: [2.8, 3.2, 3.9, 3.5, 4.2, 4.8, 5.2, 5.8, 6.2, 6.8, 7.2, 7.8]
                    }],
                    animationDuration: 800,
                    animationEasing: 'elasticOut',
                    aria: { enabled: true }
                };
                
                this.regionChart.setOption(regionOption);
                this.renderedCharts.add('region');

                this.regionChart.on('rendered', () => {
                    this.chartContainers.region.classList.add('chart-visible');
                });
            }
            
            if (this.chartContainers.scale) {
                this.scaleChart = echarts.init(this.chartContainers.scale);
                // 区域分布柱状图
                this.charts.regionBar = echarts.init(document.getElementById('regionChart'));
                this.charts.regionBar.setOption({
                    backgroundColor: 'transparent',
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'value',
                        axisLabel: { color: '#fff' },
                        axisLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } }
                    },
                    yAxis: {
                        type: 'category',
                        data: ['华东', '华南', '华北', '西南', '东北', '西北'],
                        axisLabel: { color: '#fff' },
                        axisLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } }
                    },
                    series: [{
                        type: 'bar',
                        data: [4500, 3800, 3200, 2800, 2200, 1800],
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0,
                                color: '#2C5F9D'
                            }, {
                                offset: 1,
                                color: '#E6B980'
                            }])
                        }
                    }]
                });
            }
            
            if (this.chartContainers.growth) {
                this.growthChart = echarts.init(this.chartContainers.growth);
                // 融资结构分析
                this.charts.financingStructure = echarts.init(document.getElementById('financingChart'));
                this.charts.financingStructure.setOption({
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
                        name: '融资结构',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        center: ['40%', '50%'],
                        avoidLabelOverlap: false,
                        itemStyle: {
                            borderColor: '#0A1128',
                            borderWidth: 2
                        },
                        label: {
                            show: false
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '14',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            { value: 45, name: '银行贷款' },
                            { value: 30, name: '债券融资' },
                            { value: 25, name: '股权融资' }
                        ]
                    }]
                });
            }

            // 宏观经济关联
            this.charts.macroEconomy = echarts.init(document.getElementById('economySphere'));
            this.charts.macroEconomy.setOption({
                backgroundColor: 'transparent',
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross'
                    }
                },
                grid: {
                    right: '20%'
                },
                legend: {
                    data: ['GDP增速', '房地产投资', '商品房销售'],
                    textStyle: { color: '#fff' }
                },
                xAxis: {
                    type: 'category',
                    data: ['2019', '2020', '2021', '2022', '2023'],
                    axisLabel: { color: '#fff' },
                    axisLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } }
                },
                yAxis: [{
                    type: 'value',
                    name: '增长率(%)',
                    nameTextStyle: { color: '#fff' },
                    axisLabel: { color: '#fff' },
                    splitLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } }
                }],
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
            });
        } catch (error) {
            console.error('图表初始化失败:', error);
            Object.values(this.chartContainers).forEach(el => {
                if(el) el.innerHTML = '<div class="chart-error">数据加载失败</div>';
            });
        }
    }

    bindEvents() {
        window.addEventListener('resize', () => {
            Object.values(this.charts).forEach(chart => chart.resize());
        });

        // 时间维度切换
        document.querySelectorAll('[data-period]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const period = e.target.dataset.period;
                this.updatePeriodData(period);
            });
        });
    }

    updatePeriodData(period) {
        // 根据选择的时间维度更新数据
    }

    // 增加强制重绘方法
    forceRepaint() {
        Object.values(this.charts).forEach(chart => {
            chart.hideLoading();
            chart.resize();
            chart.dispatchAction({ type: 'showTip' });
        });
    }
}

// 修改初始化方式
document.addEventListener('DOMContentLoaded', () => {
    // 增加延迟确保容器加载完成
    setTimeout(() => {
        try {
            window.dataInsight = new DataInsightCharts();
        } catch (e) {
            console.error('数据洞察模块初始化失败:', e);
        }
    }, 300);
}); 