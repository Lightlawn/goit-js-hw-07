const refs = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
    value: document.querySelector('#value'),
};

refs.decrementBtn.addEventListener('click', onDecrementBtnClick);
refs.incrementBtn.addEventListener('click', onIncrementBtnClick);

let counterValue = 0;

function onDecrementBtnClick(event) {
    return refs.value.textContent = counterValue -= 1;
};

function onIncrementBtnClick(event) {
    return refs.value.textContent = counterValue += 1;
};