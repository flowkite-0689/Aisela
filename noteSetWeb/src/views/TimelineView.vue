<script setup lang="ts">
import { ref, computed } from 'vue'

const timelineData = ref([
  {
    year: "星历前",
    period: "远古时代",
    events: [
      {
        title: "古神统治时期",
        description: "虚无吞噬者等古神统治世界，三族尚未诞生",
        type: "mythology",
        importance: "high"
      },
      {
        title: "三族诞生",
        description: "魔族、精灵族、人类相继在艾塞拉大陆出现",
        type: "origin",
        importance: "high"
      },
      {
        title: "古神封印",
        description: "三族联手封印虚无吞噬者，建立星历纪年法",
        type: "war",
        importance: "critical"
      }
    ]
  },
  {
    year: "星历1-50年",
    period: "黄金时代",
    events: [
      {
        title: "三族和平协议签署",
        description: "建立最初的种族间合作框架，划分领土边界",
        type: "politics",
        importance: "high"
      },
      {
        title: "文化交流兴盛",
        description: "各族间贸易往来频繁，文化艺术蓬勃发展",
        type: "culture",
        importance: "medium"
      },
      {
        title: "三王冠学院建立",
        description: "作为三族合作象征的联合教育机构成立",
        type: "education",
        importance: "high"
      }
    ]
  },
  {
    year: "星历51-150年",
    period: "繁荣发展期",
    events: [
      {
        title: "魔法技术革新",
        description: "各族在魔法研究上取得重大突破，生活水平显著提升",
        type: "technology",
        importance: "medium"
      },
      {
        title: "领土争端初现",
        description: "随着人口增长，边界问题开始引发小规模冲突",
        type: "conflict",
        importance: "medium"
      },
      {
        title: "暗影商会成立",
        description: "神秘的跨种族组织开始在暗中活动",
        type: "organization",
        importance: "medium"
      }
    ]
  },
  {
    year: "星历151-200年",
    period: "矛盾积累期",
    events: [
      {
        title: "资源竞争加剧",
        description: "魔法水晶矿藏的发现引发各族间的激烈竞争",
        type: "conflict",
        importance: "high"
      },
      {
        title: "种族主义抬头",
        description: "各族内部开始出现排外思想，民族主义情绪高涨",
        type: "politics",
        importance: "high"
      },
      {
        title: "教廷影响力扩张",
        description: "人类教廷开始渗透其他种族，暗中策划复活古神",
        type: "religion",
        importance: "high"
      }
    ]
  },
  {
    year: "星历201年",
    period: "转折点",
    events: [
      {
        title: "血色盟约签署",
        description: "三族领导人在苍白平原签署最后的和平协议",
        type: "politics",
        importance: "critical"
      },
      {
        title: "血色盟约破裂",
        description: "协议签署当日即被破坏，苍白平原变成灰烬沼泽",
        type: "war",
        importance: "critical"
      }
    ]
  },
  {
    year: "星历202-226年",
    period: "冷战时期",
    events: [
      {
        title: "边境封锁",
        description: "三族关闭边界，停止一切官方交流",
        type: "politics",
        importance: "high"
      },
      {
        title: "军备竞赛",
        description: "各族大力发展军事力量，准备可能的全面战争",
        type: "military",
        importance: "high"
      },
      {
        title: "绿荫镇建立",
        description: "人类在边境地区建立小镇，西里斯的养父母迁居于此",
        type: "settlement",
        importance: "medium"
      }
    ]
  },
  {
    year: "星历227年",
    period: "战争爆发",
    events: [
      {
        title: "和谈最后尝试",
        description: "三族代表进行最后一次和平谈判，以失败告终",
        type: "politics",
        importance: "high"
      },
      {
        title: "全面战争开始",
        description: "三族正式宣战，艾塞拉大陆陷入战火",
        type: "war",
        importance: "critical"
      },
      {
        title: "绿荫镇毁灭",
        description: "血翼兵团摧毁绿荫镇，西里斯失去养父母",
        type: "war",
        importance: "critical"
      }
    ]
  },
  {
    year: "星历228-242年",
    period: "战争持续期",
    events: [
      {
        title: "西里斯进入学院",
        description: "西里斯被三王冠学院录取，开始新的人生",
        type: "personal",
        importance: "high"
      },
      {
        title: "三人组建立友谊",
        description: "西里斯、凯恩、艾薇拉建立跨种族友谊",
        type: "personal",
        importance: "high"
      },
      {
        title: "瑟莉安复活",
        description: "神秘的复活事件，为故事带来新的转机",
        type: "mystery",
        importance: "high"
      },
      {
        title: "暗影商会介入",
        description: "神秘组织开始影响战争进程",
        type: "conspiracy",
        importance: "medium"
      }
    ]
  },
  {
    year: "星历243年",
    period: "当前时期",
    events: [
      {
        title: "教廷阴谋暴露",
        description: "复活古神的计划逐渐浮出水面",
        type: "conspiracy",
        importance: "critical"
      },
      {
        title: "三族面临共同威胁",
        description: "古神复活的危机迫使三族重新考虑合作",
        type: "crisis",
        importance: "critical"
      }
    ]
  }
])

