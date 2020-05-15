const fullList = [];
const exceptList = [];
const resultList = [];

document.getElementById('full-list').onchange = function() {
  let file = this.files[0];
  let reader = new FileReader();
  reader.onload = function(progressEvent) {
    let nums = this.result.split('\n');
    let uniqNums =[...new Set(nums)];
    for (let i = 0; i < uniqNums.length; i += 1) {
      let phoneNumber = uniqNums[i];
      if (phoneNumber !== '') fullList.push(phoneNumber);
    }
  }
  reader.readAsText(file);
}

document.getElementById('exception-list').onchange = function() {
  let file = this.files[0];
  let reader = new FileReader();
  reader.onload = function(progressEvent) {
    let nums = this.result.split('\n');
    let uniqNums =[...new Set(nums)];
    for (let i = 0; i < uniqNums.length; i += 1) {
      let phoneNumber = uniqNums[i];
      if (phoneNumber !== '') exceptList.push(phoneNumber);
    }
  }
  reader.readAsText(file);
}


document.getElementById('result').onclick = function() {
  for (let i = 0; i < fullList.length; i += 1) {
    let phone = fullList[i];
    if (!exceptList.includes(phone)) resultList.push(phone);
  }
  console.log(resultList)
}