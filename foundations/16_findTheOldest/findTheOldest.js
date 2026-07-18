const getAge = function(person) {
    if (person.yearOfDeath) {
        return person.yearOfDeath - person.yearOfBirth;
    } else {
        return new Date().getFullYear() - person.yearOfBirth;
    }
};

const findTheOldest = function(people) {
    let oldestPerson = people[0];

    for(let i = 1; i < people.length; i++) {
        if (getAge(people[i]) > getAge(oldestPerson)) {
            oldestPerson = people[i];
        }

    }
    return oldestPerson;



};

// Do not edit below this line
module.exports = findTheOldest;
