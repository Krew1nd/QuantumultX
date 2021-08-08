if ($response.statusCode != 200) {
  $done(Null);
}

var body = $response.body;
var obj = JSON.parse(body);
var title = obj['country'];
var subtitle = obj['isp'];
var ip = obj['query'];
var description = "位置" + ":" + obj['country'] + '\n' + obj['city'] + '\n' + "服务商" + ":" + obj['isp'] + '\n' + "数据中心" + ":" + obj['org'] + '\n' + "IP" + ":" + obj['query'];

$done({title, subtitle, ip, description});

