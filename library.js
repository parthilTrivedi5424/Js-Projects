console.log("So We WIll Implement A Library");
// Library: It Means A code Which Is Already Written For Us And We Can Use The Code By Just Implementing them.
// But It's Not The Library In Programming It's An Actual Library


// Objective - 
// 1. Create A Library Class
// 2. Add Functions Like : IssueBook(), returnBook(), listBook()

// FIrst We Will See Prototype

let addbook = document.getElementById('addbook');
addbook.addEventListener('click', function (e) {
    let bookname = document.getElementById('bookname').value.toUpperCase();
    let authorname = document.getElementById('authorname').value.toUpperCase();
    let type;
    let novel = document.getElementById('novel');
    let Programming = document.getElementById('Programming');
    let science = document.getElementById('science');
    if (novel.checked) {
        type = document.getElementById('novel').value.toUpperCase();
    }
    else if (Programming.checked) {
        type = document.getElementById('Programming').value.toUpperCase();
    }
    else if (science.checked) {
        type = document.getElementById('science').value.toUpperCase();
    }
    console.log(bookname + "  " + authorname + "  " + type + " ");


    if (bookname.length > 3 && authorname.length > 3) {

        let msg = document.getElementById('alert');
        msg.innerHTML = `
        <div class="alert alert-success" role="alert">
            <h1> ${bookname} Has Been Added Successfully! </h1>
        </div>`;


        // -------------------- To Prevent The Default Behaviour ------------------
        e.preventDefault();
        let Libraryform = document.getElementById('libraryform');
        Libraryform.reset();
        setTimeout(() => {
            msg.innerHTML = "";
        }, 2000);




        // ------------------ Storing Data Into The LocalStorage -------------------------

        // This Is TO get The Data From The Localstorage 

        let locallibrary = localStorage.getItem('books');
        let localobj;
        if (locallibrary == null) {
            localobj = [];
        }
        else {
            localobj = JSON.parse(locallibrary);
        }
        let libraryobj = {
            bookname: bookname,
            authorname: authorname,
            type: type
        };
        localobj.push(libraryobj);
        localStorage.setItem('books', JSON.stringify(localobj));


        // Adding Item To Ui 

        let Tablehtml = document.getElementById('tbody');
        let htmlelem;
        locallibrary = localStorage.getItem('books');
        console.log(locallibrary);
        localobj="";
        if (locallibrary == null) {
            localobj = [];
        }
        else {
            localobj = JSON.parse(locallibrary);
            console.log(localobj);
            localobj.forEach(function(element){
                htmlelem +=`<tr>
                                <td>${element.bookname}</td>
                                <td>${element.authorname}</td>
                                <td>${element.type}</td>
                            </tr>`;
                Tablehtml.innerHTML += htmlelem;
            });
        }
    }


    else {
        let msg = document.getElementById('alert');
        msg.innerHTML = `
        <div class="alert alert-warning" role="alert">
            A simple warning alert—check it out!
        </div>`;
        e.preventDefault();
    }
});