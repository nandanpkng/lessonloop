# LessonLoop

**A teacher co-planner that turns standards, class evidence, and teacher knowledge into an editable 5E lesson plan.**

Track: Education — OpenAI Build Week 2026

---

## Demo Video

- **Watch on YouTube:** https://youtu.be/3ckW4c7YY5A

---

## The Problem

Teachers spend 7 to 12 hours every week adapting generic lesson plans for their specific students. Generic AI tools generate generic prose from a single prompt, ignoring actual student rosters, standards coverage gaps, and recent assessment results. Teachers are forced to rewrite plans from scratch every week while standards gaps slip through unaddressed.

---

## The Solution

LessonLoop acts as a teacher's co-planning companion:
1. Ingests curriculum standards, student rosters, and prior exit-ticket scores.
2. Generates a structured 5E lesson plan: **Engage, Explore, Explain, Elaborate, Evaluate**.
3. Recommends named, editable differentiation strategies for specific students based on recent assessment data.
4. Produces a 5-minute exit ticket and a real-time standards coverage map.
5. Keeps the teacher in complete control—all plans are draft suggestions ready for review and editing.

```text
Teacher-provided curriculum + standards + roster + assessment evidence
  -> GPT-5.6 plans a 5E lesson with explicit supports
  -> teacher edits and approves
  -> exit-ticket results inform coverage and next week's plan
```

---

## How Codex Was Used

LessonLoop was built 100% from scratch using OpenAI Codex as the primary software engineer.

### Codex Prompts Executed in Order:
1. `"Scaffold a Node.js Express application for a teacher lesson planning assistant."`
2. `"Create a domain model for curriculum standards, student rosters, assessment scores, and 5E lesson plans."`
3. `"Implement the GPT-5.6 lesson planning engine using the 5E framework."`
4. `"Build a student differentiation algorithm that links assessment scores to named student learning supports."`
5. `"Build a standards coverage map engine tracking mastered versus slipping standards."`
6. `"Create a clean, modern web dashboard for viewing and editing lesson plans, exit tickets, and student supports."`
7. `"Write automated unit tests verifying 5E plan generation and standards gap detection."`

---

## GPT-5.6 Integration

GPT-5.6 handles the pedagogical reasoning:
- Extracts standards coverage across long curriculum documents (100+ pages).
- Correlates student assessment history with specific differentiation moves.
- Generates age-appropriate classroom activities grounded in sound pedagogy (5E model).

### Code Snippet (`src/services/plan-engine.js`):
```javascript
const plan = await openai.chat.completions.create({
  model: "gpt-5.6",
  messages: [
    { role: "system", content: LESSON_PLANNER_SYSTEM_PROMPT },
    { role: "user", content: JSON.stringify({ standard, roster, exitTicketScores, priorCoverage }) }
  ],
  response_format: { type: "json_object" }
});
```

---

## 9-Day Build Log

- **Day 1 (Jul 13):** Domain models for 5E lesson plans, standards, and student rosters (`src/services/demo-data.js`).
- **Day 2 (Jul 14):** Ingestion engine for curriculum standards and assessment scores.
- **Day 3 (Jul 15):** Built GPT-5.6 5E lesson planning generator (`src/services/plan-engine.js`).
- **Day 4 (Jul 16):** Added named student differentiation logic based on exit-ticket performance.
- **Day 5 (Jul 17):** Implemented exit-ticket generator and standards coverage map engine (`src/services/coverage.js`).
- **Day 6 (Jul 18):** Built teacher web workspace UI (`src/public/index.html`, `src/public/app.js`).
- **Day 7 (Jul 19):** Added automated unit test suite (`tests/plan.test.js`).
- **Day 8 (Jul 20):** Refined typography, accessibility, and teacher edit controls.
- **Day 9 (Jul 21):** Final validation, demo recording setup, and documentation polish.

---

## Try It / Run Locally

### Supported Platforms
macOS, Linux, Windows (Node.js 20+).

### Quick Start
```bash
cd lessonloop
pnpm start
# Open http://localhost:3002
```

### Run Tests
```bash
pnpm test
```

### Judge-Testable Path
Run `pnpm start` and open `http://localhost:3002`. Click **Generate this week’s plan** to exercise the complete planning workflow with built-in representative curriculum standards and safe fictional student evidence.

---

## Safety & Educational Design

- **Teacher-in-the-loop:** The teacher approves every plan before classroom use.
- **Student Privacy:** Fictional student data only; data is used strictly for instructional supports.
- **No High-Stakes Decisions:** Differentiation recommendations support learning and never automate grading or discipline.

---

## Prior vs. New Work

Built 100% from scratch during OpenAI Build Week 2026 (July 13–21, 2026) using OpenAI Codex and GPT-5.6. There is no pre-existing codebase or prior implementation.

---

## Connected Roadmap

1. Google Classroom API integration for roster & assignment sync.
2. Google Forms integration for automated exit-ticket grading.
3. Open Educational Resources (OER) search engine integration.
4. Multi-subject & multi-grade curriculum coverage tracking.

---

## License

[MIT](LICENSE) © 2026 LessonLoop Team
