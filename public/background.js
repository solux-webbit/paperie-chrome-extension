// background.js

// 전역 변수
var resultTextContent = '';

// 이벤트 수신을 위한 이벤트 핸들러 등록
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'getResultTextContent') {
    sendResponse({ resultTextContent: resultTextContent });
  }
});


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'updateResultTextContent') {
      resultTextContent = request.resultTextContent + "^^";
      // 이 값을 사용하여 원하는 동작 수행
    }
  });
  
