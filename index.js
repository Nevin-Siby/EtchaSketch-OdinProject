function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(size) {
    const container = document.querySelector('.container');
    
    
    container.innerHTML = '';

    
    const squareSize = Math.floor(960 / size);

    
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.classList.add("div-style");
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;
        div.onmouseover = () => div.style.backgroundColor = getRandomColor();
        container.appendChild(div);
    }
}

document.getElementById('button').addEventListener('click', () => {
    const size = prompt("Enter the number of squares per side for the new grid:");
    const sizeNumber = parseInt(size);
    
    if (!isNaN(sizeNumber) && sizeNumber > 0) {
        createGrid(sizeNumber);
    } else {
        alert("Please enter a valid positive number.");
    }
});
createGrid(16); 