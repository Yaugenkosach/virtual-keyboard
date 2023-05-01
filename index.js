// create keyboard title

let keyboardTitle = document.createElement('h1');
keyboardTitle.innerHTML = 'RSS Виртуальная клавиатура';
keyboardTitle.classList.add('keyboard-title');
document.querySelector('body').appendChild(keyboardTitle);

// create textarea

let textArea = document.createElement('textarea');
textArea.setAttribute('rows', 5);
textArea.setAttribute('cols', 50);
textArea.classList.add('text-area');
document.querySelector('body').appendChild(textArea);


// create keyboard

let keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
document.querySelector('body').appendChild(keyboard);

// create keys

const keyboardArr = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];
const keysArr = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'];

function createKeys() {
    let keys = '';
    for (let i = 0; i < keyboardArr.length; i++) {
        if (i == 14 || i == 29 || i == 42 || i == 55) {
            keys += '<div class="clearfix"></div>';
        }
        keys += `<div class="key ${keyboardArr[i]}">`+String(keysArr[i])+'</div>'
    }
    document.querySelector('.keyboard').innerHTML = keys;
}

createKeys();