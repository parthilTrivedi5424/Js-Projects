console.log("Magic Notes");
shownotes();

// We WIll See How To Create Note Show Them And Delete Them

let addbtn = document.getElementById('addbtn');
addtxt = document.getElementById('notetxt');
addbtn.addEventListener('click', function () {
    let txt = document.getElementById('nodetxt');
    let addtitle = document.getElementById('addtitle');
    let notesobj;
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let obj1 = {
        title: addtitle.value,
        textval: addtxt.value
    }
    notesobj.push(obj1);
    localStorage.setItem('notes', JSON.stringify(notesobj));
    addtxt.value = "";
    addtitle.value = "";
    console.log(notesobj);
    shownotes();
});

// Show Notes

function shownotes() {
    let notesobj;
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html;
    notesobj.forEach(function (element, index) {
        html += `<div class="note my-4 mx-2" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title"> ${element.title}</h5>
                        <p class="card-text">${element.textval}</p>
                        <a id=${index} onclick="deletenote(this.id)" class="btn btn-primary" id="delbtn">Delete Note</a>
                    </div>
                </div>`;
        let elem = document.getElementById('notes');
        if (notesobj.length != 0) {
            elem.innerHTML = html;
        }
        else {
            elem.innerHTML = ` <h1>Don't Have any notes</h1>`;
        }

    });

}

//deletenotes 
function deletenote(index) {
    console.log("Deleting " + index);
    let notesobj;
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesobj));
    shownotes();
}

// SearchNotes
let searchelem = document.getElementById('searchtxt');
searchelem.addEventListener('input', function () {
    let sval = searchelem.value.toLowerCase();
    console.log("Value For Search Is", sval);
    let notecard = document.getElementsByClassName('note');
    Array.from(notecard).forEach(function (element) {
        let cardelem = element.getElementsByTagName('p')[0].innerText;
        if (cardelem.includes(sval)) {
            element.style.display = 'block';
        }
        else {
            element.style.display = "none";
        }
    });
});

