# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshot

![](./images/screenshot.png)

![](./images/screenshot2.png)

![](./images/screenshot3.png)

### Links

- Solution URL: [CODE](https://github.com/AngelDev2001/Calculator-app-main---AngelDev2001.git)
- Live Site URL: [DEMO]()

## My process

### Built with

- Semantic HTML5 markup
- CSS
- Flexbox
- Mobile-first workflow

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```js
if(pantalla.innerText !== ""){
  if (pantalla.innerText.includes("x")) {
    nuevaEcuacion = pantalla.innerText.replaceAll("x", "*");
  } else {
    nuevaEcuacion = pantalla.innerText;
  }
  
  pantalla.innerText = eval(nuevaEcuacion);
}else{
  pantalla.innerText = "";
}
```

## Author

- Frontend Mentor - [@AngelDev2001](https://www.frontendmentor.io/profile/AngelDev2001)