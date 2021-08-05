const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkResults = (rightAnswers, studentAnswers) => {
    let total = 0;
    for (let index = 0; index < rightAnswers.length; index += 1) {
        if (rightAnswers[index] === studentAnswers[index]) {
            total += 1;
        } else if (rightAnswers[index] !== studentAnswers[index] && studentAnswers[index] !== 'N.A') {
            total -= 0.5;
        }
    }
    return total;
}

const answersCheck = (rightAnswers, studentAnswers, callback) => {
    return `Resultado final: ${callback(rightAnswers, studentAnswers)} corretas`;
}

console.log(answersCheck(RIGHT_ANSWERS, STUDENT_ANSWERS, checkResults));