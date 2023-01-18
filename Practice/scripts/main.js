const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/gura.png") {
        myImage.setAttribute("src", "images/gura2.png");
    } else {
        myImage.setAttribute("src", "images/gura.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = 'Gura is cute, ' + myName;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = 'Gura is cute, ' + storedName;
}

myButton.onclick = () => {
    setUserName();
};