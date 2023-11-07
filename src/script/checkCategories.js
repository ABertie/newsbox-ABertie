import { categories } from "./savedInLocalstorage";
import { ORIGINAL_CATEGORIES } from "./savedInLocalstorage";

export default (function () {
    if (!window.location.pathname.includes("settings.html")) return

    const CHECKLIST = document.querySelector(".categoriesChecklist")
    
    ORIGINAL_CATEGORIES.forEach(elem => {
        const LABEL = document.createElement("label")
        LABEL.innerHTML = `${elem}<input type="checkbox" name="${elem}" ${localStorage.getItem("SavedCategories").includes(elem) ? "checked" : ""}>`
        CHECKLIST.append(LABEL)
        
    })
    
    const INPUT = CHECKLIST.querySelectorAll("input")
    

    INPUT.forEach(input => {
        input.addEventListener("click", checkhandler)

        function checkhandler() {
            if (input.checked === false) {
                let start = categories.slice(0, categories.indexOf(input.name))
                let end = categories.slice(categories.indexOf(input.name) + 1, categories.length)
                categories = start.concat(end)
                sortAndSaveCategories()
                }
            else {
                categories.push(input.name)
                sortAndSaveCategories()
            }
            function sortAndSaveCategories() {
                categories.sort()
                localStorage.setItem("SavedCategories", categories)
            }
        }
    })
})()