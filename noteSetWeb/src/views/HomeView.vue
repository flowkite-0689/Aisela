<script setup lang="ts">
import { ref } from 'vue'

const features = ref([
  {
    title: '剧情大纲',
    description: '完整的五幕剧情结构，从血色盟约到真相与救赎',
    icon: '📖',
    route: '/plot'
  },
  {
    title: '人物设定',
    description: '详细的主要角色设定，包括外貌、能力和背景故事',
    icon: '👑',
    route: '/characters'
  },
  {
    title: '世界观设定',
    description: '三大种族、力量体系、重要势力和地点介绍',
    icon: '🌍',
    route: '/world'
  },
  {
    title: '大事件时间线',
    description: '从星历元年到243年的重要历史事件',
    icon: '📅',
    route: '/timeline'
  }
])
</script>

<template>
  <div class="home-view">
    <div class="container">
      <section class="hero-section">
        <h1 class="hero-title">《追逐光的》</h1>
        <p class="hero-subtitle">一个关于身份、命运与救赎的奇幻故事</p>
        <div class="hero-description">
          <p>围绕魔族王子与精灵公主的禁忌之恋，以及他们的混血后代打破三族仇恨循环的成长历程。</p>
        </div>
      </section>

      <section class="features-section">
        <h2 class="section-title">设定内容</h2>
        <div class="features-grid">
          <router-link
            v-for="feature in features"
            :key="feature.title"
            :to="feature.route"
            class="feature-card"
          >
            <div class="feature-icon">{{ feature.icon }}</div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-description">{{ feature.description }}</p>
          </router-link>
        </div>
      </section>

      <section class="stats-section">
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number">5</div>
            <div class="stat-label">主要角色</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">3</div>
            <div class="stat-label">种族</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">243</div>
            <div class="stat-label">故事年份</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">15+</div>
            <div class="stat-label">重要事件</div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.home-view {
  min-height: calc(100vh - 200px);
  overflow-x: hidden;
}

.container {
  max-width: 95%;
  margin: 0 auto;
  padding: 0 40px;
}

.hero-section {
  text-align: center;
  padding: 80px 0;
  color: white;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: bold;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  background: linear-gradient(45deg, #fff, #f0f0f0);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: clamp(1.1rem, 3vw, 1.5rem);
  margin-bottom: 30px;
  opacity: 0.9;
  line-height: 1.4;
}

.hero-description {
  max-width: 600px;
  margin: 0 auto;
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  line-height: 1.6;
  opacity: 0.8;
  padding: 0 10px;
}

.section-title {
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  color: white;
  margin-bottom: 50px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.features-section {
  padding: 60px 0 80px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
  max-width: none;
}

.feature-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 35px 25px;
  border-radius: 20px;
  text-align: center;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s;
}

.feature-card:hover::before {
  left: 100%;
}

.feature-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  background: rgba(255, 255, 255, 1);
}

.feature-icon {
  font-size: clamp(2.5rem, 4vw, 3rem);
  margin-bottom: 20px;
  transition: transform 0.3s ease;
}

.feature-card:hover .feature-icon {
  transform: scale(1.1) rotate(5deg);
}

.feature-title {
  font-size: clamp(1.3rem, 2.5vw, 1.5rem);
  color: #2c3e50;
  margin-bottom: 15px;
  font-weight: bold;
}

.feature-description {
  color: #7f8c8d;
  line-height: 1.6;
  font-size: clamp(0.9rem, 2vw, 0.95rem);
}

.stats-section {
  padding: 40px 0 60px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 25px;
  max-width: none;
}

.stat-item {
  text-align: center;
  color: white;
  padding: 25px 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.stat-item:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-5px);
}

.stat-number {
  font-size: clamp(2.2rem, 4vw, 3rem);
  font-weight: bold;
  margin-bottom: 10px;
  background: linear-gradient(45deg, #fff, #f0f0f0);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.stat-label {
  font-size: clamp(1rem, 2vw, 1.1rem);
  opacity: 0.8;
}

/* 平板设备 */
@media (max-width: 1024px) {
  .container {
    padding: 0 30px;
  }

  .hero-section {
    padding: 60px 0;
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* 移动设备 */
@media (max-width: 768px) {
  .container {
    padding: 0 15px;
  }

  .hero-section {
    padding: 40px 0;
  }

  .hero-description {
    padding: 0 5px;
  }

  .features-section {
    padding: 40px 0 60px;
  }

  .section-title {
    margin-bottom: 30px;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 30px;
  }

  .feature-card {
    padding: 30px 20px;
    margin: 0 5px;
  }

  .stats-section {
    padding: 30px 0 40px;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  .stat-item {
    padding: 20px 15px;
  }
}

/* 小屏幕移动设备 */
@media (max-width: 480px) {
  .container {
    padding: 0 10px;
  }

  .hero-section {
    padding: 30px 0;
  }

  .feature-card {
    padding: 25px 15px;
    margin: 0;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .stat-item {
    padding: 18px 12px;
  }
}

/* 超小屏幕 */
@media (max-width: 360px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .section-title {
    font-size: 1.6rem;
  }

  .feature-card {
    padding: 20px 12px;
  }
}

/* 触摸设备优化 */
@media (hover: none) and (pointer: coarse) {
  .feature-card:hover {
    transform: none;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }

  .feature-card:active {
    transform: translateY(-3px) scale(0.98);
  }

  .stat-item:hover {
    transform: none;
  }

  .stat-item:active {
    background: rgba(255, 255, 255, 0.2);
  }
}

/* 大屏幕优化 */
@media (min-width: 1200px) {
  .container {
    max-width: 90%;
    padding: 0 60px;
  }

  .features-grid {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 35px;
  }

  .stats-grid {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 30px;
  }
}

/* 超大屏幕优化 */
@media (min-width: 1600px) {
  .container {
    max-width: 85%;
    padding: 0 80px;
  }

  .features-grid {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 40px;
  }

  .stats-grid {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 35px;
  }
}

/* 4K及以上屏幕优化 */
@media (min-width: 2000px) {
  .container {
    max-width: 80%;
    padding: 0 100px;
  }

  .hero-section {
    padding: 100px 0;
  }

  .features-section {
    padding: 80px 0 100px;
  }

  .features-grid {
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    gap: 45px;
  }

  .stats-grid {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 40px;
  }
}
</style>
