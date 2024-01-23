const cardContainer = document.getElementById("card-container");
const canvas = 600;
const cell = 90 * 90;
let tool = 'draw';

function createCard() {
  const card = document.createElement("div");
  card.classList = "card";
  card.style = `height: ${(canvas/Math.sqrt(cell))}px; width: ${(canvas/Math.sqrt(cell))}px;`
  cardContainer.appendChild(card);
}

for (let i = 0; i < ((cell)); i++) {
 if (i < ((cell))) {
   createCard();
 }
}

cardContainer.style.maxHeight = `${canvas}px`;
cardContainer.style.maxWidth = `${canvas}px`;

document.querySelectorAll('.card').forEach(item => {
  item.addEventListener('dragenter', ()=> {
    switch (tool) {
        case 'draw':
            item.classList.add('draw');
            break;
        case 'erase':
            item.classList.remove('draw');
    }
})
})

document.querySelectorAll('.tool-button').forEach(button => {
    button.addEventListener('click', (e)=> {
        tool = e.target.value;
        console.log(tool)
    })
})

document.querySelector('.clear').addEventListener('click',()=> {
    document.querySelectorAll('.draw').forEach(cell => {
        cell.classList.remove('draw');
    })
})