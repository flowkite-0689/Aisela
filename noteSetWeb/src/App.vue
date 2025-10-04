<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const sidebarCollapsed = ref(false)

const toggleSidebar = () => {
  sidebarCollapsed.value = !sidebarCollapsed.value
}

const navigationItems = [
  { to: '/', icon: '🏠', label: '首页', description: 'Overview' },
  { to: '/plot', icon: '📖', label: '剧情大纲', description: 'Plot' },
  { to: '/characters', icon: '👑', label: '人物设定', description: 'Characters' },
  { to: '/world', icon: '🌍', label: '世界观', description: 'World' },
  { to: '/timeline', icon: '📅', label: '时间线', description: 'Timeline' }
]
</script>

<template>
  <!-- <div id="app"> -->
    <!-- GitHub 风格的顶部导航栏 -->
    <header class="top-header">
      <div class="header-container">
        <div class="header-left">
          <button @click="toggleSidebar" class="sidebar-toggle">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path fillRule="evenodd" d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"></path>
            </svg>
          </button>
          <div class="logo">
            <span class="logo-icon">✨</span>
            <span class="logo-text">追逐光的设定集</span>
          </div>
        </div>
        <div class="header-right">
          <div class="breadcrumb">
            {{ $route.meta.title || '首页' }}
          </div>
        </div>
      </div>
    </header>

    <div class="app-body">
      <!-- 左侧导航栏 -->
      <aside :class="['sidebar', { collapsed: sidebarCollapsed }]">
        <nav class="sidebar-nav">
          <div class="nav-section">
            <RouterLink
              v-for="item in navigationItems"
              :key="item.to"
              :to="item.to"
              class="nav-item"
              :title="sidebarCollapsed ? item.label : ''"
            >
              <span class="nav-icon">{{ item.icon }}</span>
              <div v-show="!sidebarCollapsed" class="nav-content">
                <span class="nav-label">{{ item.label }}</span>
                <span class="nav-description">{{ item.description }}</span>
              </div>
            </RouterLink>
          </div>
        </nav>
      </aside>

      <!-- 主内容区域 -->
      <main class="main-content">
        <div class="content-wrapper">
          <RouterView />
        </div>
      </main>
    </div>
  <!-- </div> -->
</template>

<style scoped>
/* 全局样式重置 */
#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
  background-color: #f6f8fa;
  color: #24292f;
  overflow: hidden;
}

/* 顶部导航栏 - GitHub 风格 */
/* .top-header {
  background-color: #24292f;
  border-bottom: 1px solid #d0d7de;
  padding: 16px 0;
  z-index: 1000;
} */

.header-container {
  /* max-width: 1280px; */
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.sidebar-toggle {
  background: none;
  border: none;
  color: #f0f6fc;
  cursor: pointer;
  padding: 6px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  transition: background-color 0.2s;
}

.sidebar-toggle:hover {
  background-color: rgba(177, 186, 196, 0.12);
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #f0f6fc;
}

.logo-icon {
  font-size: 20px;
}

.logo-text {
  font-size: 16px;
  font-weight: 600;
}

.header-right {
  color: #8b949e;
}

.breadcrumb {
  font-size: 14px;
  color: #f0f6fc;
}

/* 应用主体 */
.app-body {
  flex: 1;
  display: flex;
  overflow: hidden;
}

/* 左侧边栏 - GitHub 风格 */
.sidebar {
  width: 280px;
  background-color: #ffffff;
  border-right: 1px solid #d0d7de;
  transition: width 0.2s ease;
  overflow: hidden;
}

.sidebar.collapsed {
  width: 60px;
}

.sidebar-nav {
  padding: 16px 0;
  height: 100%;
  overflow-y: auto;
}

.nav-section {
  padding: 0 8px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  text-decoration: none;
  color: #656d76;
  border-radius: 6px;
  margin-bottom: 2px;
  transition: all 0.2s ease;
  position: relative;
}

.nav-item:hover {
  background-color: #f3f4f6;
  color: #24292f;
}

.nav-item.router-link-active {
  background-color: #dbeafe;
  color: #0969da;
  font-weight: 600;
}

.nav-item.router-link-active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background-color: #fd7e14;
  border-radius: 0 2px 2px 0;
}

.nav-icon {
  font-size: 16px;
  min-width: 20px;
  text-align: center;
}

.nav-content {
  display: flex;
  flex-direction: column;
  gap: 1px;
  flex: 1;
  min-width: 0;
}

.nav-label {
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
}

.nav-description {
  font-size: 12px;
  color: #656d76;
  line-height: 1.2;
}

/* 主内容区域 */
.main-content {
  flex: 1;
  overflow: hidden;
  background-color: #ffffff;
}

.content-wrapper {
  height: 100%;
  overflow-y: auto;
  padding: 24px;
}

/* 滚动条样式 - GitHub 风格 */
.sidebar-nav::-webkit-scrollbar,
.content-wrapper::-webkit-scrollbar {
  width: 8px;
}

.sidebar-nav::-webkit-scrollbar-track,
.content-wrapper::-webkit-scrollbar-track {
  background: transparent;
}

.sidebar-nav::-webkit-scrollbar-thumb,
.content-wrapper::-webkit-scrollbar-thumb {
  background-color: #d0d7de;
  border-radius: 4px;
}

.sidebar-nav::-webkit-scrollbar-thumb:hover,
.content-wrapper::-webkit-scrollbar-thumb:hover {
  background-color: #afb8c1;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .sidebar {
    position: fixed;
    left: 0;
    top: 69px;
    height: calc(100vh - 69px);
    z-index: 999;
    transform: translateX(-100%);
    transition: transform 0.2s ease;
    width: 280px;
    box-shadow: 0 8px 24px rgba(31, 35, 40, 0.12);
  }

  .sidebar:not(.collapsed) {
    transform: translateX(0);
  }

  .main-content {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .header-container {
    padding: 0 12px;
  }

  .logo-text {
    display: none;
  }

  .content-wrapper {
    padding: 16px;
  }
}

/* 动画效果 */
.nav-item {
  transition: all 0.15s cubic-bezier(0.2, 0, 0.13, 1.5);
}

/* 深色主题支持 */
@media (prefers-color-scheme: dark) {
  #app {
    background-color: #0d1117;
    color: #f0f6fc;
  }

  .sidebar {
    background-color: #161b22;
    border-right-color: #30363d;
  }

  .nav-item {
    color: #8b949e;
  }

  .nav-item:hover {
    background-color: #21262d;
    color: #f0f6fc;
  }

  .nav-item.router-link-active {
    background-color: rgba(56, 139, 253, 0.15);
    color: #58a6ff;
  }

  .main-content {
    background-color: #0d1117;
  }

  .nav-description {
    color: #656d76;
  }
}

/* 焦点样式 */
.sidebar-toggle:focus,
.nav-item:focus {
  outline: 2px solid #0969da;
  outline-offset: -2px;
}
</style>
