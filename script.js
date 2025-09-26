// let lightmode = localStorage.getItem("lightmode");
// if (lightmode == null) {
//     lightmode = false;
// }

addEventListener("load",() => {
    const title = document.querySelector(".title");
    const greetings = document.querySelector(".greetings");
    var date = new Date();
    var time = date.getHours();
    const timeofday = time >= 0 && time < 12 ? "morning" : time >= 12 && time < 18 ? "afternoon" : time >= 18 ? "evening" : "";
    // title.innerHTML = timeofday;
    greetings.innerHTML = `Good ${timeofday}!👋`;
    // if (time >= 0 && time < 12) {
    //     title.innerHTML = "☀️ Morning";
    //     greetings.innerHTML = "☀️Morning,<br>I'm ryp 👋";
    //     // switchTheme();
    // } else if (time >= 12 && time < 18) {
    //     title.innerHTML = "🌤️ Afternoon";
    //     greetings.innerHTML = "🌤️Afternoon,<br>I'm ryp 👋";
    //     // switchTheme();
    // } else if (time >= 18) {
    //     title.innerHTML = "🌙 Evening";
    //     greetings.innerHTML = "🌙 Evening,<br>I'm ryp 👋";
    // }

    // console.log(lightmode);
    // setTheme(lightmode);
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