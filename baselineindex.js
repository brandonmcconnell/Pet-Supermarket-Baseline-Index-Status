// ==UserScript==
// @name         OCC Baseline Index
// @namespace    http://psioccfeedsprod-env.ki2fup9mpw.us-east-2.elasticbeanstalk.com/
// @version      0.1
// @description  Emphasize important messages in OCC Status Logs
// @author       Brandon McConnell
// @match        https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en
// @include      http://psioccfeedsprod-env.ki2fup9mpw.us-east-2.elasticbeanstalk.com/show/searchindexstatus*
// @require      https://code.jquery.com/jquery-3.4.1.min.js
// @require      https://code.jquery.com/ui/1.12.1/jquery-ui.min.js
// @require      https://kit.fontawesome.com/3248d24db4.js
// @require      https://cdn.jsdelivr.net/npm/vanillajs-datepicker@1/dist/js/datepicker-full.min.js
// @run-at       document-body
// @grant        none
// ==/UserScript==

var $ = window.jQuery;
document.body.style.opacity = 0;
var pageReady = 0;

setTimeout(function() {
    while (!pageReady) {
        if (document.querySelectorAll('body > div > span').length > 0) {
            pageReady++;
            setTimeout(function() {
                (function() {
                    // set page title
                    var pageTitle = "Baseline Index Status";
                    if (document.head.querySelector('title')) { document.head.querySelector('title').textContent = pageTitle; } else { document.head.insertAdjacentHTML('beforeend', '<title>Baseline Index Status</title>'); }
                    // external stylesheets & minified page styles (custom CSS)
                    var externalStylesheets = /* Normalize */           '<link href="https://necolas.github.io/normalize.css/8.0.1/normalize.css" rel="stylesheet">'
                                            + /* Font Awesome v4.7.0 */ '<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">'
                                            + /* DatePicker */          '<link href="https://cdn.jsdelivr.net/npm/vanillajs-datepicker@1/dist/css/datepicker.min.css" rel="stylesheet">';
                    var pageStyles = '@import url(https://necolas.github.io/normalize.css/8.0.1/normalize.css);@import url(https://fonts.googleapis.com/css?family=Nunito:300,400,500,600,700,800,900&display=swap);body{display:flex;flex-direction:column;min-height:100vh;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;margin:0;overflow-x:hidden;font-family:"Nunito",sans-serif;font-size:16px;color:#1a202c;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;overflow-y:scroll}body::after{content:"\\a0";font-size:1px;color:transparent;text-shadow:none;background-color:transparent;border:0;opacity:0}header{display:-webkit-flex;display:-moz-flex;display:-ms-flex;display:-o-flex;display:flex;-ms-align-items:center;align-items:center;justify-content:flex-start;position:relative;height:64px;padding:0 30px;background-color:#343e50;z-index:3;background-image:url(https://www.petsupermarket.com/file/general/logo-header.png);background-repeat:no-repeat;background-size:150px auto;background-position:calc(100% - 30px) center;pointer-events:none;user-select:none}header h1{margin:0;font-size:20px;color:#fff;font-weight:400;letter-spacing:.2px}#status-bar{display:flex;-ms-align-items:center;align-items:center;justify-content:flex-start;position:sticky;position:-webkit-sticky;top:0;width:100%;list-style:none;margin:0!important;padding:0 20px;height:38px;background-color:#1a202c;color:#fff;box-shadow:0 0 15px rgba(26,32,44,.5),inset 0 5px 5px -5px #1a202c,inset 0 2px 0 -1px rgba(26,32,44,.25);box-sizing:border-box;z-index:2;user-select:none}#status-bar li{display:flex;position:relative;padding:5px 10px;box-sizing:border-box;align-items:center}#status-bar b,#status-bar span{display:inline-flex}#status-bar b{text-transform:uppercase;letter-spacing:1px;font-size:72%;color:rgba(255,255,255,.5)}#status-bar span{position:relative;margin-left:8px;color:rgba(255,255,255,.95);text-shadow:0 2px 4px #1a202c;align-items:center}#status-bar span::before{content:attr(data-datetime-desktop)}#status-bar>#status-bool{flex:1;justify-content:flex-end}#status-bar>#status-bool>span{font-weight:600;letter-spacing:.4px}#status-bar>#status-bool>span::before{content:" ";display:none;position:relative;width:8px;height:8px;border-radius:5px;margin-right:5px;background-color:rgba(255,255,255,.95);box-shadow:0 2px 4px #1a202c}body.success>#status-bar>#status-bool>span::before{display:inline-block!important;background-color:#68d391}body.success>#status-bar{background-image:linear-gradient(90deg,transparent 50%,rgba(104,211,145,.25))}body.failed>#status-bar>#status-bool>span::before{display:inline-block!important;background-color:#e53e3e}body.failed>#status-bar{background-image:linear-gradient(90deg,transparent 50%,rgba(229,62,62,.25))}section{display:-webkit-flex;display:-moz-flex;display:-ms-flex;display:-o-flex;display:flex;-webkit-flex-direction:column;-moz-flex-direction:column;-ms-flex-direction:column;-o-flex-direction:column;flex-direction:column;-ms-align-items:flex-start;align-items:flex-start;justify-content:center;width:100%;float:left;position:relative;padding:20px 30px;margin-top:10px;overflow:hidden;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}section:nth-last-child(2){flex:1;justify-content:flex-start}section>.section-head{display:-webkit-flex;display:-moz-flex;display:-ms-flex;display:-o-flex;display:flex;-ms-align-items:center;align-items:center;justify-content:flex-start;width:100%;margin-bottom:1em}section>.section-head>.section-title{margin:0;font-size:20px;font-family:"Nunito",sans-serif;font-weight:600;line-height:1;letter-spacing:.2px;color:#4a5568;margin-right:8px;pointer-events:none;user-select:none}section>.section-head>[data-count]{display:-webkit-inline-flex;display:-moz-inline-flex;display:-ms-inline-flex;display:-o-inline-flex;display:inline-flex;-ms-align-items:center;align-items:center;justify-content:center;height:16px;padding:3px 7px;margin-right:4px;font-size:85%;font-weight:800;color:#1a202c;border-radius:500px;cursor:pointer!important;transition:all 0.15s ease-in-out;user-select:none}section.empty>.section-head>[data-count],section.empty>.section-head>.filter-search,body.time-future section>.section-head>[data-count],body.time-future section>.section-head>.filter-search{display:none}section>.section-head>[data-count]::before,section>.section-head>[data-count]::after{transition:inherit}section>.section-head>[data-count]::before{content:" ";display:inline-block;width:8px;height:8px;background-color:#b6bec8;border-radius:8px;font-weight:700;color:#fff;margin-right:3px}section>.section-head>[data-count]::after{content:attr(data-count)}section>.section-head>[data-count]:not(.active):hover{background-color:#e9eef4}section>.section-head>[data-count].clear-count::before{background-color:#38bd6a}section>.section-head>[data-count].clear-count.active{background-color:rgba(56,189,106,.15)}section>.section-head>[data-count].clear-count.active::after{color:#31a55d}section>.section-head>[data-count].warning-count::before{background-color:#f19437}section>.section-head>[data-count].warning-count.active{background-color:rgba(241,148,55,.15)}section>.section-head>[data-count].warning-count.active::after{color:#d38130}section>.section-head>[data-count].error-count::before{background-color:#dc1931}section>.section-head>[data-count].error-count.active{background-color:rgba(220,25,49,.15)}section>.section-head>[data-count].error-count.active::after{color:#c1162b}section#flag-values>.section-head>[data-count].error-count::before{background-color:transparent;box-shadow:inset 0 0 0 2px rgba(26,32,44,.375)}section#flag-values>.section-head>[data-count].error-count.active{background-color:rgba(26,32,44,.11)}section#flag-values>.section-head>[data-count].error-count.active::after{color:rgba(26,32,44,.5)}section>.section-head>[data-count="0"]{display:none}section>.section-head>.filter-search{flex:1;display:-webkit-inline-flex;display:-moz-inline-flex;display:-ms-inline-flex;display:-o-inline-flex;display:inline-flex;-ms-align-items:center;align-items:center;justify-content:flex-end}section>.section-head>.filter-search>input{width:40px;text-align:right;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 10px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border:0!important;outline:0!important;font-family:"Font Awesome 5 Pro","Nunito",sans-serif;font-size:120%;font-weight:600;color:rgba(26,32,44,.875);opacity:0;transform:scale(0);cursor:text;transition:opacity 0.25s ease-in-out,transform 0.25s ease-in-out}section>.section-head>.filter-search>input:placeholder-shown{user-select:none}section>.section-head>.filter-search>input:placeholder-shown:not(:focus){cursor:pointer}section:hover>.section-head>.filter-search>input,section>.section-head>.filter-search>input:focus,section>.section-head>.filter-search>input:active,section>.section-head>.filter-search>input:not(:placeholder-shown){opacity:1;transform:scale(1)}section>.section-head>.filter-search>input:focus,section>.section-head>.filter-search>input:active,section>.section-head>.filter-search>input:not(:placeholder-shown){width:100%}section>.section-head>.filter-search>input::-webkit-input-placeholder{font-family:"Font Awesome 5 Pro","Nunito",sans-serif;font-weight:400;color:rgba(26,32,44,.5);transition:all 0.15s ease-in-out}section>.section-head>.filter-search>input:focus::-webkit-input-placeholder{opacity:0}section>.section-head>.filter-search>input::-moz-placeholder{font-family:"Font Awesome 5 Pro","Nunito",sans-serif;font-weight:400;color:rgba(26,32,44,.5);transition:all 0.15s ease-in-out}section>.section-head>.filter-search>input:focus::-moz-placeholder{opacity:0}section>.section-head>.filter-search>input:-ms-input-placeholder{font-family:"Font Awesome 5 Pro","Nunito",sans-serif;font-weight:400;color:rgba(26,32,44,.5);transition:all 0.15s ease-in-out}section>.section-head>.filter-search>input:focus:-ms-input-placeholder{opacity:0}section>.section-head>.filter-search>input:-moz-placeholder{font-family:"Font Awesome 5 Pro","Nunito",sans-serif;font-weight:400;color:rgba(26,32,44,.5);transition:all 0.15s ease-in-out}section>.section-head>.filter-search>input:focus:-moz-placeholder{opacity:0}section>.section-content{width:100%}section.filter-active>.section-content>.data-rows>.data-row{box-shadow:inset 0 0 0 -1px #68d391;background-color:rgba(56,189,106,0)}section:not(#flag-values)>.section-content>.data-rows>.data-row{box-shadow:inset 0 0 0 -1px #0099f5}section:not(#flag-values).filter-active>.section-content>.data-rows>.data-row.filtered{box-shadow:inset 0 0 0 2px #0099f5;background-color:rgba(0,153,245,.15)}section:not(#flag-values)>.section-content>.data-rows>.data-row.status-clear{box-shadow:inset 0 0 0 -1px #38bd6a}section:not(#flag-values).filter-active>.section-content>.data-rows>.data-row.status-clear.filtered,section:not(#flag-values).filter-clear>.section-content>.data-rows>.data-row.status-clear{box-shadow:inset 0 0 0 2px #38bd6a;background-color:rgba(56,189,106,.15)}section:not(#flag-values)#feed-notifications.filter-active>.section-content>.data-rows>.data-row.status-clear [data-label="description"]{box-shadow:none;background-color:rgba(56,189,106,.35)}section:not(#flag-values)>.section-content>.data-rows>.data-row.status-warning{box-shadow:inset 0 0 0 -1px #f19437}section:not(#flag-values).filter-active>.section-content>.data-rows>.data-row.status-warning.filtered,section:not(#flag-values).filter-warning>.section-content>.data-rows>.data-row.status-warning{box-shadow:inset 0 0 0 2px #f19437;background-color:rgba(241,148,55,.15)}section:not(#flag-values)#feed-notifications.filter-active>.section-content>.data-rows>.data-row.status-warning [data-label="description"]{box-shadow:none;background-color:rgba(241,148,55,.35)}section:not(#flag-values)>.section-content>.data-rows>.data-row.status-error{box-shadow:inset 0 0 0 -1px #dc1931}section:not(#flag-values).filter-active>.section-content>.data-rows>.data-row.status-error.filtered,section:not(#flag-values).filter-error>.section-content>.data-rows>.data-row.status-error{box-shadow:inset 0 0 0 2px #dc1931;background-color:rgba(220,25,49,.15)}section:not(#flag-values)#feed-notifications.filter-active>.section-content>.data-rows>.data-row.status-error [data-label="description"]{box-shadow:none;background-color:rgba(220,25,49,.35)}section.filter-active>.section-content>.data-rows>.data-row:not(.filtered),section.filter-error:not(.filter-warning):not(.filter-clear)>.section-content>.data-rows>.data-row:not(.status-error),section.filter-warning:not(.filter-error):not(.filter-clear)>.section-content>.data-rows>.data-row:not(.status-warning),section.filter-clear:not(.filter-error):not(.filter-error)>.section-content>.data-rows>.data-row:not(.status-clear),section.filter-error.filter-warning:not(.filter-clear)>.section-content>.data-rows>.data-row:not(.status-error):not(.status-warning),section.filter-error.filter-clear:not(.filter-warning)>.section-content>.data-rows>.data-row:not(.status-error):not(.status-clear),section.filter-warning.filter-clear:not(.filter-error)>.section-content>.data-rows>.data-row:not(.status-warning):not(.status-clear){display:none}section>.section-content>.no-data{color:rgba(26,32,44,.5);font-weight:600}section>.section-content>.data-rows{display:-webkit-flex;display:-moz-flex;display:-ms-flex;display:-o-flex;display:flex;-webkit-flex-wrap:wrap;-moz-flex-wrap:wrap;-ms-flex-wrap:wrap;-o-flex-wrap:wrap;flex-wrap:wrap;width:100%}section>.section-content>.data-rows>.data-row{display:-webkit-flex;display:-moz-flex;display:-ms-flex;display:-o-flex;display:flex;-ms-align-items:flex-start;align-items:flex-start;flex-direction:column;margin-bottom:10px;padding:20px;align-self:stretch;position:relative;padding:10px 15px;background-color:#e9eef4;line-height:1.5;border-radius:10px;overflow:hidden;width:100%;text-overflow:ellipsis;box-sizing:border-box}section#feed-notifications>.section-content>.data-rows>.data-row{padding:10px 15px 0 25px}section#feed-notifications>.section-content>.data-rows>.data-row>.feed-notification-timestamp-trigger{display:flex;align-items:center;justify-content:center;width:24px;height:24px;padding-top:1px;background-color:#979da7;background-color:transparent;color:#fff;color:rgba(26,32,44,.35);font-weight:400;box-sizing:border-box;border-radius:7px;position:absolute;z-index:1;top:5px;right:5px;opacity:1;transition:all 0.15s ease-in-out;cursor:pointer!important}section#feed-notifications>.section-content>.data-rows>.data-row:not(:hover)>.feed-notification-timestamp-trigger{opacity:0}section#feed-notifications>.section-content>.data-rows>.data-row>[id^="feed-notification-timestamp-trigger-input-"]:not(:checked)+.feed-notification-timestamp-trigger:hover{color:rgba(26,32,44,.75)}section#feed-notifications>.section-content>.data-rows>.data-row>[id^="feed-notification-timestamp-trigger-input-"]:checked+.feed-notification-timestamp-trigger{color:rgba(255,255,255,.375)}section#feed-notifications>.section-content>.data-rows>.data-row>[id^="feed-notification-timestamp-trigger-input-"]:checked+.feed-notification-timestamp-trigger:hover{color:rgba(255,255,255,.875)}section#feed-notifications>.section-content>.data-rows>.data-row>[id^="feed-notification-timestamp-trigger-input-"]:checked+.feed-notification-timestamp-trigger .fa::before{content:"\\f00d"!important}section#feed-notifications>.section-content>.data-rows>.data-row>.feed-notification-timestamp{display:flex;flex-direction:column;-ms-align-items:center;align-items:center;justify-content:space-between;position:absolute;top:5px;right:34px;height:52px;padding:6px 8px;font-family:consolas;font-size:80%;font-weight:400;background-color:#343e50;background-color:transparent;border-radius:7px;color:#fff;line-height:1;pointer-events:none;user-select:none;transition:all 0.15s ease-in-out;opacity:0;box-sizing:border-box}section#feed-notifications>.section-content>.data-rows>.data-row>.feed-notification-timestamp::before{content:" ";display:block;position:absolute;top:0;left:0;width:100%;height:100%;background-color:#343e50;border-radius:7px;transition:inherit;opacity:1}section#feed-notifications>.section-content>.data-rows>.data-row>.feed-notification-timestamp>.data-value{z-index:1}section#feed-notifications>.section-content>.data-rows>.data-row>.feed-notification-timestamp>[data-label="start_time"]::after{content:"↓";display:inline-block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) scale(.6);font-size:153%;font-weight:900;font-family:monospace;opacity:.675}section#feed-notifications>.section-content>.data-rows>.data-row>.feed-notification-timestamp-trigger:hover~.feed-notification-timestamp,section#feed-notifications>.section-content>.data-rows>.data-row>[id^="feed-notification-timestamp-trigger-input-"]:checked~.feed-notification-timestamp{opacity:1}section#feed-notifications>.section-content>.data-rows>.data-row>[id^="feed-notification-timestamp-trigger-input-"]:checked~.feed-notification-timestamp::before{width:calc(100% + 29px)}section#feed-notifications>.section-content>.data-rows>.data-row:not(:hover)>[id^="feed-notification-timestamp-trigger-input-"]:checked~.feed-notification-timestamp{right:5px}section#feed-notifications>.section-content>.data-rows>.data-row:not(:hover)>[id^="feed-notification-timestamp-trigger-input-"]:checked~.feed-notification-timestamp::before{width:100%}section#feed-notifications>.section-content>.data-rows>.data-row::before{content:" ";display:block;position:absolute;top:0;left:0;height:100%;width:10px;background-color:#b6bec8}section#feed-notifications>.section-content>.data-rows>.data-row.status-clear::before{background-color:#38bd6a}section#feed-notifications>.section-content>.data-rows>.data-row.status-warning::before{background-color:#f19437}section#feed-notifications>.section-content>.data-rows>.data-row.status-error::before{background-color:#dc1931}section#skus-no-prices>.section-content{width:calc(100% + 10px)}section#skus-no-prices>.section-content>.data-rows>.data-row{width:calc((100% - (10px * 16)) / 15);width:calc((100% / 15) - 10px);margin-right:10px;white-space:nowrap}@media (min-width:2820px) and (max-width:2999px){section#skus-no-prices>.section-content>.data-rows>.data-row{width:calc((100% - (10px * 15)) / 14);width:calc((100% / 14) - 10px)}}@media (min-width:2650px) and (max-width:2819px){section#skus-no-prices>.section-content>.data-rows>.data-row{width:calc((100% - (10px * 12)) / 13);width:calc((100% / 13) - 10px)}}@media (min-width:2480px) and (max-width:2649px){section#skus-no-prices>.section-content>.data-rows>.data-row{width:calc((100% - (10px * 11)) / 12);width:calc((100% / 12) - 10px)}}@media (min-width:2315px) and (max-width:2479px){section#skus-no-prices>.section-content>.data-rows>.data-row{width:calc((100% - (10px * 10)) / 11);width:calc((100% / 11) - 10px)}}@media (min-width:2119px) and (max-width:2314px){section#skus-no-prices>.section-content>.data-rows>.data-row{width:calc((100% - (10px * 9)) / 10);width:calc((100% / 10) - 10px)}}@media (min-width:1951px) and (max-width:2118px){section#skus-no-prices>.section-content>.data-rows>.data-row{width:calc((100% - (10px * 8)) / 9);width:calc((100% / 9) - 10px)}}@media (min-width:1780px) and (max-width:1950px){section#skus-no-prices>.section-content>.data-rows>.data-row{width:calc((100% - (10px * 7)) / 8);width:calc((100% / 8) - 10px)}}@media (min-width:1600px) and (max-width:1779px){section#skus-no-prices>.section-content>.data-rows>.data-row{width:calc((100% - (10px * 6)) / 7);width:calc((100% / 7) - 10px)}}@media (min-width:1420px) and (max-width:1599px){section#skus-no-prices>.section-content>.data-rows>.data-row{width:calc((100% - (10px * 5)) / 6);width:calc((100% / 6) - 10px)}}@media (min-width:1260px) and (max-width:1419px){section#skus-no-prices>.section-content>.data-rows>.data-row{width:calc((100% - (10px * 4)) / 5);width:calc((100% / 5) - 10px)}}@media (min-width:1075px) and (max-width:1259px){section#skus-no-prices>.section-content>.data-rows>.data-row{width:calc((100% - (10px * 3)) / 4);width:calc((100% / 4) - 10px)}}@media (min-width:845px) and (max-width:1074px){section#skus-no-prices>.section-content>.data-rows>.data-row{width:calc((100% - (10px * 2)) / 3);width:calc((100% / 3) - 10px)}}@media (min-width:670px) and (max-width:844px){section#skus-no-prices>.section-content>.data-rows>.data-row{width:calc((100% - (10px * 1)) / 2);width:calc((100% / 2) - 10px)}}@media (max-width:669px){section#skus-no-prices>.section-content>.data-rows>.data-row{width:100%}}section#skus-no-prices>.section-content>.data-rows>.data-row>.data-value{font-family:consolas,"Nunito",sans-serif;font-size:90%;font-weight:400;color:rgba(26,32,44,.5875)}section#skus-no-prices>.section-content>.data-rows>.data-row>.data-value::before{content:attr(data-label-clean) ": ";font-family:"Nunito",sans-serif;font-weight:700;color:rgba(26,32,44,.8125)}section#skus-no-prices>.section-content>.data-rows>.data-row>.data-value[data-label="description"],section#skus-no-prices>.section-content>.data-rows>.data-row>.data-value[data-label="default_active_price"]{display:none}section#skus-no-prices>.section-content>.data-rows>.data-row>.data-value[data-label="id"]::before{content:"SKU: "}section>.section-content>.data-rows>.data-row>.data-value{display:inline-block;max-width:100%;text-overflow:ellipsis;overflow:hidden}section#feed-notifications>.section-content>.data-rows>.data-row>.data-value[data-label="id"]{font-size:100%;font-weight:700;align-self:flex-start;opacity:.875;order:-1}section>.section-content>.data-rows>.data-row>.data-value[data-label="operation"]{margin-bottom:10px;font-size:90%;font-weight:600;align-self:flex-start;opacity:.875;order:-1}section>.section-content>.data-rows>.data-row>.data-value[data-label="operation"].null{opacity:.675;font-weight:700;font-family:consolas;font-style:italic}section>.section-content>.data-rows>.data-row>.data-value[data-label="operation"].null::before{content:"**";display:inline-block;font-family:"FontAwesome","Nunito",sans-serif;font-style:normal;margin-right:7px;transform-origin:left 15%;transform:scale(1.15);opacity:.5875}section>.section-content>.data-rows>.data-row>.data-value[data-label="start_time"],section>.section-content>.data-rows>.data-row>.data-value[data-label="end_time"]{display:inline-block;font-weight:700;opacity:.75;font-size:90%;position:absolute;top:10px;right:15px}section#feed-notifications>.section-content>.data-rows>.data-row>.data-value[data-label="description"]{align-self:stretch;margin:0 -15px;padding:5px 15px;background-color:rgba(26,32,44,.07);box-shadow:inset 0 2px 2px -2px rgba(26,32,44,.05);font-size:75%;color:rgba(26,32,44,.75);font-weight:600;font-family:consolas}section#flag-values>.section-content>.data-rows>.data-row{background:none;align-items:flex-start;padding:0 0 0 20px;margin:0 0 5px}section#flag-values>.section-content>.data-rows>.data-row::before{display:none!important}section#flag-values>.section-content>.data-rows>.data-row>[data-flag-status]{position:relative;overflow:visible;font-family:consolas,"Nunito",sans-serif;font-size:85%;font-weight:700;letter-spacing:.2px;color:rgba(26,32,44,.875)}section#flag-values>.section-content>.data-rows>.data-row>[data-flag-status]::before{content:" ";display:inline-block;position:absolute;width:10px;height:10px;left:-20px;top:50%;transform:translateY(-50%);border-radius:10px}section#flag-values>.section-content>.data-rows>.data-row>[data-flag-status="false"]::before{box-shadow:inset 0 0 0 2px rgba(26,32,44,.3125)}section#flag-values>.section-content>.data-rows>.data-row>[data-flag-status="true"]::before{background-color:#38bd6a}#server-response{margin-top:12px;padding-top:32px;padding-bottom:30px;border-top:1px solid rgba(52,62,80,.08);background:rgba(233,238,244,.75)}#server-response>pre{display:flex;align-self:stretch;position:relative;padding:15px 20px;margin:0;background-color:#e2e8f0;font-family:consolas;font-size:75%;line-height:1.5;overflow:hidden;text-overflow:ellipsis;border-radius:12px;overflow-y:scroll;height:120px;box-shadow:inset 0 -25px 30px -35px rgba(26,32,44,.75),inset 0 0 0 1px rgba(52,62,80,.04);white-space:pre-wrap;-ms-overflow-style:none}#server-response>pre::-webkit-scrollbar{display:none}#server-response>#server-response-actions{position:absolute;bottom:35px;right:35px;transition:all 0.25s ease-in-out;user-select:none}#server-response:not(:hover)>#server-response-actions{opacity:0}#server-response>#server-response-actions button{display:inline-block;position:relative;padding:5px 10px;-webkit-appearance:none;-moz-appearance:none;appearance:none;margin-left:5px;background-color:#343e50;border:none;color:rgba(255,255,255,.95);border-radius:9px;font-size:14px;font-weight:700;transition:all 0.15s ease-in-out;outline:0!important;cursor:pointer!important}#server-response>#server-response-actions:hover button:not(:hover){opacity:.675}#server-response>#server-response-actions button .fa{margin-right:8px;transform-origin:right bottom;transform:scale(.9)}body>#content{display:-webkit-flex;display:-moz-flex;display:-ms-flex;display:-o-flex;display:flex;flex:1}aside{display:block;float:left;width:300px;background-color:#e9eef4}aside>nav{position:sticky;top:38px;padding:20px;user-select:none}aside>nav>ul{list-style:none;padding:0;margin:0}aside>nav>ul>li>a{display:inline-block;padding:10px;font-size:22px;font-weight:400;text-decoration:none!important;color:#4a5568;opacity:.5;transition:all 0.15s ease-out}aside>nav>ul>li.active a{opacity:.875;font-weight:600}aside>nav>ul>li>a:hover{opacity:1;font-weight:600}aside>nav>ul:hover>li.active:not(:hover)>a{opacity:.5;font-weight:400}aside>#calendar-select-trigger{-webkit-appearance:none;-moz-appearance:none;appearance:none;position:fixed;bottom:20px;left:20px;background-color:transparent;border-radius:500px;border:0;padding:11px 20px 9px;margin:0;outline:0!important;font-size:16px;font-weight:700;color:rgba(26,32,44,.5875);text-decoration:none!important;z-index:2;transition:all 0.15s ease-in-out;cursor:pointer!important;user-select:none}aside>#calendar-select-trigger:hover{background-color:#e9eef4}body.time-past aside>#calendar-select-trigger,body.time-past aside>#calendar-select-trigger .fa-clock,body.time-future aside>#calendar-select-trigger,body.time-future aside>#calendar-select-trigger .fa-clock{color:#fff}body.time-past aside>#calendar-select-trigger{background-color:#0099f5}body.time-future aside>#calendar-select-trigger{background-color:#e3475a}body.time-past aside>#calendar-select-trigger .fa-clock::before,body.time-future aside>#calendar-select-trigger .fa-clock::before{content:"\\f1da"}body.time-future aside>#calendar-select-trigger .fa-clock{transform:scale(1.33) rotateY(180deg)}input[name="date-select"]{position:fixed;bottom:30px;left:30px;z-index:-1;pointer-events:none;opacity:0;visibility:hidden}.datepicker{bottom:65px!important;left:20px!important;position:fixed!important;top:unset!important;border:none!important;user-select:none}.datepicker>.datepicker-picker{border:none!important;border-radius:10px!important;background:#fff!important;box-shadow:inset 0 -2px 0 -1px rgba(26,32,44,.1875),0 15px 15px -15px rgba(26,32,44,.375),0 0 7px -5px rgba(26,32,44,.375)!important}.datepicker-header .datepicker-controls{justify-content:space-between;align-items:center}.datepicker-header .datepicker-controls .button{background-color:transparent!important;transition:all 0.15s ease-in-out}.datepicker-header .datepicker-controls .button.prev-btn,.datepicker-header .datepicker-controls .button.next-btn{font-family:"Font Awesome 5 Pro","Nunito",sans-serif!important;font-weight:400!important;color:rgba(26,32,44,.25)!important;box-shadow:none!important}.datepicker-header .datepicker-controls .button.prev-btn:hover,.datepicker-header .datepicker-controls .button.next-btn:hover{color:rgba(26,32,44,.675)!important}.datepicker-header .datepicker-controls .button.view-switch,.datepicker-footer .datepicker-controls .button.today-btn{background-color:transparent!important;box-shadow:0 5px 5px -10px rgba(26,32,44,.5)!important;box-shadow:none!important;border-radius:500px!important;padding:0 12px!important;width:unset!important;height:28px!important;-webkit-box-flex:0!important;flex:0!important;font-size:16px!important;font-weight:700!important;color:rgba(26,32,44,.5)!important;line-height:1!important;border:none!important}.datepicker-footer .datepicker-controls .button.today-btn{margin:calc(0.25 * (.375rem - 1px)) 0 calc(1.75 * (.375rem - 1px))!important}.datepicker-header .datepicker-controls .button.view-switch:hover,.datepicker-footer .datepicker-controls .button.today-btn:hover{background-color:#fff!important;background-color:#e9eef4!important;box-shadow:0 5px 5px -5px rgba(26,32,44,.5)!important;box-shadow:none!important;color:rgba(26,32,44,.85)!important}.datepicker-cell{border-radius:10px!important;font-weight:700!important;color:rgba(26,32,44,.75)!important}.datepicker-cell.today:not(.selected):not(.disabled){color:#1a202c!important;font-weight:800!important}.datepicker-cell.today:not(.selected){background-color:transparent!important;color:transparent!important}.datepicker-cell.today.focused:not(.selected),.datepicker-cell.selected,.datepicker-cell.selected:hover{background-color:transparent!important;color:#1a202c!important;font-weight:800!important}.datepicker-cell:not(.disabled):hover,.datepicker-cell.today:not(.selected):not(.disabled):hover{background-color:rgba(91,112,154,.15)!important}body.time-past .datepicker-cell.day.selected,body.time-past .datepicker-cell.day.selected:hover{background-color:rgba(0,153,245,.15)!important;box-shadow:inset 0 0 0 2px #0099f5!important;color:#1a202c!important;font-weight:700!important}body.time-future .datepicker-cell.day.selected,body.time-future .datepicker-cell.day.selected:hover{background-color:rgba(227,71,90,.15)!important;box-shadow:inset 0 0 0 2px #e3475a!important;color:#1a202c!important;font-weight:700!important}.datepicker-cell.next:not(.disabled),.datepicker-cell.prev:not(.disabled){color:rgba(26,32,44,.375)!important}.datepicker-cell.next:not(.disabled).selected,.datepicker-cell.prev:not(.disabled).selected{color:#1a202c!important}.days-of-week .dow{font-family:"Nunito",sans-serif!important;font-weight:800!important;color:rgba(26,32,44,.75)!important}.datepicker-cell.focused:not(.selected){background-color:transparent!important}.datepicker-footer{box-shadow:none!important;background-color:transparent!important}.datepicker-footer .datepicker-controls{justify-content:center!important}aside>#calendar-select-trigger>.fa-clock{margin-right:12px;transform:scale(1.33)}#preloader::before{content:"";content:"\\f00d"}main{width:calc(100% - 300px);background-color:#fff;box-shadow:0 0 30px rgba(26,32,44,.2);display:-webkit-flex;display:-moz-flex;display:-ms-flex;display:-o-flex;display:flex;-webkit-flex-direction:column;-moz-flex-direction:column;-ms-flex-direction:column;-o-flex-direction:column;flex-direction:column}@media (max-width:899px){#status-bar>li>b{display:none!important}#status-bar>.timestamp#start-time{padding-right:0}#status-bar>.timestamp#start-time>span{margin-left:0!important}#status-bar>.timestamp#start-time::after{content:"–";position:absolute;right:-5px;transform:translateX(100%);opacity:.5}aside{width:235px}main{width:calc(100% - 235px)}aside>nav>ul>li>a{padding:8px 10px;font-size:18px}}@media (max-width:699px){#status-bar>.timestamp#start-time>:last-child::before,#status-bar>.timestamp#end-time>:last-child::before{content:attr(data-datetime-mobile)}#status-bar{padding:0 10px}aside>nav{padding:20px 10px}section{padding:20px}}@media (max-width:499px){header{background-position:20px center}#status-bar{font-size:90%}header h1,#status-bar>#status-bool>span{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}#status-bar>#status-bool>span::before{margin-right:0}}@media (max-width:399px){#status-bar>.timestamp#end-time{padding-right:0}#status-bar>#status-bool{padding-left:0;padding-right:0}}@media (max-width:350px){#status-bar>.timestamp#start-time::after{content:"-";right:-3px}#status-bar>.timestamp#end-time>:last-child{margin-left:0}}';
                    document.head.insertAdjacentHTML('beforeend', externalStylesheets+'<style>'+pageStyles+'</style>');
                    // print page title in body > header
                    document.body.insertAdjacentHTML('afterbegin', '<header><h1>'+pageTitle+'</h1></header>');
                    // makes :contains() case-insensitive
                    $.expr[":"].contains=$.expr.createPseudo(function(arg){return function(elem){return $(elem).text().toUpperCase().indexOf(arg.toUpperCase())>=0}});
                    // select text nodes, used later for wrapping all unwrapped text nodes
                    function getTextNodesIn(node,includeWhitespaceNodes){var textNodes=[],whitespace=/^\s*$/;function getTextNodes(node){if(node.nodeType==3){if(includeWhitespaceNodes||!whitespace.test(node.nodeValue)){textNodes.push(node)}}else{for(var i=0,len=node.childNodes.length;i<len;++i){getTextNodes(node.childNodes[i])}}} getTextNodes(node);return textNodes}
                    // smooth scroll to anchor positions & animate "blink" section to identify desired section
                    $('body').on('click','a[href^="#"]:not([href="#"]):not([href="#0"])',function(event){event.preventDefault();if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname==this.hostname){var target=$(this.hash);target=target.length?target:$('[name='+this.hash.slice(1)+']');if(target.length){event.preventDefault();$('html, body').animate({scrollTop:target.offset().top-$('#status-bar').height()},500,function(){$(target).children('.data-rows, .no-data, pre').animate({opacity:0.675},200,function(){$(this).animate({opacity:1},250)})})}}});
                    // minimal scroll spy functionality, binding scroll position to active menu items in the aside nav
                    var sections=$('main > section');$(window).bind('scroll',function(){var scrollTop=$(window).scrollTop();for(let i=0;i<sections.length;i++){if($(window).scrollTop()+$(window).height()>document.body.scrollHeight-$('main > section').last().height()){if(!($('main > section').last().hasClass('active'))){$('nav ul li.active').removeClass('active');$('nav ul li').last().addClass('active');break}}else if($(window).scrollTop()<$('main > section').first().offset().top-$('#status-bar').height()){$('nav ul li.active').removeClass('active');break}else if(scrollTop>=(sections.eq(i).offset().top-$('#status-bar').height()-20)&&(sections.eq(i+1).length===1?(scrollTop<sections.eq(i+1).offset().top-$('#status-bar').height()-20):!0)){if(!$('nav ul li').eq(i).hasClass('active')){$('nav ul li.active').removeClass('active');$('nav ul li').eq(i).addClass('active');break}}}});
                    // clean formatting for key names from objects, Title Case & with spaces " " replacing underscores "_"
                    function cleanKey(key) { return (key.toLowerCase().trim() === "id" ? "ID" : key.toLowerCase().split('_').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')); }
                    // initializing globally-scoped variables for later use
                    var firstFeedLoad = 0, sectionFadeTime = 400, todayDate, todayDateFormatted, statusDate, statusDateFormatted, newDate, newDateFormatted, statusTimestamp, numOfFeedLoads = 0, feedNotificationsObj = {}, duplicateSKUsObj = {}, SKUsNoPricesObj = {}, flagValuesObj = {};
                    // mapping URL parameters into a globally scoped variable for reference
                    var params = ((window.location.search.substring(1) !== "" && window.location.search.substring(1).length > 0) ? (JSON.parse('{"' + decodeURI(window.location.search.substring(1)).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')) : false);
                    // creating global variables checking for the date parameter and storing that value conditionally
                    var urlHasDate = (params ? (params.hasOwnProperty('date') && params.date.length === 10 && params.date.split("_").length === 3 && params.date.split("_").join("").replace(/\D/g,'').length === 8 ? true : false) : false),
                        urlDate = (urlHasDate ? params.date : false);
                    // rewrite URL to generic (without date) if faulty date provided
                    if (params && params.hasOwnProperty('date') && !urlHasDate) {
                        history.pushState(null, "", "/show/searchindexstatus");
                    }
                    // function to copy text from section to clipboard
                    const copyToClipboard = str => {
                        const el = document.createElement('textarea');
                        el.value = str;
                        el.setAttribute('readonly', '');
                        el.style.position = 'absolute';
                        el.style.left = '-9999px';
                        document.body.appendChild(el);
                        const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
                        el.select();
                        document.execCommand('copy');
                        document.body.removeChild(el);
                        if (selected) {
                            document.getSelection().removeAllRanges();
                            document.getSelection().addRange(selected);
                        }
                    };
                    $('body > ul').attr('id', 'status-bar');
                    $('#status-bar > li:nth-child(1)').addClass('timestamp').attr('id', 'start-time');
                    $('#status-bar > li:nth-child(2)').addClass('timestamp').attr('id', 'end-time');
                    $('#status-bar > li:last-child').attr('id', 'status-bool');
                    // building out main page sections & architecture
                    $('body > div').replaceWith(function() { return '<div id="preloader" style="display: none;"></div><div id="content"><aside><nav><ul><li><a href="#feed-notifications">Feed Notifications</a></li><li><a href="#duplicate-skus">Duplicate SKU’s</a></li><li><a href="#skus-no-prices">SKU’s with no prices</a></li><li><a href="#flag-values">Flag Values</a></li><li><a href="#server-response">Server Response</a></li></ul></nav></aside><main><section id="server-response">' + $(this).html() +'</section></main></div>'; });
                    $('#server-response > p').replaceWith('<div class="section-head"><h3 class="section-title">Today’s Server Response <span style="display: inline-block; margin-left: 3px; font-weight: 400 !important;">(JSON)</span></h3></div>');
                    $('#server-response').before('<div id="searchindexstatus_placeholder" style="display: none;"></div><div id="feedrunstatus_placeholder" style="display: none;"></div><section id="feed-notifications"><div class="section-head"><h3 class="section-title">Feed Notifications</h3><a class="error-count" data-count="0"></a><a class="warning-count" data-count="0"></a><a class="clear-count" data-count="0"></a><div class="filter-search"><input name="feed-notifications-filter" id="feed-notifications-filter" placeholder="" /></div></div><div class="section-content"></div></section><section id="duplicate-skus"><div class="section-head"><h3 class="section-title">Duplicate SKU’s</h3><a class="error-count" data-count="0"></a><a class="warning-count" data-count="0"></a><a class="clear-count" data-count="0"></a><div class="filter-search"><input name="duplicate-skus-filter" id="duplicate-skus-filter" placeholder="" /></div></div><div class="section-content"></div></section><section id="skus-no-prices"><div class="section-head"><h3 class="section-title">SKU’s with no prices</h3><a class="error-count" data-count="0"></a><a class="warning-count" data-count="0"></a><a class="clear-count" data-count="0"></a><div class="filter-search"><input name="skus-no-prices-filter" id="skus-no-prices-filter" placeholder="" /></div></div><div class="section-content"></div></section><section id="flag-values"><div class="section-head"><h3 class="section-title">Flag Values</h3><a class="error-count" data-count="0"></a><a class="warning-count" data-count="0"></a><a class="clear-count" data-count="0"></a><div class="filter-search"><input name="flag-values-filter" id="flag-values-filter" placeholder="" /></div></div><div class="section-content"></div></section>');
                    $('body br').remove();
                    // formatting server response section
                    $('#server-response > span').replaceWith(function() { return '<pre>' + $(this).html() +'</pre>'; });
                    var serverResponseJSON = $('#server-response > pre').html(), cleanServerResponseJSON = JSON.stringify(JSON.parse(serverResponseJSON), null, 2);
                    $('#server-response > pre').html(cleanServerResponseJSON);
                    $('#server-response > pre').after('<div id="server-response-actions"><button id="server-response-toggle" class="button"><i class="fa fa-expand" aria-hidden="true"></i>Expand</button><button id="server-response-source" class="button"><i class="fa fa-code" aria-hidden="true"></i>Source</button><button id="server-response-copy" class="button"><i class="fa fa-clone" aria-hidden="true"></i>Copy</button></div>');
                    // server response action :: expand/collapse size
                    $('#server-response-toggle').on('click', function() {
                        if ($(this).hasClass('expanded')) {
                            $(this).removeClass('expanded');
                            $('#server-response > pre').animate({height: 120});
                        } else {
                            $(this).addClass('expanded');
                            $('#server-response > pre').animate({height: $(window).height() - $('header').outerHeight() - $('#status-bar').outerHeight() - $('header').outerHeight() - ($('#server-response').outerHeight() - $('#server-response > pre').outerHeight())});
                        }
                    });
                    // server response action :: view source
                    $('#server-response-source').on('click', function() {
                        var wnd = window.open("about:blank", "", "_blank");
                        wnd.document.write(cleanServerResponseJSON);
                        wnd.document.head.insertAdjacentHTML('beforeend', '<title>Baseline Index Status - Server Response</title><style>body{font-family:consolas,courier,sans-serif;font-size:12px;}</style>');
                    });
                    // server response action :: copy formatted source
                    $('#server-response-copy').on('click', function() {
                        copyToClipboard(cleanServerResponseJSON);
                        $('#server-response > pre').animate({opacity: 0.5}, 250, function() { $(this).animate({opacity: 1}, 250); });
                    });
                    // initializing date/time formats
                    var statusBarDateFormat = {
                        hour12: true,
                        timeZone: 'America/New_York',
                        weekday: 'short',
                        month: 'short',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric',
                        second: 'numeric',
                        timeZoneName: 'short'
                    };
                    var statusBarDateFormat_mobileStart = {
                        hour12: true,
                        timeZone: 'America/New_York',
                        month: 'short',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric',
                        second: 'numeric'
                    };
                    var statusBarDateFormat_mobileEnd = {
                        hour12: true,
                        timeZone: 'America/New_York',
                        hour: 'numeric',
                        minute: 'numeric',
                        second: 'numeric',
                        timeZoneName: 'short'
                    };
                    var calendarButtonDateFormat = {
                        hour12: true,
                        timeZone: 'America/New_York',
                        weekday: 'short',
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                    };
                    var feedNotificationTimestampFormat = {
                        hour12: true,
                        timeZone: 'America/New_York',
                        hour: 'numeric',
                        minute: 'numeric',
                        second: 'numeric',
                        timeZoneName: 'short'
                    };
                    // rewriting status timestamps to match requested format and time zone
                    $('.timestamp > :last-child').each(function() {
                        todayDate = new Date();
                        statusTimestamp = $(this).text();
                        statusDate = ((new Date(statusTimestamp)).getFullYear() < todayDate.getFullYear ? todayDate : (new Date(statusTimestamp)));
                        $(this)
                            .attr('data-datetime', statusDate)
                            .attr('data-datetime-desktop', new Intl.DateTimeFormat('en-US', statusBarDateFormat).format(statusDate).replace(/,/g, ''))
                            .empty();
                        if ($(this).parent('#start-time').length > 0) {
                            $(this).attr('data-datetime-mobile', new Intl.DateTimeFormat('en-US', statusBarDateFormat_mobileStart).format(statusDate).replace(/,/g, ''));
                        } else if ($(this).parent('#end-time').length > 0) {
                            $(this).attr('data-datetime-mobile', new Intl.DateTimeFormat('en-US', statusBarDateFormat_mobileEnd).format(statusDate).replace(/,/g, ''));
                        }
                    });
                    // read server response status "SUCCESS"/"FAILED" and add matching body class for targeting
                    var statusBool = $('#status-bar > li:last-child > span').text();
                    if (statusBool == "SUCCESS") {
                        $('body').addClass('success');
                    } else if (statusBool == "FAILED") {
                        $('body').addClass('failed');
                    }
                    // refresh server status every 10 seconds
                    setInterval(function() {
                        $('#searchindexstatus_placeholder').load('http://psioccfeedsprod-env.ki2fup9mpw.us-east-2.elasticbeanstalk.com/show/searchindexstatus', function() {
                            var serverResponseContent = $('#searchindexstatus_placeholder div > span').html();
                            for (let i = 0; i < $('#searchindexstatus_placeholder ul li span').length; i++) {
                                if (i != ($('#searchindexstatus_placeholder ul li span').length - 1)) {
                                    console.log($('#searchindexstatus_placeholder ul li span').eq(i).prev().text() + " " + $('#searchindexstatus_placeholder ul li span').eq(i).text());
                                    statusTimestamp = $('#searchindexstatus_placeholder ul li span').eq(i).text();
                                    statusDate = ((new Date(statusTimestamp)).getFullYear() < todayDate.getFullYear ? todayDate : (new Date(statusTimestamp)));
                                    $('#status-bar > li > span').eq(i)
                                        .attr('data-datetime', statusDate)
                                        .attr('data-datetime-desktop', new Intl.DateTimeFormat('en-US', statusBarDateFormat).format(statusDate).replace(/,/g, ''))
                                        .empty();
                                    if ($('#status-bar > li > span').eq(i).parent('#start-time').length > 0) {
                                        $('#status-bar > li > span').eq(i).attr('data-datetime-mobile', new Intl.DateTimeFormat('en-US', statusBarDateFormat_mobileStart).format(statusDate).replace(/,/g, ''));
                                    } else if ($('#status-bar > li > span').eq(i).parent('#end-time').length > 0) {
                                        $('#status-bar > li > span').eq(i).attr('data-datetime-mobile', new Intl.DateTimeFormat('en-US', statusBarDateFormat_mobileEnd).format(statusDate).replace(/,/g, ''));
                                    }
                                } else {
                                    statusBool = $('#searchindexstatus_placeholder ul li span').eq(i).text();
                                    $('#status-bar > li > span').eq(i).text(statusBool);
                                    if (statusBool == "SUCCESS") {
                                        $('body').removeClass('failed').addClass('success');
                                    } else if (statusBool == "FAILED") {
                                        $('body').removeClass('success').addClass('failed');
                                    }
                                }
                            }
                            $('#searchindexstatus_placeholder').empty();
                        });
                    }, 10000);
                    // error & warning messages to cycle through to validate response messages, update as needed (!)
                    var errorMessages   = ["not avaiable", "not available", "could not download"],
                        warningMessages = [];
                    // initialize function to load in date-specific notification data
                    function feedLoad(dateCheck = "") {
                        if (firstFeedLoad === 0) {
                            firstFeedLoad++;
                            var sectionFadeTime = 0;
                            // check for URL date logic
                            if (urlHasDate) {
                                if ((new Intl.DateTimeFormat('en-US', calendarButtonDateFormat).format(new Date(urlDate.replace(/\_/g, '\/'))).replace(/,/g, '')) == (new Intl.DateTimeFormat('en-US', calendarButtonDateFormat).format(todayDate).replace(/,/g, ''))) {
                                    $('body').addClass('time-present');
                                } else if ((new Date(urlDate.replace(/\_/g, '\/'))) > todayDate) {
                                    $('main > section').addClass('empty');
                                    $('body').removeClass('time-past time-present').addClass('time-future');
                                    for (let i = 0; i < $('section > .section-content').length; i++) {
                                        if (i == 0) {
                                            $('section > .section-content').eq(i).html('<span class="no-data">No data available yet for <span style="font-weight: 700; color: rgba(26, 32, 44, 0.75);">'+(new Intl.DateTimeFormat('en-US', calendarButtonDateFormat).format(new Date(urlDate.replace(/\_/g, '\/'))).replace(/,/g, ''))+'</span>. Please try again using a past or current date.<br><br>You may have better luck with your local fortune teller <span style="color: #000;">🔮</span></span>');
                                        } else {
                                            $('section > .section-content').eq(i).html('<span class="no-data">No data available yet for your selection. Please try again using a past or current date.');
                                        }
                                    }
                                    $('main > section').fadeIn(sectionFadeTime);
                                    return;
                                } else if ((new Date(urlDate.replace(/\_/g, '\/'))) < todayDate) {
                                    $('body').removeClass('time-present time-future').addClass('time-past');
                                }
                            }
                        } else {
                            $('main > section').fadeOut(sectionFadeTime).removeAttr('class');
                            $('[data-count]').removeClass('active');
                            $('.filter-search input').val("");
                            $('[data-count]').attr('data-count', '0');
                        }
                        setTimeout(function() {
                            // loading notification data into hidden placeholder element for analysis
                            $('#feedrunstatus_placeholder').load('http://psioccfeedsprod-env.ki2fup9mpw.us-east-2.elasticbeanstalk.com/show/feedrunstatus'+(dateCheck.length > 0 ? "?day="+dateCheck : ""), function() {
                                // wrap all unwrapped text nodes in incoming data for targeting
                                var textnodes = getTextNodesIn($(this)[0]);
                                for (let i=0; i < textnodes.length; i++) {
                                    if ($(textnodes[i]).parent().is(this)) {
                                        $(textnodes[i]).wrap('<span class="wrapped"></span>');
                                    }
                                }
                                // load feed notification data into object: feedNotificationsObj
                                feedNotificationsObj = $('#feedrunstatus_placeholder h2:contains("Feed Notifications") + table tr:has(td)').map(function(i, v) {
                                    var $td = $('td', this);
                                    return {
                                        id: ($td.eq(0).text().length > 0 ? $td.eq(0).html() : ""),
                                        operation: ($td.eq(3).text().length > 0 ? $td.eq(3).html() : ""),
                                        start_time: ($td.eq(1).text().length > 0 ? new Intl.DateTimeFormat('en-US', feedNotificationTimestampFormat).format(new Date($td.eq(1).text()+"UTC")).replace(/,/g, '') : ""),
                                        end_time: ($td.eq(2).text().length > 0 ? new Intl.DateTimeFormat('en-US', feedNotificationTimestampFormat).format(new Date($td.eq(2).text()+"UTC")).replace(/,/g, '') : ""),
                                        description: $td.eq(4).html()
                                    }
                                }).get();
                                console.log("feedNotificationsObj", feedNotificationsObj);
                                // load duplicate SKU data into object: duplicateSKUsObj
                                duplicateSKUsObj = $('#feedrunstatus_placeholder span.wrapped:contains("Duplicate SKU\'s") + table tr:has(td)').map(function(i, v) {
                                    var $td = $('td', this);
                                    return {
                                        id: ($td.eq(0).text().length > 0 ? $td.eq(0).html() : ""),
                                        product: ($td.eq(1).text().length > 0 ? $td.eq(1).html() : ""),
                                        description: ($td.eq(2).text().length > 0 ? $td.eq(2).html() : ""),
                                        message: ($td.eq(3).text().length > 0 ? $td.eq(3).html() : "")
                                    }
                                }).get();
                                console.log("duplicateSKUsObj", duplicateSKUsObj);
                                // load SKUs without prices data into object: SKUsNoPricesObj
                                SKUsNoPricesObj = $('#feedrunstatus_placeholder span.wrapped:contains("Sku\'s with no prices") + table tr:has(td)').map(function(i, v) {
                                    var $td = $('td', this);
                                    return {
                                        id: ($td.eq(0).text().length > 0 ? $td.eq(0).html() : ""),
                                        product: ($td.eq(1).text().length > 0 ? $td.eq(1).html() : ""),
                                        // description: ($td.eq(2).text().length > 0 ? $td.eq(2).html() : ""),
                                        // default_active_price: ($td.eq(3).text().length > 0 ? $td.eq(3).html() : "")
                                    }
                                }).get();
                                console.log("SKUsNoPricesObj", SKUsNoPricesObj);
                                // load flag value data into object: flagValuesObj
                                let flags = $('#feedrunstatus_placeholder span.wrapped:contains("Reset Flag values") + table tr td');
                                for (let i = 0; i < flags.length; i++) {
                                    flagValuesObj[flags.eq(i).text().split("::")[0]] = flags.eq(i).text().split("::")[1];
                                }
                                console.log("flagValuesObj", flagValuesObj);
                                // populate sections with incoming data
                                if ($('#feedrunstatus_placeholder').length == 1 && $('#feedrunstatus_placeholder').text().trim().length > 0) {
                                    if ($('#feed-notifications').length == 1) {
                                        let errorCount = 0, warningCount = 0, clearCount = 0;
                                        if (feedNotificationsObj.length > 0) {
                                            var contentFeedNotifications = '<div class="data-rows">';
                                            for (let i = 0; i < feedNotificationsObj.length; i++) {
                                                let status = "clear";
                                                for (let key in feedNotificationsObj[i]) {
                                                    let value = feedNotificationsObj[i][key].trim();
                                                    if (value.length > 0) {
                                                        for (let i = 0; i < errorMessages.length; i++) {
                                                            if (value.toLowerCase().indexOf(errorMessages[i]) !== -1) {
                                                                status = "error";
                                                                break;
                                                            }
                                                        }
                                                        if (status === "clear") {
                                                            for (let i = 0; i < warningMessages.length; i++) {
                                                                if (value.toLowerCase().indexOf(warningMessages[i]) !== -1) {
                                                                    status = "warning";
                                                                    break;
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                                if (status == "error") { errorCount++; } else if (status == "warning") { warningCount++; } else if (status == "clear") { clearCount++; }
                                                contentFeedNotifications += '<div class="data-row status-'+status+'"><input type="checkbox" id="feed-notification-timestamp-trigger-input-'+(i+1)+'" style="display: none;"><label for="feed-notification-timestamp-trigger-input-'+(i+1)+'" class="feed-notification-timestamp-trigger"><i class="fa fa-clock-o" aria-hidden="true"></i></label>';
                                                for (let key in feedNotificationsObj[i]) {
                                                    let value = feedNotificationsObj[i][key].trim();
                                                    if (key === "start_time") { contentFeedNotifications += '<div class="feed-notification-timestamp">'; }
                                                    if (!(key === "description" && value.length === 0)) {
                                                        contentFeedNotifications += '<span class="data-value'+(value.length > 0 ? "" : " null")+'" data-label="'+key+'" data-label-clean="'+cleanKey(key)+'">'+(value.length > 0 ? value : (key === "operation" ? "No operation found" : "NULL"))+'</span>';
                                                    }
                                                    if (key === "end_time") { contentFeedNotifications += '</div>'; }
                                                }
                                                contentFeedNotifications += '</div>';
                                            }
                                            contentFeedNotifications += '</div>';
                                        } else { contentFeedNotifications = '<span class="no-data">No feed notifications to show.</span>'; $('#feed-notifications').addClass('empty'); }
                                        $('#feed-notifications').find('.error-count').attr('data-count', errorCount);
                                        $('#feed-notifications').find('.warning-count').attr('data-count', warningCount);
                                        $('#feed-notifications').find('.clear-count').attr('data-count', clearCount);
                                        $('#feed-notifications .section-content').html(contentFeedNotifications);
                                    }
                                    if ($('#duplicate-skus').length == 1) {
                                        let errorCount = 0, warningCount = 0, clearCount = 0;
                                        if (duplicateSKUsObj.length > 0) {
                                            var contentDuplicatesSKUs = '<div class="data-rows">';
                                            for (let i = 0; i < duplicateSKUsObj.length; i++) {
                                                let status = "clear";
                                                for (let key in duplicateSKUsObj[i]) {
                                                    let value = duplicateSKUsObj[i][key].trim();
                                                    if (value.length > 0) {
                                                        for (let i = 0; i < errorMessages.length; i++) {
                                                            if (value.toLowerCase().indexOf(errorMessages[i]) !== -1) {
                                                                status = "error";
                                                                break;
                                                            }
                                                        }
                                                        if (status === "clear") {
                                                            for (let i = 0; i < warningMessages.length; i++) {
                                                                if (value.toLowerCase().indexOf(warningMessages[i]) !== -1) {
                                                                    status = "warning";
                                                                    break;
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                                if (status == "error") { errorCount++; } else if (status == "warning") { warningCount++; } else if (status == "clear") { clearCount++; }
                                                contentDuplicatesSKUs += '<div class="data-row status-'+status+'">';
                                                for (let key in duplicateSKUsObj[i]) {
                                                    let value = duplicateSKUsObj[i][key].trim();
                                                    contentDuplicatesSKUs += '<span class="data-value'+(value.length > 0 ? "" : " null")+'" data-label="'+key+'" data-label-clean="'+cleanKey(key)+'">'+(value.length > 0 ? value : "NULL")+'</span>';
                                                }
                                                contentDuplicatesSKUs += '</div>';
                                            }
                                            contentDuplicatesSKUs += '</div>';
                                        } else { contentDuplicatesSKUs = '<span class="no-data">No duplicate SKU’s to show.</span>'; $('#duplicate-skus').addClass('empty'); }
                                        $('#duplicate-skus').find('.error-count').attr('data-count', errorCount);
                                        $('#duplicate-skus').find('.warning-count').attr('data-count', warningCount);
                                        $('#duplicate-skus').find('.clear-count').attr('data-count', clearCount);
                                        $('#duplicate-skus .section-content').html(contentDuplicatesSKUs);
                                    }
                                    if ($('#skus-no-prices').length == 1) {
                                        let errorCount = 0, warningCount = 0, clearCount = 0;
                                        if (SKUsNoPricesObj.length > 0) {
                                            var contentSKUsNoPrices = '<div class="data-rows">';
                                            for (let i = 0; i < SKUsNoPricesObj.length; i++) {
                                                let status = "clear";
                                                for (let key in SKUsNoPricesObj[i]) {
                                                    let value = SKUsNoPricesObj[i][key].trim();
                                                    if (value.length > 0) {
                                                        for (let i = 0; i < errorMessages.length; i++) {
                                                            if (value.toLowerCase().indexOf(errorMessages[i]) !== -1) {
                                                                status = "error";
                                                                break;
                                                            }
                                                        }
                                                        if (status === "clear") {
                                                            for (let i = 0; i < warningMessages.length; i++) {
                                                                if (value.toLowerCase().indexOf(warningMessages[i]) !== -1) {
                                                                    status = "warning";
                                                                    break;
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                                status = "warning"; // counting every SKU without a price as a warning
                                                if (status == "error") { errorCount++; } else if (status == "warning") { warningCount++; } else if (status == "clear") { clearCount++; }
                                                contentSKUsNoPrices += '<div class="data-row status-'+status+'">';
                                                for (let key in SKUsNoPricesObj[i]) {
                                                    let value = SKUsNoPricesObj[i][key].trim();
                                                    contentSKUsNoPrices += '<span class="data-value'+(value.length > 0 ? "" : " null")+'" data-label="'+key+'" data-label-clean="'+cleanKey(key)+'">'+(value.length > 0 ? value : "NULL")+'</span>';
                                                }
                                                contentSKUsNoPrices += '</div>';
                                            }
                                            contentSKUsNoPrices += '</div>';
                                        } else { contentSKUsNoPrices = '<span class="no-data">No SKU’s without prices to show.</span>'; $('#skus-no-prices').addClass('empty'); }
                                        $('#skus-no-prices').find('.error-count').attr('data-count', errorCount);
                                        $('#skus-no-prices').find('.warning-count').attr('data-count', warningCount);
                                        $('#skus-no-prices').find('.clear-count').attr('data-count', clearCount);
                                        $('#skus-no-prices .section-content').html(contentSKUsNoPrices);
                                    }
                                    if ($('#flag-values').length == 1) {
                                        // letting "false" be marked as error and "true" be registered as clear
                                        let errorCount = 0, clearCount = 0;
                                        if (Object.keys(flagValuesObj).length > 0) {
                                            var contentFlagValues = '<div class="data-rows">';
                                            for (let flag in flagValuesObj) {
                                                let status = "error";
                                                if (flagValuesObj[flag] == "true") status = "clear";
                                                if (status == "error") { errorCount++; } else if (status == "clear") { clearCount++; }
                                                contentFlagValues += '<div class="data-row status-'+status+'">';
                                                    contentFlagValues += '<span class="data-value" data-label="'+flag+'" data-flag-status="'+flagValuesObj[flag]+'">'+(flag || "")+'</span>'
                                                contentFlagValues += '</div>';
                                            }
                                            contentFlagValues += '</div>';
                                        } else { contentFlagValues = '<span class="no-data">No flag value data to show.</span>'; $('#flag-values').addClass('empty'); }
                                        $('#flag-values').find('.error-count').attr('data-count', errorCount);
                                        $('#flag-values').find('.clear-count').attr('data-count', clearCount);
                                        $('#flag-values .section-content').html(contentFlagValues);
                                    }
                                }
                                sections = $('main > section');
                                $('#feedrunstatus_placeholder').empty();
                                $('main > section').fadeIn(sectionFadeTime);
                            });
                        }, sectionFadeTime);
                    }
                    feedLoad((urlHasDate ? urlDate : ""));
                    // filter for status (clear/warning/error) by user selection via click
                    $('[data-count]').on('click', function() {
                        if ($(this).hasClass('active')) {
                            $(this).removeClass('active');
                            if ($(this).hasClass('error-count')) {
                                $(this).closest('section').removeClass('filter-error');
                            } else if ($(this).hasClass('warning-count')) {
                                $(this).closest('section').removeClass('filter-warning');
                            } else if ($(this).hasClass('clear-count')) {
                                $(this).closest('section').removeClass('filter-clear');
                            }
                        } else {
                            $(this).addClass('active');
                            // if ($(this).closest('section').find('[data-count]:visible').length == $(this).closest('section').find('[data-count].active').length) {
                            //     $(this).closest('section').removeClass('filter-error filter-warning filter-clear');
                            //     $(this).siblings('[data-count].active').addBack().removeClass('active');
                            // }
                            // else {
                                if ($(this).hasClass('error-count')) {
                                    $(this).closest('section').addClass('filter-error');
                                } else if ($(this).hasClass('warning-count')) {
                                    $(this).closest('section').addClass('filter-warning');
                                } else if ($(this).hasClass('clear-count')) {
                                    $(this).closest('section').addClass('filter-clear');
                                }
                            // }
                        }
                    });
                    // filter section data via user-entry, check on every keystroke
                    $('.filter-search > input').on('input', function() {
                        var filterSection = $(this).closest('section');
                        filterSection.find('.filtered').removeClass('filtered');
                        filterSection.find('.no-data.filter').remove();
                        if ($(this).val().trim().length > 0) {
                            filterSection.addClass('filter-active');
                            let filteredElements = filterSection.find('.data-row').filter(':contains('+$(this).val()+')');
                            if (filteredElements.length > 0) { filteredElements.addClass('filtered'); }
                            else { filterSection.children('.section-content').append('<span class="no-data filter">No search results found.</span>'); }
                        } else {
                            $(this).val("");
                            filterSection.removeClass('filter-active');
                        }
                    });
                    $('.filter-search > input').on('blur focusout', function() {
                        // var filterSection = $(this).closest('section');
                        // $(this).val("");
                        // filterSection.removeClass('filter-active');
                        // filterSection.find('.filtered').removeClass('filtered');
                    });
                    $('aside').append('<input name="date-select"'+(urlHasDate ? ' data-date="'+urlDate+'"' : "")+'><button type="button" id="calendar-select-trigger"><i class="far fa-clock" aria-hidden="true"></i><span>'+(urlHasDate ? (new Intl.DateTimeFormat('en-US', calendarButtonDateFormat).format(new Date(urlDate.replace(/\_/g, '\/'))).replace(/,/g, '')) : (new Intl.DateTimeFormat('en-US', calendarButtonDateFormat).format(todayDate).replace(/,/g, '')))+'</span></button><div id="calendar"></div>');
                    const calendarElement = document.querySelector('input[name="date-select"]');
                    const datepicker = new Datepicker(calendarElement, {
                        autohide: true,
                        format: 'mm_dd_yyyy',
                        maxView: 3,
                        orientation: 'top',
                        prevArrow: '',
                        nextArrow: '',
                        todayBtn: true,
                        todayBtnMode: 1,
                        todayHighlight: true,
                    });
                    console.log(datepicker,"typeof datepicker",typeof datepicker);
                    $('#calendar-select-trigger').on('click', function() { datepicker.show(); });
                    $('input[name="date-select"]').on('change', function() {
                        $('html, body').animate({ scrollTop: 0 }, 500); // scroll back to top
                        todayDateFormatted = (new Intl.DateTimeFormat('en-US', calendarButtonDateFormat).format(todayDate).replace(/,/g, ''));
                        statusDateFormatted = (new Intl.DateTimeFormat('en-US', calendarButtonDateFormat).format(statusDate).replace(/,/g, ''));
                        newDate = (new Date($(this).val().replace(/\_/g, '\/')));
                        newDateFormatted = (new Intl.DateTimeFormat('en-US', calendarButtonDateFormat).format(newDate).replace(/,/g, ''));
                        console.log("Today's Date: "+todayDateFormatted+"\nCurrent Date: "+statusDateFormatted+"\nNew Date:     "+newDateFormatted);
                        if (newDateFormatted == todayDateFormatted) {
                            $('body').removeClass('time-past time-future').addClass('time-present');
                            $('#calendar-select-trigger > span').text(todayDateFormatted);
                            history.pushState(null, "", "/show/searchindexstatus");
                            if (todayDateFormatted == statusDateFormatted) {
                                feedLoad();
                            } else {
                                feedLoad($(this).val());
                            }
                        } else if (newDateFormatted == statusDateFormatted) {
                            $('body').removeClass('time-present time-future').addClass('time-past');
                            $('#calendar-select-trigger > span').text(statusDateFormatted);
                            history.pushState(null, "", "/show/searchindexstatus?date=" + $(this).val());
                            feedLoad($(this).val());
                        } else if (new Date(newDate) < new Date(statusDate)) {
                            history.pushState(null, "", "/show/searchindexstatus?date=" + $(this).val());
                            $('body').removeClass('time-present time-future').addClass('time-past');
                            $('#calendar-select-trigger > span').text(newDateFormatted);
                            feedLoad($(this).val());
                        } else if (new Date(newDate) > new Date(statusDate)) {
                            history.pushState(null, "", "/show/searchindexstatus?date=" + $(this).val());
                            $('main > section').fadeOut(sectionFadeTime).attr('class', 'empty');
                            $('body').removeClass('time-past time-present').addClass('time-future');
                            $('#calendar-select-trigger > span').text(newDateFormatted);
                            setTimeout(function() {
                                for (let i = 0; i < $('section > .section-content').length; i++) {
                                    if (i == 0) {
                                        $('section > .section-content').eq(i).html('<span class="no-data">No data available yet for <span style="font-weight: 700; color: rgba(26, 32, 44, 0.75);">'+newDateFormatted+'</span>. Please try again using a past or current date.<br><br>You may have better luck with your local fortune teller <span style="color: #000;">🔮</span></span>');
                                    } else {
                                        $('section > .section-content').eq(i).html('<span class="no-data">No data available yet for your selection. Please try again using a past or current date.');
                                    }
                                }
                                $('main > section').fadeIn(sectionFadeTime);
                            }, sectionFadeTime);
                        }
                    });
                    $('.datepicker .today-btn').on('click', function(e) {
                        e.preventDefault();
                        // datepicker.hide();
                        // todayDateFormatted = (new Intl.DateTimeFormat('en-US', calendarButtonDateFormat).format(todayDate).replace(/,/g, ''));
                        // $('input[name="date-select"]').val(((new Date().getMonth())+1)+"_"+(new Date().getDate())+"_"+(new Date().getFullYear())).trigger('change');
                    });
                    setTimeout(function() { $('body').animate({opacity: 1}, 750, function() { $(this).removeAttr("style"); }); }, 500);
                })();
            }, 100);
        } else {
            setTimeout(function() { /* wait 250ms */ }, 250);
        }
    }
}, 250);
