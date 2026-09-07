/* Sunward: dependency-free interactions and an explicitly illustrative model. */
(() => {
  'use strict';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const icon = (name) => `<svg class="icon" aria-hidden="true"><use href="#i-${name}"/></svg>`;
  const pounds = (n, decimals = 0) => new Intl.NumberFormat('en-GB', {
    style: 'currency', currency: 'GBP', maximumFractionDigits: decimals, minimumFractionDigits: decimals
  }).format(n);
  const clamp = (number, low, high) => Math.min(high, Math.max(low, number));
  const finite = (value, fallback) => Number.isFinite(Number(value)) && value !== '' ? Number(value) : fallback;
  const suppliedConfig = window.SUNWARD_CONFIG || {};
  const config = Object.freeze({
    // Configure a server-side endpoint and the real operator's privacy notice to enable sending.
    // Never put a CRM token, API key or secret in this file.
    leadEndpoint: typeof suppliedConfig.leadEndpoint === 'string' ? suppliedConfig.leadEndpoint : '',
    privacyPolicyUrl: typeof suppliedConfig.privacyPolicyUrl === 'string' ? suppliedConfig.privacyPolicyUrl : '',
    timeoutMs: clamp(finite(suppliedConfig.timeoutMs, 12000), 3000, 30000)
  });
  function safeWebUrl(value) {
    if (!value) return false;
    try {
      const url = new URL(value, window.location.href);
      return url.protocol === 'https:' || (url.protocol === 'http:' && ['localhost', '127.0.0.1'].includes(url.hostname));
    } catch { return false; }
  }
  const liveMode = safeWebUrl(config.leadEndpoint) && safeWebUrl(config.privacyPolicyUrl);

  /**
   * Annual illustration, not a yield assessment or an hourly battery simulation.
   * Inputs are pence, GBP, kWp and kWh/kWp/year as indicated.
   * Conserves generated energy: direct + battery-in + export = generation.
   * Delivered energy is capped at household demand, with storage losses deducted.
   */
  function calculateSolar({ bill = 120, size = 4.5, battery = true,
    importPence = 25, exportPence = 12, yieldPerKWp = 900 } = {}) {
    bill = clamp(finite(bill, 120), 1, 2000);
    size = clamp(finite(size, 4.5), 0, 20);
    importPence = clamp(finite(importPence, 25), 1, 100);
    exportPence = clamp(finite(exportPence, 12), 0, 100);
    yieldPerKWp = clamp(finite(yieldPerKWp, 900), 500, 1300);
    const importRate = importPence / 100;
    const exportRate = exportPence / 100;
    const generation = size * yieldPerKWp;
    const annualDemand = bill * 12 / importRate;
    const directUse = Math.min(generation * 0.35, annualDemand);
    const batteryInput = battery
      ? Math.max(0, Math.min(generation * 0.40, (annualDemand - directUse) / 0.90, 7.5 * 300))
      : 0;
    const batteryDelivered = batteryInput * 0.90;
    const batteryLoss = batteryInput - batteryDelivered;
    const selfUsed = directUse + batteryDelivered;
    const exported = Math.max(0, generation - directUse - batteryInput);
    const billSaving = selfUsed * importRate;
    const exportIncome = exported * exportRate;
    const benefit = billSaving + exportIncome;
    const solarShare = annualDemand > 0 ? clamp(selfUsed / annualDemand, 0, 1) : 0;
    return { bill, size, battery: Boolean(battery), importPence, exportPence, yieldPerKWp,
      generation, annualDemand, directUse, batteryInput, batteryDelivered, batteryLoss,
      selfUsed, exported, billSaving, exportIncome, benefit, solarShare,
      batteryCapacityKWh: battery ? 7.5 : 0,
      assumptions: { directUseFraction: 0.35, batteryInputFraction: 0.40,
        roundTripEfficiency: 0.90, maxAnnualBatteryCycles: 300,
        seasonalSimulation: false, costsDeducted: false, exportLimitAssumed: false }
    };
  }
  window.Sunward = Object.freeze({ calculateSolar });

  // Navigation and native-dialog housekeeping.
  const header = $('.header');
  const menuButton = $('.menu-toggle');
  const mobileNav = $('#mobile-nav');
  function closeMenu() {
    mobileNav.hidden = true;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    menuButton.innerHTML = icon('menu');
  }
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    mobileNav.hidden = !open;
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    menuButton.innerHTML = icon(open ? 'close' : 'menu');
  });
  $$('#mobile-nav a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !mobileNav.hidden) { closeMenu(); menuButton.focus(); }
  });
  const mobileCta = $('.mobile-cta');
  let scrollScheduled = false;
  function reflectScroll() {
    header.classList.toggle('scrolled', window.scrollY > 12);
    const anyModal = Boolean($('dialog[open]'));
    mobileCta.classList.toggle('visible', window.scrollY > 480 && !anyModal);
    scrollScheduled = false;
  }
  window.addEventListener('scroll', () => {
    if (!scrollScheduled) { scrollScheduled = true; requestAnimationFrame(reflectScroll); }
  }, { passive: true });
  window.addEventListener('resize', () => { if (window.innerWidth > 767) closeMenu(); }, { passive: true });
  function reflectModals() {
    document.body.classList.toggle('modal-open', Boolean($('dialog[open]')));
    reflectScroll();
  }
  $$('dialog').forEach((dialog) => {
    $('.dialog-close', dialog).addEventListener('click', () => dialog.close());
    dialog.addEventListener('close', reflectModals);
    dialog.addEventListener('click', (event) => {
      if (event.target !== dialog) return;
      const r = dialog.getBoundingClientRect();
      if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close();
    });
  });
  $('#year').textContent = new Date().getFullYear();
  reflectScroll();

  // Day/night architectural illustration: never presented as live energy data.
  $$('[data-time]').forEach((button) => button.addEventListener('click', () => {
    const night = button.dataset.time === 'night';
    $('#hero-visual').classList.toggle('night', night);
    $('#energy-mode').textContent = night ? 'A LITTLE SUNSHINE, SAVED' : 'DAYTIME, DONE BETTER';
    $('#energy-message').textContent = night ? 'Sun down. Good energy still on.' : 'Hello sunshine. Hello energy.';
    $('.energy-pill-icon').innerHTML = icon(night ? 'battery' : 'sun');
    $('.sun-decoration').innerHTML = icon(night ? 'moon' : 'sun');
    $$('[data-time]').forEach((item) => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
  }));

  // Calculator: all inputs remain in this page's memory, not localStorage/cookies.
  function calculatorInputs() {
    return {
      bill: finite($('#monthly-bill').value, 120),
      size: finite($('input[name="system-size"]:checked').value, 4.5),
      battery: $('#battery-toggle').checked,
      importPence: finite($('#import-rate').value, 25),
      exportPence: finite($('#export-rate').value, 12),
      yieldPerKWp: finite($('#solar-yield').value, 900)
    };
  }
  function renderCalculator() {
    const inputs = calculatorInputs();
    const result = calculateSolar(inputs);
    $('#bill-output').textContent = pounds(result.bill);
    $('#monthly-bill').setAttribute('aria-valuetext', `${pounds(result.bill)} per month, excluding standing charge`);
    const fill = (inputs.bill - 40) / 260 * 100;
    $('#monthly-bill').style.background = `linear-gradient(to right,var(--lime) ${fill}%,#52654f ${fill}%)`;
    $('#annual-benefit').textContent = pounds(result.benefit);
    $('#bill-saving').textContent = pounds(result.billSaving, 2);
    $('#export-income').textContent = pounds(result.exportIncome, 2);
    const percentage = Math.round(result.solarShare * 100);
    $('#solar-share').textContent = `${percentage}%`;
    $('#grid-share').textContent = `${100 - percentage}%`;
    $('#solar-share-bar').style.width = `${percentage}%`;
    return result;
  }
  $$('#monthly-bill, #battery-toggle, input[name="system-size"], #import-rate, #export-rate, #solar-yield')
    .forEach((input) => input.addEventListener('input', renderCalculator));
  [ ['#import-rate', 25], ['#export-rate', 12], ['#solar-yield', 900] ].forEach(([selector, fallback]) => {
    $(selector).addEventListener('blur', () => {
      const input = $(selector);
      input.value = clamp(finite(input.value, fallback), Number(input.min), Number(input.max));
      renderCalculator();
    });
  });
  renderCalculator();

  // Three-stage enquiry. Demo remains honest; live mode is a deliberate configuration.
  const quoteDialog = $('#quote-dialog');
  const quoteForm = $('#quote-form');
  const quoteTitles = ["What's on your horizon?", "A little about your home.", "Let's put a name to your plan."];
  const quoteSubtitles = ['Let\'s start with what you\'re exploring.', 'The right system starts with the right questions.', 'Your contact details complete the enquiry.'];
  const interestLabels = { both: 'Solar + battery', solar: 'Solar panels', battery: 'Battery storage' };
  let currentStep = 1;
  let includeIllustration = false;
  let lastEnquiry = null;
  let sending = false;
  let submittedSuccessfully = false;

  function showError(id, message) {
    const input = $(`#${id}`);
    const error = $(`#${id}-error`);
    input.setAttribute('aria-invalid', 'true');
    error.textContent = message;
    error.hidden = false;
    return false;
  }
  function clearError(id) {
    const input = $(`#${id}`);
    const error = $(`#${id}-error`);
    if (input) input.removeAttribute('aria-invalid');
    if (error) { error.hidden = true; error.textContent = ''; }
  }
  $$('input, select', quoteForm).forEach((input) => {
    input.addEventListener('input', () => { clearError(input.id); $('#form-error').hidden = true; });
  });
  function validateStep(step) {
    let valid = true;
    if (step === 1) {
      const compact = $('#postcode').value.trim().toUpperCase().replace(/\s+/g, '');
      const pattern = /^(GIR0AA|[A-Z]{1,2}[0-9][A-Z0-9]?[0-9][A-Z]{2})$/;
      if (!pattern.test(compact)) valid = showError('postcode', 'Enter a full UK postcode, for example GU1 1AA.');
      else { $('#postcode').value = `${compact.slice(0, -3)} ${compact.slice(-3)}`; clearError('postcode'); }
    }
    if (step === 2) {
      if (!$('#ownership').value) valid = showError('ownership', 'Choose your relationship to the property.');
      if (!$('#roof-type').value) valid = showError('roof-type', 'Choose your property type.');
      const bill = Number($('#enquiry-bill').value);
      if (!Number.isFinite(bill) || bill < 1 || bill > 2000) valid = showError('enquiry-bill', 'Enter a monthly spend between \u00a31 and \u00a32,000.');
    }
    if (step === 3) {
      if ($('#full-name').value.trim().length < 2) valid = showError('full-name', 'Enter your name.');
      const email = $('#email');
      if (!email.value.trim() || !email.checkValidity()) valid = showError('email', 'Enter a valid email address.');
      const phone = $('#phone').value.trim();
      if (phone && (!/^[+()\d\s.-]+$/.test(phone) || phone.replace(/\D/g, '').length < 10 || phone.replace(/\D/g, '').length > 15)) {
        valid = showError('phone', 'Enter a valid phone number, or leave it blank.');
      }
      if (!$('#enquiry-consent').checked) valid = showError('enquiry-consent', 'Tick the box to continue.');
    }
    if (!valid) {
      const first = $(`[data-step="${step}"] [aria-invalid="true"]`);
      if (first) first.focus();
    }
    return valid;
  }
  function setStep(step, focus = true) {
    currentStep = clamp(step, 1, 3);
    $$('.quote-step').forEach((element) => { element.hidden = Number(element.dataset.step) !== currentStep; });
    $('#quote-title').textContent = quoteTitles[currentStep - 1];
    $('#quote-subtitle').textContent = quoteSubtitles[currentStep - 1];
    $('#step-counter').textContent = `STEP ${currentStep} OF 3`;
    $('#quote-progress').setAttribute('aria-label', `Step ${currentStep} of 3`);
    $$('#quote-progress span').forEach((element, i) => element.classList.toggle('active', i < currentStep));
    $('#previous-step').hidden = currentStep === 1;
    $('#next-step').innerHTML = (currentStep === 3 ? (liveMode ? 'Request my solar plan' : 'Preview my enquiry') : 'Next step') + ' ' + icon('arrow');
    $('#form-error').hidden = true;
    quoteDialog.scrollTop = 0;
    if (focus) {
      $('#quote-title').setAttribute('tabindex', '-1');
      $('#quote-title').focus({ preventScroll: true });
    }
  }
  function resetQuote() {
    quoteForm.reset();
    quoteForm.hidden = false;
    $('#quote-complete').hidden = true;
    $('#quote-progress').hidden = false;
    $('#step-counter').hidden = false;
    $('#quote-subtitle').hidden = false;
    $('#preview-note').hidden = liveMode;
    $$('.field-error', quoteForm).forEach((el) => { el.hidden = true; el.textContent = ''; });
    $$('[aria-invalid]', quoteForm).forEach((el) => el.removeAttribute('aria-invalid'));
    $('#tenant-note').hidden = true;
    $('#enquiry-bill').value = $('#monthly-bill').value;
    $('#next-step').disabled = false;
    $('#previous-step').disabled = false;
    submittedSuccessfully = false;
    lastEnquiry = null;
    setStep(1, false);
  }
  function openQuote(trigger) {
    if (sending) return;
    closeMenu();
    resetQuote();
    includeIllustration = trigger.hasAttribute('data-calculator');
    const interest = trigger.dataset.interest || (includeIllustration ? ($('#battery-toggle').checked ? 'both' : 'solar') : 'both');
    const choice = $(`input[name="interest"][value="${interest}"]`);
    if (choice) choice.checked = true;
    quoteDialog.showModal();
    reflectModals();
    setStep(1);
  }
  $$('[data-quote]').forEach((button) => button.addEventListener('click', () => openQuote(button)));
  $('#previous-step').addEventListener('click', () => { if (!sending) setStep(currentStep - 1); });
  $('#ownership').addEventListener('change', () => { $('#tenant-note').hidden = $('#ownership').value !== 'tenant'; });
  if (liveMode) {
    $('#consent-text').textContent = 'Please contact me about this solar enquiry. I have read the privacy notice.';
    $('#preview-note').hidden = true;
    $('#tenant-note').textContent = "Changes to a rented property will need the owner's permission. This enquiry does not establish approval or suitability.";
  }

  function collectEnquiry() {
    const data = new FormData(quoteForm);
    const interest = String(data.get('interest'));
    const electricitySpend = Number(data.get('monthlyElectricitySpend'));
    const tracking = {};
    const query = new URLSearchParams(window.location.search);
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach((key) => {
      const value = query.get(key); if (value) tracking[key] = value.slice(0, 180);
    });
    const illustration = includeIllustration && interest !== 'battery'
      ? calculateSolar({ ...calculatorInputs(), bill: electricitySpend, battery: interest === 'both' }) : null;
    return {
      interest, postcode: String(data.get('postcode')).trim(), ownership: String(data.get('ownership')),
      propertyType: String(data.get('propertyType')), monthlyElectricitySpend: electricitySpend,
      fullName: String(data.get('fullName')).trim(), email: String(data.get('email')).trim(),
      phone: String(data.get('phone')).trim(), consent: true,
      consentText: $('#consent-text').textContent, consentAt: new Date().toISOString(),
      privacyPolicyUrl: liveMode ? config.privacyPolicyUrl : null,
      source: 'sunward-website', sourceLocation: (query.get('location') || '').slice(0, 140), website: String(data.get('website') || ''), demo: !liveMode, tracking, illustration
    };
  }
  function addSummaryRow(term, value) {
    const dt = document.createElement('dt'); dt.textContent = term;
    const dd = document.createElement('dd'); dd.textContent = value;
    $('#enquiry-summary').append(dt, dd);
  }
  function renderCompletion(enquiry, reference = '') {
    quoteForm.hidden = true;
    $('#quote-complete').hidden = false;
    $('#quote-progress').hidden = true;
    $('#step-counter').hidden = true;
    $('#quote-subtitle').hidden = true;
    $('#quote-title').textContent = liveMode ? 'Your enquiry is on its way.' : 'A brighter starting point.';
    $('#complete-copy').textContent = liveMode
      ? 'Your enquiry has been received. The team has your details for a follow-up about your home.'
      : 'Your example enquiry is ready. Nothing has been sent to a company.';
    $('#enquiry-summary').replaceChildren();
    addSummaryRow('Exploring', interestLabels[enquiry.interest]);
    addSummaryRow('Property', enquiry.propertyType);
    addSummaryRow('Postcode', enquiry.postcode);
    addSummaryRow('Electricity spend', `${pounds(enquiry.monthlyElectricitySpend)} / month`);
    addSummaryRow('Name', enquiry.fullName);
    addSummaryRow('Email', enquiry.email);
    if (reference) addSummaryRow('Reference', String(reference).slice(0, 100));
    if (enquiry.illustration) {
      addSummaryRow('System illustration', `${enquiry.illustration.size} kWp${enquiry.illustration.battery ? ' + 7.5 kWh battery' : ''}`);
      addSummaryRow('Illustrative annual benefit', pounds(enquiry.illustration.benefit, 2));
    }
    $('#quote-title').setAttribute('tabindex', '-1');
    $('#quote-title').focus({ preventScroll: true });
    quoteDialog.scrollTop = 0;
  }
  quoteForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (sending || submittedSuccessfully) return;
    if (!validateStep(currentStep)) return;
    if (currentStep < 3) { setStep(currentStep + 1); return; }
    if ($('#company-website').value) { // Simple honeypot; server must also validate and rate-limit.
      $('#form-error').textContent = 'Unable to process this request. Please refresh and try again.';
      $('#form-error').hidden = false;
      return;
    }
    // Revalidate hidden steps as defence in depth, without relying on hidden required controls.
    for (const step of [1, 2, 3]) {
      if (!validateStep(step)) { setStep(step); return; }
    }
    lastEnquiry = collectEnquiry();
    if (!liveMode) { submittedSuccessfully = true; renderCompletion(lastEnquiry); return; }
    sending = true;
    $('#next-step').disabled = true;
    $('#previous-step').disabled = true;
    $('#next-step').textContent = 'Sending your enquiry...';
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), config.timeoutMs);
    try {
      const response = await fetch(config.leadEndpoint, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lastEnquiry), signal: controller.signal, credentials: 'omit'
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || !result || result.ok !== true) throw new Error('The server did not confirm receipt.');
      submittedSuccessfully = true;
      renderCompletion(lastEnquiry, result.reference || '');
    } catch (error) {
      $('#form-error').textContent = error.name === 'AbortError'
        ? 'The request timed out. Receipt is unconfirmed. Please try again; this may create a duplicate if the first request arrived.'
        : 'We could not confirm receipt of your enquiry. Your details are still here; please try again.';
      $('#form-error').hidden = false;
    } finally {
      clearTimeout(timeout);
      sending = false;
      $('#next-step').disabled = false;
      $('#previous-step').disabled = false;
      $('#next-step').innerHTML = 'Request my solar plan ' + icon('arrow');
    }
  });
  $('#download-summary').addEventListener('click', () => {
    if (!lastEnquiry) return;
    const e = lastEnquiry;
    const lines = [ 'SUNWARD | YOUR SOLAR ENQUIRY SUMMARY', '',
      liveMode ? 'Enquiry submitted to the configured endpoint.' : 'DEMONSTRATION ONLY. No enquiry has been sent.', '',
      `Name: ${e.fullName}`, `Email: ${e.email}`, `Phone: ${e.phone || 'Not provided'}`,
      `Postcode: ${e.postcode}`, `Property: ${e.propertyType}`, `Ownership: ${e.ownership}`,
      `Interested in: ${interestLabels[e.interest]}`,
      `Monthly electricity spend: ${pounds(e.monthlyElectricitySpend)} (excluding standing charge)`
    ];
    if (e.illustration) {
      const c = e.illustration;
      lines.push('', 'EXPLORATORY ANNUAL ILLUSTRATION (NOT A RECOMMENDED DESIGN)',
        `Solar size: ${c.size} kWp`, `Battery: ${c.batteryCapacityKWh} kWh`,
        `Annual generation: ${Math.round(c.generation)} kWh`,
        `Illustrative bill reduction: ${pounds(c.billSaving, 2)}`,
        `Illustrative export payments: ${pounds(c.exportIncome, 2)}`,
        `Illustrative annual benefit: ${pounds(c.benefit, 2)} (before all system costs)`,
        `Import: ${c.importPence}p/kWh. Export: ${c.exportPence}p/kWh. Yield: ${c.yieldPerKWp} kWh/kWp/year.`,
        '35% direct use; up to 40% additional battery input, 90% round-trip efficiency,',
        'capped by demand and 300 annual battery cycles. No seasonal/hourly simulation.',
        'No export limit assumed. No standing charge savings. No installation, maintenance,',
        'finance or replacement costs deducted. Not a guarantee, quotation or financial advice.');
    }
    lines.push('', 'A tailored design needs a roof survey, location, shading and usage data.',
      'The illustration does not establish roof suitability or network/export approval.',
      'Independent guidance: https://energysavingtrust.org.uk/advice/solar-panels/', '',
      'Sunward is a fictional demonstration brand.');
    const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a'); link.href = url; link.download = 'sunward-my-solar-enquiry.txt';
    document.body.append(link); link.click(); link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
  $('.complete-return').addEventListener('click', () => quoteDialog.close());

  // Informational dialogs: no dead footer links or fictional legal promises.
  const infoDialog = $('#info-dialog');
  const privacyContent = `
    <h3>In this demonstration</h3>
    <p>No personal data is transmitted by this preview. Form entries stay in the current page's memory and are cleared when the page is refreshed or a new enquiry is started. There are no analytics, advertising tags, tracking cookies or localStorage entries.</p>
    <p>Use sample details when testing. Downloading an enquiry summary saves those details in a text file on your device. This is not a request for installation services.</p>
    <h3>External links</h3>
    <p>The independent guidance links open Energy Saving Trust in a new tab. Their own privacy terms then apply. The website otherwise uses locally included assets.</p>
    <h3>Before accepting real enquiries</h3>
    <p>The real business operator must supply its identity, contact information, lawful basis, retention schedule, recipients/processors and data-rights information. A privacy notice and secure lead endpoint must be configured before sending is enabled.</p>`;
  const aboutContent = `
    <p>Sunward is a fictional solar and battery company created to demonstrate a complete homeowner-focused website. It is not a registered installer, and this preview offers no live installation services.</p>
    <p>The architectural home, products and energy system are original illustrations. They do not depict an installed project, a manufacturer product or live monitoring data. No customer reviews, accreditations, installation totals or warranties are implied.</p>
    <h3>About the estimator</h3>
    <p>The model explores annual bill reductions and export payments using editable assumptions. It does not provide a quote, recommendation, investment return or guarantee. Purchase and running costs are not deducted. Read the assumptions next to the calculator.</p>
    <h3>Independent information</h3>
    <p>For general solar guidance, visit <a href="https://energysavingtrust.org.uk/advice/solar-panels/" target="_blank" rel="noopener noreferrer">Energy Saving Trust</a>. This website is not affiliated with or endorsed by Energy Saving Trust.</p>`;
  $$('[data-info]').forEach((button) => button.addEventListener('click', () => {
    const privacy = button.dataset.info === 'privacy';
    if (privacy && liveMode) {
      window.open(config.privacyPolicyUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    $('#info-title').textContent = privacy ? 'Your information. Your choice.' : 'About this website.';
    $('#info-content').innerHTML = privacy ? privacyContent : aboutContent;
    infoDialog.showModal();
    reflectModals();
  }));

  // Subtle progressive enhancement without hiding content when JS is unavailable.
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target); }
    }), { threshold: 0.08 });
    $$('.reveal').forEach((element) => observer.observe(element));
  }
})();
