<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <header class="app-header">
      <div class="container">
        <h1 class="app-title">《追逐光的》设定集</h1>
        <nav class="main-nav">
          <RouterLink to="/" class="nav-link">首页</RouterLink>
          <RouterLink to="/plot" class="nav-link">剧情大纲</RouterLink>
          <RouterLink to="/characters" class="nav-link">人物设定</RouterLink>
          <RouterLink to="/world" class="nav-link">世界观</RouterLink>
          <RouterLink to="/timeline" class="nav-link">时间线</RouterLink>
        </nav>
      </div>
    </header>

    <main class="main-content">
      <RouterView />
    </main>

    <footer class="app-footer">
      <div class="container">
        <p>&copy; 2024 《追逐光的》设定展示系统</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: 'Microsoft YaHei', sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.app-header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.app-title {
  font-size: 2rem;
  font-weight: bold;
  color: transparent;
  margin: 20px 0;
  text-align: center;
  background: linear-gradient(45deg, #667eea, #764ba2);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.main-nav {
  display: flex;
  justify-content: center;
  gap: 30px;
  padding-bottom: 20px;
}

.nav-link {
  text-decoration: none;
  color: #34495e;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 25px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.nav-link:hover {
  color: #667eea;
  transform: translateY(-2px);
}

.nav-link.router-link-active {
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: white;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.main-content {
  flex: 1;
  padding: 40px 0;
}

.app-footer {
  background: rgba(0, 0, 0, 0.1);
  color: white;
  text-align: center;
  padding: 20px 0;
  margin-top: auto;
}

@media (max-width: 768px) {
  .main-nav {
    flex-wrap: wrap;
    gap: 15px;
  }

  .nav-link {
    padding: 8px 16px;
    font-size: 0.9rem;
  }

  .app-title {
    font-size: 1.5rem;
  }
}
</style>
