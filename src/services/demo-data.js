export const classroom = {
  teacher: { name: 'Ms. Patel', grade: '5th grade', subject: 'Mathematics', className: 'Room 205' },
  standard: { code: '5.NBT.A.1', description: 'Recognize that in a multi-digit number, a digit in one place represents 10 times as much as it represents in the place to its right.' },
  students: [
    { name: 'Maria', level: 'Approaching', note: 'Benefits from base-ten blocks and a visual place-value chart.', score: 52 },
    { name: 'Jason', level: 'Meets', note: 'Confident with models; needs precision explaining reasoning.', score: 78 },
    { name: 'Amara', level: 'Exceeds', note: 'Ready for generalization and peer explanation.', score: 96 }
  ],
  coverage: [
    { code:'5.NBT.A.1', label:'Place value patterns', weeks:[true,true,false], status:'Focus now' },
    { code:'5.NBT.A.2', label:'Powers of 10', weeks:[false,true,false], status:'Slipping' },
    { code:'5.NBT.B.5', label:'Multi-digit multiplication', weeks:[false,false,false], status:'Upcoming' }
  ]
};
