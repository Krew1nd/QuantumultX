if ($response.statusCode != 200) {
  $done(Null);
}

function ISP(para) {
  if(para =="Data Communication Business Group"){
  return "Chunghwa Telecom Co., Ltd."
  } else
  {
  return para
  }
}

var body = $response.body;
var obj = JSON.parse(body);
var title = obj['country'];
var subtitle = ISP(obj['isp']);
var ip = obj['ip'];
var description = "位置" + ":" + obj['country'] + '\n' + "ISP" + ":" + ISP(obj['isp']) + '\n' + "IP" + ":" + obj['ip'];


$done({title, subtitle, ip, description});
