import goblinImage from './goblin.png';

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('game-container');
    const totalCells = 16;
    const cells = [];

    for (let i = 0; i < 16; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
        cells.push(cell);
    }

    const goblin = document.createElement('img');
    goblin.src = goblinImage;
    goblin.classList.add('goblin');

    let currentIndex = Math.floor(Math.random() * totalCells);
    cells[currentIndex].appendChild(goblin);

    setInterval(() => {
        let newIndex;

        do {
            newIndex = Math.floor(Math.random() * totalCells);
        } while (newIndex === currentIndex);

        cells[newIndex].appendChild(goblin);
        currentIndex = newIndex;
    }, 1000);
})