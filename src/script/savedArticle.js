import getJSONfromLocalStorage from "./getJSONfromLocalStorage";
import saveJSONtoLocalStorage from "./saveJSONtoLocalStorage";
import deleteJSONfromLocalStaorage from "./deleteJSONfromLocalStorage"

export function saveArticle(event) {
    let button
    if (event.target.innerHTML === "") button = event.target.parentElement
    else button = event.target
    button.innerHTML = '<i class="fa-solid fa-check-to-slot"></i>'
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
    
    const POPUPS = document.querySelector(".popupUndelet")
    
    DATA.forEach(function (object, index) {
        if (object.url === LINK) {
            let deleteTime = 120000 // 2 min
            let counter = deleteTime / 1000 
            const TIMER = setTimeout(deletePOPUP, deleteTime); 
            TIMER
            
            function deletePOPUP() {
                deleteJSONfromLocalStaorage("SavedArticles", index) 
                POPUP.outerHTML = ""
                if (LI.parentElement.childElementCount === 1) LI.parentElement.parentElement.outerHTML = ""
                else LI.outerHTML = ""
            }
            
            const POPUP = document.createElement("li")
            const UNDELET = document.createElement("button")
            UNDELET.innerHTML = "Undelet"
            const REMOVE = document.createElement("button")
            REMOVE.innerHTML = 'delet'
            POPUP.innerHTML = `<span>"${object.heading.split(" ").slice(0, 3).join(" ") + "..."}" will be deleted in <span class="counter"></span> seconds</span><span class="popupButtons"></span>`
            POPUP.querySelector(".popupButtons").append(UNDELET)
            POPUP.querySelector(".popupButtons").append(REMOVE)
            
            POPUPS.append(POPUP)

            function startCount() {
                counter--
                POPUP.querySelector(".counter").innerHTML = counter
                if (POPUP.parentElement) setTimeout(startCount, 1000);
            }
            startCount()

            UNDELET.addEventListener("click", function () {
                clearTimeout(TIMER)
                POPUP.outerHTML = ""
                return
            })
            REMOVE.addEventListener("click", function () {
                deletePOPUP()
            })
            
        }
    });
    
} 