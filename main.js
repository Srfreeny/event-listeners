const howdy = (name) => {
return `Howdy ${name}!`;
}

const yaJerk = (name) => {
    return `${name} is a jerk.`;
}

console.log(yaJerk('Stephen'));

const stringMaker =(str, func) => {
    return func(str);
};

console.log(stringMaker('Stephen', howdy));

console.log(stringMaker('Stephen', yaJerk));

const selector = document.getElementById('main-btn');

console.log(selector);

const qSelector = document.querySelector('#main-btn');

console.log(qSelector);

// div.addEventListener(click, () => {
    // console.log('mouse has entered');
// });

const button = document.getElementById('main-btn');

// const whatIsTheId = (e) => {
//     return `The element ID is ${e.target.id}`;
// }

// button.addEventListener(click, whatIsTheId);

const clickFunc = () => {
    console.log('You clicked me!');
}

button.addEventListener('click', clickFunc);