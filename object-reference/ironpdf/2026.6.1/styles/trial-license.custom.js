// meeting dialog object
const MeetingDialog = {
  dialog: document.getElementById('dialogHsMeetingFormFullScreen'),
  isMeetingScriptLoaded: false,

  init() {
    // dialog > close, keep close actions here
    this.dialog.addEventListener("close", () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    });

    // close button
    const closeButton = this.dialog.querySelector('.close_button');
    if (closeButton) {
      closeButton.addEventListener("click", () => {
        this.dialog.close();
      });
    }

    window.addEventListener('message', this.handleMessage.bind(this));
  },

  loadMeetingScript() {
    const script = document.createElement('script');
    script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
    script.onload = () => {
    };
    document.head.appendChild(script);
    this.isMeetingScriptLoaded = true;
  },

  // listen for the meeting form submit
  handleMessage(event) {
    const meetingEventOrigin = 'https://hub.ironsoftware.com';
    // Validate the origin first
    if (event.origin === meetingEventOrigin && event.data?.meetingBookSucceeded === true) {
      // goal for meeting form of 3 steps trial
      window._vis_opt_queue = window._vis_opt_queue || [];
      window._vis_opt_queue.push(function () {
        _vis_opt_goal_conversion(239);
      });

      // Remove this listener after success
      window.removeEventListener('message', this.handleMessage.bind(this));
    }
  },

  open() {
    window.dispatchEvent(new Event('resize'));


    // load script if not load before open modal
    if (!this.isMeetingScriptLoaded) {
      this.loadMeetingScript();

      this.dialog.querySelector('.meetings-iframe-container').style.visibility = 'hidden';
      setTimeout(() => {
        this.dialog.querySelector('.meetings-iframe-container').style.visibility = 'visible';
      }, 3000);

    }
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = scrollbarWidth + "px";

    this.dialog.showModal();
  }
};
MeetingDialog.init();

// Convert jQuery or String to element
function resolveForm(form) {
  return typeof form === 'string'
    ? qs(form)
    : (window.jQuery && form instanceof jQuery)
      ? form[0]
      : form;
}

function setLocalStorageIfTrialSubmitted() {
	// find the domain
	var domain = window.location.hostname;

	// if domain contains ironsoftware
	if (domain.includes("ironsoftware")) {
		localStorage.setItem("ironsuite_trial_submitted", "true");
	} else if (domain.includes("ironpdf")) {
		localStorage.setItem("ironpdf_trial_submitted", "true");
	}
}

function getLocalStorageIfTrialSubmitted() {
	// find the domain
	var domain = window.location.hostname;

	// if domain contains ironsoftware
	if (domain.includes("ironsoftware")) {
		return localStorage.getItem("ironsuite_trial_submitted");
	} else if (domain.includes("ironpdf")) {
		return localStorage.getItem("ironpdf_trial_submitted");
	}

	return null;
}


// create error tooltip, start
function buildFormErrorTooltips(form, hsFormErrorTooltipMessages) {
  const formEl = resolveForm(form);
  if (!formEl || !hsFormErrorTooltipMessages) return;

  for (const hsField in hsFormErrorTooltipMessages) {
    // container: .hs-form-field.hs-<field>
    const container = document.querySelector(`.hs-form-field.hs-${hsField}`, formEl);
    if (!container) continue;

    // create the trigger element
    const t = document.createElement('div');
    t.className = 'alert-tooltip';
    t.setAttribute('data-toggle', 'tooltip');
    t.setAttribute('data-placement', 'top');
    t.setAttribute('title', hsFormErrorTooltipMessages[hsField] ?? '');
    container.appendChild(t);

    // init any [data-toggle="tooltip"] inside that field
    document.querySelectorAll(`.hs-form-field.hs-${hsField} [data-toggle="tooltip"]`, formEl)
      .forEach((el) => { bsTooltip(el); });
  }
}

