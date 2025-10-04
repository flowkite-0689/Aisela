<script setup lang="ts">
import { ref } from 'vue'

const projectStats = ref({
  stories: 2,
  characters: 8,
  worldElements: 12,
  timelineEvents: 23
})

const recentUpdates = ref([
  {
    type: 'character',
    title: '更新了洛瑟恩·暗星的背景设定',
    time: '2 天前',
    icon: '👑'
  },
  {
    type: 'plot',
    title: '完善了《新枝叶的故事》第三部剧情',
    time: '3 天前',
    icon: '📖'
  },
  {
    type: 'world',
    title: '添加了艾塞拉大陆的地理设定',
    time: '5 天前',
    icon: '🌍'
  },
  {
    type: 'timeline',
    title: '补充了星历243年的重要事件',
    time: '1 周前',
    icon: '📅'
  }
])

const quickLinks = ref([
  {
    title: '故事概览',
    description: '查看完整的故事结构和剧情发展',
    link: '/plot',
    icon: '📚',
    color: 'blue'
  },
  {
    title: '角色档案',
    description: '浏览所有角色的详细设定信息',
    link: '/characters',
    icon: '👥',
    color: 'green'
  },
  {
    title: '世界设定',
    description: '探索艾塞拉大陆的世界观设定',
    link: '/world',
    icon: '🗺️',
    color: 'purple'
  },
  {
    title: '历史时间线',
    description: '按时间顺序查看重要历史事件',
    link: '/timeline',
    icon: '⏰',
    color: 'orange'
  }
])
</script>

<template>
  <div class="home-view">
    <!-- 页面标题 -->
    <div class="page-header">
      <h1 class="page-title">
        <span class="title-icon">✨</span>
        追逐光的设定集
      </h1>
      <p class="page-description">
        一个关于成长、友谊、身份认同和救赎的奇幻世界设定集合
      </p>
    </div>

    <!-- 统计卡片 -->
    <div class="stats-section">
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon">📖</div>
          <div class="stat-content">
            <div class="stat-number">{{ projectStats.stories }}</div>
            <div class="stat-label">故事线</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">👑</div>
          <div class="stat-content">
            <div class="stat-number">{{ projectStats.characters }}</div>
            <div class="stat-label">角色</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">🌍</div>
          <div class="stat-content">
            <div class="stat-number">{{ projectStats.worldElements }}</div>
            <div class="stat-label">世界元素</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">📅</div>
          <div class="stat-content">
            <div class="stat-number">{{ projectStats.timelineEvents }}</div>
            <div class="stat-label">历史事件</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 主要内容区域 -->
    <div class="main-content">
      <!-- 快速链接 -->
      <section class="quick-links-section">
        <h2 class="section-title">
          <span class="title-icon">🚀</span>
          快速导航
        </h2>
        <div class="quick-links-grid">
          <RouterLink
            v-for="link in quickLinks"
            :key="link.link"
            :to="link.link"
            :class="['quick-link-card', `color-${link.color}`]"
          >
            <div class="card-icon">{{ link.icon }}</div>
            <div class="card-content">
              <h3 class="card-title">{{ link.title }}</h3>
              <p class="card-description">{{ link.description }}</p>
            </div>
            <div class="card-arrow">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path fillRule="evenodd" d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z"></path>
              </svg>
            </div>
          </RouterLink>
        </div>
      </section>

      <!-- 最近更新 -->
      <section class="recent-updates-section">
        <h2 class="section-title">
          <span class="title-icon">🔄</span>
          最近更新
        </h2>
        <div class="updates-list">
          <div
            v-for="update in recentUpdates"
            :key="update.title"
            class="update-item"
          >
            <div class="update-icon">{{ update.icon }}</div>
            <div class="update-content">
              <div class="update-title">{{ update.title }}</div>
              <div class="update-time">{{ update.time }}</div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- 项目介绍 -->
    <section class="project-intro">
      <div class="intro-card">
        <h2 class="intro-title">关于这个项目</h2>
        <div class="intro-content">
          <p>
            《追逐光的》是一个包含两个主要故事的奇幻设定集：《为了什么活着》和《新枝叶的故事》。
            这个世界讲述了在艾塞拉大陆上，魔族、精灵族和人类之间复杂关系的演变，
            以及跨越两代人的成长、爱情、友谊和救赎的故事。
          </p>
          <p>
            故事的核心围绕着洛瑟恩·暗星（魔王）与艾莉安·银叶（精灵公主）的禁忌之恋，
            以及他们的女儿瑟莉安·星叶/西里斯·弗拉尔从复仇到救赎的成长历程。
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
}

/* 页面标题 */
.page-header {
  text-align: center;
  margin-bottom: 32px;
  padding: 32px 0;
  border-bottom: 1px solid #d0d7de;
}

