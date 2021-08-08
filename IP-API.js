if ($response.statusCode != 200) {
  $done(Null);
}

function City(para) {
  if(para =="Central"){
  return "中环"
  } else
  {
  return para
  }
}

var body = $response.body;
var obj = JSON.parse(body);
var title = obj['country'];
var subtitle = obj['isp'];
var ip = obj['query'];
var description = "国家/地区" + ":" + obj['country'] + '\n' + "城市" + ":" + City(obj['city']) + '\n' + "服务商" + ":" + obj['isp'] + '\n' + "数据中心" + ":" + obj['org'] + '\n' + "IP" + ":" + obj['query'];

$done({title, subtitle, ip, description});

