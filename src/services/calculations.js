export const numberOfFate = (dateOfBirth) => {
    if (!dateOfBirth) {
        return null;
    }
    const sum = dateOfBirth
        .split('')
        .filter(char => char >= '0' && char <= '9')
        .reduce((acc, digit) => acc + parseInt(digit, 10), 0);

    if (sum > 9) {
        return numberOfFate(sum.toString());
    }
    return sum;
};
