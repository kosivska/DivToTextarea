'use strict';

var parent = document.body;
var div = document.querySelector('.div');
var textarea = document.createElement('textarea');

parent.onkeydown = function replace(event) {
        if (event.ctrlKey && event.keyCode === 69) {
        	event.preventDefault();
            parent.replaceChild(textarea, div);
            textarea.value = '';
            return false;
        } return true;
    };

textarea.onkeydown = function save(event) {
        if( event.ctrlKey && event.keyCode === 83) {
            div.innerText = textarea.value;
            parent.replaceChild(div,textarea);
            return false;

        } else if (event.keyCode === 27){
            parent.replaceChild(div,textarea);
            div.innerHTML = "Данные не были сохранены, для сохранения нажимайте Ctrl+S";
            return false;
        }return true;
    };

