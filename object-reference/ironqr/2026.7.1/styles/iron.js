
/*js inlcudes */

const beginTS = performance.now();

/**
 * Indicates if debugging resources should be utilized in a given environment, if it is available. 
 * @returns {Boolean} true if debug mode should be enabled, false otherwise
 */
function debug() {
    var url = new URL(window.location.href);
    return (typeof IRON != 'undefined' && IRON.debug) || (url.host != "ironpdf.com" && url.host != "ironsoftware.com") || window.localStorage.getItem("debugMode");
}

function logMsg(level, ...data) {
    if (!console[level] || !["log", "info", "warn", "error", "debug"].includes(level)) return;
    const time = parseFloat(performance.now() - beginTS).toFixed(3);
    data.unshift("[IRON]\t");
    data.push(`\tTime (ms): ${time}`);
    if (debug()) console[level](...data);
}

/**
 * Dispatch a CustomEvent with a given name and data attributes. 
 * 
 * @param {String} eventName the name of the custom event
 * @param {JSON} eventData the data that describes the custom event
 * @param {Boolean} debug  whether or not debugging event should be outputted to the console
 */
function dispatchCustomEvent(eventName, eventData = null, debug = false) {
    var customEvent = new CustomEvent(eventName, eventData ? {
        detail: eventData
    } : null);
    document.dispatchEvent(customEvent);

    if (debug || window.debug()) {
        logMsg("log", eventName + " event fired!");
    }
}
document.fireCustomEvent = dispatchCustomEvent;

window.mobileCheck = function () {
    let check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};

window.botCheck = function () {

    var ua = (navigator.userAgent || navigator.vendor || window.opera);
    return /bot|googlebot|lighthouse|Lighthouse|crawler|spider|robot|crawling/i.test(ua);


}
window.is_pdf = document.location.href.indexOf('ironpdf.com') > -1;

if (is_pdf) {
    window.ga_code = 'UA-93755348-1';
    window.gtm_code = 'GTM-KRJH222';
} else {
    window.ga_code = 'UA-94023226-1';
    window.gtm_code = 'GTM-WHBMRW4';
}



window.is_mobile = window.mobileCheck();
window.is_bot = window.botCheck();

if (!window.is_bot) {
    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
        a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

    ga('create', window.ga_code, 'auto');
}

if (!window.is_bot) {
    (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js'
        });
        var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src =
            'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', window.gtm_code);

}

function show_helpscout(e) {

    let widget_status = HubSpotConversations.widget.status();

    if (widget_status.loaded) {
        window.HubSpotConversations.widget.close()
    } else {
        window.HubSpotConversations.widget.open()
    }


    if (e) {
        e.preventDefault()
        e.stopPropagation();
    }
    return false
}


$(document).ready(function () {

    $("a[href='#helpscout-support']").attr("onclick", "return window.HubSpotConversations.widget.open()");

})

function fixTopNav() {

    var topnav = document.querySelectorAll('#navbar > ul > li > a');

    if (!topnav.length) {
        return;
    }
    clearInterval(window.__ifixTopNav);
    for (var i = topnav.length - 1; i >= 0; i--) {

        if (topnav[i].getAttribute('href').indexOf('https:') === 0) {
            topnav[i].setAttribute("target", "_blank");
        }
    }
}

window.__ifixTopNav = setInterval(fixTopNav, 500);


function recordSearchAnalytics() {
    if (ga && document.getElementById('search-query').value) {
        ga('send', 'event', 'Search', 'Object Reference', document.getElementById('search-query').value);
    }
}

document.getElementById('search-query').onkeyup = function (event) {
    if (event.keyCode === 13) {
        recordSearchAnalytics()
    }
}

document.getElementById('search-query').onblur = function () {
    recordSearchAnalytics()
}

/**
 * VWO custom goal trigger script
 *
 * @param {integer} goal is a custom goal number in VWO
 *
 * @return void
*/
const vwoCustomGoalTrigger = (goal) => {
    window._vis_opt_queue = window._vis_opt_queue || [];
    window._vis_opt_queue.push(function () { _vis_opt_goal_conversion(goal); });
}

/**
 * Google Ads Conversion trigger
 *
 * @param {string} google_ads_conversion_id is a id of conversion e.g. AW-941226483/G43_CK38ya4ZEPPz58AD
 * @param {number} value is transaction value
 *
 * @return void
*/
function gtag_report_conversion(google_ads_conversion_id, totalAmount = 1) {
    gtag('event', 'ads_purchase_conversion', {
        'send_to': google_ads_conversion_id,
        'value': value,
        'currency': 'USD'
    });
}

