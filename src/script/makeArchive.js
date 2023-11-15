import getJSONfromLocalStorage from "./getJSONfromLocalStorage";
import { CATEGORIES_ICONS } from "./savedInLocalstorage";
import { swipe } from "./swipe";

export default (function () {
    if (window.location.pathname !== "/archive") return // !window.location.pathname.includes("archive") || 
    
    const DATA = getJSONfromLocalStorage("SavedArticles")
    const MAIN = document.querySelector("main")
    const POPUPS = document.createElement("ul")
    POPUPS.classList.add("popupUndelet")
    MAIN.append(POPUPS)
    let categories = []

    DATA.forEach(object => {
        if (categories.includes(object.category)) return
        categories.push(object.category)
        let element = object.category
        
        const CATEGORY = document.createElement("section")
        let icon
        CATEGORIES_ICONS.forEach(object => {
            if (object.category === element) icon = object.icon
        })
        const BUTTON = document.createElement("button")
        BUTTON.classList.add("categoryButton")
        const ARTICLES = document.createElement("ul")
        BUTTON.innerHTML = `<i class="fa-solid fa-${icon}"></i>` + element + '<i class="fa-solid fa-chevron-right"></i>'
        BUTTON.addEventListener("click", function () {
            let direction
            
            if (ARTICLES.innerHTML !== "") {
                BUTTON.querySelector(".fa-chevron-down").style.animation = "rotateUp .5s"
                BUTTON.addEventListener("animationend", function() {
                    BUTTON.innerHTML = `<i class="fa-solid fa-${icon}"></i>` + element + '<i class="fa-solid fa-chevron-right"></i>'
                })
                direction = "Up"
                setTimeout(() => {
                    ARTICLES.innerHTML = ""
                }, 900)
            }
            else {
                BUTTON.querySelector(".fa-chevron-right").style.animation = "rotateDown .5s"
                BUTTON.addEventListener("animationend", function() {
                    BUTTON.innerHTML = `<i class="fa-solid fa-${icon}"></i>` + element + '<i class="fa-solid fa-chevron-down"></i>'
                })

                direction = "Down"

                getJSONfromLocalStorage("SavedArticles").forEach(function (object) {
                    if (object.category !== element) return
                    const LI = document.createElement("li")

                    LI.innerHTML = 
                    `<article>
                        <span class="articlesCategories" hidden>${object.category}</span>
                        <a href="${object.url}" target="_blank">
                        ${object.img 
                            ? `<img src="${object.img}">`
                            : ""}
                            <h1>${object.heading}</h1>
                            <p>${object.text}</p>
                        </a>
                        <button class="deleteButton"><i class="fa-solid fa-trash"></i></button>
                    </article>`

                    ARTICLES.append(LI)
                    
                })
                swipe()
            }
            ARTICLES.style.animation = `slide${direction} 1s`
            direction = null
        })
            
        CATEGORY.append(BUTTON)
        CATEGORY.append(ARTICLES)
        MAIN.append(CATEGORY)
    })
})()