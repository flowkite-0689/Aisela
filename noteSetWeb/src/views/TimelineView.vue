<script setup lang="ts">
import { ref } from 'vue'

const timelineData = ref([
  {
    year: "星历元年",
    title: "古神封印与历法统一",
    description: "三族联手封印古神「虚无吞噬者」，统一世界历法",
    significance: "三族关系达到历史最佳状态，为后续百年和平奠定基础",
    type: "cooperation"
  },
  {
    year: "星历1-100年",
    title: "和平蜜月期",
    description: "三族合作，相对和谐，建立跨种族贸易体系，文化交流频繁",
    significance: "混血后代增多，社会接受度较高",
    type: "peace"
  },
  {
    year: "星历101-200年",
    title: "关系劣化期",
    description: "小型冲突不断，互信下降，边境摩擦增多，贸易争端频发",
    significance: "魔族天赋引发人类恐慌，暗影商会开始崛起",
    type: "tension"
  },
  {
    year: "星历201年",
    title: "血色盟约事件",
    description: "苍白平原和谈破裂，奥兰多与凯洛斯被刺杀，三族仇恨的导火索",
    significance: "虹晶矿脉爆炸形成灰烬沼泽，三族全面开战",
    type: "conflict"
  },
  {
    year: "星历214年",
    title: "联合学院成立",
    description: "三王冠联合战争学院成立，教廷建立勇者孵化体系",
    significance: "传统骑士培养转向魔导器研究",
    type: "development"
  },
  {
    year: "星历227年",
    title: "和谈破裂事件",
    description: "洛瑟恩与卡莱尔秘密和谈，艾莉安遇刺，现代冲突的直接起因",
    significance: "人类组建讨伐军团，精灵宣战，魔族被迫应战",
    type: "conflict"
  },
  {
    year: "星历228年",
    title: "瑟莉安重塑与收养",
    description: "混血后代的隐藏成长开始，瑟莉安被重塑为西里斯",
    significance: "希望的种子在暗中成长",
    type: "hope"
  },
  {
    year: "星历229年",
    title: "绿荫镇惨案",
    description: "血翼兵团屠杀绿荫镇，弗拉尔家族牺牲",
    significance: "西里斯养父母牺牲，激发复仇决心",
    type: "tragedy"
  },
  {
    year: "星历241年",
    title: "西里斯入学",
    description: "西里斯进入三王冠联合战争学院，结识凯恩等人",
    significance: "新一代的相遇，友谊的开始",
    type: "development"
  },
  {
    year: "星历242年",
    title: "梦境城镇事件",
    description: "埃德蒙的复活实验，西里斯发现龙瞳移植笔记",
    significance: "为后续觉醒埋下伏笔",
    type: "discovery"
  },
  {
    year: "星历243年",
    title: "觉醒与真相",
    description: "西里斯龙瞳移植觉醒，父女相认，破坏古神复活计划",
    significance: "三族开始反思仇恨根源，寻求和平",
    type: "climax"
  }
])

const getTypeColor = (type: string): string => {
  const colors: Record<string, string> = {
    cooperation: '#27ae60',
    peace: '#3498db',
    tension: '#f39c12',
    conflict: '#e74c3c',
    development: '#9b59b6',
    hope: '#1abc9c',
    tragedy: '#34495e',
    discovery: '#f1c40f',
    climax: '#e67e22'
  }
  return colors[type] || '#95a5a6'
}

const getTypeIcon = (type: string): string => {
  const icons: Record<string, string> = {
    cooperation: '🤝',
    peace: '🕊️',
    tension: '⚡',
    conflict: '⚔️',
    development: '🏫',
    hope: '🌟',
    tragedy: '💔',
    discovery: '🔍',
    climax: '🌅'
  }
  return icons[type] || '📅'
}
</script>

