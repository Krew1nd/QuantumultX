/*

[rewrite_local]
# 替换为手机百度 Quark 的 User-Agent
^https:\/\/www\.zhihu\.com\/ url request-header (\r\n)User-Agent:.+(\r\n) request-header $1User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1 Quark/604.1 T7/10.7 SearchCraft/2.7.7 (Baidu; P1 9.0.0)$2
# 网页优化
^https://www\.zhihu\.com/question/ url script-response-body https://raw.githubusercontent.com/id77/QuantumultX/master/Script/zhihu.js
^https://zhuanlan\.zhihu\.com/p/ url script-response-body https://raw.githubusercontent.com/id77/QuantumultX/master/Script/zhihu.js

[mitm]
hostname = www.zhihu.com, zhuanlan.zhihu.com

*/

let html = $response.body;
let nonce = html.match(/nonce="[\w\-]*"/g)[1];

html = html.replace('apple-itunes-app', '');

html =
  html.replace(/(<\/html>)/, '') +
  `
<style ${nonce}>
.OpenInAppButton.is-shown {
    -webkit-transform:translate(-50%,50px) !important;
    transform: translate(-50%,50px) !important;
}
.CommentsForOia button {
  display: none;
}
</style>

<script ${nonce}>
setTimeout(
() => {
    document.querySelector(".MobileModal-wrapper").remove()
}
,
100
)

setTimeout(
() => {
    document.querySelector("body").style.overflow = "auto"
    document.querySelector(".Question-main").removeAttribute("class")

    // document.querySelectorAll(".ContentItem-expandButton").forEach(item => item.click())
}
,
600
)
</script>
</html>
`;

$done({ body: html });
