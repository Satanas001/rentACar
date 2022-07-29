var cars = [
    {
        image: 'vehicule1.png',
        name: 'Peugeot 208',
        description: 'Diesel, 5 portes, GPS, Autoradio, Forfait 1000 km (0,5/km supplémentaire)',
        cost: 999,
        location: 'Agence de Paris'
    },
    {
        image: 'vehicule2.png',
        name: 'Ford Focus',
        description: 'Diesel, 5 portes, GPS, Autoradio, Forfait 1000 km (0,5/km supplémentaire)',
        cost: 999,
        location: ''
    },
    {
        image: 'vehicule3.png',
        name: 'Audi A1',
        description: 'Diesel, 5 portes, GPS, Autoradio, Forfait 1000 km (0,55/km supplémentaire)',
        cost: 1100,
        location: 'Agence de Paris'
    },
    {
        image: 'vehicule4.png',
        name: 'Opel Mokka',
        description: 'Diesel, 5 portes, GPS, Autoradio, Forfait 1000 km (0,4/km supplémentaire)',
        cost: 1150,
        location: 'Agence de Paris'
    },
    {
        image: 'vehicule1.png',
        name: 'Peugeot 208',
        description: 'Diesel, 5 portes, GPS, Autoradio, Forfait 1000 km (0,5/km supplémentaire)',
        cost: 999,
        location: 'Agence de Paris'
    },
    {
        image: 'vehicule2.png',
        name: 'Ford Focus',
        description: 'Diesel, 5 portes, GPS, Autoradio, Forfait 1000 km (0,5/km supplémentaire)',
        cost: 999,
        location: ''
    },
    {
        image: 'vehicule3.png',
        name: 'Audi A1',
        description: 'Diesel, 5 portes, GPS, Autoradio, Forfait 1000 km (0,55/km supplémentaire)',
        cost: 1100,
        location: 'Agence de Paris'
    },
    {
        image: 'vehicule4.png',
        name: 'Opel Mokka',
        description: 'Diesel, 5 portes, GPS, Autoradio, Forfait 1000 km (0,4/km supplémentaire)',
        cost: 1150,
        location: 'Agence de Paris'
    }
];

var backgroundImages = ['background.jpg', 'background-2.jpg', 'background-3.jpg'];


let header = document.querySelector('header');
let main = document.querySelector('main');
let indexImage = 0;

// Variables for infinite scroll
const carIncrease = 4;
const carLimit = cars.length;
const pageCount = Math.ceil(carLimit / carIncrease);

let currentPage = 1;

// Function to change Header background
function changeBackground() {
    header.style.backgroundImage = "url('images/" + backgroundImages[(indexImage++) % backgroundImages.length] + "')";
}

function createCar(noCar) {
    let divCar = document.createElement('div');

    // div with Car image
    let divCarImage = document.createElement('div');

    //div with Car info
    let divCarInfo = document.createElement('div');

    // Button to rent the Car
    let rentButton = document.createElement('button');


    // Class affectation
    divCar.classList = 'row p-5 border-bottom car';

    divCarImage.classList = 'col-8 col-lg-5';
    divCarImage.innerHTML = '<img src="images/' + cars[noCar].image + '" class="img-fluid" alt="' + cars[noCar].name + '">';

    divCarInfo.classList = 'lh-lg col-4 col-lg-7';
    divCarInfo.innerHTML = '<div class="fs-4 d-none d-lg-block">' + cars[noCar].name + '</div>' + '<div class="d-none d-lg-block">' + cars[noCar].description + '</div>';
    divCarInfo.innerHTML += '<div class="d-none d-lg-block">' + cars[noCar].cost + ' €' + ((cars[noCar].location) ? ' - ' + cars[noCar].location : '') + '</div>';

    rentButton.classList = 'btn btn-success bg-gradient mt-4';
    rentButton.innerText = 'Réserver et Payer';

    divCarInfo.appendChild(rentButton);

    divCar.appendChild(divCarImage);
    divCar.appendChild(divCarInfo);

    main.appendChild(divCar);
}

// function to Add Cars on the page
const addCars = (pageIndex) => {
    currentPage = pageIndex;

    const startRange = (pageIndex - 1) * carIncrease;
    const endRange = currentPage == pageCount ? carLimit : pageIndex * carIncrease;

    if (startRange < carLimit) {
        for (let i = startRange; i < endRange; i++) {
            createCar(i);
        }
    }
};

document.getElementById('carCount').innerText = cars.length;

// Set the interval for changing the header background image
setInterval(changeBackground, 15000);

// Add cars on the page 
addCars(currentPage);


// Handle of the infinite scroll
const handleInfiniteScroll = () => {
    const endOfPage = window.innerHeight + window.pageYOffset >= document.body.offsetHeight;

    if (endOfPage) {
        // Add cars of the new page
        addCars(currentPage + 1);
    }
};

window.addEventListener("scroll", handleInfiniteScroll);