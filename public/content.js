// content.js
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
      if (request.action === 'scrapeMetadata') {
        var url = ''; //주소
        var title = ''; //제목
        var publish =''; //날짜
        var name = ''; //신문사, 기자

        var metaTags = document.getElementsByTagName('meta');
  
        for (var i = 0; i < metaTags.length; i++) {
          if (metaTags[i].getAttribute('property') === 'og:url' || metaTags[i].getAttribute('name') === 'og:url') {
            url = metaTags[i].getAttribute('content');
            break;
          }
        }

        for (var i = 0; i < metaTags.length; i++) {
            if (metaTags[i].getAttribute('property') === 'og:title' || metaTags[i].getAttribute('name') === 'og:title') {
              title = metaTags[i].getAttribute('content');
              break;
            }
          }

        for (var i = 0; i < metaTags.length; i++) {
            if (metaTags[i].getAttribute('property') === 'article:published_time' || metaTags[i].getAttribute('name') === 'article:published_time' || 
            metaTags[i].getAttribute('property') === 'dd:published_time'|| metaTags[i].getAttribute('name') === 'dd:published_time'
            ) {
              publish = metaTags[i].getAttribute('content').slice(0,10);
              break;
            }
          }

          for (var i = 0; i < metaTags.length; i++) {
            if (metaTags[i].getAttribute('property') === 'og:type' || metaTags[i].getAttribute('name') === 'og:type' || 
            metaTags[i].getAttribute('property') === 'og:site_name'|| metaTags[i].getAttribute('name') === 'og:site_name'||
            metaTags[i].getAttribute('property') === 'og:article:author'|| metaTags[i].getAttribute('name') === 'og:article:author'
            ) {
              name = metaTags[i].getAttribute('content');
              break;
            }
          }

  
        sendResponse({ url: url, title:title, publish:publish, name:name });
      }
    }
  );
  
  