function trialFormSetStep(modal_id, step) {

  // check is suite modal
  const isSuite = getHsProductCodeFromUrl() === 'suite';

  const modal = document.querySelector(modal_id);

  const show = (selector) => {
    const el = modal.querySelector(selector);
    if (!el) return;
    el.style.display = 'block';
  };
  const hide = (selector) => {
    const el = modal.querySelector(selector);
    if (!el) return;
    el.style.display = 'none';
  };

  if (step === 1) {
    // left contents
    show('.group__started_for_free');
    hide('.group__started_for_free_completed');
    hide('.group__booking');
    hide('.group__booking_completed');

    // right forms
    show('.page_one');
    hide('.page_two');
    hide('.page_three');
    hide('.page_submitted');

  } else if (step === 2) {
    // left contents
    show('.group__started_for_free');
    hide('.group__started_for_free_completed');
    hide('.group__booking');
    hide('.group__booking_completed');

    // right forms
    hide('.page_one');
    show('.page_two');
    hide('.page_three');
    hide('.page_submitted');

  } else if (step === 3) {
    // left contents
    hide('.group__started_for_free');
    show('.group__started_for_free_completed');
    show('.group__booking');
    hide('.group__booking_completed');

    // right forms
    hide('.page_one');
    hide('.page_two');
    show('.page_three');
    hide('.page_submitted');
    hide('.right .trusted_by');
    show('.right .trial_key_sent');

  } else if (step === 4) {
    // left contents
    hide('.group__started_for_free');
    show('.group__started_for_free_completed');
    show('.group__booking');
    hide('.group__booking_completed');

    // right forms
    hide('.page_one');
    hide('.page_two');
    hide('.page_three');
    show('.page_submitted');
    show('.right .trusted_by');
    hide('.right .trial_key_sent');
  }

  /* override for suite modal */
  if (isSuite == true) {
    // left contents for suite
    hide('.group__started_for_free');
    hide('.group__started_for_free_completed');
    hide('.group__booking');
    hide('.group__booking_completed');
    show('.group__suite');

    hide('.formright_submitted--products');
    show('.formright_submitted--suite');
  }
}

// remove placeholder from hubspot form
function removeHSFormPlaceHolder(form) {
  const formEl = resolveForm(form);
  if (!formEl) return;
  document.querySelectorAll('input[placeholder]', formEl).forEach((inp) => {
    inp.setAttribute('placeholder', '');
  });
}


