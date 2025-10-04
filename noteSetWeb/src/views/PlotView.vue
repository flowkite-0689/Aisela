<script setup lang="ts">
import { ref } from 'vue'

const plotData = ref({
  theme: "一个关于身份、命运与救赎的奇幻故事，围绕魔族王子与精灵公主的禁忌之恋，以及他们的混血后代打破三族仇恨循环的成长历程。",
  acts: [
    {
      title: "第一幕：血色盟约的阴谋",
      time: "星历227年春分",
      location: "魔族边境城市",
      events: [
        {
          title: "和谈破裂",
          description: "魔王洛瑟恩与勇者卡莱尔在边境城市进行秘密和谈，精灵公主艾莉安以个人身份参与，希望促成三族和平。暗影商会与教廷联手破坏和谈。"
        },
        {
          title: "刺杀事件",
          description: "议事厅遭到袭击，艾莉安中毒，莉娜抱着1岁的瑟莉安逃到议事厅。艾莉安用尽最后力气将莉娜和女儿传送到城外。卡莱尔被洛瑟恩的内鬼杀死，洛瑟恩被手下下毒。"
        },
        {
          title: "后续影响",
          description: "人类向魔族发起全面战争，精灵王被长老会记忆篡改，误以为洛瑟恩杀死了艾莉安，精灵也加入战争，三族陷入混战。"
        }
      ]
    },
    {
      title: "第二幕：隐藏的成长",
      time: "星历228-241年",
      location: "人类王国边境小镇绿叶镇",
      events: [
        {
          title: "瑟莉安的重塑与收养",
          description: "莉娜将瑟莉安带回精灵神树，重塑身体为男性，新名字西里斯·弗拉尔，被弗拉尔家族收养。"
        },
        {
          title: "平凡生活中的异常",
          description: "西里斯能看到植物就知道其作用，实际继承了艾莉安的能力。莉娜伪装成游商定期检查封印。12岁生日时封印开始松动。"
        }
      ]
    },
    {
      title: "第三幕：学院篇章",
      time: "星历241-243年",
      location: "三王冠联合战争学院",
      events: [
        {
          title: "学院入学",
          description: "西里斯14岁进入学院，魔法天赋为0但草药学天赋极高，结识新一代勇者凯恩·曙光和艾薇拉·银辉。"
        },
        {
          title: "梦境城镇事件",
          description: "草药学老师埃德蒙利用精灵秘宝抽取学生生命力复活亡妻，西里斯通过分析植物异常定位核心位置，成功救出同伴。"
        }
      ]
    },
    {
      title: "第四幕：觉醒与复仇",
      time: "星历243年",
      location: "多个地点",
      events: [
        {
          title: "家园毁灭",
          description: "血翼兵团袭击绿荫镇，弗拉尔夫妇牺牲保护镇民，西里斯性格从温和变得偏执，开始秘密研究魔族解剖学。"
        },
        {
          title: "龙瞳移植",
          description: "西里斯利用埃德蒙的笔记给自己移植龙瞳，失明但获得魔力，失去读取植物的能力，瞳纹无法控制地显现。"
        },
        {
          title: "假装叛变",
          description: "参加讨伐魔王的行动，面对洛瑟恩时假装叛变，洛瑟恩通过龙瞳瞳纹认出西里斯是自己的女儿。"
        }
      ]
    },
    {
      title: "第五幕：真相与救赎",
      time: "星历243年末",
      location: "战场",
      events: [
        {
          title: "父女相认",
          description: "洛瑟恩与西里斯在战场上相认，西里斯了解到自己的真实身世和父母的爱情。"
        },
        {
          title: "破坏古神复活",
          description: "西里斯为保护凯恩，启动传送法阵与洛瑟恩一起离开，意外破坏了教廷利用两败俱伤来复活古神的计划。"
        },
        {
          title: "打破轮回",
          description: "莉娜揭露精灵长老会参与刺杀的证据，暗影商会的阴谋被曝光，三族开始反思仇恨的根源，寻求真正的和平。"
        }
      ]
    }
  ],
  conflicts: [
    { title: "身份认同", description: "西里斯从人类到发现魔族血统的身份转变" },
    { title: "复仇与宽恕", description: "个人仇恨与种族和解的矛盾" },
    { title: "真相与谎言", description: "历史真相被掩盖，需要勇气揭露" },
    { title: "命运与选择", description: "血脉宿命与个人意志的较量" }
  ],
  themes: [
    { title: "打破偏见", description: "不同种族之间的理解与和解" },
    { title: "成长代价", description: "力量的获得往往伴随着失去" },
    { title: "爱的传承", description: "父母的爱如何影响下一代的选择" },
    { title: "希望之光", description: "即使在最黑暗的时刻，也要追逐光明" }
  ]
})
</script>

