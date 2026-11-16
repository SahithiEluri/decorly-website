/**
 * Decorly India — decorator research and pilot interest survey.
 * Run createDecorlyIndiaSurvey once from https://script.google.com.
 * Each run creates a NEW form and spreadsheet.
 */
function createDecorlyIndiaSurvey() {
  const form = FormApp.create('Decorly India | Event Decorator Research Survey');
  form.setDescription(
    'We are exploring Decorly, a workspace for wedding and event decoration businesses in India. ' +
    'We want to learn how you work today, what is difficult, and what would be useful. ' +
    'Potential features include client and event management, optional AI-assisted decor concepts, inventory, quotations, and event coordination. ' +
    'Decorly is in development; these features are not yet available. This research survey takes about 3–5 minutes. ' +
    'There is no payment or commitment. Please do not include confidential client or business information.'
  );
  form.setConfirmationMessage('Thank you for helping shape Decorly! If you opted in to follow-up, we may contact you about research or a future pilot.');
  form.setCollectEmail(false);
  form.setLimitOneResponsePerUser(false);
  form.setAllowResponseEdits(false);
  form.setProgressBar(true);

  function mc(title, choices, required) {
    form.addMultipleChoiceItem().setTitle(title).setChoiceValues(choices).setRequired(!!required);
  }
  function check(title, choices, required) {
    form.addCheckboxItem().setTitle(title).setChoiceValues(choices).setRequired(!!required);
  }
  function para(title, required) {
    form.addParagraphTextItem().setTitle(title).setRequired(!!required);
  }
  function short(title, required) {
    form.addTextItem().setTitle(title).setRequired(!!required);
  }
  function section(title, help) {
    form.addSectionHeaderItem().setTitle(title).setHelpText(help || '');
  }

  section('A. About your business', 'Tell us a little about the type of work you do.');
  mc('1. What best describes your business?', [
    'Wedding decorator', 'Event decoration company', 'Tent house / rental business',
    'Event planner', 'Freelance decorator', 'Other'
  ], true);
  short('2. Which city or region in India do you primarily serve?', true);
  mc('3. Approximately how many events do you handle in a typical month?', [
    '0', '1–5', '6–15', '16–30', 'More than 30', 'Varies a lot'
  ], false);

  section('B. How you work today', 'We are interested in your existing process, even if you do not use any software.');
  check('4. What tools do you currently use to manage client and event work? (Select all that apply)', [
    'WhatsApp', 'Excel / Google Sheets', 'Notebook / paper', 'Email',
    'Dedicated event / business software', 'Other'
  ], true);
  check('5. Where do you currently showcase your work and find clients? (Select all that apply)', [
    'Instagram / Facebook', 'WhatsApp', 'Own website', 'Wedding / vendor listing platforms',
    'Referrals / word of mouth', 'Other'
  ], false);
  check('6. Which parts of your work are most difficult or time-consuming? (Select all that apply)', [
    'Collecting client requirements', 'Managing inspiration photos and design changes',
    'Preparing estimates and quotations', 'Tracking owned / rented materials',
    'Coordinating multiple events', 'Managing staff and vendors',
    'Tracking payments and expenses', 'Getting new enquiries',
    'No major difficulties', 'Other'
  ], true);
  para('7. What is one recent challenge you faced while organizing a decoration event? (Please do not share client names or confidential details.)', false);

  section('C. Your feedback on Decorly', 'These are ideas we are considering, not features that are already launched.');
  check('8. Which planned Decorly features would be most useful? (Select up to 3)', [
    'Client and project management', 'Optional AI-assisted decoration concepts',
    'Inventory and rental material tracking', 'Budgeting and quotations',
    'Event scheduling and team tasks', 'Client proposals, approvals and change tracking',
    'Expense and payment tracking', 'None of these', 'Other'
  ], true);
  mc('9. Would AI-generated decoration concepts be useful for your business?', [
    'Yes', 'Maybe — depends on quality and cost',
    'No — I prefer creating my own designs', 'Not familiar enough to say'
  ], false);
  para('10. If you could improve one thing about your current workflow or website, what would it be?', false);
  mc('11. Would you be interested in reviewing an early prototype or joining a possible free pilot?', [
    'Yes', 'Maybe', 'No — feedback only'
  ], true);

  section('D. Optional follow-up', 'Leave these blank if you do not want us to contact you.');
  short('12. Business name (optional)', false);
  short('13. Your name (optional)', false);
  short('14. Email or WhatsApp number with country code (optional)', false);
  mc('15. May the Decorly team contact you about research, product updates, or a possible pilot?', [
    'Yes, I agree to be contacted using the details I provided',
    'No, please do not contact me'
  ], true);

  const sheet = SpreadsheetApp.create('Decorly India | Survey Responses');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, sheet.getId());

  const info = sheet.getSheets()[0];
  info.setName('Instructions');
  info.getRange('A1:B5').setValues([
    ['Decorly India survey', 'Links and guidance'],
    ['Public survey link', form.getPublishedUrl()],
    ['Edit form', form.getEditUrl()],
    ['Responses spreadsheet', sheet.getUrl()],
    ['Privacy', 'Keep responses private. Only contact respondents who provided details and opted in.']
  ]);
  info.getRange('A1:B1').setFontWeight('bold');
  info.setColumnWidth(1, 200);
  info.setColumnWidth(2, 550);
  info.getRange('B2:B4').setWrap(true);

  Logger.log('PUBLIC FORM LINK: ' + form.getPublishedUrl());
  Logger.log('EDIT FORM LINK: ' + form.getEditUrl());
  Logger.log('RESPONSES SHEET: ' + sheet.getUrl());
  return form.getPublishedUrl();
}
