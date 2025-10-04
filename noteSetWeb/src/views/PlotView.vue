<script setup lang="ts">
import { ref } from 'vue'

const plotData = ref({
  theme: {
    title: "成长与救赎",
    description: "在战争与仇恨的阴霾下，三个年轻人如何超越种族偏见，寻找真正的力量与和平",
    keywords: ["成长", "救赎", "友谊", "牺牲", "和平"]
  },
  trilogy: [
    {
      book: "第一部：觉醒",
      subtitle: "血与火的洗礼",
      status: "已完成",
      progress: 100,
      wordCount: "约15万字",
      description: "西里斯从一个普通的人类少年，经历家园毁灭的痛苦，在三王冠学院中觉醒内在的力量，与凯恩、艾薇拉建立深厚友谊。",
      keyEvents: [
        "绿荫镇毁灭事件",
        "西里斯进入三王冠学院",
        "与凯恩、艾薇拉相遇",
        "发现自身异能",
        "第一次种族冲突经历"
      ],
      themes: ["身份认知", "友谊建立", "力量觉醒"]
    },
    {
      book: "第二部：试炼",
      subtitle: "黑暗中的选择",
      status: "进行中",
      progress: 65,
      wordCount: "约9万字",
      description: "三人面临更大的挑战和道德选择。瑟莉安的复活带来新的变数，而教廷的阴谋逐渐浮出水面。",
      keyEvents: [
        "瑟莉安的神秘复活",
        "暗影商会的介入",
        "教廷阴谋初现",
        "三族关系恶化",
        "个人信念的考验"
      ],
      themes: ["道德选择", "信任危机", "力量的代价"]
    },
    {
      book: "第三部：救赎",
      subtitle: "新世界的黎明",
      status: "规划中",
      progress: 0,
      wordCount: "预计12万字",
      description: "最终的决战与救赎。主角们必须面对古神复活的威胁，做出最终的牺牲与选择，为三族寻找真正的和平之路。",
      keyEvents: [
        "古神复活危机",
        "三族联合抗敌",
        "最终决战",
        "牺牲与救赎",
        "新秩序建立"
      ],
      themes: ["终极救赎", "团结合作", "新世界秩序"]
    }
  ],
  acts: [
    {
      act: "第一幕",
      title: "平静的破碎",
      chapters: "第1-3章",
      description: "西里斯在绿荫镇的平静生活，以及这份平静被血翼兵团彻底摧毁的过程。",
      keyMoments: [
        "西里斯的日常生活描写",
        "血翼兵团突然袭击",
        "养父母的牺牲",
        "西里斯的逃亡与觉醒"
      ],
      emotionalArc: "从平静到绝望，再到愤怒与决心"
    },
    {
      act: "第二幕",
      title: "新的开始",
      chapters: "第4-8章",
      description: "西里斯进入三王冠学院，遇到凯恩和艾薇拉，开始新的生活并逐渐发现自己的能力。",
      keyMoments: [
        "初入学院的不适应",
        "与凯恩的初次冲突与和解",
        "艾薇拉的温暖帮助",
        "能力的初次显现",
        "友谊的建立"
      ],
      emotionalArc: "从孤独防备到逐渐信任，找到归属感"
    },
    {
      act: "第三幕",
      title: "成长的代价",
      chapters: "第9-15章",
      description: "三人面临各种挑战和考验，在冲突中成长，但也付出了沉重的代价。",
      keyMoments: [
        "学院内的种族冲突",
        "西里斯能力的失控",
        "凯恩的身份危机",
        "艾薇拉的家族压力",
        "友谊的第一次重大考验"
      ],
      emotionalArc: "在挫折中成长，学会承担责任"
    }
  ],
  characters: {
    protagonists: [
      {
        name: "西里斯",
        role: "主角",
        arc: "从复仇者到守护者",
        growth: "学会放下仇恨，用力量保护而非毁灭"
      },
      {
        name: "凯恩",
        role: "主角",
        arc: "从叛逆者到领导者",
        growth: "承担起魔族未来的责任，成为桥梁"
      },
      {
        name: "艾薇拉",
        role: "主角",
        arc: "从理想主义者到现实主义者",
        growth: "在理想与现实间找到平衡，成为智慧的引导者"
      }
    ],
    antagonists: [
      {
        name: "洛瑟恩",
        role: "反派",
        motivation: "维护魔族传统与荣耀",
        conflict: "与新一代的价值观冲突"
      },
      {
        name: "教廷",
        role: "幕后黑手",
        motivation: "复活古神，重塑世界秩序",
        conflict: "代表极端的秩序与控制"
      }
    ]
  },
  themes: [
    {
      theme: "成长与蜕变",
      description: "主角们从稚嫩走向成熟，在痛苦中学会承担责任",
      examples: ["西里斯从复仇转向保护", "凯恩从叛逆到承担", "艾薇拉从理想主义到现实主义"]
    },
    {
      theme: "友谊与信任",
      description: "跨越种族的友谊如何在困境中建立和考验",
      examples: ["三人初遇的互不信任", "共同面对危机建立友谊", "信任危机的考验与重建"]
    },
    {
      theme: "偏见与理解",
      description: "种族偏见的根源以及如何通过理解消除隔阂",
      examples: ["各族的历史恩怨", "个体超越群体偏见", "通过行动改变他人看法"]
    },
    {
      theme: "力量与责任",
      description: "强大的力量必须伴随相应的责任与智慧",
      examples: ["西里斯能力失控的后果", "凯恩的血脉责任", "艾薇拉的智慧引导"]
    },
    {
      theme: "牺牲与救赎",
      description: "真正的成长往往需要牺牲，而救赎来自于对他人的关爱",
      examples: ["养父母的牺牲", "瑟莉安的选择", "最终的救赎之路"]
    }
  ]
})

