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
  if (foundTimes < 3) confirm(`You found me! Do you want to play again? 🤪`);
  else if (foundTimes === 3)
    confirm(
      `Okay, I was going easy on you...  now there's no way you'll find me! 😶‍🌫️`
    );
  else if (foundTimes === 4) confirm(`I underestimated you 🧐`);
  else if (foundTimes === 5)
    confirm(
      `You found me ${foundTimes} times! Are you sure you want to keep looking? 😎`
    );
  else if (foundTimes === 6)
    confirm(
      "Good for you, I'm done playing now... I bet you won't see me anymore. 🫥"
    );
  else if (foundTimes === 7)
    confirm(
      "I'm actually done playing now... Like really, I'm leaving. Goodbye! 😘"
    );
  else if (foundTimes === 8)
    confirm('I told you I was leaving. Why did you look for me again? 😤');
  else if (foundTimes === 9) confirm("Aren't you getting bored? 🥱");
  else if (foundTimes === 10)
    confirm(
      `I cant leave until you stop playing! Finding me ${foundTimes} times is not enough for you?!? 🤨`
    );
  else confirm(`... ${foundTimes} 💅`);
  foundTimes++;
  waldoHeight = waldoHeight / 1.5;
  waldo.setAttribute('height', `${waldoHeight}px`);
  waldo.style.left = `${random(bodyWidth)}px`;
  waldo.style.top = `${random(bodyHeight)}px`;
});