function buildCountryCodeForPhoneFields(form, targetInputGroup) {
  const formEl = resolveForm(form);
  if (!formEl) return;

  const groupEl = document.querySelector(targetInputGroup, formEl);
  if (!groupEl) return;

  const countrySelectField = document.querySelector(`${targetInputGroup} select.hs-input`, formEl);
  const inputPhoneField = document.querySelector(`${targetInputGroup} input.hs-input[type="tel"]`, formEl);
  if (!countrySelectField || !inputPhoneField) return;

  const absoluteHideStyle = {
    height: '0', width: '0', opacity: '0', border: 'none',
    paddingTop: '0', paddingBottom: '0', margin: '0'
  };

  // Country extension codes
  const hsCountryCodes = {
    AF: "+93", AL: "+355", DZ: "+213", AS: "+1684", AD: "+376", AO: "+244", AI: "+1264", AG: "+1268", AR: "+54",
    AM: "+374", AW: "+297", AU: "+61", AT: "+43", AZ: "+994", BS: "+1242", BH: "+973", BD: "+880", BB: "+1246",
    BY: "+375", BE: "+32", BZ: "+501", BJ: "+229", BM: "+1441", BT: "+975", BO: "+591", BA: "+387", BW: "+267",
    BR: "+55", IO: "+246", VG: "+1284", BN: "+673", BG: "+359", BF: "+226", BI: "+257", KH: "+855", CM: "+237",
    CA: "+1", CV: "+238", BQ: "+599", KY: "+1345", CF: "+236", TD: "+235", CL: "+56", CN: "+86", CO: "+57",
    KM: "+269", CD: "+243", CG: "+242", CK: "+682", CR: "+506", CI: "+225", HR: "+385", CU: "+53", CW: "+599",
    CY: "+357", CZ: "+420", DK: "+45", DJ: "+253", DM: "+1767", DO: "+1", EC: "+593", EG: "+20", SV: "+503",
    GQ: "+240", ER: "+291", EE: "+372", ET: "+251", FK: "+500", FO: "+298", FJ: "+679", FI: "+358", FR: "+33",
    GF: "+594", PF: "+689", GA: "+241", GM: "+220", GE: "+995", DE: "+49", GH: "+233", GI: "+350", GR: "+30",
    GL: "+299", GD: "+1473", GP: "+590", GU: "+1671", GT: "+502", GN: "+224", GW: "+245", GY: "+592", HT: "+509",
    HN: "+504", HK: "+852", HU: "+36", IS: "+354", IN: "+91", ID: "+62", IR: "+98", IQ: "+964", IE: "+353",
    IL: "+972", IT: "+39", JM: "+1876", JP: "+81", JO: "+962", KZ: "+7", KE: "+254", KI: "+686", XK: "+383",
    KW: "+965", KG: "+996", LA: "+856", LV: "+371", LB: "+961", LS: "+266", LR: "+231", LY: "+218", LI: "+423",
    LT: "+370", LU: "+352", MO: "+853", MK: "+389", MG: "+261", MW: "+265", MY: "+60", MV: "+960", ML: "+223",
    MT: "+356", MH: "+692", MQ: "+596", MR: "+222", MU: "+230", MX: "+52", FM: "+691", MD: "+373", MC: "+377",
    MN: "+976", ME: "+382", MS: "+1664", MA: "+212", MZ: "+258", MM: "+95", NA: "+264", NR: "+674", NP: "+977",
    NL: "+31", NC: "+687", NZ: "+64", NI: "+505", NE: "+227", NG: "+234", NU: "+683", NF: "+672", KP: "+850",
    MP: "+1670", NO: "+47", OM: "+968", PK: "+92", PW: "+680", PS: "+970", PA: "+507", PG: "+675", PY: "+595",
    PE: "+51", PH: "+63", PL: "+48", PT: "+351", PR: "+1", QA: "+974", RE: "+262", RO: "+40", RU: "+7",
    RW: "+250", BL: "+590", SH: "+290", KN: "+1869", LC: "+1758", MF: "+590", PM: "+508", VC: "+1784", WS: "+685",
    SM: "+378", ST: "+239", SA: "+966", SN: "+221", RS: "+381", SC: "+248", SL: "+232", SG: "+65", SX: "+1721",
    SK: "+421", SI: "+386", SB: "+677", SO: "+252", ZA: "+27", KR: "+82", SS: "+211", ES: "+34", LK: "+94",
    SD: "+249", SR: "+597", SZ: "+268", SE: "+46", CH: "+41", SY: "+963", TW: "+886", TJ: "+992", TZ: "+255",
    TH: "+66", TL: "+670", TG: "+228", TK: "+690", TO: "+676", TT: "+1868", TN: "+216", TR: "+90", TM: "+993",
    TC: "+1649", TV: "+688", VI: "+1340", UG: "+256", UA: "+380", AE: "+971", GB: "+44", US: "+1", UY: "+598",
    UZ: "+998", VU: "+678", VA: "+39", VE: "+58", VN: "+84", WF: "+681", YE: "+967", ZM: "+260", ZW: "+263"
  };

  // Hide original fields (not display:none) & remove from tab order
  Object.assign(countrySelectField.style, absoluteHideStyle);
  Object.assign(inputPhoneField.style, absoluteHideStyle);
  countrySelectField.setAttribute('tabindex', '-1');
  inputPhoneField.setAttribute('tabindex', '-1');

  // Inject custom UI
  const newDropDownHTML = `
    <div class="custom-telephone-input-group">
      <div>
        <div class="label-dropdown-toggle">Dial Code</div>
        <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dial Code</button>
        <ul class="dropdown-menu"></ul>
      </div>
      <div>
        <input type="text" class="custom-phone-input" placeholder="" value=""/>
      </div>
      <div style="clear:both;"></div>
    </div>`;
  groupEl.insertAdjacentHTML('beforeend', newDropDownHTML);

  const dropdownBtn = document.querySelector(`${targetInputGroup} .dropdown-toggle`, formEl);
  const dropdownList = document.querySelector(`${targetInputGroup} ul.dropdown-menu`, formEl);
  const customInput = document.querySelector(`${targetInputGroup} .custom-phone-input`, formEl);

  // Build flag options from original <select>
  const buildNewCountryCodeOptions = (options) => {
    const frags = document.createDocumentFragment();
    Array.from(options).forEach((opt) => {
      if (opt.disabled) return;

      // Preselect button label if option selected
      if (opt.selected && dropdownBtn) {
        dropdownBtn.textContent = hsCountryCodes[opt.value] || 'Dial Code';
      }

      const countryName = (opt.textContent || '').replace(/\(.*?\)/g, '').trim();
      const flagFile = `/img/modals/trial-license-new/hubspot-custom-imgs/flags/4x3/${opt.value.toLowerCase()}.svg`;

      const li = document.createElement('li');
      const div = document.createElement('div');
      div.className = 'dropdown-item';
      div.setAttribute('value', opt.value);

      const img = document.createElement('img');
      img.loading = 'lazy';
      img.width = 17;
      img.height = 14;
      img.alt = '';
      img.src = flagFile;
      img.className = 'country-flag';

      div.appendChild(img);
      div.insertAdjacentText('beforeend', ` ${countryName} (${hsCountryCodes[opt.value] || ''})`);
      li.appendChild(div);
      frags.appendChild(li);
    });
    return frags;
  };

  dropdownList.appendChild(buildNewCountryCodeOptions(countrySelectField.options));

  // Click handler: set underlying <select> + update button label
  dropdownList.addEventListener('click', (ev) => {
    const item = ev.target.closest('.dropdown-item');
    if (!item) return;
    const iso = item.getAttribute('value');
    if (!iso) return;

    // Update the original select & dispatch change
    countrySelectField.value = iso;
    countrySelectField.dispatchEvent(new Event('change', { bubbles: true }));

    // Update the visible button text
    dropdownBtn.textContent = hsCountryCodes[iso] || 'Dial Code';
  });

  // Mirror custom input into original tel input
  customInput.addEventListener('input', (ev) => {
    const v = ev.currentTarget.value || '';
    customInput.setAttribute('value', v);
    inputPhoneField.value = v;
    // Keep the user caret in the custom field
    customInput.focus();
  });

  // Enable dropdown type-to-filter
  initializeDropdownWithSearch(formEl, targetInputGroup);
}


