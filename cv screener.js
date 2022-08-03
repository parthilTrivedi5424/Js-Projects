console.log('We Will Make A CV SCreener');
let data = [
    {
        name: 'Rohan Das',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/51.jpg'
    },

    {
        name: 'Shubham Sharma',
        age: 28,
        city: 'Bangalore',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/54.jpg'
    },

    {
        name: 'Camella Cabello',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/55.jpg'
    },

    {
        name: 'Aishwariya Rai',
        age: 45,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/57.jpg'
    },

    {
        name: 'Rohit Sharma',
        age: 34,
        city: 'Jharkhand',
        language: 'Go',
        framework: 'Go Framework',
        image: 'https://randomuser.me/api/portraits/men/61.jpg'
    }
];


function cviterate(cvs) {
    let nextcv = 0;
    return {
        next: function () {
            if (nextcv < cvs.length) {
                return {
                    value: cvs[nextcv++],
                    done: false
                }
            }
            else {
                return {
                    done: true
                }
            }
        }
    }
}
let candidates = cviterate(data);
function nextcv() {
    console.log('We ARe Now Gonna Populate');

    let cc = candidates.next().value;
    let photo = document.getElementById('img');
    let profile = document.getElementById('profile');
    if (cc != undefined) {
        photo.innerHTML = `<img src="${cc.image}">`;
        profile.innerHTML = `<ul class="list-group">
        <li class="list-group-item">Name: ${cc.name}</li>
        <li class="list-group-item">Age: ${cc.age}</li>
        <li class="list-group-item">City: ${cc.city}</li>
        <li class="list-group-item">Language: ${cc.language}</li>
        <li class="list-group-item">Framework: ${cc.framework}</li>
    </ul>`;
    }
    else {
        document.location.reload();
    }

}

let nextbtn = document.getElementById('next');
nextbtn.addEventListener('click', nextcv);
