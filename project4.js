console.log('Wait A Minute Email Ma Su Regular Expression Bnavis Tu');
let emailreg = /^[a-z]{6}[0-9]{0,4}@{1}gmail.com$/;
let successalertbox = document.getElementById('successalertbox');
let erroralertbox = document.getElementById('erroralertbox');
$('#successalertbox').show();
$('#erroralertbox').hide();
erroralertbox.classList.remove('show');
successalertbox.classList.remove('show');

// Grab All The Elements 
let Name = document.getElementById('name');
let email = document.getElementById('Email');
let number = document.getElementById('number');


let namevalid = false;
let emailvalid = false;
let numbervalid = false;


// Name Validation 
Name.addEventListener('blur',() => {
    console.log('Name Is Blured');
    let namereg = /^([a-zA-z]){2,10}$/;
    let Nameval = Name.value;
    // console.log(typeof(Nameval));
    console.log(namereg,Nameval);
    if (namereg.test(Nameval)) {
        console.log('Name Is Okay');
        Name.classList.remove('is-invalid');
        namevalid = true;
    }
    else{
        console.log(`Name Doesn't Match The Regx `);
        Name.classList.add('is-invalid');
        namevalid = false;
        
    }
    
})
// Email Validation 
email.addEventListener('blur',() => {
    console.log('Email Is Blured');
    let emailreg = /^([\._a-z0-9]+)@{1}([a-z]+)\.{1}com{1}$/;
    let emailval = email.value;
    // console.log(typeof(Nameval));
    console.log(emailreg,emailval);
    if (emailreg.test(emailval)) {
        console.log('email Is Okay');
        email.classList.remove('is-invalid');
        emailvalid = true;
    }
    else{
        console.log(`email Doesn't Match The Regx `);
        email.classList.add('is-invalid');
        
        emailvalid = false;
        
    }
})
// Number Validation 
number.addEventListener('blur',() => {
    console.log('Number Is Blured');
    let numberreg = /^([0-9]){10}$/;
    let numberval = number.value;
    // console.log(typeof(Nameval));
    console.log(numberreg,numberval);
    if (numberreg.test(numberval)) {
        console.log('number Is Okay');
        number.classList.remove('is-invalid');
        numbervalid = true;
    }
    else{
        console.log(`number Doesn't Match The Regx `);
        number.classList.add('is-invalid');
        numbervalid = false;
        
    }  
})

let submit = document.getElementById('submit');
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    if (namevalid && numbervalid && emailvalid) {
        successalertbox.classList.add('show');
        erroralertbox.classList.remove('show');
        $('#successalertbox').show();
        $('#erroralertbox').hide();
    }
    else{
        
        successalertbox.classList.remove('show');
        erroralertbox.classList.add('show');
        $('#successalertbox').hide();
        $('#erroralertbox').show();
        
    }
});