<template>
  <div class="plot-view">
    <div class="container">
      <h1 class="page-title">剧情大纲</h1>

      <section class="theme-section">
        <div class="theme-card">
          <h2>📖 故事核心主题</h2>
          <p>{{ plotData.theme }}</p>
        </div>
      </section>

      <section class="acts-section">
        <h2 class="section-title">🎭 主要剧情线</h2>
        <div class="acts-container">
          <div
            v-for="(act, index) in plotData.acts"
            :key="index"
            class="act-card"
          >
            <div class="act-header">
              <h3 class="act-title">{{ act.title }}</h3>
              <div class="act-meta">
                <span class="act-time">⏰ {{ act.time }}</span>
                <span class="act-location">📍 {{ act.location }}</span>
              </div>
            </div>

            <div class="events-list">
              <div
                v-for="(event, eventIndex) in act.events"
                :key="eventIndex"
                class="event-item"
              >
                <h4 class="event-title">{{ event.title }}</h4>
                <p class="event-description">{{ event.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="details-section">
        <div class="details-grid">
          <div class="detail-card">
            <h3>🎯 核心冲突</h3>
            <div class="conflict-list">
              <div
                v-for="(conflict, index) in plotData.conflicts"
                :key="index"
                class="conflict-item"
              >
                <strong>{{ conflict.title }}</strong>：{{ conflict.description }}
              </div>
            </div>
          </div>

          <div class="detail-card">
            <h3>🌟 主题寓意</h3>
            <div class="theme-list">
              <div
                v-for="(theme, index) in plotData.themes"
                :key="index"
                class="theme-item"
              >
                <strong>{{ theme.title }}</strong>：{{ theme.description }}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.plot-view {
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

.theme-section {
  margin-bottom: 60px;
}

.theme-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.theme-card h2 {
  color: #2c3e50;
  margin-bottom: 20px;
  font-size: 1.8rem;
}

.theme-card p {
  color: #34495e;
  font-size: 1.1rem;
  line-height: 1.8;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  color: white;
  margin-bottom: 40px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.acts-container {
  display: grid;
  gap: 30px;
}

.act-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.act-header {
  margin-bottom: 25px;
  border-bottom: 2px solid #ecf0f1;
  padding-bottom: 15px;
}

.act-title {
  color: #2c3e50;
  font-size: 1.6rem;
  margin-bottom: 10px;
}

.act-meta {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.act-time, .act-location {
  color: #7f8c8d;
  font-size: 0.9rem;
  background: #ecf0f1;
  padding: 5px 12px;
  border-radius: 15px;
}

.events-list {
  display: grid;
  gap: 20px;
}

.event-item {
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
  border-left: 4px solid #667eea;
}

.event-title {
  color: #2c3e50;
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.event-description {
  color: #5a6c7d;
  line-height: 1.6;
}

.details-section {
  margin-top: 60px;
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
}

.detail-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.detail-card h3 {
  color: #2c3e50;
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.conflict-list, .theme-list {
  display: grid;
  gap: 15px;
}

.conflict-item, .theme-item {
  padding: 15px;
  background: #f8f9fa;
  border-radius: 10px;
  color: #5a6c7d;
  line-height: 1.6;
}

.conflict-item strong, .theme-item strong {
  color: #2c3e50;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .act-meta {
    flex-direction: column;
    gap: 10px;
  }

  .details-grid {
    grid-template-columns: 1fr;
  }
}
</style>
