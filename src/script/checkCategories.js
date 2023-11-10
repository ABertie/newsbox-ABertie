import { categories , CATEGORIES_ICONS } from "./savedInLocalstorage";

export default (function () {
    if (!window.location.pathname.includes("settings.html")) return

    const CHECKLIST = document.querySelector(".categoriesChecklist")
    
    CATEGORIES_ICONS.forEach(object => {
        let category = object.category
        let icon = object.icon
        const LABEL = document.createElement("label")
        LABEL.innerHTML = `<!-- <i class="fa-solid fa-${icon}"></i> -->${category}<input type="checkbox" name="${category}" ${localStorage.getItem("SavedCategories").includes(category) ? "checked" : ""}><span class="slider"></span>`
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