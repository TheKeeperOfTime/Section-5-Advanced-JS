/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture: Function Constructor

/*
const Person = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
};

Person.prototype.calculateAge = function() {
    console.log(2017 - this.yearOfBirth);
};

const spencer = new Person('Spencer', 1999, 'Programmer');
const sydney = new Person('Sydney', 1996, 'Programmer');

spencer.calculateAge();
sydney.calculateAge();
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture: Object.create

/*
const personProto = {
    calculateAge: function () {
        console.log(2017 - this.yearOfBirth);
    }
};

const spencer = Object.create(personProto);
spencer.name = 'Spencer';
spencer.yearOfBirth = 1999;
spencer.job = 'Programmer';

const sydney = Object.create(personProto, {
    name: { value: 'Sydney' },
    yearOfBirth: { value: 1996 },
    job: { value: 'Programmer' }
});
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture: Passing Functions as Arguments

/*
const years = [1999, 1996, 1969, 1842, 1930, 1734, 2004];
function arrayCalc(arr, fn) {
    const arrRes = [];
    for(let i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2017 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if(el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }

}

const ages = arrayCalc(years, calculateAge);
const fullAges = arrayCalc(ages, isFullAge);
const heartRate = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(heartRate);
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture: Functions Returning Functions

/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
            } else if (job === 'teacher') {
        return function(name) {
            console.log(name + ', what subject do you teach?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

const teacherQuestion = interviewQuestion('teacher');
const designerQuestion = interviewQuestion('designer');
const noJobQuestion = interviewQuestion(name);

teacherQuestion('Spencer');
designerQuestion('Sydney');
noJobQuestion('Ethan');

interviewQuestion('teacher')('Jon');
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture: IIFe

/*
function game() {
    const score = Math.random() * 10;
    console.log(score >= 5);
}

game();

(function (goodLuck) {
    const score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);
*/

// Lecture: Closures

/*
function retirement(retirementAge) {
    const a = ' years left until retirement!';
    return function(yearOfBirth) {
        const age = 2017 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

const retirementUs = retirement(66);
retirementUs(1999);

retirement(66)(1999);
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture: Bind, Call, and Apply

/*
const spencer = {
    name: 'Spencer',
    age: 18,
    job: 'student',
    presentation: function(style, timeOfDay){
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and Gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job +  ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '!');
        }
    }
};

const sydney = {
    name: 'Sydney',
    age: 21,
    job: 'designer'
}

spencer.presentation('friendly', 'afternoon');

spencer.presentation.call(sydney, 'formal', 'morning');

spencer.presentation.apply(sydney, ['friendly', 'afternoon']);

const spencerFriendly = spencer.presentation.bind(spencer, 'friendly');
spencerFriendly('morning');

const years = [1999, 1996, 1969, 1842, 1930, 1734, 2004];
function arrayCalc(arr, fn) {
    const arrRes = [];
    for(let i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2017 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

const ages = arrayCalc(years, calculateAge);
const fullJapan = arrayClac(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge

// Constructor
function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.displayQuestion =  function() {
    console.log(this.question);

    for (let i = 0; i < this.answers.length; i++) {
        console.log(i + ': ' +  this.answers[i]);
    }
};

Question.prototype.checkAnswer = function(ans) {
    if (ans === this.correct) {
        console.log('Correct Answer!');
    } else {
        console.log('Wrong answer! Try Again!');
    }
};

const question1 = new Question('Is Javascript the coolest programming language in the world?', ['Yes', 'No'], 0);

const question2 = new Question('What is my name?', ['Sydney', 'John', 'Guy', 'Spencer'], 3);

const question3 = new Question('How would you decribe coding?', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);

const allQuestions = [question1, question2, question3];

const n = Math.floor(Math.random() * allQuestions.length);

allQuestions[n].displayQuestion();

const answer = parseInt(prompt('Please select the correct answer.'));

allQuestions[n].checkAnswer(answer);
















