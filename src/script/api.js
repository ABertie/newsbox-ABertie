import { categories } from "./setCategories";

export default (async function() {
    if (!window.location.pathname.includes("index.html")) return

    const COUNT = 7 // count of articles for each categorie - 1
    
    const MAIN = document.querySelector("main")
    
    categories.forEach(element => {
        const CATEGORY = document.createElement("section")
        const BUTTON = document.createElement("button")
        const ARTICLES = document.createElement("div")
        BUTTON.innerHTML = element
        BUTTON.addEventListener("click", function clickHandler() {
            
            if (ARTICLES.innerHTML !== "") {
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

                            if (object.multimedia) {
                                const ARTICLE = document.createElement("article")
                                ARTICLE.innerHTML = `
                                <img src="${object.multimedia[2].url}">
                                <h1>${object.title}</h1>
                                <p>${object.abstract}</p>`

                                ARTICLES.append(ARTICLE)
                            } 
                            else {
                                const ARTICLE = document.createElement("article")
                                ARTICLE.innerHTML = `
                                <h1>${object.title}</h1>
                                <p>${object.abstract}</p>`

                                ARTICLES.append(ARTICLE)
                            }
                        }
                        else return 
                    });
                })
                }
            })
            
            CATEGORY.append(BUTTON)
            CATEGORY.append(ARTICLES)
            MAIN.append(CATEGORY)
    });

})()