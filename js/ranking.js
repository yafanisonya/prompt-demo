// 企业详情图表
function initCompanyPerformanceChart() {
    const chart = echarts.init(document.getElementById('companyPerformanceChart'));
    chart.setOption({
        backgroundColor: 'transparent',
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            top: '10%',
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
        series: [
            {
                name: '营收',
                type: 'bar',
                data: [3200, 3800, 4200, 4500, 4850],
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#2C5F9D' },
                        { offset: 1, color: 'rgba(44, 95, 157, 0.3)' }
                    ])
                },
                emphasis: {
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#E6B980' },
                            { offset: 1, color: 'rgba(230, 185, 128, 0.3)' }
                        ])
                    }
                }
            }
        ]
    });
}

// 显示企业详情
function showCompanyDetail() {
    document.getElementById('companyDetail').classList.remove('hidden');
    document.getElementById('companyDetail').classList.add('flex');
    initCompanyPerformanceChart();
}

// 关闭企业详情
function closeCompanyDetail() {
    document.getElementById('companyDetail').classList.add('hidden');
    document.getElementById('companyDetail').classList.remove('flex');
}

// 添加页面滚动动画
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                entry.target.classList.add('slide-up');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.glass-effect').forEach(el => {
        el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
        observer.observe(el);
    });
}

// 添加搜索功能
function initSearch() {
    const searchInput = document.querySelector('input[type="text"]');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        // 实现搜索逻辑
    });
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initSearch();
}); 