const selectedPeriod = ref('all')
const selectedType = ref('all')

const periods = computed(() => {
  const allPeriods = ['all']
  timelineData.value.forEach(item => {
    if (!allPeriods.includes(item.period)) {
      allPeriods.push(item.period)
    }
  })
  return allPeriods
})

const eventTypes = [
  { value: 'all', label: '全部', color: '#656d76' },
  { value: 'mythology', label: '神话', color: '#9333ea' },
  { value: 'origin', label: '起源', color: '#059669' },
  { value: 'war', label: '战争', color: '#dc2626' },
  { value: 'politics', label: '政治', color: '#0969da' },
  { value: 'culture', label: '文化', color: '#d97706' },
  { value: 'education', label: '教育', color: '#16a34a' },
  { value: 'technology', label: '科技', color: '#7c3aed' },
  { value: 'conflict', label: '冲突', color: '#ea580c' },
  { value: 'organization', label: '组织', color: '#0891b2' },
  { value: 'religion', label: '宗教', color: '#be123c' },
  { value: 'military', label: '军事', color: '#374151' },
  { value: 'settlement', label: '定居', color: '#65a30d' },
  { value: 'personal', label: '个人', color: '#c2410c' },
  { value: 'mystery', label: '神秘', color: '#7c2d12' },
  { value: 'conspiracy', label: '阴谋', color: '#991b1b' },
  { value: 'crisis', label: '危机', color: '#b91c1c' }
]

const getTypeInfo = (type: string) => {
  return eventTypes.find(t => t.value === type) || eventTypes[0]
}

const filteredTimeline = computed(() => {
  return timelineData.value.map(period => ({
    ...period,
    events: period.events.filter(event => {
      const periodMatch = selectedPeriod.value === 'all' || period.period === selectedPeriod.value
      const typeMatch = selectedType.value === 'all' || event.type === selectedType.value
      return periodMatch && typeMatch
    })
  })).filter(period => period.events.length > 0)
})

const getImportanceClass = (importance: string) => {
  switch (importance) {
    case 'critical':
      return 'critical'
    case 'high':
      return 'high'
    case 'medium':
      return 'medium'
    default:
      return 'low'
  }
}
</script>

