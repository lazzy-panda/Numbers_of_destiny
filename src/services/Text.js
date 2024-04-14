export const pythagorPatterns = {
    '159': "the_line_of_determination",
    '357': "the_line_of_compassion",
    '369': "the_line_of_mind",
    '258': "the_line_of_emotional_balance",
    '147': "the_line_of_practicality",
    '123': "planning_line",
    '456': "the_line_of_willpower",
    '789': "activity_line",
};

export const chinesePatterns = {
    '258': "the_line_of_determination",
    '357': "the_line_of_compassion",
    '249': "the_line_of_mind",
    '456': "the_line_of_emotional_balance",
    '147': "the_line_of_practicality",
    '348': "planning_line",
    '159': "the_line_of_willpower",
    '267': "activity_line",
    '13': "the_line_of_details_and_tricks",
    '39': "the_line_of_the_trial",
    '79': "the_line_of_peace_of_mind",
    '17': "the_line_of_science"
};

export const pythagorMissingPatterns = {
    '159': "the_line_of_determination",
    '357': "the_line_of_skepticism",
    '369': "the_line_of_bad_memory",
    '258': "the_line_of_emotional_sensitivity",
    '147': "the_line_of_impracticality",
    '123': "planning_line",
    '456': "the_line_of_disappointments",
    '789': "the_line_of_doubt",
};

export const chineseMissingPatterns = {
    '258': "the_line_of_disappointments",
    '357': "the_line_of_loneliness",
    '249': "the_line_of_bad_memory",
    '456': "the_line_of_suspicion",
    '348': "the_line_of_confusion",
    '168': "the_line_of_failures",
    '159': "the_line_of_indecision",
    '267': "The_line_of_indifference",
};

export const getMainDescription = (number) => {
    switch (number) {
        case 1:
            return  'one_description';
        case 2:
            return  'two_description';
        case 3:
            return  'three_description';
        case 4:
            return  'four_description';
        case 5:
            return  'five_description';
        case 6:
            return  'six_description';
        case 7:
            return  'seven_description';
        case 8:
            return  'eight_description';
        case 9:
            return  'nine_description';
        case 11:
            return  'eleven_description';
        case 22:
            return  'twenty_two_description';
    }
}

export const getBirthdayNumber = (number) => {
    switch (number) {
        case 1:
            return  '1st_day';
        case 2:
            return  '2st_day';
        case 3:
            return  '3st_day';
        case 4:
            return  '4st_day';
        case 5:
            return  '5st_day';
        case 6:
            return  '6st_day';
        case 7:
            return  '7st_day';
        case 8:
            return  '8st_day';
        case 9:
            return  '9st_day';
        case 10:
            return  '10st_day';
        case 11:
            return  '11st_day';
        case 12:
            return  '12st_day';
        case 13:
            return  '13st_day';
        case 14:
            return  '14st_day';
        case 15:
            return  '15st_day';
        case 16:
            return  '16st_day';
        case 17:
            return  '17st_day';
        case 18:
            return  '18st_day';
        case 19:
            return  '19st_day';
        case 20:
            return  '20st_day';
        case 21:
            return  '21st_day';
        case 22:
            return  '22st_day';
        case 23:
            return  '23st_day';
        case 24:
            return  '24st_day';
        case 25:
            return  '25st_day';
        case 26:
            return  '26st_day';
        case 27:
            return  '27st_day';
        case 28:
            return  '28st_day';
        case 29:
            return  '29st_day';
        case 30:
            return  '30st_day';
        case 31:
            return  '31st_day';
    }
}

export const getSquareNumbersDescription = (array) => {
    let count = {
        '1': 0, '2': 0, '3': 0,
        '4': 0, '5': 0, '6': 0,
        '7': 0, '8': 0, '9': 0,
    };

    array.forEach(num => {
        if (count.hasOwnProperty(num)) {
            count[num] += 1;
        }
    });

    let descriptions = [];
    Object.keys(count).forEach(key => {
        if (count[key] > 0) {
            let occurrences = count[key] > 4 ? 4 : count[key];
            descriptions.push(`${occurrences}_${key}`);
        }
    });

    return descriptions; // Return an array of descriptions
};

export const missingFigures = (array) => {
    // Initialize an object with all digits set to false (indicating "missing")
    let digitsPresence = {
        '1': false, '2': false, '3': false,
        '4': false, '5': false, '6': false,
        '7': false, '8': false, '9': false,
    };

    // Mark digits found in the array as true
    array.forEach(num => {
        if (digitsPresence.hasOwnProperty(num.toString())) {
            digitsPresence[num] = true;
        }
    });

    // Collect missing digits
    let missingDescriptions = [];
    Object.keys(digitsPresence).forEach(key => {
        if (!digitsPresence[key]) {
            missingDescriptions.push(`missing_${key}`);
        }
    });

    return missingDescriptions;
};


