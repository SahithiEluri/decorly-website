# Decorly — Research Website (Updated)

**Stage:** research concept only. Decorly is not a live SaaS application. Planned features include client and event management, design/optional AI previews, inventory, sourcing, quotations, approvals, budget scenarios, payments, teams and coordination.

## View locally

Open `index.html` in your browser. Keep the `assets` directory beside it.

## Google Form: IMPORTANT

The website currently links to the **previous public Google Form** so the feedback buttons do not point to a nonexistent link.

Choose ONE approach:

**A. Recommended if you already have responses:** Open your existing Google Form in edit mode and manually add the new contact, feature, question, and testing-interest fields listed in `tools/create-form-UPDATED.gs`. This keeps all existing responses and preserves the website's current form link. Check the response sheet and form access settings.

**B. New form:** Paste `tools/create-form-UPDATED.gs` into a Google Apps Script project, select `createDecorlyResearchFormUpdated`, run it **once**, review the Google permissions, and copy the `PUBLIC FORM LINK` from the Execution log. Each run creates a *new* Form and spreadsheet; old responses do not move automatically. In `index.html`, replace every occurrence of the OLD public form URL with the NEW public form URL. Save and push the change.

Test the form in an incognito window without a Google login. In Form Settings, disable `Limit to 1 response` and organizational sign-in restrictions; don't add file uploads. Test submission and confirm it reaches the private spreadsheet.

Never commit contact details, Google Sheets responses, or secrets to GitHub.

## Update existing GitHub repository

Extract the ZIP, copy the contents (`index.html`, `styles.css`, `script.js`, `assets/`, `tools/`, `README.md`, `.gitignore`) into your **existing** local `Decorly- website` folder, replacing the older files. Do NOT copy the downloaded ZIP itself into the repository. Do NOT delete `.git`.

Run from PowerShell in the existing repository folder:

```powershell
git status
git add .
git commit -m "Explain Decorly workflow and update research survey"
git push origin main
```

Your public site is https://sahithieluri.github.io/decorly-website/ . GitHub Pages can take a few minutes to deploy. Test mobile and all feedback links.

## Notes

- The budget amounts in the scenario are hypothetical, not actual quotes.
- AI designs, inventory matches and estimates are proposed, not functional demonstrations.
- Any future outreach, business operations or monetization should be reviewed for applicable immigration/work authorization constraints.


## New: proposed co-branding and customization
The website now describes a possible co-branded Decorly + partner logo workspace and configurable workflows. These are proposals, not commitments. AI is positioned as optional; pricing is intentionally omitted.

The file `tools/create-form-UPDATED.gs` includes new personalization and AI-choice research questions. **Do not rerun the script if you want to preserve your existing form.** Instead, manually add the four new questions in the existing Google Form editor. Running it creates a new form and sheet, requiring you to update the website's form URL.

To update the existing GitHub Pages site: copy all extracted files into your existing Git project folder (keep `.git`), then run `git status`, `git add .`, `git commit -m "Add Decorly personalization vision and survey questions"`, and `git push origin main`.
