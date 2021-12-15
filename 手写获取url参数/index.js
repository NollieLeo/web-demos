function getQueryParameter (url, name) {
  const search = url.split('?')[1];
  const paramsArr = search.split('&');
  console.log(paramsArr)
  let params = {};
  paramsArr.forEach((param) => {
    debugger
    if (!(/=/.test(param))) {
      params[param] = true;
    } else {
      let [key, value] = param.split('=');
      debugger
      value = decodeURIComponent(value);
      value = /^\d+$/.test(value) ? parseFloat(value) : value
      if (key in params) {
        params[key] = [...params[key], val]
      } else {
        params[key] = value
      }
    }
  })
  return params;
}

const obj = getQueryParameter('https://choerodon.com.cn/#/agile/scrumboard?type=project&id=1529&name=%E6%8A%80%E6%9C%AF%E7%AE%A1%E7%90%86-DevOps%E4%B8%8E%E5%AE%B9%E5%99%A8&category=GENERAL&organizationId=7')
console.log(obj)