<template>
  <div class="app-wrapper">
    <!-- 导航栏 -->
    <nav class="nav-container fixed w-full top-0 z-50">
      <div class="container mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <div class="flex items-center space-x-4">
            <div class="w-10 h-10 rounded-full bg-gradient-to-r from-primary-color to-accent-color flex items-center justify-center">
              <span class="text-xl font-bold">百</span>
            </div>
            <h1 class="text-xl font-bold gradient-text">2025中国房地产百强</h1>
          </div>
          
          <div class="hidden md:flex items-center space-x-8">
            <router-link to="/" class="nav-link">首页</router-link>
            <router-link to="/ranking" class="nav-link">百强榜单</router-link>
            <router-link to="/data" class="nav-link">行业数据</router-link>
            <router-link to="/media" class="nav-link">媒体资料</router-link>
            <button class="primary-button">
              立即报名
            </button>
          </div>
          
          <!-- 移动端菜单按钮 -->
          <button @click="toggleMobileMenu" class="md:hidden p-2">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- 移动端菜单 -->
    <div v-if="mobileMenuOpen" class="fixed inset-0 z-50 bg-gradient-start bg-opacity-95 flex flex-col items-center justify-center">
      <button @click="toggleMobileMenu" class="absolute top-6 right-6">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
      <div class="flex flex-col items-center space-y-8 text-xl">
        <router-link to="/" @click="closeMobileMenu" class="py-2">首页</router-link>
        <router-link to="/ranking" @click="closeMobileMenu" class="py-2">百强榜单</router-link>
        <router-link to="/data" @click="closeMobileMenu" class="py-2">行业数据</router-link>
        <router-link to="/media" @click="closeMobileMenu" class="py-2">媒体资料</router-link>
        <button class="primary-button mt-4">
          立即报名
        </button>
      </div>
    </div>

    <!-- 页面内容 -->
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <!-- 页脚 -->
    <footer class="py-12 px-4 border-t border-white border-opacity-10">
      <div class="container mx-auto">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="text-center md:text-left mb-8 md:mb-0">
            <h3 class="text-xl font-bold gradient-text">中国房地产百强企业</h3>
            <p class="text-gray-400 mt-2">引领行业发展 · 共创美好未来</p>
          </div>
          <div class="flex space-x-8">
            <a href="#" class="text-gray-400 hover:text-white transition-colors">关于我们</a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">联系方式</a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">隐私政策</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      mobileMenuOpen: false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
      if (this.mobileMenuOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false
      document.body.style.overflow = 'auto'
    }
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style> 