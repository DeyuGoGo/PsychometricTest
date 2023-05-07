import personalityTypes from '../data/personality_types.json';

function calculateResult(answers) {
  let total_score = 0;
  for (let i = 0; i < answers.length; i++) {
    total_score += answers[i] * Math.pow(4, 5 - i);
  }
  total_score = Math.floor(total_score/16)
  return findPersonalityType(personalityTypes, total_score);
}

function findPersonalityType(personality_data, total_score) {
  for (const type of personality_data) {
    if (total_score >= type.code_range[0] && total_score <= type.code_range[1]) {
      return type;
    }
  }
  return null;
}

export default calculateResult;

