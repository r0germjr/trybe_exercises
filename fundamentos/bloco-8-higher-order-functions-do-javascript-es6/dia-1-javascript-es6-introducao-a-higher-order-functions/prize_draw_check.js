const resultLottery = (chosenNumber, callback) => {
    const number = Math.floor((Math.random() * 5) + 1);
    return callback(chosenNumber, number) ? `Lucky day, you won!` : `Try again`;
};

const prizeDrawCheck = (chosenNumber, number) => chosenNumber === number;

console.log(resultLottery(5, prizeDrawCheck));