<script setup lang="ts">
import { ref, computed } from 'vue'

const searchQuery = ref('')
const selectedCategory = ref('all')

const characters = ref([
  {
    id: 1,
    name: "洛瑟恩·暗星",
    englishName: "Lorthen Darkstar",
    category: "main",
    role: "魔族王子/魔王",
    story: "《为了什么活着》",
    description: "「月光撕裂黑夜」，通过政治斗争成为魔王，推翻兄长暴政统治",
    appearance: {
      hair: "银白色长发如月华流淌至腰间，发梢泛着极淡的冰蓝色光泽",
      eyes: "左眼熔金色竖瞳，右眼深紫色带星辰纹路",
      features: "兼具魔族的锐利与近乎神性的柔美"
    },
    abilities: ["龙瞳压制", "魔族王室血脉", "政治斗争", "魔力操控"],
    background: "星历180年登基，在和谈中失去挚爱艾莉安，16年后与女儿瑟莉安重逢并相认"
  },
  {
    id: 2,
    name: "艾莉安·银叶",
    englishName: "Aeliane Silverleaf",
    category: "main",
    role: "精灵公主",
    story: "《为了什么活着》",
    description: "「破晓时第一缕风」，伊瑟拉的直系血脉，为和平而牺牲",
    appearance: {
      hair: "及膝的淡绿色卷发如初春藤蔓，发间缠绕自发光银叶头饰",
      eyes: "琥珀色瞳孔，虹膜纹理如年轮，凝视时可见森林倒影",
      features: "透出珍珠般光泽的皮肤，比寻常精灵更纤长的耳朵"
    },
    abilities: ["植物低语", "幻术免疫", "自然魔法", "治愈术"],
    background: "精灵王室血脉，在星历227年和谈中遇刺身亡，临终前将女儿托付给莉娜"
  },
  {
    id: 3,
    name: "西里斯·弗拉尔/瑟莉安·星叶",
    englishName: "Cyris Flayer/Selyane Starleaf",
    category: "main",
    role: "混血后代/新生代希望",
    story: "《新枝叶的故事》",
    description: "洛瑟恩与艾莉安的女儿，经历从幸福少年到复仇战士再到和平使者的转变",
    appearance: {
      hair: "继承父亲银发，发梢渐变为母亲的淡绿色",
      eyes: "平日呈精灵的琥珀色，情绪波动时闪现父亲的熔金竖瞳",
      features: "精灵神树重塑后的外貌，耳背有微型银叶胎记"
    },
    abilities: ["植物感知", "龙瞳魔力", "草药学天赋", "传送阵法"],
    background: "星历227年出生，被重塑身体在绿荫镇成长，后觉醒真实身份"
  },
  {
    id: 4,
    name: "凯恩·曙光",
    englishName: "Kane Dawnlight",
    category: "main",
    role: "现任勇者",
    story: "《新枝叶的故事》",
    description: "新一代勇者，西里斯在学院的挚友，乐观开朗的人类少年",
    appearance: {
      hair: "金色短发，阳光般明亮",
      eyes: "蓝色眼睛，战斗时会发光",
      features: "乐观开朗的面容，充满正义感"
    },
    abilities: ["圣剑技", "治愈能力", "光明魔法", "领导力"],
    background: "三王冠联合战争学院学生，与西里斯、艾薇拉组成要好的三人组"
  },
  {
    id: 5,
    name: "艾薇拉·银辉",
    englishName: "Evilla Silverglow",
    category: "main",
    role: "贵族大小姐",
    story: "《新枝叶的故事》",
    description: "傲娇的贵族大小姐，对西里斯有特殊感情，擅长传送阵法",
    appearance: {
      hair: "银色长发，精心打理",
      eyes: "紫色眼睛，透露出高贵气质",
      features: "精致的贵族容貌，略带傲慢但善良"
    },
    abilities: ["传送阵法", "空间魔法", "贵族礼仪", "战术分析"],
    background: "银辉城邦贵族出身，在学院中与西里斯和凯恩建立深厚友谊"
  },
  {
    id: 6,
    name: "莉娜·晨光",
    englishName: "Lina Dawnlight",
    category: "support",
    role: "艾莉安的侍女",
    story: "两个故事",
    description: "精灵贵族出身，艾莉安的贴身侍女和密友，承担抚养瑟莉安的重任",
    appearance: {
      hair: "浅金色长发，温和的精灵特征",
      eyes: "绿色眼睛，充满慈爱",
      features: "温和善良的面容，成熟稳重"
    },
    abilities: ["治疗法术", "伪装技巧", "调查能力", "照顾他人"],
    background: "在和谈破裂中救出瑟莉安，后化名游商格温暗中保护西里斯"
  },
  {
    id: 7,
    name: "罗南·弗拉尔",
    englishName: "Ronan Flayer",
    category: "support",
    role: "西里斯的哥哥",
    story: "《新枝叶的故事》",
    description: "弗拉尔家族的长子，西里斯的养兄，在绿荫镇毁灭中幸存",
    appearance: {
      hair: "棕色短发，朴实的农家青年",
      eyes: "棕色眼睛，坚毅而温和",
      features: "健壮的体格，诚实可靠的面容"
    },
    abilities: ["农业技能", "基础战斗", "手工制作", "照顾他人"],
    background: "比西里斯大3岁的养兄，因外出而在绿荫镇毁灭中幸存，后与瑟莉安重逢"
  },
  {
    id: 8,
    name: "卡莱尔·辉刃",
    englishName: "Carlyle Brightblade",
    category: "support",
    role: "前任勇者",
    story: "《为了什么活着》",
    description: "原教廷圣骑士，在和谈中被内鬼杀死的悲剧英雄",
    appearance: {
      hair: "灿金色短发凌乱，前额一绺突兀的银发",
      eyes: "蓝色眼睛，充满正义感",
      features: "兼具少年的明朗与战士的沧桑"
    },
    abilities: ["圣剑技", "治愈术", "战斗经验", "正义感召"],
    background: "被教廷宣传为牺牲自己重创魔王的英雄，实际是和谈破裂的受害者"
  }
])