/**
 * Reddit Conversion trigger
 *
 * @param {string} redditConversionName is a id of conversion e.g. "Purchase"
 *
 * @return void
*/
function reddit_conversion_trigger(redditConversionName) {
    waitUntil([() => window.rdt && trackerInitialized('reddit')], () => {
        rdt('track', redditConversionName);
    });
}

/**
 * HubSpot Custom Conversion trigger
 *
 * @param {string} conversionName is a id of conversion e.g. "Purchase"
 *
 * @return void
*/
function hubspot_custom_conversion_trigger(conversionName) {
    _hsq.push([
        'trackCustomBehavioralEvent',
        {
            name: conversionName
        }
    ]);
}

function trigger_goal($type) {
    // only for trigger goals
    // do not update hash, modify content or calling modal in this function (put in hubspot form options instead)

    if ($type == 'trial_form_submitted') {
        // Fire Custom Event when form submited
        dataLayer.push({'event':'trial-from-submitted'});

        // Reddit
        reddit_conversion_trigger('trial-from-submitted');

        // HubSpot
        hubspot_custom_conversion_trigger("pe22630553_trial_from_submitted_v2");

    } else if ($type == 'second_trial_form_submitted') {
        window._vis_opt_queue = window._vis_opt_queue || [];
        window._vis_opt_queue.push(function() {_vis_opt_goal_conversion(233);});

        _hsq.push([
            'trackCustomBehavioralEvent',
            {
                name: "pe22630553_second_trial_form_submitted",
                properties: {
                    // give each property a value so we know what they mean
                    second_trial_form_submitted: null
                },
            }
        ]);
    } else {
    }
}

function available(type, callback, ctx = window, timeout = -1, predicate = null) {
    const t0 = performance.now();
    let frameId = null;
    const ok = () => !!ctx[type] && (predicate && typeof predicate === 'function' ? predicate() : true);
    const cancelPoll = () => {
        if (frameId) cancelAnimationFrame(frameId);
    };
    const exists = () => {
        cancelPoll();
        document.fireCustomEvent("objectAvailable", { type: type });
        callback();
    }
    const poll = () => {
        if (ok()) { exists(); return; }
        if (timeout != -1 && performance.now() - t0 > timeout) {
            cancelPoll();
            logMsg('warn', `[available] Timeout waiting for ${type}`);
            return;
        }
        frameId = requestAnimationFrame(poll);
    }
    if (ok()) return exists();
    frameId = requestAnimationFrame(poll);
}

function waitUntil(tests, callback, timeout = -1) {
    if (!Array.isArray(tests) || typeof callback != 'function') return;

    const t0 = performance.now();
    let raf = null;
    const cancelPoll = () => {
        if (raf) cancelAnimationFrame(raf);
    };
    const check = () => tests.every(test => test());
    const poll = (ts) => {
        if (check()) {
            cancelPoll();
            return callback();
        }
        if (timeout != -1 && ts - t0 > timeout) {
            cancelPoll();
            logMsg('warn', `[waitUntil] Timeout after ${timeout} milliseconds waiting for test predicates to return true`);
            return;
        }
        raf = requestAnimationFrame(poll);
    }
    poll(t0);
}

/**
 * Determines if a given script exists in the current web page's DOM.
 * 
 * @param {Striog} scriptPath A string containing an URL or relative path to a JavaScript file located in the /front/js/ directory
 * @returns {Boolean} true if the specified script exists, false otherwise.
 */
function scriptExists(scriptPath) {
    let scripts = document.querySelectorAll("script[src]");
    let exists = false;
    for (i = 0; i < scripts.length; i++) {
        if (scripts[i].src.includes(scriptPath)) {
            exists = true;
            break;
        }
    }
    return exists;
}

/**
 * Dynamically adds one JavaScript file (or a set of JavaScript files) to the body of a web page.
 * 
 * @param {String|Array<String>} scriptPath A string containing an URL or relative path to a JavaScript file located in the /front/js/ directory, or a list of relative paths that fit this requirement
 * @param {Boolean} debug Output status information to the console.
 * @param {Object} attrs additional attributes that can be associated with the import.
 * @returns {Promise} a Promise indicating the success or failure of the script execution.
 */
document.__scriptsImported = document.__scriptsImported || [];

function scriptImported(script) {
    return document.__scriptsImported.includes(script);
}

