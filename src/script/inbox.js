import { categories , CATEGORIES_ICONS } from "./savedInLocalstorage";
import { swipe } from "./swipe";

export default (async function() {
    if (!window.location.pathname.includes("index.html") 
    || window.location.pathname != "/") return
    
    const COUNT = 7 // count of articles for each categorie - 1
    
    const MAIN = document.querySelector("main")
    
    categories.forEach(element => {
        const CATEGORY = document.createElement("section")
        let icon
        CATEGORIES_ICONS.forEach(object => {
            if (object.category === element) icon = object.icon
        })
        const BUTTON = document.createElement("button")
        BUTTON.classList.add("categoryButton")
        const ARTICLES = document.createElement("ul")
        BUTTON.innerHTML = `<i class="fa-solid fa-${icon}"></i>` + element + '<i class="fa-solid fa-chevron-right"></i>'
        BUTTON.addEventListener("click", function clickHandler() {
            BUTTON.innerHTML = `<i class="fa-solid fa-${icon}"></i>` + element + '<i class="fa-solid fa-chevron-down"></i>'
            
            if (ARTICLES.innerHTML !== "") {
                BUTTON.innerHTML = `<i class="fa-solid fa-${icon}"></i>` + element + '<i class="fa-solid fa-chevron-right"></i>'
                ARTICLES.innerHTML = ""
            }
            else {
                fetch(`https://api.nytimes.com/svc/topstories/v2/${element}.json?api-key=LNlTIFnb0NXHyHx2WdIRXyjml6HXIlLJ`)
                .then(function(response) {
                    if (response.status !== 200) 
                    throw new Error("fejlbesked")
                return response.json()
            })
            .then(function(data) {
                // console.log(data);
                
                data.results.forEach(object => {
                    if (object.item_type === "Article" || object.item_type === "Interactive") {
                        if (ARTICLES.childElementCount > COUNT) return
                        const LI = document.createElement("li")

                        if (object.multimedia) {
                            LI.innerHTML = 
                            `<article>
                                <span class="articlesCategories" hidden>${element}</span>
                                <a href="${object.url}" target="_blank">
                                    <img src="${object.multimedia[2].url}">
                                    <h1>${object.title}</h1>
                                    <p>${object.abstract}</p>
                                </a>
                                <button class="saveButton">${localStorage.getItem("SavedArticles").includes(object.url) 
                                ? '<i class="fa-solid fa-check-to-slot"></i>' 
                                : '<i class="fa-solid fa-inbox"></i>'}</button>
                            </article>`

                            ARTICLES.append(LI)
                            } 
                            else {
                                LI.innerHTML = `
                                <article>
                                    <span class="articlesCategories" hidden>${element}</span>
                                    <a href="${object.url}" target="_blank">
                                        <h1>${object.title}</h1>
                                        <p>${object.abstract}</p>
                                    </a>
                                    <button class="saveButton">${localStorage.getItem("SavedArticles").includes(object.url) 
                                    ? '<i class="fa-solid fa-check-to-slot"></i>' 
                                    : '<i class="fa-solid fa-inbox"></i>'}</button>
                                </article>`

                                ARTICLES.append(LI)
                            }
                        }
                        else return 
                    });
                    swipe()
                })
            }
        })
            
        CATEGORY.append(BUTTON)
        CATEGORY.append(ARTICLES)
        MAIN.append(CATEGORY)
    });

})()