let buttonPeople = document.querySelector('#buttonPeople')
let name = document.querySelector('#name')
let buttonPlanets = document.querySelector('#buttonPlanets')
let planet = document.querySelector('#planet')
let buttonShips = document.querySelector('#buttonShips')
let ship = document.querySelector('#planet')
let list = document.getElementById("myList");
let li = document.createElement("li");

// function to get the information from people
function getInfoPeople() {
    let apiUrl = 'https://swapi.dev/api/people'
    axios.get(apiUrl).then(response =>{
        showInfoPeople(response.data)
    }).catch(e => {
        console.log('there was an error')
    })
}

function showInfoPeople(data) {
    removeAll()
    for (i = 0; i <= data.results.length; i++) {
        let li = document.createElement("li");
        li.innerText =  data.results[i].name;
        list.appendChild(li);
    }
}

function getInfoPlanets() {
    let apiUrl = 'https://swapi.dev/api/planets'
    axios.get(apiUrl).then(response =>{
        showInfoPlanets(response.data)
    }).catch(e => {
        console.log('there was an error')
    })
}

function showInfoPlanets(data) {
    removeAll()
    for (i = 0; i <= data.results.length; i++) {
        let li = document.createElement("li");
        li.innerText =  data.results[i].name;
        list.appendChild(li);
    }
}

function getInfoShips() {
    let apiUrl = 'https://swapi.dev/api/starships'
    axios.get(apiUrl).then(response =>{
        showInfoShips(response.data)
    }).catch(e => {
        console.log('there was an error')
    })
}

function showInfoShips(data) {
    removeAll()
    for (i = 0; i <= data.results.length; i++) {
        let li = document.createElement("li");
        li.innerText =  data.results[i].name;
        list.appendChild(li);
    }
}

function removeAll(){
    document.getElementById("myList").innerHTML = "";
}

function searchPersonByName() {
    removeAll()
    let apiUrl = 'https://swapi.dev/api/people'
    axios.get(apiUrl).then(response =>{
        const person = document.getElementById('person').value


        for (i = 0; i <= response.data.results.length; i++) {
            if (response.data.results[i].name === person) {
                {
                li.innerText =  "Person found\n\n" + "Basic Info:\n"
                + "\nName: " + response.data.results[i].name 
                + "\nDOB: " + response.data.results[i].birth_year 
                + "\nHeight: " + response.data.results[i].height + " cm"
                + "\nMass: " + response.data.results[i].mass + " kg"
                }
               
            } 
            if (response.data.results[i].name !== person){
                if (person === "") {
                    li.innerText =  "Please enter a name\n"
                    list.appendChild(li);
                } else {
                li.innerText =  "Person NOT found\n\n";
                }
            }
            list.appendChild(li);
        } 
    }) 
};

buttonPeople.addEventListener('click', getInfoPeople)
buttonPlanets.addEventListener('click', getInfoPlanets)
buttonShips.addEventListener('click', getInfoShips)
buttonPerson.addEventListener('click', searchPersonByName)

