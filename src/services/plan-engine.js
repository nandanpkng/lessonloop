export function generatePlan(data) {
  return {
    title: 'Place value: the power of ten', grade: data.teacher.grade, standard: data.standard, generatedAt: new Date().toISOString(),
    objective: 'Students will use place-value models and equations to explain how a digit’s value changes when it moves one place left or right.',
    sections: [
      { key:'Engage', duration:'7 min', activity:'Display 4,444. Ask: “How can the same digit be worth four different amounts?” Students make a silent notice-and-wonder, then share with a partner.', teacherMove:'Collect two contrasting explanations without confirming either yet.' },
      { key:'Explore', duration:'15 min', activity:'Pairs build 444 with place-value disks, then shift each disk one place left. They record before/after values in a table.', teacherMove:'Ask: “What stayed the same? What changed by a factor of ten?”' },
      { key:'Explain', duration:'10 min', activity:'Co-construct the statement: each place to the left is ten times the value of the place to its right. Connect the disks, chart, and equation 400 = 10 × 40.', teacherMove:'Press for a complete sentence using “ten times.”' },
      { key:'Elaborate', duration:'10 min', activity:'Students solve a missing-value card sort: 7,000 is ___ times as much as 700. Create one new card for a partner.', teacherMove:'Invite students to justify with both an equation and a model.' },
      { key:'Evaluate', duration:'5 min', activity:'Exit ticket: Explain why the 6 in 6,060 is worth ten times the 6 in 606. Include a drawing or equation.', teacherMove:'Sort responses into secure / developing / revisit before tomorrow.' }
    ],
    differentiation: [
      { student:'Maria', support:'Provide pre-labeled place-value chart and base-ten blocks; let her point to the shifted disk before writing the equation.' },
      { student:'Jason', support:'Require a precise oral explanation using “ten times” before recording his equation.' },
      { student:'Amara', support:'Ask her to prove the pattern works for decimals or explain a counterexample to a common misconception.' }
    ],
    materials: ['Place-value disks or base-ten blocks', 'Place-value charts', 'Missing-value card-sort set', 'Exit ticket slips'],
    exitTicket: ['In 5,550, compare the value of the two 5s.', 'Complete: 8,000 is ___ times as much as 800.', 'Explain why the 6 in 6,060 is worth ten times the 6 in 606.'],
    modelContract: { model: process.env.OPENAI_MODEL || 'gpt-5.6', context: ['curriculum standard', 'student performance', 'student support notes', 'coverage history'], reason:'GPT-5.6 combines curriculum, assessment evidence, and learner needs into a teacher-editable 5E plan.' }
  };
}
