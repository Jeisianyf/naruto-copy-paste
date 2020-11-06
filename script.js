const textElement = document.querySelector('h3');
const buttonCopy = document.querySelector('#copy');
const buttonCopyAll = document.querySelector('#copyall');

const textAll = 'Naruto can be a bit difficult sometimes, you cant know this, but Naruto also grew up without a father. He has never actually met any of his parents, and has never had friends in our village. Yet I have never seen him cry, get angry or admit defeat, he is always willing to improve, he wants to be respected, it is his dream and Naruto would have given his life for it without hesitation. My guess is that he got tired of crying and decided to do something about it! \n\ O Naruto pode ser um pouco duro às vezes, talvez você não saiba disso, mas o Naruto também cresceu sem pai. Na verdade ele nunca conheceu nenhum de seus pais, e nunca teve nenhum amigo em nossa aldeia. Mesmo assim eu nunca vi ele chorar, ficar zangado ou se dar por vencido, ele está sempre disposto a melhorar, ele quer ser respeitado, é o sonho dele e o Naruto daria a vida por isso sem hesitar. Meu palpite é que ele se cansou de chorar e decidiu fazer alguma coisa a respeito! \n\ ナルトは時々少し荒いことがあります、あなたはそれを知らないかもしれません、しかしナルトも父親なしで育ちました。 実際、彼は両親に会ったことはなく、私たちの村に友達もいませんでした。 それでも私は彼が泣いたり、怒ったり、あきらめたりするのを見たことがありませんでした。彼は常に改善してくれます。彼は尊敬されたいと思っています。 私の推測では、彼は泣くのに飽きて、それについて何かをすることに決めました！';


buttonCopy.addEventListener('click', (e) => {
    e.preventDefault();

    navigator.clipboard.writeText(textElement.textContent);
    alert('Copied!');
});

// buttonCopyAll.addEventListener('click', (e) => {
//     e.preventDefault();

//     navigator.clipboard.writeText(textAll);
//     alert('Copied!')
// })

function copyAll() {
    navigator.clipboard.writeText(textAll);
    alert('Copied!');
}