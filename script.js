function Change() {
  document.body.style.backgroundColor = 'rgb(' + Math.floor(Math.random()*255) + ', 0, 0)';
  setTimeout(ChangeTwo, 500);
}

function ChangeTwo() {
  document.body.style.backgroundColor = 'rgb(0, ' + Math.floor(Math.random()*255) + ', 0)';
  setTimeout(ChangeThree, 500);
}

function ChangeThree() {
  document.body.style.backgroundColor = 'rgb(0, 0, ' + Math.floor(Math.random()*255) + ')';
  setTimeout(Change, 500);
}

Change();
