document.addEventListener('DOMContentLoaded', () => {
    // 添加错误处理
    try {
        // 检查必要的DOM元素
        const checkElements = [
            'investmentChart', 'regionChart', 'financingChart', 'economySphere',
            'particleBackground', 'buildingMatrix'
        ];
        
        const missingElements = checkElements.filter(id => !document.getElementById(id));
        
        if (missingElements.length > 0) {
            console.error('缺少必要的DOM元素:', missingElements.join(', '));
            // 显示友好的错误信息
            const errorMsg = document.createElement('div');
            errorMsg.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:rgba(0,0,0,0.8);color:white;padding:20px;border-radius:10px;z-index:9999;';
            errorMsg.innerHTML = '<p>页面加载失败，请刷新重试</p>';
            document.body.appendChild(errorMsg);
            return;
        }
        
        // 确保图表容器可见
        checkElements.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.style.opacity = '1';
                el.style.visibility = 'visible';
                el.style.display = 'block';
                
                // 确保父容器也可见
                const parent = el.closest('.glass-effect');
                if (parent) {
                    parent.style.opacity = '1';
                    parent.style.visibility = 'visible';
                    parent.style.transform = 'none';
                }
            }
        });
        
        // 初始化所有组件 - 修改初始化顺序
        window.particleBackground = new ParticleBackground();
        window.buildingMatrix = new BuildingMatrix();
        
        // 先初始化动画，但排除图表容器
        window.animations = new PageAnimations();
        
        // 最后初始化图表相关组件
        setTimeout(() => {
            // DataVisualization 已在其自己的文件中初始化
            if (!window.dataVisualization) {
                window.dataVisualization = new DataVisualization();
            }
            
            // 延迟初始化数据洞察
            setTimeout(() => {
                if (!window.dataInsight) {
                    window.dataInsight = new DataInsightCharts();
                }
                
                // 强制重绘所有图表
                setTimeout(() => {
                    if (window.dataVisualization && window.dataVisualization.resizeAllCharts) {
                        window.dataVisualization.resizeAllCharts();
                    }
                }, 200);
            }, 300);
        }, 100);
        
    } catch (error) {
        console.error('初始化组件时发生错误:', error);
    }

    // 页面加载完成后移除加载动画
    window.addEventListener('load', () => {
        const loader = document.querySelector('.loader');
        if (loader) {
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => loader.remove(), 500);
            }, 1000);
        }
        
        // 页面完全加载后再次强制重绘图表
        setTimeout(() => {
            if (window.dataVisualization && window.dataVisualization.resizeAllCharts) {
                window.dataVisualization.resizeAllCharts();
            }
        }, 1500);
    });

    // 窗口大小改变时重新适应
    window.addEventListener('resize', () => {
        try {
            if (window.particleBackground && window.particleBackground.renderer) {
                window.particleBackground.renderer.setSize(window.innerWidth, window.innerHeight);
                window.particleBackground.camera.aspect = window.innerWidth / window.innerHeight;
                window.particleBackground.camera.updateProjectionMatrix();
            }
            
            if (window.buildingMatrix && window.buildingMatrix.renderer) {
                window.buildingMatrix.renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
                window.buildingMatrix.camera.aspect = window.innerWidth / window.innerHeight;
                window.buildingMatrix.camera.updateProjectionMatrix();
            }
        } catch (error) {
            console.error('调整窗口大小时发生错误:', error);
        }
    });
});