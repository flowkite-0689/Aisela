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
    description: "「月光撕裂黑夜」，暗示其美貌足以动摇既定秩序",
    appearance: {
      hair: "银白色长发如月华流淌至腰间，发梢泛着极淡的冰蓝色光泽",
      eyes: "左眼熔金色竖瞳，右眼深紫色带星辰纹路",
      features: "兼具魔族的锐利与近乎神性的柔美"
    },
    abilities: ["龙瞳压制", "魔族王室血脉", "政治斗争"],
    background: "通过政治斗争而非传统继承成为魔王，推翻兄长暴政统治"
  },
  {
    id: 2,
    name: "艾莉安·银叶",
    englishName: "Aeliane Silverleaf",
    category: "main",
    role: "精灵公主",
    description: "「破晓时第一缕风」，伊瑟拉的直系血脉",
    appearance: {
      hair: "及膝的淡绿色卷发如初春藤蔓，发间缠绕自发光银叶头饰",
      eyes: "琥珀色瞳孔，虹膜纹理如年轮，凝视时可见森林倒影",
      features: "透出珍珠般光泽的皮肤，比寻常精灵更纤长的耳朵"
    },
    abilities: ["植物低语", "幻术免疫", "自然魔法"],
    background: "精灵王室血脉，能听见植物低语，在和谈中为促成和平而牺牲"
  },
  {
    id: 3,
    name: "卡莱尔·辉刃",
    englishName: "Carlyle Brightblade",
    category: "main",
    role: "前任勇者",
    description: "原教廷圣骑士，在和谈中被内鬼杀死",
    appearance: {
      hair: "灿金色短发凌乱，前额一绺突兀的银发",
      eyes: "右眼偶尔泛起紫光，魔化时紫色瞳孔扩散至整个眼球",
      features: "兼具少年明朗与战士沧桑，左颊伤疤从眉骨延伸至唇角"
    },
    abilities: ["圣剑技", "魔化能力", "战斗经验"],
    background: "被教廷宣传为牺牲自己重创魔王的英雄，实际在和谈中被杀"
  },
  {
    id: 4,
    name: "西里斯·弗拉尔",
    englishName: "Cyris Flayer",
    category: "main",
    role: "混血后代",
    description: "洛瑟恩与艾莉安的女儿，被重塑为男身",
    appearance: {
      hair: "继承父亲银发，发梢渐变为母亲的淡绿色，扎成两条长辫",
      eyes: "平日呈精灵的琥珀色，情绪波动时闪现父亲的熔金竖瞳",
      features: "尖耳被幻术化为圆润耳垂，耳背有微型银叶胎记"
    },
    abilities: ["植物感知", "龙瞳魔力", "草药学天赋"],
    background: "1岁时被精灵神树重塑身体，在人类王国绿叶镇成长"
  },
  {
    id: 5,
    name: "凯恩·曙光",
    englishName: "Kane Dawnlight",
    category: "main",
    role: "现任勇者",
    description: "新一代勇者，体内植入前任勇者卡莱尔的灵魂碎片",
    appearance: {
      hair: "金发蓝眼",
      eyes: "蓝色眼睛，战斗时会发光",
      features: "乐观开朗的面容"
    },
    abilities: ["圣剑技", "灵魂共鸣", "治愈能力"],
    background: "被教会从战场废墟捡回的孤儿，实际是魔族与人类混血"
  }
])

const categories = ref([
  { value: 'all', label: '全部角色' },
  { value: 'main', label: '主要角色' },
  { value: 'support', label: '配角' }
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
    <div class="container">
      <h1 class="page-title">人物设定</h1>

      <div class="filters-section">
        <div class="search-box">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="搜索角色名称、英文名或描述..."
            class="search-input"
          />
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

      <div class="characters-grid">
        <div
          v-for="character in filteredCharacters"
          :key="character.id"
          class="character-card"
        >
          <div class="character-header">
            <h3 class="character-name">{{ character.name }}</h3>
            <p class="character-english">{{ character.englishName }}</p>
            <span class="character-role">{{ character.role }}</span>
          </div>

          <div class="character-content">
            <div class="character-description">
              <p>{{ character.description }}</p>
            </div>

            <div class="character-details">
              <div class="detail-section">
                <h4>外貌特征</h4>
                <div class="appearance-details">
                  <p><strong>发色：</strong>{{ character.appearance.hair }}</p>
                  <p><strong>眼睛：</strong>{{ character.appearance.eyes }}</p>
                  <p><strong>特征：</strong>{{ character.appearance.features }}</p>
                </div>
              </div>

              <div class="detail-section">
                <h4>特殊能力</h4>
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

              <div class="detail-section">
                <h4>背景故事</h4>
                <p class="background-text">{{ character.background }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="filteredCharacters.length === 0" class="no-results">
        <p>没有找到匹配的角色</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.character-view {
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

.filters-section {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 30px;
  border-radius: 20px;
  margin-bottom: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.search-box {
  margin-bottom: 20px;
}

.search-input {
  width: 100%;
  padding: 15px 20px;
  border: 2px solid #ecf0f1;
  border-radius: 25px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease;
}

.search-input:focus {
  border-color: #667eea;
}

.category-filters {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
}

.filter-btn {
  padding: 10px 20px;
  border: 2px solid #ecf0f1;
  background: white;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  color: #34495e;
}

.filter-btn:hover {
  border-color: #667eea;
  color: #667eea;
}

.filter-btn.active {
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: white;
  border-color: transparent;
}

.characters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
}

.character-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.character-card:hover {
  transform: translateY(-5px);
}

.character-header {
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: white;
  padding: 25px;
  text-align: center;
}

.character-name {
  font-size: 1.5rem;
  margin-bottom: 5px;
}

.character-english {
  font-size: 0.9rem;
  opacity: 0.8;
  margin-bottom: 10px;
}

.character-role {
  background: rgba(255, 255, 255, 0.2);
  padding: 5px 15px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
}

.character-content {
  padding: 25px;
}

.character-description {
  margin-bottom: 20px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 10px;
  color: #5a6c7d;
  line-height: 1.6;
}

.character-details {
  display: grid;
  gap: 20px;
}

.detail-section h4 {
  color: #2c3e50;
  margin-bottom: 10px;
  font-size: 1.1rem;
  border-bottom: 2px solid #ecf0f1;
  padding-bottom: 5px;
}

.appearance-details p {
  margin-bottom: 8px;
  color: #5a6c7d;
  line-height: 1.5;
}

.appearance-details strong {
  color: #2c3e50;
}

.abilities-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.ability-tag {
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: white;
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
}

.background-text {
  color: #5a6c7d;
  line-height: 1.6;
}

.no-results {
  text-align: center;
  padding: 60px 20px;
  color: white;
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .characters-grid {
    grid-template-columns: 1fr;
  }

  .category-filters {
    justify-content: flex-start;
  }

  .filter-btn {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
}
</style>
