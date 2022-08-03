console.log('We WIll Make A PostMan Clown');
// It Is Nothing But Just A PostMan Clown Used To Make Get And Post Request Through API's Using URL's Of Course
// console.log('hellp hello url is: '+url);

// The Parameter Box Container
let parambox = document.getElementById('parameterbox');
parambox.style.display = 'none';

// The Json Box Container
let jsonbox = document.getElementById('jsonbox');

// The Parameter Radio Button
let paramradio = document.getElementById('params');
let jsonradio = document.getElementById('jsonrad');


// Show And Hide Functions In Radio Button
paramradio.addEventListener('click', () => {
    parambox.style.display = 'block';
    jsonbox.style.display = 'none';
    console.log('Hiding The Json Box');

});

jsonradio.addEventListener('click', () => {
    parambox.style.display = 'none';
    jsonbox.style.display = 'block';
    console.log('Hiding The Json Box');

});

let addedparams = 1;
let paramhtml;
let addparambtn = document.getElementById('parambtn');
addparambtn.addEventListener('click', () => {
    paramhtml = `<div class="row my-3" id="addparam${addedparams+1}">
                    <legend class="col-form-label col-sm-1 col-md-3 pt-0" id="param${addedparams + 1}">Parameter${addedparams + 1}
                    </legend>
                    <div class="col-md-3 col-sm-4">
                        <input type="text" class="form-control" placeholder="Key" id="paramkey${addedparams + 1}">
                    </div>
                    <div class="col-md-3 col-sm-4">
                        <input type="text" class="form-control" placeholder="Value" id="paramvalue${addedparams + 1}">
                    </div>
                    <button type="submit" class="btn btn-primary col-md-1 minusbtn" id="minusbtn${addedparams+1}"> - </button>
                </div>`;
    let newparams = document.getElementById('newparams');
    newparams.innerHTML += paramhtml;

    // Deletion of The Parameter
    let deletebtn = document.getElementsByClassName('minusbtn');
    for (iterator of deletebtn) {
        iterator.addEventListener('click',(e)=>{
            alert('Are You Sure You Want To Delete The Parameter ');
            e.target.parentElement.remove();
        });
    }
    
    addedparams = ++addedparams;

});

let restext = document.getElementById("responseJsonText");
let submit = document.getElementById('submit');
submit.addEventListener('click',()=>{
    restext.innerHTML = "Please Wait.......";
    let url = document.getElementById('url').value;
    let typereq = document.querySelector("input[name='req']:checked").value.toUpperCase();
    let typecontent = document.querySelector("input[name='con']:checked").value.toUpperCase();
    if (typecontent == "params") {
        let paramdata = {};
        for(let i=0;i<addedparams;i++)
        {
            if (document.getElementById(('paramkey'+i)) != undefined) {   
                let key = document.getElementById('paramkey'+i).value;
                let val = document.getElementById('paramvalue'+i).value;
                paramdata[key] = val;
            }
        }
        paramdata = JSON.stringify(paramdata);
        console.log(paramdata);
        
    }
    else{
        let jsondata = document.getElementById('tajson').value;
        console.log(jsondata);
    }

    if (typereq == 'GET') {
        fetch(url,{
            method:'GET',
        }).then((response)=>{
            return response.text();

        }).then((text)=>{
            console.log(url);
            
            document.getElementById('responseJsonText').value = text;
        });
    }
    else{
        fetch(url,{
            method : 'POST',
            Headers : {
                'content-type': 'application/json'
            },
            body : paramdata
            }
        ).then((response)=>{
            return response.text();
        }).then((data)=>{
            document.getElementById('responseJsonText').value = data;
        });
    }
});