function importScript(scriptPath, debug = false, attrs = null) {
    return new Promise((resolve, reject) => {
        let scriptFiles = new Array();
        if (scriptPath.constructor === String) {
            scriptFiles.push(scriptPath);
        } else {
            scriptFiles = scriptPath;
        }

        scriptFiles.forEach(function (script) {
            if (!scriptImported(script)) {
                let scriptFile = document.createElement("script");
                var scriptSrc = /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/.test(script) ?
                    script :
                    "/front/js/" + script + generateTimestampValue();
                scriptFile.setAttribute("type", "text/javascript");

                if (attrs) {
                    var attrKeys = Object.keys(attrs)
                    for (var attr in attrKeys) {
                        scriptFile.setAttribute(attrKeys[attr], attrs[attrKeys[attr]]);
                    }
                }
                document.body.appendChild(scriptFile);
                document.__scriptsImported.push(script);

                // success event 
                scriptFile.addEventListener("load", () => {
                    resolve({
                        status: true
                    });
                    document.fireCustomEvent("assetLoaded", {
                        asset: script
                    });
                    document.fireCustomEvent("scriptLoaded", {
                        scriptName: script
                    });
                    logMsg("log", "Script file " + script + " loaded!");
                });
                // error event
                scriptFile.addEventListener("error", (ev) => {
                    reject({
                        status: false,
                        message: "Error on loading script file " + script + ": " + ev.message
                    })
                    logMsg("error", "Error on loading script file " + script, ev);
                });

                requestAnimationFrame(() => {
                    scriptFile.setAttribute("src", scriptSrc);
                });
            } else {
                resolve({
                    status: true
                });
            }
        });
    });
}

/**
 * Determines if a given stylesheet exists in the current web page's DOM.
 * 
 * @param {Striog} stylesheetPath A string containing an URL or relative path to a CSS file located in the /front/css/ directory
 * @returns {Boolean} true if the specified script exists, false otherwise.
 */
function stylesheetExists(stylesheetPath) {
    let stylesheets = Array.from(document.querySelectorAll("link[href]")).filter(el => !['preconnect', 'preload', 'prefetch'].includes(el.rel ?? 'stylesheet'));
    let exists = false;
    for (i = 0; i < stylesheets.length; i++) {
        if (stylesheets[i].href.includes(stylesheetPath)) {
            exists = true;
            break;
        }
    }
    return exists;
}

/**
 * Dynamically adds one CSS file (or a set of CSS files) to the body of a web page.
 * 
 * @param {String|Array<String>} scriptPath A string containing an URL or relative path to a CSS file located in the /front/css/ directory, or a list of relative paths that fit this requirement
 * @param {Boolean} debug Output status information to the console.
 * @returns {Promise} a Promise indicating the success or failure of the script execution.
 */
document.__stylesImported = document.__stylesImported || [];

function stylesheetImported(stylesheet) {
    return document.__stylesImported.includes(stylesheet);
}

function importStylesheet(stylePath, debug = false, attrs = null) {
    return new Promise((resolve, reject) => {
        let stylesheets = new Array();
        if (stylePath.constructor === String) {
            stylesheets.push(stylePath);
        } else {
            stylesheets = stylePath;
        }

        stylesheets.forEach(function (css) {
            if (!stylesheetImported(css)) {
                let stylesheet = document.createElement("link");
                let stylesheetHref = /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/.test(css) ?
                    css :
                    "/front/css/" + css + generateTimestampValue();
                stylesheet.setAttribute("rel", "stylesheet");
                stylesheet.setAttribute("type", "text/css");

                if (attrs) {
                    var attrKeys = Object.keys(attrs)
                    for (var attr in attrKeys) {
                        stylesheet.setAttribute(attrKeys[attr], attrs[attrKeys[attr]]);
                    }
                }
                document.head.appendChild(stylesheet);
                document.__stylesImported.push(css);
                // success event 
                stylesheet.addEventListener("load", () => {
                    resolve({
                        status: true
                    });
                    document.fireCustomEvent("assetLoaded", {
                        asset: css
                    });
                    document.fireCustomEvent("stylesheetLoaded", {
                        stylesheet: css
                    });
                    logMsg("log", "Stylesheet " + css + " loaded!");
                });
                // error event
                stylesheet.addEventListener("error", (ev) => {
                    reject({
                        status: false,
                        message: "Error on loading stylesheet " + css + ": " + ev.message
                    })
                    logMsg("error", "Error on loading stylesheet " + css, ev);
                });

                requestAnimationFrame(function () {
                    stylesheet.setAttribute("href", stylesheetHref);
                });
            }
        });
    });
}


