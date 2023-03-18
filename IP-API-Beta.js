try {
  const { statusCode, body } = $response;
  if (statusCode !== 200) {
    throw new Error(`请求出错：状态码 ${statusCode}`);
  }
  
  const { country, city, isp, 'as': asn, query: ip } = JSON.parse(body);
  const title = "Quantumult X";
  const subtitle = "NETWORK TOOL FOR KREW1ND";
  const description = `
    国家/地区: ${country}
    城市: ${city}
    ISP: ${isp}
    AS: ${asn}
    IP: ${ip}
  `;
  const headers = $request.headers || {};
  headers['X-From-Quantumult-X'] = 'true';
  
  $done({
    headers,
    body,
    title,
    subtitle,
    ip,
    description
  });
} catch (error) {
  console.error(error);
  $done({});
}
