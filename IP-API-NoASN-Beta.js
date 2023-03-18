if ($response.statusCode != 200) {
  $done(Null);
}

var body = $response.body;
var obj = JSON.parse(body);

function countryCodeToFlag(countryCode) {
  if (countryCode.toUpperCase() === 'TW') {
    countryCode = 'CN'
  }
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt());
  
  // Join 中间的空格
  return String.fromCodePoint(...codePoints);
}

var flag = countryCodeToFlag(obj['countryCode'])
var title = ${flag} + ' ' + obj['country'];
var as = obj['as'];
var subtitle = as.replace(/AS\d+ /g,"");
var ip = obj['query'];
var description = "国家/地区" + ":" + obj['country'] + '\n' + "城市" + ":" + obj['city'] + '\n' + "ISP" + ":" + obj['isp'] + '\n' + "AS" + ":" + obj['as'] + '\n' + "IP" + ":" + obj['query'];

$done({title, subtitle, ip, description});
