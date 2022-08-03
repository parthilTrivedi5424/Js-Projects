console.log("We Will Create A News Website");
let apikey = '797fc3c6fb9a4097b271677cc95f17be';
let source = 'times of india'
// But WHat's The Use Of Api Ket Maybe If We Want TO Take Api's Then We Have To Insert This Key

// Here We Have Grabbed The News Container Which Contains All The News Bodies(Card-bodies)
let cardcontain = document.getElementById('cards');
let card = ``;
// Now We Will Make An XHR Request To the News Api
let xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=797fc3c6fb9a4097b271677cc95f17be`, true);
xhr.send();

// ---------- XHR Onload Function -----------
xhr.onload = function () {
    if (xhr.status === 200) {
        let res = JSON.parse(xhr.responseText);
        let article = res.articles;
        article.forEach(function(element,index){
                let ntitle = element.title; 
                let ndes = element.description;
                let nurl = element.url;
                card =
                    `<div id="card1" class="my-3">
                         <button class="btn btn-primary" type="button"
                            data-bs-toggle="collapse" data-bs-target="#cb${index}"
                            aria-expanded="false" aria-controls="cb${index}" id="button${index}">
                                News No: ${index+1} ${ntitle}
                        </button>
    
                        <div class="collapse card card-body my-3" id="cb${index}">
                            ${ndes} to Read More Please <a href=${nurl} target="_BLANK"> Click Here </a>
                        </div>
                    </div>`;
    
                cardcontain.innerHTML += card;
        });
        
        console.log(res) ;
    }
    else {
        console.log(xhr.status);
    }
};

                        
