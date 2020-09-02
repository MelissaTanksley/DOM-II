// Your code goes here

// Mouse Over turns background red
// click turns background teal
const nav = document.querySelector('nav');
nav.addEventListener('mouseenter', event => {
    nav.style.background = 'red';
});

nav.addEventListener('click', event => {
    event.target.style.background = 'teal';
    console.log('nav got clicked');
});

// click turns text blue has prevent default
const aTags = document.querySelectorAll('a');
aTags.forEach(element => {
    element.addEventListener('click', event => {
        element.style.color = 'blue';
        alert(event.target.textContent + ' got clicked!');
        // prevent from going to top of page
        event.preventDefault();
    });
});

// click and target background turns light grey
const body = document.querySelector('body');
body.addEventListener('click', event => {
    event.target.style.background = 'lightGrey';
    console.log(event);
});

// mousover and mouseout hides and displays image
const imgs = document.querySelectorAll('img');
imgs.forEach(element => {
    element.addEventListener('mouseover', event => {
        element.style.visibility = 'hidden';
        console.log('mouseOver');
    });

    element.addEventListener('mouseout', event => {
        element.style.visibility = 'initial';
        console.log('mouseOut');
    });
});

// keydown turns textContent red
const textContent = document.querySelectorAll('.text-content');
document.addEventListener('keydown', event => {
    console.log(event);
    textContent.forEach(element => {
        element.style.color = 'red';
    });
});

// scroll event turns border red
const contentDestination = document.querySelector('.content-destination');
window.addEventListener('wheel', event => {
    contentDestination.style.border = '1px solid red';
});

const btn = document.querySelectorAll('.btn');

btn.forEach(element => {
    element.addEventListener('dragstart', event => {
        event.target.textContent = `Don't drag me!  Click me!`;
    });

    element.addEventListener('dragend', event => {
        event.target.textContent = "Sign Me Up!"
    })
});

// dblclick turns destination border blue
const destination = document.querySelectorAll('.destination');
console.log(destination)
destination.forEach(element => {
    element.addEventListener('dblclick', event => {
        event.target.style.border = '1px solid blue'
        console.log('double click')
    })
})

// window has focus event.  Changes footer text
const footer = document.querySelector('footer');
window.addEventListener('focus', () => {
    console.log('This Window is in Focus');
    footer.textContent = 'Window is in Focus';
}); 


/// playing///


const navContainer = document.querySelector ('.main-navigation');
navContainer.addEventListener (
  'mouseover',
  event => {
    event.stopPropagation ();
    event.target.style.backgroundColor = 'gold';
    setTimeout (() => {
      event.target.style.backgroundColor = '';
    }, 4000);
  },
  false
  );
  
    const h2s = document.querySelectorAll ('h2');
    window.addEventListener ('resize', blurBackground);
    const h2Color = () => {
      h2s.forEach (item => {
        item.style.color = 'gold';
        setTimeout (() => {
          item.style.color = '';
        }, 1000);
      });
    };
    const images = document.querySelectorAll ('img');
    const imgBlur = () => {
      images.forEach (item => {
        item.style.filter = 'blur(2px)';
        setTimeout (() => {
          item.style.filter = '';
        }, 1000);
      });
    };
    window.addEventListener ('scroll', h2Color);
    window.addEventListener ('scroll', imgBlur);
    //night light 1
    const lightSwitch = document.querySelector ('#lightSwitch');
    lightSwitch.addEventListener ('click', () => {
      if (bodyContent.style.backgroundColor === 'black') {
        bodyContent.style.backgroundColor = 'white';
        bodyContent.style.color = 'black';
      } else {
        bodyContent.style.backgroundColor = 'black';
        bodyContent.style.color = 'white';
      }
    });
    //night light 2
    debugger
    lightswitch.addEventListener ('dblclick', () => {
      if (bodyContent.style.backgroundColor === 'black') {
        bodyContent.style.backgroundColor = 'white';
        bodyContent.style.color = 'black';
      } else {
        bodyContent.style.backgroundColor = 'black';
        bodyContent.style.color = '#202020';
      }
    });