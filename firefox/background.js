console.log("PostNL extension active");

browser.webRequest.onHeadersReceived.addListener(
    function(details) {
        for(key in details.responseHeaders) {
            if(details.responseHeaders[key]['name'] !== "location") {
                continue;
            }
             
            if(details.responseHeaders[key]['value'].includes("postnl://login") === false) {
                return;
            }

            details.responseHeaders[key]['value'] = details.responseHeaders[key]['value'].replace(
                "postnl://login",
                "https://my.home-assistant.io/redirect/oauth"
            );
        }

        return {
            responseHeaders: details.responseHeaders
        }
    }, {urls: ["*://*.postnl.nl/*"]}, ["blocking", "responseHeaders"]);