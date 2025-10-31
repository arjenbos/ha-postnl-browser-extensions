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
1. Go to `about:debugging` (copy and paste this address in the address bar).
2. Click on `This FireFox`.
3. Click `Load Temporary Add-on..`. 
4. Open te file `\ha-postnl-browser-extensions-main\firefox\background.js` from this repo.
5. Follow the authentication steps in Home-Assistant
