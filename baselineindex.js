// PSI Baseline Status Index - v2.5.8
// https://github.com/brandonmcconnell/Pet-Supermarket-Baseline-Index-Status/

// initialize top-level scripts
/* Google Tag Manager */ (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-PBN4HLJ'); 
                          document.body.insertAdjacentHTML('afterbegin', '<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PBN4HLJ" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>');
/* HotJar */             (function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:1699928,hjsv:6};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r)})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');

// set page title
var pageTitle = "Baseline Index Status";
if (document.head.querySelector('title')) { document.head.querySelector('title').textContent = pageTitle; } else { document.head.insertAdjacentHTML('beforeend', '<title>Baseline Index Status</title>'); }
if (document.head.querySelector('link[rel="shortcut icon"]')) { document.head.querySelector('link[rel="shortcut icon"]').setAttribute('href', 'https://cdn.jsdelivr.net/gh/brandonmcconnell/Pet-Supermarket-Baseline-Index-Status@latest/favicon.png'); } else { document.head.insertAdjacentHTML('beforeend', '<link rel="icon" type="image/png" href="https://cdn.jsdelivr.net/gh/brandonmcconnell/Pet-Supermarket-Baseline-Index-Status@latest/favicon.png">'); }
// external stylesheets & minified page styles (custom CSS)
var externalStylesheets = [
	'https://necolas.github.io/normalize.css/8.0.1/normalize.css',
	'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
	'https://cdn.jsdelivr.net/npm/vanillajs-datepicker@1/dist/css/datepicker.min.css',
	'https://cdn.jsdelivr.net/gh/brandonmcconnell/Pet-Supermarket-Baseline-Index-Status@latest/baselineindex.css'
];
document.head.insertAdjacentHTML('beforeend', externalStylesheets.map(function (src) { return '<link href="' + src + '" rel="stylesheet">'; }).join(''));
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
var sectionFadeTime = 400, todayDate, todayDateFormatted, statusDate, statusDateFormatted, newDate, newDateFormatted, statusTimestamp, numOfFeedLoads = 0, feedNotificationsObj = {}, duplicateSKUsObj = {}, SKUsNoPricesObj = {}, flagValuesObj = {};
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
    if (document.head.querySelector('link[rel="shortcut icon"]')) { document.head.querySelector('link[rel="shortcut icon"]').setAttribute('href', 'https://cdn.jsdelivr.net/gh/brandonmcconnell/Pet-Supermarket-Baseline-Index-Status@latest/favicon-status-success.png'); } else { document.head.insertAdjacentHTML('beforeend', '<link rel="icon" type="image/png" href="https://cdn.jsdelivr.net/gh/brandonmcconnell/Pet-Supermarket-Baseline-Index-Status@latest/favicon-status-success.png">'); }
} else if (statusBool == "FAILED") {
    $('body').addClass('failed');
    if (document.head.querySelector('link[rel="shortcut icon"]')) { document.head.querySelector('link[rel="shortcut icon"]').setAttribute('href', 'https://cdn.jsdelivr.net/gh/brandonmcconnell/Pet-Supermarket-Baseline-Index-Status@latest/favicon-status-failed.png'); } else { document.head.insertAdjacentHTML('beforeend', '<link rel="icon" type="image/png" href="https://cdn.jsdelivr.net/gh/brandonmcconnell/Pet-Supermarket-Baseline-Index-Status@latest/favicon-status-failed.png">'); }
}
// refresh server status every 10 seconds
setInterval(function() {
    $('#searchindexstatus_placeholder').load('http://psioccfeedsprod-env.ki2fup9mpw.us-east-2.elasticbeanstalk.com/show/searchindexstatus', function() {
        var serverResponseContent = $('#searchindexstatus_placeholder div > span').html();
        for (let i = 0; i < $('#searchindexstatus_placeholder ul li span').length; i++) {
            if (i != ($('#searchindexstatus_placeholder ul li span').length - 1)) {
                // console.log($('#searchindexstatus_placeholder ul li span').eq(i).prev().text() + " " + $('#searchindexstatus_placeholder ul li span').eq(i).text());
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
                    if (document.head.querySelector('link[rel="shortcut icon"]')) { document.head.querySelector('link[rel="shortcut icon"]').setAttribute('href', 'https://cdn.jsdelivr.net/gh/brandonmcconnell/Pet-Supermarket-Baseline-Index-Status@latest/favicon-status-success.png'); } else { document.head.insertAdjacentHTML('beforeend', '<link rel="icon" type="image/png" href="https://cdn.jsdelivr.net/gh/brandonmcconnell/Pet-Supermarket-Baseline-Index-Status@latest/favicon-status-success.png">'); }
                } else if (statusBool == "FAILED") {
                    $('body').removeClass('success').addClass('failed');
                    if (document.head.querySelector('link[rel="shortcut icon"]')) { document.head.querySelector('link[rel="shortcut icon"]').setAttribute('href', 'https://cdn.jsdelivr.net/gh/brandonmcconnell/Pet-Supermarket-Baseline-Index-Status@latest/favicon-status-failed.png'); } else { document.head.insertAdjacentHTML('beforeend', '<link rel="icon" type="image/png" href="https://cdn.jsdelivr.net/gh/brandonmcconnell/Pet-Supermarket-Baseline-Index-Status@latest/favicon-status-failed.png">'); }
                } else {
                	$('body').removeClass('success failed');
                	if (document.head.querySelector('link[rel="shortcut icon"]')) { document.head.querySelector('link[rel="shortcut icon"]').setAttribute('href', 'https://cdn.jsdelivr.net/gh/brandonmcconnell/Pet-Supermarket-Baseline-Index-Status@latest/favicon.png'); } else { document.head.insertAdjacentHTML('beforeend', '<link rel="icon" type="image/png" href="https://cdn.jsdelivr.net/gh/brandonmcconnell/Pet-Supermarket-Baseline-Index-Status@latest/favicon.png">'); }
                }
            }
        }
        $('#searchindexstatus_placeholder').empty();
    });
}, 10000);
// error & warning messages to cycle through to validate response messages, update as needed (!)
var errorMessages   = ["not avaiable", "not available", "could not download"],
    warningMessages = [],
    requiredTasks   = {
        "ITEM_FEED_IMPORT":               "ITEM_FEED_IMPORT",
        "PRICE_FEED_IMPORT":              "PRICE_FEED_IMPORT",
        "INVENTORY_FEED_IMPORT":          "INVENTORY_FEED_IMPORT",
        "LOCATION_INVENTORY_FEED_IMPORT": "LOCATION_INVENTORY_FEED_IMPORT",
        "FEED_PROCESSING":                "FEED_PROCESSING",
        "UPDATE_OCC_VARIANTS":            "UPDATE_OCC_VARIANTS",
        "AWARD_COUPONFEED_DOWNLOAD":      "AWARD_COUPONFEED_DOWNLOAD",
        "BV_RATING_FILE_IMPORT":          "BV_RATING_FILE_IMPORT",
        "AWARD_COUPONFEED_UPLOAD":        "AWARD_COUPONFEED_UPLOAD",
        "AWARD_COUPONFEED_PROCESS":       "AWARD_COUPONFEED_PROCESS",
        "UPLOAD_OCC_PRODUCTS":            "UPLOAD_OCC_PRODUCTS",
        "UPLOAD_OCC_SKUS":                "UPLOAD_OCC_SKUS",
        "UPLOAD_OCC_PRICES":              "UPLOAD_OCC_PRICES",
        "OROMS_ITEMFEED_GENERATE":        "",
        "OROMS_ITEMFEED_SFTP":            "OROMS_ITEMFEED_SFTP",
        "ORDERGROOVE_GENERATE":           "ORDERGROOVE_GENERATE",
        "ORDERGROOVE_SFTP":               "ORDERGROOVE_SFTP",
        "UPLOAD_OCC_INVENTORY":           "UPLOAD_OCC_INVENTORY",
        "OROMS_INVENTORY_SYNC":           "OROMS_INVENTORY_SYNC",
        "OCC_PUBLISH":                    "OCC_PUBLISH",
        "CRITEO_PRODUCTFEED_GENERATE":    "",
        "CRITEO_PRODUCTFEED_SFTP":        "CRITEO_PRODUCTFEED_SFTP",
        "FEEDONOMICS_PRODUCTFEED_SFTP":   "FEEDONOMICS_PRODUCTFEED_SFTP"
    },
    returnedTasks   = [],
    missingTasks    = [];
