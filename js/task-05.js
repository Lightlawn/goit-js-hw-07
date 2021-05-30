const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    refs.input.value.trim() === '' ?
    refs.output.textContent = 'незнакомец' :
    refs.output.textContent = event.currentTarget.value;
};
