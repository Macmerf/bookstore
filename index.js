const book =  document.querySelector('#book');
const author =  document.querySelector('#author');
const year =  document.querySelector('#year');
const createBook = document.querySelector('#createBook');
const cls = document.querySelector('#close');
const add = document.querySelector('#add');
const bl = document.querySelector('.book-list');
let cover = document.querySelector('.cover-div');
let inp = document.querySelector('.book-input');
const arr = [];
const obj = {};
//кнопка открывет добавление книги
createBook.addEventListener("click",function(){
    cover.style.display = 'inline';
    inp.style.display ='inline';
});
// закрываем модальное окно
cls.addEventListener("click",function(){
    cover.style.display = 'none';
    inp.style.display ='none';
});
cover.addEventListener("click", function(){
    cover.style.display = 'none';
    inp.style.display ='none';
});
add.addEventListener("click",function(){
    cover.style.display = 'none';
    inp.style.display ='none';
});
// создаем книгу и пушим ее в массив.
function CreateBook(){
    obj.Name = book.value;
    obj.Author = author.value;
    obj.Year = year.value;
    let bookb = document.createElement("div");
    bookb.className = `bookb`;
    bookb.innerHTML = `<h3>Название книги: "${obj.Name }." </h3> <h3>Автор книги: ${obj.Author}</h3><h3>Дата издания книги: ${obj.Year}</h3> <button name ="del">&#10008</button>`;
    arr.push(obj);
    console.log(arr);
    return bl.appendChild(bookb);    
}
// команда создающая книгу
add.addEventListener("click",CreateBook);
//здесь делаем  возможность удалять кнопки
add.addEventListener('click',()=>{
    const del = document.getElementsByName("del");
    return del.forEach(function(item) {
        item.addEventListener("click", function(){
            item.parentNode.parentNode.removeChild(item.parentNode);
        });
    });
});





