import type { LucideIcon } from "lucide-react";
import { Crosshair, Mountain, Users, Rocket } from "lucide-react";

export const company = {
  /** 关于页 · 公司简介 */
  intro:
    "终北科技成立于 2023 年，是一家专注大模型应用开发的 AI 科技企业。我们相信：AI 的价值不在演示里，而在每天真实运转的业务中。成立至今，我们为零售、制造、金融、物流等行业的数十家企业交付了生产级 AI 系统——智能客服、合同审查、数据分析 Agent、智能质检，每一个都跑在真实的业务线上。",
  introExtra:
    "「终北」取自《山海经》中的北方之国，寓意对「北」的极致追寻。我们把它当作工程信条：以终为始，向北而行——从业务结果倒推技术方案，用确定性的工程方法，交付确定性的 AI 价值。",

  /** 发展历程 */
  milestones: [
    {
      year: "2023",
      title: "公司成立",
      description:
        "创立于苏州工业园区，确立「只做生产级 AI 应用」的方向，完成首个大模型应用项目交付。",
    },
    {
      year: "2024",
      title: "RAG 与 Agent 工程化",
      description:
        "沉淀企业知识库与 AI Agent 的工程方法论，交付多个行业的智能客服与知识管理项目，团队扩张至 20 人。",
    },
    {
      year: "2025",
      title: "规模化与私有化",
      description:
        "私有化部署方案成熟，服务金融、制造等强合规行业；多 Agent 平台在多家客户生产环境稳定运行。",
    },
    {
      year: "2026",
      title: "平台化演进",
      description:
        "将多年项目经验沉淀为 AI 中台能力，帮助客户以更低成本复制成功场景，持续向北。",
    },
  ],

  /** 价值观 */
  values: [
    {
      icon: Crosshair,
      title: "结果导向",
      description:
        "不为炫技写一行代码。每个项目先定义可量化的业务指标，交付以指标达成验收。",
    },
    {
      icon: Mountain,
      title: "工程为基",
      description:
        "AI 不确定，工程要确定。评测、可观测、降级策略做进架构，让大模型在生产环境可靠运行。",
    },
    {
      icon: Users,
      title: "长期陪伴",
      description:
        "交付不是结束。我们与客户共同迭代，把方法留在团队里，能力长在业务上。",
    },
    {
      icon: Rocket,
      title: "诚实透明",
      description:
        "能做与不能做，都说清楚。不贩卖 AI 焦虑，不为签单过度承诺。",
    },
  ],

  /** 团队（占位，待替换真实成员） */
  team: [
    { name: "陈北辰", role: "创始人 / CEO", bio: "前一线大厂 AI 平台负责人，10 年工程与团队管理经验。" },
    { name: "林向宇", role: "技术合伙人 / CTO", bio: "大模型基础设施专家，主导多个企业级 LLM 平台落地。" },
    { name: "苏晚晴", role: "AI 算法负责人", bio: "专注 RAG 检索与多 Agent 系统，多篇顶会论文。" },
    { name: "周砚", role: "产品负责人", bio: "深耕企业服务产品 8 年，擅长把复杂技术做成好用产品。" },
    { name: "吴启帆", role: "交付负责人", bio: "前咨询公司项目经理，主导 20+ 企业级项目交付。" },
    { name: "郑一诺", role: "解决方案架构师", bio: "负责金融与制造行业方案设计，合规与架构双料专家。" },
  ],

  /** 数据亮点（Hero 信任条用） */
  stats: [
    { value: "40+", label: "生产级 AI 项目交付" },
    { value: "10+", label: "覆盖行业" },
    { value: "98%", label: "客户续约率" },
    { value: "3 年", label: "大模型工程深耕" },
  ],
} as const;
