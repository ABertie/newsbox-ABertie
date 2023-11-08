import getJSONfromLocalStorage from "./getJSONfromLocalStorage";
import saveJSONtoLocalStorage from "./saveJSONtoLocalStorage";
import deleteJSONfromLocalStaorage from "./deleteJSONfromLocalStorage"

export function saveArticle(event) {
    let button
    if (event.target.innerHTML === "") button = event.target.parentElement
    else button = event.target
    const LI = button.parentElement.parentElement
    const LINK = LI.querySelector("a").href
    
    if (localStorage.getItem("SavedArticles").includes(LINK)) return

    saveJSONtoLocalStorage("SavedArticles", {
        url: LI.querySelector("a").href,
        category: LI.querySelector("span").innerHTML,
        img: LI.querySelector("img").src || null,
        heading: LI.querySelector("h1").innerHTML,
        text: LI.querySelector("p").innerHTML
    })
}

export function deleteArticle(event) {
    let button
    if (event.target.innerHTML === "") button = event.target.parentElement
    else button = event.target
    const LI = button.parentElement.parentElement
    const DATA = getJSONfromLocalStorage("SavedArticles")
    const LINK = LI.querySelector("a").href
    
    DATA.forEach(function (object, index) {
        if (object.url === LINK) {
            if (confirm("Are you sure you want to delete whis article")) {
                deleteJSONfromLocalStaorage("SavedArticles", index) 
                LI.outerHTML = ""
            }
        }
    });

} 