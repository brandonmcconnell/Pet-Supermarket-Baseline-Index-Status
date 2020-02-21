# Pet Supermarket Baseline Index Status - SmartDash

This project is the JavaScript core for a dashboard that runs atop Oracle's OCC product feed status, notifications, and baseline index status. This dashboard allows for easier browsing and accessbility with notification status validation, section deliminiation, calendar date recursive reports, and SMS alerts. This is a growing project so functionality will continue to expand to meet new needs and improve upon existing functionality and performance.

### Prerequisites

This dashboard requires a modern browser with the capability to run custom extensions, and an extension that allows the user to run custom JavaScript over active websites and sessions, such as Tampermonkey for Chrome, or Greasemonkey for Firefox. This documentation covers a Chrome/Tampermonkey implementation. Adjust accordingly if you are a Firefox/Greasemonkey user.

* For Chrome users, install [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) ([Documentation](https://www.tampermonkey.net/documentation.php))
* For Firefox users, install [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) ([Documentation](https://wiki.greasespot.net/Greasemonkey_Manual))

## Installing

Enter the dashboard in your respective extension listed above (or other) and create a new script. Overwrite all the default code with the below code.

```javascript
// ==UserScript==
// @name         Pet Supermarket - Status Index SmartDash
// @namespace    http://psioccfeedsprod-env.ki2fup9mpw.us-east-2.elasticbeanstalk.com/
// @version      0.1
// @description  Smart Dashboard for Oracle OCC Baseline Status Index & Product Feed Notifications
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
                    $.getScript('https://cdn.jsdelivr.net/gh/brandonmcconnell/Pet-Supermarket-Baseline-Index-Status@latest/baselineindex.js');
                })();
            }, 100);
        } else {
            setTimeout(function() { /* wait 250ms */ }, 250);
        }
    }
}, 250);
```

## Running the tests

Once configuration is complete, visit the [dashboard](http://psioccfeedsprod-env.ki2fup9mpw.us-east-2.elasticbeanstalk.com/show/searchindexstatus). If the page requires authentication, contact your direct management or IT support for credentials. If you experience any issues during configuration or initial setup, please create a [new issue](https://github.com/brandonmcconnell/Pet-Supermarket-Baseline-Index-Status/issues/new) using the [Issues](https://github.com/brandonmcconnell/Pet-Supermarket-Baseline-Index-Status/issues) tab on this GitHub repository page.

The first item you should look for on the page is the baseline index status which will appear near the top-right corner of the page. This should say either "SUCCESS" or "FAILED" respective of the current status.

Other issues to look for on the page include any items in the Feed Notifications section styled with a red border on their left-hand side, or any items in the Duplicate SKU's section. Next to each section title, there are numbers representing how many items are tagged for each status. When a status (e.g. Clear, Warning, Error) contains no items, this will not appear for that status. Clicking one or more of these status indicators will filter the section for items matching that status.

Sections can also be filtered by search queries. When mousing over a section on desktop, a search icon will appear inline with the section title along the opposing, right-hand side of the page. Clicking this icon will activate search for its respective section and focus the cursor into a text field, ready to type. Typing into this field will actively begin filtering the section items to those containing the search query entry.

## Built With

* [Font Awesome](https://fontawesome.com/) - Custom Icons for UX
* [Vanilla JS Datepicker](https://mymth.github.io/vanillajs-datepicker/) - Datepicker widget
* [jQuery](https://api.jquery.com/) - JavaScript Library

## Contributing

We're open to contribution. Please fork this repository and provide us access to view your changes before submitting a pull request to us.

## Versioning

We use Git and GitHub for versioning (go figure). For the versions available, see the [tags on this repository](https://github.com/brandonmcconnell/Pet-Supermarket-Baseline-Index-Status/tags). 

## Authors

* **Brandon McConnell** - *Initial work* - [Pet Supermarket Baseline Index Status](https://github.com/brandonmcconnell/Pet-Supermarket-Baseline-Index-Status)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