.page-title {
  font-size: 32px;
  font-weight: 600;
  color: #24292f;
  margin: 0 0 8px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.title-icon {
  font-size: 28px;
}

.page-description {
  font-size: 16px;
  color: #656d76;
  margin: 0;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.5;
}

/* 统计卡片 */
.stats-section {
  margin-bottom: 32px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

.stat-card {
  background: #ffffff;
  border: 1px solid #d0d7de;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.2s ease;
}

.stat-card:hover {
  border-color: #0969da;
  box-shadow: 0 3px 12px rgba(9, 105, 218, 0.12);
}

.stat-icon {
  font-size: 24px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f6f8fa;
  border-radius: 8px;
}

.stat-content {
  flex: 1;
}

.stat-number {
  font-size: 24px;
  font-weight: 600;
  color: #24292f;
  line-height: 1;
}

.stat-label {
  font-size: 14px;
  color: #656d76;
  margin-top: 4px;
}

/* 主要内容 */
.main-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 32px;
  margin-bottom: 32px;
}

/* 快速链接 */
.section-title {
  font-size: 20px;
  font-weight: 600;
  color: #24292f;
  margin: 0 0 16px 0;
  display: flex;
  align-items: center;
  gap: 8px;
}

.quick-links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
}

.quick-link-card {
  background: #ffffff;
  border: 1px solid #d0d7de;
  border-radius: 12px;
  padding: 20px;
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.2s ease;
  position: relative;
}

.quick-link-card:hover {
  border-color: #0969da;
  box-shadow: 0 3px 12px rgba(9, 105, 218, 0.12);
  transform: translateY(-1px);
}

.card-icon {
  font-size: 24px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  flex-shrink: 0;
}

.quick-link-card.color-blue .card-icon {
  background: #dbeafe;
  color: #0969da;
}

.quick-link-card.color-green .card-icon {
  background: #dcfce7;
  color: #16a34a;
}

.quick-link-card.color-purple .card-icon {
  background: #f3e8ff;
  color: #9333ea;
}

.quick-link-card.color-orange .card-icon {
  background: #fed7aa;
  color: #ea580c;
}

.card-content {
  flex: 1;
}

.card-title {
  font-size: 16px;
  font-weight: 600;
  color: #24292f;
  margin: 0 0 4px 0;
}

.card-description {
  font-size: 14px;
  color: #656d76;
  margin: 0;
  line-height: 1.4;
}

.card-arrow {
  color: #656d76;
  opacity: 0;
  transition: all 0.2s ease;
}

.quick-link-card:hover .card-arrow {
  opacity: 1;
  transform: translateX(4px);
}

/* 最近更新 */
.updates-list {
  background: #ffffff;
  border: 1px solid #d0d7de;
  border-radius: 12px;
  overflow: hidden;
}

.update-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border-bottom: 1px solid #d0d7de;
  transition: background-color 0.2s ease;
}

.update-item:last-child {
  border-bottom: none;
}

.update-item:hover {
  background-color: #f6f8fa;
}

.update-icon {
  font-size: 16px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f6f8fa;
  border-radius: 6px;
  flex-shrink: 0;
}

.update-content {
  flex: 1;
}

.update-title {
  font-size: 14px;
  font-weight: 500;
  color: #24292f;
  margin-bottom: 2px;
}

.update-time {
  font-size: 12px;
  color: #656d76;
}

/* 项目介绍 */
.project-intro {
  margin-bottom: 32px;
}

.intro-card {
  background: #ffffff;
  border: 1px solid #d0d7de;
  border-radius: 12px;
  padding: 24px;
}

.intro-title {
  font-size: 20px;
  font-weight: 600;
  color: #24292f;
  margin: 0 0 16px 0;
}

.intro-content p {
  font-size: 14px;
  color: #656d76;
  line-height: 1.6;
  margin: 0 0 12px 0;
}

.intro-content p:last-child {
  margin-bottom: 0;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .main-content {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .quick-links-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .page-header {
    padding: 24px 0;
  }

  .page-title {
    font-size: 24px;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .stat-card {
    padding: 16px;
  }

  .quick-link-card {
    padding: 16px;
  }

  .intro-card {
    padding: 20px;
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }

  .page-title {
    flex-direction: column;
    gap: 8px;
  }
}

/* 深色主题支持 */
@media (prefers-color-scheme: dark) {
  .page-title {
    color: #f0f6fc;
  }

  .page-description {
    color: #8b949e;
  }

  .stat-card,
  .quick-link-card,
  .updates-list,
  .intro-card {
    background: #161b22;
    border-color: #30363d;
  }

  .stat-card:hover,
  .quick-link-card:hover {
    border-color: #58a6ff;
    box-shadow: 0 3px 12px rgba(88, 166, 255, 0.12);
  }

  .stat-icon {
    background: #21262d;
  }

  .stat-number,
  .card-title,
  .section-title,
  .intro-title {
    color: #f0f6fc;
  }

  .stat-label,
  .card-description,
  .update-time,
  .intro-content p {
    color: #8b949e;
  }

  .update-item:hover {
    background-color: #21262d;
  }

  .update-icon {
    background: #21262d;
  }

  .update-title {
    color: #f0f6fc;
  }
}
</style>
