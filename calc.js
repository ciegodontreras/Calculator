const screen = document.querySelector('.js-screen');
const buttons = document.querySelectorAll('.displayButton'); 
const clearButton = document.querySelector('.clearButton'); 
const equalsButton = document.querySelector('.equalsButton'); 
const percentButton = document.querySelector('.percentButton');
const negativeButton = document.querySelector('.negativeButton'); 

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        screen.value += button.innerHTML; 
    }); 
}); 

clearButton.addEventListener('click', () => {
    screen.value = ''; 
}); 

equalsButton.addEventListener('click', () => {
    screen.value = eval(screen.value); 
});

percentButton.addEventListener('click', () => {
    screen.value /= 100; 
});

negativeButton.addEventListener('click', () => {
    screen.value *= -1; 
})