// dropdown with search
// extend from function buildCountryCodeForPhoneFields()
function initializeDropdownWithSearch(form, targetInputGroup) {
  const formEl = resolveForm(form);
  if (!formEl) return;

  const dropdownToggle = document.querySelector(`${targetInputGroup} .dropdown-toggle`, formEl);
  const countryList = document.querySelector(`${targetInputGroup} ul.dropdown-menu`, formEl);
  if (!dropdownToggle || !countryList) return;

  // Add a "no result" message <li>
  const noResultLi = document.createElement('li');
  noResultLi.textContent = 'Country not found';
  noResultLi.style.display = 'none';
  noResultLi.style.fontStyle = 'italic';
  countryList.appendChild(noResultLi);

  let typedBuffer = '';

  const resetDropdown = () => {
    typedBuffer = '';
    document.querySelectorAll('li', countryList).forEach((li) => { li.style.display = ''; });
    noResultLi.style.display = 'none';
  };

  // type-to-filter on the toggle button
  dropdownToggle.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { resetDropdown(); return; }
    if (e.key === 'Backspace') typedBuffer = typedBuffer.slice(0, -1);
    else if (e.key.length === 1) typedBuffer += e.key.toLowerCase();

    let anyVisible = false;
    document.querySelectorAll('li', countryList).forEach((li) => {
      if (li === noResultLi) return;
      const match = li.textContent.toLowerCase().includes(typedBuffer);
      li.style.display = match ? '' : 'none';
      if (match) anyVisible = true;
    });
    noResultLi.style.display = anyVisible ? 'none' : '';
  });

  // clicking any option resets the filter
  countryList.addEventListener('click', (e) => {
    if (e.target.closest('li')) resetDropdown();
  });

  // click outside → reset
  document.addEventListener('click', (e) => {
    if (!dropdownToggle.contains(e.target) && !countryList.contains(e.target)) {
      resetDropdown();
    }
  }, { capture: true });
}

