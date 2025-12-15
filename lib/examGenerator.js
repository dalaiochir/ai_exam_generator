export function generateExam({ subject, difficulty, count }) {
  const questions = Array.from({ length: count }).map((_, i) => ({
    question: `${subject} Question ${i + 1} (${difficulty})`,
    options: {
      A: "Option A",
      B: "Option B",
      C: "Option C",
      D: "Option D",
    },
    correct: "B",
  }));

  return {
    versionA: questions,
    versionB: shuffle([...questions]),
  };
}

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}
