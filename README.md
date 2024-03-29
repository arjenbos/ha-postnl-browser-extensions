# PostNL browser extensions

This repository contains the browser extension which is needed to install [the PostNL Home Assistant integration](https://github.com/arjenbos/ha-postnl).


## How to install the extension
### Chrome
Follow this guide to install the extension: https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked

### Edge
You need to use the **Chrome extension**. According to [Microsoft](https://support.microsoft.com/en-us/microsoft-edge/add-turn-off-or-remove-extensions-in-microsoft-edge-9c0ec68c-2fbc-2f2c-9ff0-bdc76f46b026) this should work.

Follow this guide to install the extension: https://learn.microsoft.com/en-us/microsoft-edge/extensions-chromium/getting-started/extension-sideloading

### Opera
You need to use the **Chrome extension**. According to [Opera](https://blogs.opera.com/tips-and-tricks/2021/10/using-addons-from-chrome-in-opera/) this should work.

Follow this guide to install the extension: https://dev.opera.com/extensions/testing/

### Firefox
1. Follow this guide to install the extension: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension#installing
2. Firefox disables required permissions by default. After installing the extension you need to follow these steps:
   1. Go to `about:addons` (copy and paste this address in the address bar).
   2. Click on `PostNL oAuth rewriter`.
   3. Go to the `Permissions` tab.
   4. Toggle `Access your data for sites in the *://postnl.nl domain`.
