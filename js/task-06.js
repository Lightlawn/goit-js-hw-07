const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);


function onInputBlur(event) {
    input.classList.length >= 1 ?
        onPresentClass() :
        onNotPresentClass();
};

function onNotPresentClass(event) {
    input.value.length === Number(input.dataset.length) ?
        input.classList.add('valid') :
        input.classList.add('invalid');
}

function onPresentClass(event) {
    input.value.length === Number(input.dataset.length) ?
        input.classList.replace('invalid', 'valid') :
        input.classList.replace('valid', 'invalid');
}