function getHsProductCodeFromUrl() {
  const url = window.location.href;

  if (url.includes("ironpdf.com") || url.includes("ironpdf.local")) {
    if (url.includes("/java/")) return "pdf-java";
    if (url.includes("/python/")) return "pdf-python";
    if (url.includes("/nodejs/")) return "pdf-nodejs";
    return "pdf";
  } else if (url.includes("ironsoftware.com") || url.includes("ironsoftware.local")) {
    if (url.includes("/word/")) return "word";
    if (url.includes("/ocr/")) return "ocr";
    if (url.includes("/webscraper/")) return "webscraper";
    if (url.includes("/barcode/")) return "barcode";
    if (url.includes("/excel/")) return "excel";
    if (url.includes("/qr/")) return "qr";
    if (url.includes("/zip/")) return "zip";
    if (url.includes("/word/")) return "word";
    if (url.includes("/print/")) return "print";
    if (url.includes("/securedoc/")) return "securedoc";
    if (url.includes("/ppt/")) return "ppt";
    if (url.includes("/python/excel/")) return "excel-python";
    return "suite";
  }
}

function enabledAbandonTrialForm() {
  function s(e = "") {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const body = JSON.stringify({
      "fields": [
        {
          "name": "email",
          "value": e
        },
        {
          "name": "interested_products",
          "value": getHsProductCodeFromUrl()
        }
      ],
      "context": {
        "pageUri": window.location.href,
        "pageName": window.location.href.split('#')[0]
      }
    });

    fetch("https://api.hsforms.com/submissions/v3/integration/submit/22630553/e036830d-c04a-4cb9-a5a0-2ba606d5de9f", {
      method: "POST", headers: headers, body: body, redirect: "follow"
    }).then((response) => response.text()).then((result) => console.log(result)).catch((error) => console.error(error));
  }

  const w = 'email';
  const t = 'trial-license';
  const l = 'trial-license-new';
  const f = 'name';
  const fullScreenTrialModal = document.getElementById(t);
  if (fullScreenTrialModal && fullScreenTrialModal.classList.contains(l)) {
    fullScreenTrialModal.addEventListener('hide.bs.modal', function () {
      let e = [];
      document.querySelectorAll('#' + t + ' input[' + f + '="' + w + '"]').forEach(function (input) {
        if (input.value != '' && input.value != null && input.value.length >= 4) {
          e.push(input.value);
        }
      });
      if (e.length > 0) { s(e[0]); }
    });
  }
};

