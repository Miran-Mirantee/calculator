const numbers = document.querySelectorAll('.btn.number');
for (const number of numbers) {
    number.addEventListener('click', () => {
        console.log(number.textContent);
    });
}