<template>
  <div class="timeline-view">
    <!-- 页面标题 -->
    <div class="page-header">
      <h1 class="page-title">
        <span class="title-icon">⏰</span>
        时间线
      </h1>
      <p class="page-description">
        追溯艾塞拉大陆的历史进程，了解重大事件的时间脉络
      </p>
    </div>

    <!-- 筛选器 -->
    <div class="filters-section">
      <div class="filter-group">
        <label class="filter-label">时期筛选：</label>
        <select v-model="selectedPeriod" class="filter-select">
          <option value="all">全部时期</option>
          <option
            v-for="period in periods.slice(1)"
            :key="period"
            :value="period"
          >
            {{ period }}
          </option>
        </select>
      </div>

      <div class="filter-group">
        <label class="filter-label">类型筛选：</label>
        <div class="type-filters">
          <button
            v-for="type in eventTypes"
            :key="type.value"
            @click="selectedType = type.value"
            :class="['type-filter-btn', { active: selectedType === type.value }]"
            :style="{ '--type-color': type.color }"
          >
            {{ type.label }}
          </button>
        </div>
      </div>
    </div>

    <!-- 时间线内容 -->
    <div class="timeline-container">
      <div
        v-for="(periodData, index) in filteredTimeline"
        :key="periodData.year"
        class="timeline-period"
      >
        <!-- 时期标题 -->
        <div class="period-header">
          <div class="period-marker">{{ index + 1 }}</div>
          <div class="period-info">
            <h2 class="period-title">{{ periodData.period }}</h2>
            <span class="period-year">{{ periodData.year }}</span>
          </div>
        </div>

        <!-- 事件列表 -->
        <div class="events-container">
          <div
            v-for="event in periodData.events"
            :key="event.title"
            class="event-card"
            :class="getImportanceClass(event.importance)"
          >
            <div class="event-header">
              <div class="event-type-indicator">
                <span
                  class="type-dot"
                  :style="{ backgroundColor: getTypeInfo(event.type).color }"
                ></span>
                <span class="type-label">{{ getTypeInfo(event.type).label }}</span>
              </div>
              <div
                class="importance-badge"
                :class="getImportanceClass(event.importance)"
              >
                {{
                  event.importance === 'critical' ? '关键' :
                  event.importance === 'high' ? '重要' :
                  event.importance === 'medium' ? '一般' : '次要'
                }}
              </div>
            </div>

            <div class="event-content">
              <h3 class="event-title">{{ event.title }}</h3>
              <p class="event-description">{{ event.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 统计信息 -->
    <div class="stats-section">
      <div class="stats-card">
        <h3 class="stats-title">
          <span class="title-icon">📊</span>
          事件统计
        </h3>
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number">{{ filteredTimeline.reduce((sum, p) => sum + p.events.length, 0) }}</div>
            <div class="stat-label">总事件数</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">{{ filteredTimeline.length }}</div>
            <div class="stat-label">历史时期</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">
              {{ filteredTimeline.reduce((sum, p) => sum + p.events.filter(e => e.importance === 'critical').length, 0) }}
            </div>
            <div class="stat-label">关键事件</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">243</div>
            <div class="stat-label">当前年份</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.timeline-view {
  max-width: 1200px;
  margin: 0 auto;
}

/* 页面标题 */
.page-header {
  text-align: center;
  margin-bottom: 32px;
  padding-bottom: 24px;
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
  line-height: 1.5;
}

/* 筛选器 */
.filters-section {
  background: #ffffff;
  border: 1px solid #d0d7de;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 24px;
}

.filter-group {
  margin-bottom: 16px;
}

.filter-group:last-child {
  margin-bottom: 0;
}

.filter-label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #24292f;
  margin-bottom: 8px;
}

.filter-select {
  width: 200px;
  padding: 8px 12px;
  border: 1px solid #d0d7de;
  border-radius: 6px;
  font-size: 14px;
  color: #24292f;
  background: #ffffff;
  cursor: pointer;
}

.filter-select:focus {
  outline: none;
  border-color: #0969da;
  box-shadow: 0 0 0 3px rgba(9, 105, 218, 0.12);
}

.type-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.type-filter-btn {
  padding: 6px 12px;
  border: 1px solid #d0d7de;
  border-radius: 16px;
  background: #ffffff;
  color: #656d76;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.type-filter-btn:hover {
  border-color: var(--type-color);
  color: var(--type-color);
}

.type-filter-btn.active {
  background: var(--type-color);
  border-color: var(--type-color);
  color: white;
}

/* 时间线容器 */
.timeline-container {
  position: relative;
  padding-left: 40px;
}

.timeline-container::before {
  content: '';
  position: absolute;
  left: 25px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, #0969da, #58a6ff, #0969da);
}

.timeline-period {
  position: relative;
  margin-bottom: 48px;
}

.timeline-period:last-child {
  margin-bottom: 0;
}

/* 时期标题 */
.period-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
  position: relative;
  z-index: 2;
}

.period-marker {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #0969da, #58a6ff);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(9, 105, 218, 0.3);
  margin-left: -40px;
}

.period-info {
  background: #ffffff;
  border: 1px solid #d0d7de;
  border-radius: 8px;
  padding: 12px 16px;
  box-shadow: 0 2px 8px rgba(31, 35, 40, 0.12);
}

