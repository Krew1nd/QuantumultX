# QuantumultX

个人 Quantumult X 配置仓库，**仅供本人使用**。

包含自用脚本（`Script/`）、重写规则（`Rewrite/`）与图标（`Icon/`）。

## 目录结构

| 目录 | 说明 |
| --- | --- |
| `Script/` | 常用脚本（.js） |
| `Rewrite/` | 重写规则（.conf） |
| `Task/` | 任务图标（.png） |

## 脚本

| 脚本 | 说明 |
| --- | --- |
| [Emby.js](Script/Emby.js) | Emby 客户端解锁脚本（配合 Rewrite/Emby.conf） |
| [IP-API.js](Script/IP-API.js) | ip-api.com 响应改写，面板展示 IP 归属地 / AS / ISP |
| [IP-API-ASO.js](Script/IP-API-ASO.js) | IP 信息展示（隐藏 AS 号码，仅保留组织名） |
| [IP-API-Flags.js](Script/IP-API-Flags.js) | IP 信息展示（带国旗 emoji，TW 显示为 CN） |
| [IP-API-ASO-Dev.js](Script/IP-API-ASO-Dev.js) | IP 信息展示开发版 |
| [IPWhois.js](Script/IPWhois.js) | IP whois 信息展示（国家 / ISP 中文转换） |
| [jd_fruit.js](Script/jd_fruit.js) | 京东东东农场（兼容 QX / Surge / Loon / Node.js） |
| [jd_plantBean.js](Script/jd_plantBean.js) | 京东种豆得豆（兼容 QX / Surge / Loon / Node.js） |
| [jzread.js](Script/jzread.js) | 九章头条签到提现（青龙变量 `jzreadurl` / `cashtx`） |

## 重写规则

| 规则 | 说明 |
| --- | --- |
| [Emby.conf](Rewrite/Emby.conf) | Emby 解锁重写（配合 Script/Emby.js） |
| [QuickSearch.conf](Rewrite/QuickSearch.conf) | Safari 快速搜索：Bing 输入 `命令 + 空格 + 关键词` 跳转指定搜索引擎（gh / gt / tf / zdm / cf / bd，无命令走 Google） |

## 图标

`Task/` 内含京东系任务（东东农场、种豆得豆等）、电视家、汇率、OpenAI、九章头条等任务图标，供 `task_local` 的 `img-url` 使用。

## 使用方式

- **脚本**：参考各文件头部注释中的配置示例（task_local / rewrite 写法）
- **重写规则**：QX → 配置 → 重写，引用本仓库 raw 链接
- **图标**：`img-url=https://raw.githubusercontent.com/Krew1nd/QuantumultX/master/Task/xxx.png`

## 声明

本仓库内容仅供个人使用与学习交流，不提供任何担保。
