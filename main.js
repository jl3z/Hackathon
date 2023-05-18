console.log('executing');
// do we have access to body

// create querey selector for body
const body = document.querySelector('body');
// create a waldo image element
const waldo = document.createElement('img');
waldo.setAttribute('id', 'waldoImg');
waldo.setAttribute(
  'src',
  'https://seeklogo.com//images/W/wheres-waldo-logo-4AFB6FAE70-seeklogo.com.png'
);
let waldoHeight = 150;
waldo.setAttribute('height', `${waldoHeight}px`);
body.appendChild(waldo);

// place waldo in a random space
//use a formula to return a number between 0-n that is in increments of 50
function random(maxValue) {
  let randomNumber = Math.floor(Math.random() * maxValue);
  let output = Math.floor(randomNumber);
  return output;
}

waldo.style.position = 'absolute';
console.log(body.style.width);

// get body width and height
const bodyHeight = Math.max(body.scrollHeight, body.offsetHeight);
const bodyWidth = window.innerWidth;

console.log(bodyHeight);
console.log(bodyWidth);

///if the topPosition or leftPosition are not greater than less than body h & w
waldo.style.left = `${random(bodyWidth)}px`;
waldo.style.top = `${random(bodyHeight)}px`;

let foundTimes = 0;
// add on click event listener for waldo
waldo.addEventListener('click', (e) => {
  alert(`I've been clicked! You found me ${++foundTimes} times!`);
  waldoHeight = waldoHeight / 1.5;
  waldo.setAttribute('height', `${waldoHeight}px`);
  waldo.style.left = `${random(bodyWidth)}px`;
  waldo.style.top = `${random(bodyHeight)}px`;
});
