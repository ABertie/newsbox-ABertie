import getJSONfromLocalStorage from "./getJSONfromLocalStorage";
import saveJSONtoLocalStorage from "./saveJSONtoLocalStorage";
// import deleteJSONfromLocalStaorage from "./deleteJSONfromLocalStorage"

export function saveArticle(event) {
    const DATA = getJSONfromLocalStorage("SaveArticles")
    const ARTICLE = event.target.parentElement

    saveJSONtoLocalStorage("SaveArticles", {
        category: ARTICLE.querySelector("span").innerHTML,
        img: ARTICLE.querySelector("img").src,
        heading: ARTICLE.querySelector("h1").innerHTML,
        text: ARTICLE.querySelector("p").innerHTML
    })
}