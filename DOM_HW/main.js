// 1. Create a page that displays a numbered list of tracks.

const playList = [
    {
        author: "LED ZEPPELIN",
        song:"STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song:"BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song:"FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song:"SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song:"ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song:"BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song:"WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song:"ENTER SANDMAN"
    }
];

const orderedList = document.createElement('ol');
document.body.appendChild(orderedList);

for (let key of playList) {
    const listItem = document.createElement('li');
    listItem.textContent = `${key.author} - ${key.song}`;

    orderedList.append(listItem);
}

// 2. Create html page with OPEN button and a modal box. The modal box should have text and a CLOSE button. The modal box is not displayed from the beginning. It appears when clicking the OPEN button and disappears when clicking CLOSE.

const modalBoxOpenButton = document.createElement('button');
modalBoxOpenButton.textContent = 'Open';

document.body.appendChild(modalBoxOpenButton);


const modalBox = document.createElement('div');

const modalBoxText = document.createElement('p')
modalBoxText.textContent = 'Thank you for contacting Galactic Support \n ' +
    'Your request has been forwarded to the Ninth Moon of Snarg. ' +
    '\n Estimated wait time: 7,032 light years.';
modalBoxText.style.display = 'none';

const modalBoxCloseButton = document.createElement('button');
modalBoxCloseButton.textContent = 'Close';
modalBoxCloseButton.style.display = 'none';

document.body.appendChild(modalBox);
document.body.appendChild(modalBoxText);
document.body.appendChild(modalBoxCloseButton);


modalBoxOpenButton.addEventListener('click', () => {
    modalBoxText.style.display = 'block';
    modalBoxCloseButton.style.display = 'block';
    modalBoxOpenButton.style.display = 'none';
})

modalBoxCloseButton.addEventListener('click', () => {
    modalBoxText.style.display = 'none';
    modalBoxCloseButton.style.display = 'none';
    modalBoxOpenButton.style.display = 'block';
})

// 3. Create html page with streetlights and a button that switches the color to the next one.

const redCircle = document.createElement('div');
const yellowCircle = document.createElement('div');
const greenCircle = document.createElement('div');

document.body.appendChild(redCircle);
document.body.appendChild(yellowCircle);
document.body.appendChild(greenCircle);

//styles for lights
redCircle.style.border = '1px solid black';
redCircle.style.width = '20vh';
redCircle.style.height = '20vh';
redCircle.style.borderRadius = '50%';

yellowCircle.style.border = '1px solid black';
yellowCircle.style.width = '20vh';
yellowCircle.style.height = '20vh';
yellowCircle.style.borderRadius = '50%';

greenCircle.style.border = '1px solid black';
greenCircle.style.width = '20vh';
greenCircle.style.height = '20vh';
greenCircle.style.borderRadius = '50%';

const lightsButton = document.createElement('button');
document.body.appendChild(lightsButton);

lightsButton.textContent = 'Switch';
lightsButton.style.padding = '1rem';
lightsButton.style.marginLeft = '2rem';
lightsButton.style.marginTop = '2rem';


const arrayOfLights = [redCircle, yellowCircle, greenCircle];
let currentIndex = 0;

lightsButton.addEventListener('click', () => {
    for (let light of arrayOfLights) {
        light.style.backgroundColor = 'white';
    }
    const colors = ['red', 'yellow', 'green'];
    arrayOfLights[currentIndex].style.backgroundColor = colors[currentIndex];
    currentIndex++;
    if (currentIndex >= arrayOfLights.length) {
        currentIndex = 0;
    }
});

