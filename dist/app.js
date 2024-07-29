var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.addEventListener('DOMContentLoaded', () => {
    const jokeInterface = document.getElementById('jokeInterface');
    const loadJokeButton = document.getElementById('loadJoke');
    const loadButton = document.getElementById('loadButton');
    const jOButton = document.getElementById('jOButton');
    const lFButton = document.getElementById('lFButton');
    loadJokeButton.addEventListener('click', () => {
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
            .then(data => {
            jokeInterface.innerText = `${data.setup} - ${data.punchline}`;
            document.addEventListener('DOMContentLoaded', () => {
                const jokeInterface = document.getElementById('jokeInterface');
                const loadJokeButton = document.getElementById('loadJoke');
                if (!jokeInterface || !loadJokeButton) {
                    console.error('Failed to find elements');
                    return;
                }
                loadJokeButton.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
                    try {
                        const response = yield fetch('https://official-joke-api.appspot.com/random_joke');
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        const data = yield response.json();
                        jokeInterface.innerText = `${data.setup} - ${data.punchline}`;
                    }
                    catch (error) {
                        jokeInterface.innerText = 'Failed to fetch a joke. Please try again!';
                        console.error('Fetch error:', error);
                    }
                }));
            });
        })
            .catch(error => {
            jokeInterface.innerText = 'Failed to fetch a joke. Please try again!';
            console.error('Fetch error:', error);
        });
    });
    /**
     * !Dark Mode Configs
     */
    const darkMode = document.getElementById('darkMode');
    const paragraphs = document.getElementsByTagName('p');
    const spans = document.getElementsByTagName('span');
    const articles = document.getElementsByTagName('a');
    const body = document.getElementsByTagName('body')[0];
    const nav = document.getElementsByTagName('header')[0];
    const main = document.getElementsByClassName('main');
    const about = document.getElementsByClassName('about');
    const contact = document.getElementsByClassName('contact');
    const dark = document.getElementsByClassName('dark');
    const jokes = document.getElementsByClassName('jokes');
    const jo = document.getElementsByClassName('jo');
    let isDarkMode = false;
    setTimeout(() => {
        console.log('worked in each 6 seconds');
    }, 6000);
    if (darkMode) {
        darkMode.addEventListener('click', () => {
            isDarkMode = !isDarkMode;
            if (isDarkMode) {
                for (let i = 0; i < paragraphs.length; i++) {
                    paragraphs[i].style.color = 'white';
                    spans[i].style.color = 'white';
                    articles[i].style.color = 'white';
                }
                body.style.backgroundColor = 'black';
                nav.style.backgroundColor = 'black';
                for (let j = 0; j < main.length; j++) {
                    main[j].style.backgroundColor = 'black';
                }
                for (let k = 0; k < about.length; k++) {
                    about[k].style.color = 'white';
                }
                for (let l = 0; l < contact.length; l++) {
                    contact[l].style.color = 'white';
                }
                for (let m = 0; m < dark.length; m++) {
                    dark[m].style.color = 'white';
                }
                for (let n = 0; n < jokes.length; n++) {
                    jokes[n].style.color = 'white';
                }
                for (let o = 0; o < jo.length; o++) {
                    jo[o].style.color = 'white';
                }
            }
            else {
                for (let i = 0; i < paragraphs.length; i++) {
                    paragraphs[i].style.color = '';
                    spans[i].style.color = '';
                    articles[i].style.color = '';
                }
                body.style.backgroundColor = '';
                nav.style.backgroundColor = '';
                for (let j = 0; j < main.length; j++) {
                    main[j].style.backgroundColor = '';
                }
                for (let k = 0; k < about.length; k++) {
                    about[k].style.color = '';
                }
                for (let l = 0; l < contact.length; l++) {
                    contact[l].style.color = '';
                }
                for (let m = 0; m < dark.length; m++) {
                    dark[m].style.color = '';
                }
                for (let n = 0; n < jokes.length; n++) {
                    jokes[n].style.color = '';
                }
                for (let o = 0; o < jo.length; o++) {
                    jo[o].style.color = '';
                }
            }
        });
    }
});
