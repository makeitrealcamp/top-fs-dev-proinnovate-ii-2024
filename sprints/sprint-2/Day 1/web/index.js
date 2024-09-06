// select the root element
const root = document.getElementById('root');
console.log(root.getAttribute('id'));
// create a new element
const h1 = document.createElement('h1');
h1.textContent = 'Hello, World!';
const a = document.createElement('a');
a.href = 'https://www.google.com';
a.textContent = 'Google';

// create a list
const list = document.createElement('ul');
const items = ['item1', 'item2', 'item3'];
items.forEach((item) => {
  const li = document.createElement('li');
  li.textContent = item;
  list.appendChild(li);
});

// create a list
const itemA = document.createElement('li');
itemA.textContent = 'itemA';
const itemB = document.createElement('li');
itemB.textContent = 'itemB';
const itemC = document.createElement('li');
itemC.textContent = 'itemC';
// append the new element to the root element
root.appendChild(h1);
root.append(a);
root.appendChild(list);
list.append(itemA, itemB, itemC);

// create a button
const button = document.createElement('button');
button.textContent = 'Click me';
button.setAttribute('id', 'myButton');
button.setAttribute('type', 'button');

button.addEventListener('click', (event) => {
  event.target.classList.toggle('alert');
  // if(event.target.classList.contains('btn')) {
  //     event.target.classList.remove('btn');
  //     event.target.classList.add('alert');
  //     return;
  // }
  // if(event.target.classList.contains('alert')) {
  //     event.target.classList.remove('alert');
  //     event.target.classList.add('btn');
  //     return;
  // }

  console.log(event.target);
});
// button.style.backgroundColor='blue';
// button.style.color='white';
// button.style.padding='10px';
button.classList.add('btn');

root.appendChild(button);

// event propagation
const container = document.getElementById('container');
const parent = document.getElementById('parent');
const child = document.getElementById('child');
const btn = document.getElementById('btn');

// function handleEvent(event) {
//     console.log(`Event triggered on ${event.currentTarget.nodeName}`);
// }

// function stopPropagation(event) {
//     event.stopInmedeately();
//     console.log('Propagation stopped in ', event.currentTarget.nodeName);
// }

// container.addEventListener('click', handleEvent,{
//     capture: true
// });
// parent.addEventListener('click', stopPropagation,{
//     capture: true
// });
// child.addEventListener('click', handleEvent,{
//     capture: true
// });
// btn.addEventListener('click', handleEvent,{
//     capture: true
// });

// btn.addEventListener('click',()=>console.log('double click'))
// btn.removeEventListener('click', handleEvent);
const section = document.getElementById('section');
const red = document.getElementById('red');
const blue = document.getElementById('blue');
const pink = document.getElementById('pink');

function changeColor(e) {
  const parent = e.currentTarget.parentElement;
  console.log(e.currentTarget.id);
  parent.style.backgroundColor = e.currentTarget.id;
  console.log();
}
// normal event listener
// red.addEventListener('click', changeColor);
// blue.addEventListener('click', changeColor);
// pink.addEventListener('click', changeColor);

// event delegation

function eventDelegation(e) {
  console.log(e.target.type);
  if (e.target.type !== 'button') return;
  e.currentTarget.removeChild(e.target);
  //   e.currentTarget.style.backgroundColor = e.target.id;
  //   console.log(e.currentTarget);
  //   if (e.target.type === 'button') {
  //     e.currentTarget.style.backgroundColor = e.target.id;
  //   }
}

section.addEventListener('click', eventDelegation);

// red.addEventListener('click', ()=>{
//     red.remove();
// });

// Inputs
// forms
// innerHTML and sanitize
// input validation
