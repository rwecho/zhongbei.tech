# 终北科技官网（zhongbei.tech）

苏州终北科技有限公司官方网站。专注大模型应用开发的企业官网，双主题（亮/暗）响应式全静态站点。

## 技术栈

- **Next.js 16**（App Router，Turbopack，全静态输出）
- **React 19 + TypeScript**
- **Tailwind CSS v4**（CSS-first 配置，OKLCH 语义色 token）
- **shadcn/ui**（Base UI 原语，base-nova 预设）
- **next-themes**（亮/暗/跟随系统三态主题）

## 快速开始

```bash
pnpm install
pnpm dev        # 开发服务器 http://localhost:3000
pnpm build      # 生产构建
pnpm start      # 生产预览
```

## 目录结构

```
app/
├── layout.tsx              # 根布局：zh-CN、ThemeProvider、全局 metadata、JSON-LD
├── globals.css             # 品牌主题：OKLCH 双色板 + bg-grid/glass 等自定义工具类
├── (marketing)/            # 营销路由组（Navbar/Footer 布局）
│   ├── page.tsx            # 首页
│   ├── services/           # 服务
│   ├── cases/[slug]/       # 案例（列表 + 详情，generateStaticParams）
│   ├── about/              # 关于
│   └── contact/            # 联系
├── sitemap.ts / robots.ts / opengraph-image.tsx / not-found.tsx
components/
├── ui/                     # shadcn CLI 生成的原子组件
├── layout/                 # Navbar、Footer、主题切换
├── shared/                 # Section、SectionHeading、GlowCard、CTASection 等复用件
└── home|services|cases|about|contact/   # 各页面 section 组件
config/site.ts              # 站点单一事实源：公司信息/导航/联系方式/备案号
content/                    # 全部文案数据（services / cases / faqs / company）
```

## 内容维护

- **改公司信息/联系方式/备案号** → `config/site.ts`
- **改服务/案例/FAQ/团队文案** → `content/` 下对应文件，无需动组件
- **换主题色** → `app/globals.css` 中 `:root` 与 `.dark` 的 OKLCH 变量（组件一律使用语义 token，无硬编码颜色）

## 上线前检查清单

- [ ] `config/site.ts` 中 `contact.icp` 替换为真实 ICP 备案号
- [ ] 联系电话、地址、邮箱确认为真实信息
- [ ] 团队成员（`content/company.ts`）替换为真实成员
- [ ] 客户墙（`components/home/clients.tsx`）替换为真实客户（如可公开）
- [ ] 确认 `site.url` 与实际域名一致（影响 sitemap / OG / canonical）
