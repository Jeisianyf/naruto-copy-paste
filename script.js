const textElement = document.querySelector('h3');
const buttonCopy = document.querySelector('#copy');

console.log(textElement);

buttonCopy.addEventListener('click', (e) => {
    e.preventDefault();

    navigator.clipboard.writeText(textElement.textContent);
    alert('Texto copiado com sucesso!');
});