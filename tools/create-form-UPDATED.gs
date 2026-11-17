/**
 * Decorly research survey (updated). Run once in Google Apps Script.
 * IMPORTANT: Creates a NEW Google Form and a NEW response spreadsheet.
 * To keep existing responses, manually add these questions to your EXISTING form instead.
 * Once created, replace the old form URL in index.html with the PUBLIC FORM LINK logged below.
 */
function createDecorlyResearchFormUpdated() {
  const form = FormApp.create('Decorly | Event Decorator Research & Future Testing Interest');
  form.setDescription('Decorly is a proposed workspace for Indian event decorators and organizers. We are researching current challenges and potential features: client management, visual design and optional AI previews, inventory, sourcing, budgets, quotations, approvals, teams, payments and event coordination. These are NOT live features. This survey takes about 5 minutes. Please do not share confidential client information.');
  form.setConfirmationMessage('Thank you for helping shape Decorly. If you consented to follow-up and shared contact details, we may contact you about research or future testing. Decorly is not yet available.');
  form.setCollectEmail(false);
  form.setLimitOneResponsePerUser(false);
  form.setAllowResponseEdits(false);
  form.setProgressBar(true);
  const sec=(title,desc)=>form.addSectionHeaderItem().setTitle(title).setHelpText(desc||'');
  const text=(title,required=false)=>form.addTextItem().setTitle(title).setRequired(required);
  const para=(title,required=false)=>form.addParagraphTextItem().setTitle(title).setRequired(required);
  const single=(title,values,required=false)=>form.addMultipleChoiceItem().setTitle(title).setChoiceValues(values).setRequired(required);
  const multi=(title,values,required=false)=>form.addCheckboxItem().setTitle(title).setChoiceValues(values).setRequired(required);
  sec('A. About you and your business','Contact details are used for follow-up only if you opt in at the end.');
  text('1. Your name',true);
  text('2. Business / company name');
  text('3. City and state in India',true);
  text('4. WhatsApp number (include +91 or your country code; optional)');
  text('5. Email address (optional)');
  single('6. What best describes your work?',['Wedding decorator','Event decorator / decoration company','Event organizer / planner','Tent house / rental business','Freelance decorator','Other'],true);
  single('7. Approximately how many events do you handle monthly?',['0','1–5','6–15','16–30','More than 30','Varies'],false);
  sec('B. Your current process','Tell us what you actually do today, even if you do not use software.');
  multi('8. Which tools do you use today? (Select all that apply)',['WhatsApp','Excel / Google Sheets','Notebook / paper','Email','Dedicated business software','Other'],true);
  multi('9. Where do you showcase work or find clients?',['Instagram / Facebook','WhatsApp','Own website','Wedding / vendor listing platforms','Referrals / word of mouth','Other'],false);
  multi('10. Which activities are most difficult or time-consuming?',['Client enquiries and requirements','Managing inspiration photos and design changes','Previewing designs before setup','Tracking owned / rented materials','Finding suppliers / rentals','Preparing budgets and quotations','Client approvals','Scheduling staff / vendors / deliveries','Coordinating multiple event functions','Expenses / advances / pending payments','No major difficulties','Other'],true);
  para('11. Describe one recent challenge in an event (no confidential details).');
  sec('C. Decorly concept feedback','These are ideas being considered, not existing product functionality.');
  multi('12. Which planned features would be useful? (Choose your top priorities)',['Client and project management','Optional AI decoration concepts and visual previews','Adapt inspiration photos using available inventory','Three design options for different budgets','Inventory and rental tracking','Material sourcing / vendor management','Quotations and client approvals','Team schedules and event coordination','Expenses, advances and payments','Business overview / upcoming events','None of these','Other'],true);
  single('13. Would previewing a decoration setup BEFORE installation help your business?',['Very useful','Somewhat useful','Not useful','Unsure'],false);
  single('14. Would you want design suggestions based on materials you already own or can rent?',['Yes','Maybe','No','Unsure'],false);
  single('15. Would three design-and-budget options help you discuss choices with clients?',['Yes','Maybe','No','Unsure'],false);
  para('16. What is the ONE feature you would want us to build first?');
  para('17. What else should Decorly help you manage or coordinate?');
  sec('D. Workspace branding and preferences','These are proposed options. No customization service or branded application is available yet.');
  single('Would a workspace displaying Decorly alongside your business logo be useful?',['Yes','Maybe','No','Unsure'],false);
  multi('What would you want to personalize? (Select any)',['Business logo and branding','Event categories and project templates','Quotation and proposal formats','Team roles and permissions','Inventory categories','Dashboard and reports','Other','No customization needed'],false);
  single('Would you prefer core management tools without AI, with the option to add AI later?',['Yes','No','Not sure'],false);
  para('If Decorly could adapt to your business, what would you want changed or added?');

  single('18. Would you be interested in testing an early Decorly prototype when one is available?',['Yes','Maybe','No'],true);
  para('19. Do you have a question or message for the Decorly team?');
  sec('E. Contact permission','Your answers may be reviewed in aggregate for product research. Contact details will not be published. No marketing messages without your permission.');
  single('20. May we contact you using the details you provided about your feedback or possible future testing?',['Yes, I agree to be contacted','No, please do not contact me'],true);
  const sheet=SpreadsheetApp.create('Decorly | Research Survey Responses - Updated');
  form.setDestination(FormApp.DestinationType.SPREADSHEET,sheet.getId());
  const info=sheet.getSheets()[0];info.setName('Read Me');
  info.getRange('A1:B5').setValues([
    ['Decorly research','Keep survey responses private'],
    ['Public form link',form.getPublishedUrl()],
    ['Edit form link',form.getEditUrl()],
    ['Responses spreadsheet',sheet.getUrl()],
    ['Privacy','Contact only people who opted in AND provided contact details. Do not publish responses or private contact information.']
  ]);
  info.getRange('A1:B1').setFontWeight('bold');info.setColumnWidth(1,180);info.setColumnWidth(2,600);
  Logger.log('PUBLIC FORM LINK: '+form.getPublishedUrl());
  Logger.log('EDIT FORM LINK: '+form.getEditUrl());
  Logger.log('RESPONSES SHEET: '+sheet.getUrl());
  return form.getPublishedUrl();
}
