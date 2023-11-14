import getJSONfromLocalStorage from "./getJSONfromLocalStorage";
import { CATEGORIES_ICONS } from "./savedInLocalstorage";
import { swipe } from "./swipe";

export default (function () {
    if (!window.location.pathname.includes("archive.html") || window.location.pathname !== "/archive") return
    
    const DATA = getJSONfromLocalStorage("SavedArticles")
    const MAIN = document.querySelector("main")
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
            BUTTON.innerHTML = `<i class="fa-solid fa-${icon}"></i>` + element + '<i class="fa-solid fa-chevron-down"></i>'
            
            if (ARTICLES.innerHTML !== "") {
                BUTTON.innerHTML = `<i class="fa-solid fa-${icon}"></i>` + element + '<i class="fa-solid fa-chevron-right"></i>'
                ARTICLES.innerHTML = ""
            }
            else {
                DATA.forEach(function (object) {
                    if (object.category !== element) return
                    const LI = document.createElement("li")

                    if (object.img) {
                        LI.innerHTML = 
                        `<article>
                            <a href="${object.url}" target="_blank">
                                <img src="${object.img}">
                                <h1>${object.heading}</h1>
                                <p>${object.text}</p>
                            </a>
                            <button class="deleteButton"><i class="fa-solid fa-trash"></i></button>
                        </article>`

                        ARTICLES.append(LI)
                    } 
                    else {
                        LI.innerHTML = `
                        <article>
                            <a href="${object.url}" target="_blank">
                                <h1>${object.heading}</h1>
                                <p>${object.text}</p>
                            </a>
                            <button class="deleteButton"><i class="fa-solid fa-trash"></i></button>
                        </article>`

                        ARTICLES.append(LI)
                    }
                });
                swipe()
            }
        })
            
        CATEGORY.append(BUTTON)
        CATEGORY.append(ARTICLES)
        MAIN.append(CATEGORY)
    })
})()