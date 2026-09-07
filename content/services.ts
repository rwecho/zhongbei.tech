import type { LucideIcon } from "lucide-react";
import {
  BotMessageSquare,
  BrainCircuit,
  BookOpenCheck,
  Workflow,
  Compass,
} from "lucide-react";

export type Service = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  /** 服务亮点（卡片与详情共用） */
  features: string[];
  /** 交付物清单 */
  deliverables: string[];
  /** 技术栈标签 */
  techStack: string[];
  /** 适用场景 */
  useCases: string[];
};

export const services: Service[] = [
  {
    slug: "llm-app-development",
    name: "大模型应用开发",
    tagline: "从 Prompt 到产品，端到端交付可用的 LLM 应用",
    description:
      "我们基于主流大模型（GPT、Claude、DeepSeek、Qwen 等）为企业构建生产级应用：智能客服、员工 Copilot、内容生成平台、数据分析助手。从场景定义、模型选型、Prompt 工程到评测与上线，全流程负责。",
    icon: BotMessageSquare,
    features: [
      "场景梳理与模型选型，成本与效果平衡",
      "Prompt 工程与输出结构化，保证结果稳定可用",
      "流式响应、多模态与工具调用开箱即用",
      "评测集与回归测试，模型升级不掉链子",
    ],
    deliverables: [
      "可上线的 Web 应用 / API 服务",
      "模型接入与网关层（多模型路由、限流、审计）",
      "评测基线与效果报告",
      "部署文档与运维手册",
    ],
    techStack: ["Next.js", "TypeScript", "Python", "LangGraph", "vLLM", "OpenAI / Claude / DeepSeek"],
    useCases: ["智能客服", "员工知识助手", "内容生成平台", "数据分析对话"],
  },
  {
    slug: "ai-agent",
    name: "AI Agent 智能体定制",
    tagline: "让 AI 不止会答，更会做",
    description:
      "面向复杂业务流程，我们设计并实现可靠的 AI Agent：多 Agent 协作、函数工具调用、人工审批节点、执行可观测。Agent 不是玩具 Demo——我们把权限、审计、降级策略做进架构，让它敢在生产环境跑。",
    icon: BrainCircuit,
    features: [
      "多 Agent 编排：规划、执行、校验各司其职",
      "工具生态接入：内部 API、数据库、SaaS、办公系统",
      "人在回路（Human-in-the-loop）与权限管控",
      "全链路追踪与回放，每一步决策可解释",
    ],
    deliverables: [
      "Agent 运行时与编排框架",
      "工具插件开发与注册规范",
      "可观测面板（执行轨迹、成功率、成本）",
      "失败降级与告警策略",
    ],
    techStack: ["LangGraph", "MCP", "Claude Agent SDK", "PostgreSQL", "Redis", "Kubernetes"],
    useCases: ["自动化运营", "工单处理", "数据报表生成", "跨系统流程自动化"],
  },
  {
    slug: "rag-knowledge-base",
    name: "RAG 知识库与检索增强",
    tagline: "把企业知识变成随问随答的生产力",
    description:
      "文档散落各处、新人上手慢、客服口径不统一——我们用 RAG 把企业私有知识变成可对话的资产。支持 PDF/Word/Excel/网页等多源接入，混合检索 + 重排序保证答案准确，支持私有化部署，数据不出企业内网。",
    icon: BookOpenCheck,
    features: [
      "多源异构文档接入与自动同步",
      "混合检索（向量 + 关键词）+ 重排序，准确率显著优于朴素 RAG",
      "答案溯源：每句话都能定位到原文出处",
      "私有化部署，权限对齐企业组织架构",
    ],
    deliverables: [
      "知识库管理后台（导入、切分、索引、权限）",
      "检索质量评测报告（Recall / 忠实度）",
      "问答应用与 API",
      "增量更新与数据治理方案",
    ],
    techStack: ["Milvus / pgvector", "BGE / BGE-M3", "Reranker", "Elasticsearch", "文档解析管线"],
    useCases: ["企业知识管理", "制度问答", "售前支持", "培训与新人带教"],
  },
  {
    slug: "enterprise-ai-solution",
    name: "企业智能化解决方案",
    tagline: "把 AI 嵌进业务流程，而不是做个演示",
    description:
      "从业务诊断到系统落地，我们帮助企业梳理哪些环节值得用 AI 改造、改造的优先级与投入产出，并直接负责实施。AI 嵌入现有 ERP / CRM / OA 工作流，员工在熟悉的系统里获得 AI 能力。",
    icon: Workflow,
    features: [
      "业务流程诊断，识别高 ROI 的 AI 改造点",
      "与现有系统（ERP/CRM/OA）深度集成，不另起炉灶",
      "分阶段实施：先试点验证，再规模化推广",
      "数据安全评估与合规设计",
    ],
    deliverables: [
      "智能化路线图与优先级矩阵",
      "试点项目实施与效果验证",
      "系统集成方案与接口规范",
      "推广培训与变更管理支持",
    ],
    techStack: ["工作流引擎", "OCR / NLP", "ASR / TTS", "企业服务总线", "数据仓库"],
    useCases: ["生产制造", "供应链", "财务共享", "人力资源"],
  },
  {
    slug: "ai-consulting",
    name: "AI 技术咨询与陪跑",
    tagline: "帮你看清技术，避免为焦虑买单",
    description:
      "大模型技术日新月异，选型错误代价高昂。我们提供独立的技术咨询：需求是否适合 AI、自研还是采购、模型怎么选、预算怎么估。也可以以陪跑方式深度参与你的团队，把方法论留下来。",
    icon: Compass,
    features: [
      "独立客观：不绑定特定云厂商与模型供应商",
      "可行性验证（POC）设计与快速验证",
      "成本测算：算力、Token、人力全口径",
      "团队赋能：Prompt 工程、评测方法、工程规范",
    ],
    deliverables: [
      "技术评估报告与选型建议",
      "POC 方案与验证结果",
      "成本模型与预算建议",
      "内训课程与工程规范文档",
    ],
    techStack: ["技术尽调", "POC 设计", "成本建模", "团队培训"],
    useCases: ["立项前评估", "供应商评估", "架构评审", "团队 AI 能力建设"],
  },
];

/** 首页精选的前 4 项服务 */
export const featuredServices = services.slice(0, 4);
