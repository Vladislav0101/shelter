let pet = document.getElementsByClassName('elem');
let name1 = document.getElementsByClassName('name1');
let img1 = document.getElementsByClassName('elem_Img_1');
let name2 = document.getElementsByClassName('name2');
let img2 = document.getElementsByClassName('elem_Img_2');
let name3 = document.getElementsByClassName('name3');
let img3 = document.getElementsByClassName('elem_Img_3');
let data = [{
        "name": "Jennifer",
        "img": "../../assets/pets-jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": [
            "none"
        ],
        "diseases": [
            "none"
        ],
        "parasites": [
            "none"
        ]
    },
    {
        "name": "Sophia",
        "img": "../../assets/pets-sophia.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": [
            "parvovirus"
        ],
        "diseases": [
            "none"
        ],
        "parasites": [
            "none"
        ]
    },
    {
        "name": "Woody",
        "img": "../../assets/pets-woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": [
            "adenovirus",
            "distemper"
        ],
        "diseases": [
            "right back leg mobility reduced"
        ],
        "parasites": [
            "none"
        ]
    },
    {
        "name": "Scarlett",
        "img": "../../assets/pets-scarlett.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": [
            "parainfluenza"
        ],
        "diseases": [
            "none"
        ],
        "parasites": [
            "none"
        ]
    },
    {
        "name": "Katrine",
        "img": "../../assets/pets-katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": [
            "panleukopenia"
        ],
        "diseases": [
            "none"
        ],
        "parasites": [
            "none"
        ]
    },
    {
        "name": "Timmy",
        "img": "../../assets/pets-timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": [
            "calicivirus",
            "viral rhinotracheitis"
        ],
        "diseases": [
            "kidney stones"
        ],
        "parasites": [
            "none"
        ]
    },
    {
        "name": "Freddie",
        "img": "../../assets/pets-freddie.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": [
            "rabies"
        ],
        "diseases": [
            "none"
        ],
        "parasites": [
            "none"
        ]
    },
    {
        "name": "Charly",
        "img": "../../assets/pets-charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": [
            "bordetella bronchiseptica",
            "leptospirosis"
        ],
        "diseases": [
            "deafness",
            "blindness"
        ],
        "parasites": [
            "lice",
            "fleas"
        ]
    }
]

for (let i = 0; i < 8; i++) {
    let j = (Math.random() * 7).toFixed();
    name1[i].textContent = data[i].name;
    img1[i].setAttribute('src', `${data[i].img}`);
    img1[i].style.backgroundImage = `url(${data[i].img})`;
}
for (let i = 0; i < 8; i++) {
    let j = (Math.random() * 7).toFixed();
    name2[i].textContent = data[i].name;
    img2[i].setAttribute('src', `${data[i].img}`);
    img2[i].style.backgroundImage = `url(${data[i].img})`;
}
for (let i = 0; i < 8; i++) {
    let j = (Math.random() * 7).toFixed();
    name3[i].textContent = data[i].name;
    img3[i].setAttribute('src', `${data[i].img}`);
    img3[i].style.backgroundImage = `url(${data[i].img})`;
}

let first = document.getElementById('first');
let prev = document.getElementById('prev');
let now = document.getElementById('now');
let next = document.getElementById('next');
let last = document.getElementById('last');
let box = document.getElementById('slider_box');


now.textContent = 1;
let checkWidth = document.getElementById('checkWidth');
first.onclick = function() {
    box.style.transform = `translateX(0px)`;
    now.textContent = 1;
}
prev.onclick = function() {
    now.textContent = Number(now.textContent) - 1;
    box.style.transform = `translateX(${+getComputedStyle(box).transform.split(',')[4] + checkWidth.clientWidth}px)`;
    if (+now.innerHTML <= 0) {
        box.style.transform = `translateX(${checkWidth.clientWidth*-2}px)`;
        now.innerHTML = 3;
    }
    console.log(box.clientWidth);
    console.log(getComputedStyle(box).transform.split(',')[4]);
    console.log(getComputedStyle(box).transform);

}
next.onclick = function() {
    now.textContent = Number(now.textContent) + 1;
    box.style.transform = `translateX(${getComputedStyle(box).transform.split(',')[4] - +checkWidth.clientWidth}px)`;
    if (+now.innerHTML >= 4) {
        box.style.transform = `translateX(0px)`;
        now.innerHTML = 1;
    }
    console.log(box.clientWidth);
    console.log(getComputedStyle(box).transform);
}
last.onclick = function() {
    now.textContent = 3;
    box.style.transform = `translateX(${+checkWidth.clientWidth * -2}px)`;
    console.log(box.clientWidth);
    console.log(getComputedStyle(box).transform);
}

let moreBtn = document.querySelectorAll('friends--learn');
moreBtn.onclick = () => {
    alert('s');
}
console.log(moreBtn);