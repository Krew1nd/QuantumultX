if ($response.statusCode != 200) {
  $done(Null);
}

function Country(para) {
  if(para =="大韩民国"){
  return "韩国"
  } else
  {
  return para
  }
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
var title = Country(obj['country']);
var subtitle = ISP(obj['isp']);
var ip = obj['ip'];
var description = "Location" + ":" + Country(obj['country']) + '\n' + "ISP" + ":" + ISP(obj['isp']) + '\n' + "IP" + ":" + obj['ip'];


$done({title, subtitle, ip, description});
