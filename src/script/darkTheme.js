export default (function () {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches 
    && localStorage.getItem("theme") !== "lightTheme") {
        localStorage.setItem("theme", "darkTheme")
    }
    else if(!localStorage.getItem("theme")) {
        localStorage.setItem("theme", "lightTheme")
    } 
    
    if (localStorage.getItem("theme") === "darkTheme") {
        document.body.classList.add(localStorage.getItem("theme"))
    }
    
    if (window.location.pathname !== "/settings") return // !window.location.pathname.includes("settings.html") || 

    const BUTTON = document.querySelector(".themeButton")
    BUTTON.innerHTML = `Toggle ${localStorage.getItem("theme") === "darkTheme" ? "light" : "dark"} mode`

    BUTTON.addEventListener("click", clickHandler)

    function clickHandler() {
        const CLASS_LIST = document.body.classList
        CLASS_LIST.toggle("darkTheme")
        localStorage.setItem("theme", CLASS_LIST.contains("darkTheme")
        ? "darkTheme"
        : "lightTheme")

        BUTTON.innerHTML = `Toggle ${localStorage.getItem("theme") === "darkTheme" ? "light" : "dark"} mode`
    }

})()