function enabledSocialTrial() {
  const target = '.modal#trial-license .right_content.page_one';
  const insertAfter = '.no_credit_required';

  // Add place holder for social login
  document.querySelector(target + ' ' + insertAfter).insertAdjacentHTML("afterend", '<div id="firebaseui-auth-container"><div class="or_separator">OR</div></div>');

  const firebaseuiAuthContainer = document.querySelector(target + ' #firebaseui-auth-container');
  const currentPageUri = window.location.href;

  function submitHsform(formData) {
    const myHeaders = new Headers();
    const hsu = "https://api.hsforms.com/submissions/v3/integration/submit/23795711/98897ae8-f5f7-4636-ae9e-98d808bc59b7";
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "fields": [{
        "name": "email",
        "value": formData.email
      },
      {
        "name": "firstname",
        "value": formData.name
      },
      {
        "name": "comment",
        "value": "Submit via social login"
      }
      ],
      "context": {
        "pageUri": currentPageUri,
        "pageName": "Trial Submit"
      }
    });

    fetch(hsu, {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    })
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  }

  // helper to load a script
  function loadScript(src) {
    return new Promise(resolve => {
      const s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      document.head.appendChild(s);
    });
  }

  // helper to load CSS
  function loadCSS(href) {
    const l = document.createElement('link');
    l.rel = "stylesheet";
    l.href = href;
    document.head.appendChild(l);
  }

  // Make sure related files are loaded, prevent miss behavior.
  Promise.all([
    loadScript("https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"),
    loadScript("https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js"),
    loadScript("https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.js"),
    loadCSS("https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.css"),
  ]).then(() => {
    // Firebase config
    const firebaseConfig = {
      apiKey: "AIzaSyCsJiQyqdfI_YcNRxxpVUJ_pvicKmH9dX4",
      authDomain: "iron-authentication.firebaseapp.com",
      projectId: "iron-authentication",
      storageBucket: "iron-authentication.firebasestorage.app",
      messagingSenderId: "381801101678",
      appId: "1:381801101678:web:2d637bb0cdf2377998e97f"
    };

    // init authn app
    firebase.initializeApp(firebaseConfig);

    // FirebaseUI
    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', {
      signInFlow: 'popup',
      signInOptions: [{
        provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        scopes: [
          'email',
          'profile',
        ],
        customParameters: {
          prompt: 'select_account'
        }
      },
      {
        provider: firebase.auth.GithubAuthProvider.PROVIDER_ID,
        scopes: [
          'user:email',
          'read:user',
        ],
        customParameters: {
          prompt: 'select_account'
        }
      },
      ],
      callbacks: {
        signInSuccessWithAuthResult: function (authResult) {
          const user = authResult.user;

          const userEmail = user.email || user.providerData[0]?.email;
          const userName = user.displayName;

          // Place info into the HS form
          const emailInput = document.querySelector('.modal#trial-license .right_content.page_two .placeholder__hsform--two form input[name="email"]');
          const nameInput = document.querySelector('.modal#trial-license .right_content.page_two .placeholder__hsform--two form input[name="firstname"]');

          // interact the dom
          document.querySelector('.modal#trial-license .right_content.page_one').style.display = 'none';
          document.querySelector('.modal#trial-license .right_content.page_two').style.display = 'block';
          var emailInputField = document.querySelector('.modal#trial-license .placeholder__hsform--two input[name="email"]');
          if (emailInputField) {
            emailInputField.readOnly = true;
            emailInputField.value = userEmail;
            emailInputField.dispatchEvent(new Event('change', {
              bubbles: true
            }));
          }

          if (emailInput) {
            emailInput.value = userEmail;
            emailInput.dispatchEvent(new InputEvent('input', {
              bubbles: true,
              cancelable: true
            }));
          }

          if (nameInput) {
            nameInput.value = userName;
            nameInput.dispatchEvent(new InputEvent('input', {
              bubbles: true,
              cancelable: true
            }));
          }

          submitHsform({
            "email": userEmail,
            "name": userName
          })
          firebaseuiAuthContainer.style.display = 'none';
          return false;
        }
      }
    });
  });

  return;
}

