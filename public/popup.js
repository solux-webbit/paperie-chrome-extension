// popup.js
document.addEventListener('DOMContentLoaded', function () {
  var scrapeButton = document.getElementById('scrapeButton');
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');

  const date = `${year}-${month}-${day}`;
  console.log("날짜",date);

  scrapeButton.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var currentTab = tabs[0];

      chrome.tabs.sendMessage(currentTab.id, { action: 'scrapeMetadata' }, function (response) {
        if (response && response.url) {
          document.getElementById('result1').textContent = response.title + '.[INTERNET].(' + response.publish + '). Retrieved from '+ response.url +'.';
          document.getElementById('result2').textContent = response.publish +'.'+response.title+'.'+ response.name + ',' + response.publish + ',' + response.url + '.' + date;;
          document.getElementById('result3').textContent = response.title + '.' + response.publish + '.'+ response.publish + '수정,' + date + ',' + response.url;
          document.getElementById('result4').textContent = response.name + '.' + response.title + '.' + response.name + ',' + response.publish + '.' + date;
        } else {
          document.getElementById('result1').textContent = 'APA형식 실패';
          document.getElementById('result2').textContent = 'MLA형식 실패';
          document.getElementById('result3').textContent = 'Chicago형식 실패';
          document.getElementById('result4').textContent = 'Vancouver형식 실패';
        }
      });
    });
  });
});
