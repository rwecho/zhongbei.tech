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
  contact: {
    email: "hello@zhongbei.tech",
    phone: "0512-6789-0000",
    address: "江苏省苏州市工业园区金鸡湖大道 99 号",
    workTime: "周一至周五 9:00 - 18:00",
    /** ICP 备案号占位，上线前替换为真实备案号 */
    icp: "苏ICP备XXXXXXXX号",
    icpUrl: "https://beian.miit.gov.cn/",
  },
  social: {
    github: "https://github.com/zhongbei-tech",
    wechat: "zhongbei-tech",
  },
} as const;

export type NavItem = (typeof site.nav)[number];