const categories = ref([
  { value: 'all', label: '全部角色' },
  { value: 'main', label: '主要角色' },
  { value: 'support', label: '重要配角' }
])

const filteredCharacters = computed(() => {
  let filtered = characters.value

  if (selectedCategory.value !== 'all') {
    filtered = filtered.filter(char => char.category === selectedCategory.value)
  }

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(char =>
      char.name.toLowerCase().includes(query) ||
      char.englishName.toLowerCase().includes(query) ||
      char.role.toLowerCase().includes(query) ||
      char.description.toLowerCase().includes(query)
    )
  }

  return filtered
})
</script>

<template>
  <div class="character-view">
    <!-- 页面标题 -->
    <div class="page-header">
      <h1 class="page-title">
        <span class="title-icon">👑</span>
        人物设定
      </h1>
      <p class="page-description">
        探索《追逐光的》世界中的角色档案和详细设定
      </p>
    </div>

    <!-- 搜索和筛选 -->
    <div class="filters-section">
      <div class="search-container">
        <div class="search-box">
          <svg class="search-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path fillRule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path>
          </svg>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="搜索角色名称、英文名或描述..."
            class="search-input"
          />
        </div>
      </div>

      <div class="category-filters">
        <button
          v-for="category in categories"
          :key="category.value"
          @click="selectedCategory = category.value"
          :class="['filter-btn', { active: selectedCategory === category.value }]"
        >
          {{ category.label }}
        </button>
      </div>
    </div>

    <!-- 角色列表 -->
    <div class="characters-section">
      <div class="characters-grid">
        <div
          v-for="character in filteredCharacters"
          :key="character.id"
          class="character-card"
        >
          <!-- 角色头部信息 -->
          <div class="character-header">
            <div class="character-avatar">
              {{ character.name.charAt(0) }}
            </div>
            <div class="character-basic">
              <h3 class="character-name">{{ character.name }}</h3>
              <p class="character-english">{{ character.englishName }}</p>
              <div class="character-tags">
                <span class="role-tag">{{ character.role }}</span>
                <span v-if="character.story" class="story-tag">{{ character.story }}</span>
              </div>
            </div>
          </div>

          <!-- 角色描述 -->
          <div class="character-description">
            <p>{{ character.description }}</p>
          </div>

          <!-- 角色详细信息 -->
          <div class="character-details">
            <!-- 外貌特征 -->
            <div class="detail-section">
              <h4 class="detail-title">
                <span class="detail-icon">👤</span>
                外貌特征
              </h4>
              <div class="appearance-list">
                <div class="appearance-item">
                  <strong>发色：</strong>{{ character.appearance.hair }}
                </div>
                <div class="appearance-item">
                  <strong>眼睛：</strong>{{ character.appearance.eyes }}
                </div>
                <div class="appearance-item">
                  <strong>特征：</strong>{{ character.appearance.features }}
                </div>
              </div>
            </div>

            <!-- 特殊能力 -->
            <div class="detail-section">
              <h4 class="detail-title">
                <span class="detail-icon">⚡</span>
                特殊能力
              </h4>
              <div class="abilities-list">
                <span
                  v-for="ability in character.abilities"
                  :key="ability"
                  class="ability-tag"
                >
                  {{ ability }}
                </span>
              </div>
            </div>

            <!-- 背景故事 -->
            <div class="detail-section">
              <h4 class="detail-title">
                <span class="detail-icon">📖</span>
                背景故事
              </h4>
              <p class="background-text">{{ character.background }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 无结果提示 -->
      <div v-if="filteredCharacters.length === 0" class="no-results">
        <div class="no-results-icon">🔍</div>
        <h3>没有找到匹配的角色</h3>
        <p>尝试调整搜索条件或选择不同的分类</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.character-view {
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

/* 搜索和筛选 */
.filters-section {
  background: #ffffff;
  border: 1px solid #d0d7de;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 24px;
}

.search-container {
  margin-bottom: 20px;
}

.search-box {
  position: relative;
  max-width: 400px;
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #656d76;
}

.search-input {
  width: 100%;
  padding: 8px 12px 8px 36px;
  border: 1px solid #d0d7de;
  border-radius: 6px;
  font-size: 14px;
  background: #f6f8fa;
  transition: all 0.2s ease;
}

.search-input:focus {
  outline: none;
  border-color: #0969da;
  background: #ffffff;
  box-shadow: 0 0 0 3px rgba(9, 105, 218, 0.12);
}

.category-filters {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 6px 16px;
  border: 1px solid #d0d7de;
  background: #f6f8fa;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: #24292f;
  transition: all 0.2s ease;
}

.filter-btn:hover {
  background: #ffffff;
  border-color: #0969da;
}

.filter-btn.active {
  background: #0969da;
  color: #ffffff;
  border-color: #0969da;
}

/* 角色卡片 */
.characters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 24px;
}

.character-card {
  background: #ffffff;
  border: 1px solid #d0d7de;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.2s ease;
}

.character-card:hover {
  border-color: #0969da;
  box-shadow: 0 8px 24px rgba(9, 105, 218, 0.12);
  transform: translateY(-2px);
}

.character-header {
  padding: 20px;
  border-bottom: 1px solid #d0d7de;
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.character-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #0969da, #0550ae);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 600;
  flex-shrink: 0;
}

.character-basic {
  flex: 1;
}

.character-name {
  font-size: 18px;
  font-weight: 600;
  color: #24292f;
  margin: 0 0 4px 0;
}

.character-english {
  font-size: 14px;
  color: #656d76;
  margin: 0 0 8px 0;
  font-style: italic;
}

.character-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.role-tag {
  background: #dbeafe;
  color: #0969da;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
}

.story-tag {
  background: #f0fdf4;
  color: #16a34a;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
}

.character-description {
  padding: 16px 20px;
  border-bottom: 1px solid #d0d7de;
}

.character-description p {
  font-size: 14px;
  color: #656d76;
  line-height: 1.5;
  margin: 0;
}

.character-details {
  padding: 20px;
}

.detail-section {
  margin-bottom: 20px;
}

.detail-section:last-child {
  margin-bottom: 0;
}

.detail-title {
  font-size: 14px;
  font-weight: 600;
  color: #24292f;
  margin: 0 0 8px 0;
  display: flex;
  align-items: center;
  gap: 6px;
}

.detail-icon {
  font-size: 14px;
}

.appearance-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.appearance-item {
  font-size: 13px;
  color: #656d76;
  line-height: 1.4;
}

.appearance-item strong {
  color: #24292f;
}

.abilities-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.ability-tag {
  background: #f3e8ff;
  color: #9333ea;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
}

.background-text {
  font-size: 13px;
  color: #656d76;
  line-height: 1.5;
  margin: 0;
}

/* 无结果提示 */
.no-results {
  text-align: center;
  padding: 60px 20px;
  color: #656d76;
}

.no-results-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.no-results h3 {
  font-size: 20px;
  color: #24292f;
  margin: 0 0 8px 0;
}

.no-results p {
  font-size: 14px;
  margin: 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .characters-grid {
    grid-template-columns: 1fr;
  }

  .page-title {
    font-size: 24px;
  }

  .filters-section {
    padding: 20px;
  }

  .character-header {
    padding: 16px;
  }

  .character-details {
    padding: 16px;
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
  .character-card {
    background: #161b22;
    border-color: #30363d;
  }

  .character-card:hover {
    border-color: #58a6ff;
    box-shadow: 0 8px 24px rgba(88, 166, 255, 0.12);
  }

  .search-input {
    background: #21262d;
    border-color: #30363d;
    color: #f0f6fc;
  }

  .search-input:focus {
    border-color: #58a6ff;
    background: #0d1117;
    box-shadow: 0 0 0 3px rgba(88, 166, 255, 0.12);
  }

  .filter-btn {
    background: #21262d;
    border-color: #30363d;
    color: #f0f6fc;
  }

  .filter-btn:hover {
    background: #30363d;
    border-color: #58a6ff;
  }

  .filter-btn.active {
    background: #58a6ff;
    border-color: #58a6ff;
  }

  .character-name,
  .detail-title {
    color: #f0f6fc;
  }

  .character-english,
  .character-description p,
  .appearance-item,
  .background-text {
    color: #8b949e;
  }

  .appearance-item strong {
    color: #f0f6fc;
  }

  .no-results h3 {
    color: #f0f6fc;
  }
}
</style>
