import { categories } from "./savedInLocalstorage";
import getJSONfromLocalStorage from "./getJSONfromLocalStorage";
import { swipe } from "./swipe";

export default (function () {
    if (!window.location.pathname.includes("archive.html")) return
    
    const DATA = getJSONfromLocalStorage("SavedArticles")
    const MAIN = document.querySelector("main")
    
    categories.forEach(element => {
        const CATEGORY = document.createElement("section")
        const BUTTON = document.createElement("button")
        const ARTICLES = document.createElement("ul")
        BUTTON.innerHTML = element
        BUTTON.addEventListener("click", function () {
    
            if (ARTICLES.innerHTML !== "") {
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