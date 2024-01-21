function solution(name, yearning, photo) {
    const scores = [];

    for (const peopleInPhoto of photo) {
        let photoScore = 0;

        for (const person of peopleInPhoto) {
            const personIndex = name.indexOf(person);
            if (personIndex !== -1) {
                photoScore += yearning[personIndex];
            }
        }

        scores.push(photoScore);
    }

    return scores;
}