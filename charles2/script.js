function changeText() {
  const para = document.getElementById('myParagraph');
  para.textContent = 'Climbing gives me a peace of mind and a chance to enjoy the view. Cycling helps me meet new friends and take on more adventures. ';
}

function addListItem() {
  const ul = document.getElementById('myList');
  const li = document.createElement('li');
  li.textContent = 'Cycling and climbing boost strength, endurance, and mental clarity while connecting you with nature. ';
  ul.appendChild(li);
}

function removeElement() {
  const ul = document.getElementById('myList');
  if (ul.lastElementChild) {
    ul.removeChild(ul.lastElementChild);
  }
}