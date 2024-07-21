document.addEventListener('DOMContentLoaded', () => {
  const jokeInterface = document.getElementById('jokeInterface') as HTMLElement;
  const loadJokeButton = document.getElementById('loadJoke') as HTMLButtonElement;

  loadJokeButton.addEventListener('click', () => {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        jokeInterface.innerText = `${data.setup} - ${data.punchline}`;document.addEventListener('DOMContentLoaded', () => {
          const jokeInterface = document.getElementById('jokeInterface') as HTMLElement;
          const loadJokeButton = document.getElementById('loadJoke') as HTMLButtonElement;
        
          if (!jokeInterface || !loadJokeButton) {
            console.error('Failed to find elements');
            return;
          }
        
          loadJokeButton.addEventListener('click', async () => {
            try {
              const response = await fetch('https://official-joke-api.appspot.com/random_joke');
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              const data = await response.json();
              jokeInterface.innerText = `${data.setup} - ${data.punchline}`;
            } catch (error) {
              jokeInterface.innerText = 'Failed to fetch a joke. Please try again!';
              console.error('Fetch error:', error);
            }
          });
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

if (darkMode) {
  darkMode.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
      for (let i = 0; i < paragraphs.length; i++) {
        (paragraphs[i] as HTMLElement).style.color = 'white';
        (spans[i] as HTMLElement).style.color = 'white';
        (articles[i] as HTMLElement).style.color = 'white';
      }
      (body as HTMLElement).style.backgroundColor = 'black';
      (nav as HTMLElement).style.backgroundColor = 'black';
      for (let j = 0; j < main.length; j++) {
        (main[j] as HTMLElement).style.backgroundColor = 'black';
      }
      for (let k = 0; k < about.length; k++) {
        (about[k] as HTMLElement).style.color = 'white';
      }
      for (let l = 0; l < contact.length; l++) {
        (contact[l] as HTMLElement).style.color = 'white';
      }
      for (let m = 0; m < dark.length; m++) {
        (dark[m] as HTMLElement).style.color = 'white';
      }
      for (let n = 0; n < jokes.length; n++) {
        (jokes[n] as HTMLElement).style.color = 'white';
      }
      for (let o = 0; o < jo.length; o++) {
        (jo[o] as HTMLElement).style.color = 'white';
      }
    } else {
      for (let i = 0; i < paragraphs.length; i++) {
        (paragraphs[i] as HTMLElement).style.color = '';
        (spans[i] as HTMLElement).style.color = '';
        (articles[i] as HTMLElement).style.color = '';
      }
      (body as HTMLElement).style.backgroundColor = '';
      (nav as HTMLElement).style.backgroundColor = '';
      for (let j = 0; j < main.length; j++) {
        (main[j] as HTMLElement).style.backgroundColor = '';
      }
      for (let k = 0; k < about.length; k++) {
        (about[k] as HTMLElement).style.color = '';
      }
      for (let l = 0; l < contact.length; l++) {
        (contact[l] as HTMLElement).style.color = '';
      }
      for (let m = 0; m < dark.length; m++) {
        (dark[m] as HTMLElement).style.color = '';
      }
      for (let n = 0; n < jokes.length; n++) {
        (jokes[n] as HTMLElement).style.color = '';
      }
      for (let o = 0; o < jo.length; o++) {
        (jo[o] as HTMLElement).style.color = '';
      }
    }
  });
 }
});