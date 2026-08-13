# QuantumultX

个人 Quantumult X 配置仓库，**仅供本人使用**。

包含自用脚本（`Script/`）、重写规则（`Rewrite/`）与图标（`Icon/`）。

## 目录结构

| 目录 | 说明 |
| --- | --- |
| `Script/` | 常用脚本（.js） |
| `Rewrite/` | 重写规则（.conf） |
| `Icon/` | 任务图标（.png） |

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

`Icon/` 内含京东系任务（东东农场、种豆得豆等）、电视家、汇率、九章头条等任务图标，供 `task_local` 的 `img-url` 使用。

命名规范：文件名首字母大写；京东系统一使用 `JD` 前缀（如 `JD_fruit.png`）。

| 图标 | 说明 |
| --- | --- |
| [JD.png](Icon/JD.png) | 京东通用 |
| [JD_fruit.png](Icon/JD_fruit.png) | 东东农场 |
| [JD_bean_home.png](Icon/JD_bean_home.png) | 种豆得豆 |
| [JD_car.png](Icon/JD_car.png) | 京东系任务 |
| [JD_club_lottery.png](Icon/JD_club_lottery.png) | 京东系任务 |
| [JD_lotteryMachine.png](Icon/JD_lotteryMachine.png) | 京东系任务 |
| [JD_sgmh.png](Icon/JD_sgmh.png) | 京东系任务 |
| [JD_shop.png](Icon/JD_shop.png) | 京东商城 |
| [JD_syj.png](Icon/JD_syj.png) | 京东系任务 |
| [Jdzz.png](Icon/Jdzz.png) | 京东系任务 |
| [Jkd.png](Icon/Jkd.png) | 京东系任务 |
| [Jzread.png](Icon/Jzread.png) | 九章头条 |
| [Youth.png](Icon/Youth.png) | 其他任务 |
| [Dianshijia.png](Icon/Dianshijia.png) | 电视家 |
| [Exchange.png](Icon/Exchange.png) | 汇率 |

## 使用方式

- **脚本**：参考各文件头部注释中的配置示例（task_local / rewrite 写法）
- **重写规则**：QX → 配置 → 重写，引用本仓库 raw 链接
- **图标**：`img-url=https://raw.githubusercontent.com/Krew1nd/QuantumultX/master/Icon/xxx.png`

## 声明

本仓库内容仅供个人使用与学习交流，不提供任何担保。
