const player1 = document.querySelector('#player1 img');
const player2 = document.querySelector('#player2 img');
const btn = document.querySelector('button');
const result = document.querySelector('.result');

const imageSrc = [
    "./Images/1.png",
    "./Images/2.png",
    "./Images/3.png",
    "./Images/4.png",
    "./Images/5.png",
    "./Images/6.png"
];

const updateImages = () => {
    return Math.floor(Math.random() * (imageSrc.length));
}
btn.addEventListener('click', () => {
    const player1Index=updateImages();
    const player2Index = updateImages();
    
    player1.src = imageSrc[player1Index];
    player2.src = imageSrc[player2Index];
    console.log(player1Index);
    console.log(player2Index);

    if (player1Index > player2Index) {
        result.textContent = "Player1 Win!";
    }
    else if (player1Index < player2Index) {
        result.textContent='Player2 Win!'
    }
    else {
        result.textContent = "It's draw";
    }
})