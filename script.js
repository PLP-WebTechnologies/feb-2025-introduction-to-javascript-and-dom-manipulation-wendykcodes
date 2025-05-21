// function hoverParagraph() {
//   const para = document.getElementById('hover-paragraph');
//   para.style.color = 'green';
//   para.style.fontSize = '20px';
// }

document.addEventListener('DOMContentLoaded', () => {
  const para = document.getElementById('hover-paragraph');

  para.addEventListener('mouseover', () => {
    para.style.color = 'pink';
    para.style.fontSize = '20px';
    para.style.fontFamily = 'popins, sans-serif';
    para.style.fontStyle = 'italic';
  });

  para.addEventListener('mouseleave', () => {
    para.style.color = '';      // resets to original/default color
    para.style.fontSize = '';   // resets to original/default size
    para.style.fontFamily = ''; // resets to original/default font
    para.style.fontStyle = '';  // resets to original/default style
  });
});


function changeContent() {
  const msg = document.getElementById('message');
  msg.textContent = "You've clicked the button!";
  msg.style.color = 'blue';
  msg.style.fontWeight = 'bold';
  msg.style.backgroundColor = '#f0f0f0';
}

function toggleElement() {
  const section = document.getElementById('dynamic-section');
  const existing = document.getElementById('newElement');

  if (existing) {
    section.removeChild(existing);
  } else {
    const newEl = document.createElement('div');
    newEl.id = 'newElement';
    newEl.textContent = 'I was dynamically added!';
    newEl.style.padding = '10px';
    newEl.style.backgroundColor = '#cfc';
    section.appendChild(newEl);
  }
}