(() => {
  const trialLicenseElement = document.querySelector('#trial-license');
  const trialLicenseModal = null;
  if (trialLicenseElement) {
    const placeholderSelector = trialLicenseElement.querySelector(".placeholder__hsform--one");
    var hsFormOptions_one = {
      region: IRON.hubspotForms.stepOne.region,
      portalId: IRON.hubspotForms.stepOne.portal,
      formId: IRON.hubspotForms.stepOne.form,
      formInstanceId: "modal-trial-license",
      locale: "en",
      target: "#trial-license .placeholder__hsform--one",
      cssClass: "hsform_error_v2 hsform_floating_label",
      submitButtonClass: "hs-button primary large",
      submitText: "Continue →",
      inlineMessage: "<div class=\"d-none\"></div>",
      onFormReady: function ($form) {
        var hsFormErrorTooltipMessages = { "email": "Please input a valid email address", "firstname": "Please input your name", "countrycode": "", "phone": "A valid phone number may only contain numbers, +()-. or x", "preferred_communication": "Please select a preferred contact method" };
        buildFormErrorTooltips($form, hsFormErrorTooltipMessages);
        removeHSFormPlaceHolder($form);
      },
      onFormSubmitted: function ($form, data) {
        trialFormSetStep("#trial-license", 2);

        // trigger goal start
        trigger_goal('trial_form_submitted');
        setLocalStorageIfTrialSubmitted();

        // trigger VWO goal
        window._vis_opt_queue = window._vis_opt_queue || [];
        window._vis_opt_queue.push(function () { _vis_opt_goal_conversion(238); });

        // Fire Custom Event when form submited
        dataLayer.push({ 'event': 'trial-from-submitted' });

        // HubSpot
        hubspot_custom_conversion_trigger("pe22630553_trial_from_submitted_v2");
        // trigger goal end

        /// push submited data to 2nd form and mark readonly
        setTimeout(function () {
          $(".modal#trial-license .placeholder__hsform--two input[name='email']").attr('readonly', true).val(data.submissionValues.email).change();
        }, 200);
      },
      translations: {
        en: {
          fieldLabels: { "email": "Your Business Email", "firstname": "Name", "countrycode": "Dial Code", "phone": "Phone number", "preferred_communication": "Preferred Contact Method" }
        }
      },
    };

    /* settings of from two */
    var hsFormOptions_two = {
      region: IRON.hubspotForms.stepTwo.region,
      portalId: IRON.hubspotForms.stepTwo.portal,
      formId: IRON.hubspotForms.stepTwo.form,
      locale: "en",
      target: "#trial-license .placeholder__hsform--two",
      cssClass: "trialFormTwo hsform_error_v2 hsform_floating_label",
      submitButtonClass: "hs-button primary large",
      submitText: "Continue →",
      inlineMessage: "<div class=\"d-none\"></div>",
      onFormReady: function ($form) {
        var hsFormErrorTooltipMessages = { "email": "Please input a valid email address", "firstname": "Please input your name", "countrycode": "", "phone": "A valid phone number may only contain numbers, +()-. or x", "preferred_communication": "Please select a preferred contact method" };
        buildFormErrorTooltips($form, hsFormErrorTooltipMessages);
        removeHSFormPlaceHolder($form);
      },
      onFormSubmitted: function ($form, data) {
        // change step to meeting form
        trialFormSetStep("#trial-license", 3);

        // trigger window resize for HubSpot meeting form to recalculate the height after update data-src
        window.dispatchEvent(new Event('resize'));

        setTimeout(function () {
          // update iframe from data-src, start
          const email = data['submissionValues']['email'];
          const name = data['submissionValues']['firstname'];
          const phone = data['submissionValues']['phone'];

          var bookingFormUrl = $('#trial-license .hsform_schedule_meeting .meetings-iframe-container').attr('data-src');

          // generate new data-src
          bookingFormUrl = bookingFormUrl + '&email=' + email;
          bookingFormUrl = bookingFormUrl + '&firstname=' + name;
          bookingFormUrl = bookingFormUrl + '&phone=' + phone;

          $('#trial-license .hsform_schedule_meeting .meetings-iframe-container').attr('data-src', bookingFormUrl);
          // update iframe from data-src, end


          // call next form manually after update data-src
          $.getScript('https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js', function () {
          });


          // listen for the meeting form submit, start
          // const meetingEventOrigin = 'https://meetings.hubspot.com';
          const meetingEventOrigin = 'https://hub.ironsoftware.com';

          function handleMessage(event) {
            // Validate the origin first
            if (event.origin === meetingEventOrigin) {
              // only if meetingBookSucceeded
              if (event.data?.meetingBookSucceeded === true) {
                // goal for meeting form of 3 steps trial
                window._vis_opt_queue = window._vis_opt_queue || [];
                window._vis_opt_queue.push(function () { _vis_opt_goal_conversion(239); });

                // Remove this listener after success
                window.removeEventListener('message', handleMessage);
                trialFormSetStep("#trial-license", 4);
              }
            }
          }

          // Register the listener
          window.addEventListener('message', handleMessage);
          // listen for the meeting form submit, end

        }, 200);
      },
      translations: {
        en: {
          fieldLabels: { "email": "Your Business Email", "firstname": "Name", "countrycode": "Dial Code", "phone": "Phone number", "preferred_communication": "Preferred Contact Method" }
        }
      },
    }
    trialLicenseElement.addEventListener("shown.bs.modal", function () {
      embedCustomHubspotForm(placeholderSelector, hsFormOptions_one);
      embedCustomHubspotForm(placeholderSelector, hsFormOptions_two, false);
    }, { once: true });
  }

  const openTrialModal = function (event) {
    const trialCTA = event.target.closest(
      "a[href*='trial-license']"
    );

    if (!trialCTA || !trialLicenseElement) return;
    event?.preventDefault();
    window.trialLicenseModal = window.trialLicneseModal || bootstrap.Modal.getOrCreateInstance(trialLicenseElement);
    window.trialLicenseModal.show();
  };

  const hashOpenTrialModal = function(event) {
    if (window.location.hash === '#trial-license') {
      openTrialModal(event);
    }
  }

  document.addEventListener('click', openTrialModal);
  window.addEventListener('hashchange', hashOpenTrialModal);
  window.addEventListener('load', hashOpenTrialModal);
})();
