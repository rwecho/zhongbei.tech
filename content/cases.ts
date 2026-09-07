export type CaseMetric = {
  label: string;
  value: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  /** 一句话成果（列表卡片用） */
  summary: string;
  challenge: string;
  solution: string;
  result: string;
  metrics: CaseMetric[];
  techStack: string[];
  featured: boolean;
};

export const cases: CaseStudy[] = [
  {
    slug: "retail-smart-cs",
    title: "连锁零售企业智能客服知识库",
    industry: "连锁零售",
    summary: "基于 RAG 的全渠道智能客服，问题一次解决率大幅提升",
    challenge:
      "客户在全国有 800+ 门店，客服团队 200 人，门店咨询（商品、库存、售后、加盟）分散在电话、小程序、企微多个渠道。知识文档超过 4000 篇且更新频繁，客服口径不统一，新客服培养周期长达 3 个月。",
    solution:
      "我们构建了统一知识库与 RAG 问答服务：4000+ 篇文档自动解析、切分与增量更新；混合检索 + 重排序保证答案准确；每个回答附带原文出处，客服可一键核验。企微与小程序渠道通过 API 接入，复杂问题自动转人工并携带上下文。",
    result:
      "智能客服上线后承接了约 70% 的咨询量，一次解决率显著提升，新客服培养周期从 3 个月缩短到 4 周。知识库运营成为常态化机制，文档更新当天即可生效。",
    metrics: [
      { label: "AI 承接咨询量", value: "70%" },
      { label: "新客服培养周期", value: "3 个月 → 4 周" },
      { label: "知识文档接入", value: "4,000+ 篇" },
      { label: "回答可溯源率", value: "100%" },
    ],
    techStack: ["RAG", "BGE-M3", "Reranker", "Milvus", "企业微信", "小程序"],
    featured: true,
  },
  {
    slug: "manufacturing-contract-copilot",
    title: "制造业集团法务合同审查 Copilot",
    industry: "高端制造",
    summary: "合同初审从 2 小时压缩到 10 分钟，风险条款自动标注",
    challenge:
      "集团每年签署采购、销售、保密协议等合同超过 8,000 份，法务团队初审压力大。不同模板的合同条款差异大，风险点（付款条件、违约责任、知识产权归属）依赖人工逐条比对，容易遗漏且周期长。",
    solution:
      "基于大模型构建合同审查 Copilot：内置集团合同审查清单与风险规则库，上传合同后自动识别关键条款、比对集团标准、标注风险等级并给出修改建议；法务在 Web 端逐条确认，审查记录自动归档。私有化部署，合同数据不出内网。",
    result:
      "合同初审时间从平均 2 小时压缩到 10 分钟，法务只需处理 AI 标注的风险点。遗漏率显著下降，法务团队将精力转向高价值的谈判与诉讼支持。",
    metrics: [
      { label: "初审时间", value: "2 小时 → 10 分钟" },
      { label: "年审查合同量", value: "8,000+ 份" },
      { label: "风险点召回率", value: "95%+" },
      { label: "部署方式", value: "全私有化" },
    ],
    techStack: ["Claude", "vLLM 私有化", "结构化输出", "Next.js", "PostgreSQL"],
    featured: true,
  },
  {
    slug: "finance-agent-analytics",
    title: "金融机构多 Agent 数据分析平台",
    industry: "金融",
    summary: "自然语言驱动取数与分析，日报产出从半天到 10 分钟",
    challenge:
      "数据分析团队每天响应大量临时取数需求，分析师 60% 时间花在写 SQL 和对口径上。业务人员不懂 SQL，需求排队严重，等报表出来业务窗口已经错过。",
    solution:
      "我们设计了多 Agent 协作的数据分析平台：语义层 Agent 维护统一的指标口径，SQL Agent 负责生成与执行查询，校验 Agent 对结果做异常检测与交叉验证。业务人员用自然语言提问，Agent 自动取数、生成图表与分析摘要，全过程留痕可审计。",
    result:
      "常规日报与临时取数实现自助化，产出时间从半天缩短到 10 分钟。分析师从重复取数中解放，转向专题分析。所有查询经过权限校验与审计，通过集团安全评审。",
    metrics: [
      { label: "分析产出时间", value: "半天 → 10 分钟" },
      { label: "临时取数自助率", value: "85%" },
      { label: "指标口径统一", value: "200+ 指标" },
      { label: "审计合规", value: "全链路留痕" },
    ],
    techStack: ["LangGraph", "多 Agent 编排", "语义层", "ClickHouse", "ECharts"],
    featured: true,
  },
  {
    slug: "industrial-vision-qc",
    title: "工业视觉智能质检系统",
    industry: "工业制造",
    summary: "产线质检准确率提升至 99.2%，漏检率下降 80%",
    challenge:
      "某精密零部件产线依赖人工目检，节拍快、标准严，质检员高强度作业下漏检率居高不下，且检测标准依赖老师傅经验，难以复制与传承。",
    solution:
      "部署基于深度学习的视觉质检系统，结合大模型辅助缺陷描述与质检报告自动生成。系统与产线 PLC 联动，不合格品自动剔除；检测标准数字化沉淀，新产线复制部署周期从 6 周缩短到 1 周。",
    result:
      "质检准确率提升至 99.2%，漏检率下降 80%，质检人力节省 60%。检测数据回流用于工艺改进，良品率持续提升。",
    metrics: [
      { label: "质检准确率", value: "99.2%" },
      { label: "漏检率下降", value: "80%" },
      { label: "质检人力节省", value: "60%" },
      { label: "新产线部署", value: "6 周 → 1 周" },
    ],
    techStack: ["PyTorch", "视觉检测", "LLM 报告生成", "PLC 联动", "边缘计算"],
    featured: false,
  },
  {
    slug: "consumer-content-engine",
    title: "消费品牌营销内容生成引擎",
    industry: "消费品牌",
    summary: "多平台营销内容产能提升 5 倍，品牌调性保持一致",
    challenge:
      "品牌需要在抖音、小红书、天猫等多个平台维持高频内容更新，外部代写成本高且品牌调性难控制，内部团队陷入日常素材生产，无暇策划。",
    solution:
      "构建品牌专属的内容生成引擎：沉淀品牌语料与风格规范（Brand Voice），结合爆文结构模板，按平台特性一键生成图文与短视频脚本初稿；内置合规审查（广告法敏感词）与人工审核流，成品经编辑确认后分发。",
    result:
      "内容产能提升 5 倍，单条内容成本下降 70%，品牌调性一致性评分显著提升。团队工作重心从「写」转向「策划与把关」。",
    metrics: [
      { label: "内容产能", value: "提升 5 倍" },
      { label: "单条成本", value: "下降 70%" },
      { label: "覆盖平台", value: "5 个" },
      { label: "广告法合规审查", value: "自动 + 人工双审" },
    ],
    techStack: ["GPT-4o", "Nano Banana 图像生成", "品牌语料库", "工作流审批", "多平台 API"],
    featured: false,
  },
  {
    slug: "logistics-smart-scheduling",
    title: "物流企业智能排产调度助手",
    industry: "物流供应链",
    summary: "排线效率提升 40%，车辆空驶率下降 12 个百分点",
    challenge:
      "城配业务日均 2,000+ 运单，调度员凭经验人工排线，订单高峰时排线耗时 3 小时以上，车辆空驶率高，临时插单经常打乱全局计划。",
    solution:
      "构建「运筹优化 + LLM 交互」的智能排产助手：算法引擎基于实时路况、车辆、订单约束自动生成排线方案，调度员用自然语言调整（「把苏E开头的车晚一小时出发」），系统即时重排并解释影响；异常（缺货、封路）自动触发重算与通知。",
    result:
      "排线时间从 3 小时缩短到 20 分钟，车辆空驶率下降 12 个百分点，临时插单不再需要全局重排。调度经验沉淀为系统规则，不再依赖个别老师傅。",
    metrics: [
      { label: "排线时间", value: "3 小时 → 20 分钟" },
      { label: "空驶率", value: "下降 12 pct" },
      { label: "日均运单", value: "2,000+" },
      { label: "自然语言调车", value: "秒级重排" },
    ],
    techStack: ["运筹优化", "LLM Function Calling", "实时交通数据", "高德地图 API", "调度台"],
    featured: false,
  },
];

export const featuredCases = cases.filter((c) => c.featured);

export function getCase(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug);
}
