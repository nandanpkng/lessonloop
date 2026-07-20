# LessonLoop

**A teacher co-planner that turns standards, class evidence, and teacher knowledge into an editable 5E lesson plan.**

Track: Education - OpenAI Build Week 2026

## The problem

Teachers often spend 7-12 hours each week adapting generic curriculum for the students actually in their room. Most AI lesson-plan tools return generic prose from a one-line prompt, without seeing recent assessment evidence, standards coverage, or student-specific supports.

LessonLoop starts from teacher-provided context and drafts a 5E lesson plan: Engage, Explore, Explain, Elaborate, and Evaluate. It calls out coverage gaps, supplies a short exit ticket, and makes named, editable supports visible to the teacher. It supports teacher judgment; it does not replace it.

## Try it locally

```bash
cd planclaw
pnpm start
# Open http://localhost:3002
```

The app runs with safe fictional class data and no credentials. Click **Generate this week’s plan** to exercise the complete generation workflow.

```bash
pnpm test
```

## Product loop

```text
Teacher-provided curriculum + standards + roster + assessment evidence
  -> GPT-5.6 plans a 5E lesson with explicit supports
  -> teacher edits and approves
  -> exit-ticket results inform coverage and next week's plan
```

## GPT-5.6 integration

GPT-5.6 is used for long-context, pedagogical planning: it combines curriculum standards, historical coverage, assessment evidence, and teacher-provided learning supports into a structured 5E plan. A smaller model or a one-shot text prompt tends to create generic plans; this workflow demands alignment between a standard, formative assessment, and concrete classroom moves.

The local demo uses a deterministic plan adapter so the review path remains reliable. Its production contract is exposed in `src/services/plan-engine.js`: full curriculum text, uncovered standards, roster-level performance information, and prior assessment data are structured inputs; a teacher-editable plan is structured output.

## Safety and educational design

- Teacher is always the decision-maker. Plans are drafts and require explicit teacher approval.
- The demo contains fictional student data only.
- Student information is used only for instructional supports, never for discipline, eligibility, ranking, or other high-stakes decisions.
- Connected deployments should minimize data, use district-approved accounts, and retain data according to school policy.
- Named supports are suggestions based on teacher-provided instructional context, not diagnoses or IEP determinations.

## Connected roadmap

Production integrations are intentionally not claimed in the demo: Google Classroom for roster sync, Google Forms for exit tickets, and OER search are the next steps. CSV roster upload remains a practical fallback.

## Codex workflow

Built in the primary Codex Build Week session. Codex translated the implementation plan into the runnable planning experience, created the 5E plan contract, linked assessment evidence to named supports and a coverage map, then added local APIs, tests, privacy boundaries, and responsive product polish. Add the primary `/feedback` Session ID to this README and Devpost before submission.

## Submission materials

See [SUBMISSION_CHECKLIST.md](SUBMISSION_CHECKLIST.md) for the required Devpost materials, video script, accurate claims, and final handoff steps.

## License

MIT. See [LICENSE](LICENSE).
