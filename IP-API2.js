if ($response.statusCode != 200) {
  $done(Null);
}

var body = $response.body;
var obj = JSON.parse(body);
var title = "Quantumult X";
var subtitle = "NETWORK TOOL FOR KREW1ND";
var ip = obj['query'];
var description = "国家/地区" + ":" + obj['country'] + '\n' + "城市" + ":" + obj['city'] + '\n' + "ISP" + ":" + obj['isp'] + '\n' + "AS" + ":" + obj['as'] + '\n' + "IP" + ":" + obj['query'];

$done({title, subtitle, ip, description});