// initialize function to load in date-specific notification data
function feedLoad(dateCheck = "") {
    if (numOfFeedLoads === 0) {
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
    numOfFeedLoads++;
    returnedTasks = [];
    missingTasks  = [];
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
                    let errorRows = "", errorCount = 0, warningRows = "", warningCount = 0, clearRows = "", clearCount = 0;
            // if (feedNotificationsObj.length > 0) {
                        for (let i = 0; i < feedNotificationsObj.length; i++) {
                            // creating an array from all tasks in feed run status, trimming off leading date (11 characters)
                            returnedTasks.push(feedNotificationsObj[i].id.substring(11));
                        }
                        for (requiredTask in requiredTasks) {
                            if (returnedTasks.indexOf(requiredTask) === -1) {
                                // missingTasks.push(requiredTasks);
                                // console.log(requiredTask + " does not exist in [" + Object.keys(requiredTasks).join(", ") + "]");
                                var requiredTaskDateName = (dateCheck.length > 0 ? dateCheck : ((todayDate.getMonth()+1)+"_"+todayDate.getDate()+"_"+todayDate.getFullYear()))+"_"+requiredTask;
                                errorRows += '<div class="data-row status-error"><span class="data-value" data-label="id" data-label-clean="ID">'+requiredTaskDateName+'</span><span class="data-value" data-label="operation" data-label-clean="Operation">'+requiredTasks[requiredTask]+'</span></div>';
                                errorCount++;
                                $.ajax({ url: 'http://dreamthinkbuild.com/psi/baseline-index-status/sms/report-send.php?message=Required Task Did Not Run: ' + requiredTaskDateName, cache: false, });
                            }
                        }
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
                            var rowContent = '<div class="data-row status-'+status+'"><input type="checkbox" id="feed-notification-timestamp-trigger-input-'+(i+1)+'" style="display: none;"><label for="feed-notification-timestamp-trigger-input-'+(i+1)+'" class="feed-notification-timestamp-trigger"><i class="fa fa-clock-o" aria-hidden="true"></i></label>';
                            for (let key in feedNotificationsObj[i]) {
                                let value = feedNotificationsObj[i][key].trim();
                                if (key === "start_time") { rowContent += '<div class="feed-notification-timestamp">'; }
                                if (!(key === "description" && value.length === 0)) {
                                    rowContent += '<span class="data-value'+(value.length > 0 ? "" : " null")+'" data-label="'+key+'" data-label-clean="'+cleanKey(key)+'">'+(value.length > 0 ? value : (key === "operation" ? "" : "NULL"))+'</span>';
                                }
                                if (key === "end_time") { rowContent += '</div>'; }
                            }
                            rowContent += '</div>';
                            if (status == "error") {
                                errorRows += rowContent;
                                errorCount++;
                            } else if (status == "warning") {
                                warningRows += rowContent;
                                warningCount++;
                            } else if (status == "clear") {
                                clearRows += rowContent;
                                clearCount++;
                            }
                        }
                        contentFeedNotifications += errorRows + warningRows + clearRows + '</div>';
            // } else { contentFeedNotifications = '<span class="no-data">No feed notifications to show.</span>'; $('#feed-notifications').addClass('empty'); }
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
                            status = "error"; // counting every duplicate SKU as an error
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
$('#calendar-select-trigger').on('click', function() {
    if ($('body').find('.datepicker.active').length == 0) {
        datepicker.show();
    } else {
        datepicker.hide();
    }
});
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