import type { TCMFood } from '../../types'

export const TCM_FOODS: TCMFood[] = [
  {
    name: '黑芝麻',
    category: 'plant',
    effect: '补肾益精血、乌发',
    instructions: '每天一勺黑芝麻粉，可以冲豆浆或撒在粥上。脱发白发者尤其适合。',
  },
  {
    name: '核桃',
    category: 'plant',
    effect: '补肾固精、健脑',
    instructions: '睡前2-3颗配一片姜（姜助吸收不滋腻）。记忆力差者尤其适合。',
  },
  {
    name: '枸杞',
    category: 'plant',
    effect: '滋补肝肾、明目',
    instructions: '每天10-15粒泡水或煮粥。眼干眼涩者适合。',
  },
  {
    name: '山药',
    category: 'plant',
    effect: '健脾补肾固精',
    instructions: '煮粥、炖汤均可。最安全的平补品——脾胃差+肾虚者的首选。排骨山药汤是最简单实用的食疗方。',
  },
  {
    name: '芡实',
    category: 'plant',
    effect: '固精止遗、健脾',
    instructions: '配粥、煮汤。遗精滑精、大便不成形者尤其适合。跟山药一起煮粥是最佳组合。',
  },
  {
    name: '黑豆',
    category: 'plant',
    effect: '入肾经滋阴',
    instructions: '打豆浆或煮黑豆水（一把黑豆+水煮30分钟，喝水不吃豆）。日常补肾基础食材。',
  },
  {
    name: '桑葚',
    category: 'plant',
    effect: '滋阴补血',
    instructions: '干桑葚泡水代茶饮。含花青素帮助修复肾功能。阴虚血虚者适合（口干、手心热）。',
  },
  {
    name: '虾',
    category: 'animal',
    effect: '温补肾阳、高锌高精氨酸',
    instructions: '清蒸或煮汤，不要油炸。怕冷、性欲低者适合。每周1-2次即可。',
  },
  {
    name: '牡蛎',
    category: 'animal',
    effect: '极高含锌、滋补肾阴',
    instructions: '清蒸或煮汤。锌是睾酮合成的必需元素。阴虚火旺者适合。',
  },
  {
    name: '羊肉',
    category: 'animal',
    effect: '温补肾阳驱寒',
    instructions: '冬天吃最合适。炖汤加生姜几片。怕冷、腰膝冷者适合。夏天少吃。',
  },
]

export const TCM_RECIPES = {
  walnutQianshiCongee: {
    name: '核桃芡实粥',
    ingredients: '核桃3-5颗、芡实15g、大米适量',
    instructions: '芡实提前泡30分钟，所有材料一起下锅煮粥。每天早晨一碗。',
    suitable: '最安全的基础方，几乎所有体质都能用。瘦人尤其适合。',
  },
  blackBeanWalnutMilk: {
    name: '黑豆核桃豆浆',
    ingredients: '黑豆一把、核桃3-5颗、黑芝麻一勺',
    instructions: '黑豆提前泡一晚，加核桃黑芝麻打豆浆。代替早餐饮品。',
    suitable: '日常保养。所有人适合。',
  },
  yamRibSoup: {
    name: '山药排骨汤',
    ingredients: '新鲜山药（或干山药片）、排骨、枸杞少许',
    instructions: '排骨焯水后跟山药一起炖1小时，最后撒枸杞。全家都能喝。',
    suitable: '健脾补肾，最温和的食补方。',
  },
  gojiMulberryTea: {
    name: '枸杞桑葚水',
    ingredients: '枸杞10g、桑葚干10g',
    instructions: '开水冲泡，代茶饮。每天一杯。',
    suitable: '偏阴虚者（手心热、盗汗、口干、早泄）。',
  },
  astragalusMuttonSoup: {
    name: '黄芪当归羊肉汤',
    ingredients: '黄芪30g、当归6g、羊肉250g、生姜几片',
    instructions: '羊肉焯水，所有材料一起炖1.5小时。冬天喝。',
    suitable: '偏阳虚者（怕冷、手脚凉、腰膝冷、性欲低）。',
  },
}

export const TCM_AVOID = [
  '鹿茸、鹿鞭等大热壮阳药——虚不受补，火上浇油',
  '红参单独大量使用——气有余便是火',
  '各种"壮阳补酒"——酒精耗阴+壮阳药上火',
  '咖啡过量——耗阴伤肾',
]

export const TCM_SLEEP_NOTE = {
  D: '23:00前入睡是非谈判项。子时（23-1点）是相火下降归肾的关键窗口，这一小时顶白天三小时。睡不好，吃什么都白搭。建议先面诊中医，在医生指导下调理。',
  C: '23:00前入睡——这是恢复最快的途径。子时睡觉一小时，顶白天三小时。',
  B: '23:00前入睡——睡好比吃药更重要。',
  A: '保持23:00前入睡即可。预防重于治疗。',
}
