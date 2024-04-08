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

const letterToNumberMapping = {
    // Русский алфавит
    'А': 1, 'Б': 2, 'В': 3, 'Г': 4, 'Д': 5, 'Е': 6, 'Ё': 7, 'Ж': 8, 'З': 9,
    'И': 1, 'Й': 2, 'К': 3, 'Л': 4, 'М': 5, 'Н': 6, 'О': 7, 'П': 8, 'Р': 9,
    'С': 1, 'Т': 2, 'У': 3, 'Ф': 4, 'Х': 5, 'Ц': 6, 'Ч': 7, 'Ш': 8, 'Щ': 9,
    'Ъ': 1, 'Ы': 2, 'Ь': 3, 'Э': 4, 'Ю': 5, 'Я': 6,
    // Английский алфавит
    'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9,
    'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'O': 6, 'P': 7, 'Q': 8, 'R': 9,
    'S': 1, 'T': 2, 'U': 3, 'V': 4, 'W': 5, 'X': 6, 'Y': 7, 'Z': 8
};

const nameToNumbers = (name) => {
    return name.toUpperCase().split('').map(letter => letterToNumberMapping[letter] || 0);
};

const tallyNumbers = (numbers) => {
    return numbers.reduce((acc, number) => {
        acc[number] = (acc[number] || 0) + 1;
        return acc;
    }, {});
};

const flattenNumbers = (numbers) => {
    return Object.entries(numbers).reduce((acc, [number, count]) => {
        for (let i = 0; i < count; i++) {
            acc.push(number);
        }
        return acc;
    }, []);
};

export const analyzeName = (name) => {
    const numbers = nameToNumbers(name.replace(/\s+/g, '')); // Удаляем пробелы
    return flattenNumbers(tallyNumbers(numbers)).map(Number);
};


