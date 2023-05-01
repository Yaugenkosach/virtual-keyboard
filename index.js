// Keyboard title

let keyboardTitle = document.createElement('h1');
keyboardTitle.innerHTML = 'RSS Виртуальная клавиатура';
keyboardTitle.classList.add('keyboard-title');

document.querySelector('body').appendChild(keyboardTitle);

// Textarea

let textArea = document.createElement('textarea');
textArea.setAttribute('rows', 5);
textArea.setAttribute('cols', 50);
textArea.classList.add('text-area');

/* <textarea class="textarea" id="textarea" rows="5" cols="50"></textarea> */

document.querySelector('body').appendChild(textArea);

