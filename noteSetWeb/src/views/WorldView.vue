<script setup lang="ts">
import { ref } from 'vue'

const worldData = ref({
  continent: {
    name: "艾塞拉大陆",
    description: "一个被古老魔法与现代文明交织的奇幻大陆，三大种族在此共存与冲突"
  },
  calendar: {
    system: "星历纪年法",
    description: "以三族联手封印古神「虚无吞噬者」之年为元年",
    currentYear: "星历243年",
    seasons: ["春分", "夏至", "秋分", "冬至"]
  },
  races: [
    {
      name: "魔族",
      icon: "👹",
      population: "约50万",
      territory: "北方山脉地区",
      characteristics: "天生魔力强大，寿命较长，社会等级森严",
      government: "君主制，由魔王统治",
      culture: "崇尚力量与荣誉，重视血脉传承",
      specialties: ["魔法研究", "金属锻造", "战争技艺"]
    },
    {
      name: "精灵族",
      icon: "🧝",
      population: "约30万",
      territory: "西方森林地区",
      characteristics: "与自然和谐共生，擅长魔法与艺术",
      government: "长老议会制",
      culture: "热爱和平与美，重视智慧与传统",
      specialties: ["自然魔法", "艺术创作", "草药学"]
    },
    {
      name: "人类",
      icon: "👤",
      population: "约200万",
      territory: "中部平原与南方丘陵",
      characteristics: "适应性强，繁殖力旺盛，科技发达",
      government: "多城邦联盟制",
      culture: "多元化，重视商业与创新",
      specialties: ["科技发展", "商业贸易", "农业生产"]
    }
  ],
  locations: [
    {
      name: "绿荫镇",
      type: "人类村镇",
      status: "已毁灭",
      description: "西里斯的养父母所在的宁静小镇，被血翼兵团摧毁",
      significance: "西里斯人生转折的关键地点"
    },
    {
      name: "三王冠联合战争学院",
      type: "教育机构",
      status: "运营中",
      description: "培养各族战士和魔法师的联合学院",
      significance: "西里斯、凯恩、艾薇拉相遇的地方"
    },
    {
      name: "苍白平原",
      type: "历史遗迹",
      status: "废墟",
      description: "星历201年血色盟约签署地，现为灰烬沼泽",
      significance: "三族和平尝试失败的象征"
    },
    {
      name: "精灵神树",
      type: "神圣地点",
      status: "神秘",
      description: "精灵族的圣地，拥有重塑生命的神秘力量",
      significance: "瑟莉安身体重塑的地点"
    },
    {
      name: "魔王城",
      type: "政治中心",
      status: "活跃",
      description: "魔族的政治和军事中心，洛瑟恩的居所",
      significance: "魔族权力的象征"
    }
  ],
  organizations: [
    {
      name: "血翼兵团",
      type: "军事组织",
      allegiance: "魔族",
      description: "魔族的精锐军事部队，以残酷著称",
      leader: "未知指挥官",
      activities: "执行军事任务，包括摧毁绿荫镇"
    },
    {
      name: "暗影商会",
      type: "秘密组织",
      allegiance: "中立/自利",
      description: "跨种族的秘密商业和情报网络",
      leader: "神秘会长",
      activities: "情报交易、暗中操控政治局势"
    },
    {
      name: "教廷",
      type: "宗教组织",
      allegiance: "人类",
      description: "人类的主要宗教机构，暗中策划复活古神",
      leader: "大主教",
      activities: "宗教活动、政治渗透、秘密实验"
    }
  ],
  conflicts: [
    {
      period: "星历201-227年",
      name: "三族冷战期",
      description: "血色盟约破裂后的长期对峙状态",
      impact: "贸易中断，边境冲突不断"
    },
    {
      period: "星历227-243年",
      name: "全面战争期",
      description: "和谈失败后的大规模军事冲突",
      impact: "大量伤亡，社会动荡，经济崩溃"
    }
  ]
})

const selectedTab = ref('overview')

const tabs = [
  { id: 'overview', label: '概览', icon: '🌍' },
  { id: 'races', label: '种族', icon: '👥' },
  { id: 'locations', label: '地点', icon: '🏛️' },
  { id: 'organizations', label: '组织', icon: '⚔️' },
  { id: 'conflicts', label: '冲突', icon: '💥' }
]
</script>

