// let lightmode = localStorage.getItem("lightmode");
// if (lightmode == null) {
//     lightmode = false;
// }

addEventListener("load",() => {
    const title = document.querySelector(".title");
    const greetElement = document.querySelector(".greetings");
    var date = new Date();
    var time = date.getHours();
    let greetings;
    if (time >= 5 && time < 12) {
        greetings = "Good morning!☕";
    } else if (time >= 12 && time < 18) {
        greetings = "Good afternoon!🌤️";
    } else if (time >= 18 && time < 21) {
        greetings = "Good evening!🌙";
        document.body.classList.add("dark-mode");
    } else if (time >= 21 && time < 24) {
        greetings = "Good night!🥱";
        document.body.classList.add("dark-mode");
    } else if (time < 5) {
        greetings = "You're still up?😴";
        document.body.classList.add("dark-mode");
    }
    greetElement.innerHTML = greetings;
})

function copyemail(e) {
    // console.log(e.innerHTML);
    navigator.clipboard.writeText(e.innerHTML);
}

// function switchTheme() {
//     lightmode = !lightmode;
//     console.log(lightmode);
//     setTheme(lightmode);
// }

// function setTheme(state) {
//     const themetoggle = document.querySelector(".theme-toggle");
//     localStorage.setItem("lightmode", state);
//     if (state == true) {
//         console.log("light");
//         document.body.classList.add("light-mode");
//         themetoggle.innerHTML = "🌙";
//     } else if (state == false) {
//         console.log("dark");
//         document.body.classList.remove("light-mode");
//         themetoggle.innerHTML = "☀️";
//     }
// }

function darkmode() {
    open("https://chromewebstore.google.com/detail/dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh");
}