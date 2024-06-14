"use strict"


let notesArr = [
    {
        title: "Заметка 1",
        img: "https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1",
        desc: 'китек1',
        done: false,
    },
    {
        title: "Заметка 2",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7sQJRIEcvdvsdmja9GgiUddb5UpAkX_Z83Q&s",
        desc: 'китек2',
        done: true,
    }
];



function getAddBtn(text) {
    let buttonAdd = document.createElement('button');
    buttonAdd.textContent = text;
    return buttonAdd;
}


function getCard(card, index) {

    let cardElement = document.createElement("li");
    let cardImg = document.createElement("img");
    let cardTitle = document.createElement("h2");
    let cardDesc = document.createElement("p");
    let cardRemoveBtn = document.createElement("button");
    let cardImportantBtn = document.createElement("button");
    
    
    
    cardTitle.textContent = card.title;
    cardImg.src = card.img;
    cardDesc.textContent = card.desc;
    
    
    
    cardRemoveBtn.textContent = "Удалить";
    cardImportantBtn.textContent = "Важное";


    cardRemoveBtn.onclick = function() {
        notesArr.splice(index, 1);
        render(notesArr);
    }


    cardImportantBtn.onclick = function() {
        if(cardElement.classList.contains("card_important") === false){
        cardImportantBtn.textContent = "Не важное"
        cardElement.classList.add("card_important")
        card.done = true;
    }   else {
        cardImportantBtn.textContent = "Важное"
        cardElement.classList.remove("card_important")
        card.done = false;

    }
    console.log(notesArr);
    
};
    
    // классы
    cardElement.classList.add('card');

    if(card.done === true) {
        cardElement.classList.add("card_important");
    }

    cardImg.classList.add('card__img');
    cardTitle.classList.add('card__title');
    cardDesc.classList.add('card__desc');
    cardRemoveBtn.classList.add('card__remove');
    cardImportantBtn.classList.add('card__btn');
    
    
    
    cardElement.append(
        cardImg,
        cardTitle,
        cardDesc,
        cardRemoveBtn,
        cardImportantBtn,
    );
    
    
    
    
    
    
    return cardElement;
}

// функция создания списка

function getList() {
    let ul = document.createElement('ul');
    ul.classList.add('list')
    return ul;
}


// добавление карточки в список

let list = getList()

let addBtn = getAddBtn("Добавить новую заметку")

addBtn.onclick = function() {
    let titleValue = prompt("Введите название заметки", "");
    let imgValue = prompt("Введите путь к изображению", "");
    let descValue = prompt("Введите описание заметки", "");

    let newNoteObj = {
        title: titleValue,
        img: imgValue,
        desc: descValue,
        done: false,
    }

    notesArr.push(newNoteObj);

    render(notesArr)   
}; 
    


function render(arrNotes) {
    list.innerHTML = '';
    for(let i = 0; i < arrNotes.length; i++) {
        let newCard = getCard(arrNotes[i], i);
        list.append(newCard);
    }
}


render(notesArr);




document.body.append(addBtn, list)

