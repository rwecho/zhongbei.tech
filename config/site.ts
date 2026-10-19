/**
 * 站点单一事实源：公司信息、导航、联系方式。
 * 修改品牌信息只需改这一个文件。
 */
export const site = {
  name: "苏州终北科技有限公司",
  shortName: "终北科技",
  englishName: "ZhongBei Tech",
  url: "https://zhongbei.tech",
  slogan: "以终为始，向北而行",
  /** 业务主张 */
  tagline: "让大模型，真正跑在你的业务里",
  description:
    "终北科技是一家专注于大模型应用开发的 AI 科技企业，为企业提供 AI Agent 定制、RAG 知识库、企业智能化解决方案与 AI 技术咨询，让大模型真正落地到业务中。",
  keywords: [
    "大模型应用开发",
    "AI Agent 定制",
    "RAG 知识库",
    "企业智能化",
    "AI 咨询",
    "人工智能开发",
    "苏州 AI 公司",
  ],
  nav: [
    { label: "首页", href: "/" },
    { label: "服务", href: "/services" },
    { label: "案例", href: "/cases" },
    { label: "关于我们", href: "/about" },
    { label: "联系我们", href: "/contact" },
  ],
  /** 工商登记信息 */
  legal: {
    /** 统一社会信用代码 */
    creditCode: "91320508MAEFPM328K",
    legalRepresentative: "阮振伟",
    /** 登记/注册地址 */
    address: "江苏省苏州市姑苏区人民路1401号4楼4267室",
    /** 经营范围（核心摘要） */
    businessScope:
      "人工智能基础软件与应用软件开发、软件开发、信息技术咨询服务、物联网技术服务及技术进出口等",
  },
  contact: {
    email: "hello@zhongbei.tech",
    workTime: "周一至周五 09:30 - 18:30（法定节假日除外）",
    icp: "苏ICP备2025189736号-1",
    icpUrl: "https://beian.miit.gov.cn/",
  },
} as const;

export type NavItem = (typeof site.nav)[number];
