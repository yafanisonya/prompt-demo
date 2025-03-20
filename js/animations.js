class PageAnimations {
    constructor() {
        this.init();
    }

    init() {
        // 平滑滚动
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        });

        // 页面元素渐入效果 - 修改为排除图表容器
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // 检查是否包含图表容器
                    if (!entry.target.querySelector('.chart-container')) {
                        entry.target.classList.add('fade-in');
                    } else {
                        // 对于包含图表的容器，只应用有限的动画效果
                        entry.target.style.opacity = '1';
                        // 确保图表容器可见
                        const chartContainers = entry.target.querySelectorAll('.chart-container');
                        chartContainers.forEach(container => {
                            container.style.opacity = '1';
                            container.style.visibility = 'visible';
                            container.style.display = 'block';
                        });
                        
                        // 延迟触发图表重绘
                        setTimeout(() => {
                            if (window.dataVisualization && window.dataVisualization.resizeAllCharts) {
                                window.dataVisualization.resizeAllCharts();
                            }
                        }, 100);
                    }
                }
            });
        }, {
            threshold: 0.1
        });

        // 修改：只对不包含图表的元素应用初始透明度
        document.querySelectorAll('.glass-effect').forEach(el => {
            if (!el.querySelector('.chart-container')) {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
            } else {
                // 确保包含图表的容器始终可见
                el.style.opacity = '1';
                el.style.transform = 'none';
            }
            observer.observe(el);
        });
    }
} 