<template>
  <div class="world-view">
    <!-- 页面标题 -->
    <div class="page-header">
      <h1 class="page-title">
        <span class="title-icon">🌍</span>
        世界观设定
      </h1>
      <p class="page-description">
        探索艾塞拉大陆的详细世界设定和背景信息
      </p>
    </div>

    <!-- 导航标签 -->
    <div class="tab-navigation">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        @click="selectedTab = tab.id"
        :class="['tab-btn', { active: selectedTab === tab.id }]"
      >
        <span class="tab-icon">{{ tab.icon }}</span>
        <span class="tab-label">{{ tab.label }}</span>
      </button>
    </div>

    <!-- 内容区域 -->
    <div class="content-area">
      <!-- 概览标签页 -->
      <div v-if="selectedTab === 'overview'" class="tab-content">
        <div class="overview-grid">
          <!-- 大陆概况 -->
          <div class="info-card large">
            <h3 class="card-title">
              <span class="title-icon">🗺️</span>
              {{ worldData.continent.name }}
            </h3>
            <p class="card-description">{{ worldData.continent.description }}</p>
          </div>

          <!-- 历法系统 -->
          <div class="info-card">
            <h3 class="card-title">
              <span class="title-icon">📅</span>
              {{ worldData.calendar.system }}
            </h3>
            <p class="card-description">{{ worldData.calendar.description }}</p>
            <div class="detail-item">
              <strong>当前年份：</strong>{{ worldData.calendar.currentYear }}
            </div>
          </div>

          <!-- 种族统计 -->
          <div class="info-card">
            <h3 class="card-title">
              <span class="title-icon">📊</span>
              种族分布
            </h3>
            <div class="race-stats">
              <div v-for="race in worldData.races" :key="race.name" class="race-stat">
                <span class="race-icon">{{ race.icon }}</span>
                <div class="race-info">
                  <div class="race-name">{{ race.name }}</div>
                  <div class="race-population">{{ race.population }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 种族标签页 -->
      <div v-if="selectedTab === 'races'" class="tab-content">
        <div class="races-grid">
          <div
            v-for="race in worldData.races"
            :key="race.name"
            class="race-card"
          >
            <div class="race-header">
              <div class="race-avatar">{{ race.icon }}</div>
              <div class="race-basic">
                <h3 class="race-name">{{ race.name }}</h3>
                <p class="race-population">人口：{{ race.population }}</p>
              </div>
            </div>

            <div class="race-content">
              <div class="race-detail">
                <h4>🏛️ 政治制度</h4>
                <p>{{ race.government }}</p>
              </div>

              <div class="race-detail">
                <h4>🌟 种族特征</h4>
                <p>{{ race.characteristics }}</p>
              </div>

              <div class="race-detail">
                <h4>🎭 文化特色</h4>
                <p>{{ race.culture }}</p>
              </div>

              <div class="race-detail">
                <h4>⚡ 专长领域</h4>
                <div class="specialty-tags">
                  <span
                    v-for="specialty in race.specialties"
                    :key="specialty"
                    class="specialty-tag"
                  >
                    {{ specialty }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 地点标签页 -->
      <div v-if="selectedTab === 'locations'" class="tab-content">
        <div class="locations-grid">
          <div
            v-for="location in worldData.locations"
            :key="location.name"
            class="location-card"
          >
            <div class="location-header">
              <h3 class="location-name">{{ location.name }}</h3>
              <div class="location-meta">
                <span class="location-type">{{ location.type }}</span>
                <span :class="['location-status', location.status]">
                  {{ location.status }}
                </span>
              </div>
            </div>

            <div class="location-content">
              <p class="location-description">{{ location.description }}</p>
              <div class="location-significance">
                <strong>历史意义：</strong>{{ location.significance }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 组织标签页 -->
      <div v-if="selectedTab === 'organizations'" class="tab-content">
        <div class="organizations-grid">
          <div
            v-for="org in worldData.organizations"
            :key="org.name"
            class="organization-card"
          >
            <div class="org-header">
              <h3 class="org-name">{{ org.name }}</h3>
              <div class="org-meta">
                <span class="org-type">{{ org.type }}</span>
                <span class="org-allegiance">{{ org.allegiance }}</span>
              </div>
            </div>

            <div class="org-content">
              <p class="org-description">{{ org.description }}</p>
              <div class="org-details">
                <div class="org-detail">
                  <strong>领导者：</strong>{{ org.leader }}
                </div>
                <div class="org-detail">
                  <strong>主要活动：</strong>{{ org.activities }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 冲突标签页 -->
      <div v-if="selectedTab === 'conflicts'" class="tab-content">
        <div class="conflicts-timeline">
          <div
            v-for="conflict in worldData.conflicts"
            :key="conflict.name"
            class="conflict-item"
          >
            <div class="conflict-period">{{ conflict.period }}</div>
            <div class="conflict-content">
              <h3 class="conflict-name">{{ conflict.name }}</h3>
              <p class="conflict-description">{{ conflict.description }}</p>
              <div class="conflict-impact">
                <strong>影响：</strong>{{ conflict.impact }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.world-view {
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

/* 标签导航 */
.tab-navigation {
  display: flex;
  gap: 4px;
  margin-bottom: 24px;
  background: #f6f8fa;
  padding: 4px;
  border-radius: 8px;
  border: 1px solid #d0d7de;
}

.tab-btn {
  flex: 1;
  padding: 8px 16px;
  border: none;
  background: transparent;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: #656d76;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

.tab-btn:hover {
  color: #24292f;
  background: rgba(255, 255, 255, 0.5);
}

.tab-btn.active {
  background: #ffffff;
  color: #0969da;
  box-shadow: 0 1px 3px rgba(31, 35, 40, 0.12);
}

.tab-icon {
  font-size: 16px;
}

.tab-label {
  font-weight: 500;
}

/* 内容区域 */
.content-area {
  min-height: 400px;
}

.tab-content {
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 概览页面 */
.overview-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto auto;
  gap: 20px;
}

.info-card {
  background: #ffffff;
  border: 1px solid #d0d7de;
  border-radius: 12px;
  padding: 20px;
  transition: all 0.2s ease;
}

.info-card.large {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
}

.info-card:hover {
  border-color: #0969da;
  box-shadow: 0 3px 12px rgba(9, 105, 218, 0.12);
}

.card-title {
  font-size: 18px;
  font-weight: 600;
  color: #24292f;
  margin: 0 0 12px 0;
  display: flex;
  align-items: center;
  gap: 8px;
}

.card-description {
  font-size: 14px;
  color: #656d76;
  line-height: 1.5;
  margin: 0 0 16px 0;
}

.detail-item {
  font-size: 14px;
  color: #656d76;
  margin-bottom: 8px;
}

.detail-item strong {
  color: #24292f;
}

.race-stats {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.race-stat {
  display: flex;
  align-items: center;
  gap: 10px;
}

.race-icon {
  font-size: 20px;
  width: 32px;
  text-align: center;
}

.race-info {
  flex: 1;
}

.race-name {
  font-weight: 500;
  color: #24292f;
  font-size: 14px;
}

.race-population {
  font-size: 12px;
  color: #656d76;
}

/* 种族页面 */
.races-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
}

.race-card {
  background: #ffffff;
  border: 1px solid #d0d7de;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.2s ease;
}

.race-card:hover {
  border-color: #0969da;
  box-shadow: 0 8px 24px rgba(9, 105, 218, 0.12);
  transform: translateY(-2px);
}

.race-header {
  padding: 20px;
  border-bottom: 1px solid #d0d7de;
  display: flex;
  align-items: center;
  gap: 16px;
}

.race-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #f6f8fa;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.race-basic .race-name {
  font-size: 18px;
  font-weight: 600;
  color: #24292f;
  margin: 0 0 4px 0;
}

.race-basic .race-population {
  font-size: 14px;
  color: #656d76;
  margin: 0;
}

.race-content {
  padding: 20px;
}

.race-detail {
  margin-bottom: 16px;
}

.race-detail:last-child {
  margin-bottom: 0;
}

.race-detail h4 {
  font-size: 14px;
  font-weight: 600;
  color: #24292f;
  margin: 0 0 6px 0;
}

.race-detail p {
  font-size: 13px;
  color: #656d76;
  line-height: 1.4;
  margin: 0;
}

.specialty-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.specialty-tag {
  background: #dbeafe;
  color: #0969da;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
}

/* 地点页面 */
.locations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.location-card {
  background: #ffffff;
  border: 1px solid #d0d7de;
  border-radius: 12px;
  padding: 20px;
  transition: all 0.2s ease;
}

.location-card:hover {
  border-color: #0969da;
  box-shadow: 0 3px 12px rgba(9, 105, 218, 0.12);
}

.location-header {
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid #d0d7de;
}

.location-name {
  font-size: 16px;
  font-weight: 600;
  color: #24292f;
  margin: 0 0 8px 0;
}

.location-meta {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.location-type {
  background: #f3e8ff;
  color: #9333ea;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
}

.location-status {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
}

.location-status.运营中 {
  background: #dcfce7;
  color: #16a34a;
}

.location-status.已毁灭 {
  background: #fee2e2;
  color: #dc2626;
}

.location-status.废墟,
.location-status.神秘 {
  background: #fef3c7;
  color: #d97706;
}

.location-status.活跃 {
  background: #dbeafe;
  color: #0969da;
}

.location-description {
  font-size: 14px;
  color: #656d76;
  line-height: 1.5;
  margin: 0 0 12px 0;
}

.location-significance {
  font-size: 13px;
  color: #656d76;
  line-height: 1.4;
}

.location-significance strong {
  color: #24292f;
}

/* 组织页面 */
.organizations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
}

.organization-card {
  background: #ffffff;
  border: 1px solid #d0d7de;
  border-radius: 12px;
  padding: 20px;
  transition: all 0.2s ease;
}

.organization-card:hover {
  border-color: #0969da;
  box-shadow: 0 3px 12px rgba(9, 105, 218, 0.12);
}

.org-header {
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid #d0d7de;
}

.org-name {
  font-size: 16px;
  font-weight: 600;
  color: #24292f;
  margin: 0 0 8px 0;
}

.org-meta {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.org-type,
.org-allegiance {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
}

.org-type {
  background: #dbeafe;
  color: #0969da;
}

.org-allegiance {
  background: #f0fdf4;
  color: #16a34a;
}

.org-description {
  font-size: 14px;
  color: #656d76;
  line-height: 1.5;
  margin: 0 0 16px 0;
}

.org-details {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.org-detail {
  font-size: 13px;
  color: #656d76;
  line-height: 1.4;
}

.org-detail strong {
  color: #24292f;
}

/* 冲突页面 */
.conflicts-timeline {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.conflict-item {
  background: #ffffff;
  border: 1px solid #d0d7de;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  gap: 20px;
  transition: all 0.2s ease;
}

.conflict-item:hover {
  border-color: #0969da;
  box-shadow: 0 3px 12px rgba(9, 105, 218, 0.12);
}

.conflict-period {
  background: #0969da;
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  height: fit-content;
}

.conflict-content {
  flex: 1;
}

.conflict-name {
  font-size: 18px;
  font-weight: 600;
  color: #24292f;
  margin: 0 0 8px 0;
}

.conflict-description {
  font-size: 14px;
  color: #656d76;
  line-height: 1.5;
  margin: 0 0 12px 0;
}

.conflict-impact {
  font-size: 13px;
  color: #656d76;
  line-height: 1.4;
}

.conflict-impact strong {
  color: #24292f;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .overview-grid {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }

  .info-card.large {
    grid-column: 1;
    grid-row: auto;
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 24px;
  }

  .tab-navigation {
    flex-wrap: wrap;
  }

  .tab-btn {
    flex: none;
    min-width: calc(50% - 2px);
  }

  .races-grid,
  .locations-grid,
  .organizations-grid {
    grid-template-columns: 1fr;
  }

  .conflict-item {
    flex-direction: column;
    gap: 12px;
  }

  .conflict-period {
    align-self: flex-start;
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

  .tab-navigation {
    background: #21262d;
    border-color: #30363d;
  }

  .tab-btn {
    color: #8b949e;
  }

  .tab-btn:hover {
    color: #f0f6fc;
    background: rgba(177, 186, 196, 0.12);
  }

  .tab-btn.active {
    background: #0d1117;
    color: #58a6ff;
    box-shadow: 0 0 0 1px #30363d;
  }

  .info-card,
  .race-card,
  .location-card,
  .organization-card,
  .conflict-item {
    background: #161b22;
    border-color: #30363d;
  }

  .info-card:hover,
  .race-card:hover,
  .location-card:hover,
  .organization-card:hover,
  .conflict-item:hover {
    border-color: #58a6ff;
    box-shadow: 0 3px 12px rgba(88, 166, 255, 0.12);
  }

  .card-title,
  .race-name,
  .location-name,
  .org-name,
  .conflict-name {
    color: #f0f6fc;
  }

  .card-description,
  .race-detail p,
  .location-description,
  .org-description,
  .conflict-description {
    color: #8b949e;
  }

  .race-avatar {
    background: #21262d;
  }
}
</style>
