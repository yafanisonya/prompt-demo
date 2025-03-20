# Vue 房地产百强企业网站

这是一个使用Vue 3重构的房地产百强企业发布会网站。

## 项目特点

- 使用Vue 3框架开发
- 使用Vue Composition API
- 使用Vue Router进行路由管理
- 集成ECharts实现数据可视化
- 响应式设计，适配多种设备
- 使用Tailwind CSS进行样式开发

## ECharts显示问题修复

本项目重点解决了ECharts不显示的问题：

1. 创建了专门的EChart组件处理图表渲染
2. 实现了图表容器的正确尺寸设置和可见性控制
3. 添加了窗口大小变化和页面可见性监听
4. 使用ResizeObserver监控容器大小变化
5. 添加延迟初始化和重新调整大小的防抖机制
6. 提供了加载状态和错误处理

## 项目结构

```
vue-real-estate-ranking/
├── public/               # 静态资源
│   └── index.html        # HTML入口文件
├── src/                  # 源代码
│   ├── assets/           # 资源文件
│   │   ├── css/          # CSS样式
│   │   └── js/           # JavaScript脚本
│   ├── components/       # 组件
│   │   └── EChart.vue    # ECharts图表组件
│   ├── views/            # 页面视图
│   │   ├── Home.vue      # 首页
│   │   ├── Ranking.vue   # 百强榜单
│   │   ├── Data.vue      # 行业数据
│   │   └── Media.vue     # 媒体资料
│   ├── router/           # 路由配置
│   ├── App.vue           # 主组件
│   └── main.js           # 入口文件
├── babel.config.js       # Babel配置
├── tailwind.config.js    # Tailwind配置
├── vue.config.js         # Vue配置
└── package.json          # 项目依赖
```

## 安装与运行

### 安装依赖

```bash
npm install
```

### 开发模式运行

```bash
npm run serve
```

### 生产模式构建

```bash
npm run build
```

## 浏览器兼容性

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版) 