export const getMultipleLineDescriptions = (array, patterns) => {
    // Filter out invalid numbers and remove duplicates
    const validNumbers = Array.from(new Set(array.filter(num => num >= 1 && num <= 9)));

    // Sort the numbers to ensure the sequence can match patterns
    const sortedKey = validNumbers.sort().join('');

    // Array to hold all detected lines
    let detectedLines = [];

    // Check each pattern to see if sortedKey contains all the digits for a line
    Object.entries(patterns).forEach(([pattern, line]) => {
        if (pattern.split('').every(digit => sortedKey.includes(digit))) {
            detectedLines.push(line);
        }
    });

    // Return all detected lines or indicate none were found
    return detectedLines.length > 0 ? detectedLines : ["no_specific_line_detected"];
};

export const getLinesBasedOnMissingNumbers = (array, patterns) => {
    // Filter out invalid numbers and remove duplicates
    const validNumbers = Array.from(new Set(array.filter(num => num >= 1 && num <= 9)));

    // Convert the array to a Set for efficient presence checks
    const numbersPresent = new Set(validNumbers);

    // Array to hold all detected line keys based on missing numbers
    let detectedLineKeys = [];

    // Check each pattern to see if all of the digits for a line are missing
    Object.entries(patterns).forEach(([pattern, key]) => {
        if (pattern.split('').every(digit => !numbersPresent.has(Number(digit)))) {
            detectedLineKeys.push(key);
        }
    });

    // Return all detected line keys or indicate that no specific line is detected based on absences
    return detectedLineKeys.length > 0 ? detectedLineKeys : ["no_specific_line_detected_based_on_absence"];
};

export const calculatePersonalYear = (birthDate) => {
    // Extract the current year
    const currentYear = new Date().getFullYear();

    // Deconstruct the birthDate into year, month, and day
    const [, month, day] = birthDate.split('-').map(Number);

    // Convert day, month, and current year to string and concatenate
    const dateString = `${day}${month}${currentYear}`;

    // Reduce dateString to a single digit sum
    let sum = dateString.split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);

    // Function to reduce sum to a single digit
    const reduceToSingleDigit = (num) => {
        while (num > 9) {
            num = num.toString().split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
        }
        return num;
    };

    // Return the final Personal Year Number
    return reduceToSingleDigit(sum);
};

export const getPersonalYearDescription = (personalYearNumber) => {
    const yearDescriptions = {
        1: "year_1",
        2: "year_2",
        3: "year_3",
        4: "year_4",
        5: "year_5",
        6: "year_6",
        7: "year_7",
        8: "year_8",
        9: "year_9",
    };
    return yearDescriptions[personalYearNumber] || "Unknown personal year number";
};

export const generateNineYearPeriods = (destinyNumber) => {
    const startYear = 36 - destinyNumber;
    let index = 1;
    let periods = [];

    if (startYear > 1) { // Ensuring there's a range to display
        periods.push({
            id: `period_${index}`,
            period: `1-${startYear}`,
            name: `period_1`,
            description: `description_period_1`,

        });
    }

    for (let year = startYear + 1; year <= 100; year += 9) {
        const start = year;
        const end = Math.min(year + 8, 100); // Ensure not exceeding 100
        index++;
        periods.push(
            {
                id: `period_${index}`,
                period: `${start}-${end}`,
                name: `period_${index}`,
                description: `description_period_${index}`,
            }
        );
    }
    return periods;
}

export const missingNameNumbers =  (array) => {
    const allNumbers = Array.from({length: 9}, (_, i) => i + 1);
    const presentNumbers = new Set(array);
    return  allNumbers
        .filter(number => !presentNumbers.has(number))
        .map(number => `missingNameNumber_${number}`);
};

export const normalCountNameNumbers = (array) => {
    // Считаем, сколько раз каждое число встречается в массиве
    const countMap = array.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});

    // Находим медианное значение встречаемости чисел
    const counts = Object.values(countMap);
    const medianCount = counts.length % 2 === 0 ?
        (counts[counts.length / 2 - 1] + counts[counts.length / 2]) / 2 :
        counts[Math.floor(counts.length / 2)];

    // Фильтруем числа, чья встречаемость близка к медиане
    return Object.keys(countMap)
        .filter(number => {
            const deviation = Math.abs(countMap[number] - medianCount);
            // Предположим, что разумное количество — это отклонение не более чем на 1 от медианы
            return deviation <= 1;
        })
        .map(number => `normalNameNumber_${number}`);
};

export const redundantCountNameNumbers = (array) => {
    // Считаем, сколько раз каждое число встречается в массиве
    const countMap = array.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});

    // Находим медианное значение встречаемости чисел
    const counts = Object.values(countMap).sort((a, b) => a - b);
    const medianCount = counts.length % 2 === 0 ?
        (counts[counts.length / 2 - 1] + counts[counts.length / 2]) / 2 :
        counts[Math.floor(counts.length / 2)];

    // Фильтруем числа, чья встречаемость значительно выше медианы
    return Object.keys(countMap)
        .filter(number => countMap[number] > medianCount + 1) // Предположим, что избыток — это когда встречаемость на 2 и более больше медианы
        .map(number => `redundantNumber_${number}`);
};
