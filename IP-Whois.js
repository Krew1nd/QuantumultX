if ($response.statusCode != 200) {
  $done(Null);
}

function ISP_ValidCheck(para) {
  if(para=="Data Communication Business Group"){
  return "Chunghwa Telecom"
  } else
  {
  return para
  }
}

var body = $response.body;
var obj = JSON.parse(body);
var title = obj['country'];
var subtitle = ISP_ValidCheck(obj['isp']);
var ip = obj['ip'];
var description = "国家/地区" + ":" + obj['country'] + '\n' + "城市" + ":" + obj['city'] + '\n' + "ISP" + ":" + ISP_ValidCheck(obj['isp']) + '\n' + "IP" + ":" + obj['ip'];


$done({title, subtitle, ip, description});