<template>
  <div class="timeline-view">
    <div class="container">
      <h1 class="page-title">大事件时间线</h1>

      <div class="timeline-container">
        <div class="timeline-line"></div>

        <div
          v-for="(event, index) in timelineData"
          :key="event.year"
          :class="['timeline-item', { 'timeline-item-right': index % 2 === 1 }]"
        >
          <div class="timeline-marker" :style="{ backgroundColor: getTypeColor(event.type) }">
            <span class="timeline-icon">{{ getTypeIcon(event.type) }}</span>
          </div>

          <div class="timeline-content">
            <div class="timeline-card">
              <div class="timeline-header">
                <h3 class="timeline-year">{{ event.year }}</h3>
                <h4 class="timeline-title">{{ event.title }}</h4>
              </div>

              <div class="timeline-body">
                <p class="timeline-description">{{ event.description }}</p>
                <div class="timeline-significance">
                  <strong>历史意义：</strong>{{ event.significance }}
                </div>
              </div>

              <div class="timeline-footer">
                <span
                  class="timeline-type"
                  :style="{ backgroundColor: getTypeColor(event.type) }"
                >
                  {{ getTypeIcon(event.type) }} {{ event.type }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.timeline-view {
  min-height: 100vh;
  padding: 20px 0;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}

.page-title {
  text-align: center;
  font-size: 3rem;
  color: white;
  margin-bottom: 60px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.timeline-container {
  position: relative;
  padding: 20px 0;
}

.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(to bottom, #667eea, #764ba2);
  transform: translateX(-50%);
  border-radius: 2px;
}

.timeline-item {
  position: relative;
  margin-bottom: 60px;
  display: flex;
  align-items: center;
}

.timeline-item:nth-child(even) {
  flex-direction: row-reverse;
}

.timeline-marker {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  border: 4px solid white;
}

.timeline-icon {
  font-size: 1.5rem;
}

.timeline-content {
  width: calc(50% - 40px);
  margin-left: 40px;
}

.timeline-item:nth-child(even) .timeline-content {
  margin-left: 0;
  margin-right: 40px;
}

.timeline-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  position: relative;
}

.timeline-card:hover {
  transform: translateY(-5px);
}

.timeline-card::before {
  content: '';
  position: absolute;
  top: 30px;
  width: 0;
  height: 0;
  border: 15px solid transparent;
}

.timeline-item:nth-child(odd) .timeline-card::before {
  right: -30px;
  border-left-color: rgba(255, 255, 255, 0.95);
}

.timeline-item:nth-child(even) .timeline-card::before {
  left: -30px;
  border-right-color: rgba(255, 255, 255, 0.95);
}

.timeline-header {
  margin-bottom: 20px;
  border-bottom: 2px solid #ecf0f1;
  padding-bottom: 15px;
}

.timeline-year {
  color: #667eea;
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 8px;
}

.timeline-title {
  color: #2c3e50;
  font-size: 1.4rem;
  margin: 0;
}

.timeline-body {
  margin-bottom: 20px;
}

.timeline-description {
  color: #5a6c7d;
  line-height: 1.6;
  margin-bottom: 15px;
}

.timeline-significance {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 10px;
  color: #5a6c7d;
  line-height: 1.5;
  border-left: 4px solid #667eea;
}

.timeline-significance strong {
  color: #2c3e50;
}

.timeline-footer {
  display: flex;
  justify-content: flex-end;
}

.timeline-type {
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: capitalize;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .timeline-line {
    left: 30px;
  }

  .timeline-item {
    flex-direction: row !important;
    margin-left: 60px;
  }

  .timeline-item:nth-child(even) {
    flex-direction: row !important;
  }

  .timeline-marker {
    left: 30px;
    transform: translateX(-50%);
  }

  .timeline-content {
    width: 100%;
    margin-left: 40px;
    margin-right: 0;
  }

  .timeline-item:nth-child(even) .timeline-content {
    margin-left: 40px;
    margin-right: 0;
  }

  .timeline-card::before {
    top: 30px;
    left: -15px !important;
    right: auto !important;
    border-right-color: rgba(255, 255, 255, 0.95) !important;
    border-left-color: transparent !important;
  }
}
</style>
