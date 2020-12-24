const animals = ['crab', 'frog', 'dog', 'hedgehog', 'mouse', 'pinguin', 'ryno', 'seastar', 'snake', 'worm'];
const randNum = renderRandom(animals.length);
let animal = '';

function renderRandom(length) {
    const random = Math.floor(Math.random() * Math.floor(length));
    return random;
};

function showArr(arr, elem) {
    let out = '';
    const indexRandom = renderRandom(arr.length);
    out += `
    <img src='./img/${arr[indexRandom]}.png' class="img_animal">
    <span class="img_name">You right its ${arr[indexRandom]}!</span>
     <div class="btns">
        <button class="btn_value-a btn">${arr[indexRandom]}</button>
        <button class="btn_value-b btn">${arr[randNum]}</button>
    </div>
    `;
    animal = arr[indexRandom];
    document.querySelector(elem).innerHTML = out;
    return animal;
};


showArr(animals, '.imgs');


if (document.querySelector('button')) {
    document.querySelectorAll('.btn').forEach((btn) => {
        btn.addEventListener('click', (event) => {
            if (event.target.textContent === animal) {
                document.querySelector('.img_name').style.display = 'block';
                setTimeout(() => window.location.reload(), 2000);
            };
        });
    });

} else {
    console.log('нету в доме')
}