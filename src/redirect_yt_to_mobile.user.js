// ==UserScript==
// @name            Redirect YouTube to mobile
// @namespace       AlejandroAkbal
// @version         0.1
// @description     Redirects YouTube desktop to mobile.
// @author          Alejandro Akbal
// @icon            https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @homepage        https://github.com/AlejandroAkbal/Redirect-YouTube-to-mobile-UserScript
// @downloadURL     https://raw.githubusercontent.com/AlejandroAkbal/Redirect-YouTube-to-mobile-UserScript/main/src/redirect_yt_to_mobile.user.js
// @updateURL       https://raw.githubusercontent.com/AlejandroAkbal/Redirect-YouTube-to-mobile-UserScript/main/src/redirect_yt_to_mobile.user.js
// @match           https://www.youtube.com/*
// @grant           none
// @run-at          document-start
// ==/UserScript==

(function() {
    'use strict';

    const CURRENT_URL = window.location.href

    const MOBILE_URL = new URL(CURRENT_URL);

    // Set the "m.youtube.com" subdomain
    MOBILE_URL.host = MOBILE_URL.host.replace('www.', 'm.')

    // Set app to mobile
    MOBILE_URL.searchParams.set('app', 'm');

    // Don't persist app
    MOBILE_URL.searchParams.set('persist_app', '0');

    window.location.href = MOBILE_URL.toString()
})();