const selectedTab = ref('overview')

const tabs = [
  { id: 'overview', label: '概览', icon: '📖' },
  { id: 'trilogy', label: '三部曲', icon: '📚' },
  { id: 'acts', label: '剧情结构', icon: '🎭' },
  { id: 'characters', label: '角色弧线', icon: '👥' },
  { id: 'themes', label: '主题分析', icon: '💭' }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case '已完成':
      return 'completed'
    case '进行中':
      return 'in-progress'
    case '规划中':
      return 'planned'
    default:
      return 'default'
  }
}
</script>

<template>
  <div class="plot-view">
    <!-- 页面标题 -->
    <div class="page-header">
      <h1 class="page-title">
        <span class="title-icon">📖</span>
        剧情设定
      </h1>
      <p class="page-description">
        探索故事的核心主题、情节结构和角色发展弧线
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
        <div class="overview-section">
          <!-- 主题卡片 -->
          <div class="theme-card">
            <div class="theme-header">
              <h2 class="theme-title">{{ plotData.theme.title }}</h2>
              <div class="theme-keywords">
                <span
                  v-for="keyword in plotData.theme.keywords"
                  :key="keyword"
                  class="keyword-tag"
                >
                  {{ keyword }}
                </span>
              </div>
            </div>
            <p class="theme-description">{{ plotData.theme.description }}</p>
          </div>

          <!-- 进度概览 -->
          <div class="progress-overview">
            <h3 class="section-title">
              <span class="title-icon">📊</span>
              创作进度
            </h3>
            <div class="progress-stats">
              <div
                v-for="book in plotData.trilogy"
                :key="book.book"
                class="progress-item"
              >
                <div class="progress-header">
                  <span class="book-title">{{ book.book }}</span>
                  <span :class="['status-badge', getStatusColor(book.status)]">
                    {{ book.status }}
                  </span>
                </div>
                <div class="progress-bar">
                  <div
                    class="progress-fill"
                    :style="{ width: book.progress + '%' }"
                  ></div>
                </div>
                <div class="progress-details">
                  <span class="progress-text">{{ book.progress }}%</span>
                  <span class="word-count">{{ book.wordCount }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 三部曲标签页 -->
      <div v-if="selectedTab === 'trilogy'" class="tab-content">
        <div class="trilogy-grid">
          <div
            v-for="(book, index) in plotData.trilogy"
            :key="book.book"
            class="book-card"
          >
            <div class="book-header">
              <div class="book-number">{{ index + 1 }}</div>
              <div class="book-info">
                <h3 class="book-title">{{ book.book }}</h3>
                <p class="book-subtitle">{{ book.subtitle }}</p>
              </div>
              <div class="book-meta">
                <span :class="['status-badge', getStatusColor(book.status)]">
                  {{ book.status }}
                </span>
                <span class="word-count">{{ book.wordCount }}</span>
              </div>
            </div>

            <div class="book-content">
              <p class="book-description">{{ book.description }}</p>

              <div class="book-section">
                <h4 class="section-subtitle">🎯 关键事件</h4>
                <ul class="event-list">
                  <li v-for="event in book.keyEvents" :key="event" class="event-item">
                    {{ event }}
                  </li>
                </ul>
              </div>

              <div class="book-section">
                <h4 class="section-subtitle">💭 核心主题</h4>
                <div class="theme-tags">
                  <span
                    v-for="theme in book.themes"
                    :key="theme"
                    class="theme-tag"
                  >
                    {{ theme }}
                  </span>
                </div>
              </div>

              <div class="progress-section">
                <div class="progress-bar">
                  <div
                    class="progress-fill"
                    :style="{ width: book.progress + '%' }"
                  ></div>
                </div>
                <span class="progress-text">{{ book.progress }}% 完成</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 剧情结构标签页 -->
      <div v-if="selectedTab === 'acts'" class="tab-content">
        <div class="acts-timeline">
          <div
            v-for="(act, index) in plotData.acts"
            :key="act.act"
            class="act-item"
          >
            <div class="act-marker">{{ index + 1 }}</div>
            <div class="act-content">
              <div class="act-header">
                <h3 class="act-title">{{ act.title }}</h3>
                <div class="act-meta">
                  <span class="act-number">{{ act.act }}</span>
                  <span class="chapter-range">{{ act.chapters }}</span>
                </div>
              </div>

              <p class="act-description">{{ act.description }}</p>

              <div class="act-details">
                <div class="detail-section">
                  <h4 class="detail-title">🎬 关键时刻</h4>
                  <ul class="moment-list">
                    <li
                      v-for="moment in act.keyMoments"
                      :key="moment"
                      class="moment-item"
                    >
                      {{ moment }}
                    </li>
                  </ul>
                </div>

                <div class="detail-section">
                  <h4 class="detail-title">💡 情感弧线</h4>
                  <p class="emotional-arc">{{ act.emotionalArc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 角色弧线标签页 -->
      <div v-if="selectedTab === 'characters'" class="tab-content">
        <div class="characters-section">
          <!-- 主角 -->
          <div class="character-group">
            <h3 class="group-title">
              <span class="title-icon">⭐</span>
              主要角色
            </h3>
            <div class="character-grid">
              <div
                v-for="char in plotData.characters.protagonists"
                :key="char.name"
                class="character-card protagonist"
              >
                <div class="character-header">
                  <h4 class="character-name">{{ char.name }}</h4>
                  <span class="character-role">{{ char.role }}</span>
                </div>
                <div class="character-arc">
                  <strong>发展弧线：</strong>{{ char.arc }}
                </div>
                <div class="character-growth">
                  <strong>成长历程：</strong>{{ char.growth }}
                </div>
              </div>
            </div>
          </div>

          <!-- 反派 -->
          <div class="character-group">
            <h3 class="group-title">
              <span class="title-icon">⚡</span>
              对立角色
            </h3>
            <div class="character-grid">
              <div
                v-for="char in plotData.characters.antagonists"
                :key="char.name"
                class="character-card antagonist"
              >
                <div class="character-header">
                  <h4 class="character-name">{{ char.name }}</h4>
                  <span class="character-role">{{ char.role }}</span>
                </div>
                <div class="character-motivation">
                  <strong>动机：</strong>{{ char.motivation }}
                </div>
                <div class="character-conflict">
                  <strong>冲突：</strong>{{ char.conflict }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 主题分析标签页 -->
      <div v-if="selectedTab === 'themes'" class="tab-content">
        <div class="themes-grid">
          <div
            v-for="themeItem in plotData.themes"
            :key="themeItem.theme"
            class="theme-analysis-card"
          >
            <div class="theme-card-header">
              <h3 class="theme-card-title">{{ themeItem.theme }}</h3>
            </div>
            <div class="theme-card-content">
              <p class="theme-card-description">{{ themeItem.description }}</p>
              <div class="theme-examples">
                <h4 class="examples-title">📝 具体体现</h4>
                <ul class="examples-list">
                  <li
                    v-for="example in themeItem.examples"
                    :key="example"
                    class="example-item"
                  >
                    {{ example }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.plot-view {
  max-width: 1200px;
  margin: 0 auto;
}

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

/* 状态徽章 */
.status-badge {
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
}

.status-badge.completed {
  background: #dcfce7;
  color: #16a34a;
}

.status-badge.in-progress {
  background: #dbeafe;
  color: #0969da;
}

.status-badge.planned {
  background: #fef3c7;
  color: #d97706;
}

/* 进度条 */
.progress-bar {
  width: 100%;
  height: 8px;
  background: #f6f8fa;
  border-radius: 4px;
  overflow: hidden;
  margin: 8px 0;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #0969da, #58a6ff);
  border-radius: 4px;
  transition: width 0.3s ease;
}

/* 概览页面 */
.overview-section {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
}

.theme-card {
  background: #ffffff;
  border: 1px solid #d0d7de;
  border-radius: 12px;
  padding: 24px;
  transition: all 0.2s ease;
}

.theme-card:hover {
  border-color: #0969da;
  box-shadow: 0 8px 24px rgba(9, 105, 218, 0.12);
}

.theme-header {
  margin-bottom: 16px;
}

.theme-title {
  font-size: 24px;
  font-weight: 600;
  color: #24292f;
  margin: 0 0 12px 0;
}

.theme-keywords {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.keyword-tag {
  background: #f0f9ff;
  color: #0969da;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
}

.theme-description {
  font-size: 16px;
  color: #656d76;
  line-height: 1.6;
  margin: 0;
}

.progress-overview {
  background: #ffffff;
  border: 1px solid #d0d7de;
  border-radius: 12px;
  padding: 20px;
}

.section-title {
  font-size: 18px;
  font-weight: 600;
  color: #24292f;
  margin: 0 0 16px 0;
  display: flex;
  align-items: center;
  gap: 8px;
}

.progress-stats {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.progress-item {
  padding: 16px;
  background: #f6f8fa;
  border-radius: 8px;
}

.progress-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.book-title {
  font-weight: 500;
  color: #24292f;
  font-size: 14px;
}

.progress-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #656d76;
}

.progress-text {
  font-weight: 500;
}

.word-count {
  color: #656d76;
}

/* 三部曲页面 */
.trilogy-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 24px;
}

.book-card {
  background: #ffffff;
  border: 1px solid #d0d7de;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.2s ease;
}

.book-card:hover {
  border-color: #0969da;
  box-shadow: 0 8px 24px rgba(9, 105, 218, 0.12);
  transform: translateY(-2px);
}

.book-header {
  padding: 20px;
  border-bottom: 1px solid #d0d7de;
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.book-number {
  width: 40px;
  height: 40px;
  background: #0969da;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  flex-shrink: 0;
}

.book-info {
  flex: 1;
}

.book-info .book-title {
  font-size: 18px;
  font-weight: 600;
  color: #24292f;
  margin: 0 0 4px 0;
}

.book-subtitle {
  font-size: 14px;
  color: #656d76;
  margin: 0;
  font-style: italic;
}

.book-meta {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-end;
}

.book-content {
  padding: 20px;
}

.book-description {
  font-size: 14px;
  color: #656d76;
  line-height: 1.5;
  margin: 0 0 20px 0;
}

.book-section {
  margin-bottom: 16px;
}

.book-section:last-child {
  margin-bottom: 0;
}

.section-subtitle {
  font-size: 14px;
  font-weight: 600;
  color: #24292f;
  margin: 0 0 8px 0;
}

.event-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.event-item {
  padding: 6px 0;
  font-size: 13px;
  color: #656d76;
  border-left: 3px solid #d0d7de;
  padding-left: 12px;
  margin-bottom: 4px;
  transition: all 0.2s ease;
}

.event-item:hover {
  border-left-color: #0969da;
  background: #f6f8fa;
  padding-left: 16px;
}

.theme-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.theme-tag {
  background: #f3e8ff;
  color: #9333ea;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
}

.progress-section {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #d0d7de;
  display: flex;
  align-items: center;
  gap: 12px;
}

.progress-section .progress-bar {
  flex: 1;
  margin: 0;
}

.progress-section .progress-text {
  font-size: 12px;
  color: #656d76;
  font-weight: 500;
  white-space: nowrap;
}

/* 剧情结构页面 */
.acts-timeline {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.act-item {
  display: flex;
  gap: 24px;
}

.act-marker {
  width: 50px;
  height: 50px;
  background: #0969da;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  flex-shrink: 0;
  position: relative;
}

.act-marker::after {
  content: '';
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 60px;
  background: #d0d7de;
}

.act-item:last-child .act-marker::after {
  display: none;
}

.act-content {
  flex: 1;
  background: #ffffff;
  border: 1px solid #d0d7de;
  border-radius: 12px;
  padding: 24px;
  transition: all 0.2s ease;
}

.act-content:hover {
  border-color: #0969da;
  box-shadow: 0 3px 12px rgba(9, 105, 218, 0.12);
}

.act-header {
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid #d0d7de;
}

.act-title {
  font-size: 18px;
  font-weight: 600;
  color: #24292f;
  margin: 0 0 8px 0;
}

.act-meta {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.act-number,
.chapter-range {
  background: #dbeafe;
  color: #0969da;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
}

.act-description {
  font-size: 14px;
  color: #656d76;
  line-height: 1.5;
  margin: 0 0 20px 0;
}

.act-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.detail-section {
  background: #f6f8fa;
  padding: 16px;
  border-radius: 8px;
}

.detail-title {
  font-size: 14px;
  font-weight: 600;
  color: #24292f;
  margin: 0 0 12px 0;
}

.moment-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.moment-item {
  padding: 4px 0;
  font-size: 13px;
  color: #656d76;
  line-height: 1.4;
}

.emotional-arc {
  font-size: 13px;
  color: #656d76;
  line-height: 1.4;
  margin: 0;
}

/* 角色弧线页面 */
.characters-section {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.character-group {
  background: #ffffff;
  border: 1px solid #d0d7de;
  border-radius: 12px;
  padding: 24px;
}

.group-title {
  font-size: 20px;
  font-weight: 600;
  color: #24292f;
  margin: 0 0 20px 0;
  display: flex;
  align-items: center;
  gap: 8px;
}

.character-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
}

.character-card {
  background: #f6f8fa;
  border-radius: 8px;
  padding: 16px;
  transition: all 0.2s ease;
}

.character-card.protagonist {
  border-left: 4px solid #16a34a;
}

.character-card.antagonist {
  border-left: 4px solid #dc2626;
}

.character-card:hover {
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(31, 35, 40, 0.12);
}

.character-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.character-name {
  font-size: 16px;
  font-weight: 600;
  color: #24292f;
  margin: 0;
}

.character-role {
  background: #dbeafe;
  color: #0969da;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
}

.character-arc,
.character-growth,
.character-motivation,
.character-conflict {
  font-size: 13px;
  color: #656d76;
  line-height: 1.4;
  margin-bottom: 8px;
}

.character-arc:last-child,
.character-growth:last-child,
.character-motivation:last-child,
.character-conflict:last-child {
  margin-bottom: 0;
}

.character-arc strong,
.character-growth strong,
.character-motivation strong,
.character-conflict strong {
  color: #24292f;
}

/* 主题分析页面 */
.themes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
}

.theme-analysis-card {
  background: #ffffff;
  border: 1px solid #d0d7de;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.2s ease;
}

.theme-analysis-card:hover {
  border-color: #0969da;
  box-shadow: 0 8px 24px rgba(9, 105, 218, 0.12);
  transform: translateY(-2px);
}

.theme-card-header {
  background: #f6f8fa;
  padding: 20px;
  border-bottom: 1px solid #d0d7de;
}

.theme-card-title {
  font-size: 18px;
  font-weight: 600;
  color: #24292f;
  margin: 0;
}

.theme-card-content {
  padding: 20px;
}

.theme-card-description {
  font-size: 14px;
  color: #656d76;
  line-height: 1.5;
  margin: 0 0 16px 0;
}

.theme-examples {
  background: #f6f8fa;
  padding: 16px;
  border-radius: 8px;
}

.examples-title {
  font-size: 14px;
  font-weight: 600;
  color: #24292f;
  margin: 0 0 12px 0;
}

.examples-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.example-item {
  padding: 6px 0;
  font-size: 13px;
  color: #656d76;
  line-height: 1.4;
  border-left: 3px solid #d0d7de;
  padding-left: 12px;
  margin-bottom: 6px;
  transition: all 0.2s ease;
}

.example-item:hover {
  border-left-color: #0969da;
  background: #ffffff;
  padding-left: 16px;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .overview-section {
    grid-template-columns: 1fr;
  }

  .trilogy-grid {
    grid-template-columns: 1fr;
  }

  .act-details {
    grid-template-columns: 1fr;
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

  .act-item {
    flex-direction: column;
    gap: 12px;
  }

  .act-marker {
    align-self: flex-start;
  }

  .act-marker::after {
    display: none;
  }

  .character-grid,
  .themes-grid {
    grid-template-columns: 1fr;
  }
}
</style>
