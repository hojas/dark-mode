# 暗黑/亮白模式切换器

## 项目描述

这是一个 Chrome 浏览器扩展，允许用户轻松切换网站的暗黑模式和亮白模式。它通过模拟 `prefers-color-scheme` 媒体查询来实现，使得即使原网站没有内置暗黑模式，用户也能享受到舒适的暗色体验。

## 主要特性

- 一键切换网站的暗黑/亮白模式
- 自动保存每个网站的模式偏好
- 使用 CSS 滤镜实现全局暗黑模式，适用于大多数网站
- 轻量级实现，对浏览性能影响最小

## 安装说明

1. 克隆或下载此仓库到本地
2. 打开 Chrome 浏览器，进入 `chrome://extensions/`
3. 在右上角启用"开发者模式"
4. 点击"加载已解压的扩展程序"
5. 选择包含此项目文件的文件夹

## 使用方法

1. 安装扩展后，您会在 Chrome 工具栏看到一个新的图标
2. 访问任何网站，点击图标即可切换该网站的暗黑/亮白模式
3. 扩展会自动记住您对每个网站的偏好设置

## 技术实现

- 使用 Chrome Extension Manifest V3
- 通过 content script 注入自定义样式
- 利用 `chrome.storage.sync` API 保存用户偏好
- 模拟 `prefers-color-scheme` 媒体查询以兼容现有网站的暗黑模式实现

## 文件结构

- `manifest.json`: 扩展的配置文件
- `background.js`: 后台脚本，处理扩展图标点击事件和存储操作
- `content.js`: 内容脚本，实现暗黑模式切换的核心逻辑

## 贡献指南

欢迎提交 Issues 和 Pull Requests 来帮助改进这个项目。在提交 PR 之前，请确保您的代码符合项目的编码规范。

## 许可证

本项目采用 MIT 许可证。详情请见 [LICENSE](LICENSE) 文件。

## 联系方式

如果您有任何问题或建议，请通过 [GitHub Issues](https://github.com/hojas/dark-mode/issues) 与我们联系。