.period-title {
  font-size: 20px;
  font-weight: 600;
  color: #24292f;
  margin: 0 0 4px 0;
}

.period-year {
  font-size: 14px;
  color: #656d76;
  font-weight: 500;
}

/* 事件容器 */
.events-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-left: 20px;
}

.event-card {
  background: #ffffff;
  border: 1px solid #d0d7de;
  border-radius: 8px;
  padding: 16px;
  transition: all 0.2s ease;
  position: relative;
}

.event-card::before {
  content: '';
  position: absolute;
  left: -32px;
  top: 20px;
  width: 8px;
  height: 8px;
  background: #d0d7de;
  border-radius: 50%;
}

.event-card.critical {
  border-left: 4px solid #dc2626;
}

.event-card.critical::before {
  background: #dc2626;
}

.event-card.high {
  border-left: 4px solid #ea580c;
}

.event-card.high::before {
  background: #ea580c;
}

.event-card.medium {
  border-left: 4px solid #d97706;
}

.event-card.medium::before {
  background: #d97706;
}

.event-card:hover {
  border-color: #0969da;
  box-shadow: 0 4px 12px rgba(9, 105, 218, 0.12);
  transform: translateY(-1px);
}

.event-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.event-type-indicator {
  display: flex;
  align-items: center;
  gap: 6px;
}

.type-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.type-label {
  font-size: 12px;
  font-weight: 500;
  color: #656d76;
}

.importance-badge {
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
}

.importance-badge.critical {
  background: #fee2e2;
  color: #dc2626;
}

.importance-badge.high {
  background: #fed7aa;
  color: #ea580c;
}

.importance-badge.medium {
  background: #fef3c7;
  color: #d97706;
}

.importance-badge.low {
  background: #f3f4f6;
  color: #6b7280;
}

.event-content {
  padding-left: 14px;
}

.event-title {
  font-size: 16px;
  font-weight: 600;
  color: #24292f;
  margin: 0 0 8px 0;
  line-height: 1.3;
}

.event-description {
  font-size: 14px;
  color: #656d76;
  line-height: 1.5;
  margin: 0;
}

/* 统计信息 */
.stats-section {
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid #d0d7de;
}

.stats-card {
  background: #ffffff;
  border: 1px solid #d0d7de;
  border-radius: 12px;
  padding: 24px;
}

.stats-title {
  font-size: 18px;
  font-weight: 600;
  color: #24292f;
  margin: 0 0 20px 0;
  display: flex;
  align-items: center;
  gap: 8px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.stat-item {
  text-align: center;
  padding: 16px;
  background: #f6f8fa;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.stat-item:hover {
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(31, 35, 40, 0.12);
}

.stat-number {
  font-size: 32px;
  font-weight: 700;
  color: #0969da;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 14px;
  color: #656d76;
  font-weight: 500;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .page-title {
    font-size: 24px;
  }

  .timeline-container {
    padding-left: 20px;
  }

  .timeline-container::before {
    left: 10px;
  }

  .period-marker {
    width: 40px;
    height: 40px;
    font-size: 16px;
    margin-left: -20px;
  }

  .events-container {
    margin-left: 10px;
  }

  .event-card::before {
    left: -22px;
  }

  .type-filters {
    gap: 6px;
  }

  .type-filter-btn {
    padding: 4px 8px;
    font-size: 11px;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
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

  .filters-section,
  .period-info,
  .event-card,
  .stats-card {
    background: #161b22;
    border-color: #30363d;
  }

  .filter-select {
    background: #161b22;
    border-color: #30363d;
    color: #f0f6fc;
  }

  .type-filter-btn {
    background: #161b22;
    border-color: #30363d;
    color: #8b949e;
  }

  .period-title,
  .event-title,
  .stats-title {
    color: #f0f6fc;
  }

  .period-year,
  .type-label,
  .event-description,
  .stat-label {
    color: #8b949e;
  }

  .stat-number {
    color: #58a6ff;
  }

  .stat-item {
    background: #21262d;
  }

  .stat-item:hover {
    background: #161b22;
    box-shadow: 0 2px 8px rgba(177, 186, 196, 0.12);
  }
}
</style>