const __isJsAsset = (asset) => /\.js(\?|#|$)/i.test(asset);
const __isCssAsset = (asset) => /\.css(\?|#|$)/i.test(asset);

/**
 * Adds a CSS or JavaScript file to the web page's DOM if it does not already exist.
 * 
 * @param {String} assetPath a valid path to a CSS or JavaScript file.
 * @param {Boolean} debug Output status information to the console.
 * @returns {Promise} a Promise indicating the success or failure of the script execution.
 */
async function importIfNotExists(assetPath, debug = false, attrs = null) {
    const importAsset = (asset) => {
        if (__isJsAsset(asset) && (!scriptExists(asset) && !scriptImported(asset))) {
            return importScript(asset, debug, attrs);
        } else if (__isCssAsset(asset) && (!stylesheetExists(asset) && !stylesheetImported(asset))) {
            return importStylesheet(asset, debug, attrs);
        } else {
            return new Promise((resolve) => {
                resolve({
                    status: true
                });
                logMsg("log", assetPath + " already exists in the DOM.");
            });
        }
    }
    if (assetPath.constructor === String) {
        return importAsset(assetPath);
    } else if (Array.isArray(assetPath)) {
        const assetImports = assetPath.map(asset => importAsset(asset));
        try {
            await Promise.all(assetImports);
            return ({ status: true });
        } catch (e) {
            logMsg('error', '[importIfNotExists] asset load failed', e);
            throw e;
        }
    } else {
        return Promise.reject({ status: false, message: 'Invalid assetPath' });
    }
}

function getFormDeps() {
    return ["https://js.hsforms.net/forms/embed/v2.js"];
}
/**
 * Build a unique CSS selector for a DOM Element.
 * Strategy:
 *  1) #id if unique
 *  2) Preferred data-* / name attributes if unique
 *  3) tag + up to 2 classes (stable-looking) + :nth-of-type
 *  4) Walk up ancestors and join with `>`
 *  5) Fallback: assign a data-uid and return it
 */
function getUniqueSelector(el, {
    root = document,
    preferAttrs = ['data-testid', 'data-test', 'data-qa', 'data-qaid', 'data-cy', 'data-hs-target', 'name', 'aria-label'],
    maxDepth = 5
} = {}) {
    if (!(el instanceof Element)) {
        throw new Error('getUniqueSelector: el must be an Element');
    }
    if (!root || !root.contains(el)) {
        throw new Error('getUniqueSelector: root must contain el');
    }

    const isUnique = (sel) => {
        try {
            const n = root.querySelectorAll(sel).length;
            return n === 1;
        } catch {
            return false;
        }
    };

    // 1) ID
    if (el.id) {
        const sel = `#${cssEscape(el.id)}`;
        if (isUnique(sel)) return sel;
    }

    // 2) Preferred attributes
    for (const attr of preferAttrs) {
        if (el.hasAttribute(attr)) {
            const val = el.getAttribute(attr);
            if (val) {
                const sel = `[${attr}="${cssEscape(val)}"]`;
                if (isUnique(sel)) return sel;
                // Try tag + attr
                const tagSel = `${el.tagName.toLowerCase()}${sel}`;
                if (isUnique(tagSel)) return tagSel;
            }
        }
    }

    // Helper: pick "stable-looking" classes (avoid utility & hashy classes)
    const stableClasses = Array.from(el.classList || []).filter(c =>
        c && !/^\d|^_|--|^col-|^row$|^mt-|^mb-|^pt-|^pb-|^g-\d/.test(c)
    ).slice(0, 2); // cap at 2 to keep it short

    // 3) Build a segment for one element
    const segFor = (node) => {
        const tag = node.tagName.toLowerCase();
        let seg = tag;
        const cls = Array.from(node.classList || []).filter(Boolean).slice(0, 2);
        if (cls.length) seg += '.' + cls.map(cssEscape).join('.');
        // :nth-of-type when needed
        if (node.parentElement) {
            const siblings = Array.from(node.parentElement.children)
                .filter(n => n.tagName === node.tagName);
            if (siblings.length > 1) {
                const idx = siblings.indexOf(node) + 1;
                seg += `:nth-of-type(${idx})`;
            }
        }
        return seg;
    };

    // 4) Walk up ancestors and try progressively longer chains
    let current = el;
    let chain = [];
    for (let depth = 0; current && depth < maxDepth; depth++) {
        // Prefer attribute selectors on each step if available & unique
        let step = null;

        if (current.id) {
            const s = `#${cssEscape(current.id)}`;
            chain.unshift(s);
            const candidate = chain.join('>');
            if (isUnique(candidate)) return candidate;
            // If ID alone is unique, earlier return would have happened
        }

        // Try preferred attrs on the current node
        for (const attr of preferAttrs) {
            if (current.hasAttribute(attr)) {
                const val = current.getAttribute(attr);
                if (val) {
                    step = `${current.tagName.toLowerCase()}[${attr}="${cssEscape(val)}"]`;
                    break;
                }
            }
        }

        // Fall back to tag.class[:nth-of-type]
        if (!step) step = segFor(current);

        chain.unshift(step);

        const selector = chain.join('>');
        if (isUnique(selector)) return selector;

        current = current.parentElement;
    }

    // 5) Last resort: assign a data-uid
    const uid = 'u' + Math.random().toString(36).slice(2);
    el.setAttribute('data-uid', uid);
    return `[data-uid="${uid}"]`;
}

function __embedHbsptForm(container, options, loader = true) {
    const normalizeTarget = (t) => {
        if (typeof t === 'string') return t;
        if (t instanceof Element) return getUniqueSelector(t, { root: document });
        if (container instanceof Element) return getUniqueSelector(container, { root: document });
    };
    const waitForHbspt = (callback) => {
        if (window.hbspt?.forms?.create) {
            callback();
            return;
        } else {
            const t0 = performance.now();
            const wait = () => {
                if (window.hbspt?.forms?.create) return callback();
                if (performance.now() - t0 > 20000) {
                    logMsg('warn', 'Timeout loading hbspt');
                    var errorMessage = document.createElement("p");
                    var errorTxt = document.createTextNode("Form did not load (possibly blocked).");
                    errorMessage.setAttribute("style", "color: #c9041e; font-family: \"var(--ff-gotham)\"; font-size: 10px; text-align: center;");
                    errorMessage.appendChild(errorTxt);
                    container.prepend(errorMessage);
                    return;
                }
                requestAnimationFrame(wait);
            }
            requestAnimationFrame(wait);
        }
    }
    const addLoader = () => {
        const loadingContainer = document.createElement("div");
        loadingContainer.className = "hbspt-loading-box";
        loadingContainer.innerHTML = '<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>';
        container.appendChild(loadingContainer);
    }
    const deleteLoader = () => {
        const loadingContainer = container.querySelector(".hbspt-loading-box");
        if (loadingContainer) {
            loadingContainer.remove();
        }
    }
    if (loader) {
        addLoader();
    }
    importIfNotExists(getFormDeps()).then(function () {
        waitForHbspt(() => {
            if (loader) {
                deleteLoader();
            }
            var targetSel = normalizeTarget(options.target ?? container);
            const targetSelContainer = document.querySelector(targetSel);
            if (targetSelContainer.hasChildNodes()) {
                const wrapper = document.createElement("div");
                wrapper.className = "hbspt-form";
                targetSelContainer.appendChild(wrapper);

                const id = `hbspt-form-${Math.random().toString(36).slice(2)}`;
                wrapper.id = id;
                targetSel = `#${id}`;
            }
            window.hbspt.forms.create({ ...options, target: targetSel });
        }, container);
    });
}

function __formSelector(selector) {
    let container = null;
    if (typeof (selector) === "string") {
        container = document.querySelector(selector);
    } else if (window.jQuery && selector instanceof jQuery) {
        container = selector[0];
    } else if (selector instanceof Element) {
        container = selector;
    }
    return container;
}

/**
 * Loads and inserts a Hubspot Form as a child of a specified HTML element.
 * 
 * @param {String|Element} selector a valid query selector for an HTML element, or the HTML element itself.
 * @param {JSON} options Hubspot Form options
 */
function embedCustomHubspotForm(selector, options, useLoader = true) {
    let container = __formSelector(selector);
    if (!container) return;
    if (!options['target']) {
        options['target'] = getUniqueSelector(container, { root: document });
    }
    __embedHbsptForm(container, options, useLoader, useLoader);
}
function bsReady(callback) {
    const bsTM = setInterval(async () => {
        if (typeof bootstrap !== 'undefined') {
            clearInterval(bsTM);
            await bootstrap;
            callback();
        }
    })
}
function bsTooltip(element, config = null) {
    new Promise(async (resolve) => {
        bsReady(() => {
            const instance = bootstrap.Tooltip.getOrCreateInstance(element, config);
            resolve(instance);
        });
    });
}