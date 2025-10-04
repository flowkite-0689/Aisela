<script setup lang="ts">
import { ref } from 'vue'

const worldData = ref({
  calendar: {
    title: "历法体系",
    description: "星历元年：三族联手封印古神「虚无吞噬者」，统一世界历法",
    current: "星历243年（故事主要时间线）"
  },
  races: [
    {
      name: "人类王国",
      icon: "🏰",
      description: "适应性强，魔法天赋一般，依靠\"气\"的力量体系",
      details: [
        "圣罗兰王国：南部平原，极端反魔，主战派核心",
        "银辉城邦：东部沿海，利益至上，暗中走私合作",
        "铁砧公国：北部山脉，实用主义，支持有限和谈",
        "青藤议会：西部森林，亲精灵，对魔族观望"
      ]
    },
    {
      name: "精灵族",
      icon: "🌲",
      description: "与自然共生，寿命悠长，拥有自然魔法",
      details: [
        "精灵王室：世界树守护者，拥有最高权威",
        "长老会：由各部族长老组成，实际掌握政治权力",
        "维瑟兰精灵：神树孕育的特殊存在，备受尊崇"
      ]
    },
    {
      name: "魔族",
      icon: "👹",
      description: "天生魔力强大，等级森严的血脉社会",
      details: [
        "魔王一脉：拥有龙瞳，对下位魔族有灵魂压制力",
        "龙瞳特性：纹路为微型魔法阵，直视会使下位魔族本能臣服",
        "血脉等级：纯血>混血>改造魔族"
      ]
    }
  ],
  powers: [
    {
      name: "人类的\"气\"",
      description: "人类独有的力量体系，与魔族魔力不兼容"
    },
    {
      name: "精灵的自然魔法",
      description: "与植物、动物沟通，操控自然元素，治愈与净化能力"
    },
    {
      name: "魔族的魔力",
      description: "天生的魔力器官，强大的破坏力和变化能力"
    }
  ]
})
</script>

<template>
  <div class="world-view">
    <div class="container">
      <h1 class="page-title">世界观设定</h1>

      <section class="calendar-section">
        <div class="calendar-card">
          <h2>📅 {{ worldData.calendar.title }}</h2>
          <p class="calendar-description">{{ worldData.calendar.description }}</p>
          <p class="current-time">当前时间：{{ worldData.calendar.current }}</p>
        </div>
      </section>

      <section class="races-section">
        <h2 class="section-title">🌍 三大种族</h2>
        <div class="races-grid">
          <div
            v-for="race in worldData.races"
            :key="race.name"
            class="race-card"
          >
            <div class="race-header">
              <span class="race-icon">{{ race.icon }}</span>
              <h3 class="race-name">{{ race.name }}</h3>
            </div>
            <p class="race-description">{{ race.description }}</p>

            <div class="race-details">
              <ul class="details-list">
                <li v-for="detail in race.details" :key="detail">{{ detail }}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="powers-section">
        <h2 class="section-title">⚔️ 力量体系</h2>
        <div class="powers-grid">
          <div
            v-for="power in worldData.powers"
            :key="power.name"
            class="power-card"
          >
            <h3 class="power-name">{{ power.name }}</h3>
            <p class="power-description">{{ power.description }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.world-view {
  min-height: 100vh;
  padding: 20px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.page-title {
  text-align: center;
  font-size: 3rem;
  color: white;
  margin-bottom: 40px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  color: white;
  margin: 60px 0 40px 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.calendar-section {
  margin-bottom: 60px;
}

.calendar-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.calendar-card h2 {
  color: #2c3e50;
  margin-bottom: 20px;
  font-size: 1.8rem;
}

.calendar-description {
  color: #34495e;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 15px;
}

.current-time {
  color: #667eea;
  font-weight: bold;
  font-size: 1.2rem;
}

.races-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.powers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.race-card, .power-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.race-card:hover, .power-card:hover {
  transform: translateY(-5px);
}

.race-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.race-icon {
  font-size: 2rem;
}

.race-name, .power-name {
  color: #2c3e50;
  font-size: 1.4rem;
  margin-bottom: 15px;
}

.race-description, .power-description {
  color: #5a6c7d;
  line-height: 1.6;
  margin-bottom: 20px;
}

.details-list {
  list-style: none;
  padding: 0;
}

.details-list li {
  padding: 10px 15px;
  margin-bottom: 8px;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #667eea;
  color: #5a6c7d;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .races-grid {
    grid-template-columns: 1fr;
  }

  .powers-grid {
    grid-template-columns: 1fr;
  }
}
</style>
