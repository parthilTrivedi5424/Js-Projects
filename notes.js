console.log("We Are In Notes Javascript");


// First We Will See How To Set Notes
shownotes();
let addbtn = document.getElementById('addBtn');
console.log(addbtn);

addbtn.addEventListener('click', function (e) {
    let note = document.getElementById('addTxt');
    let stor = localStorage.getItem('notes');
    if (stor == null) {
        var notesvalue = [];
    }
    else {
        var notesvalue = JSON.parse(stor);
    }
    notesvalue.push(note.value);
    localStorage.setItem('notes', JSON.stringify(notesvalue));
    // note.value = '';
    shownotes();
});


// --------------------------- Now We Will See How To Show Notes in Html ------------------------------

function shownotes() {
    note = document.getElementById('addTxt');
    stor = localStorage.getItem('notes');
    if (stor == null) {
        notesvalue = [];
    }
    else {
        notesvalue = JSON.parse(stor);
    }
    let helem;
    notesvalue.forEach(function (element, index) {
        helem+=`<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>
                <p class="card-text"> ${element}</p>
                <button id="${index}"onclick="deletenote(this.id)" class="btn btn-primary">Delete Note</button>
            </div>
        </div>`;
        let notehtml = document.getElementById('notes');
        if(notesvalue.length != 0)
        {
            notehtml.innerHTML = helem;
        }
        else{
            notehtml.innerHTML = 'Please Add a Note';
        }


    });

}


// ------------------------------------- Now Delteting The Note --------------------------

function deletenote(id) {
    let stor = localStorage.getItem('notes');
    if (stor == null) {
        var notesvalue = [];
    }
    else {
        var notesvalue = JSON.parse(stor);
    }   
    notesvalue.splice(id,1);
    console.log(id+" deleted");
    notesvalue.push(note.value);
    localStorage.setItem('notes', JSON.stringify(notesvalue));
    // note.value = '';
    shownotes();
}