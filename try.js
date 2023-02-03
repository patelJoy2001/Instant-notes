console.log('Lets code.');

// step 1 = Adding eventlisteners on add note button which will update local Storage.
showNotes();
let addBtn = document.getElementById('addBtn');

addBtn.addEventListener("click", function () {
    let notes = localStorage.getItem('notes');
    let addTxt = document.getElementById('addTxt');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);
    showNotes();
})

// creating a function that will display the notes.
function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let html = "";
    notesObj.forEach(function (element, index) {
        html += `<div class="noteCard mx-2 my-2" style="width: 18rem;  >
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5> 
            <p class="card-text">${element}</p>
            <button id = "${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>

        </div>
    </div>
        `
    });
    let notesElm = document.getElementById('notes');
    if (notes.length != 0) {
        notesElm.innerHTML = html;
    }

}

// for deleting the notes

function deleteNote(index) {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

// searching the notecards.

let search = document.getElementById('searchTxt');
search.addEventListener("input",function(e)
{
    let inputVal = search.value.toLowerCase();
    console.log(inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal))
        {
            element.style.display = "block";
        }else{
            element.style.display = "none";
        }
    })
})
