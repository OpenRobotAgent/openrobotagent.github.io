# Open Robot Agent · Public Project Website

**中文（默认） / English** · [Live site](https://openrobotagent.github.io/)

这是 ORA 的**公开展示站点**，不是私有研究仓库的镜像。站点只介绍长期愿景、能力树、概念架构、研究方向及可以公开的进展；不包含私有源码、未发表的方法、实验数据、模型权重或内部工作文档。

## 部署

仓库名为 `OpenRobotAgent/openrobotagent.github.io`。使用 GitHub Pages：**Settings → Pages → Deploy from a branch → main / (root)**。直接发布 `index.html`，不需要 npm、构建系统、CI 测试或第三方部署服务。公开访问地址为 `https://openrobotagent.github.io/`。

目录：

- `index.html`：中文优先的完整双语单页网站。
- `css/site.css`：页面样式（参考同一作者 [OpenResearchAssets](https://github.com/Suchenl/OpenResearchAssets) 的排版、导航与留白规范，并针对 ORA 重新组织）。
- `js/site.js`：中文 / English 切换、移动导航与目录高亮；不使用外部库或网络请求。
- `assets/*.svg`：原创标志、概念 Hero、公开安全范围内的架构示意。

## 发布边界

1. **永不直接将私有 ORA 仓库内容自动复制或部署至此**。新增信息前先明确是否已公开、可否公开。
2. 概念能力、长期目标和当前真实状态必须分开表述；不把概念控制架构称作现行实现，不在公开页披露未发表的工具协议，也不发布未验证的成功率、模型表现或未发表的实现细节。
3. 任何与第三方作品有关的素材需要核实来源与权利；本仓库不拷贝 SuperMimic 的代码或图片，仅借鉴其叙事和视觉节奏。
4. **最低限度 CI/CD**：只用 GitHub Pages 默认的分支部署，不添加 GitHub Actions 测试、Lint、E2E、定时任务或不必要的构建链。若需要验收，优先在本地浏览器目测；不要为了本网站消耗私有仓库 CI 分钟。
5. 中文是主要维护语言，英文完整且同步。保持唯一主页与单一 CSS/JS 入口，不做多版本存档。

## 致谢与设计来源

页面布局取材于同一作者的 [OpenResearchAssets](https://suchenl.github.io/OpenResearchAssets/)，并参考 [SuperMimic](https://supermimic.github.io/) 简约的研究叙事。本站 HTML / CSS / JS 独立改编与编写，不含 SuperMimic 的源代码。