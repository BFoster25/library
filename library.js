let myLibrary = [];
console.log(myLibrary)

const addNewBookButton = document.querySelector("#addNewBookButton");
const submitButton = document.querySelector("#submit");
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

const spaceForListOfBooks = document.querySelector("#spaceForListOfBooks");


addNewBookButton.addEventListener("click", function () {
    modal.style.display = "block";
});

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function Book(title, author, totalPages, read) {
    this.title = title;
    this.author = author;
    this.totalPages = totalPages;
    this.read = read;
    this.info = function () {
        return (title + "by" + author + "," + totalPages + "," + read);
    };

}


function getTitleFromForm() {
    let title = document.querySelector("#title").value;
    return title;
}

function getAuthorFromForm() {
    let author = document.querySelector("#author").value;
    return author;
}

function getTotalPagesFromForm() {
    let totalPages = document.querySelector("#totalPages").value;
    return totalPages;
}

function getReadStatusFromForm() {
    let read = document.querySelector("#read").value;
    return read;
}

function addBookToLibrary() {
    let bookName = title;
    bookName = new Book(getTitleFromForm(), getAuthorFromForm(), getTotalPagesFromForm(), getReadStatusFromForm());
    myLibrary.push(bookName);
    return myLibrary;
}


submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    modal.style.display = "none";
    console.log(getTitleFromForm());
    console.log(getAuthorFromForm());
    console.log(getTotalPagesFromForm());
    console.log(getReadStatusFromForm());
    addBookToLibrary()
    spaceForListOfBooks.style.display = "block";
    console.log(myLibrary)

})
