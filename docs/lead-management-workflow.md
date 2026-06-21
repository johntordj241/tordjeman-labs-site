# Lead Management Workflow - Strategic Qualification

## 1) Lead Status Framework

Standard statuses to use for every Netlify submission:

1. New
2. Under Review
3. Information Required
4. GO
5. NO-GO
6. Proposal Sent
7. Closed

Operational rule:
- Every new submission is created with `leadStatus=New`.
- Status transitions are managed in internal tooling (Notion/CRM/Make scenarios) without changing the website UI.

## 2) Required Submission Data Structure

The form payload now includes these key fields:

- organizationName
- organizationType
- contactName
- contactRole
- professionalEmail
- phone
- website
- location
- sector
- projectSummary
- problemStatement (alias of mainObjective)
- expectedOutcome
- budgetRange
- decisionTimeline
- qualificationCategory
- qualificationTotalScore
- submittedDate (alias of submittedAt)

Additional operational metadata:

- leadStatus (default: New)
- leadPipelineVersion (default: v1)

Data normalization rule:
- Empty text values are normalized to `not-provided` before submission.
- Boolean values are normalized to `yes` / `no`.

## 3) Internal Processing Workflow

1. Submission received
- Trigger: Netlify form submission created.
- Action: Keep lead as `New`, assign owner and SLA target.

2. Initial review
- Validate contact identity and project fit.
- Move to `Under Review`.
- If information missing, move to `Information Required` and request clarifications.

3. Strategic assessment
- Review qualification scores and project narrative.
- Assess constraints, decision timeline, and budget realism.

4. Decision
- Set final qualification decision: `GO` or `NO-GO`.
- Record rationale and decision date.

5. Response sent
- If `GO`, send proposal and move to `Proposal Sent`.
- If `NO-GO`, send structured decline with optional recommendations.

6. Archiving
- After closure or inactivity threshold, move to `Closed`.
- Keep immutable archive with submission payload + status history.

## 4) Integration Readiness Recommendations

### Netlify -> Notion
- Use Netlify form submission webhook.
- Create/update a Notion database item keyed by `submittedAt` + `professionalEmail`.
- Map `leadStatus`, score fields, and decision timeline to select properties.

### Netlify -> Make
- Scenario 1: Webhook receive -> data validation -> deduplication -> route by category.
- Scenario 2: Auto-reminder when lead stays `New` or `Under Review` beyond SLA.
- Scenario 3: Auto-create task in PM tool when category is GO or Priority.

### Netlify -> CRM
- Upsert contact by `professionalEmail`.
- Upsert company by `organizationName`.
- Create opportunity with source `Netlify Strategic Qualification`.
- Sync status mapping:
  - New -> New
  - Under Review -> Qualification
  - Information Required -> Waiting Info
  - GO -> Qualified
  - NO-GO -> Disqualified
  - Proposal Sent -> Proposal
  - Closed -> Closed

### Netlify -> Email automation
- Immediate acknowledgement email to contact.
- Internal routing email by qualification category.
- Follow-up sequence for `Information Required` leads.
- Reminder sequence for unanswered leads before `Closed`.

## 5) Risk Controls

- Add anti-duplication check in automation layer (same email + same submittedDate window).
- Add webhook retry and dead-letter handling.
- Store status changes with timestamp and actor for auditability.
- Keep PII retention policy aligned with GDPR requirements.
